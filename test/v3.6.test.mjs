import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { GAMES } from '../src/games.js';
import { LEVELS } from '../src/levels.js';
import { SINGLE_EXCLUDED_GAMES } from '../src/single-mode.js';
import {
  allowedDefenders, canPlayGame, contentForRound, createRound,
  gameDuration, getLevelVariant, isLevelAllowedForGame,
  makeInitialState, makeTeam, availableGames,
} from '../src/engine.js';

const game = (id) => {
  const result = GAMES.find((g) => g.id === id);
  assert.ok(result, `Missing game ${id}`);
  return result;
};
const card = (id, level = 'skilled', format = 'team', mode = 'duel') =>
  contentForRound(game(id), { difficulty: level, format, mode, style: 'normal' });
const makeState = (format, levels) => {
  const state = makeInitialState();
  state.format = format;
  state.screen = 'setup';
  state.teams = levels.map((level, i) => ({ ...makeTeam(i, format), level }));
  state.turnIndex = 0;
  return state;
};
const source = (name) => readFileSync(new URL(name, import.meta.url), 'utf8');

test('site preserves 24 original games plus 13 additions, 33 solo games', () => {
  assert.equal(GAMES.length, 37);
  assert.equal(availableGames(makeState('team', ['skilled','skilled'])).length, 37);
  const single = availableGames(makeState('single', ['skilled','skilled']));
  assert.equal(single.length, 33);
  assert.deepEqual([...SINGLE_EXCLUDED_GAMES].sort(), ['mime-relay','picture-race','silent-charades','sketch-guess'].sort());
});

test('Version 4.2 is used consistently across saved state, guests, interface', () => {
  assert.equal(makeInitialState().version, '4.2');
  assert.match(source('../src/session.js'), /message\.state\?\.version === "4\.2"/);
  assert.match(source('../src/app.js'), /hostState\.version !== "4\.2"/);
  assert.match(source('../src/app.js'), /living-room-battles-v4-0/);
  assert.match(source('../index.html'), /V4\.2/);
});

test('1v1 Category Flood has a concise card at every one of eight levels', () => {
  for (const { id } of LEVELS) {
    const duel = card('category-flood', id, 'single', 'duel');
    assert.equal(duel.equipment, 'Text card and paper', id);
    assert.ok(duel.prompts.length >= 5, `${id}: missing category prompts`);
    for (const prompt of duel.prompts) {
      assert.match(prompt.text, /^Write as many [^\n]+ as possible\.$/, `${id}: ${prompt.text}`);
      assert.doesNotMatch(prompt.text, /\b150\b|distinct|both players|EXAMPLE/i, `${id}: redundant card text`);
    }
    assert.match(duel.description, /SAME category/);
    assert.match(duel.description, /150-second/);
    assert.match(duel.win, /MORE valid/);
    assert.match(duel.win, /tie blocks/i);
  }
});

test('1v1 Birds card uses birds, not TYPES OF BIRDS', () => {
  const c = card('category-flood','competent','single','duel');
  assert.ok(c.prompts.some((p) => p.text === 'Write as many birds as possible.'));
  assert.ok(!c.prompts.some((p) => /TYPES OF BIRDS|DISTINCT TYPES/i.test(p.text)));
});

test('Category Flood solo and team rules, examples and counts are unchanged', () => {
  for (const { id } of LEVELS) {
    const base = card('category-flood',id,'team','coop');
    const solo = card('category-flood',id,'single','solo');
    assert.deepEqual(solo.prompts,base.prompts, `solo prompts changed for ${id}`);
    assert.equal(solo.equipment,undefined);
    assert.equal(base.equipment,undefined);
    assert.match(solo.description,/SOLO VERSION/);
    const required = id === 'beginner' || id === 'novice' ? 8 : 10;
    assert.match(solo.win,new RegExp(`\\b${required}\\b`));
    if (id === 'beginner' || id === 'novice') {
      assert.ok(solo.prompts.some((p) => /EXAMPLE/.test(p.text)), `${id}: lost examples`);
    }
  }
  assert.equal(game('category-flood').equipment,'No extra equipment');
});

test('The UI displays per-mode equipment (duel: paper; solo: none)', () => {
  assert.match(source('../src/app.js'), /escapeHtml\(content\.equipment \|\| game\.equipment\)/);
});

