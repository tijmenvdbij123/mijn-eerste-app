import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { GAMES, CATEGORIES } from '../src/games.js';
import { LEVELS, OPEN_MATCHUP_GAME_IDS } from '../src/levels.js';
import { TOPIC_QUESTIONS, TOPIC_TRIVIA_PACKS, TOPIC_NAMES, TOPIC_LEVELS } from '../src/packs/topic-trivia.js';
import { RIDDLE_REQUIREMENTS, REBUS_PACKS, REBUS_LENGTHS, REBUS_SOURCE_LEVEL } from '../src/packs/new-challenges.js';
import { SINGLE_EXCLUDED_GAMES, modesForSingle } from '../src/single-mode.js';
import { makeInitialState, makeTeam, availableGames, canPlayGame, createRound, gameDuration, getLevelVariant, contentForRound, isLevelAllowedForGame, allowedDefenders, selectFormat, finishRound } from '../src/engine.js';
const get = id=>GAMES.find(g=>g.id===id);
const file = name=>readFileSync(new URL(name, import.meta.url), 'utf8');
const stateOf = (format,levels) => {const s=selectFormat(makeInitialState(),format);s.teams=levels.map((level,i)=>({...makeTeam(i,format),level}));s.turnIndex=0;s.roundNumber=1;return s;};
const topicIds=['history','sports','movies-tv','culture','geography','science-nature','arts-literature','music'];
const freshGames=['staring-contest','make-laugh','rebus','arm-wrestling','riddle-round'];

test('V4.0 game and category counts keep original formats and isolate additions',()=>{
 assert.equal(GAMES.length,37);assert.equal(CATEGORIES.length,10);assert.equal(availableGames(stateOf('team',['skilled','skilled'])).length,37);
 assert.equal(availableGames(stateOf('single',['skilled','skilled'])).length,33);
 assert.deepEqual([...SINGLE_EXCLUDED_GAMES].sort(),['sketch-guess','mime-relay','silent-charades','picture-race'].sort());
 for(const id of topicIds) assert.equal(get('topic-trivia-'+id).category,'topic-trivia');
 for(const id of freshGames) assert.equal(get(id).category,'party-challenges');
 assert.equal(GAMES.filter(g=>g.category==='trivia').length,3);
 assert.equal(GAMES.filter(g=>g.category==='topic-trivia').length,8);
 assert.equal(GAMES.filter(g=>g.category==='party-challenges').length,5);
 assert.notEqual(CATEGORIES.find(c=>c.id==='trivia').name,CATEGORIES.find(c=>c.id==='topic-trivia').name);
});

test('eight topic quizzes keep 40 questions per playable middle level and 80 at Grandmaster',()=>{
 assert.deepEqual(Object.keys(TOPIC_QUESTIONS).sort(),topicIds.sort());
 let placements=0;
 for(const topic of topicIds)for(const {id:level} of LEVELS){
   const questions=TOPIC_QUESTIONS[topic][level];assert.equal(questions.length,level==='grandmaster'?80:40,`${topic}/${level}`);
   assert.ok(new Set(questions.map(x=>x.text.toLowerCase())).size>=40,`${topic}/${level} duplicates excessive`);
   for(const q of questions){assert.ok(q.text.length>12 && q.answer.length>0,`${topic}/${level}`);}
   const cards=TOPIC_TRIVIA_PACKS['topic-trivia-'+topic][level].prompts;
   assert.equal(cards.length,level==='grandmaster'?16:8,`${topic}/${level} cards`);
   for(const c of cards){assert.equal((c.text.match(/^\d+\. /mg)||[]).length,5);assert.equal((c.answer.match(/^\d+\. /mg)||[]).length,5);}
   placements+=questions.length;
 }
 assert.equal(placements,2880);
});

