import { CATEGORIES, GAMES, GAME_DURATION, GAME_LEVELS, GAME_STYLES } from "./games.js";
import { LEVELS, LEVEL_CONTENT, EIGHT_LEVEL_CONTENT, EIGHT_BASE_MAP, EIGHT_LEVEL_GAME_IDS, OPEN_MATCHUP_GAME_IDS, contentKey, levelIndex, isAdjacentLevel } from "./levels.js";
import { EXPANDED_PACKS } from "./packs/index.js";
import { SINGLE_EXCLUDED_GAMES, modesForSingle, singleContent } from "./single-mode.js";

export const DIFFICULTIES = LEVELS.map((level) => level.id);
const BEGINNER_ONLY = new Set(["word-recall-battle"]);
const FIRST_THREE_ONLY = new Set(["headline-teams", "count-to-thirty"]);
export const BEGINNER_EXCLUSIONS = new Set(["clock-duel", "target-number", "alphabet-story", "alliteration-duel", "headline-teams", "count-to-thirty", "sketch-guess", "shape-copy", "picture-race"]);
// Beyond the general Beginner restrictions, Novices cannot play Clock Duel.
// Use this single predicate for auto-assignment, opponent selection and UI.
export function isLevelAllowedForGame(game, level) {
  if (!game || !LEVELS.some((item) => item.id === level)) return false;
  if (BEGINNER_EXCLUSIONS.has(game.id) && level === "beginner") return false;
  if (game.id === "clock-duel" && levelIndex(level) < levelIndex("amateur")) return false;
  return true;
}

export function hasDifficulty(game) {
  return Boolean(GAME_LEVELS[game.id] || LEVEL_CONTENT[game.id] || EIGHT_LEVEL_CONTENT[game.id] || EXPANDED_PACKS[game.id]);
}

export function getLevelVariant(game, difficulty) {
  const level = LEVELS.some((item) => item.id === difficulty) ? difficulty : "skilled";
  const expanded = EXPANDED_PACKS[game.id]?.[level] || {};
  if (EIGHT_LEVEL_GAME_IDS.has(game.id)) {
    const legacyKey = EIGHT_BASE_MAP[game.id]?.[level];
    return { ...(legacyKey ? GAME_LEVELS[game.id]?.[legacyKey] : {}), ...(EIGHT_LEVEL_CONTENT[game.id]?.[level] || {}), ...expanded };
  }
  const i = levelIndex(level);
  const oldLevel = game.id === "trivia-board"
    ? (i < 3 ? "easy" : i < 5 ? "medium" : "hard")
    : (i < 4 ? "easy" : i < 6 ? "medium" : "hard");
  const baseline = GAME_LEVELS[game.id]?.[oldLevel] || {};
  const config = LEVEL_CONTENT[game.id];
  const key = BEGINNER_ONLY.has(game.id) || FIRST_THREE_ONLY.has(game.id) ? level : contentKey(config, level);
  return { ...baseline, ...(config?.[key] || {}), ...expanded };
}

export function allowedDefenders(state, game, activeTeamId = state.teams[state.turnIndex]?.id) {
  const active = state.teams.find((team) => team.id === activeTeamId);
  if (!active) return [];
  if (!isLevelAllowedForGame(game, active.level)) return [];
  return state.teams.filter((other) => other.id !== active.id &&
    isLevelAllowedForGame(game, other.level) &&
    (OPEN_MATCHUP_GAME_IDS.has(game.id) || isAdjacentLevel(active.level || "skilled", other.level || "skilled")));
}

export function canPlayGame(state, game, teamId = state.teams[state.turnIndex]?.id) {
  if (!isLevelAllowedForGame(game, state.teams.find((team) => team.id === teamId)?.level)) return false;
  if (state.format === "single") {
    const modes = modesForSingle(game);
    return modes.includes("solo") || (modes.includes("duel") && allowedDefenders(state, game, teamId).length > 0);
  }
  return game.mode === "coop" || game.mode === "solo" || game.modeVariants?.some((mode) => ["coop", "solo"].includes(mode)) || allowedDefenders(state, game, teamId).length > 0;
}

export function contentForRound(game, round) {
  const variant = getLevelVariant(game, round.difficulty);
  const style = GAME_STYLES[game.id]?.[round.style] || {};
  let prompts = variant.stylePrompts?.[round.style] || variant.prompts || style.prompts || game.prompts;
  if (game.id === "headline-teams") {
    prompts = variant.stylePrompts?.[round.style] || style.prompts || game.prompts;
    if (variant.promptCount === 4 && !variant.stylePrompts) prompts = prompts.map((prompt) => ({ ...prompt, text: prompt.text.split("\n").slice(0, 5).join("\n").replace(/SIX/g, "FOUR").replace(/six/g, "four") }));
  }
  const base = {
    prompts,
    description: variant.description || game.descriptionByMode?.[round.mode] || game.description,
    win: variant.win || game.winByMode?.[round.mode] || game.win,
    previewSeconds: Object.prototype.hasOwnProperty.call(variant, "previewSeconds") ? variant.previewSeconds : game.revealSeconds,
    alwaysVisible: Boolean(variant.alwaysVisible),
  };
  return round.format === "single" ? singleContent(game, round, base) : base;
}

