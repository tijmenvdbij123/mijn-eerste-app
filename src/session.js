// Live host/guest spectator sessions over PeerJS.
// V4.19: retransmit state snapshots and let guests request the latest state.
// A missed transition is corrected automatically, including when a phone wakes.
// The host remains the only authority for gameplay and scoring.
const PREFIX = 'living-room-battles-40-';
const ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
export const MAX_DEVICES = 5; // host + 4 guests
export const SESSION_SYNC_MS = 2000;

export function makeSessionCode(cryptoSource = globalThis.crypto) {
  const bytes = new Uint8Array(8);
  if (cryptoSource?.getRandomValues) cryptoSource.getRandomValues(bytes);
  else for (let i = 0; i < bytes.length; i++) bytes[i] = Math.floor(Math.random() * 256);
  return [...bytes].map((n) => ALPHABET[n % ALPHABET.length]).join('');
}

export function normalizeSessionCode(value) {
  return String(value || '').toUpperCase().replace(/[^A-Z2-9]/g, '').slice(0, 8);
}

function periodic(fn, interval) {
  const id = setInterval(fn, interval);
  id?.unref?.(); // tests in Node should not be held open by idle sessions
  return id;
}

export class SessionLink {
  constructor({ onStatus = () => {}, onState = () => {}, getState = () => null } = {}) {
    this.role = 'solo';
    this.code = '';
    this.peer = null;
    this.connection = null;
    this.connections = new Set();
    this.onStatus = onStatus;
    this.onState = onState;
    this.getState = getState;
    this.lastBroadcastAt = 0;
    this.revision = 0;
    this.lastReceivedRevision = -1;
    this.statusMessage = null;
    this.hostHeartbeat = null;
    this.guestPoll = null;
    this.reconnectTimer = null;
    this.connectTimeout = null;
    this.lastSnapshotAt = 0;
    this.retryCount = 0;
    this.rejected = false;
  }

  get connected() {
    if (this.role === 'host') return 1 + [...this.connections].filter(conn => conn.open).length;
    return this.role === 'guest' && this.connection?.open ? 1 : 0;
  }

  status(message) {
    if (message === this.statusMessage) return;
    this.statusMessage = message;
    this.onStatus(message);
  }

  requirePeer() {
    const Peer = globalThis.Peer || globalThis.window?.Peer;
    if (typeof Peer !== 'function') throw new Error('Online sessions could not load. Check your internet connection and reload the page.');
    return Peer;
  }

  snapshot(conn) {
    if (this.role !== 'host' || !conn?.open) return;
    try { conn.send({ type: 'state', revision: this.revision, state: this.getState() }); }
    catch { /* A poll or the next connection refresh will recover the latest state. */ }
  }

  host() {
    const Peer = this.requirePeer();
    this.close();
    this.role = 'host';
    this.code = makeSessionCode();
    this.peer = new Peer(PREFIX + this.code);
    this.status('Connecting to the session service…');
    this.peer.on('open', () => {
      if (this.role !== 'host') return;
      this.status('Session ready! Share the code. Keep the host page open.');
      // Re-send even unchanged game/score states. This heals a lost A→B
      // transition without requiring guests to type the code again.
      if (!this.hostHeartbeat) this.hostHeartbeat = periodic(() => this.resync(), SESSION_SYNC_MS);
    });
    this.peer.on('connection', conn => {
      if (this.role !== 'host') return conn.close();
      if (this.connections.size >= MAX_DEVICES - 1) {
        conn.on('open', () => {
          conn.send({ type: 'reject', message: 'This session already has five devices.' });
          const id = setTimeout(() => conn.close(), 300); id?.unref?.();
        });
        return;
      }
      this.connections.add(conn);
      conn.on('open', () => {
        this.snapshot(conn);
        this.status(`${this.connected} of ${MAX_DEVICES} devices connected.`);
      });
      // Guests may ask for the latest state at any time. Other messages are
      // ignored: guests never mutate the game state through the session.
      conn.on('data', message => { if (message?.type === 'request-state') this.snapshot(conn); });
      const disconnected = () => {
        this.connections.delete(conn);
        if (this.role === 'host') this.status(`${this.connected} of ${MAX_DEVICES} devices connected.`);
      };
      conn.on('close', disconnected);
      conn.on('error', disconnected);
    });
    this.peer.on('error', error => this.status(`Session error: ${error?.message || 'Connection failed'}. Try again or play on one device.`));
    this.peer.on('disconnected', () => {
      if (this.role !== 'host') return;
      this.status('Signaling disconnected. Attempting to reconnect…');
      try { this.peer.reconnect?.(); } catch { /* Existing guest links may still be alive. */ }
    });
    return this.code;
  }

