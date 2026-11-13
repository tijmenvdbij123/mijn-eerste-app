import { CATEGORIES, GAMES, GAME_LEVELS, GAME_STYLES, MODE_NAMES } from "./games.js";
import { makeInitialState, makeTeam, selectFormat, validateSetup, availableGames, startGame, finishRound, restartToSetup, totalTurns, currentCycle, estimatedMinutes, contentForRound, gameDuration, skipCurrentChallenge, DIFFICULTIES, allowedDefenders, hasDifficulty, isLevelAllowedForGame } from "./engine.js";
import { LEVELS, EIGHT_LEVEL_GAME_IDS, levelIndex, isAdjacentLevel } from "./levels.js";
import { SessionLink } from "./session.js";
import { translatePage, dutch } from "./i18n/nl.js";
import { DUTCH_REBUS_PACKS, dutchCodebreakerPrompt } from "./i18n/nl-puzzles.js";
import { dutchGameRules } from "./i18n/nl-rules.js";
import { DUTCH_RIDDLE_PACKS } from "./i18n/nl-riddles.js";
import { danish, translateDanishPage } from "./i18n/da.js";
import { DANISH_REBUS_PACKS, danishCodebreakerPrompt } from "./i18n/da-puzzles.js";
import { danishGameRules } from "./i18n/da-rules.js";
import { DANISH_RIDDLE_PACKS } from "./i18n/da-riddles.js";
import { danishWordplayPrompts } from "./i18n/da-wordplay.js";
// Locale-specific Danish trivia is generated at round selection; rendering
// chooses translated text while the underlying question IDs stay identical.
function displayDenmarkPrompt(prompt, language) {
  if (!prompt?.danishExclusive && !prompt?.dutchExclusive) return prompt;
  const variant = prompt.languageVariants[language] || prompt.languageVariants.en;
  return { ...prompt, text: variant.text, answer: variant.answer };
}

const STORAGE_KEY = "living-room-battles-v4-11";
const root = document.querySelector("#app");
const escapeHtml = (value = "") => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
})[character]);

function loadState() {
  try {
    const direct = localStorage.getItem(STORAGE_KEY);
    const saved = JSON.parse(direct || localStorage.getItem("living-room-battles-v4-10") || localStorage.getItem("living-room-battles-v4-9") || localStorage.getItem("living-room-battles-v4-8") || localStorage.getItem("living-room-battles-v4-7") || localStorage.getItem("living-room-battles-v4-6") || localStorage.getItem("living-room-battles-v4-5") || localStorage.getItem("living-room-battles-v4-4") || localStorage.getItem("living-room-battles-v4-3") || localStorage.getItem("living-room-battles-v4-2") || localStorage.getItem("living-room-battles-v4-1") || localStorage.getItem("living-room-battles-v4-0") || localStorage.getItem("living-room-battles-v3-6") || localStorage.getItem("living-room-battles-v3-5") || localStorage.getItem("living-room-battles-v3-4") || localStorage.getItem("living-room-battles-v3-3"));
    if (["3.3", "3.4", "3.5", "3.6", "4.0", "4.1", "4.2", "4.3", "4.4", "4.5", "4.6", "4.7", "4.8", "4.9", "4.10", "4.11"].includes(saved?.version) && Array.isArray(saved.teams) && Array.isArray(saved.enabledCategories)) {
      if (saved.version !== "4.11") {
        // Old in-progress cards/timers may have different rules. Keep the
        // current format, names, levels and categories, but start at setup.
        return { ...restartToSetup(saved), screen: "language", language: null, version: "4.11", contentLanguage: null, format: saved.format === "single" ? "single" : "team", enabledCategories: [...new Set([...saved.enabledCategories, "topic-trivia", "party-challenges"])], enabledGameIds: GAMES.map((g) => g.id) };
      }
      saved.enabledGameIds = Array.isArray(saved.enabledGameIds) ? saved.enabledGameIds.filter((id) => GAMES.some((g) => g.id === id)) : GAMES.map((g) => g.id);
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
      saved.language = ["en", "nl", "da"].includes(saved.language) ? saved.language : "en";
      // Existing V4.11 sessions preserve this origin, even when a phone's
      // language is changed for display or a guest joins from abroad.
      saved.contentLanguage = ["en", "nl", "da"].includes(saved.contentLanguage) ? saved.contentLanguage : saved.language;
      return saved;
    }
  } catch { /* a corrupted browser cache should not stop the app */ }
  return makeInitialState();
}

const LANGUAGE_PREFERENCE_KEY = "living-room-battles-device-language";
let localLanguageOverride = (() => {
  try { const value = localStorage.getItem(LANGUAGE_PREFERENCE_KEY); return ["en","nl","da"].includes(value) ? value : null; } catch { return null; }
})();
let state = loadState();
if (localLanguageOverride && state.language) state.language = localLanguageOverride;
const expandedCategories = new Set();
let languageMenuOpen = false;
let skipConfirmOpen = false;
let session = null;
let sessionStatus = "";
let joinCode = "";
let guestReady = false;
let timerId = null;
let revealId = null;
let revealDeadline = 0;
let timerStartedAt = 0;
let timerStartedWith = 150;
let latestError = "";

function save() {
  if (session?.role !== "guest") {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch { /* private browsing may block storage */ }
    if (session?.role === "host") session.broadcast(state);
  }
}

function categoryById(id) { return CATEGORIES.find((item) => item.id === id); }
function currentGame() { return GAMES.find((game) => game.id === state.currentRound?.gameId); }
function currentContent() {
  const content = contentForRound(currentGame(), state.currentRound);
  if (state.language !== "nl" && state.language !== "da") return {...content, prompts: content.prompts.map(p => displayDenmarkPrompt(p, "en"))};
  const nl = state.language === "nl";
  let adjusted=content;
  const languagePacks = nl ? {rebus: DUTCH_REBUS_PACKS, riddle: DUTCH_RIDDLE_PACKS} : {rebus: DANISH_REBUS_PACKS, riddle: DANISH_RIDDLE_PACKS};
  if (currentGame()?.id === "rebus" && languagePacks.rebus[state.currentRound?.difficulty])
    adjusted={...content, prompts: languagePacks.rebus[state.currentRound.difficulty].prompts};
  if (currentGame()?.id === "riddle-round" && languagePacks.riddle[state.currentRound?.difficulty])
    adjusted={...content, prompts: languagePacks.riddle[state.currentRound.difficulty].prompts};
  if (currentGame()?.id === "codebreaker")
    adjusted={...content, prompts: content.prompts.map((p) => nl ? dutchCodebreakerPrompt(p,state.currentRound.difficulty) : danishCodebreakerPrompt(p,state.currentRound.difficulty))};
  if (currentGame()?.id === "dance-competition") {
    adjusted = {...adjusted, prompts: adjusted.prompts.map((prompt) => {
      const songAndArtist = prompt.text.replace(/^Dance on the first one minute of this song: /, "");
      return {...prompt, text: (nl ? "Dans op de eerste minuut van dit nummer: " : "Dans til det første minut af denne sang: ") + songAndArtist};
    })};
  }
  const localized = nl ? dutchGameRules(currentGame(), state.currentRound, adjusted) : danishGameRules(currentGame(), state.currentRound, danishWordplayPrompts(currentGame(), state.currentRound, adjusted));
  return {...localized, prompts: localized.prompts.map(p => displayDenmarkPrompt(p, state.language))};
}
function currentPrompt() { return currentContent()?.prompts[state.currentRound.promptIndex]; }
function defenderTeam() { return state.teams.find((team) => team.id === state.currentRound?.matchup?.defenderTeamId); }
function defenderContent() {
  const team = defenderTeam();
  if (!team) return null;
  // Single-player Word Recall is a fair duel over exactly the same word list,
  // even if the two players have different proficiency levels.
  if (state.format === "single" && currentGame()?.id === "word-recall-battle") return currentContent();
  const defenderContent = contentForRound(currentGame(), { ...state.currentRound, difficulty: team.level });
  return {...defenderContent, prompts: defenderContent.prompts.map(p => displayDenmarkPrompt(p, state.language))};
}
function defenderPrompt() { return defenderContent()?.prompts[state.currentRound.defenderPromptIndex ?? 0]; }
function canControl() { return !session || session.role !== "guest"; }
function levelText(id) { const level = LEVELS.find((item) => item.id === id); return level ? `${level.name} (${level.age})` : "Skilled (18+)"; }
function levelOptions(selected) { return LEVELS.map((level) => `<option value="${level.id}" ${level.id === selected ? "selected" : ""}>${level.name} · ages ${level.age}</option>`).join(""); }
function activeTeam() { return state.teams[state.turnIndex]; }
function formatTime(seconds) { return `${Math.floor(seconds / 60).toString().padStart(2, "0")}:${(seconds % 60).toString().padStart(2, "0")}`; }
function clockMode(game) { return game.clock || "standard"; }
function stageLength(game, round) { return clockMode(game) === "staged" ? game.stages[round.stageIndex].seconds : round.duration; }

function button(label, action, variant = "soft", extra = "", disabled = false) {
  return `<button type="button" class="btn btn-${variant} ${extra}" data-action="${action}" ${disabled ? "disabled" : ""}>${label}</button>`;
}

