import { CATEGORIES, GAMES, MODE_NAMES } from "./games.js";
import { makeInitialState, makeTeam, validateSetup, availableGames, startGame, finishRound, restartToSetup, totalTurns, currentCycle, estimatedMinutes } from "./engine.js";

const STORAGE_KEY = "living-room-battles-v2";
const root = document.querySelector("#app");
const escapeHtml = (value = "") => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
})[character]);

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved?.version === 2 && Array.isArray(saved.teams) && Array.isArray(saved.enabledCategories)) {
      saved.timerRunning = false; // after a refresh, resume deliberately
      saved.categoryDialog = false;
      if (saved.currentRound?.revealUsed && saved.currentRound?.revealRemaining != null) {
        saved.currentRound.promptVisible = false; // timed secret cards never reopen on refresh
        saved.currentRound.revealRemaining = 0;
      }
      if (saved.screen === "play" && !saved.currentRound) return makeInitialState();
      return saved;
    }
  } catch { /* a corrupted browser cache should not stop the app */ }
  return makeInitialState();
}

let state = loadState();
let timerId = null;
let revealId = null;
let revealDeadline = 0;
let timerStartedAt = 0;
let timerStartedWith = 150;
let latestError = "";

function save() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch { /* private browsing may block storage */ }
}

function categoryById(id) { return CATEGORIES.find((item) => item.id === id); }
function currentGame() { return GAMES.find((game) => game.id === state.currentRound?.gameId); }
function currentPrompt() { const game = currentGame(); return game?.prompts[state.currentRound.promptIndex]; }
function activeTeam() { return state.teams[state.turnIndex]; }
function formatTime(seconds) { return `${Math.floor(seconds / 60).toString().padStart(2, "0")}:${(seconds % 60).toString().padStart(2, "0")}`; }

function button(label, action, variant = "soft", extra = "", disabled = false) {
  return `<button type="button" class="btn btn-${variant} ${extra}" data-action="${action}" ${disabled ? "disabled" : ""}>${label}</button>`;
}

function categoryTiles(inModal = false) {
  return `<div class="category-grid">${CATEGORIES.map((category) => {
    const selected = state.enabledCategories.includes(category.id);
    const count = GAMES.filter((game) => game.category === category.id).length;
    return `<label class="category-tile ${selected ? "selected" : ""}">
      <input type="checkbox" data-role="category" value="${category.id}" ${selected ? "checked" : ""} />
      <span class="cat-icon color-${category.color}">${escapeHtml(category.icon)}</span>
      <span class="category-copy"><strong>${escapeHtml(category.name)}</strong><small>${count} minigames</small></span>
      <span class="check-indicator">${selected ? "✓" : "+"}</span>
    </label>`;
  }).join("")}</div>
  <div class="category-footer"><span><strong>${state.enabledCategories.length}</strong> of ${CATEGORIES.length} categories enabled</span>
    <div class="category-actions">${button("Select all", "select-all", "text")}${button("Clear", "clear-categories", "text")}</div>
  </div>${inModal ? '<p class="fine-print">Changes apply to the next round, not the challenge already on screen.</p>' : ""}`;
}

function teamEditor(team, index) {
  const badge = String(index + 1).padStart(2, "0");
  return `<div class="team-editor">
    <div class="team-editor-head"><span class="team-index">${badge}</span><div class="team-label"><span>TEAM ${index + 1}</span><strong>Choose your side</strong></div>
      ${state.teams.length > 2 ? `<button class="icon-button danger" title="Remove team" aria-label="Remove team ${index+1}" data-action="remove-team" data-index="${index}">×</button>` : ""}
    </div>
    <label class="input-label">Team name <input aria-label="Team ${index+1} name" data-role="team-name" data-index="${index}" maxlength="32" value="${escapeHtml(team.name)}" /></label>
    <div class="players-title"><span>PLAYERS</span><span>${team.players.length} / 3</span></div>
    <div class="player-fields">${team.players.map((player, playerIndex) => `<div class="player-row"><span class="player-number">${playerIndex + 1}</span>
      <input aria-label="Team ${index+1} player ${playerIndex+1} name" data-role="player-name" data-index="${index}" data-player-index="${playerIndex}" maxlength="32" value="${escapeHtml(player)}" />
      ${playerIndex === 2 ? `<button class="mini-remove" title="Remove third player" aria-label="Remove third player" data-action="remove-player" data-index="${index}">×</button>` : ""}</div>`).join("")}</div>
    ${team.players.length < 3 ? `<button type="button" class="add-player" data-action="add-player" data-index="${index}">+ Add third player</button>` : ""}
  </div>`;
}

