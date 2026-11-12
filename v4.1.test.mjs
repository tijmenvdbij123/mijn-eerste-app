import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { GAMES } from '../src/games.js';
import { LEVELS } from '../src/levels.js';
import { TOPIC_LEVELS, TOPIC_FACTS, TOPIC_QUESTIONS, TOPIC_TRIVIA_PACKS } from '../src/packs/topic-trivia.js';
import { RIDDLE_POOLS, RIDDLE_REQUIREMENTS, NEW_CHALLENGE_PACKS } from '../src/packs/new-challenges.js';
import { selectFormat, makeInitialState, makeTeam, createRound, canPlayGame, allowedDefenders, contentForRound, isLevelAllowedForGame, getLevelVariant, gameDuration } from '../src/engine.js';
const game = id => GAMES.find(g=>g.id===id);
const lvl = LEVELS.map(l=>l.id);
const topics = ['history','sports','movies-tv','culture','geography','science-nature','arts-literature','music'];
const source = name => readFileSync(new URL(name, import.meta.url), 'utf8');
const stateFor = (format, levels)=> {
  const s=selectFormat(makeInitialState(),format);s.teams=levels.map((l,i)=>({...makeTeam(i,format),level:l}));s.turnIndex=0;return s;
};
const roundContent = (id,level,format='single',mode='solo') => contentForRound(game(id), {format, mode, difficulty:level});
const expectedOldTrivia = (sections, i) => {
  const seeds = i===0 ? sections.beginner : [...sections[lvl[i-1]].slice(-10), ...sections[lvl[i]]];
  return [...seeds.map(s=>({text:s[0],answer:s[1]})), ...seeds.map(s=>({text:s[2],answer:s[3]}))];
};

test('classic trivia: solo Three correct / team Four correct across all eight tiers',()=> {
  for (const level of lvl){
    const f=roundContent('team-trivia',level);assert.match(f.win,/THREE out of FIVE/i);
    assert.match(roundContent('team-trivia',level,'team','coop').win,/FOUR out of FIVE/i);
    for (const mode of ['solo','duel']) assert.match(roundContent('quickfire-facts',level,'single',mode).win,/THREE of SIX/i);
    assert.match(roundContent('quickfire-facts',level,'team','duel').win,/FOUR of SIX/i);
    assert.match(roundContent('trivia-board',level,'single','duel').win,/THREE of SIX/i);
    assert.match(roundContent('trivia-board',level,'team','battle').win,/FOUR of SIX/i);
    assert.match(roundContent('trivia-board',level,'team','battle').win,/more correct/i);
  }
});

test('solo Codebreaker requires three correct at every tier, with possible card lengths; team targets unchanged',()=> {
  const originalTeamCounts={beginner:4, novice:4, amateur:2, intermediate:3, competent:4, skilled:5, advanced:5, grandmaster:8};
  const soloCounts={beginner:4, novice:4, amateur:5, intermediate:3, competent:4, skilled:5, advanced:5, grandmaster:8};
  for(const level of lvl){
    const solo=roundContent('codebreaker',level);const team=roundContent('codebreaker',level,'team','coop');
    assert.match(solo.win,new RegExp(`THREE out of ${soloCounts[level]}`,'i'));
    for(const card of solo.prompts){
      assert.equal(card.answer.split('\n').length,soloCounts[level],`${level}: solo answers`);
      assert.equal(card.text.split('\n').filter(x=>/^\d+\./.test(x)).length,soloCounts[level],`${level}: solo questions`);
    }
    for(const card of team.prompts) assert.equal(card.answer.split('\n').length,originalTeamCounts[level]);
    assert.doesNotMatch(team.win,/at least THREE out of (?:5|8)/i);
  }
});

test('beginner and novice Codebreaker show actual encoded alphabet numbers instead of underscores',()=> {
  for(const level of ['beginner','novice']) {
    const c=roundContent('codebreaker',level,'team','coop');
    assert.match(c.prompts[0].text,/A=1, B=2, C=3/);
    assert.doesNotMatch(c.prompts[0].text,/_/);
    assert.match(c.prompts[0].text,/\d/);
    for(const prompt of c.prompts) for(const line of prompt.text.split('\n').filter(x=>/^\d+\./.test(x))) {
      assert.match(line,/\d+\. [A-Z0-9]+/);
      assert.match(line,/[A-Z]\d+[A-Z]|[A-Z]+\d+/);
    }
  }
  const beginner=roundContent('codebreaker','beginner','team','coop');
  assert.match(beginner.prompts[0].text,/C1T/);
});

