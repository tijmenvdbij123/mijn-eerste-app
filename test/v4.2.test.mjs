import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { makeInitialState, selectFormat, contentForRound } from '../src/engine.js';
import { GAMES } from '../src/games.js';
import { LEVELS } from '../src/levels.js';
import { dutch, translatePage } from '../src/i18n/nl.js';
import { DUTCH_REBUS_PACKS, dutchCodebreakerPrompt } from '../src/i18n/nl-puzzles.js';
import { dutchGameRules } from '../src/i18n/nl-rules.js';

const source = name => readFileSync(new URL(name, import.meta.url), 'utf8');
const findGame = id => GAMES.find(g=>g.id===id);
const alphabet = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^A-Za-z]/g,'').toUpperCase();

// Setup flow and language persistence

test('V4.2 game format leads to a language selection screen',()=>{
  const initial = makeInitialState();
  assert.equal(initial.version,'4.2');
  assert.equal(initial.language,null);
  for(const format of ['team','single']){
    const s=selectFormat(initial,format);
    assert.equal(s.screen,'language');
    assert.equal(s.format,format);
    assert.equal(s.language,null);
  }
  const app=source('../src/app.js');
  assert.match(app,/state.screen === "language" \? renderLanguage\(\)/);
  assert.match(app,/state.screen === "language-list" \? renderLanguageList\(\)/);
  for(const key of ['language-english','language-other','language-dutch','back-language','back-format']) assert.ok(app.includes(key),key);
  assert.match(app,/state.language = "nl"/);
  assert.match(app,/state.language = "en"/);
  assert.match(source('../assets/style.css'),/\.language-tile\s*\{[^}]*aspect-ratio:\s*1\s*\/\s*1/);
  assert.match(source('../src/session.js'),/message\.state\?\.version === "4\.2"/);
  assert.match(source('../src/app.js'),/hostState\.version !== "4\.2"/);
});

test('Dutch language library translates questions and keeps proper media titles intact',()=>{
  assert.equal(dutch('What is the capital of France?'),'Wat is de hoofdstad van Frankrijk?');
  assert.equal(dutch('Which country has Paris as its capital?'),'Van welk land is Paris de hoofdstad?');
  assert.equal(dutch('Write as many birds as possible.'),'Schrijf zo veel mogelijk vogels op.');
  assert.equal(dutch('Who painted the Mona Lisa?'),'Wie schilderde de Mona Lisa?');
  assert.equal(dutch('Finding Nemo'),'Finding Nemo');
  assert.equal(dutch('Frozen'),'Frozen');
  assert.equal(dutch('Toy Story'),'Toy Story');
  assert.equal(dutch('No'),'Nee');
  assert.equal(dutch('Yes'),'Ja');
  assert.match(dutch('SECRET ACTIONS — FIVE'),/GEHEIME HANDELINGEN/);
  assert.match(dutch('CALLER: READ ONE NUMBER EVERY 10 SECONDS.'),/VOORLEZER: LEES ELKE 10 SECONDEN ÉÉN GETAL VOOR/);
});

test('the text-node translator updates content and respects Dutch puzzle exclusions',()=>{
  const nodes=[
    {nodeValue:'What is the capital of France?',parentElement:{closest:()=>false}},
    {nodeValue:'GEHEIM WOORD: KAT',parentElement:{closest:selector=>selector.includes('[data-no-translate]')}},
    {nodeValue:'Team Battles',parentElement:{closest:()=>false}}
  ];
  let i=0;
  const doc={documentElement:{lang:'en'},body:{},title:'',defaultView:{NodeFilter:{SHOW_TEXT:4}},createTreeWalker(){i=0;return {nextNode:()=>nodes[i++]||null};},querySelectorAll(){return []}};
  translatePage(doc,'nl');
  assert.equal(doc.documentElement.lang,'nl');
  assert.equal(nodes[0].nodeValue,'Wat is de hoofdstad van Frankrijk?');
  assert.equal(nodes[1].nodeValue,'GEHEIM WOORD: KAT');
  assert.equal(nodes[2].nodeValue,'Teamstrijd');
  translatePage(doc,'en');
  assert.equal(doc.documentElement.lang,'en');
});

test('all seven playable Dutch Rebus tiers have fully valid answer letters for all cards',()=>{
  const letters={novice:3,amateur:4,intermediate:4,competent:5,skilled:5,advanced:6,grandmaster:7};
  for(const [level,length] of Object.entries(letters)){
    const prompts=DUTCH_REBUS_PACKS[level].prompts;
    assert.equal(prompts.length,8,level);
    for(const p of prompts){
      assert.equal(p.secretWord.length,length,level);
      assert.equal(p.clues.length,length,level);
      assert.ok(p.text.startsWith('GEHEIM WOORD:'));
      assert.equal(p.clues.map(c=>c.letter).join(''),p.secretWord,level);
      for(const clue of p.clues){
        assert.match(clue.question,/[A-Za-z]/);
        assert.equal(alphabet(clue.answer)[clue.index-1],clue.letter);
        assert.ok(p.answer.includes(clue.answer));
      }
      assert.ok(p.answer.endsWith('GEHEIM WOORD: '+p.secretWord));
    }
  }
});

