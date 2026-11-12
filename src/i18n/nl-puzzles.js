import { TOPIC_QUESTIONS, TOPIC_LEVELS } from '../packs/topic-trivia.js';
import { dutch } from './nl.js';

// Dutch cryptogram answers must match their letter numbers exactly.
const EXTRA_WORDS={
  CAT:'KAT', DOG:'HOND', SUN:'ZON', HAT:'HOED', APPLE:'APPEL', HOUSE:'HUIS', TIGER:'TIJGER', WATER:'WATER',
  TREE:'BOOM', BOOK:'BOEK', PLANET:'PLANEET', BRIDGE:'BRUG', ROCKET:'RAKET',
  HORIZON:'HORIZON', SATELLITE:'SATELLIET', MOSAIC:'MOZAÏEK', TELESCOPE:'TELESCOOP',
  LABYRINTH:'LABYRINT', MICROSCOPE:'MICROSCOOP', ARCHITECTURE:'ARCHITECTUUR',
  CONSTELLATION:'STERRENBEELD', SYMMETRY:'SYMMETRIE', METAMORPHOSIS:'METAMORFOSE',
  ASTROPHYSICS:'ASTROFYSICA', CARTOGRAPHY:'CARTOGRAFIE', LITHOSPHERE:'LITHOSFEER',
  PHOTOSYNTHESIS:'FOTOSYNTHESE', ELECTROMAGNETISM:'ELEKTROMAGNETISME',
  EPISTEMOLOGY:'EPISTEMOLOGIE', CRYSTALLOGRAPHY:'KRISTALLOGRAFIE',
  THERMODYNAMICS:'THERMODYNAMICA', PHENOMENOLOGY:'FENOMENOLOGIE',
  GEOCHRONOLOGY:'GEOCHRONOLOGIE', ANTHROPOMORPHISM:'ANTROPOMORFISME',
  BIOLUMINESCENCE:'BIOLUMINESCENTIE',
};
function plain(word){return word.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^A-Za-z]/g,'').toUpperCase();}
function wordNL(word){return plain(EXTRA_WORDS[word.toUpperCase()]||dutch(word));}
function asCode(word){return [...word].map(c=>c.charCodeAt(0)-64).join('-');}
function partiallyCoded(word,count){
  const places=count===1?[Math.min(1,word.length-1)]:[1,Math.max(2,word.length-2)];
  return [...word].map((char,index)=>places.includes(index) ? (count===1 ? String(char.charCodeAt(0)-64) : `(${char.charCodeAt(0)-64})`) : char).join('');
}
export function dutchCodebreakerPrompt(prompt, level){
  const oldAnswers=prompt.answer.split('\n').map(x=>x.replace(/^\d+\.\s*/, '').trim());
  const answers=oldAnswers.map(wordNL);
  const isEasy=['beginner','novice'].includes(level);
  const title=level==='beginner'?'VERVANG HET CIJFER DOOR DE JUISTE LETTER':level==='novice'?'VERVANG DE CIJFERS TUSSEN HAAKJES DOOR DE JUISTE LETTERS':'';
  const originalLines=prompt.text.split('\n').filter(x=>/^\d+\.\s*/.test(x));
  const hints=originalLines.map(x=>(x.match(/\(hint: (.+?)\)/i)||[])[1]||'');
  const hintWords = { pet:'huisdier', animal:'dier', clothing:'kleding', fruit:'fruit', drink:'drankje', sky:'hemel', home:'thuis', food:'voedsel', nature:'natuur', object:'voorwerp', color:'kleur', space:'ruimte', building:'gebouw' };
  const rows=answers.map((word,i)=>{
    const code=isEasy?partiallyCoded(word,level==='beginner'?1:2):asCode(word);
    const hint = hintWords[hints[i]?.toLowerCase()] || dutch(hints[i] || '');
    return `${i+1}. ${code}${isEasy&&hints[i]?`  (tip: ${hint})`:''}`;
  });
  return {text:(title?title+'\n':'')+'A=1, B=2, C=3, ..., Z=26\n'+rows.join('\n'),answer:answers.map((word,i)=>`${i+1}. ${word}`).join('\n')};
}

// Rebus must be rebuilt with Dutch clue ANSWERS; translating the English
// secret words alone would invalidate letter positions. All clues still come
// from one proficiency level below the Rebus level.
const SECRET_WORDS={
  novice:['KAT','ZON','BUS','VIS','BAL','KOP','DAG','BED'],
  amateur:['BOOM','MAAN','STER','BOEK','LAMP','HUIS','WIND','ROOS'],
  intermediate:['SPEL','WIND','BEER','BOOT','GEEL','ROOS','FIJN','DANS'],
  competent:['APPEL','TREIN','BROOD','PAARD','WATER','LICHT','GROEN','DROOM'],
  skilled:['TAFEL','STOEL','PAARD','KRAAN','ZWAAN','GROEN','KRANT','DROOM'],
  advanced:['ORANJE','BOSSEN','WINTER','PUZZEL','KASTEN','GROEIT','KLOKJE','DROMEN'],
  grandmaster:['OLIFANT','PINGUIN','TEKENEN','BLOEMEN','KAARTEN','SCHOLEN','KRONKEL','HOEVEEL'],
};
export const DUTCH_REBUS_PACKS={};
for(const [level,words] of Object.entries(SECRET_WORDS)) {
  const sourceLevel=TOPIC_LEVELS[TOPIC_LEVELS.indexOf(level)-1];
  const topics=Object.keys(TOPIC_QUESTIONS);
  const candidates=topics.flatMap(topic=>TOPIC_QUESTIONS[topic][sourceLevel].map(q=>{
    const answer=dutch(q.answer).trim();const normalized=plain(answer);
    return {topic, question:dutch(q.text), answer, normalized};
  }).filter(q=>q.normalized.length>=3&&q.normalized.length<=26));
  const prompts=words.map((secretWord,packIndex)=>{
    const seen=new Set();
    const clues=[...secretWord].map((letter,index)=>{
      const topic=topics[(index*3+packIndex)%topics.length];
      const relevant=candidates.filter(q=>q.topic===topic&&q.normalized.includes(letter)&&!seen.has(q.question));
      const candidatesForLetter=relevant.length?relevant:candidates.filter(q=>q.normalized.includes(letter)&&!seen.has(q.question));
      if(!candidatesForLetter.length)throw new Error(`No Dutch clue for ${level}/${letter}`);
      const q=candidatesForLetter[(index*7+packIndex*13)%candidatesForLetter.length];
      seen.add(q.question);
      return {...q,index:q.normalized.indexOf(letter)+1,letter};
    });
    return {
      text:`GEHEIM WOORD: ${secretWord.length} letters\nBeantwoord elke quizvraag. Neem de aangegeven LETTER uit elk antwoord. Tel alleen letters; negeer spaties en leestekens. Lees de gevonden letters van boven naar beneden.\n\n`+
        clues.map((q,i)=>`${i+1}. ${q.question}\n   → Neem letter ${q.index} van het antwoord.`).join('\n\n'),
      answer:clues.map((q,i)=>`${i+1}. ${q.answer} → ${q.normalized} → letter ${q.index} = ${q.letter}`).join('\n')+`\nGEHEIM WOORD: ${secretWord}`,
      secretWord, clues,
    };
  });
  DUTCH_REBUS_PACKS[level]={prompts};
}
