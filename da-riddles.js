import { RIDDLE_POOLS, RIDDLE_REQUIREMENTS } from '../packs/new-challenges.js';
/** Individually written Danish riddles, in the same order and difficulty as the English master. */
const RIDDLE_DATA=`Jeg siger miav og har knurhår. Hvad er jeg?|En kat
Jeg har fire hjul og kører dig ad vejen. Hvad er jeg?|En bil
Jeg skinner på himlen om dagen og varmer dig. Hvad er jeg?|Solen
Jeg har en snabel og meget store ører. Hvilket dyr er jeg?|En elefant
Du tager mig på hovedet, når solen skinner. Hvad er jeg?|En hat
Jeg har to hjul og pedaler. Hvad er jeg?|En cykel
Jeg gør og logrer med halen. Hvilket dyr er jeg?|En hund
Jeg falder fra skyerne og gør dig våd. Hvad er jeg?|Regn
Jeg er kold, ofte hvid og dannes, når vand fryser. Hvad er jeg?|Is
Jeg har sider, og du læser mine historier. Hvad er jeg?|En bog
Hvad har fire ben, men kan ikke gå?|Et bord
Hvad har visere, men kan ikke klappe?|Et ur
Hvad bliver vådere, mens det tørrer noget andet?|Et håndklæde
Hvad har tænder, men kan ikke bide?|En kam
Hvad har en hals, men intet hoved?|En flaske
Hvad går op, når regnen kommer ned?|En paraply
Hvad har sider, men kan ikke tale?|En bog
Hvad har tangenter, men ingen døre?|Et klaver
Hvad har en skive og to visere, men ingen arme?|Et ur
Hvad har en mund, spiser aldrig og fører vand?|En flod
Jeg flyver i vinden med en snor og uden motor. Hvad er jeg?|En drage
Jeg viser tiden, men har ingen stemme. Hvad er jeg?|Et ur
Jeg er rund, og du sparker til mig i fodbold. Hvad er jeg?|En bold
Man åbner mig, når man går ind i et rum, og lukker mig, når man går ud. Hvad er jeg?|En dør
Jeg har et håndtag og kan fyldes med varm te. Hvad er jeg?|En kop
Hvad kan du få, men ikke kaste væk?|En forkølelse
Hvad bryder du i samme øjeblik, du siger dets navn?|Stilheden
Hvad har en tommelfinger og fire fingre, men lever ikke?|En handske
Hvad har et øje, men kan ikke se, og bruges til at sy?|En nål
Hvad kan fylde et helt rum uden at optage plads?|Lys
Hvad kan rejse hele jorden rundt uden at forlade et hjørne?|Et frimærke
Hvad har mange nåle, men syr aldrig noget?|Et fyrretræ
Hvad er fuldt af huller, men kan stadig holde på vand?|En svamp
Hvad løber gennem byer og marker uden selv at bevæge sig?|En vej
Hvad har en ringetone, men ingen finger, og bliver besvaret af mennesker?|En telefon
Hvad har en seng, men sover aldrig?|En flod
Hvad falder ned under en storm, men går aldrig op igen?|Regn
Hvad kan slås op, har sider, men er ikke en dør?|En bog
Hvad tilhører dig, men bruges oftere af andre?|Dit navn
Hvad bliver kortere, mens det lyser et rum op?|Et stearinlys
Jeg taler uden mund og svarer, når du råber i bjergene. Hvad er jeg?|Et ekko
Jo mere du tager væk fra mig, jo større bliver jeg. Hvad er jeg?|Et hul
Hvad tilhører dig, men bliver oftest sagt af andre?|Dit navn
Hvad har filialer, men ingen blade, og passer på dine penge?|En bank
Hvad kan løbe uden ben og har en bred uden penge?|En flod
Hvad har en hovedende, en fodende og fire ben?|En seng
Hvad ligger altid foran dig, men kan ikke ses?|Fremtiden
Hvilket bogstav forekommer én gang i det engelske ord »minute«, to gange i »moment« og aldrig i »a thousand years«?|Bogstavet M
Hvilket engelsk ord begynder med T, slutter med T og indeholder te?|Teapot (engelsk for tekande)
Hvad kan du holde med din højre hånd, men ikke med din venstre?|Din venstre hånd
Hvad bliver større, jo mere du fjerner fra det?|Et hul
Hvad lever ikke, men kan alligevel »dø«, når batteriet løber tør?|En telefon
Hvad kan man lave, fortælle, forstå eller ikke forstå?|En vittighed
Hvad vokser hvert år, uden at du planter noget, og tæller med til din fødselsdag?|Din alder
Hvad har byer, floder og skove, men ingen bygninger, vand eller træer?|Et kort
En mand går i regn uden hat eller paraply. Ikke et eneste hår bliver vådt. Hvorfor?|Han er skaldet
Jeg lever ikke, men kan vokse. Jeg har brug for luft, og vand slår mig ihjel. Hvad er jeg?|Ild
Hvad har krone og plat, men ingen krop?|En mønt
Den, der fremstiller mig, sælger mig. Den, der køber mig, bruger mig ikke selv. Hvad er jeg?|En kiste
Hvad har fire hjul og fluer, men kan ikke flyve?|En skraldebil med fluer omkring affaldet
Hvad er så skrøbeligt, at det går i stykker, når du nævner det?|Stilheden
Du ser en båd fuld af mennesker, men ikke én eneste ugift person er ombord. Hvorfor?|Alle ombord er gift
Hvilket engelsk ord lyder ens, selvom du fjerner fire af dets fem bogstaver?|Queue (bogstavet Q udtales på samme måde)
Hvilken måned har 28 dage?|Alle måneder
Hvis to er et selskab og tre er en flok, hvad er fire og fem så tilsammen?|Ni
Hvad har sin bund helt oppe foroven?|Dine ben
Jeg bliver taget, før du får mig, og jeg kan vise dit smil på papir. Hvad er jeg?|Et fotografi
Hvad er så let som en fjer, at selv verdens stærkeste menneske ikke kan holde det særlig længe?|Vejret (at holde vejret)
Hvad kan brydes uden at blive rørt?|Et løfte
Hvilket bogstav står sidst i det engelske ord »everything«?|Bogstavet G
To fædre og to sønner spiser tre æbler, ét hver. Hvordan kan det lade sig gøre?|De er en bedstefar, en far og en søn
Du overhaler nummer to i et løb. Hvilken placering har du nu?|Andenpladsen
En bonde har 17 får. Alle undtagen ni løber væk. Hvor mange er tilbage?|Ni
Før Mount Everest blev opmålt, hvilket bjerg var da verdens højeste?|Mount Everest
Hvilket engelsk ord har tre par dobbelte bogstaver lige efter hinanden?|Bookkeeper
Hvad vejer mest: et kilo fjer eller et kilo jern?|De vejer lige meget: et kilo
Jeg kan skrives, siges, afsløres og brydes. Hvad er jeg?|En hemmelighed
Hvilket engelsk ord på fem bogstaver bliver til »shorter«, når du tilføjer to bogstaver?|Short (tilføj ER)
Et elektrisk tog kører mod nord. Hvilken vej blæser røgen?|Der kommer ingen røg fra et elektrisk tog
Hvor mange gange kan du trække ti fra hundrede?|Én gang; derefter trækker du ti fra halvfems
Hvilket engelsk ord begynder og slutter med E og indeholder én »letter« (et brev)?|Envelope (konvolut)
Hvilket bogstav står sidst i det engelske ord »never«, men ikke først?|Bogstavet R
Man kan stemme på mig ved et valg, men jeg er ikke en frugt. Hvad er jeg?|En kandidat
Hvad kan du holde, efter at du har givet det til en anden?|Dit ord
Hvilket tal giver samme resultat, når man lægger det til sig selv, som når man ganger det med sig selv?|To
En hane lægger et æg på toppen af et skråt tag. Til hvilken side ruller ægget?|Ingen: Haner lægger ikke æg
Du overhaler den sidste løber i et løb. Hvilken placering er du på?|Umuligt: Man kan ikke overhale den sidste løber bagfra, mens man selv er med i løbet
Hvor mange fødselsdage har et menneske i sit liv?|Én fødselsdag, der fejres hvert år
Et fly styrter ned præcis på grænsen mellem to lande. Hvor begraver man de overlevende?|Ingen steder: Man begraver ikke overlevende
Hvad vejer mest: et kilo træ eller et kilo vand?|De vejer lige meget: et kilo
Tre personer betaler hver 10 dollar for et værelse. De får 5 dollar tilbage: En ansat beholder 2 og giver hver 1 dollar. Hvad er fejlen i regnestykket om den forsvundne dollar?|Man lægger fejlagtigt de 2 dollar til de 27; de 2 er allerede med i de 27
Et ur slår seks slag på fem sekunder. Hvor længe tager tolv slag med samme tempo?|11 sekunder
Hvilket tal kommer efter 1, 11, 21, 1211, 111221, ...?|312211
Der er tre kontakter uden for et rum og én lampe indenfor. Du må kun gå ind én gang. Hvordan finder du den rigtige kontakt?|Tænd den første og sluk den; tænd den anden. Inde i rummet: Tændt = anden, varm = første, kold = tredje
En familie har to børn. Den ældste er en pige. Hvad er sandsynligheden for, at begge er piger, hvis kønnene er lige sandsynlige?|En halv (1/2)
To reb brænder hver på én time, men ujævnt. Hvordan måler du præcis 45 minutter?|Tænd reb A i begge ender og reb B i den ene. Når A er brændt (30 min.), tændes B i den anden ende; det brænder færdigt efter yderligere 15 min.
Du har en fuld 8-literskande og tomme kander på 5 og 3 liter. Hvordan får du præcis 4 liter?|8→5; 5→3; 3→8; 5→3; 8→5; 5→3 efterlader 4 liter i 5-literskanden (eller lignende)
Hvad er det mindste positive tal, der går op i alle heltal fra 1 til 10?|2520
I rækken 2, 4, 8, 16, 32, hvad er næste tal?|64
En far er fire gange så gammel som sin søn. Om 20 år er han dobbelt så gammel. Hvor gammel er sønnen nu?|10 år
En åkande fordobler sit areal hver dag. Dammen er dækket på dag 30. Hvornår var den halvt dækket?|Dag 29
Hvilket firecifret tal bliver ni gange større, når cifrene vendes om?|1089 (9801 er 9 × 1089)
En terning har maling på alle seks sider og skæres i 27 lige store små terninger. Hvor mange har maling på præcis to sider?|12
Hvor mange mennesker skal der mindst være, for at to med sikkerhed har fødselsdag samme dag, når skudår ignoreres?|366
Et tocifret tal er dobbelt så stort som summen af dets cifre. Giv et eksempel.|18 (1+8=9; 2×9=18)
Hvad er vinklen mellem viserne på et ur kl. 3.30?|75 grader
Fem maskiner laver fem ting på fem minutter. Hvor længe skal 100 maskiner bruge på at lave 100 ting?|5 minutter
Du kaster to retfærdige mønter. Hvad er sandsynligheden for præcis én krone?|En halv (1/2)
En pose har fem røde og fem blå kugler. Hvor mange skal du mindst trække for at være sikker på to i samme farve?|Tre
Hvor mange kvadrater af alle størrelser findes i et 3×3-gitter?|14
Der er 100 skabe, som alle er lukkede. På runde n skifter du tilstanden på hvert n-te skab. Hvor mange står åbne til sidst?|10
Hvad er næste tal i Recamán-følgen 0, 1, 3, 6, 2, 7, 13, 20, ...?|12
Hvor mange håndtryk er der, hvis alle i en gruppe på 12 giver hånd til alle andre én gang?|66
En terning males på alle sider og deles i 64 lige store terninger. Hvor mange har maling på præcis to sider?|24
I det klassiske Monty Hall-problem: Hvad er sandsynligheden for at vinde, hvis man skifter dør?|2/3
På hvor mange forskellige måder kan fem forskellige bøger stilles på en hylde?|120
Hvad er størst: 2^10 eller 10^3?|2^10 (1024)
To almindelige terninger kastes. Hvad er sandsynligheden for, at summen er syv?|1/6
Hvad er det mindste fælles multiplum af 12, 18 og 30?|180
Hvor mange diagonaler har en regulær tikant?|35
Hvilket positivt heltal har en tværsum på ni og er præcis tre gange tværsummen?|27
Kan et skakbræt uden to modsatte hjørner dækkes helt med 31 dominobrikker?|Nej (de fjernede felter har samme farve)
Hvor mange forskellige delmængder har en mængde med seks elementer?|64
Hvilket firecifret tal får cifrene vendt om, når det ganges med ni?|1089 (1089 × 9 = 9801)
Hvor mange primtal er mindre end 20?|8
Hvad er summen af de indre vinkler i en regulær tolvkant?|1800 grader
Hvor mange kvadrater af alle størrelser er der i et 5×5-gitter?|55
Hvad er det 20. tal i rækken 1, 4, 9, 16, 25, ...?|400
Tre kuverter indeholder henholdsvis én, to og tre mønter. Hvis du vælger en tilfældig kuvert, hvor mange mønter forventer du så?|2
Hvad er værdien af 0! (nul fakultet)?|1
Hvordan skrives decimaltallet 42 i totalsystemet?|101010
Hvad er det næste Fibonacci-tal efter 89?|144
Hvis n(n+1)=156 for et positivt heltal n, hvad er n så?|12
Hvad er den mindste primfaktor i 2025?|3
En retvinklet trekant har kateter på 9 og 12. Hvor lang er hypotenusen?|15`;
const translated=RIDDLE_DATA.split('\n').filter(Boolean).map((line,i)=>{const sep=line.indexOf('|');if(sep<0)throw new Error('Missing Danish riddle answer at '+i);return [line.slice(0,sep),line.slice(sep+1)];});
const original=Object.entries(RIDDLE_POOLS).flatMap(([level,a])=>a);
if(translated.length!==original.length)throw new Error(`Danish riddles: expected ${original.length}, got ${translated.length}`);
export const DANISH_RIDDLE_PACKS={};let cursor=0;
for(const [level,pool] of Object.entries(RIDDLE_POOLS)){
 const [count,need]=RIDDLE_REQUIREMENTS[level];const questions=pool.map(()=>translated[cursor++]);
 const prompts=[];for(let i=0;i<questions.length;i+=count){const slice=questions.slice(i,i+count);if(slice.length!==count)throw new Error(`Incomplete Danish riddle card ${level}`);prompts.push({text:slice.map(([q],k)=>`${k+1}. ${q}`).join('\n'),answer:slice.map(([,a],k)=>`${k+1}. ${a}`).join('\n')});}
 DANISH_RIDDLE_PACKS[level]={count,need,prompts};
}
