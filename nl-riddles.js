import { RIDDLE_POOLS, RIDDLE_REQUIREMENTS } from '../packs/new-challenges.js';

/** Manually translated riddles and answers, preserving the original order,
 * stage sizes, difficulty levels and winning targets. Wordplay that depends on
 * English explicitly says so rather than silently becoming an invalid riddle. */
const RIDDLE_TRANSLATIONS = [
  [
    "Ik zeg 'miauw' en heb snorharen. Wat ben ik?",
    "Een kat"
  ],
  [
    "Ik heb vier wielen en breng je over de weg. Wat ben ik?",
    "Een auto"
  ],
  [
    "Ik schijn overdag aan de hemel en houd je warm. Wat ben ik?",
    "De zon"
  ],
  [
    "Ik heb een slurf en heel grote oren. Welk dier ben ik?",
    "Een olifant"
  ],
  [
    "Je draagt me op je hoofd als de zon schijnt. Wat ben ik?",
    "Een hoed"
  ],
  [
    "Ik heb twee wielen en trappers. Wat ben ik?",
    "Een fiets"
  ],
  [
    "Ik blaf en kwispel met mijn staart. Welk dier ben ik?",
    "Een hond"
  ],
  [
    "Ik val uit de wolken en maak je nat. Wat ben ik?",
    "Regen"
  ],
  [
    "Ik ben koud, vaak wit, en ik ontsta wanneer water bevriest. Wat ben ik?",
    "IJs"
  ],
  [
    "Ik heb bladzijden en je leest mijn verhalen. Wat ben ik?",
    "Een boek"
  ],
  [
    "Wat heeft vier poten, maar kan niet lopen?",
    "Een tafel"
  ],
  [
    "Wat heeft wijzers, maar kan niet klappen?",
    "Een klok"
  ],
  [
    "Wat wordt steeds natter terwijl het iets anders droogmaakt?",
    "Een handdoek"
  ],
  [
    "Wat heeft tanden, maar kan niet bijten?",
    "Een kam"
  ],
  [
    "Wat heeft een hals, maar geen hoofd?",
    "Een fles"
  ],
  [
    "Wat gaat omhoog wanneer de regen naar beneden komt?",
    "Een paraplu"
  ],
  [
    "Wat heeft bladzijden, maar kan niet praten?",
    "Een boek"
  ],
  [
    "Wat heeft toetsen, maar geen deuren?",
    "Een piano"
  ],
  [
    "Wat heeft een gezicht en twee wijzers, maar geen armen?",
    "Een klok"
  ],
  [
    "Wat heeft een mond, eet nooit en vervoert water?",
    "Een rivier"
  ],
  [
    "Ik vlieg aan een touwtje in de wind en heb geen motor. Wat ben ik?",
    "Een vlieger"
  ],
  [
    "Ik laat de tijd zien, maar heb geen stem. Wat ben ik?",
    "Een klok"
  ],
  [
    "Ik ben rond en je schopt tegen me om te voetballen. Wat ben ik?",
    "Een bal"
  ],
  [
    "Je doet me open wanneer je een kamer binnenkomt en dicht als je vertrekt. Wat ben ik?",
    "Een deur"
  ],
  [
    "Ik heb een oor en je kunt er hete thee in schenken. Wat ben ik?",
    "Een kopje"
  ],
  [
    "Wat kun je oplopen, maar niet weggooien?",
    "Een verkoudheid"
  ],
  [
    "Wat verbreek je zodra je de naam ervan uitspreekt?",
    "De stilte"
  ],
  [
    "Wat heeft een duim en vier vingers, maar leeft niet?",
    "Een handschoen"
  ],
  [
    "Wat heeft een oog, kan niet zien en wordt gebruikt bij het naaien?",
    "Een naald"
  ],
  [
    "Wat kan een hele kamer vullen zonder zelf ruimte in te nemen?",
    "Licht"
  ],
  [
    "Wat kan de hele wereld rondreizen terwijl het in een hoek blijft zitten?",
    "Een postzegel"
  ],
  [
    "Wat heeft heel veel naalden, maar naait nooit iets?",
    "Een dennenboom"
  ],
  [
    "Wat zit vol gaten en houdt toch water vast?",
    "Een spons"
  ],
  [
    "Wat loopt door steden en velden, maar beweegt zelf nooit?",
    "Een weg"
  ],
  [
    "Wat heeft een beltoon maar geen vinger, en wordt door mensen opgenomen?",
    "Een telefoon"
  ],
  [
    "Wat heeft een bedding, maar slaapt nooit?",
    "Een rivier"
  ],
  [
    "Wat valt tijdens een storm naar beneden en gaat nooit terug omhoog?",
    "Regen"
  ],
  [
    "Wat kun je openslaan, heeft bladzijden, maar is geen deur?",
    "Een boek"
  ],
  [
    "Wat is van jou, maar wordt vaker door anderen gebruikt?",
    "Je naam"
  ],
  [
    "Wat wordt steeds korter terwijl het een kamer verlicht?",
    "Een kaars"
  ],
  [
    "Ik spreek zonder mond en antwoord als je roept in de bergen. Wat ben ik?",
    "Een echo"
  ],
  [
    "Hoe meer je uit mij weghaalt, hoe groter ik word. Wat ben ik?",
    "Een gat"
  ],
  [
    "Wat is van jou, maar wordt meestal door andere mensen uitgesproken?",
    "Je naam"
  ],
  [
    "Wat heeft filialen, maar geen bladeren, en bewaart je geld?",
    "Een bank"
  ],
  [
    "Wat kan stromen zonder benen, en heeft een oever maar geen geld?",
    "Een rivier"
  ],
  [
    "Wat heeft één hoofd, één voeteneinde en vier poten?",
    "Een bed"
  ],
  [
    "Wat ligt altijd vóór je, maar kun je niet zien?",
    "De toekomst"
  ],
  [
    "Welke letter staat één keer in het Engelse woord 'minute', twee keer in 'moment' en niet in 'a thousand years'?",
    "De letter M"
  ],
  [
    "Welk Engels woord begint met een T, eindigt op een T en bevat thee?",
    "Een teapot (theepot)"
  ],
  [
    "Wat kun je met je rechterhand vasthouden, maar niet met je linkerhand?",
    "Je linkerhand"
  ],
  [
    "Wat wordt groter naarmate je er meer uit haalt?",
    "Een gat"
  ],
  [
    "Wat leeft niet, maar kan toch 'doodgaan' als de batterij leeg is?",
    "Een telefoon"
  ],
  [
    "Wat kun je maken, vertellen, uithalen en soms niet begrijpen?",
    "Een grap"
  ],
  [
    "Wat wordt elk jaar groter zonder dat je iets plant, en telt mee op je verjaardag?",
    "Je leeftijd"
  ],
  [
    "Wat heeft steden, rivieren en bossen, maar geen gebouwen, water of bomen?",
    "Een kaart"
  ],
  [
    "Een man loopt in de regen zonder hoed of paraplu. Toch wordt geen enkel haar nat. Hoe kan dat?",
    "Hij is kaal"
  ],
  [
    "Ik leef niet, maar kan groeien; ik heb lucht nodig en water doodt me. Wat ben ik?",
    "Vuur"
  ],
  [
    "Wat heeft een kop en een munt, maar geen lichaam?",
    "Een munt"
  ],
  [
    "De maker verkoopt me en de koper gebruikt me niet zelf. Wat ben ik?",
    "Een doodskist"
  ],
  [
    "Wat heeft vier wielen en vliegen, maar kan zelf niet vliegen?",
    "Een vuilniswagen (met vliegen rond het afval)"
  ],
  [
    "Wat is zó kwetsbaar dat je het verbreekt zodra je het benoemt?",
    "De stilte"
  ],
  [
    "Je ziet een boot vol mensen, maar er is geen enkele vrijgezel aan boord. Hoe kan dat?",
    "Iedereen aan boord is getrouwd"
  ],
  [
    "Welk Engels woord klinkt hetzelfde als je vier van zijn vijf letters weghaalt?",
    "Queue (de letter Q klinkt hetzelfde)"
  ],
  [
    "Welke maand heeft 28 dagen?",
    "Alle maanden"
  ],
  [
    "Als twee gezelschap is en drie een menigte, wat zijn vier en vijf samen?",
    "Negen"
  ],
  [
    "Wat heeft zijn onderkant helemaal bovenaan?",
    "Je benen"
  ],
  [
    "Ik word genomen voordat je me krijgt, en op papier kan ik je glimlach laten zien. Wat ben ik?",
    "Een foto"
  ],
  [
    "Wat is zo licht als een veertje, maar kan zelfs de sterkste persoon niet lang vasthouden?",
    "Je adem"
  ],
  [
    "Wat kun je verbreken zonder het aan te raken?",
    "Een belofte"
  ],
  [
    "Wat staat helemaal aan het einde van het Engelse woord 'everything'?",
    "De letter G"
  ],
  [
    "Twee vaders en twee zonen eten samen drie appels, ieder één. Hoe kan dat?",
    "Het zijn een grootvader, een vader en een zoon"
  ],
  [
    "Je haalt tijdens een hardloopwedstrijd de nummer twee in. Op welke plaats loop je nu?",
    "Op de tweede plaats"
  ],
  [
    "Een boer heeft 17 schapen. Op negen na lopen ze allemaal weg. Hoeveel blijven er over?",
    "Negen"
  ],
  [
    "Voordat de Mount Everest voor het eerst werd opgemeten, wat was toen de hoogste berg ter wereld?",
    "De Mount Everest"
  ],
  [
    "Welk Engels woord heeft drie opeenvolgende dubbele letters?",
    "Bookkeeper"
  ],
  [
    "Wat weegt meer: één kilogram veren of één kilogram ijzer?",
    "Evenveel: allebei één kilogram"
  ],
  [
    "Je kunt me opschrijven, uitspreken, onthullen en verbreken. Wat ben ik?",
    "Een geheim"
  ],
  [
    "Welk Engels woord van vijf letters wordt 'shorter' als je twee letters toevoegt?",
    "Short (met 'er' erbij wordt het 'shorter')"
  ],
  [
    "Een elektrische trein rijdt naar het noorden. Welke kant waait de rook op?",
    "Er is geen rook: de trein is elektrisch"
  ],
  [
    "Hoe vaak kun je tien van honderd aftrekken?",
    "Eén keer; daarna trek je tien van negentig af"
  ],
  [
    "Welk Engels woord begint en eindigt met een E en bevat één 'letter' (brief)?",
    "Envelope (envelop)"
  ],
  [
    "Welke letter staat achteraan in het Engelse woord 'never', maar niet vooraan?",
    "De letter R"
  ],
  [
    "Je kunt op mij stemmen zonder dat ik fruit ben. Wat ben ik?",
    "Een kandidaat"
  ],
  [
    "Wat kun je houden nadat je het aan iemand hebt gegeven?",
    "Je woord"
  ],
  [
    "Bij welk getal levert verdubbelen hetzelfde op als het getal met zichzelf vermenigvuldigen?",
    "Twee"
  ],
  [
    "Een haan legt een ei op de nok van een schuin dak. Aan welke kant valt het ei?",
    "Geen van beide: hanen leggen geen eieren"
  ],
  [
    "Je haalt de laatste loper in een race in. Op welke plaats loop je nu?",
    "Dat kan niet; je kunt iemand die laatste ligt niet van achteren inhalen als je zelf nog in de race zit"
  ],
  [
    "Hoeveel geboortedagen heeft iemand in zijn hele leven?",
    "Eén geboortedag, die ieder jaar wordt gevierd"
  ],
  [
    "Een vliegtuig stort precies op een landsgrens neer. Waar begraaf je de overlevenden?",
    "Nergens: je begraaft geen overlevenden"
  ],
  [
    "Wat is zwaarder: een kilogram hout of een kilogram water?",
    "Even zwaar: allebei één kilogram"
  ],
  [
    "Drie mensen betalen ieder 10 dollar voor een kamer. Ze krijgen 5 dollar terug: een medewerker houdt 2 dollar en geeft ieder 1 dollar. Waar zit de denkfout in het raadsel van de 'verdwenen dollar'?",
    "Je telt de 2 dollar onterecht bij de 27 dollar op; die 2 dollar zit daar al in"
  ],
  [
    "Een klok slaat zes keer in vijf seconden. Hoeveel seconden duurt het om met hetzelfde tempo twaalf keer te slaan?",
    "11 seconden"
  ],
  [
    "Welk getal volgt op 1, 11, 21, 1211, 111221, ...?",
    "312211"
  ],
  [
    "Er zijn drie schakelaars buiten een kamer en één lamp binnen. Je mag maar één keer naar binnen. Hoe ontdek je welke schakelaar bij de lamp hoort?",
    "Zet schakelaar 1 even aan en weer uit; zet 2 aan. Ga binnen: lamp aan = 2; uit maar warm = 1; uit en koud = 3"
  ],
  [
    "Een gezin heeft twee kinderen. De oudste is een meisje. Als jongens en meisjes even waarschijnlijk zijn, hoe groot is de kans dat beide kinderen meisjes zijn?",
    "Een half (1/2)"
  ],
  [
    "Je hebt twee touwen die elk in één uur ongelijkmatig opbranden. Hoe meet je precies 45 minuten?",
    "Steek touw A aan beide kanten aan en touw B aan één kant. Als A na 30 minuten op is, steek je de andere kant van B aan. B brandt dan nog 15 minuten"
  ],
  [
    "Je hebt een volle kan van 8 liter en lege kannen van 5 en 3 liter. Hoe kun je precies 4 liter afmeten?",
    "Giet 8→5; 5→3; 3→8; 5→3; 8→5; 5→3. Er blijft 4 liter in de kan van 5 liter over"
  ],
  [
    "Wat is het kleinste positieve getal dat deelbaar is door alle gehele getallen van 1 tot en met 10?",
    "2520"
  ],
  [
    "De reeks 2, 4, 8, 16, 32 bestaat uit machten van twee. Wat is het volgende getal?",
    "64"
  ],
  [
    "Een vader is vier keer zo oud als zijn zoon. Over 20 jaar is hij twee keer zo oud. Hoe oud is de zoon nu?",
    "10 jaar"
  ],
  [
    "Een waterlelie verdubbelt elke dag zijn oppervlakte. Op dag 30 is de vijver vol. Op welke dag was de vijver halfvol?",
    "Dag 29"
  ],
  [
    "Welk viercijferig getal wordt negen keer zo groot als je de cijfers omdraait?",
    "1089 (9801 = 9 × 1089)"
  ],
  [
    "Alle zes zijden van een kubus worden geverfd. De kubus wordt in 27 gelijke kleine kubussen gesneden. Hoeveel kleine kubussen hebben op precies twee zijden verf?",
    "12"
  ],
  [
    "Hoeveel mensen heb je minimaal nodig om zeker te weten dat twee dezelfde verjaardag hebben, zonder rekening te houden met schrikkeldagen?",
    "366"
  ],
  [
    "Een getal met twee cijfers is twee keer de som van zijn cijfers. Geef een voorbeeld.",
    "18 (1 + 8 = 9; 2 × 9 = 18)"
  ],
  [
    "Hoe groot is de hoek tussen de wijzers van een klok om 3.30 uur?",
    "75 graden"
  ],
  [
    "Vijf machines maken in vijf minuten vijf voorwerpen. Hoe lang doen honderd machines over honderd voorwerpen?",
    "5 minuten"
  ],
  [
    "Je gooit twee eerlijke munten op. Hoe groot is de kans op precies één keer kop?",
    "Een half (1/2)"
  ],
  [
    "Een zak bevat vijf rode en vijf blauwe ballen. Hoeveel ballen moet je minimaal pakken om zeker twee dezelfde kleur te hebben?",
    "Drie"
  ],
  [
    "Hoeveel vierkanten van alle afmetingen zitten in een raster van 3 × 3 vierkantjes?",
    "14"
  ],
  [
    "Er zijn honderd gesloten kluisjes. In ronde n verander je de stand van elk n-de kluisje. Hoeveel kluisjes staan aan het einde open?",
    "10"
  ],
  [
    "Wat is het volgende getal in de Recamán-reeks 0, 1, 3, 6, 2, 7, 13, 20, ...?",
    "12"
  ],
  [
    "Hoeveel handdrukken worden er gegeven als twaalf mensen elkaar allemaal precies één keer de hand schudden?",
    "66"
  ],
  [
    "Een kubus wordt aan alle kanten geverfd en in 64 even grote kubusjes verdeeld. Hoeveel kubusjes hebben precies twee geverfde vlakken?",
    "24"
  ],
  [
    "Hoe groot is in het klassieke Monty Hall-probleem de winstkans wanneer je na het openen van een deur van keuze wisselt?",
    "2/3"
  ],
  [
    "Op hoeveel verschillende manieren kun je vijf verschillende boeken op een plank zetten?",
    "120"
  ],
  [
    "Wat is groter: 2^10 of 10^3?",
    "2^10 (1024)"
  ],
  [
    "Je gooit twee eerlijke dobbelstenen. Hoe groot is de kans dat de som 7 is?",
    "1/6"
  ],
  [
    "Wat is het kleinste gemene veelvoud van 12, 18 en 30?",
    "180"
  ],
  [
    "Hoeveel diagonalen heeft een regelmatige tienhoek?",
    "35"
  ],
  [
    "Welk positief geheel getal heeft een cijfersom van 9 en is precies drie keer zo groot als zijn cijfersom?",
    "27"
  ],
  [
    "Kun je een schaakbord waarvan twee tegenoverliggende hoeken ontbreken helemaal bedekken met 31 dominostenen?",
    "Nee (beide verwijderde velden hebben dezelfde kleur)"
  ],
  [
    "Hoeveel verschillende deelverzamelingen heeft een verzameling van zes elementen?",
    "64"
  ],
  [
    "Welk getal van vier cijfers heeft zijn cijfers in omgekeerde volgorde als je het met 9 vermenigvuldigt?",
    "1089 (1089 × 9 = 9801)"
  ],
  [
    "Hoeveel priemgetallen zijn kleiner dan 20?",
    "8"
  ],
  [
    "Wat is de som van de binnenhoeken van een regelmatige twaalfhoek?",
    "1800 graden"
  ],
  [
    "Hoeveel vierkanten van alle afmetingen zitten er in een raster van 5 × 5 eenheidsvierkantjes?",
    "55"
  ],
  [
    "Wat is de twintigste term van de reeks 1, 4, 9, 16, 25, ...?",
    "400"
  ],
  [
    "Je kiest blind één van drie enveloppen met respectievelijk 1, 2 en 3 munten. Wat is het verwachte aantal munten?",
    "2"
  ],
  [
    "Hoeveel is 0! (nul faculteit)?",
    "1"
  ],
  [
    "Hoe schrijf je het decimale getal 42 in het binaire stelsel (grondtal 2)?",
    "101010"
  ],
  [
    "Wat is het volgende getal van Fibonacci na 89?",
    "144"
  ],
  [
    "Als n(n+1)=156 en n een positief geheel getal is, wat is dan n?",
    "12"
  ],
  [
    "Wat is de kleinste priemfactor van 2025?",
    "3"
  ],
  [
    "Een rechthoekige driehoek heeft rechthoekszijden van 9 en 12. Hoe lang is de schuine zijde?",
    "15"
  ]
];

const original = Object.entries(RIDDLE_POOLS).flatMap(([level,arr])=>arr.map(([question,answer])=>({level,question,answer})));
if(original.length!==RIDDLE_TRANSLATIONS.length)throw new Error('Dutch riddle pack count does not match the English master');

export const DUTCH_RIDDLE_PACKS={};
let cursor=0;
for(const [level,questions] of Object.entries(RIDDLE_POOLS)){
  const [count,need] = RIDDLE_REQUIREMENTS[level];
  const translated = questions.map((entry)=>{
    const [text, answer]=RIDDLE_TRANSLATIONS[cursor++];
    return {text,answer};
  });
  DUTCH_RIDDLE_PACKS[level]={
    prompts: Array.from({length:translated.length/count},(_,i)=>{
      const slice=translated.slice(i*count,(i+1)*count);
      return {
        text:slice.map((q,j)=>`${j+1}. ${q.text}`).join('\n'),
        answer:slice.map((q,j)=>`${j+1}. ${q.answer}`).join('\n'),
      };
    }),
    count,need,
  };
}
