import { TOPIC_FACTS } from '../packs/topic-trivia.js';
import { history } from './reviewed/history.js';
import { sports } from './reviewed/sports.js';
import { moviesTV } from './reviewed/movies-tv.js';
import { culture } from './reviewed/culture.js';
import { scienceNature } from './reviewed/science-nature.js';
import { artsLiterature } from './reviewed/arts-literature.js';
import { music } from './reviewed/music.js';
import { geographyBeginner, translateCapitalRow } from './reviewed/geography.js';

// Dutch topic quiz texts are reviewed against the original paired seed rows.
// This intentionally avoids machine-like word substitution and preserves the
// exact question meaning, choice letters and card/level ordering.
const EDITED={history,sports,'movies-tv':moviesTV,culture,'science-nature':scienceNature,'arts-literature':artsLiterature,music};
export const REVIEWED_DUTCH_TOPIC_QUESTIONS={};
let total=0;
for(const [topic,levels]of Object.entries(TOPIC_FACTS)){
 const reviewed=EDITED[topic] || {};
 for(const [level,rows]of Object.entries(levels)){
   let lines;
   if(topic==='geography'){
     const intro=geographyBeginner.trim().split('\n').map(x=>x.split('|'));
     lines= level==='beginner'?intro:rows.map(translateCapitalRow);
   }else lines=reviewed[level]?.trim().split('\n').map(x=>x.split('|'));
   if(!lines || lines.length !== rows.length) throw Error(`V4.7: missing Dutch review for ${topic}/${level}; expected ${rows.length}, got ${lines?.length}`);
   for(let i=0;i<rows.length;i++){
      const pair=lines[i];
      if(!pair || pair.length!==2 || pair.some(s=>!s.trim()))
        throw Error(`V4.7: invalid Dutch review for ${topic}/${level}/${i}: ${pair}`);
      REVIEWED_DUTCH_TOPIC_QUESTIONS[rows[i][0]]=pair[0].trim();
      REVIEWED_DUTCH_TOPIC_QUESTIONS[rows[i][2]]=pair[1].trim();
      total+=2;
   }
 }
}
if(total!==1440) throw Error(`V4.7 expected 1440 independently reviewed topic prompts, got ${total}`);
export const REVIEWED_DUTCH_TOPIC_COUNT=total;