export function newId() {
  return `t-${Math.random().toString(36).slice(2, 10)}`;
}

export function makeTeam(number, format = "team") {
  return {
    id: newId(),
    name: format === "single" ? `Player ${number + 1}` : `Team ${String.fromCharCode(65 + number)}`,
    players: format === "single" ? [`Player ${number + 1}`] : [`Player ${number * 2 + 1}`, `Player ${number * 2 + 2}`],
    level: "skilled",
    score: 0,
  };
}

export function makeInitialState() {
  return {
    version: "3.6",
    format: "team",
    screen: "home",
    teams: [makeTeam(0), makeTeam(1)],
    roundsPerTeam: 5,
    enabledCategories: CATEGORIES.map((category) => category.id),
    turnIndex: 0,
    roundNumber: 1,
    currentRound: null,
    recentGameIds: [],
    history: [],
    timerRemaining: GAME_DURATION,
    timerRunning: false,
    categoryDialog: false,
    fullscreenCard: false,
    timeUpModal: false,
  };
}

export function selectFormat(state, format) {
  if (!["team", "single"].includes(format)) throw new Error("Unknown game format.");
  return {
    ...restartToSetup(state),
    format,
    screen: "setup",
    teams: [makeTeam(0, format), makeTeam(1, format)],
  };
}

export function validateSetup(state) {
  if (state.format === "single" && (state.teams.length < 2 || state.teams.length > 3)) return "Single-player format needs 2 or 3 players (one per team).";
  if (state.format !== "single" && (state.teams.length < 2 || state.teams.length > 6)) return "Choose between 2 and 6 teams.";
  if (!Number.isInteger(state.roundsPerTeam) || state.roundsPerTeam < 1 || state.roundsPerTeam > 20) return "Choose between 1 and 20 rounds.";
  if (state.enabledCategories.length === 0) return "Select at least one category.";
  for (const team of state.teams) {
    if (!team.name.trim()) return "Give every team a name.";
    if (state.format === "single" && team.players.length !== 1) return "Every team must contain exactly ONE player in single-player mode.";
    if (state.format !== "single" && (team.players.length < 2 || team.players.length > 3)) return "Every team needs 2 or 3 players.";
    if (team.players.some((player) => !player.trim())) return "Give every player a name.";
    if (!LEVELS.some((item) => item.id === team.level)) return "Choose a proficiency level for every team.";
  }
  const uniqueNames = state.teams.map((team) => team.name.trim().toLowerCase());
  if (new Set(uniqueNames).size !== uniqueNames.length) return "Each team needs a different name.";
  for (const team of state.teams) {
    if (!availableGames(state).some((game) => canPlayGame(state, game, team.id))) return `No level-compatible challenge is available for ${team.name}. Enable a cooperative category or adjust team levels.`;
  }
  return null;
}

export function availableGames(state) {
  const selected = new Set(state.enabledCategories);
  return GAMES.filter((game) => selected.has(game.category) && (state.format !== "single" || !SINGLE_EXCLUDED_GAMES.has(game.id)));
}

export function totalTurns(state) {
  return state.roundsPerTeam * state.teams.length;
}

export function currentCycle(state) {
  return Math.ceil(state.roundNumber / state.teams.length);
}

export function estimatedMinutes(state) {
  // Approximation: a 150-second challenge plus rules, scoring and handover.
  return totalTurns(state) * 3;
}

export function gameDuration(game) {
  if (game.clock === "none") return 0;
  if (game.clock === "staged") return game.stages[0].seconds;
  return game.duration || GAME_DURATION;
}

function randomIndex(length, rng) {
  return Math.min(length - 1, Math.max(0, Math.floor(rng() * length)));
}