function renderSetup() {
  const gameCount = availableGames(state).length;
  return `<section class="setup-intro">
    <div class="eyebrow"><span class="eyebrow-line"></span> YOUR NEXT GAME NIGHT STARTS HERE</div>
    <h1>Make the room<br/><em>your arena.</em></h1>
    <p>Bring your people, pick your favorite challenges, and let the friendly rivalry begin. Quick living-room games. One point at a time.</p>
    <div class="intro-stats"><div><strong>2–3</strong><span>players per team</span></div><i></i><div><strong>~3 min</strong><span>per team turn</span></div><i></i><div><strong>${gameCount}</strong><span>available games</span></div></div>
    <div class="intro-decoration" aria-hidden="true"><div class="decor-card decor-a">✳ <small>PLAY TOGETHER</small></div><div class="decor-card decor-b">✦ <small>PLAY TO WIN</small></div><div class="decor-star">✶</div></div>
  </section>
  <section class="setup-content">
    <div class="section-heading"><div><div class="step-label">STEP 01 <span>—</span> YOUR SQUAD</div><h2>Who's playing?</h2><p>Rename your teams and enter every player's name.</p></div><span class="section-count">${state.teams.length} TEAMS</span></div>
    <div class="team-grid">${state.teams.map(teamEditor).join("")}</div>
    <div class="add-team-wrap">${state.teams.length < 6 ? button('<span class="plus-symbol">+</span> Add another team', 'add-team', 'outline', 'full') : '<span class="fine-print">Maximum six teams reached.</span>'}</div>
    <div class="section-heading rounds-heading"><div><div class="step-label">STEP 02 <span>—</span> GAME LENGTH</div><h2>How many rounds?</h2><p>One round means every team gets exactly one turn, in order.</p></div></div>
    <div class="rounds-config"><label class="input-label" for="rounds-input">Rounds per team <input id="rounds-input" type="number" data-role="round-count" min="1" max="20" step="1" value="${state.roundsPerTeam}" /></label><div class="duration-estimate"><span>ESTIMATED GAME LENGTH</span><strong id="duration-estimate">~${estimatedMinutes(state)} minutes</strong><small id="duration-detail">${totalTurns(state)} turns overall · ~${state.teams.length * 3} minutes per full round</small></div></div>
    <p class="rounds-explainer">Estimate: about 2 minutes 30 seconds for most challenges, plus ~30 seconds to read rules, judge, and switch teams. Some shorter minigames take only 30 seconds.</p>
    <div class="section-heading categories-heading"><div><div class="step-label">STEP 03 <span>—</span> YOUR VIBE</div><h2>Pick your categories.</h2><p>All categories are on by default. Turn off anything your group doesn't fancy.</p></div><span class="section-count">${gameCount} GAMES</span></div>
    ${categoryTiles()}
    <div class="setup-launch"><div><strong>Ready to rumble?</strong><span>One device controls the game. Your setup is saved in this browser.</span></div>
      ${button('Start the game <span class="arrow">↗</span>', 'start-game', 'primary', 'launch-button')}</div>
    ${latestError ? `<p class="form-error" role="alert">${escapeHtml(latestError)}</p>` : ""}
  </section>`;
}

function scoreboard() {
  return `<div class="scoreboard" aria-label="Scoreboard">${state.teams.map((team, index) => `<div class="score-tile ${index === state.turnIndex ? "is-active" : ""}">
    <div class="score-team"><span class="score-team-dot"></span>${escapeHtml(team.name)} ${index === state.turnIndex ? '<span class="turn-flag">TURN</span>' : ""}</div>
    <div class="score-bottom"><strong>${team.score}</strong><span>${team.players.length} PLAYERS</span></div>
  </div>`).join("")}</div>`;
}

function optionList(teams, selected) {
  return teams.map((team) => `<option value="${escapeHtml(team.id)}" ${team.id === selected ? "selected" : ""}>${escapeHtml(team.name)}</option>`).join("");
}

function playerOptionList(players, selected) {
  return players.map((name, index) => `<option value="${index}" ${index === selected ? "selected" : ""}>${escapeHtml(name)}</option>`).join("");
}