test('topic trivia modes, independent level-adjusted defenders and scoring',()=>{
 for(const id of topicIds){const g=get('topic-trivia-'+id);assert.equal(g.clock,undefined);assert.equal(gameDuration(g),150);assert.equal(g.mode,'battle');assert.equal(modesForSingle(g).join(), 'duel');assert.ok(OPEN_MATCHUP_GAME_IDS.has(g.id));
   for(const level of TOPIC_LEVELS) assert.equal(getLevelVariant(g,level).prompts.length, level==='grandmaster'?16:8);
 }
 const s=stateOf('team',['novice','grandmaster']);
 s.enabledCategories=['topic-trivia'];
 assert.equal(allowedDefenders(s,get('topic-trivia-music')).length,1);
 for(let i=0;i<20;i++){const r=createRound(s,()=>i/21);assert.ok(r.gameId.startsWith('topic-trivia-'));assert.equal(r.mode,'battle');assert.ok(r.defenderPromptIndex>=0);}
 const r={format:'single',mode:'duel',difficulty:'novice'};
 const content=contentForRound(get('topic-trivia-history'),r);assert.match(content.win,/MORE/i);
});

test('stare battle is universal 1v1 without timer and has neutral judging',()=>{
 const g=get('staring-contest');assert.equal(g.mode,'duel');assert.equal(gameDuration(g),0);
 assert.deepEqual(modesForSingle(g),['duel']);assert.ok(OPEN_MATCHUP_GAME_IDS.has(g.id));
 for(const l of LEVELS) assert.ok(isLevelAllowedForGame(g,l.id));
 for(const format of ['team','single']){const s=stateOf(format,['beginner','grandmaster','amateur']);assert.equal(allowedDefenders(s,g).length,2);}
 assert.match(g.description,/neutral team/i);assert.match(g.description,/blink/i);
});

test('Make the Other Laugh is 1v1 at any levels with exactly 60 seconds',()=>{
 const g=get('make-laugh');assert.equal(gameDuration(g),60);assert.equal(g.mode,'duel');
 assert.deepEqual(modesForSingle(g),['duel']);assert.ok(OPEN_MATCHUP_GAME_IDS.has(g.id));
 const s=stateOf('team',['beginner','grandmaster']);s.enabledCategories=['party-challenges'];
 assert.equal(allowedDefenders(s,g).length,1);
 assert.match(g.description,/faces|speech/i);assert.match(g.win,/60 seconds/);
});

test('rebus excludes beginners, runs 150 seconds and supports 1v1 or 2v2',()=>{
 const g=get('rebus');assert.equal(gameDuration(g),150);assert.deepEqual(g.modeVariants,['duel','battle']);assert.deepEqual(modesForSingle(g),['duel']);
 assert.equal(isLevelAllowedForGame(g,'beginner'),false);
 for(const level of TOPIC_LEVELS.slice(1))assert.equal(isLevelAllowedForGame(g,level),true);
 assert.equal(allowedDefenders(stateOf('team',['novice','beginner']),g).length,0);
 assert.equal(allowedDefenders(stateOf('team',['novice','amateur']),g).length,1);
 assert.match(g.description,/2v2/);assert.match(g.description,/FIRST final-word guess/i);
});

test('rebus uses one-lower-level trivia and valid extracted letters for all 56 secret-word cards',()=>{
 let count=0;
 for(const [level,len] of Object.entries(REBUS_LENGTHS)){
   assert.equal(REBUS_SOURCE_LEVEL[level],TOPIC_LEVELS[TOPIC_LEVELS.indexOf(level)-1]);
   const cards=REBUS_PACKS[level].prompts;assert.equal(cards.length,8);
   for(const c of cards){assert.equal(c.secretWord.length,len);assert.equal(c.clues.length,len);
     assert.equal(new Set(c.clues.map(q=>q.question)).size,len);
     assert.equal(c.clues.map(q=>q.letter).join(''),c.secretWord);
     assert.match(c.answer, new RegExp('SECRET WORD: '+c.secretWord));
     assert.doesNotMatch(c.text, new RegExp('SECRET WORD: '+c.secretWord));
     for(const q of c.clues){
       const normalized=q.answer.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toUpperCase().replace(/[^A-Z]/g,'');
       assert.match(q.answer,/^[A-Za-zÀ-ÿ-]+$/);
       assert.equal(normalized[q.letterIndex-1],q.letter);
       assert.ok(Object.values(TOPIC_QUESTIONS).some(byLevel=>byLevel[REBUS_SOURCE_LEVEL[level]].some(f=>f.text===q.question && f.answer===q.answer)),`${level}: unused trivia clue`);
     }
     count++;
   }
 }
 assert.equal(count,56);
});