function categoryTiles(inModal = false) {
  const isSingle = state.format === "single";
  const choices = new Set(state.enabledGameIds || GAMES.map((g) => g.id));
  const blocks = CATEGORIES.map((category) => {
    const games = GAMES.filter((game) => game.category === category.id && !(isSingle && ["sketch-guess","mime-relay","silent-charades","picture-race"].includes(game.id)));
    const selectedCount = games.filter((game) => choices.has(game.id)).length;
    const selected = state.enabledCategories.includes(category.id) && selectedCount > 0;
    const expanded = expandedCategories.has(category.id);
    return `<div class="category-group ${expanded ? "is-expanded" : ""}">
      <div class="category-tile ${selected ? "selected" : ""}">
        <label class="category-select">
          <input type="checkbox" data-role="category" value="${category.id}" ${selected ? "checked" : ""} />
          <span class="cat-icon color-${category.color}">${escapeHtml(category.icon)}</span>
          <span class="category-copy"><strong>${escapeHtml(category.name)}</strong><small>${selected ? selectedCount : 0} / ${games.length} minigames</small></span>
          <span class="check-indicator">${selected ? "✓" : "+"}</span>
        </label>
        <button type="button" class="category-expand" data-action="expand-category" data-category="${category.id}"
          aria-label="${expanded ? "Hide" : "Choose"} games in ${escapeHtml(category.name)}"
          aria-expanded="${expanded}" title="Choose individual games">${expanded ? "▴" : "▾"}</button>
      </div>
      ${expanded ? `<div class="category-game-panel">
        <div class="category-game-actions">
          <span>Choose minigames</span>
          ${button("✓ Select all", "select-category-games", "text", "mini-category-button")}
          ${button("⊘ Clear all", "clear-category-games", "text", "mini-category-button")}
        </div>
        <div class="category-game-list">${games.map((game) => `<label class="category-game-choice"><input type="checkbox" data-role="category-game" data-category="${category.id}" value="${escapeHtml(game.id)}" ${selected && choices.has(game.id) ? "checked" : ""}/><span>${escapeHtml(game.name)}</span></label>`).join("")}</div>
      </div>` : ""}
    </div>`;
  }).join("");
  return `<div class="category-grid">${blocks}</div>
    <div class="category-footer"><span ${state.language === "nl" ? "data-no-translate" : ""}><strong>${state.enabledCategories.length}</strong>${state.language === "nl" ? ` van ${CATEGORIES.length} categorieën geselecteerd` : ` of ${CATEGORIES.length} categories enabled`}</span>
      <div class="category-actions">${button("Select all", "select-all", "text")}${button("Clear", "clear-categories", "text")}</div>
    </div>${inModal ? '<p class="fine-print">Changes apply to the next round, not the challenge already on screen.</p>' : ""}`;
}

function teamEditor(team, index) {
  const badge = String(index + 1).padStart(2, "0");
  if (state.format === "single") return `<div class="team-editor single-player-editor">
    <div class="team-editor-head"><span class="team-index">${badge}</span><div class="team-label"><span>PLAYER ${index + 1} · ONE-PERSON TEAM</span><strong>${escapeHtml(team.name || `Player ${index + 1}`)}</strong></div>
      ${state.teams.length > 2 ? `<button class="icon-button danger" title="Remove player" aria-label="Remove player ${index + 1}" data-action="remove-team" data-index="${index}">×</button>` : ""}</div>
    <label class="input-label">Player name <input aria-label="Player ${index + 1} name" data-role="solo-player-name" data-index="${index}" maxlength="32" value="${escapeHtml(state.language === "nl" && team.players[0] === `Player ${index + 1}` ? `Speler ${index + 1}` : team.players[0])}" /></label>
    <label class="input-label proficiency-label">Player proficiency <select aria-label="Player ${index + 1} proficiency" data-role="team-level" data-index="${index}">${levelOptions(team.level)}</select></label>
    <p class="single-player-note" ${state.language === "nl" ? "data-no-translate" : ""}>${state.language === "nl" ? "Deze speler behoort tot zijn eigen team en kan alleen een punt scoren in zijn eigen beurt." : "This player is their own team. Their score counts only on their turns."}</p>
  </div>`;
  return `<div class="team-editor">
    <div class="team-editor-head"><span class="team-index">${badge}</span><div class="team-label"><span>TEAM ${index + 1}</span><strong>Choose your side</strong></div>
      ${state.teams.length > 2 ? `<button class="icon-button danger" title="Remove team" aria-label="Remove team ${index+1}" data-action="remove-team" data-index="${index}">×</button>` : ""}
    </div>
    <label class="input-label">Team name <input aria-label="Team ${index+1} name" data-role="team-name" data-index="${index}" maxlength="32" value="${escapeHtml(team.name)}" /></label>
    <label class="input-label proficiency-label">Team proficiency <select aria-label="Team ${index+1} proficiency" data-role="team-level" data-index="${index}">${levelOptions(team.level)}</select></label>
    <div class="players-title"><span>PLAYERS</span><span>${team.players.length} / 3</span></div>
    <div class="player-fields">${team.players.map((player, playerIndex) => `<div class="player-row"><span class="player-number">${playerIndex + 1}</span>
      <input aria-label="Team ${index+1} player ${playerIndex+1} name" data-role="player-name" data-index="${index}" data-player-index="${playerIndex}" maxlength="32" value="${escapeHtml(player)}" />
      ${playerIndex === 2 ? `<button class="mini-remove" title="Remove third player" aria-label="Remove third player" data-action="remove-player" data-index="${index}">×</button>` : ""}</div>`).join("")}</div>
    ${team.players.length < 3 ? `<button type="button" class="add-player" data-action="add-player" data-index="${index}">+ Add third player</button>` : ""}
  </div>`;
}

function sessionControls() {
  if (session?.role === "host") return `<section class="session-box session-active"><div><span class="step-label">LIVE SESSION · HOST</span><h3>Share code <code class="session-code">${escapeHtml(session.code)}</code></h3><p>${escapeHtml(sessionStatus || "Connecting…")} ${session.connected}/${5} devices connected. Only this host can control clocks and answers.</p></div>${button("End session", "end-session", "outline")}</section>`;
  if (session?.role === "guest") return `<section class="session-box session-active"><div><span class="step-label">LIVE SESSION · GUEST</span><h3>Joined <code class="session-code">${escapeHtml(session.code)}</code></h3><p>${escapeHtml(sessionStatus)} · Read-only game view.</p></div>${button("Leave session", "leave-session", "outline")}</section>`;
  return `<section class="session-box"><div><span class="step-label">OPTIONAL · PLAY TOGETHER ON PHONES</span><h3>Create or join a session</h3><p>One host plus up to four guest devices. The host controls all timers, cards, answers and scoring; guests can read along. Requires internet on every device.</p></div><div class="session-actions">${button("✦ Make session", "make-session", "primary")}<label class="session-code-field">Join with code<input data-role="join-code" aria-label="Session code" maxlength="8" placeholder="8-letter code" value="${escapeHtml(joinCode)}" /></label>${button("Join session", "join-session", "outline")}</div>${sessionStatus ? `<p class="session-status">${escapeHtml(sessionStatus)}</p>` : ""}</section>`;
}

function renderHome() {
  if (session?.role === "guest") return `<div class="guest-waiting">${sessionControls()}<h1>Waiting for your host<span class="headline-dot">.</span></h1></div>`;
  return `<section class="format-home">
    <div class="eyebrow"><span class="eyebrow-line"></span> LIVING ROOM BATTLES · V4.10</div>
    <h1>Choose your<br/><em>game night.</em></h1>
    <p>Two formats. The same one-point-per-turn challenge. Pick how many people play on each side.</p>
    <div class="format-grid">
      <article class="format-card"><span class="format-icon">✳</span><span class="step-label">ORIGINAL FORMAT</span><h2>Team Battles</h2><p>2–6 teams, each with 2 or 3 players. Work together or face another team in 38 living-room minigames.</p><div class="format-stats"><span>2–3 players per team</span><span>38 minigames</span></div>${button('Play Team Battles ↗', 'choose-team', 'primary', 'full')}</article>
      <article class="format-card format-single"><span class="format-icon">✦</span><span class="step-label">ONE-PLAYER FORMAT</span><h2>Solo Showdown</h2><p>2 to 6 players total. Every person is their own team. Play alone for a point or challenge one opponent.</p><div class="format-stats"><span>1 player per team</span><span>34 minigames</span></div>${button('Play Solo Showdown ↗', 'choose-single', 'primary', 'full')}</article>
    </div>
  </section><section class="setup-content">${sessionControls()}</section>`;
}

function renderLanguage() {
  const single = state.format === "single";
  return `<section class="language-screen"><div class="eyebrow"><span class="eyebrow-line"></span> STEP 02 · LANGUAGE / TAAL</div>
  <h1>Choose your<br/><em>language.</em></h1>
  <p>${single ? "Solo Showdown" : "Team Battles"} · Choose the language for the entire game, including rules, game cards, questions, answers and timers.</p>
  <div class="language-grid" role="group" aria-label="Choose language">
    <button class="language-tile" type="button" data-action="language-english"><span class="language-mark">EN</span><strong>English</strong><span>Play in English</span><span class="language-arrow">↗</span></button>
    <button class="language-tile" type="button" data-action="language-other"><span class="language-mark">🌐</span><strong>Other language</strong><span>Choose Nederlands or Dansk</span><span class="language-arrow">↗</span></button>
  </div>
  <div class="language-back">${button("← Back to game formats", "back-format", "text")}</div></section>`;
}

function renderLanguageList() {
  return `<section class="language-screen"><div class="eyebrow"><span class="eyebrow-line"></span> OTHER LANGUAGES / ANDERE TALEN</div>
  <h1>Choose another <em>language.</em></h1><p>Choose your language · Kies je taal · Vælg dit sprog</p>
  <div class="language-grid"><button class="language-tile" type="button" data-action="language-dutch"><span class="language-mark">NL</span><strong>Nederlands</strong><span>Speel het hele spel in het Nederlands</span><span class="language-arrow">↗</span></button>
  <button class="language-tile" type="button" data-action="language-danish"><span class="language-mark">DA</span><strong>Dansk</strong><span>Spil hele spillet på dansk</span><span class="language-arrow">↗</span></button></div>
  <div class="language-back">${button("← Back / Terug", "back-language", "text")}</div></section>`;
}