test('Word Recall keeps 25-second preview and uses 90-second writing phase', () => {
  const g = game('word-recall-battle');
  assert.equal(g.clock,'staged');
  assert.deepEqual(g.stages.map((x) => x.seconds),[25,90]);
  assert.equal(gameDuration(g),25);
  for (const { id } of LEVELS) {
    for (const format of ['team','single']) {
      const c = card('word-recall-battle',id,format,format === 'single' ? 'duel':'battle');
      assert.match(c.description,/90 seconds/,`${format}/${id}: description`);
      assert.doesNotMatch(c.description,/60.seconds/,`${format}/${id}`);
      assert.equal(c.prompts.length,5);
      assert.equal(c.prompts[0].answer.split(' • ').length,16);
    }
  }
});

test('All Word Recall UI labels (timer, modal, restart) say 90 seconds', () => {
  const ui = source('../src/app.js');
  assert.match(ui,/The 90-second writing stage is over/);
  assert.match(ui,/25-second viewing and 90-second writing timers/);
  assert.match(ui,/game\.stages\.map/); // stage instructions dynamically generated
  assert.doesNotMatch(ui,/60-second writing/);
});

test('Clock Duel eligibility is Amateur through Grandmaster only', () => {
  for (const { id } of LEVELS) {
    const playable = LEVELS.findIndex((l) => l.id === id) >= 2;
    assert.equal(isLevelAllowedForGame(game('clock-duel'),id),playable,`${id}`);
  }
  assert.equal(isLevelAllowedForGame(game('clock-duel'),'not-a-level'),false);
  assert.equal(isLevelAllowedForGame(game('category-flood'),'novice'),true);
});

test('Clock Duel cannot be assigned to novice or beginner in Solo Showdown', () => {
  for (const id of ['beginner','novice']) {
    const state=makeState('single',[id,'amateur']);
    assert.equal(canPlayGame(state,game('clock-duel')),false,`solo ${id}`);
  }
  assert.equal(canPlayGame(makeState('single',['amateur','novice']),game('clock-duel')),true);
});

test('Clock Duel cannot be assigned to novice or beginner in Team Battles', () => {
  for (const id of ['beginner','novice']) {
    const state=makeState('team',[id,'amateur']);
    assert.equal(canPlayGame(state,game('clock-duel')),false,`team ${id}`);
  }
});

test('Clock Duel novice or beginner can never be selected as defender', () => {
  const state = makeState('team',['amateur','novice','beginner','amateur','intermediate']);
  assert.deepEqual(allowedDefenders(state,game('clock-duel')).map((t)=>t.level),['amateur','intermediate']);
  assert.equal(canPlayGame(makeState('team',['amateur','novice']),game('clock-duel')),false, 'only novice defender');
  assert.equal(canPlayGame(makeState('team',['amateur','amateur']),game('clock-duel')),true);
});

test('Clock Duel low difficulties are disabled in UI and rejected in event handler', () => {
  const ui = source('../src/app.js');
  assert.match(ui,/\!isLevelAllowedForGame\(game, level\.id\) \? "disabled"/);
  assert.match(ui,/\!isLevelAllowedForGame\(game, input\.value\)/);
});

test('Other level restrictions remain stable', () => {
  for (const id of ['target-number','alphabet-story','headline-teams']) {
    assert.equal(isLevelAllowedForGame(game(id),'beginner'),false);
    assert.equal(isLevelAllowedForGame(game(id),'novice'),true);
  }
  assert.equal(isLevelAllowedForGame(game('rhyme-rally'),'beginner'),true);
});

test('Team Rock-Paper-Scissors: first to 3, ties do not count', () => {
  const g=game('rps-council');
  const team=card('rps-council','beginner','team','battle');
  assert.match(team.description,/first team to win THREE/i);
  assert.match(team.description,/does NOT count as a round/);
  assert.match(team.win,/THREE decisive rounds/);
  assert.match(team.prompts[0].text,/TIES DO NOT COUNT AS A ROUND/);
  assert.equal(g.clock,'none');
});

test('Solo Rock-Paper-Scissors: ties replayed, first to 3 scores', () => {
  const c=card('rps-council','beginner','single','duel');
  assert.match(c.description,/first player to win THREE rounds/i);
  assert.match(c.description,/tied throw counts as NO round/i);
  assert.match(c.win,/FIRST to win THREE decisive rounds/i);
  assert.deepEqual(c.prompts,card('rps-council','beginner','team','battle').prompts);
});

test('All previously available pack-based games still have cards at every level', () => {
  for (const g of GAMES) for (const { id } of LEVELS) {
    if (g.noGameCard || !isLevelAllowedForGame(g,id)) continue;
    const c=card(g.id,id,'team',g.mode);
    assert.ok(c.prompts.length > 0,`${g.id}/${id}`);
    for (const p of c.prompts) assert.equal(typeof p.text,'string');
  }
});