test('all Dutch Codebreaker cards encode the exact Dutch answers for every level',()=>{
  for(const {id:level} of LEVELS){
    for(const format of ['single','team']){
      const content=contentForRound(findGame('codebreaker'),{difficulty:level,format,mode:format==='single'?'solo':'coop'});
      for(const card of content.prompts){
        const translated=dutchCodebreakerPrompt(card,level);
        const lines=translated.text.split('\n').filter(x=>/^\d+\./.test(x));
        const words=translated.answer.split('\n').map(x=>x.replace(/^\d+\. /,'').trim());
        assert.equal(lines.length,words.length,`${level}/${format}`);
        for(let n=0;n<lines.length;n++){
          const cipher=lines[n].replace(/^\d+\.\s*/, '').split(' (tip:')[0].trim();
          const decoded=['beginner','novice'].includes(level)
            ? cipher.replace(/\((\d+)\)/g,(_,x)=>String.fromCharCode(Number(x)+64)).replace(/\d+/g,x=>String.fromCharCode(Number(x)+64))
            : cipher.split('-').map(x=>String.fromCharCode(Number(x)+64)).join('');
          assert.equal(decoded,words[n],`${level}/${format}, item ${n+1}`);
        }
      }
    }
  }
});

test('all game-specific Dutch win conditions and descriptions are available across 37 games',()=>{
  const all=GAMES;
  assert.equal(all.length,37);
  for(const g of all){
    for(const format of ['team','single']){
      if(format === 'single' && ['sketch-guess','mime-relay','silent-charades','picture-race'].includes(g.id)) continue;
      const level = g.id==='clock-duel'?'amateur':'novice';
      const content=contentForRound(g,{format,difficulty:level,mode:format==='single'?'solo':'battle'});
      const result=dutchGameRules(g,{format,difficulty:level},content);
      assert.ok(result.description?.length>10,g.id+' desc');
      assert.ok(result.win?.length>10,g.id+' win');
      if(!g.id.startsWith('topic-trivia-'))assert.notEqual(result.win,content.win,g.id+' win not localized');
    }
  }
});

test('Dutch is a selectable display option without changing English source packs',()=>{
  const index=source('../index.html');
  assert.match(index,/src="\.\/src\/app\.js"/);
  assert.match(index,/V4\.2/);
  assert.match(source('../src/app.js'),/data-no-translate/);
  assert.match(source('../src/app.js'),/dutchGameRules\(/);
  assert.match(source('../src/app.js'),/DUTCH_REBUS_PACKS/);
  assert.match(source('../src/app.js'),/dutchCodebreakerPrompt/);
  assert.match(source('../src/app.js'),/function askConfirm\(message\)/);
  assert.match(source('../src/app.js'),/living-room-battles-v4-1/);
  assert.match(source('../src/packs/topic-trivia.js'),/TOPIC_TRIVIA_PACKS/);
});

test('all 135 riddles use a separate Dutch question-and-answer pack with unchanged card counts',async()=>{
  const {DUTCH_RIDDLE_PACKS}=await import('../src/i18n/nl-riddles.js');
  const {RIDDLE_POOLS,RIDDLE_REQUIREMENTS}=await import('../src/packs/new-challenges.js');
  let questionTotal=0;
  for(const [level,pack] of Object.entries(DUTCH_RIDDLE_PACKS)){
    const [needed,correct]=RIDDLE_REQUIREMENTS[level];
    assert.equal(pack.count,needed);
    assert.equal(pack.need,correct);
    assert.equal(pack.prompts.length,RIDDLE_POOLS[level].length/needed);
    for(const card of pack.prompts){
      assert.equal(card.text.split('\n').length,needed,level);
      assert.equal(card.answer.split('\n').length,needed,level);
      assert.doesNotMatch(card.text,/\bWhat am I\?|\bWhich month\b|\bWhat has\b/i,level);
      questionTotal+=needed;
    }
  }
  assert.equal(questionTotal,135);
});

test('80 starter questions in the eight new trivia topics have individually reviewed Dutch translations',async()=>{
  const {DUTCH_QUESTION_OVERRIDES}=await import('../src/i18n/nl-questions.js');
  const {TOPIC_TRIVIA_PACKS}=await import('../src/packs/topic-trivia.js');
  assert.equal(Object.keys(DUTCH_QUESTION_OVERRIDES).length,80);
  let checked=0;
  for(const game of GAMES.filter(g=>g.id.startsWith('topic-trivia-'))){
    const cards=TOPIC_TRIVIA_PACKS[game.id].novice.prompts.slice(0,2);
    for(const card of cards){
      for(const line of card.text.split('\n')){
        const q=line.replace(/^\d+\.\s*/, '').split(/\s+A\)\s+/)[0];
        if(!q.endsWith('?'))continue;
        assert.ok(DUTCH_QUESTION_OVERRIDES[q],`${game.id}: ${q}`);
        assert.ok(dutch(q).includes('?'));
        checked++;
      }
    }
  }
  assert.equal(checked,80);
});