function renderSetup() {
  if (session?.role === "guest") return `<div class="guest-waiting">${sessionControls()}<h1>Waiting for your host<span class="headline-dot">.</span></h1><p>Your host will set up teams and start the game. Their instructions and cards will appear here automatically.</p></div>`;
  const gameCount = availableGames(state).length;
  const single = state.format === "single";
  return `<section class="setup-intro ${single ? "solo-intro" : ""}">
    <div class="eyebrow"><span class="eyebrow-line"></span> ${single ? "SOLO SHOWDOWN · ONE PLAYER PER TEAM" : "TEAM BATTLES · ORIGINAL FORMAT"}</div>
    <h1>${single ? "Every player<br/><em>for themselves.</em>" : "Make the room<br/><em>your arena.</em>"}</h1>
    <p>${single ? "Each person is their own one-player team. Take turns earning your point solo or block the current player in a duel." : "Bring your people, pick your favorite challenges, and let the friendly rivalry begin. Quick living-room games. One point at a time."}</p>
    <div class="intro-stats"><div><strong>${single ? "1" : "2–3"}</strong><span>player${single ? "" : "s"} per team</span></div><i></i><div><strong>~3 min</strong><span>per turn</span></div><i></i><div><strong>${gameCount}</strong><span>available games</span></div></div>
    <div class="intro-decoration" aria-hidden="true"><div class="decor-card decor-a">✳ <small>PLAY TOGETHER</small></div><div class="decor-card decor-b">✦ <small>PLAY TO WIN</small></div><div class="decor-star">✶</div></div>
  </section>
  <section class="setup-content">
    ${button(state.language === "nl" ? "← Verander spelvorm" : "← Change game format", 'back-home', 'outline', 'format-back')}
    ${sessionControls()}
    <div class="section-heading"><div><div class="step-label">STEP 01 <span>—</span> ${single ? "PLAYERS" : "YOUR SQUAD"}</div><h2>Who's playing?</h2><p ${state.language === "nl" ? "data-no-translate" : ""}>${single ? (state.language === "nl" ? "Voer 2 tot 6 namen van spelers in. Elke speler behoort tot precies één team en ontvangt een individuele score." : "Enter 2 to 6 player names. Each person has exactly one team and an individual score.") : (state.language === "nl" ? "Hernoem je team en voer elke spelersnaam in." : "Rename your teams and enter every player's name.")}</p></div><span class="section-count">${state.teams.length} ${single ? "PLAYERS" : "TEAMS"}</span></div>
    <p class="rounds-explainer" ${state.language === "nl" ? "data-no-translate" : ""}>${state.language === "nl" ? (single ? "Kies het niveau van elke speler. De standaardinstelling selecteert automatisch vragen die bij het niveau van de speler passen. Bij intellectuele en strategische duels hebben tegenstanders maximaal één niveau verschil." : "Kies het niveau van elk team. De standaardinstelling selecteert automatisch een vraag passend bij het niveau van het team dat aan de beurt is. Bij intellectuele of strategische duels strijden alleen teams met maximaal één niveau verschil tegen elkaar.") : `Choose a proficiency for each ${single ? "player" : "team"}. By default, questions use that ${single ? "person's" : "team's"} level. Intellectual/strategy duels match opponents of the same or one adjacent level; trivia can compare different levels using different questions.`}</p>
    <div class="team-grid">${state.teams.map(teamEditor).join("")}</div>
    <div class="add-team-wrap">${state.teams.length < 6 ? button(`<span class="plus-symbol">+</span> Add another ${single ? "player" : "team"}`, 'add-team', 'outline', 'full') : `<span class="fine-print">Maximum ${single ? "six players" : "six teams"} reached.</span>`}</div>
    <div class="section-heading rounds-heading"><div><div class="step-label">STEP 02 <span>—</span> GAME LENGTH</div><h2>How many rounds?</h2><p>${state.language === "nl" ? "Een ronde betekent dat elk team precies één keer aan de beurt is geweest." : "One round means every team gets exactly one turn, in order."}</p></div></div>
    <div class="rounds-config"><label class="input-label" for="rounds-input">Rounds per team <input id="rounds-input" type="number" data-role="round-count" min="1" max="20" step="1" value="${state.roundsPerTeam}" /></label><div class="duration-estimate"><span>ESTIMATED GAME LENGTH</span><strong id="duration-estimate">~${estimatedMinutes(state)} minutes</strong><small id="duration-detail">${totalTurns(state)} turns overall · ~${state.teams.length * 3} minutes per full round</small></div></div>
    <p class="rounds-explainer">${state.language === "nl" ? "Enkele spellen gebruiken kortere of helemaal geen klok." : "Estimate: about 2 minutes 30 seconds for a standard challenge, plus ~30 seconds for rules and scoring. Some games use shorter clocks or no main clock at all, so actual playtime will vary."}</p>
    <div class="section-heading categories-heading"><div><div class="step-label">STEP 03 <span>—</span> YOUR VIBE</div><h2>Pick your categories.</h2><p>All categories are on by default. Turn off anything your group doesn't fancy.</p></div><span class="section-count">${gameCount} GAMES</span></div>
    ${categoryTiles()}
    <div class="setup-launch"><div><strong>Ready to rumble?</strong><span ${state.language === "nl" ? "data-no-translate" : ""}>${state.language === "nl" ? (single ? "Iedereen heeft zijn eigen score en komt even vaak aan de beurt. Je instelling is opgeslagen in de browser." : "Eén apparaat bestuurt het spel. Je instelling is opgeslagen in de browser.") : `${single ? "Everyone has their own score and gets an equal number of turns." : "One device controls the game."} Your setup is saved in this browser.`}</span></div>
      ${button('Start the game <span class="arrow">↗</span>', 'start-game', 'primary', 'launch-button')}</div>
    ${latestError ? `<p class="form-error" role="alert">${escapeHtml(latestError)}</p>` : ""}
  </section>`;
}

function scoreboard() {
  return `<div class="scoreboard" aria-label="Scoreboard">${state.teams.map((team, index) => `<div class="score-tile ${index === state.turnIndex ? "is-active" : ""}">
    <div class="score-team"><span class="score-team-dot"></span>${escapeHtml(team.name)} ${index === state.turnIndex ? '<span class="turn-flag">TURN</span>' : ""}</div>
    <div class="score-bottom"><strong>${team.score}</strong><span>${team.players.length} ${team.players.length === 1 ? "PLAYER" : "PLAYERS"}</span></div>
  </div>`).join("")}</div>`;
}

function optionList(teams, selected) {
  return teams.map((team) => `<option value="${escapeHtml(team.id)}" ${team.id === selected ? "selected" : ""}>${escapeHtml(team.name)}</option>`).join("");
}

function playerOptionList(players, selected) {
  return players.map((name, index) => `<option value="${index}" ${index === selected ? "selected" : ""}>${escapeHtml(name)}</option>`).join("");
}