test('riddles exclude Beginner and use exact per-level counts, targets and 2:30',()=>{
 const g=get('riddle-round');assert.equal(g.mode,'coop');assert.equal(gameDuration(g),150);assert.deepEqual(modesForSingle(g),['solo']);
 assert.equal(isLevelAllowedForGame(g,'beginner'),false);
 for(const [level,[n,needed]] of Object.entries(RIDDLE_REQUIREMENTS)){
   const v=getLevelVariant(g,level);assert.equal(v.prompts.length,level==='grandmaster'?9:5);
   assert.match(v.win,new RegExp(`at least ${needed} of ${n}`));
   for(const p of v.prompts){assert.equal((p.text.match(/^\d+\. /mg)||[]).length,n,level);assert.equal((p.answer.match(/^\d+\. /mg)||[]).length,n,level);}
 }
});

test('arm wrestling is strictly 1v1, untimed and scoring belongs to active team',()=>{
 const g=get('arm-wrestling');assert.equal(gameDuration(g),0);assert.equal(g.mode,'duel');
 assert.deepEqual(modesForSingle(g),['duel']);assert.match(g.win,/active player scores/);
 assert.match(g.description,/stop immediately/);
});

test('old games remain present and one point can only go to the active side',()=>{
 const expected=['category-flood','last-letter-duel','rhyme-rally','team-trivia','quickfire-facts','trivia-board','sketch-guess','shape-copy','picture-race','shopping-basket','digit-duel','word-recall-battle','missing-numbers','clock-duel','target-number','silent-charades','reaction-rules','mime-relay','alphabet-story','alliteration-duel','headline-teams','codebreaker','count-to-thirty','rps-council'];
 assert.deepEqual(GAMES.slice(0,24).map(g=>g.id),expected);
 const s=stateOf('team',['skilled','skilled']);s.enabledCategories=['party-challenges'];s.currentRound=createRound(s,()=>0.99);s.screen='play';s.roundsPerTeam=3;const a=s.teams[0].id;const done=finishRound(s,true,()=>0.99);assert.equal(done.teams.find(t=>t.id===a).score,1);assert.equal(done.teams[1].score,0);
});

test('V4.2 version, browser migration, session and home page all align',()=>{
 assert.equal(makeInitialState().version,'4.2');
 assert.match(file('../src/session.js'),/message\.state\?\.version === "4\.2"/);
 assert.match(file('../src/app.js'),/hostState\.version !== "4\.2"/);
 assert.match(file('../src/app.js'),/living-room-battles-v3-6/);
 assert.match(file('../src/app.js'),/living-room-battles-v4-0/);
 assert.match(file('../src/app.js'),/37 minigames/);
 assert.match(file('../src/app.js'),/33 minigames/);
 assert.match(file('../index.html'),/V4\.2/);
});

async function renderState(state,id){
 const root={innerHTML:''};const handlers={};
 globalThis.document={querySelector:x=>x==='#app'?root:null,querySelectorAll:()=>[],addEventListener:(event,callback)=>handlers[event]=callback};
 globalThis.localStorage={getItem:key=>key==='living-room-battles-v4-1'?JSON.stringify(state):null,setItem() {}};
 globalThis.window={scrollTo(){},alert(){},confirm(){return true;}};
 await import(`../src/app.js?render=${id}`);
 return {html:root.innerHTML,handlers,root};
}
function fakeState(gameId,{format='team',mode='duel',level='novice',otherLevel='amateur',promptVisible=true,expired=false,teamCount=3}={}) {
 const s=stateOf(format,Array.from({length:teamCount},(_,i)=>i===0?level:otherLevel));
 s.screen='play';s.currentRound={gameId,format,mode,difficulty:level,defenderDifficulty:otherLevel,promptIndex:0,defenderPromptIndex:0,style:null,duration:gameDuration(get(gameId)),stageIndex:0,soloPlayerIndex:0,matchup:mode==='coop'||mode==='solo'?null:{method:'assigned',defenderTeamId:s.teams[1].id,activePlayerIndex:0,defenderPlayerIndex:0},promptVisible,revealUsed:promptVisible,answerVisible:false,revealRemaining:null,timerExpired:expired};
 s.timerRunning=promptVisible&&!expired;s.timerRemaining=expired?0:gameDuration(get(gameId));return s;
}