function matchupCard(mode) {
  if (mode === "coop") return `<div class="match-card"><div class="card-overline">WHO PLAYS?</div><h3>All in, together.</h3><p>Every member of <strong>${escapeHtml(activeTeam().name)}</strong> works toward the same point. No defending team in this round.</p><div class="people-pills">${activeTeam().players.map((name) => `<span>${escapeHtml(name)}</span>`).join("")}</div></div>`;
  const m = state.currentRound.matchup;
  const defender = state.teams.find((team) => team.id === m.defenderTeamId);
  const opponents = state.teams.filter((team) => team.id !== activeTeam().id);
  const assigned = m.method === "assigned";
  return `<div class="match-card"><div class="card-overline">THE MATCHUP <span class="method-badge">${assigned ? "✧ APP ASSIGNED" : "✎ PLAYER CHOICE"}</span></div>
    <h3>${mode === "duel" ? "One player. One rival." : "Team versus team."}</h3>
    <p>${assigned ? "The app selected this matchup." : mode === "duel" ? `The active team, ${escapeHtml(activeTeam().name)}, chooses BOTH its own player and the opposing player.` : `The active team, ${escapeHtml(activeTeam().name)}, chooses its defending team.`}</p>
    ${!assigned ? `<label class="match-label">Defending team<select data-role="defender-team">${optionList(opponents, defender.id)}</select></label>` : ""}
    ${mode === "duel" ? `<div class="match-versus"><div><span>ACTIVE PLAYER</span>${assigned ? `<strong>${escapeHtml(activeTeam().players[m.activePlayerIndex])}</strong>` : `<select aria-label="Active player" data-role="active-player">${playerOptionList(activeTeam().players, m.activePlayerIndex)}</select>`}</div><span class="versus-symbol">VS</span><div><span>DEFENDER</span>${assigned ? `<strong>${escapeHtml(defender.players[m.defenderPlayerIndex])}</strong>` : `<select aria-label="Defending player" data-role="defender-player">${playerOptionList(defender.players, m.defenderPlayerIndex)}</select>`}</div></div>` : `<div class="match-versus"><div><span>ACTIVE TEAM</span><strong>${escapeHtml(activeTeam().name)}</strong><small>${activeTeam().players.map(escapeHtml).join(" · ")}</small></div><span class="versus-symbol">VS</span><div><span>DEFENDERS</span><strong>${escapeHtml(defender.name)}</strong><small>${defender.players.map(escapeHtml).join(" · ")}</small></div></div>`}
    <div class="defense-note">🛡 The defending side can stop the point, but never earn one this turn.</div>
  </div>`;
}

function challengeCard(game) {
  const category = categoryById(game.category);
  const round = state.currentRound;
  const mode = round.mode;
  const prompt = currentPrompt();
  const promptText = escapeHtml(prompt?.text || "").replace(/\n/g, "<br/>");
  const answerText = escapeHtml(prompt?.answer || "").replace(/\n/g, "<br/>");
  const mustStart = game.requiresTimerBeforeReveal && !state.timerRunning;
  const timed = Number.isInteger(game.revealSeconds);
  const expired = timed && round.revealUsed && !round.promptVisible;
  const timerWarning = mustStart ? `<p class="reveal-warning">⏱ Start the ${round.duration}-second timer before opening the card.</p>` : "";
  const previewWarning = timed ? `<p class="reveal-note">Once revealed, this card stays visible for <strong>${game.revealSeconds} seconds</strong> and then hides automatically. You cannot open it again.</p>` : "";
  const previewCountdown = timed && round.promptVisible ? `<div class="reveal-countdown" role="timer">Card hides in <strong id="reveal-seconds">${round.revealRemaining ?? game.revealSeconds}</strong> seconds</div>` : "";
  const buttonLabel = expired ? "Card viewed ✓" : round.promptVisible ? (timed ? "Card is visible" : "Hide game card") : timed ? `Reveal for ${game.revealSeconds} seconds` : "Reveal game card";
  return `<article class="challenge-card"><div class="challenge-top"><span class="mode-pill mode-${mode}">${escapeHtml(MODE_NAMES[mode])}</span><span class="equipment">✎ ${escapeHtml(game.equipment)}</span></div>
    <div class="challenge-identity"><span class="challenge-cat-icon color-${category.color}">${escapeHtml(category.icon)}</span><div><div class="challenge-category">${escapeHtml(category.name)}</div><h2>${escapeHtml(game.name)}</h2></div></div>
    <p class="challenge-description">${escapeHtml(game.descriptionByMode?.[mode] || game.description)}</p>
    <div class="win-box"><span class="win-icon">★</span><div><strong>HOW TO WIN THE POINT</strong><p>${escapeHtml(game.winByMode?.[mode] || game.win)}</p></div></div>
    <div class="prompt-section"><div class="prompt-heading"><span>GAME CARD</span><small>${round.promptVisible ? "Card is showing" : expired ? "Viewing time is over" : "Open when ready"}</small></div>
      ${timerWarning}${previewWarning}${previewCountdown}
      ${round.promptVisible ? `<div class="prompt-text">${promptText}</div>` : `<div class="prompt-closed"><span>▧</span><p>${expired ? "This secret card has already been viewed. Continue the challenge from memory." : "Some cards contain secret clues. Only the correct player should peek."}</p></div>`}
      <div class="prompt-buttons">${button(buttonLabel, "toggle-prompt", "outline", "", mustStart || (timed && round.revealUsed))}
        ${prompt?.answer ? button(round.answerVisible ? "Hide answers" : "Reveal answers", "toggle-answer", "text") : ""}</div>
      ${prompt?.answer && round.answerVisible ? `<div class="answer-box"><strong>ANSWER KEY</strong><div>${answerText}</div></div>` : ""}
    </div>
  </article>`;
}