function matchupCard(mode) {
  if (mode === "coop") return `<div class="match-card"><div class="card-overline">WHO PLAYS?</div><h3>All in, together.</h3><p>${state.language === "nl" ? `Elke teamgenoot van <strong>${escapeHtml(activeTeam().name)}</strong> werkt samen om een punt te verdienen. Geen verdedigend team in deze ronde.` : `Every member of <strong>${escapeHtml(activeTeam().name)}</strong> works toward the same point. No defending team in this round.`}</p><div class="people-pills">${activeTeam().players.map((name) => `<span>${escapeHtml(name)}</span>`).join("")}</div></div>`;
  if (mode === "solo") {
    if (state.format === "single") return `<div class="match-card"><div class="card-overline">WHO PLAYS?</div><h3>${escapeHtml(activeTeam().name)} plays alone.</h3><p>${state.language === "nl" ? `Geen tegenstander(s) deze ronde. ${escapeHtml(activeTeam().name)} moet het doel behalen om een punt te scoren. Een tegenstander mag de antwoorden controleren.` : `No defender competes in this round. ${escapeHtml(activeTeam().name)} must meet the listed target to earn the point. Anyone else may check the answers but cannot score.`}</p></div>`;
    const canChoose = canControl() && !state.timerRunning && !state.currentRound.revealUsed && !state.currentRound.promptVisible;
    const chosen = state.currentRound.soloPlayerIndex ?? 0;
    return `<div class="match-card"><div class="card-overline">WHO PLAYS?</div><h3>One player. Six questions.</h3><p>${state.language === "nl" ? `Eén speler van <strong>${escapeHtml(activeTeam().name)}</strong> beantwoordt de vragen alleen.` : `One member of <strong>${escapeHtml(activeTeam().name)}</strong> answers alone.`} ${state.language === "nl" ? "Teamgenoten mogen niet helpen. Er doet geen verdedigend team mee." : "Teammates must not help; no defending team participates."}</p>${canChoose ? `<label class="match-label">Choose the player<select aria-label="Solo player" data-role="solo-player">${playerOptionList(activeTeam().players, chosen)}</select></label>` : `<div class="people-pills"><span>${escapeHtml(activeTeam().players[chosen])}</span></div>`}</div>`;
  }
  const m = state.currentRound.matchup;
  const defender = defenderTeam();
  const opponents = allowedDefenders(state, currentGame());
  const assigned = m.method === "assigned";
  const editable = canControl() && !assigned && (clockMode(currentGame()) === "none" || !(state.timerRunning || state.currentRound.revealUsed || state.currentRound.promptVisible));
  const single = state.format === "single";
  const judgeGame = ["headline-teams", "staring-contest", "dance-competition"].includes(currentGame().id);
  const neutralJudge = judgeGame ? state.teams.find((team) => team.id !== activeTeam().id && team.id !== defender.id) : null;
  return `<div class="match-card"><div class="card-overline">THE MATCHUP <span class="method-badge">${assigned ? "✧ APP ASSIGNED" : "✎ PLAYER CHOICE"}</span></div>
    <h3>${single || mode === "duel" ? "One player. One rival." : currentGame().id === "rebus" ? "Two players per team: 2v2." : "Team versus team."}</h3>
    <p>${assigned ? "The app selected this matchup." : single ? `The active player, ${escapeHtml(activeTeam().name)}, chooses an opponent.` : mode === "duel" ? (state.language === "nl" ? `Het actieve team, ${escapeHtml(activeTeam().name)}, kiest zowel zijn eigen speler als zijn tegenstander.` : `The active team, ${escapeHtml(activeTeam().name)}, chooses BOTH its own player and the opposing player.`) : `The active team, ${escapeHtml(activeTeam().name)}, chooses its defending team.`}</p>
    ${editable ? `<label class="match-label">Defending team<select data-role="defender-team">${optionList(opponents, defender.id)}</select></label>` : ""}
    ${mode === "duel" ? `<div class="match-versus"><div><span>ACTIVE PLAYER</span>${!editable || single ? `<strong>${escapeHtml(activeTeam().players[m.activePlayerIndex])}</strong>` : `<select aria-label="Active player" data-role="active-player">${playerOptionList(activeTeam().players, m.activePlayerIndex)}</select>`}</div><span class="versus-symbol">VS</span><div><span>DEFENDER</span>${!editable || single ? `<strong>${escapeHtml(defender.players[m.defenderPlayerIndex])}</strong>` : `<select aria-label="Defending player" data-role="defender-player">${playerOptionList(defender.players, m.defenderPlayerIndex)}</select>`}</div></div>` : `<div class="match-versus"><div><span>ACTIVE TEAM</span><strong>${escapeHtml(activeTeam().name)}</strong><small>${currentGame().id === "rebus" && mode === "battle" ? "Select any TWO players; third sits out" : activeTeam().players.map(escapeHtml).join(" · ")}</small></div><span class="versus-symbol">VS</span><div><span>DEFENDERS</span><strong>${escapeHtml(defender.name)}</strong><small>${currentGame().id === "rebus" && mode === "battle" ? "Select any TWO players; third sits out" : defender.players.map(escapeHtml).join(" · ")}</small></div></div>`}
    ${currentGame().id === "rebus" && mode === "battle" && state.language !== "nl" ? `<p class="neutral-judge">✦ REBUS 2v2: Each team selects exactly TWO participating players. If a team has three players, the third must sit out and may not suggest answers.</p>` : ""}
    ${judgeGame && (neutralJudge || state.language !== "nl" || currentGame().id === "dance-competition") ? `<p class="neutral-judge">${neutralJudge ? `⚖ Neutral judge: <strong>${escapeHtml(neutralJudge.name)}</strong> ${currentGame().id === "staring-contest" ? "watches for the first blink." : currentGame().id === "dance-competition" ? "judges which dancer wins." : "decides which headline wins each situation."}` : currentGame().id === "staring-contest" ? "⚖ No neutral team: both sides decide fairly who blinked first; replay disputes." : currentGame().id === "dance-competition" ? "⚖ No neutral team: non-dancing teammates from both teams judge fairly together." : "⚖ No neutral team: both sides decide together. Disagreements count as ties."}</p>` : ""}
    <p class="level-match-note">${escapeHtml(activeTeam().name)}: ${escapeHtml(levelText(activeTeam().level))}<br/>${escapeHtml(defender.name)}: ${escapeHtml(levelText(defender.level))}</p>
    <div class="defense-note" ${state.language === "da" ? "data-no-translate" : ""}>${state.language === "nl" ? "🛡 Het verdedigende team kan het punt voorkomen, maar nooit verdienen." : state.language === "da" ? (single ? "🛡 Modstanderen kan forhindre den aktive spiller i at få point, men kan ikke selv få point på denne tur." : "🛡 Modstanderholdet kan forhindre det aktive hold i at få point, men kan ikke selv få point på denne tur.") : "🛡 The defending side can stop the point, but never earn one this turn."}</div>
  </div>`;
}

function clockInstruction(game, round) {
  // Danish timing instructions are complete sentences rather than literal
  // word-by-word translations. Keep the solo/team and memory-stage wording
  // consistent with the selected format and actual timer behavior.
  if (state.language === "da") {
    if (clockMode(game) === "none") return game.id === "reaction-rules"
      ? "INGEN TIMER NØDVENDIG."
      : "INGEN TIMER NØDVENDIG. Følg reglerne på spilkortet.";
    if (clockMode(game) === "staged") return game.id === "digit-duel"
      ? "Tryk på »Start hukommelsesleg«: 20 sekunder til at huske cifrene → 30 sekunder til at skrive cifrene ned fra hukommelsen. Faserne skifter automatisk."
      : "Tryk på »Start hukommelsesleg«: 25 sekunder til at huske ordene → 90 sekunder til at skrive ordene ned fra hukommelsen. Faserne skifter automatisk.";
    return `TIMER NØDVENDIG: ${round.duration} sekunder. ${game.requiresTimerBeforeReveal
      ? "START timeren, før du åbner spilkortet."
      : state.format === "single" ? "Start timeren, når du er klar til at spille." : "Start timeren, når holdet er klar til at spille."}`;
  }
  if (clockMode(game) === "none") return state.language === "nl" && game.id === "reaction-rules" ? "GEEN TIMER NODIG." : state.language === "nl" ? "GEEN TIMER NODIG. Volg de regels op de speelkaart." : "NO MAIN CLOCK NEEDED. Follow the spoken-turn rules; nothing needs to be started.";
  if (clockMode(game) === "staged") {
    if (state.language === "nl" && game.id === "digit-duel") return "Druk op ‘Begin geheugenspel’: 20 seconden om de cijfers te onthouden → 30 seconden om vanuit het geheugen de cijfers op te schrijven. De fases wisselen automatisch.";
    if (state.language === "nl" && game.id === "word-recall-battle") return "Druk op ‘Begin geheugenspel’: 25 seconden om de woorden te onthouden → 90 seconden om de woorden vanuit het geheugen op te schrijven. De fases wisselen automatisch.";
    return `CLOCK NEEDED. Press Start: ${game.stages.map((s) => `${s.seconds}s ${s.label.toLowerCase()}`).join(" → ")}. The stages switch automatically. No 150-second timer.`;
  }
  return state.language === "nl" ? `TIMER NODIG: ${round.duration} seconden. ${game.requiresTimerBeforeReveal ? "START de timer voordat je de speelkaart opent." : "Begin wanneer je team klaar is om te spelen."}` : `CLOCK NEEDED: ${round.duration} seconds. ${game.requiresTimerBeforeReveal ? "START the timer BEFORE revealing the game card." : "Start when your team is ready to play."}`;
}

function timerPanel(game, compact = false) {
  const round = state.currentRound;
  const mode = clockMode(game);
  if (mode === "none") return `<div class="${compact ? "fullscreen-clock" : "timer-card no-clock-card"}"><strong>◷ NO CLOCK NEEDED</strong><p>${state.language === "nl" ? (game.id === "reaction-rules" ? "" : "Volg de regels op de speelkaart.") : "Follow the game-card rules. There is no countdown for this challenge."}</p></div>`;
  const length = stageLength(game, round);
  const stageLabel = mode === "staged" ? `STAGE ${round.stageIndex + 1} OF ${game.stages.length}: ${game.stages[round.stageIndex].label}` : `${round.duration}-SECOND CHALLENGE`;
  const label = round.timerExpired ? "Time's up ✓" : state.timerRunning ? mode === "staged" ? "Timer running…" : "Pause timer" : round.revealUsed && mode === "staged" ? "Resume writing timer ▶" : state.timerRemaining === length ? mode === "staged" ? "Start memory challenge ↗" : "Start timer ↗" : "Resume timer ▶";
  const action = state.timerRunning && mode === "standard" ? "pause-timer" : "start-timer";
  const disabled = round.timerExpired || (state.timerRunning && mode === "staged");
  return `<div class="${compact ? "fullscreen-clock" : "timer-card"}"><div class="card-overline">${escapeHtml(stageLabel)}</div><div class="timer-disc" style="--progress:${((length - state.timerRemaining) / length * 100).toFixed(1)}%"><span class="timer-value">${formatTime(state.timerRemaining)}</span><small>MIN : SEC</small></div>${canControl() ? `<div class="timer-controls">${button(label, action, state.timerRunning && mode === "standard" ? "outline" : "primary", "full", disabled)}</div>` : `<span class="guest-timer-label">Only the host controls this timer.</span>`}</div>`;
}