export function createRound(state, rng = Math.random) {
  const eligible = availableGames(state).filter((game) => canPlayGame(state, game));
  if (!eligible.length) throw new Error("There are no playable games for this team and selected levels.");
  const recent = new Set(state.recentGameIds);
  const fresh = eligible.filter((game) => !recent.has(game.id));
  const pool = fresh.length ? fresh : eligible;
  const game = pool[randomIndex(pool.length, rng)];
  const active = state.teams[state.turnIndex];
  const opponents = allowedDefenders(state, game);
  const modes = state.format === "single"
    ? modesForSingle(game).filter((candidate) => candidate === "solo" || opponents.length > 0)
    : (game.modeVariants || [game.mode]);
  if (!modes.length) throw new Error(`No eligible format or opponent for ${game.name}`);
  let mode = modes[randomIndex(modes.length, rng)];
  if (state.format !== "single" && !["coop", "solo"].includes(mode) && !opponents.length) mode = game.modeVariants?.includes("solo") ? "solo" : "coop";
  const defender = (!["coop", "solo"].includes(mode) && opponents.length) ? opponents[randomIndex(opponents.length, rng)] : null;
  const method = rng() < 0.5 ? "assigned" : "chosen";
  const matchup = ["coop", "solo"].includes(mode) ? null : {
    method,
    defenderTeamId: defender.id,
    activePlayerIndex: method === "assigned" ? randomIndex(active.players.length, rng) : 0,
    defenderPlayerIndex: method === "assigned" ? randomIndex(defender.players.length, rng) : 0,
  };
  const difficulty = active.level || "skilled";
  const style = GAME_STYLES[game.id] ? (game.defaultStyle || "goofy") : null;
  const promptPool = contentForRound(game, { mode, difficulty, style, format: state.format }).prompts;
  const defenderDifficulty = defender?.level || null;
  const defenderPool = defender ? contentForRound(game, { mode, difficulty: defenderDifficulty, style, format: state.format }).prompts : null;
  const promptIndex = randomIndex(promptPool.length, rng);
  const sharedWordList = game.id === "word-recall-battle" && defenderPool &&
    (state.format === "single" || defenderPool.length === promptPool.length && defenderPool.every((prompt, index) => prompt.text === promptPool[index].text));
  return {
    gameId: game.id,
    format: state.format || "team",
    mode,
    duration: gameDuration(game),
    difficulty,
    defenderDifficulty,
    defenderPromptIndex: defenderPool ? sharedWordList ? promptIndex : randomIndex(defenderPool.length, rng) : null,
    style,
    stageIndex: 0,
    promptIndex,
    soloPlayerIndex: mode === "solo" ? randomIndex(active.players.length, rng) : null,
    matchup,
    promptVisible: game.clock === "none",
    revealUsed: false,
    revealRemaining: null,
    answerVisible: false,
    timerExpired: false,
  };
}

export function startGame(state, rng = Math.random) {
  const error = validateSetup(state);
  if (error) throw new Error(error);
  const next = {
    ...state,
    screen: "play",
    teams: state.teams.map((team) => ({ ...team, score: 0 })),
    turnIndex: 0,
    roundNumber: 1,
    history: [],
    recentGameIds: [],
    timerRemaining: GAME_DURATION,
    timerRunning: false,
    categoryDialog: false,
    fullscreenCard: false,
    timeUpModal: false,
  };
  next.currentRound = createRound(next, rng);
  next.timerRemaining = next.currentRound.duration;
  return next;
}

export function finishRound(state, pointEarned, rng = Math.random) {
  if (state.screen !== "play" || !state.currentRound) throw new Error("No round is active.");
  const active = state.teams[state.turnIndex];
  const game = GAMES.find((item) => item.id === state.currentRound.gameId);
  const next = {
    ...state,
    teams: state.teams.map((team, index) => ({
      ...team,
      score: team.score + (index === state.turnIndex && pointEarned ? 1 : 0),
    })),
    turnIndex: (state.turnIndex + 1) % state.teams.length,
    roundNumber: state.roundNumber + 1,
    timerRemaining: GAME_DURATION,
    timerRunning: false,
    categoryDialog: false,
    fullscreenCard: false,
    timeUpModal: false,
    recentGameIds: [...state.recentGameIds.slice(-4), game.id],
    history: [
      { round: currentCycle(state), turn: state.roundNumber, teamName: active.name, gameName: game.name, point: Boolean(pointEarned) },
      ...state.history,
    ].slice(0, 12),
  };
  if (next.roundNumber > totalTurns(next)) {
    next.screen = "results";
    next.currentRound = null;
    next.timerRemaining = 0;
    return next;
  }
  next.currentRound = createRound(next, rng);
  next.timerRemaining = next.currentRound.duration;
  return next;
}

export function restartToSetup(state) {
  return {
    ...state,
    screen: "setup",
    teams: state.teams.map((team) => ({ ...team, score: 0 })),
    turnIndex: 0,
    roundNumber: 1,
    currentRound: null,
    recentGameIds: [],
    history: [],
    timerRemaining: GAME_DURATION,
    timerRunning: false,
    categoryDialog: false,
    fullscreenCard: false,
    timeUpModal: false,
  };
}