function recentHistory() {
  if (!state.history.length) return `<p class="empty-history">No rounds completed yet. The story starts now.</p>`;
  return `<div class="history-list">${state.history.slice(0, 5).map((entry) => `<div class="history-row"><span class="history-status ${entry.point ? "won" : "blocked"}">${entry.point ? "✓" : "—"}</span><div><strong>${escapeHtml(entry.teamName)}</strong><small>R${entry.round} · ${escapeHtml(entry.gameName)}</small></div><b>${entry.point ? "+1" : "+0"}</b></div>`).join("")}</div>`;
}

function renderPlay() {
  const game = currentGame();
  const active = activeTeam();
  return `<div class="game-dashboard"><div class="play-topline"><div><span class="step-label">LET THE GAMES BEGIN</span><h1>Game on<span class="headline-dot">.</span></h1></div><div class="play-top-actions">${button("⚙ Categories", "edit-categories", "outline")}${button("↺ New game", "new-game", "text")}</div></div>
    ${scoreboard()}
    <div class="turn-banner"><div class="turn-number">ROUND <strong>${currentCycle(state)} / ${state.roundsPerTeam}</strong><small>TURN ${state.roundNumber} OF ${totalTurns(state)}</small></div><div class="turn-divider"></div><div><span>CURRENTLY PLAYING</span><strong>${escapeHtml(active.name)}</strong></div><span class="turn-banner-icon">✳</span></div>
    <div class="game-columns"><div>${challengeCard(game)}</div><aside class="game-aside">
      <div class="timer-card"><div class="card-overline">CHALLENGE TIMER · ${state.currentRound.duration} SECONDS</div><div class="timer-disc" style="--progress:${((state.currentRound.duration - state.timerRemaining) / state.currentRound.duration * 100).toFixed(1)}%"><span class="timer-value">${formatTime(state.timerRemaining)}</span><small>MIN : SEC</small></div>
        <div class="timer-controls">${state.timerRunning ? button("Pause timer", "pause-timer", "outline", "full") : button(state.timerRemaining === 0 ? "Time's up ✓" : state.timerRemaining === state.currentRound.duration ? "Start timer ↗" : "Resume timer ▶", "start-timer", "primary", "full", state.timerRemaining === 0)}</div>
      </div>
      ${matchupCard(state.currentRound.mode)}
      <div class="verdict-card"><div class="card-overline">THE VERDICT</div><h3>Did ${escapeHtml(active.name)} win?</h3><p>Only the active team can score. Choose the outcome to switch turns automatically.</p>
        <div class="verdict-buttons">${button("✓ Point earned", "point-earned", "win", "full")}${button("× No point", "no-point", "deny", "full")}</div>
      </div>
    </aside></div>
    <div class="history-card"><div class="history-title"><h3>Round recap</h3><span>LAST ${Math.min(5, state.history.length)} RESULTS</span></div>${recentHistory()}</div>
  </div>${state.categoryDialog ? categoryDialog() : ""}`;
}