function challengeCard(game, fullScreen = false) {
  const category = categoryById(game.category);
  const round = state.currentRound;
  const mode = round.mode;
  const content = currentContent();
  const prompt = currentPrompt();
  const promptText = escapeHtml(prompt?.text || "").replace(/\n/g, "<br/>");
  const danishExclusiveCard = Boolean(prompt?.danishExclusive || prompt?.dutchExclusive);
  const localizedPuzzle = danishExclusiveCard || ["nl", "da"].includes(state.language) && ["rebus", "codebreaker", "riddle-round", "dance-competition"].includes(game.id);
  const answerText = escapeHtml(prompt?.answer || "").replace(/\n/g, "<br/>");
  const staged = clockMode(game) === "staged";
  const untimed = clockMode(game) === "none";
  const mustStart = game.requiresTimerBeforeReveal && !state.timerRunning;
  const timed = !staged && Number.isInteger(content.previewSeconds);
  const expired = timed && round.revealUsed && !round.promptVisible;
  const levelLocked = !canControl() || (!untimed && (round.revealUsed || state.timerRunning || round.timerExpired || round.promptVisible));
  const levelPicker = hasDifficulty(game) ? `<label class="variant-label">CHOOSE DIFFICULTY <select aria-label="Difficulty level" data-role="difficulty" ${levelLocked ? "disabled" : ""}>${LEVELS.map((level) => `<option value="${level.id}" ${level.id === round.difficulty ? "selected" : ""} ${!isLevelAllowedForGame(game, level.id) ? "disabled" : ""}>${level.name} (${level.age})${!isLevelAllowedForGame(game, level.id) ? " · not available for this game" : ""}</option>`).join("")}</select></label>` : "";
  const stylePicker = GAME_STYLES[game.id] ? `<label class="variant-label">CHOOSE SITUATIONS <select aria-label="Headline style" data-role="style" ${levelLocked ? "disabled" : ""}><option value="goofy" ${round.style === "goofy" ? "selected" : ""}>Goofy</option><option value="normal" ${round.style === "normal" ? "selected" : ""}>Normal / everyday</option></select></label>` : "";
  const timerWarning = mustStart ? `<p class="reveal-warning">${state.language === "nl" ? `⏱ Start de timer van ${round.duration} seconden voordat je de speelkaart opent.` : `⏱ Start the ${round.duration}-second timer before revealing this card.`}</p>` : "";
  const previewWarning = timed ? `<p class="reveal-note">${state.language === "nl" ? `De gekozen spelers krijgen <strong>${content.previewSeconds} seconden</strong> de tijd om de omschrijving van de tekening te bestuderen. Daarna verdwijnt de speelkaart automatisch. ${game.allowRevealReset ? "Als er iets fout gaat, gebruik dan de resetknop om de tijd te resetten." : "Je kunt de speelkaart niet opnieuw openen."}` : `The selected players get <strong>${content.previewSeconds} seconds</strong> to study the card. It then hides automatically. ${game.allowRevealReset ? "If something goes wrong, use the confirmed re-view option to restart both clocks." : "You cannot reveal it again."}`}</p>` : content.alwaysVisible ? `<p class="reveal-note">${state.language === "nl" ? "Op dit niveau mogen de gekozen spelers de omschrijving tijdens het tekenen blijven bekijken. Teamgenoten mogen niet helpen." : "At this level, the selected players may keep the card visible while drawing. Teammates may not help."}</p>` : "";
  const previewCountdown = timed && round.promptVisible ? `<div class="reveal-countdown" role="timer">Card hides in <strong class="reveal-seconds">${round.revealRemaining ?? content.previewSeconds}</strong> seconds</div>` : "";
  const buttonLabel = expired ? "Card viewed ✓" : round.promptVisible ? timed ? "Card is visible" : "Hide game card" : timed ? `Reveal for ${content.previewSeconds} seconds` : "Reveal game card";
  const mustFinishToAnswer = ["word-recall-battle", "digit-duel", "rebus", "riddle-round"].includes(game.id) || game.id.startsWith("topic-trivia-");
  const answerAllowed = !mustFinishToAnswer || round.timerExpired;
  const finishAndCheck = canControl() && ["rebus", "riddle-round"].includes(game.id) || canControl() && game.id.startsWith("topic-trivia-");
  const finishAndCheckButton = finishAndCheck && round.promptVisible && !round.timerExpired ? button("✓ Finish attempt & reveal answers", "finish-and-reveal", "outline") : "";
  const answerButton = canControl() && prompt?.answer && answerAllowed ? button(round.answerVisible ? "Hide answers" : "Reveal answers", "toggle-answer", "text") : "";
  const revealButton = !canControl() || untimed || staged ? "" : button(buttonLabel, "toggle-prompt", "outline", "", mustStart || (timed && round.revealUsed) || round.timerExpired);
  const redoButton = canControl() && game.allowRevealReset && round.revealUsed ? button("↺ Re-view card (reset both timers)", "reset-reveal", "text") : "";
  const restartMemoryButton = canControl() && ["digit-duel", "word-recall-battle"].includes(game.id) && round.revealUsed ? button("↺ Restart memory challenge", "reset-memory", "text") : "";
  const shapeReviewButton = canControl() && game.id === "shape-copy" && round.timerExpired ? button(round.answerVisible ? "Hide original shape" : "Show original shape", "toggle-answer", "text") : "";
  const defenderCanHaveOwnQuestion = (["quickfire-facts", "trivia-board", "word-recall-battle"].includes(game.id) || game.id.startsWith("topic-trivia-")) && !["coop", "solo"].includes(mode) && Boolean(defenderTeam());
  const possibleDefenderPrompt = defenderCanHaveOwnQuestion ? defenderPrompt() : null;
  const sharedTopicTrivia = game.id.startsWith("topic-trivia-") && round.difficulty === defenderTeam()?.level;
  const defenderDifferentQuestions = defenderCanHaveOwnQuestion && !sharedTopicTrivia && possibleDefenderPrompt?.text !== prompt?.text;
  const defenderQ = defenderDifferentQuestions ? possibleDefenderPrompt : null;
  return `<article class="challenge-card ${fullScreen ? "challenge-fullscreen" : ""}">
    <div class="challenge-top"><span class="mode-pill mode-${mode}">${escapeHtml(MODE_NAMES[mode])}</span><span class="equipment">✎ ${escapeHtml(content.equipment || game.equipment)}</span>${fullScreen ? `${canControl() ? button("↷ Skip question", "skip-challenge", "outline") : ""}${button("✕ Exit fullscreen", "exit-fullscreen", "outline")}` : button("⛶ Fullscreen card", "enter-fullscreen", "outline")}</div>
    <div class="challenge-identity"><span class="challenge-cat-icon color-${category.color}">${escapeHtml(category.icon)}</span><div><div class="challenge-category">${escapeHtml(category.name)}</div><h2>${escapeHtml(game.name)}</h2></div></div>
    ${levelPicker || stylePicker ? `<div class="variant-picker">${levelPicker}${stylePicker}<small>${state.language === "nl" ? `Standaard: ${escapeHtml(levelText(activeTeam().level))}.${untimed ? "" : " Kies het niveau vóór het starten van de klok en het openen van de speelkaart."}` : `Default: ${escapeHtml(levelText(activeTeam().level))}. ${untimed ? "Change level before judging the result." : "Choose before starting the clock or revealing the card."}`}</small></div>` : ""}
    <div class="clock-rule"><strong>◷ CLOCK INSTRUCTIONS</strong><p ${state.language === "da" ? "data-no-translate" : ""}>${escapeHtml(clockInstruction(game, round))}</p></div>
    ${fullScreen ? timerPanel(game, true) : ""}
    <p class="challenge-description" ${["nl", "da"].includes(state.language) ? "data-no-translate" : ""}>${escapeHtml(content.description)}</p>
    <div class="win-box"><span class="win-icon">★</span><div><strong>HOW TO WIN THE POINT</strong><p ${["nl", "da"].includes(state.language) ? "data-no-translate" : ""}>${escapeHtml(content.win)}</p></div></div>
    ${game.noGameCard ? "" : `<div class="prompt-section"><div class="prompt-heading"><span>GAME CARD</span><small>${round.promptVisible ? "Card is showing" : expired ? "Viewing time is over" : "Open when ready"}</small></div>
      ${timerWarning}${previewWarning}${previewCountdown}
      ${round.promptVisible ? `<div class="prompt-text" ${localizedPuzzle ? "data-no-translate" : ""}>${defenderDifferentQuestions ? `<div class="prompt-team-label">${escapeHtml(activeTeam().name)} · ${escapeHtml(levelText(round.difficulty))}</div>` : ""}${promptText}</div>${defenderDifferentQuestions ? `<div class="prompt-text defender-prompt" ${danishExclusiveCard ? "data-no-translate" : ""}><div class="prompt-team-label">${escapeHtml(defenderTeam().name)} · ${escapeHtml(levelText(defenderTeam().level))}</div>${escapeHtml(defenderQ?.text || "").replace(/\n/g,"<br/>")}</div>` : ""}` : `<div class="prompt-closed"><span>▧</span><p>${expired || staged && round.revealUsed ? "The secret card is hidden. Continue from memory until the clock finishes." : staged ? "Press Start memory challenge: the secret card will show automatically for the first timed stage." : "Some cards contain secret clues. Only the correct player should peek."}</p></div>`}
      <div class="prompt-buttons">${revealButton}${redoButton}${restartMemoryButton}${finishAndCheckButton}${answerButton}${shapeReviewButton}</div>
      ${prompt?.answer && round.answerVisible && answerAllowed ? `<div class="answer-box"><strong>ANSWER KEY</strong><div ${localizedPuzzle ? "data-no-translate" : ""}>${answerText}</div></div>` : ""}
      ${defenderQ?.answer && round.answerVisible ? `<div class="answer-box"><strong>${escapeHtml(defenderTeam().name)} ANSWER KEY</strong><div ${danishExclusiveCard ? "data-no-translate" : ""}>${escapeHtml(defenderQ.answer).replace(/\n/g,"<br/>")}</div></div>` : ""}
      ${game.id === "shape-copy" && round.timerExpired && round.answerVisible ? `<div class="answer-box"><strong>ORIGINAL SHAPE REFERENCE</strong><div>${promptText}</div></div>` : ""}
    </div>`}
  </article>`;
}

