// V4.19: equipment requirements are based on the actual selected catalogue
// entries. The built-in digital text/secret card is not an extra supply.
import { GAMES } from './games.js';
import { SINGLE_EXCLUDED_GAMES } from './single-mode.js';

export const SUPPLY_KEYS = ['paper', 'pen', 'table', 'space', 'music'];

export const SUPPLY_LABELS = {
  en: { paper: 'Paper', pen: 'Pen or pencil', table: 'Sturdy table', space: 'Clear space to play / fly paper planes', music: 'Phone with a music streaming service' },
  nl: { paper: 'Papier', pen: 'Pen of potlood', table: 'Stevige tafel', space: 'Vrije ruimte om te spelen / vliegtuigjes te laten vliegen', music: 'Telefoon met een muziekstreamingdienst' },
  da: { paper: 'Papir', pen: 'Kuglepen eller blyant', table: 'Stabilt bord', space: 'Fri plads til at lege / flyve med papirfly', music: 'Telefon med en musiktjeneste' },
};

export const EQUIPMENT_UI = {
  en: {
    eyebrow: 'ONE LAST CHECK', heading: 'Welcome to the game!', intro: 'These are the supplies needed for your selected minigames. Everything is checked by default. Uncheck anything you do not have; games requiring it will be left out.',
    none: 'Your selected games need no extra supplies. You are ready to play!', back: '← Back to game selection', continue: 'Continue →',
    summary: 'Selected games', warningTitle: 'Some games will be left out', warningIntro: 'You originally selected these minigames, but they require supplies you unchecked. They will not be played:', warningBack: '← Back to change supplies', warningContinue: 'Continue and start the game',
    remaining: 'Minigames remaining', noGames: 'No playable games remain with these supplies. Select more supplies or go back and choose different games.',
  },
  nl: {
    eyebrow: 'NOG ÉÉN CONTROLE', heading: 'Welkom bij het spel!', intro: 'Dit zijn de benodigdheden voor de spellen die jullie hebben geselecteerd. Alles is standaard aangevinkt. Vink iets uit als je het niet hebt; spellen waarvoor je dat nodig hebt, worden uitgesloten.',
    none: 'Voor jullie gekozen spellen zijn geen extra benodigdheden nodig. Jullie kunnen beginnen!', back: '← Terug naar spelkeuze', continue: 'Doorgaan →',
    summary: 'Geselecteerde spellen', warningTitle: 'Let op: deze spellen vervallen', warningIntro: 'Je had deze spellen eerst geselecteerd, maar je hebt benodigdheden uitgevinkt die ervoor nodig zijn. Deze spellen worden niet gespeeld:', warningBack: '← Terug om benodigdheden te wijzigen', warningContinue: 'Toch doorgaan en het spel beginnen',
    remaining: 'Overgebleven spellen', noGames: 'Er blijven geen speelbare spellen over met deze benodigdheden. Vink meer benodigdheden aan of kies andere spellen.',
  },
  da: {
    eyebrow: 'ET SIDSTE TJEK', heading: 'Velkommen til spillet!', intro: 'Her er det udstyr, I skal bruge til de valgte minispil. Alt er markeret på forhånd. Fjern markeringen ved det, I mangler; spil, der kræver udstyret, bliver udeladt.',
    none: 'De valgte spil kræver intet ekstra udstyr. I er klar til at spille!', back: '← Tilbage til valg af spil', continue: 'Fortsæt →',
    summary: 'Valgte spil', warningTitle: 'Bemærk: nogle spil bliver fravalgt', warningIntro: 'I havde oprindeligt valgt disse spil, men har fravalgt udstyr, som spillene kræver. De bliver ikke spillet:', warningBack: '← Tilbage og ændr udstyr', warningContinue: 'Fortsæt og start spillet',
    remaining: 'Tilbageværende spil', noGames: 'Der er ingen spil tilbage, der kan spilles med det valgte udstyr. Vælg mere udstyr eller andre spil.',
  },
};

export function suppliesForGame(game) {
  const equipment = String(game?.equipment || '').toLowerCase();
  const requirements = new Set();
  if (!equipment || /no extra equipment|paper optional|secret word card/.test(equipment)) return [];
  if (/paper/.test(equipment)) requirements.add('paper');
  // 'Text card and paper' means writing answers on paper; the card itself is on-screen.
  if (/\bpen\b|\bpencil\b|text card and paper/.test(equipment)) requirements.add('pen');
  if (/stable table/.test(equipment)) requirements.add('table');
  if (/clear space|open flying area/.test(equipment)) requirements.add('space');
  if (/streaming service/.test(equipment)) requirements.add('music');
  return SUPPLY_KEYS.filter(key => requirements.has(key));
}

export function selectedGames(state) {
  const categories = new Set(state.enabledCategories || []);
  const enabled = new Set(state.enabledGameIds || GAMES.map(g => g.id));
  return GAMES.filter(game => categories.has(game.category) && enabled.has(game.id)
    && (state.format !== 'single' || !SINGLE_EXCLUDED_GAMES.has(game.id)));
}

export function requiredSupplies(state) {
  const required = new Set(selectedGames(state).flatMap(suppliesForGame));
  return SUPPLY_KEYS.filter(key => required.has(key));
}

export function excludedGames(state) {
  const unchecked = new Set(state.uncheckedSupplies || []);
  return selectedGames(state).filter(game => suppliesForGame(game).some(key => unchecked.has(key)));
}

export function stateWithAvailableSupplies(state) {
  const excluded = new Set(excludedGames(state).map(game => game.id));
  const enabledGameIds = (state.enabledGameIds || GAMES.map(g => g.id)).filter(id => !excluded.has(id));
  const retained = new Set(enabledGameIds);
  return { ...state, enabledGameIds, enabledCategories: state.enabledCategories.filter(cat => GAMES.some(g => g.category === cat && retained.has(g.id))) };
}
