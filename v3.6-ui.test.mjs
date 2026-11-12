import test from 'node:test';
import assert from 'node:assert/strict';
import { GAMES } from '../src/games.js';
import { makeInitialState, makeTeam, gameDuration } from '../src/engine.js';

const getGame = (id) => GAMES.find((game) => game.id === id);
function stateFor(gameId, { format = 'single', mode = 'duel', level = 'competent', promptIndex = 0, stageIndex = 0, expired = false } = {}) {
  const state = makeInitialState();
  state.format = format;
  state.teams = [makeTeam(0,format), makeTeam(1,format)].map((team) => ({...team, level}));
  state.screen = 'play';
  state.timerRunning = false;
  state.timeUpModal = expired;
  const g = getGame(gameId);
  state.currentRound = {
    gameId, format, mode, duration: gameDuration(g), difficulty: level,
    defenderDifficulty: level, defenderPromptIndex: promptIndex,
    style: null, stageIndex, promptIndex, soloPlayerIndex: 0,
    matchup: mode === 'solo' || mode === 'coop' ? null : {
      method:'assigned', defenderTeamId: state.teams[1].id,
      activePlayerIndex:0, defenderPlayerIndex:0,
    },
    promptVisible: !expired, revealUsed: expired,
    revealRemaining: null, answerVisible:false, timerExpired:expired,
  };
  state.timerRemaining = expired ? 0 : stageIndex === 1 ? g.stages[1].seconds : gameDuration(g);
  return state;
}
async function renderFor(state, key) {
  const root = { innerHTML: '' };
  const events = {};
  globalThis.document = {
    querySelector: (selector) => selector === '#app' ? root : null,
    querySelectorAll: () => [],
    addEventListener: (type, callback) => { events[type] = callback; },
  };
  globalThis.localStorage = {
    getItem: (key) => key === 'living-room-battles-v3-6' ? JSON.stringify(state) : null,
    setItem() {},
  };
  globalThis.window = { scrollTo(){}, alert(){}, confirm(){return true;} };
  await import(`../src/app.js?test=${key}`);
  return { html:root.innerHTML, events, root };
}

test('Actual 1v1 Category Flood card shows short bird prompt and paper equipment',async()=>{
  const state=stateFor('category-flood',{promptIndex:4});
  const {html}=await renderFor(state,'cat-duel');
  assert.match(html,/✎ Text card and paper/);
  assert.match(html,/Write as many birds as possible\./);
  assert.doesNotMatch(html,/WRITE AS MANY DISTINCT TYPES OF BIRDS AS POSSIBLE/);
});

test('Actual solo Category Flood card still shows no additional equipment',async()=>{
  const state=stateFor('category-flood',{mode:'solo',promptIndex:4});
  const {html}=await renderFor(state,'cat-solo');
  assert.match(html,/✎ No extra equipment/);
  assert.match(html,/Name 10 TYPES OF BIRDS/i);
});

test('Word Recall team and solo screens show a 90-second writing timer',async()=>{
  for(const format of ['team','single']) {
    const state=stateFor('word-recall-battle',{format,mode:format==='single'?'duel':'battle',stageIndex:1});
    const {html}=await renderFor(state,`word-${format}`);
    assert.match(html,/01:30/);
    assert.match(html,/90s write remembered words/i);
    assert.match(html,/90 seconds/);
  }
});

test('Word Recall time-up modal confirms 90 seconds passed',async()=>{
  const state=stateFor('word-recall-battle',{expired:true,stageIndex:1});
  const {html}=await renderFor(state,'word-timeup');
  assert.match(html,/The 90-second writing stage is over/);
});

test('Clock Duel difficulty picker disables both Beginner and Novice',async()=>{
  const state=stateFor('clock-duel',{format:'team',mode:'duel',level:'amateur'});
  const {html}=await renderFor(state,'clock-picker');
  assert.match(html,/<option value="beginner"[^>]*disabled/);
  assert.match(html,/<option value="novice"[^>]*disabled/);
  assert.match(html,/<option value="amateur"[^>]*selected/);
  assert.doesNotMatch(html,/<option value="amateur"[^>]*disabled/);
});

test('Solo Rock-Paper-Scissors card says ties never consume a round',async()=>{
  const state=stateFor('rps-council',{level:'novice'});
  const {html}=await renderFor(state,'rps-card');
  assert.match(html,/TIES DO NOT COUNT AS A ROUND/);
  assert.match(html,/FIRST TO 3 WINS/);
  assert.match(html,/A tied throw counts as NO round/);
});