function recentHistory() {
  if (!state.history.length) return `<p class="empty-history">No rounds completed yet. The story starts now.</p>`;
  return `<div class="history-list">${state.history.slice(0, 5).map((entry) => `<div class="history-row"><span class="history-status ${entry.point ? "won" : "blocked"}">${entry.point ? "✓" : "—"}</span><div><strong>${escapeHtml(entry.teamName)}</strong><small>R${entry.round} · ${escapeHtml(state.language === "nl" ? dutch(entry.gameName) : state.language === "da" ? danish(entry.gameName) : entry.gameName)}</small></div><b>${entry.point ? "+1" : "+0"}</b></div>`).join("")}</div>`;
}

function renderPlay() {
  const game = currentGame();
  const active = activeTeam();
  return `<div class="game-dashboard">${session?.role ? sessionControls() : ""}<div class="play-topline"><div><span class="step-label">LET THE GAMES BEGIN</span><h1>Game on<span class="headline-dot">.</span></h1></div>${canControl() ? `<div class="play-top-actions">${button("↷ Skip question", "skip-challenge", "outline")}${button("⚙ Categories", "edit-categories", "outline")}${button("↺ New game", "new-game", "text")}</div>` : `<span class="read-only-badge">GUEST VIEW · HOST CONTROLS GAME</span>`}</div>
    ${scoreboard()}
    <div class="turn-banner"><div class="turn-number">ROUND <strong>${currentCycle(state)} / ${state.roundsPerTeam}</strong><small>TURN ${state.roundNumber} OF ${totalTurns(state)}</small></div><div class="turn-divider"></div><div><span>CURRENTLY PLAYING</span><strong>${escapeHtml(active.name)}</strong></div><span class="turn-banner-icon">✳</span></div>
    <div class="game-columns"><div>${challengeCard(game)}</div><aside class="game-aside">
      ${timerPanel(game)}
      ${matchupCard(state.currentRound.mode)}
      ${canControl() ? `<div class="verdict-card"><div class="card-overline">THE VERDICT</div><h3>${state.language === "nl" ? `Heeft ${escapeHtml(active.name)} gewonnen?` : `Did ${escapeHtml(active.name)} win?`}</h3><p ${state.language === "da" ? "data-no-translate" : ""}>${state.language === "da" ? (state.format === "single" ? "Kun den aktive spiller kan få point. Vælg resultatet for automatisk at gå videre til næste tur." : "Kun det aktive hold kan få point. Vælg resultatet for automatisk at gå videre til næste tur.") : "Only the active team can score. Choose the outcome to switch turns automatically."}</p><div class="verdict-buttons">${button("✓ Point earned", "point-earned", "win", "full")}${button("× No point", "no-point", "deny", "full")}</div></div>` : ""}
    </aside></div>
    <div class="history-card"><div class="history-title"><h3>Round recap</h3><span>LAST ${Math.min(5, state.history.length)} RESULTS</span></div>${recentHistory()}</div>
  </div>${state.categoryDialog && canControl() ? categoryDialog() : ""}${state.fullscreenCard ? `<div class="fullscreen-backdrop" role="dialog" aria-modal="true" aria-label="Fullscreen game card"><div class="fullscreen-card-wrap">${challengeCard(game, true)}</div></div>` : ""}${state.timeUpModal && canControl() ? timeUpDialog(game) : ""}`;
}

function timeUpDialog(game) {
  const recall = game.id === "word-recall-battle";
  const digit = game.id === "digit-duel";
  const memory = recall || digit;
  return `<div class="timeup-backdrop"><section class="timeup-modal" role="alertdialog" aria-modal="true" aria-labelledby="timeup-heading"><span class="timeup-icon">⏰</span><h2 id="timeup-heading">Time's up!</h2><p>${recall ? `The 90-second writing stage is over. Stop writing, reveal the original list and count both ${state.format === "single" ? "players'" : "teams'"} correct words.` : digit ? "The 30-second writing stage has ended. Stop writing and reveal the correct digit sequence." : "The challenge clock has ended! Stop playing and check whether the active team met its winning condition."}</p>${memory ? button(digit ? "Reveal the digit answer" : "Reveal the word list", "review-answers", "primary", "full") : button("Okay, see the result", "dismiss-time-up", "primary", "full")}</section></div>`;
}

function renderResults() {
  const sorted = [...state.teams].sort((a, b) => b.score - a.score);
  const winners = sorted.filter((team) => team.score === sorted[0].score);
  const winnerName = winners.length === 1 ? winners[0].name : winners.map((team) => team.name).join(" & ");
  return `<div class="results-screen"><div class="eyebrow"><span class="eyebrow-line"></span> GAME COMPLETE · VERSION 4.10</div>
    <h1>${winners.length === 1 ? "We have a winner!" : "It's a tie!"}</h1>
    <div class="winner-card"><span>✦ FINAL RESULT ✦</span><strong>${escapeHtml(winnerName)}</strong><p>${winners.length === 1 ? "Congratulations, champions of the living room!" : "The top teams share the win."}</p></div>
    <div class="results-meta">${state.roundsPerTeam} rounds per team · ${totalTurns(state)} turns played · ${state.teams.reduce((total, team) => total + team.score, 0)} points awarded</div>
    <h2>Final scoreboard</h2><div class="results-list">${sorted.map((team, i) => `<div class="results-entry"><span>#${i + 1}</span><strong>${escapeHtml(team.name)}</strong><b>${team.score} ${team.score === 1 ? "point" : "points"}</b></div>`).join("")}</div>
    ${canControl() ? button("↺ Play another game", "play-again", "primary", "results-restart") : `<p>Ask the host to start the next game.</p>${sessionControls()}`}</div>`;
}

function categoryDialog() {
  return `<div class="modal-backdrop" role="presentation"><section class="category-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div class="modal-head"><div><span class="step-label">GAME SETTINGS</span><h2 id="modal-title">Your categories</h2></div><button class="icon-button" data-action="close-categories" aria-label="Close categories">×</button></div><p>New selections take effect after this round. Your scores stay the same.</p>${categoryTiles(true)}${button("Done ✓", "close-categories", "primary", "full")}</section></div>`;
}

function languageSwitcher() {
  const lang = ["en", "nl", "da"].includes(state.language) ? state.language : "en";
  return `<div class="lang-menu" data-no-translate>
    <button type="button" class="lang-switch-toggle" data-action="language-menu" aria-label="Change language / Verander taal / Skift sprog" aria-expanded="${languageMenuOpen}">🌐 <strong>${lang.toUpperCase()}</strong> ▾</button>
    ${languageMenuOpen ? `<div class="lang-switch-options" role="group" aria-label="Choose language">
      ${[["en","English"],["nl","Nederlands"],["da","Dansk"]].map(([code,name])=>`<button type="button" class="lang-switch-option ${lang===code ? "active" : ""}" data-action="set-device-language" data-lang="${code}" aria-pressed="${lang===code}">${name} ${lang===code ? "✓" : ""}</button>`).join("")}
    </div>` : ""}
  </div>`;
}

function skipConfirmationDialog() {
  const lang = state.language;
  const title = lang === "nl" ? "Uitdaging overslaan?" : lang === "da" ? "Spring opgaven over?" : "Skip this challenge?";
  const detail = lang === "nl" ? "Je blijft aan de beurt en je niveau en punten blijven hetzelfde. Je krijgt een andere uitdaging. Alleen als er maar één spel is geselecteerd, krijg je een andere vraag uit dat spel."
    : lang === "da" ? "Du beholder din tur, dit niveau og dine point. Du får en anden udfordring. Hvis kun ét spil er valgt, får du et andet spørgsmål fra det spil."
    : "Your team keeps its turn, proficiency and score. You will get a different challenge. If only one game is enabled, a different question from that game is chosen.";
  return `<div class="skip-backdrop" role="presentation"><section class="skip-dialog" role="alertdialog" aria-modal="true" aria-labelledby="skip-dialog-title">
    <span class="skip-icon">↷</span><h2 id="skip-dialog-title">${title}</h2><p>${detail}</p>
    <div class="skip-actions"><button type="button" class="btn btn-outline" data-action="cancel-skip">${lang === "nl" ? "Annuleren" : lang === "da" ? "Annuller" : "Cancel"}</button>
      <button type="button" class="btn btn-primary" data-action="confirm-skip">${lang === "nl" ? "Ja, sla deze uitdaging over" : lang === "da" ? "Ja, spring opgaven over" : "Yes, skip this challenge"}</button></div>
  </section></div>`;
}

function render() {
  const switcher = document.querySelector("#device-language-switcher");
  if (switcher) switcher.innerHTML = languageSwitcher();
  root.innerHTML = session?.role === "guest" && !guestReady ? renderSetup() : state.screen === "home" ? renderHome() : state.screen === "language" ? renderLanguage() : state.screen === "language-list" ? renderLanguageList() : state.screen === "setup" ? renderSetup() : state.screen === "results" ? renderResults() : renderPlay();
  if (state.language === "da") translateDanishPage(document, state.language);
  else translatePage(document, state.language);
  if (skipConfirmOpen) root.insertAdjacentHTML("beforeend", skipConfirmationDialog());
  updateTimerVisual();
}

// A host sends clock updates once a second. Rebuilding the whole guest page
// on every tick used to reset scroll position inside the fullscreen overlay,
// making the game card appear to flicker back to its instructions. Update only
// the live clock nodes when the host's actual game/card state has not changed.
function visibleStateSignature(snapshot) {
  const { timerRemaining, fullscreenCard, ...stable } = snapshot;
  const round = stable.currentRound;
  if (!round) return JSON.stringify(stable);
  const { revealRemaining, ...stableRound } = round;
  return JSON.stringify({ ...stable, currentRound: stableRound });
}

