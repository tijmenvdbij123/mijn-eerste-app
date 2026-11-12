import { TOPIC_QUESTIONS, TOPIC_LEVELS } from '../packs/topic-trivia.js';
import { danish } from './da.js';

// Ciphers use A=1..Z=26. Æ, Ø and Å are transliterated to AE, OE and AA.
const CODE_WORDS={
 CAT:'KAT',DOG:'HUND',SUN:'SOL',HAT:'HAT',BED:'SENG',CUP:'KOP',PEN:'PEN',BUS:'BUS',BAG:'TASKE',EGG:'AEG',FAN:'VIFTE',PIG:'GRIS',MAP:'KORT',KEY:'NOEGLE',BOX:'KASSE',TOY:'LEGETOEJ',
 APPLE:'AEBLE',HOUSE:'HUS',TIGER:'TIGER',WATER:'VAND',BREAD:'BROED',HORSE:'HEST',CHAIR:'STOL',CLOCK:'UR',SHEEP:'FAAR',BEACH:'STRAND',PIZZA:'PIZZA',TRAIN:'TOG',PLANT:'PLANTE',SHOES:'SKO',MOUSE:'MUS',PAPER:'PAPIR',
 TREE:'TRAE',BOOK:'BOG',RAIN:'REGN',MILK:'MAELK',STAR:'STJERNE',BIRD:'FUGL',PARK:'PARK',
 PLANET:'PLANET',BRIDGE:'BRO',ROCKET:'RAKET',POCKET:'LOMME',FEATHER:'FJER',GARDEN:'HAVE',LIBRARY:'BIBLIOTEK',MIRROR:'SPEJL',CASTLE:'SLOT',FOREST:'SKOV',JACKET:'JAKKE',LANTERN:'LYGTE',TUNNEL:'TUNNEL',COMPASS:'KOMPAS',MEADOW:'ENG',
 HORIZON:'HORISONT',SATELLITE:'SATELLIT',MOSAIC:'MOSAIK',TELESCOPE:'TELESKOP',PARCHMENT:'PERGAMENT',BLUEPRINT:'TEGNING',PRISM:'PRISME',ORCHESTRA:'ORKESTER',MARBLE:'MARMOR',GLACIER:'GLETSJER',WATERFALL:'VANDFALD',CATHEDRAL:'KATEDRAL',BATTERY:'BATTERI',TRIANGLE:'TREKANT',CRYSTAL:'KRYSTAL',BALCONY:'BALKON',
 LABYRINTH:'LABYRINT',MICROSCOPE:'MIKROSKOP',ARCHITECTURE:'ARKITEKTUR',CONSTELLATION:'STJERNEBILLEDE',SYMMETRY:'SYMMETRI',EQUILIBRIUM:'LIGEVAEGT',PHILOSOPHY:'FILOSOFI',KALEIDOSCOPE:'KALEJDOSKOP',CHRONOLOGY:'KRONOLOGI',ALGORITHM:'ALGORITME',HEMISPHERE:'HALVKUGLE',ATMOSPHERE:'ATMOSFAERE',VELOCITY:'HASTIGHED',
 METAMORPHOSIS:'METAMORFOSE',ASTROPHYSICS:'ASTROFYSIK',CARTOGRAPHY:'KARTOGRAFI',LITHOSPHERE:'LITOSFAERE',PHOTOSYNTHESIS:'FOTOSYNTESE',ECCENTRICITY:'ECCENTRICITET',AUTOBIOGRAPHY:'SELVBIOGRAFI',SPECTROSCOPY:'SPEKTROSKOPI',MITOCHONDRIA:'MITOKONDRIER',PERPENDICULAR:'VINKELRET',AMPHITHEATER:'AMFITEATER',
 ELECTROMAGNETISM:'ELEKTROMAGNETISME',EPISTEMOLOGY:'ERKENDELSESTEORI',CRYSTALLOGRAPHY:'KRYSTALLOGRAFI',THERMODYNAMICS:'TERMODYNAMIK',PHENOMENOLOGY:'FAENOMENOLOGI',GEOCHRONOLOGY:'GEOKRONOLOGI',ANTHROPOMORPHISM:'ANTROPOMORFISME',BIOLUMINESCENCE:'BIOLUMINESCENS',INTERDISCIPLINARITY:'TVAERFAGLIGHED',PALEOCLIMATOLOGY:'PALAEOKLIMATOLOGI',COUNTERINTUITIVE:'MODINTUITIV'
};
export function plainDanish(str){return String(str).normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Æ/g,'AE').replace(/Ø/g,'OE').replace(/Å/g,'AA').replace(/æ/g,'ae').replace(/ø/g,'oe').replace(/å/g,'aa').replace(/[^A-Za-z]/g,'').toUpperCase();}
function coded(word){return [...word].map(c=>c.charCodeAt(0)-64).join('-');}
function partial(word,n){const places=n===1?[Math.min(1,word.length-1)]:[1,Math.max(2,word.length-2)];return [...word].map((c,i)=>places.includes(i)?(n===1?String(c.charCodeAt(0)-64):`(${c.charCodeAt(0)-64})`):c).join('');}
export function danishCodebreakerPrompt(prompt,level){
 const words=prompt.answer.split('\n').map(x=>x.replace(/^\d+\.\s*/,'').trim()).map(x=>plainDanish(CODE_WORDS[x]||danish(x)));
 const easy=['beginner','novice'].includes(level);
 const text=prompt.text.split('\n').filter(x=>/^\d+\./.test(x));
 const hints=text.map(x=>(x.match(/\(hint: (.+?)\)/i)||[])[1]||'');
 const hintMap={pet:'kæledyr',animal:'dyr',clothing:'tøj',fruit:'frugt',drink:'drik',sky:'himmel',home:'hjem',food:'mad',nature:'natur',object:'genstand',color:'farve',space:'rummet',building:'bygning'};
 const rows=words.map((word,i)=>`${i+1}. ${easy?partial(word,level==='beginner'?1:2):coded(word)}${easy&&hints[i]?`  (tip: ${hintMap[hints[i].toLowerCase()]||danish(hints[i])})`:''}`);
 const heading=level==='beginner'?'ERSTAT TALLET MED DET RIGTIGE BOGSTAV\n':level==='novice'?'ERSTAT TALLENE I PARENTES MED DE RIGTIGE BOGSTAVER\n':'';
 return {text:heading+'A=1, B=2, C=3, ..., Z=26\n'+rows.join('\n'),answer:words.map((s,i)=>`${i+1}. ${s}`).join('\n')};
}
const LENGTHS={novice:3,amateur:4,intermediate:4,competent:5,skilled:5,advanced:6,grandmaster:7};
const WORD_SETS={
 novice:['KAT','SOL','BUS','HUS','MAD','BIL','DAG','TOG'],
 amateur:['BORD','STOL','VAND','BOLD','SKOV','FISK','LYST','REGN'],
 intermediate:['SPIL','FISK','HJEM','FUGL','HAVN','SANG','NORD','VIND'],
 competent:['TIGER','FUGLE','MALER','SKOLE','HJORT','STOLE','KRONE','DRAMA'],
 skilled:['CYKEL','TROLD','HELTE','MUSIK','KAFFE','SKOVE','GRISE','SKOLE'],
 advanced:['VINTER','KULTUR','KOMPAS','SKOLER','SAMMEN','BLOMST','DANSKE','MALERE'],
 grandmaster:['STJERNE','ELEFANT','MUSIKER','SPILLER','DANSERE','DANMARK','KLOKKER','SKRIVER']
};
export const DANISH_REBUS_PACKS={};
const topics=Object.keys(TOPIC_QUESTIONS);
for(const [level,words] of Object.entries(WORD_SETS)){
 const source=TOPIC_LEVELS[TOPIC_LEVELS.indexOf(level)-1];
 const candidates=topics.flatMap(topic=>TOPIC_QUESTIONS[topic][source].map(q=>({topic,question:danish(q.text),answer:danish(q.answer),raw:q.answer,normalized:plainDanish(danish(q.answer))})).filter(q=>q.normalized.length>=3&&q.normalized.length<=26));
 const prompts=words.map((secretWord,pIndex)=>{
  if(secretWord.length!==LENGTHS[level])throw new Error(`Danish rebus word length mismatch: ${level} ${secretWord}`);
  const seen=new Set();const clues=[...secretWord].map((letter,index)=>{
    const topic=topics[(index*3+pIndex)%topics.length];
    const relevant=candidates.filter(c=>c.topic===topic && c.normalized.includes(letter)&&!seen.has(c.raw));
    const list=relevant.length?relevant:candidates.filter(c=>c.normalized.includes(letter)&&!seen.has(c.raw));
    if(!list.length)throw new Error(`No Danish clue for ${level}/${letter}`);
    const chosen=list[(index*7+pIndex*13)%list.length];seen.add(chosen.raw);
    return {...chosen,index:chosen.normalized.indexOf(letter)+1,letter};
  });
  const text=`HEMMELIGT ORD: ${secretWord.length} bogstaver\nBesvar hvert quizspørgsmål. Tag det angivne BOGSTAV fra hvert svar. Tæl kun bogstaver (Æ=AE, Ø=OE og Å=AA); ignorer mellemrum og tegnsætning. Læs bogstaverne oppefra og ned.\n\n`+clues.map((q,i)=>`${i+1}. ${q.question}\n   → Tag bogstav ${q.index} fra svaret.`).join('\n\n');
  const answer=clues.map((q,i)=>`${i+1}. ${q.answer} → ${q.normalized} → bogstav ${q.index} = ${q.letter}`).join('\n')+`\nHEMMELIGT ORD: ${secretWord}`;
  return {text,answer,secretWord,clues};
 });
 DANISH_REBUS_PACKS[level]={prompts};
}