test('all eight topic trivia move their original question bank up exactly one level',()=> {
  for(const topic of topics){
    const sections=TOPIC_FACTS[topic];
    for(let i=1;i<7;i++){
      const target=lvl[i];
      assert.deepEqual(TOPIC_QUESTIONS[topic][target], expectedOldTrivia(sections,i-1), `${topic} ${target}`);
      assert.equal(TOPIC_QUESTIONS[topic][target].length,40);
      assert.equal(TOPIC_TRIVIA_PACKS[`topic-trivia-${topic}`][target].prompts.length,8);
    }
    const oldAdvanced=expectedOldTrivia(sections,6), oldGM=expectedOldTrivia(sections,7);
    assert.deepEqual(TOPIC_QUESTIONS[topic].grandmaster,[...oldAdvanced,...oldGM]);
    assert.equal(TOPIC_QUESTIONS[topic].grandmaster.length,80);
    assert.equal(TOPIC_TRIVIA_PACKS[`topic-trivia-${topic}`].grandmaster.prompts.length,16);
  }
});

test('beginner cannot receive any of the eight topic trivia games in both formats or as a defender',()=> {
  for(const topic of topics){
    const g=game('topic-trivia-'+topic);
    assert.equal(isLevelAllowedForGame(g,'beginner'),false);
    for(const format of ['single','team']){
      const s=stateFor(format,['beginner','novice']);
      assert.equal(canPlayGame(s,g),false);
      s.turnIndex=1;
      assert.equal(allowedDefenders(s,g).length,0);
      assert.equal(canPlayGame(s,g),false);
    }
    assert.equal(isLevelAllowedForGame(g,'novice'),true);
  }
});

test('opponents at the same topic-trivia level receive the same card index in either format',()=> {
  for(const topic of topics) for(const format of ['single','team']) for(const level of ['novice','skilled','grandmaster']) {
    const s=stateFor(format,[level,level]);s.enabledCategories=['topic-trivia'];
    for(let i=0;i<6;i++) {
      const r=createRound(s,()=>i/7);
      if(r.gameId!=='topic-trivia-'+topic) continue;
      assert.equal(r.promptIndex,r.defenderPromptIndex);
    }
  }
});

test('riddle Novice has new extremely easy riddles; old sets shift, Grandmaster doubles up',()=> {
  const expected={novice:10,amateur:15,intermediate:15,competent:15,skilled:15,advanced:20,grandmaster:45};
  for(const [level,[questions,correct]] of Object.entries(RIDDLE_REQUIREMENTS)){
    const pool=RIDDLE_POOLS[level], cards=getLevelVariant(game('riddle-round'),level).prompts;
    assert.equal(pool.length,expected[level]);
    assert.equal(cards.length,level==='grandmaster'?9:5);
    assert.match(getLevelVariant(game('riddle-round'),level).win,new RegExp(`at least ${correct} of ${questions}`));
    for(const card of cards) assert.equal(card.answer.split('\n').length,questions);
  }
  assert.match(RIDDLE_POOLS.novice[0][0],/meow/);
  assert.match(RIDDLE_POOLS.amateur[0][0],/four legs but cannot walk/);
  assert.match(RIDDLE_POOLS.intermediate[0][0],/catch but never throw/);
  assert.match(RIDDLE_POOLS.competent[0][0],/speak without a mouth/);
  assert.match(RIDDLE_POOLS.skilled[0][0],/walks in the rain/);
  assert.match(RIDDLE_POOLS.advanced[0][0],/Two fathers and two sons/);
  assert.match(RIDDLE_POOLS.grandmaster[0][0],/Three people check into a room/);
  assert.match(RIDDLE_POOLS.grandmaster[20][0],/100 lockers/);
});