function updateGuestCountdowns() {
  updateTimerVisual();
  const nodes = document.querySelectorAll?.(".reveal-seconds") || [];
  for (const node of nodes) node.textContent = String(state.currentRound?.revealRemaining ?? "");
}

function renderGuestPreservingCard() {
  const previousOverlay = document.querySelector?.(".fullscreen-backdrop");
  const scrollOffset = previousOverlay?.scrollTop;
  render();
  const newOverlay = document.querySelector?.(".fullscreen-backdrop");
  if (newOverlay && Number.isFinite(scrollOffset)) newOverlay.scrollTop = scrollOffset;
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
  if (!state.currentRound?.promptVisible || !Number.isInteger(currentContent()?.previewSeconds)) return stopRevealInterval();
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
  if (!game || !round || !canControl()) return;
  if (clockMode(game) === "none" || clockMode(game) === "staged" || round.timerExpired) return;
  if (game.requiresTimerBeforeReveal && !state.timerRunning && !round.promptVisible) return;
  const seconds = currentContent().previewSeconds;
  if (Number.isInteger(seconds)) {
    if (round.revealUsed) return;
    round.revealUsed = true;
    round.promptVisible = true;
    round.revealRemaining = seconds;
    revealDeadline = Date.now() + seconds * 1000;
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
  if (Number.isInteger(currentContent()?.previewSeconds)) {
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
  if (!canControl() || state.timerRunning || state.timerRemaining === 0 || state.screen !== "play" || clockMode(currentGame()) === "none") return;
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

function askConfirm(message) {
  if (state.language !== "nl" && state.language !== "da") return window.confirm(message);
  if (state.language === "da") {
    let translated;
    if (message.startsWith("Finish this attempt now and reveal the answer key?"))
      translated = "Afslutte forsøget og vise svarene nu? Timeren stopper, og svarene bliver synlige på alle tilsluttede enheder.";
    else if (message.startsWith("Re-view this shape card?"))
      translated = `Vise figurkortet igen? Så starter BÅDE timeren på 150 sekunder OG visningstiden på ${currentContent().previewSeconds} sekunder forfra. Alle skal tegne om. Fortsæt?`;
    else if (message.startsWith("Restart Word Recall Battle?"))
      translated = `Genstarte ordhukommelsen? Forsøget slettes, og både de 25 sekunders visning og 90 sekunders skrivetid begynder forfra. ${state.format === "single" ? "Begge spillere" : "Begge hold"} må starte forfra. Er du sikker?`;
    else if (message.startsWith("Restart Digit Memory?"))
      translated = "Genstarte talhukommelsen? Forsøget slettes, talrækken skjules, og både 20 sekunders visning og 30 sekunders skrivetid begynder forfra. Er du sikker?";
    else if (message.startsWith("Start a new game?"))
      translated = "Starte et nyt spil? Alle point nulstilles, men hold, antal runder og kategorier bevares.";
    return window.confirm(translated || danish(message));
  }
  let translated;
  if (message.startsWith("Finish this attempt now and reveal the answer key?"))
    translated = "Deze poging beëindigen en de antwoorden tonen? De timer stopt en de antwoorden worden zichtbaar op alle verbonden apparaten.";
  else if (message.startsWith("Re-view this shape card?"))
    translated = `Deze vormenkaart opnieuw bekijken? Daarmee beginnen ZOWEL de timer van 150 seconden ALS de voorbeeldtijd van ${currentContent().previewSeconds} seconden opnieuw. Iedereen moet zijn tekening opnieuw maken. Doorgaan?`;
  else if (message.startsWith("Restart Word Recall Battle?"))
    translated = `Woorden onthouden opnieuw beginnen? De huidige poging vervalt. Zowel de 25 seconden kijktijd als de 90 seconden schrijftijd starten opnieuw. ${state.format === "single" ? "Beide spelers" : "Beide teams"} moeten opnieuw beginnen. Weet je het zeker?`;
  else if (message.startsWith("Restart Digit Memory?"))
    translated = "Cijfers onthouden opnieuw beginnen? De huidige poging vervalt, het cijfer wordt verborgen en zowel de 20 seconden kijktijd als de 30 seconden schrijftijd starten opnieuw. Weet je het zeker?";
  else if (message.startsWith("Start a new game?"))
    translated = "Een nieuw spel beginnen? Alle punten worden gewist, maar teams, aantal rondes en categorieën blijven behouden.";
  return window.confirm(translated || dutch(message));
}
function showAlert(message) { return window.alert(state.language === "nl" ? dutch(message) : state.language === "da" ? danish(message) : message); }
function alertError(message) { latestError = message; render(); window.scrollTo({ top: 0, behavior: "smooth" }); }

function openSession(role) {
  const link = new SessionLink({
    getState: () => state,
    onStatus: (message) => { if (session === link) { sessionStatus = message; render(); } },
    onState: (hostState) => {
      if (session !== link || link.role !== "guest" || hostState.version !== "4.11") return;
      const previousSignature = guestReady ? visibleStateSignature(state) : null;
      const fullscreen = state.fullscreenCard;
      state = { ...hostState, language: localLanguageOverride || hostState.language, fullscreenCard: fullscreen, categoryDialog: false };
      guestReady = true;
      if (previousSignature !== visibleStateSignature(state)) renderGuestPreservingCard();
      else updateGuestCountdowns();
    },
  });
  try {
    session = link;
    sessionStatus = "";
    guestReady = false;
    if (role === "host") link.host();
    else link.join(joinCode);
    render();
  } catch (error) {
    link.close();
    session = null;
    sessionStatus = error?.message || "Could not open this session.";
    guestReady = false;
    render();
  }
}

document.addEventListener("input", (event) => {
  const input = event.target;
  const role = input?.dataset?.role;
  const index = Number(input?.dataset?.index);
  if (role === "join-code") { joinCode = input.value.toUpperCase().replace(/[^A-Z2-9]/g, "").slice(0, 8); return; }
  if (!canControl()) return;
  if (state.screen === "setup" && role === "team-name" && state.teams[index]) state.teams[index].name = input.value;
  else if (state.screen === "setup" && role === "solo-player-name" && state.format === "single" && state.teams[index]) {
    state.teams[index].name = input.value;
    state.teams[index].players[0] = input.value;
  }
  else if (state.screen === "setup" && role === "player-name" && state.teams[index]) state.teams[index].players[Number(input.dataset.playerIndex)] = input.value;
  else if (state.screen === "setup" && role === "round-count") {
    const value = Number(input.value);
    state.roundsPerTeam = value;
    const estimated = document.querySelector("#duration-estimate");
    const detail = document.querySelector("#duration-detail");
    if (estimated) estimated.textContent = Number.isInteger(value) && value >= 1 && value <= 20 ? `~${estimatedMinutes(state)} minutes` : "Choose 1–20 rounds";
    if (detail) { const phrase = `${totalTurns(state)} turns overall · ~${state.teams.length * 3} minutes per full round`; detail.textContent = state.language === "nl" ? dutch(phrase) : state.language === "da" ? danish(phrase) : phrase; }
  }
  else return;
  latestError = "";
  save();
});

document.addEventListener("change", (event) => {
  const input = event.target;
  if (!canControl()) return;
  if (input?.dataset?.role === "category") {
    const selected = new Set(state.enabledCategories);
    if (input.checked) {
      selected.add(input.value);
      const picked = new Set(state.enabledGameIds || []);
      if (!GAMES.some((g) => g.category === input.value && picked.has(g.id)))
        GAMES.filter((g) => g.category === input.value).forEach((g) => picked.add(g.id));
      state.enabledGameIds = [...picked];
    } else selected.delete(input.value);
    state.enabledCategories = CATEGORIES.map((category) => category.id).filter((id) => selected.has(id));
  } else if (input?.dataset?.role === "category-game") {
    const picked = new Set(state.enabledGameIds || GAMES.map((g) => g.id));
    if (input.checked) picked.add(input.value); else picked.delete(input.value);
    state.enabledGameIds = GAMES.map((g) => g.id).filter((id) => picked.has(id));
    const categories = new Set(state.enabledCategories);
    if (GAMES.some((g) => g.category === input.dataset.category && picked.has(g.id))) categories.add(input.dataset.category);
    else categories.delete(input.dataset.category);
    state.enabledCategories = CATEGORIES.map((c) => c.id).filter((id) => categories.has(id));
  } else if (state.screen === "setup" && input?.dataset?.role === "round-count") {
    save();
    return;
  } else if (state.screen === "setup" && input?.dataset?.role === "team-level") {
    const team = state.teams[Number(input.dataset.index)];
    if (!team || !LEVELS.some((level) => level.id === input.value)) return;
    team.level = input.value;
  } else if (state.screen === "play" && ["difficulty", "style"].includes(input?.dataset?.role)) {
    const game = currentGame();
    const round = state.currentRound;
    if (clockMode(game) !== "none" && (state.timerRunning || round.revealUsed || round.promptVisible || round.timerExpired)) return;
    if (input.dataset.role === "difficulty") {
      if (!hasDifficulty(game) || !isLevelAllowedForGame(game, input.value)) return;
      round.difficulty = input.value;
    } else {
      if (!GAME_STYLES[game.id]?.[input.value]) return;
      round.style = input.value;
    }
    round.promptIndex = Math.floor(Math.random() * currentContent().prompts.length);
    if ((state.format === "single" && game.id === "word-recall-battle") || (game.id.startsWith("topic-trivia-") && round.difficulty === defenderTeam()?.level)) {
      round.defenderPromptIndex = round.promptIndex;
    } else if (game.id.startsWith("topic-trivia-") && defenderTeam()) {
      const pool = contentForRound(game, {...round, difficulty: defenderTeam().level}).prompts;
      round.defenderPromptIndex = Math.floor(Math.random() * pool.length);
    }
    round.answerVisible = false;
  } else if (state.screen === "play" && input?.dataset?.role === "solo-player" && state.currentRound?.mode === "solo") {
    if (state.timerRunning || state.currentRound.revealUsed || state.currentRound.promptVisible) return;
    const next = Number(input.value);
    if (!Number.isInteger(next) || next < 0 || next >= activeTeam().players.length) return;
    state.currentRound.soloPlayerIndex = next;
  } else if (state.screen === "play" && state.currentRound?.matchup) {
    if (clockMode(currentGame()) !== "none" && (state.timerRunning || state.currentRound.revealUsed || state.currentRound.promptVisible)) return;
    const m = state.currentRound.matchup;
    if (input?.dataset?.role === "defender-team") {
      const defender = allowedDefenders(state, currentGame()).find((team) => team.id === input.value);
      if (!defender) return;
      m.defenderTeamId = input.value;
      m.defenderPlayerIndex = 0;
      state.currentRound.defenderDifficulty = defender.level;
      state.currentRound.defenderPromptIndex = ((state.format === "single" && currentGame().id === "word-recall-battle") || (currentGame().id.startsWith("topic-trivia-") && state.currentRound.difficulty === defender.level))
        ? state.currentRound.promptIndex
        : Math.floor(Math.random() * contentForRound(currentGame(), { ...state.currentRound, difficulty: defender.level }).prompts.length);
    }
    else if (state.format !== "single" && input?.dataset?.role === "active-player") m.activePlayerIndex = Number(input.value);
    else if (state.format !== "single" && input?.dataset?.role === "defender-player") m.defenderPlayerIndex = Number(input.value);
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
  if (action === "make-session") return openSession("host");
  if (action === "join-session") return openSession("guest");
  if (action === "end-session" || action === "leave-session") {
    const wasGuest = session?.role === "guest";
    session?.close();
    session = null;
    sessionStatus = "";
    guestReady = false;
    if (wasGuest) state = makeInitialState();
    save();
    return render();
  }
  if (action === "language-menu") { languageMenuOpen = !languageMenuOpen; return render(); }
  if (action === "set-device-language") {
    const language = target.dataset.lang;
    if (!["en","nl","da"].includes(language)) return;
    localLanguageOverride = language;
    try { localStorage.setItem(LANGUAGE_PREFERENCE_KEY, language); } catch { /* private browsing */ }
    state.language = language;
    languageMenuOpen = false;
    if (canControl()) save();
    return render();
  }
  if (!canControl() && !["enter-fullscreen", "exit-fullscreen"].includes(action)) return;
  if (action === "choose-team" || action === "choose-single") {
    state = selectFormat(state, action === "choose-single" ? "single" : "team");
    latestError = "";
  }
  else if (action === "language-english" && state.screen === "language") { state.language = "en"; state.contentLanguage = "en"; localLanguageOverride = "en"; try { localStorage.setItem(LANGUAGE_PREFERENCE_KEY,"en"); } catch {} state.screen = "setup"; }
  else if (action === "language-other" && state.screen === "language") { state.screen = "language-list"; }
  else if (action === "language-dutch" && state.screen === "language-list") { state.language = "nl"; state.contentLanguage = "nl"; localLanguageOverride = "nl"; try { localStorage.setItem(LANGUAGE_PREFERENCE_KEY,"nl"); } catch {} state.screen = "setup"; }
  else if (action === "language-danish" && state.screen === "language-list") { state.language = "da"; state.contentLanguage = "da"; localLanguageOverride = "da"; try { localStorage.setItem(LANGUAGE_PREFERENCE_KEY,"da"); } catch {} state.screen = "setup"; }
  else if (action === "back-format" && state.screen === "language") { state.screen = "home"; }
  else if (action === "back-language" && state.screen === "language-list") { state.screen = "language"; }
  else if (action === "back-home" && state.screen === "setup") { state.screen = "language"; latestError = ""; }
  else if (action === "add-team" && state.teams.length < (state.format === "single" ? 6 : 6)) state.teams.push(makeTeam(state.teams.length, state.format));
  else if (action === "remove-team" && state.teams.length > 2) state.teams.splice(index, 1);
  else if (action === "add-player" && state.format !== "single" && state.teams[index]?.players.length === 2) state.teams[index].players.push(`Player ${state.teams[index].players.length + 1}`);
  else if (action === "remove-player" && state.format !== "single" && state.teams[index]?.players.length === 3) state.teams[index].players.pop();
  else if (action === "expand-category") {
    const id = target.dataset.category;
    if (!CATEGORIES.some((c) => c.id === id)) return;
    if (expandedCategories.has(id)) expandedCategories.delete(id); else expandedCategories.add(id);
  }
  else if (action === "select-category-games" || action === "clear-category-games") {
    const id = target.closest(".category-group")?.querySelector("[data-category]")?.dataset.category;
    if (!CATEGORIES.some((c) => c.id === id)) return;
    const picked = new Set(state.enabledGameIds || GAMES.map((g) => g.id));
    const group = GAMES.filter((g) => g.category === id);
    group.forEach((g) => action === "select-category-games" ? picked.add(g.id) : picked.delete(g.id));
    state.enabledGameIds = GAMES.map((g) => g.id).filter((id) => picked.has(id));
    const cats = new Set(state.enabledCategories);
    if (action === "select-category-games") cats.add(id); else cats.delete(id);
    state.enabledCategories = CATEGORIES.map((c) => c.id).filter((id) => cats.has(id));
  }
  else if (action === "select-all") { state.enabledCategories = CATEGORIES.map((category) => category.id); state.enabledGameIds = GAMES.map((g) => g.id); }
  else if (action === "clear-categories") state.enabledCategories = [];
  else if (action === "start-game") {
    const error = validateSetup(state);
    if (error) return alertError(error);
    state = startGame(state);
    window.scrollTo({ top: 0, behavior: "auto" });
  } else if (action === "skip-challenge" && state.screen === "play") {
    pauseTimer(); // No time is lost while the confirmation dialog is open.
    skipConfirmOpen = true;
    return render();
  } else if (action === "cancel-skip") {
    skipConfirmOpen = false;
    return render();
  } else if (action === "confirm-skip" && state.screen === "play" && skipConfirmOpen) {
    try {
      const next = skipCurrentChallenge(state);
      pauseTimer(); stopRevealInterval();
      state = next;
      skipConfirmOpen = false;
      window.scrollTo({top:0,behavior:"auto"});
    } catch (error) {
      skipConfirmOpen = false;
      return showAlert(error?.message || "Cannot skip this challenge.");
    }
  } else if (action === "edit-categories") { pauseTimer(); state.categoryDialog = true; }
  else if (action === "close-categories") {
    const error = validateSetup(state);
    if (error) return showAlert(error);
    state.categoryDialog = false;
  } else if (action === "toggle-prompt") togglePrompt();
  else if (action === "toggle-answer") {
    if ((["word-recall-battle", "digit-duel", "shape-copy", "rebus", "riddle-round"].includes(currentGame().id) || currentGame().id.startsWith("topic-trivia-")) && !state.currentRound.timerExpired) return;
    state.currentRound.answerVisible = !state.currentRound.answerVisible;
  }
  else if (action === "finish-and-reveal") {
    if (!(currentGame().id === "rebus" || currentGame().id === "riddle-round" || currentGame().id.startsWith("topic-trivia-")) || !state.currentRound.promptVisible || state.currentRound.timerExpired) return;
    if (!askConfirm("Finish this attempt now and reveal the answer key? The timer will stop and answers will become visible to all connected devices.")) return;
    pauseTimer();
    state.currentRound.timerExpired = true;
    state.currentRound.answerVisible = true;
    state.timeUpModal = false;
  }
  else if (action === "enter-fullscreen") state.fullscreenCard = true;
  else if (action === "exit-fullscreen") state.fullscreenCard = false;
  else if (action === "dismiss-time-up") state.timeUpModal = false;
  else if (action === "review-answers") {
    if (!["word-recall-battle", "digit-duel"].includes(currentGame().id) || !state.currentRound.timerExpired) return;
    state.timeUpModal = false;
    state.currentRound.answerVisible = true;
  }
  else if (action === "reset-reveal") {
    if (!currentGame().allowRevealReset || !state.currentRound.revealUsed) return;
    if (!askConfirm(`Re-view this shape card? This will RESET BOTH the 150-second challenge timer and the ${currentContent().previewSeconds}-second preview. Everyone must restart their drawings. Continue?`)) return;
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
  else if (action === "reset-memory") {
    if (!["digit-duel", "word-recall-battle"].includes(currentGame().id) || !state.currentRound.revealUsed) return;
    const recall = currentGame().id === "word-recall-battle";
    if (!askConfirm(recall
      ? `Restart Word Recall Battle? This discards the current attempt and resets BOTH the 25-second viewing and 90-second writing timers. ${state.format === "single" ? "Both players" : "Both teams"} must start over. Are you sure?`
      : "Restart Digit Memory? This discards the previous attempt, hides the number and resets both the 20-second viewing and 30-second writing timers. Are you sure?")) return;
    stopInterval();
    state.timerRunning = false;
    state.timerRemaining = currentGame().stages[0].seconds;
    state.currentRound.stageIndex = 0;
    state.currentRound.revealUsed = false;
    state.currentRound.promptVisible = false;
    state.currentRound.answerVisible = false;
    state.currentRound.timerExpired = false;
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
    if (action === "new-game" && !askConfirm("Start a new game? This resets all scores but keeps your teams, round count, and categories.")) return;
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
