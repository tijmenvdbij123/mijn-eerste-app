/** Hand-edited Danish wording for short dynamic cards. No English-word substitution. */
import { REVIEWED_DANISH_CARD_WORDS as WORDS, REVIEWED_DANISH_CATEGORIES as CATEGORIES } from './da-reviewed-wordcards.js';

const word = (s) => WORDS[s.trim()] ?? WORDS[s.trim().toUpperCase()] ?? s.trim();
const wordlist = (s) => s.split(' • ').map(word).join(' • ');
const CATEGORY_TERM = (s) => CATEGORIES[s.toLowerCase()] ?? null;
const REACTION_LINES = new Map([
 ['Numbers HIGHER THAN 5: JUMP. Numbers 1–5: TOUCH THE GROUND.', 'Er tallet større end 5, skal du hoppe. Ved tallene 1 til 5 skal du røre jorden.'],
 ['ODD: CLAP. EVEN: TOUCH YOUR SHOULDER.', 'Ved ulige tal skal du klappe. Ved lige tal skal du røre din skulder.'],
 ['FIRST 3 NUMBERS: ODD = CLAP, EVEN = TOUCH SHOULDER. AFTER THE THIRD: REVERSE (ODD = TOUCH SHOULDER, EVEN = CLAP).', 'Ved de første tre tal skal du klappe ved ulige tal og røre skulderen ved lige tal. Fra det fjerde tal byttes reglerne om.'],
 ['FIRST 5: ODD = CLAP, EVEN = TOUCH SHOULDER. AFTER FIFTH: REVERSE THE RULES.', 'Ved de første fem tal skal du klappe ved ulige tal og røre skulderen ved lige tal. Fra det sjette tal byttes reglerne om.'],
 ['FIRST 5: ODD = CLAP, EVEN = TOUCH SHOULDER. AFTER FIFTH: REVERSE THE RULES. REACT WITHIN THREE SECONDS.', 'Ved de første fem tal skal du klappe ved ulige tal og røre skulderen ved lige tal. Fra det sjette tal byttes reglerne om. Du har tre sekunder til at reagere.'],
 ['ALL NUMBERS ARE MULTIPLES OF TEN. For the first 5 numbers, JUMP; after the fifth number, TOUCH THE GROUND.', 'Alle tal er delelige med ti. Hop ved de første fem tal. Fra det sjette tal skal du røre jorden.'],
 ['ALL NUMBERS ARE MULTIPLES OF TEN. First 10: JUMP for each number. AFTER the tenth: TOUCH THE GROUND for each number.', 'Alle tal er delelige med ti. Hop ved de første ti tal. Fra det ellevte tal skal du røre jorden.'],
]);
const CORE_CARDS = new Map([
 ['BEST OF FIVE DECISIVE ROUNDS\nFIRST TO 3 WINS. TIES DO NOT COUNT AS A ROUND — REPLAY THEM.\nRock beats scissors. Scissors beats paper. Paper beats rock.', 'FØRST TIL TRE VUNDNE RUNDER\nDen, der først vinder tre runder, vinder duellen. Uafgjorte runder tæller ikke med – spil igen.\nSten slår saks, saks slår papir, og papir slår sten.'],
 ['STARE WITHOUT BLINKING\nLook at each other; first to blink loses.\nNeutral team judges if available; otherwise decide fairly together.', 'STIRREKONKURRENCE UDEN AT BLINKE\nSe hinanden i øjnene. Den, der blinker først, taber.\nEt neutralt hold dømmer, hvis der er et; ellers beslutter I sammen på en fair måde.'],
 ['MAKE YOUR OPPONENT LAUGH!\nYou have 60 seconds. Faces, funny voices, jokes and acting count.\nNo touching or unsafe stunts.', 'FÅ DIN MODSTANDER TIL AT GRINE!\nDu har 60 sekunder. Sjove ansigtsudtryk, stemmer, vittigheder og skuespil er tilladt.\nIngen berøring eller farlige påfund.'],
 ['ARM WRESTLING · 1v1\nElbows supported; stable table; start together.\nStop if either player wants to stop or feels pain.', 'ARMLÆGNING · 1 MOD 1\nSid ved et stabilt bord med begge albuer støttet. Start samtidig.\nStop straks, hvis nogen får ondt eller vil stoppe.'],
 ['START: 1\nSay 1-3 numbers on each turn. Whoever says 30 loses.', 'START VED 1\nSig på skift et, to eller tre tal i rækkefølge. Den, der siger 30, taber.'],
 ['START: 1\nSay 1-3 numbers on each turn. Whoever says 20 loses.', 'START VED 1\nSig på skift et, to eller tre tal i rækkefølge. Den, der siger 20, taber.'],
]);

