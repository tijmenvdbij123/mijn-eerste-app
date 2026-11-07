import { CATEGORIES, GAMES, GAME_DURATION } from "./games.js";

export function newId() {
  return `t-${Math.random().toString(36).slice(2, 10)}`;
}

export function makeTeam(number) {
  return {
    id: newId(),
    name: `Team ${String.fromCharCode(65 + number)}`,
    players: [`Player ${number * 2 + 1}`, `Player ${number * 2 + 2}`],
    score: 0,
  };
}

export function makeInitialState() {
  return {
    version: 2,
    screen: "setup",
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
  };
}

export function validateSetup(state) {
  if (state.teams.length < 2 || state.teams.length > 6) return "Choose between 2 and 6 teams.";
  if (!Number.isInteger(state.roundsPerTeam) || state.roundsPerTeam < 1 || state.roundsPerTeam > 20) return "Choose between 1 and 20 rounds.";
  if (state.enabledCategories.length === 0) return "Select at least one category.";
  for (const team of state.teams) {
    if (!team.name.trim()) return "Give every team a name.";
    if (team.players.length < 2 || team.players.length > 3) return "Every team needs 2 or 3 players.";
    if (team.players.some((player) => !player.trim())) return "Give every player a name.";
  }
  const uniqueNames = state.teams.map((team) => team.name.trim().toLowerCase());
  if (new Set(uniqueNames).size !== uniqueNames.length) return "Each team needs a different name.";
  return null;
}

export function availableGames(state) {
  const selected = new Set(state.enabledCategories);
  return GAMES.filter((game) => selected.has(game.category));
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
  return game.duration || GAME_DURATION;
}

function randomIndex(length, rng) {
  return Math.min(length - 1, Math.max(0, Math.floor(rng() * length)));
}

export function createRound(state, rng = Math.random) {
  const eligible = availableGames(state);
  if (!eligible.length) throw new Error("There are no games in the chosen categories.");
  const recent = new Set(state.recentGameIds);
  const fresh = eligible.filter((game) => !recent.has(game.id));
  const pool = fresh.length ? fresh : eligible;
  const game = pool[randomIndex(pool.length, rng)];
  const mode = game.modeVariants ? game.modeVariants[randomIndex(game.modeVariants.length, rng)] : game.mode;
  const active = state.teams[state.turnIndex];
  const opponents = state.teams.filter((team) => team.id !== active.id);
  const defender = opponents[randomIndex(opponents.length, rng)];
  const method = rng() < 0.5 ? "assigned" : "chosen";
  const matchup = mode === "coop" ? null : {
    method,
    defenderTeamId: defender.id,
    activePlayerIndex: method === "assigned" ? randomIndex(active.players.length, rng) : 0,
    defenderPlayerIndex: method === "assigned" ? randomIndex(defender.players.length, rng) : 0,
  };
  return {
    gameId: game.id,
    mode,
    duration: gameDuration(game),
    promptIndex: randomIndex(game.prompts.length, rng),
    matchup,
    promptVisible: false,
    revealUsed: false,
    revealRemaining: null,
    answerVisible: false,
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
  };
}