  guestConnection() {
    if (this.role !== 'guest' || !this.peer || this.peer.destroyed || this.rejected) return;
    if (this.connection && (this.connection.open || this.connection._connecting)) return;
    let conn;
    try { conn = this.peer.connect(PREFIX + this.code, { reliable: true }); }
    catch { return this.scheduleReconnect(); }
    if (!conn) return this.scheduleReconnect();
    this.connection = conn;
    conn._connecting = true;
    this.clearConnectionTimeout();
    this.connectTimeout = setTimeout(() => {
      if (this.role !== 'guest' || this.connection !== conn || conn.open) return;
      this.connection = null;
      try { conn.close(); } catch {}
      this.status('Host connection timed out. Retrying…');
      this.scheduleReconnect();
    }, 8000);
    this.connectTimeout?.unref?.();
    conn.on('open', () => {
      if (this.role !== 'guest' || this.connection !== conn) return;
      conn._connecting = false;
      this.clearConnectionTimeout();
      this.lastSnapshotAt = Date.now();
      this.retryCount = 0;
      this.clearReconnect();
      this.status('Connected! Game and scores update automatically from the host.');
      this.resync();
      if (!this.guestPoll) this.guestPoll = periodic(() => this.resync(), SESSION_SYNC_MS);
    });
    conn.on('data', message => {
      if (this.role !== 'guest' || this.connection !== conn) return;
      if (message?.type === 'reject') {
        this.rejected = true;
        this.status(message.message || 'The host rejected this connection.');
        conn.close();
      } else if (message?.type === 'state' && message.state?.version === "4.19") {
        const revision = Number.isSafeInteger(message.revision) ? message.revision : 0;
        if (revision <= this.lastReceivedRevision) return; // ignore stale / duplicate packets
        this.lastReceivedRevision = revision;
        this.lastSnapshotAt = Date.now();
        this.onState(message.state);
      } else if (message?.type === 'state' && message.state?.version && message.state.version !== "4.19") {
        this.rejected = true;
        this.status('Different website versions detected. Update every device to V4.19, then rejoin.');
        conn.close();
      }
    });
    const lost = () => {
      if (this.role !== 'guest' || this.connection !== conn || this.rejected) return;
      conn._connecting = false;
      this.clearConnectionTimeout();
      this.connection = null;
      this.status('Connection interrupted. Reconnecting automatically…');
      this.scheduleReconnect();
    };
    conn.on('close', lost);
    conn.on('error', lost);
  }

  openGuestPeer() {
    if (this.role !== 'guest') return;
    const Peer = this.requirePeer();
    this.peer = new Peer();
    const peer = this.peer;
    peer.on('open', () => { if (this.role === 'guest' && this.peer === peer) this.guestConnection(); });
    peer.on('error', error => {
      if (this.role !== 'guest' || this.peer !== peer) return;
      this.status(`Host unavailable (${error?.message || 'connection error'}). Trying again…`);
      this.scheduleReconnect();
    });
    peer.on('disconnected', () => {
      if (this.role !== 'guest' || this.peer !== peer) return;
      try { peer.reconnect?.(); } catch { this.scheduleReconnect(); }
    });
  }

  join(rawCode) {
    const code = normalizeSessionCode(rawCode);
    if (code.length !== 8) throw new Error('Enter the eight-character session code.');
    this.requirePeer();
    this.close();
    this.role = 'guest';
    this.code = code;
    this.status('Connecting to host…');
    this.openGuestPeer();
    return code;
  }

  clearConnectionTimeout() {
    if (this.connectTimeout) clearTimeout(this.connectTimeout);
    this.connectTimeout = null;
  }

  scheduleReconnect() {
    if (this.role !== 'guest' || this.rejected || this.reconnectTimer) return;
    const delay = Math.min(10000, 700 * 2 ** Math.min(this.retryCount++, 4));
    this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null;
      if (this.role !== 'guest' || this.rejected) return;
      if (!this.peer || this.peer.destroyed) return this.openGuestPeer();
      if (this.peer.disconnected) {
        try { this.peer.reconnect?.(); } catch { /* Will use a fresh peer below. */ }
      }
      if (!this.peer.open) {
        try { this.peer.destroy(); } catch {}
        return this.openGuestPeer();
      }
      this.guestConnection();
    }, delay);
    this.reconnectTimer?.unref?.();
  }

  clearReconnect() {
    if (this.reconnectTimer) clearTimeout(this.reconnectTimer);
    this.reconnectTimer = null;
  }

  resync() {
    if (this.role === 'host') {
      for (const conn of this.connections) this.snapshot(conn);
    } else if (this.role === 'guest') {
      if (this.connection?.open) {
        // When a link stays technically "open" but stops delivering replies,
        // force a new transport instead of showing an old round indefinitely.
        if (this.lastSnapshotAt && Date.now() - this.lastSnapshotAt > SESSION_SYNC_MS * 6) {
          const stale = this.connection;
          this.connection = null;
          try { stale.close(); } catch {}
          this.status('Connection lost its updates. Reconnecting automatically…');
          return this.scheduleReconnect();
        }
        try { this.connection.send({ type: 'request-state', lastRevision: this.lastReceivedRevision }); }
        catch { this.scheduleReconnect(); }
      } else if (!this.reconnectTimer && !this.rejected) this.scheduleReconnect();
    }
  }

  broadcast(state) {
    if (this.role !== 'host') return;
    this.revision++; // a logical change is detectable even if the tick is throttled
    const now = Date.now();
    if (now - this.lastBroadcastAt < 180 && state.timerRunning) return;
    this.lastBroadcastAt = now;
    for (const conn of this.connections) if (conn.open) {
      try { conn.send({ type: 'state', revision: this.revision, state }); }
      catch { /* Next heartbeat or guest request corrects missed data. */ }
    }
  }

  close() {
    if (this.hostHeartbeat) clearInterval(this.hostHeartbeat);
    if (this.guestPoll) clearInterval(this.guestPoll);
    this.hostHeartbeat = null;
    this.guestPoll = null;
    this.clearReconnect();
    this.clearConnectionTimeout();
    if (this.connection) { try { this.connection.close(); } catch {} }
    for (const conn of this.connections) { try { conn.close(); } catch {} }
    this.connections.clear();
    if (this.peer) { try { this.peer.destroy(); } catch {} }
    this.peer = null;
    this.connection = null;
    this.role = 'solo';
    this.code = '';
    this.revision = 0;
    this.lastReceivedRevision = -1;
    this.lastBroadcastAt = 0;
    this.retryCount = 0;
    this.lastSnapshotAt = 0;
    this.rejected = false;
    this.statusMessage = null;
  }
}