test('no game card for staring, laughing and wrestling; Rebus instructions omit internal clue source levels',()=> {
  for(const id of ['staring-contest','make-laugh','arm-wrestling']){
    assert.equal(game(id).noGameCard,true);
    assert.match(game(id).description,/1v1/);
  }
  for(const format of ['team','single']){
    const mode=format==='team'?'duel':'duel';
    assert.doesNotMatch(roundContent('rebus','novice',format,mode).description,/one (?:level|proficiency)|lower|below|clues are drawn/i);
  }
});

test('version is 4.2 throughout homepage, storage and network connections',()=> {
  assert.equal(makeInitialState().version,'4.2');
  assert.match(source('../src/app.js'),/living-room-battles-v4-1/);
  assert.match(source('../src/app.js'),/living-room-battles-v4-0/);
  assert.match(source('../src/app.js'),/hostState\.version !== "4\.2"/);
  assert.match(source('../src/session.js'),/message\.state\?\.version === "4\.2"/);
  assert.match(source('../index.html'),/V4\.2/);
});

async function render(state,key){
  const root={innerHTML:''};const handlers={};
  globalThis.document={querySelector:x=>x==='#app'?root:null,querySelectorAll:()=>[],addEventListener:(name,handler)=>handlers[name]=handler};
  globalThis.localStorage={getItem:k=>k==='living-room-battles-v4-1'?JSON.stringify(state):null,setItem(){}};
  globalThis.window={scrollTo(){},alert(){},confirm(){return true;}};
  await import(`../src/app.js?v4-1=${key}`);
  return {root,handlers};
}
const playState=(id,format='team',level='novice',defender='novice')=>{
 const s=stateFor(format,[level,defender]);s.screen='play';const g=game(id);
 s.currentRound={gameId:id,format,mode:format==='team'?'battle':'duel',duration:gameDuration(g),difficulty:level,defenderDifficulty:defender,defenderPromptIndex:0,style:null,promptIndex:0,stageIndex:0,soloPlayerIndex:0,matchup:{method:'chosen',defenderTeamId:s.teams[1].id,activePlayerIndex:0,defenderPlayerIndex:0},promptVisible:true,revealUsed:false,revealRemaining:null,answerVisible:false,timerExpired:false};
 return s;
};

test('rendered same-level topic trivia has exactly one GAME CARD and one quiz; different levels have two',async()=> {
  for(const format of ['team','single']){
    const same=await render(playState('topic-trivia-history',format,'novice','novice'),`same-${format}`);
    assert.equal((same.root.innerHTML.match(/TOPIC: History/g)||[]).length,1);
    assert.doesNotMatch(same.root.innerHTML,/defender-prompt/);
    const diff=await render(playState('topic-trivia-history',format,'novice','amateur'),`diff-${format}`);
    assert.equal((diff.root.innerHTML.match(/TOPIC: History/g)||[]).length,2);
    assert.match(diff.root.innerHTML,/defender-prompt/);
  }
});

test('rendered no-card party games show instructions but no GAME CARD area',async()=>{
  for(const id of ['staring-contest','make-laugh','arm-wrestling']) for(const format of ['team','single']) {
    const html=(await render(playState(id,format,'skilled','skilled'),`${id}-${format}`)).root.innerHTML;
    assert.match(html,/HOW TO WIN THE POINT/);
    assert.doesNotMatch(html,/<span>GAME CARD<\/span>/);
    assert.doesNotMatch(html,/data-action="toggle-prompt"/);
    assert.doesNotMatch(html,/No separate game card needed/);
  }
});

test('rendered Solo and Team trivia targets are visibly different',async()=>{
 for (const [id,mode] of [['team-trivia','solo'],['quickfire-facts','solo'],['trivia-board','duel']]) {
   const state=playState(id,'single','grandmaster','grandmaster');state.currentRound.mode=mode;
   if(mode==='solo')state.currentRound.matchup=null;
   const html=(await render(state,`${id}-solo`)).root.innerHTML;
   assert.match(html,/THREE (?:out of FIVE|of SIX)/i);
 }
 for(const [id,mode] of [['team-trivia','coop'],['quickfire-facts','duel'],['trivia-board','battle']]){
   const state=playState(id,'team','grandmaster','grandmaster');state.currentRound.mode=mode;
   if(mode==='coop')state.currentRound.matchup=null;
   const html=(await render(state,`${id}-team`)).root.innerHTML;
   assert.match(html,/FOUR (?:out of FIVE|of SIX)/i);
 }
});
