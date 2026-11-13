// Browser-to-browser spectator sessions. PeerJS Cloud is used for signaling;
// no score or question data is stored by this app on a remote server.
// The host is the only authority for gameplay mutations.
const PREFIX = "living-room-battles-40-";
const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
export const MAX_DEVICES = 5; // host + 4 spectators

export function makeSessionCode(cryptoSource = globalThis.crypto) {
  const bytes = new Uint8Array(8);
  if (cryptoSource?.getRandomValues) cryptoSource.getRandomValues(bytes);
  else for (let i = 0; i < bytes.length; i++) bytes[i] = Math.floor(Math.random() * 256);
  return [...bytes].map((n) => ALPHABET[n % ALPHABET.length]).join("");
}

export function normalizeSessionCode(value) {
  return String(value || "").toUpperCase().replace(/[^A-Z2-9]/g, "").slice(0, 8);
}

export class SessionLink {
  constructor({ onStatus = () => {}, onState = () => {}, getState = () => null } = {}) {
    this.role = "solo";
    this.code = "";
    this.peer = null;
    this.connections = new Set();
    this.onStatus = onStatus;
    this.onState = onState;
    this.getState = getState;
    this.lastBroadcastAt = 0;
  }

  get connected() { return this.role === "host" ? this.connections.size + 1 : this.role === "guest" ? (this.connection?.open ? 1 : 0) : 0; }

  requirePeer() {
    const Peer = globalThis.Peer || globalThis.window?.Peer;
    if (typeof Peer !== "function") throw new Error("Online sessions could not load. Check your internet connection and reload the page.");
    return Peer;
  }

  host() {
    const Peer = this.requirePeer();
    this.close();
    this.role = "host";
    this.code = makeSessionCode();
    this.peer = new Peer(PREFIX + this.code);
    this.onStatus("Connecting to the session service…");
    this.peer.on("open", () => this.onStatus("Session ready! Share the code. Keep the host page open."));
    this.peer.on("connection", (conn) => {
      if (this.connections.size >= MAX_DEVICES - 1) {
        conn.on("open", () => { conn.send({ type: "reject", message: "This session already has five devices." }); setTimeout(() => conn.close(), 300); });
        return;
      }
      this.connections.add(conn);
      conn.on("open", () => { conn.send({ type: "state", state: this.getState() }); this.onStatus(`${this.connected} of ${MAX_DEVICES} devices connected.`); });
      conn.on("close", () => { this.connections.delete(conn); this.onStatus(`${this.connected} of ${MAX_DEVICES} devices connected.`); });
      conn.on("error", () => { this.connections.delete(conn); this.onStatus("A guest disconnected. They can rejoin with the code."); });
    });
    this.peer.on("error", (error) => this.onStatus(`Session error: ${error?.message || "Connection failed"}. Try again or play on one device.`));
    this.peer.on("disconnected", () => this.onStatus("Host lost the signaling connection. Reconnect internet or make a new session."));
    return this.code;
  }

  join(rawCode) {
    const code = normalizeSessionCode(rawCode);
    if (code.length !== 8) throw new Error("Enter the eight-character session code.");
    const Peer = this.requirePeer();
    this.close();
    this.role = "guest";
    this.code = code;
    this.peer = new Peer();
    this.onStatus("Connecting to host…");
    this.peer.on("open", () => {
      const conn = this.peer.connect(PREFIX + code, { reliable: true });
      this.connection = conn;
      conn.on("open", () => this.onStatus("Connected! You can read cards; only the host controls the game."));
      conn.on("data", (message) => {
        if (message?.type === "reject") { this.onStatus(message.message); conn.close(); }
        else if (message?.type === "state" && message.state?.version === "4.5") this.onState(message.state);
      });
      conn.on("close", () => this.onStatus("Host disconnected. Ask the host for a new session code."));
      conn.on("error", () => this.onStatus("Could not connect to the host. Check the code and try again."));
    });
    this.peer.on("error", (error) => this.onStatus(`Connection error: ${error?.message || "Host unavailable"}. Check the code.`));
    return code;
  }

  broadcast(state) {
    if (this.role !== "host") return;
    // Keep timers visually fresh without saturating mobile connections.
    const now = Date.now();
    if (now - this.lastBroadcastAt < 180 && state.timerRunning) return;
    this.lastBroadcastAt = now;
    for (const conn of this.connections) if (conn.open) {
      try { conn.send({ type: "state", state }); } catch { /* a dropped peer is removed by its close/error listener */ }
    }
  }

  close() {
    if (this.connection) { try { this.connection.close(); } catch {} }
    for (const conn of this.connections) { try { conn.close(); } catch {} }
    this.connections.clear();
    if (this.peer) { try { this.peer.destroy(); } catch {} }
    this.peer = null;
    this.connection = null;
    this.role = "solo";
    this.code = "";
  }
}