test('rendered team trivia shows DIFFERENT cards and hides answers until finish',async()=>{
 const s=fakeState('topic-trivia-music',{level:'novice',otherLevel:'grandmaster'});const {html}=await renderState(s,'topic-card');
 assert.match(html,/Trivia: Music/);
 assert.match(html,/Team A · Novice/);assert.match(html,/Team B · Grandmaster/);
 assert.match(html,/TOPIC: Music/);
 assert.match(html,/data-action="finish-and-reveal"/);
 assert.doesNotMatch(html,/data-action="toggle-answer"/);
 assert.doesNotMatch(html,/ANSWER KEY/);
});

test('rendered rebus enforces same puzzle and hides solution until finish',async()=>{
 const s=fakeState('rebus',{format:'team',mode:'battle',level:'competent',otherLevel:'competent'});
 const {html}=await renderState(s,'rebus-team');
 assert.match(html,/Two players per team: 2v2/);assert.match(html,/selects exactly TWO participating players/);
 assert.match(html,/SECRET WORD: 5 letters/);assert.match(html,/FIRST final-word guess/);
 assert.doesNotMatch(html,/SECRET WORD: APPLE/);
 assert.doesNotMatch(html,/data-action="toggle-answer"/);
});

test('rendered beginner restriction and advanced riddles follow requested number',async()=>{
 const novice=fakeState('riddle-round',{mode:'coop',level:'novice',otherLevel:'novice'});
 const a=await renderState(novice,'riddle-novice');
 assert.match(a.html,/<option value="beginner"[^>]*disabled/);
 assert.match(a.html,/at least 1 of 2 riddles/);
 const advanced=fakeState('riddle-round',{mode:'coop',level:'advanced',otherLevel:'advanced'});
 const b=await renderState(advanced,'riddle-advanced');
 assert.match(b.html,/at least 3 of 4 riddles/);
});

test('stare 3-player screen displays neutral judge and NO clock',async()=>{
 const s=fakeState('staring-contest',{format:'single',mode:'duel',level:'beginner',otherLevel:'grandmaster'});
 const {html}=await renderState(s,'stare-judge');
 assert.match(html,/NO CLOCK NEEDED/);
 assert.match(html,/Neutral judge:/);
 assert.match(html,/watches for the first blink/);
});

test('single laugh battle displays a 1:00 clock and universal matchup',async()=>{
 const s=fakeState('make-laugh',{format:'single',mode:'duel',level:'beginner',otherLevel:'grandmaster'});
 const {html}=await renderState(s,'laugh-60');
 assert.match(html,/01:00/);assert.match(html,/Make the Other Laugh/);
 assert.match(html,/Any levels can face each other/);
});

test('finishing a trivia attempt immediately confirms and reveals correct answers',async()=>{
 const s=fakeState('topic-trivia-history',{level:'novice',otherLevel:'grandmaster'});
 const {handlers,root}=await renderState(s,'finish-early');
 const btn={dataset:{action:'finish-and-reveal'},closest(){return this;}};
 handlers.click({target:btn});
 assert.match(root.innerHTML,/ANSWER KEY/);
 assert.match(root.innerHTML,/Team B ANSWER KEY/);
 assert.doesNotMatch(root.innerHTML,/data-action="finish-and-reveal"/);
});
