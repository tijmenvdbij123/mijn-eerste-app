import { CATEGORIES, GAMES, GAME_LEVELS, GAME_STYLES, MODE_NAMES } from "./games.js";
import { makeInitialState, makeTeam, validateSetup, availableGames, startGame, finishRound, restartToSetup, totalTurns, currentCycle, estimatedMinutes, contentForRound, gameDuration, DIFFICULTIES } from "./engine.js";

const STORAGE_KEY = "living-room-battles-v3";
const root = document.querySelector("#app");
const escapeHtml = (value = "") => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
})[character]);

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved?.version === 3 && Array.isArray(saved.teams) && Array.isArray(saved.enabledCategories)) {
      const wasRunning = saved.timerRunning;
      saved.timerRunning = false; // after a refresh, resume deliberately
      saved.categoryDialog = false;
      saved.fullscreenCard = false;
      const game = GAMES.find((item) => item.id === saved.currentRound?.gameId);
      if (game?.clock === "staged" && wasRunning && saved.currentRound?.stageIndex === 0 && saved.currentRound?.revealUsed) {
        saved.currentRound.stageIndex = 1;
        saved.timerRemaining = game.stages[1].seconds;
        saved.currentRound.promptVisible = false;
      }
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
function currentContent() { return contentForRound(currentGame(), state.currentRound); }
function currentPrompt() { return currentContent()?.prompts[state.currentRound.promptIndex]; }
function activeTeam() { return state.teams[state.turnIndex]; }
function formatTime(seconds) { return `${Math.floor(seconds / 60).toString().padStart(2, "0")}:${(seconds % 60).toString().padStart(2, "0")}`; }
function clockMode(game) { return game.clock || "standard"; }
function stageLength(game, round) { return clockMode(game) === "staged" ? game.stages[round.stageIndex].seconds : round.duration; }

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
    <p class="rounds-explainer">Estimate: about 2 minutes 30 seconds for a standard challenge, plus ~30 seconds for rules and scoring. Some games use shorter clocks or no main clock at all, so actual playtime will vary.</p>
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

function clockInstruction(game, round) {
  if (clockMode(game) === "none") return "NO MAIN CLOCK NEEDED. Follow the spoken-turn rules; nothing needs to be started.";
  if (clockMode(game) === "staged") return `CLOCK NEEDED. Press Start: ${game.stages.map((s) => `${s.seconds}s ${s.label.toLowerCase()}`).join(" → ")}. The stages switch automatically. No 150-second timer.`;
  return `CLOCK NEEDED: ${round.duration} seconds. ${game.requiresTimerBeforeReveal ? "START the timer BEFORE revealing the game card." : "Start when your team is ready to play."}`;
}

function timerPanel(game, compact = false) {
  const round = state.currentRound;
  const mode = clockMode(game);
  if (mode === "none") return `<div class="${compact ? "fullscreen-clock" : "timer-card no-clock-card"}"><strong>◷ NO CLOCK NEEDED</strong><p>Follow the game-card rules. There is no countdown for this challenge.</p></div>`;
  const length = stageLength(game, round);
  const stageLabel = mode === "staged" ? `STAGE ${round.stageIndex + 1} OF ${game.stages.length}: ${game.stages[round.stageIndex].label}` : `${round.duration}-SECOND CHALLENGE`;
  const label = round.timerExpired ? "Time's up ✓" : state.timerRunning ? mode === "staged" ? "Timer running…" : "Pause timer" : round.revealUsed && mode === "staged" ? "Resume writing timer ▶" : state.timerRemaining === length ? mode === "staged" ? "Start memory challenge ↗" : "Start timer ↗" : "Resume timer ▶";
  const action = state.timerRunning && mode === "standard" ? "pause-timer" : "start-timer";
  const disabled = round.timerExpired || (state.timerRunning && mode === "staged");
  return `<div class="${compact ? "fullscreen-clock" : "timer-card"}"><div class="card-overline">${escapeHtml(stageLabel)}</div><div class="timer-disc" style="--progress:${((length - state.timerRemaining) / length * 100).toFixed(1)}%"><span class="timer-value">${formatTime(state.timerRemaining)}</span><small>MIN : SEC</small></div><div class="timer-controls">${button(label, action, state.timerRunning && mode === "standard" ? "outline" : "primary", "full", disabled)}</div></div>`;
}

function challengeCard(game, fullScreen = false) {
  const category = categoryById(game.category);
  const round = state.currentRound;
  const mode = round.mode;
  const content = currentContent();
  const prompt = currentPrompt();
  const promptText = escapeHtml(prompt?.text || "").replace(/\n/g, "<br/>");
  const answerText = escapeHtml(prompt?.answer || "").replace(/\n/g, "<br/>");
  const staged = clockMode(game) === "staged";
  const untimed = clockMode(game) === "none";
  const mustStart = game.requiresTimerBeforeReveal && !state.timerRunning;
  const timed = !staged && Number.isInteger(game.revealSeconds);
  const expired = timed && round.revealUsed && !round.promptVisible;
  const levelLocked = !untimed && (round.revealUsed || state.timerRunning || round.timerExpired || round.promptVisible);
  const levelPicker = GAME_LEVELS[game.id] ? `<label class="variant-label">CHOOSE DIFFICULTY <select aria-label="Difficulty level" data-role="difficulty" ${levelLocked ? "disabled" : ""}>${DIFFICULTIES.map((level) => `<option value="${level}" ${level === round.difficulty ? "selected" : ""}>${level[0].toUpperCase() + level.slice(1)}</option>`).join("")}</select></label>` : "";
  const stylePicker = GAME_STYLES[game.id] ? `<label class="variant-label">CHOOSE SITUATIONS <select aria-label="Headline style" data-role="style" ${levelLocked ? "disabled" : ""}><option value="goofy" ${round.style === "goofy" ? "selected" : ""}>Goofy</option><option value="normal" ${round.style === "normal" ? "selected" : ""}>Normal / everyday</option></select></label>` : "";
  const timerWarning = mustStart ? `<p class="reveal-warning">⏱ Start the ${round.duration}-second timer before revealing this card.</p>` : "";
  const previewWarning = timed ? `<p class="reveal-note">The selected players get <strong>${game.revealSeconds} seconds</strong> to study the card. It then hides automatically. ${game.allowRevealReset ? "If something goes wrong, use the confirmed re-view option to restart both clocks." : "You cannot reveal it again."}</p>` : "";
  const previewCountdown = timed && round.promptVisible ? `<div class="reveal-countdown" role="timer">Card hides in <strong class="reveal-seconds">${round.revealRemaining ?? game.revealSeconds}</strong> seconds</div>` : "";
  const buttonLabel = expired ? "Card viewed ✓" : round.promptVisible ? timed ? "Card is visible" : "Hide game card" : timed ? `Reveal for ${game.revealSeconds} seconds` : "Reveal game card";
  const answerAllowed = game.id !== "word-recall-battle" || round.timerExpired;
  const answerButton = prompt?.answer && answerAllowed ? button(round.answerVisible ? "Hide answers" : "Reveal answers", "toggle-answer", "text") : "";
  const revealButton = untimed || staged ? "" : button(buttonLabel, "toggle-prompt", "outline", "", mustStart || (timed && round.revealUsed) || round.timerExpired);
  const redoButton = game.allowRevealReset && round.revealUsed ? button("↺ Re-view card (reset both timers)", "reset-reveal", "text") : "";
  return `<article class="challenge-card ${fullScreen ? "challenge-fullscreen" : ""}">
    <div class="challenge-top"><span class="mode-pill mode-${mode}">${escapeHtml(MODE_NAMES[mode])}</span><span class="equipment">✎ ${escapeHtml(game.equipment)}</span>${fullScreen ? button("✕ Exit fullscreen", "exit-fullscreen", "outline") : button("⛶ Fullscreen card", "enter-fullscreen", "outline")}</div>
    <div class="challenge-identity"><span class="challenge-cat-icon color-${category.color}">${escapeHtml(category.icon)}</span><div><div class="challenge-category">${escapeHtml(category.name)}</div><h2>${escapeHtml(game.name)}</h2></div></div>
    ${levelPicker || stylePicker ? `<div class="variant-picker">${levelPicker}${stylePicker}<small>Choose before starting the clock or revealing the card.</small></div>` : ""}
    <div class="clock-rule"><strong>◷ CLOCK INSTRUCTIONS</strong><p>${escapeHtml(clockInstruction(game, round))}</p></div>
    ${fullScreen ? timerPanel(game, true) : ""}
    <p class="challenge-description">${escapeHtml(content.description)}</p>
    <div class="win-box"><span class="win-icon">★</span><div><strong>HOW TO WIN THE POINT</strong><p>${escapeHtml(content.win)}</p></div></div>
    ${game.noGameCard ? `<div class="prompt-section"><div class="no-game-card">✓ No separate game card needed. Play using the instructions above.</div></div>` : `<div class="prompt-section"><div class="prompt-heading"><span>GAME CARD</span><small>${round.promptVisible ? "Card is showing" : expired ? "Viewing time is over" : "Open when ready"}</small></div>
      ${timerWarning}${previewWarning}${previewCountdown}
      ${round.promptVisible ? `<div class="prompt-text">${promptText}</div>` : `<div class="prompt-closed"><span>▧</span><p>${expired || staged && round.revealUsed ? "The secret card is hidden. Continue from memory until the clock finishes." : staged ? "Press Start memory challenge: the secret card will show automatically for the first timed stage." : "Some cards contain secret clues. Only the correct player should peek."}</p></div>`}
      <div class="prompt-buttons">${revealButton}${redoButton}${answerButton}</div>
      ${prompt?.answer && round.answerVisible && answerAllowed ? `<div class="answer-box"><strong>ANSWER KEY</strong><div>${answerText}</div></div>` : ""}
    </div>`}
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
      ${timerPanel(game)}
      ${matchupCard(state.currentRound.mode)}
      <div class="verdict-card"><div class="card-overline">THE VERDICT</div><h3>Did ${escapeHtml(active.name)} win?</h3><p>Only the active team can score. Choose the outcome to switch turns automatically.</p>
        <div class="verdict-buttons">${button("✓ Point earned", "point-earned", "win", "full")}${button("× No point", "no-point", "deny", "full")}</div>
      </div>
    </aside></div>
    <div class="history-card"><div class="history-title"><h3>Round recap</h3><span>LAST ${Math.min(5, state.history.length)} RESULTS</span></div>${recentHistory()}</div>
  </div>${state.categoryDialog ? categoryDialog() : ""}${state.fullscreenCard ? `<div class="fullscreen-backdrop" role="dialog" aria-modal="true" aria-label="Fullscreen game card"><div class="fullscreen-card-wrap">${challengeCard(game, true)}</div></div>` : ""}${state.timeUpModal ? timeUpDialog(game) : ""}`;
}

function timeUpDialog(game) {
  const recall = game.id === "word-recall-battle";
  return `<div class="timeup-backdrop"><section class="timeup-modal" role="alertdialog" aria-modal="true" aria-labelledby="timeup-heading"><span class="timeup-icon">⏰</span><h2 id="timeup-heading">Time's up!</h2><p>${recall ? "The 60-second writing stage is over. Stop writing, then reveal the original word list to check your answers. Only the active team can earn a point." : "The challenge clock has ended! Stop playing and check whether the active team met its winning condition."}</p>${recall ? button("Reveal the word list", "review-answers", "primary", "full") : button("Okay, see the result", "dismiss-time-up", "primary", "full")}</section></div>`;
}

function renderResults() {
  const sorted = [...state.teams].sort((a, b) => b.score - a.score);
  const winners = sorted.filter((team) => team.score === sorted[0].score);
  const winnerName = winners.length === 1 ? winners[0].name : winners.map((team) => team.name).join(" & ");
  return `<div class="results-screen"><div class="eyebrow"><span class="eyebrow-line"></span> GAME COMPLETE · VERSION 3</div>
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
  if (!state.currentRound || !currentGame()) return;
  const length = stageLength(currentGame(), state.currentRound);
  const values = document.querySelectorAll?.(".timer-value") || [document.querySelector(".timer-value")].filter(Boolean);
  for (const value of values) value.textContent = formatTime(state.timerRemaining);
  const discs = document.querySelectorAll?.(".timer-disc") || [document.querySelector(".timer-disc")].filter(Boolean);
  for (const disc of discs) if (length) disc.style.setProperty("--progress", `${((length - state.timerRemaining) / length * 100).toFixed(1)}%`);
}

function stopInterval() { if (timerId !== null) clearInterval(timerId); timerId = null; }
function stopRevealInterval() { if (revealId !== null) clearInterval(revealId); revealId = null; }
function tickReveal() {
  if (!state.currentRound?.promptVisible || !Number.isInteger(currentGame()?.revealSeconds)) return stopRevealInterval();
  const remaining = Math.max(0, Math.ceil((revealDeadline - Date.now()) / 1000));
  state.currentRound.revealRemaining = remaining;
  const elements = document.querySelectorAll?.(".reveal-seconds") || [document.querySelector(".reveal-seconds")].filter(Boolean);
  for (const element of elements) element.textContent = String(remaining);
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
  if (clockMode(game) === "none" || clockMode(game) === "staged" || round.timerExpired) return;
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
function expireTimer() {
  state.timerRunning = false;
  state.timerRemaining = 0;
  state.currentRound.timerExpired = true;
  state.timeUpModal = true;
  if (Number.isInteger(currentGame()?.revealSeconds)) {
    state.currentRound.promptVisible = false;
    state.currentRound.revealRemaining = 0;
    stopRevealInterval();
  }
  stopInterval();
  save();
  render();
}
function tickTimer() {
  if (!state.timerRunning || !state.currentRound) return;
  const game = currentGame();
  const elapsed = Math.floor((Date.now() - timerStartedAt) / 1000);
  const remaining = Math.max(0, timerStartedWith - elapsed);
  if (remaining === 0 && clockMode(game) === "staged" && state.currentRound.stageIndex === 0) {
    state.currentRound.stageIndex = 1;
    state.currentRound.promptVisible = false;
    timerStartedAt += timerStartedWith * 1000;
    timerStartedWith = game.stages[1].seconds;
    state.timerRemaining = Math.max(0, timerStartedWith - Math.floor((Date.now() - timerStartedAt) / 1000));
    if (state.timerRemaining === 0) return expireTimer();
    save();
    render();
    return;
  }
  if (remaining !== state.timerRemaining) {
    state.timerRemaining = remaining;
    save();
    updateTimerVisual();
  }
  if (remaining === 0) expireTimer();
}
function startTimer() {
  if (state.timerRunning || state.timerRemaining === 0 || state.screen !== "play" || clockMode(currentGame()) === "none") return;
  if (clockMode(currentGame()) === "staged" && state.currentRound.stageIndex === 0 && !state.currentRound.revealUsed) {
    state.currentRound.revealUsed = true;
    state.currentRound.promptVisible = true;
  }
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
  } else if (state.screen === "play" && ["difficulty", "style"].includes(input?.dataset?.role)) {
    const game = currentGame();
    const round = state.currentRound;
    if (clockMode(game) !== "none" && (state.timerRunning || round.revealUsed || round.promptVisible || round.timerExpired)) return;
    if (input.dataset.role === "difficulty") {
      if (!GAME_LEVELS[game.id]?.[input.value]) return;
      round.difficulty = input.value;
    } else {
      if (!GAME_STYLES[game.id]?.[input.value]) return;
      round.style = input.value;
    }
    round.promptIndex = Math.floor(Math.random() * currentContent().prompts.length);
    round.answerVisible = false;
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
  else if (action === "toggle-answer") {
    if (currentGame().id === "word-recall-battle" && !state.currentRound.timerExpired) return;
    state.currentRound.answerVisible = !state.currentRound.answerVisible;
  }
  else if (action === "enter-fullscreen") state.fullscreenCard = true;
  else if (action === "exit-fullscreen") state.fullscreenCard = false;
  else if (action === "dismiss-time-up") state.timeUpModal = false;
  else if (action === "review-answers") {
    if (currentGame().id !== "word-recall-battle" || !state.currentRound.timerExpired) return;
    state.timeUpModal = false;
    state.currentRound.answerVisible = true;
  }
  else if (action === "reset-reveal") {
    if (!currentGame().allowRevealReset || !state.currentRound.revealUsed) return;
    if (!window.confirm("Re-view this shape card? This will RESET BOTH the 150-second challenge timer and the 15-second card preview. Everyone must restart their drawings. Continue?")) return;
    stopInterval();
    stopRevealInterval();
    state.timerRunning = false;
    state.timerRemaining = gameDuration(currentGame());
    state.currentRound.promptVisible = false;
    state.currentRound.revealUsed = false;
    state.currentRound.revealRemaining = null;
    state.currentRound.timerExpired = false;
    state.currentRound.answerVisible = false;
    state.timeUpModal = false;
  }
  else if (action === "start-timer") return startTimer();
  else if (action === "pause-timer") pauseTimer();
  else if (action === "point-earned" || action === "no-point") {
    pauseTimer();
    stopRevealInterval();
    state.fullscreenCard = false;
    state = finishRound(state, action === "point-earned");
    window.scrollTo({ top: 0, behavior: "auto" });
  } else if (action === "new-game" || action === "play-again") {
    if (action === "new-game" && !window.confirm("Start a new game? This resets all scores but keeps your teams, round count, and categories.")) return;
    pauseTimer();
    stopRevealInterval();
    state.fullscreenCard = false;
    state = restartToSetup(state);
    window.scrollTo({ top: 0, behavior: "auto" });
  } else return;
  save();
  render();
});

render();