function renderResults() {
  const sorted = [...state.teams].sort((a, b) => b.score - a.score);
  const winners = sorted.filter((team) => team.score === sorted[0].score);
  const winnerName = winners.length === 1 ? winners[0].name : winners.map((team) => team.name).join(" & ");
  return `<div class="results-screen"><div class="eyebrow"><span class="eyebrow-line"></span> GAME COMPLETE · VERSION 2</div>
    <h1>${winners.length === 1 ? "We have a winner!" : "It's a tie!"}</h1>
    <div class="winner-card"><span>✦ FINAL RESULT ✦</span><strong>${escapeHtml(winnerName)}</strong><p>${winners.length === 1 ? "Congratulations, champions of the living room!" : "The top teams share the win."}</p></div>
    <div class="results-meta">${state.roundsPerTeam} rounds per team · ${totalTurns(state)} turns played · ${state.teams.reduce((total, team) => total + team.score, 0)} points awarded</div>
    <h2>Final scoreboard</h2><div class="results-list">${sorted.map((team, i) => `<div class="results-entry"><span>#${i + 1}</span><strong>${escapeHtml(team.name)}</strong><b>${team.score} ${team.score === 1 ? "point" : "points"}</b></div>`).join("")}</div>
    ${button("↺ Play another game", "play-again", "primary", "results-restart")}</div>`;
}

function categoryDialog() {
  return `<div class="modal-backdrop" role="presentation"><section class="category-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div class="modal-head"><div><span class="step-label">GAME SETTINGS</span><h2 id="modal-title">Your categories</h2></div><button class="icon-button" data-action="close-categories" aria-label="Close categories">×</button></div><p>New selections take effect after this round. Your scores stay the same.</p>${categoryTiles(true)}${button("Done ✓", "close-categories", "primary", "full")}</section></div>`;
}

function render() {
  root.innerHTML = state.screen === "setup" ? renderSetup() : state.screen === "results" ? renderResults() : renderPlay();
  updateTimerVisual();
}

function updateTimerVisual() {
  const value = document.querySelector(".timer-value");
  if (value) value.textContent = formatTime(state.timerRemaining);
  const disc = document.querySelector(".timer-disc");
  if (disc) disc.style.setProperty("--progress", `${((state.currentRound.duration - state.timerRemaining) / state.currentRound.duration * 100).toFixed(1)}%`);
}

function stopInterval() { if (timerId !== null) clearInterval(timerId); timerId = null; }
function stopRevealInterval() { if (revealId !== null) clearInterval(revealId); revealId = null; }
function tickReveal() {
  if (!state.currentRound?.promptVisible || !Number.isInteger(currentGame()?.revealSeconds)) return stopRevealInterval();
  const remaining = Math.max(0, Math.ceil((revealDeadline - Date.now()) / 1000));
  state.currentRound.revealRemaining = remaining;
  const element = document.querySelector("#reveal-seconds");
  if (element) element.textContent = String(remaining);
  if (remaining === 0) {
    state.currentRound.promptVisible = false;
    stopRevealInterval();
    render();
  }
  save();
}
function togglePrompt() {
  const game = currentGame();
  const round = state.currentRound;
  if (!game || !round) return;
  if (game.requiresTimerBeforeReveal && !state.timerRunning && !round.promptVisible) return;
  if (Number.isInteger(game.revealSeconds)) {
    if (round.revealUsed) return;
    round.revealUsed = true;
    round.promptVisible = true;
    round.revealRemaining = game.revealSeconds;
    revealDeadline = Date.now() + game.revealSeconds * 1000;
    stopRevealInterval();
    revealId = setInterval(tickReveal, 100);
  } else round.promptVisible = !round.promptVisible;
}
function pauseTimer() {
  if (state.timerRunning) tickTimer();
  state.timerRunning = false;
  stopInterval();
  save();
}
function tickTimer() {
  const elapsed = Math.floor((Date.now() - timerStartedAt) / 1000);
  const remaining = Math.max(0, timerStartedWith - elapsed);
  if (remaining !== state.timerRemaining) {
    state.timerRemaining = remaining;
    save();
    updateTimerVisual();
  }
  if (remaining === 0) {
    state.timerRunning = false;
    stopInterval();
    save();
    render();
  }
}
function startTimer() {
  if (state.timerRemaining === 0 || state.screen !== "play") return;
  state.timerRunning = true;
  timerStartedAt = Date.now();
  timerStartedWith = state.timerRemaining;
  stopInterval();
  timerId = setInterval(tickTimer, 250);
  save();
  render();
}

