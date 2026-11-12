/** Danish-language starting words and alliteration examples, so word games remain playable in Danish. */
const RHYMES={
 beginner:['KAT','HAT','SOL','BIL','HUS','IS','BÅD','KO'],
 novice:['KAT','HAT','SOL','BIL','HUS','IS','BÅD','SKO'],
 amateur:['HAT','BÅD','BIL','KAT','BORD','SKO','HUS','LAND'],
 intermediate:['SKOV','BIL','SOL','NAT','SKO','BORD','IS','BÅD'],
 competent:['NAT','BIL','KAT','SKO','SOL','BÅD','LAND','HAT'],
 skilled:['BORD','SKOV','BIL','SOL','HAT','SKO','NAT','LAND'],
 advanced:['LAND','HÅND','MÅL','BÅD','HUS','SKOV','KAT','STOL'],
 grandmaster:['LAND','HÅND','MÅL','BÅD','HUS','SKOV','KAT','STOL']
};
const LAST_WORDS={
 beginner:['KAT','HUND','SOL','BIL','HUS','FISK'],
 novice:['HAVE','BJERG','VAND','TRÆ','STOL','BLOMST'],
 amateur:['CYKEL','SKOV','BILLEDE','KOMPAS','TREKANT','TIGER'],
 intermediate:['EVENTYR','TELESKOP','VULKAN','PAPIR','MUSIK','HORISONT'],
 competent:['KOMPAS','ATMOSFÆRE','KRYSTAL','FILOSOFI','ARKITEKT','GEOGRAFI'],
 skilled:['ASTRONOMI','ARKITEKTUR','SYMMETRI','TELESKOP','KRONOLOGI','FYSIK'],
 advanced:['METAMORFOSE','KRONOLOGI','FOTOSYNTESE','SPEKTROSKOPI','FILOSOFI','ATMOSFÆRE'],
 grandmaster:['ERKENDELSESTEORI','TERMODYNAMIK','GEOKRONOLOGI','KARTOGRAFI','ELEKTROMAGNETISME','FÆNOMENOLOGI']
};
const ALLIT={
 B:['Blå blomster','Blå blomster blomstrer','Blå blomster blomstrer bedst'],
 S:['Små snegle','Små snegle smiler','Små søde snegle smiler'],
 C:['Cool cirkus','Cool cirkusklovne cykler','Cool cirkusklovne cykler cirkler'],
 F:['Flotte frøer','Flotte frøer fniser','Fire flotte frøer fniser'],
 P:['Pæne piger','Pæne piger peger','Pæne piger peger præcist'],
 T:['Tamme tigre','Tamme tigre tripper','Tre tamme tigre tripper'],
 M:['Mange mus','Mange mus mødes','Muntere mange mus mødes'],
 R:['Røde roser','Røde ræve ruller','Rask røde ræve ruller'],
 D:['Dygtige dansere','Dygtige dansere danser','Dygtige danske dansere danser'],
 L:['Lille løve','Lille løve leger','Lille legende løve leger'],
 W:['Weekendens vind','Weekendens vind vinder','Weekendens vilde vind vinder']
};
export function danishWordplayPrompts(game,round,content){
 const {id}=game;
 if(id==='rhyme-rally')return {...content,prompts:content.prompts.map((p,i)=>({...p,text:`Startord til rim: ${RHYMES[round.difficulty]?.[i%8]||'KAT'}`}))};
 if(id==='last-letter-duel')return {...content,prompts:content.prompts.map((p,i)=>({...p,text:`Startord: ${LAST_WORDS[round.difficulty]?.[i%6]||'KAT'}`}))};
 if(id==='alliteration-duel')return {...content,prompts:content.prompts.map(p=>{const match=p.text.match(/YOUR LETTER: ([A-Z])[\s\S]*?Write (\d+)-word/i);if(!match)return p;const letter=match[1],words=Number(match[2]);const example=ALLIT[letter]?.[Math.min(2,Math.max(0,words-2))]||['Små snegle','Små snegle smiler','Små søde snegle smiler'][Math.min(2,Math.max(0,words-2))];return {...p,text:`DIT BOGSTAV: ${letter}\nSkriv udtryk på ${words} ord. Alle ord begynder med ${letter}.\nEKSEMPEL: ${example}.`};})};
 return content;
}