export function reviewedDanishCard(raw){
 if(CORE_CARDS.has(raw))return CORE_CARDS.get(raw);
 if(/^SECRET DRAWING LIST — SIX\n/.test(raw))return 'HEMMELIG TEGNELISTE — SEKS TING\n'+wordlist(raw.split('\n')[1]);
 if(/^SECRET WORDS — STUDY FOR 25 SECONDS\n/.test(raw))return 'HEMMELIGE ORD — HUSK DEM I 25 SEKUNDER\n'+wordlist(raw.split('\n')[1]);
 if(raw.includes(' • ')){
  const terms=raw.split(' • ');
  if(terms.length>=5&&terms.every(s=>Object.hasOwn(WORDS,s.trim())))return wordlist(raw);
 }
 if(/^SECRET DIGITS — STUDY FOR 20 SECONDS\n/.test(raw))return raw.replace('SECRET DIGITS — STUDY FOR 20 SECONDS','HEMMELIGE CIFRE — HUSK DEM I 20 SEKUNDER');
 if(raw.startsWith('USE 24-HOUR TIME\n'))return raw.replace('USE 24-HOUR TIME','BRUG 24-TIMERSFORMATET')
   .replace(/What time is (\d+) minutes? (AFTER|BEFORE) (\d{2}:\d{2})\?/g,(_,count,which,time)=>`Hvad er klokken ${count} minutter ${which==='AFTER'?'efter':'før'} ${time}?`)
   .replace(/A flight leaves at (\d{2}:\d{2}), flies for (\d+) minutes, and lands\. What is the landing time\?/g,(_,time,minutes)=>`Et fly letter kl. ${time} og flyver i ${minutes} minutter. Hvad er klokken ved landing?`)
   .replace(/A flight leaves at (\d{2}:\d{2}) and lasts (\d+) minutes\. When does it land\?/g,(_,time,minutes)=>`Et fly letter kl. ${time} og flyver i ${minutes} minutter. Hvornår lander det?`)
   .replace(/A flight leaves at (\d{2}:\d{2}), flies (\d+)h (\d+)m, and its destination is (\d+) hours ahead\. What is the local arrival time\?/g,(_,time,h,m,ahead)=>`Et fly afgår kl. ${time} og flyver i ${h} timer og ${m} minutter. Destinationens tidszone er ${ahead} timer foran. Hvad er den lokale ankomsttid?`);

 if(/^TARGET: \d+\n/.test(raw))return raw.replace(/^TARGET:/,'MÅLTAL:').replace('USE ALL FOUR NUMBERS EXACTLY ONCE:','BRUG ALLE FIRE TAL PRÆCIS ÉN GANG:').replace('Allowed: + and − ONLY (no multiplication or division).','Kun addition (+) og subtraktion (−) er tilladt. Ingen multiplikation eller division.').replace('Allowed: +, −, ×, ÷, and parentheses.','Tilladt: +, −, ×, ÷ og parenteser.');
 if(raw.startsWith('CALLER: READ ONE NUMBER EVERY '))return raw.split('\n').map(line=>{
  const call=line.match(/^CALLER: READ ONE NUMBER EVERY (\d+) SECONDS\.$/);
  if(call)return `OPLÆSER: LÆS ÉT TAL OP HVERT ${call[1]}. SEKUND.`;
  if(REACTION_LINES.has(line))return REACTION_LINES.get(line);
  return line.replace('  ← SWITCH NOW','  ← SKIFT REGLER NU');
 }).join('\n');
 if(/^NAME \d+ /.test(raw)){
  const [header,...rest]=raw.split('\n');const m=header.match(/^NAME (\d+) (.+)\.$/);
  if(m && CATEGORY_TERM(m[2])){
   const translated=`NÆVN ${m[1]} ${CATEGORY_TERM(m[2])}.`;
   const restDa=rest.map(line=>line.replace(/^EXAMPLE \(COUNTS AS ONE\): (.+?)\. NAME (\d+) MORE\.$/,(_,w,n)=>`EKSEMPEL (TÆLLER MED): ${word(w.charAt(0)+w.slice(1).toLowerCase()).toUpperCase()}. NÆVN ${n} MERE.`));
   return [translated,...restDa].join('\n');
  }
 }
 const flood=raw.match(/^Write as many (.+?) as possible\.$/i);
 if(flood && CATEGORY_TERM(flood[1]))return `Skriv så mange ${CATEGORY_TERM(flood[1])} som muligt.`;
 const shopping=raw.match(/^Start with: (.+?)\. Add one new item every turn\.$/);
 if(shopping)return `Begynd med: ${word(shopping[1])}. Tilføj én ny ting for hver tur.`;
 return null;
}