function alertError(message) { latestError = message; render(); window.scrollTo({ top: 0, behavior: "smooth" }); }

document.addEventListener("input", (event) => {
  const input = event.target;
  const role = input?.dataset?.role;
  const index = Number(input?.dataset?.index);
  if (state.screen === "setup" && role === "team-name" && state.teams[index]) state.teams[index].name = input.value;
  else if (state.screen === "setup" && role === "player-name" && state.teams[index]) state.teams[index].players[Number(input.dataset.playerIndex)] = input.value;
  else if (state.screen === "setup" && role === "round-count") {
    const value = Number(input.value);
    state.roundsPerTeam = value;
    const estimated = document.querySelector("#duration-estimate");
    const detail = document.querySelector("#duration-detail");
    if (estimated) estimated.textContent = Number.isInteger(value) && value >= 1 && value <= 20 ? `~${estimatedMinutes(state)} minutes` : "Choose 1–20 rounds";
    if (detail) detail.textContent = `${totalTurns(state)} turns overall · ~${state.teams.length * 3} minutes per full round`;
  }
  else return;
  latestError = "";
  save();
});

document.addEventListener("change", (event) => {
  const input = event.target;
  if (input?.dataset?.role === "category") {
    const selected = new Set(state.enabledCategories);
    if (input.checked) selected.add(input.value);
    else selected.delete(input.value);
    state.enabledCategories = CATEGORIES.map((category) => category.id).filter((id) => selected.has(id));
  } else if (state.screen === "setup" && input?.dataset?.role === "round-count") {
    save();
    return;
  } else if (state.screen === "play" && state.currentRound?.matchup) {
    const m = state.currentRound.matchup;
    if (input?.dataset?.role === "defender-team") { m.defenderTeamId = input.value; m.defenderPlayerIndex = 0; }
    else if (input?.dataset?.role === "active-player") m.activePlayerIndex = Number(input.value);
    else if (input?.dataset?.role === "defender-player") m.defenderPlayerIndex = Number(input.value);
    else return;
  } else return;
  latestError = "";
  save();
  render();
});

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;
  const index = Number(target.dataset.index);
  if (action === "add-team" && state.teams.length < 6) state.teams.push(makeTeam(state.teams.length));
  else if (action === "remove-team" && state.teams.length > 2) state.teams.splice(index, 1);
  else if (action === "add-player" && state.teams[index]?.players.length === 2) state.teams[index].players.push(`Player ${state.teams[index].players.length + 1}`);
  else if (action === "remove-player" && state.teams[index]?.players.length === 3) state.teams[index].players.pop();
  else if (action === "select-all") state.enabledCategories = CATEGORIES.map((category) => category.id);
  else if (action === "clear-categories") state.enabledCategories = [];
  else if (action === "start-game") {
    const error = validateSetup(state);
    if (error) return alertError(error);
    state = startGame(state);
    window.scrollTo({ top: 0, behavior: "auto" });
  } else if (action === "edit-categories") { pauseTimer(); state.categoryDialog = true; }
  else if (action === "close-categories") {
    if (!state.enabledCategories.length) return window.alert("Choose at least one category before continuing.");
    state.categoryDialog = false;
  } else if (action === "toggle-prompt") togglePrompt();
  else if (action === "toggle-answer") state.currentRound.answerVisible = !state.currentRound.answerVisible;
  else if (action === "start-timer") return startTimer();
  else if (action === "pause-timer") pauseTimer();
  else if (action === "point-earned" || action === "no-point") {
    pauseTimer();
    stopRevealInterval();
    state = finishRound(state, action === "point-earned");
    window.scrollTo({ top: 0, behavior: "auto" });
  } else if (action === "new-game" || action === "play-again") {
    if (action === "new-game" && !window.confirm("Start a new game? This resets all scores but keeps your teams, round count, and categories.")) return;
    pauseTimer();
    stopRevealInterval();
    state = restartToSetup(state);
    window.scrollTo({ top: 0, behavior: "auto" });
  } else return;
  save();
  render();
});

render();
