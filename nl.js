import { DUTCH_QUESTION_OVERRIDES } from "./nl-questions.js";
/**
 * Offline English → Dutch localization for V4.2. No internet connection,
 * cookies, machine translation API or browser translation extension needed.
 * The English master content remains intact; these tables give it a Dutch copy
 * at display time so all game mechanics and device synchronization agree.
 */
const UI = {
  'Game on': 'Het spel begint', 'Game on.':'Het spel begint.',
  'Choose your': 'Kies jouw', 'game night.': 'spelavond.', 'Choose your language.':'Kies je taal.',
  'Team Battles':'Teamstrijd','Solo Showdown':'Solo-uitdaging',
  'Play Team Battles ↗':'Speel Teamstrijd ↗','Play Solo Showdown ↗':'Speel Solo-uitdaging ↗',
  'ORIGINAL FORMAT':'ORIGINELE SPELVORM', 'ONE-PLAYER FORMAT':'SPELVORM VOOR ÉÉN SPELER PER TEAM',
  'Two formats. The same one-point-per-turn challenge. Pick how many people play on each side.':'Twee spelvormen. Per beurt kun je één punt verdienen. Kies met hoeveel spelers je speelt.',
  '2–6 teams, each with 2 or 3 players. Work together or face another team in 37 living-room minigames.':'2–6 teams met elk 2 of 3 spelers. Werk samen of neem het tegen een ander team op in 37 huiskamerspelletjes.',
  '2 or 3 players total. Every person is their own team. Play alone for a point or challenge one opponent.':'In totaal 2 of 3 spelers. Iedereen vormt zijn eigen team. Verdien alleen een punt of daag één tegenstander uit.',
  '2–3 players per team':'2–3 spelers per team','1 player per team':'1 speler per team','37 minigames':'37 minispellen','33 minigames':'33 minispellen',
  'OPTIONAL · PLAY TOGETHER ON PHONES':'OPTIONEEL · SAMEN SPELEN OP TELEFOONS',
  'Create or join a session':'Maak een sessie of neem deel',
  'One host plus up to four guest devices. The host controls all timers, cards, answers and scoring; guests can read along. Requires internet on every device.':'Eén host en maximaal vier gastapparaten. De host bedient de timers, kaarten, antwoorden en scores. Gasten kunnen meekijken. Op elk apparaat is internet nodig.',
  '✦ Make session':'✦ Maak sessie','Join with code':'Meedoen met code','8-letter code':'Code van 8 tekens','Join session':'Neem deel','End session':'Beëindig sessie','Leave session':'Verlaat sessie',
  'Waiting for your host':'Wachten op de host','Waiting for your host.':'Wachten op de host.',
  'Your host will set up teams and start the game. Their instructions and cards will appear here automatically.':'De host stelt de teams samen en begint het spel. De instructies en kaarten verschijnen hier automatisch.',
  'STEP 01':'STAP 01','STEP 02':'STAP 02','STEP 03':'STAP 03','STEP 04':'STAP 04',
  'SOLO SHOWDOWN · ONE PLAYER PER TEAM':'SOLO-UITDAGING · ÉÉN SPELER PER TEAM',
  'TEAM BATTLES · ORIGINAL FORMAT':'TEAMSTRIJD · ORIGINELE SPELVORM',
  'Every player':'Elke speler','for themselves.':'speelt voor zichzelf.',
  'Make the room':'Maak van de kamer','your arena.':'jouw speelveld.',
  'Each person is their own one-player team. Take turns earning your point solo or block the current player in a duel.':'Iedereen vormt een team van één persoon. Verdien om de beurt een punt of probeer de actieve speler te verslaan in een duel.',
  'Bring your people, pick your favorite challenges, and let the friendly rivalry begin. Quick living-room games. One point at a time.':'Verzamel je spelers, kies je favoriete uitdagingen en strijd gezellig tegen elkaar. Korte huiskamerspellen: steeds één punt te verdienen.',
  'available games':'beschikbare spellen','per turn':'per beurt','player per team':'speler per team','players per team':'spelers per team',
  'YOUR TEAMS':'JULLIE TEAMS','YOUR PLAYERS':'JULLIE SPELERS','The teams':'De teams','The players':'De spelers',
  'TEAM SETUP':'TEAMS INSTELLEN','SET UP YOUR TEAMS':'STEL JULLIE TEAMS SAMEN',
  'Team name':'Teamnaam','Player name':'Spelersnaam','Team':'Team','Player':'Speler','Players':'Spelers',
  'Add team':'Team toevoegen','Add player':'Speler toevoegen','Remove team':'Team verwijderen','Remove player':'Speler verwijderen',
  'Proficiency level':'Niveau','Choose proficiency':'Kies een niveau','ages':'leeftijden','age':'leeftijd',
  'Rounds per team':'Beurten per team','ESTIMATED GAME LENGTH':'GESCHATTE SPEELDUUR',
  'turns overall':'beurten in totaal','minutes per full round':'minuten per volledige ronde',
  'minigames':'minispellen','MINIGAMES':'MINISPELLEN','GAMES':'SPELLEN',
  'YOUR VIBE':'JULLIE VOORKEUR','Pick your categories.':'Kies je categorieën.',
  "All categories are on by default. Turn off anything your group doesn't fancy.":'Alle categorieën staan standaard aan. Zet uit wat jullie niet willen spelen.',
  'Select all':'Alles selecteren','Clear':'Wissen','categories enabled':'categorieën ingeschakeld','categories':'categorieën',
  'Ready to rumble?':'Klaar om te spelen?','Start the game ↗':'Begin het spel ↗',
  'Everyone has their own score and gets an equal number of turns.':'Iedereen heeft een eigen score en komt even vaak aan de beurt.',
  'One device controls the game.':'Eén apparaat bestuurt het spel.',
  'Your setup is saved in this browser.':'Je instellingen worden in deze browser bewaard.',
  'Back':'Terug','← Back':'← Terug', '← Back to game formats':'← Terug naar spelvormen',
  'LET THE GAMES BEGIN':'HET SPEL KAN BEGINNEN',
  '⚙ Categories':'⚙ Categorieën','↺ New game':'↺ Nieuw spel',
  'GUEST VIEW · HOST CONTROLS GAME':'GASTWEERGAVE · DE HOST BESTUURT HET SPEL',
  'Scoreboard':'Scorebord','ROUND':'RONDE','TURN':'BEURT','CURRENTLY PLAYING':'NU AAN DE BEURT',
  'PLAYER':'SPELER','PLAYERS':'SPELERS',
  'THE VERDICT':'DE UITSLAG','Point earned':'Punt verdiend','No point':'Geen punt',
  '✓ Point earned':'✓ Punt verdiend','× No point':'× Geen punt',
  'Only the active team can score. Choose the outcome to switch turns automatically.':'Alleen het actieve team kan punten verdienen. Kies de uitslag om automatisch van beurt te wisselen.',
  'Round recap':'Vorige beurten','RESULTS':'RESULTATEN','LAST':'LAATSTE',
  'No rounds completed yet. The story starts now.':'Er is nog niemand aan de beurt geweest. Het avontuur begint nu.',
  'WHO PLAYS?':'WIE SPEELT?','THE MATCHUP':'DE TEGENSTANDERS',
  'All in, together.':'Iedereen werkt samen.','One player. Six questions.':'Eén speler. Zes vragen.',
  'One player. One rival.':'Eén speler. Eén tegenstander.',
  'Team versus team.':'Team tegen team.','Two players per team: 2v2.':'Twee spelers per team: 2-tegen-2.',
  'ACTIVE PLAYER':'ACTIEVE SPELER','ACTIVE TEAM':'ACTIEF TEAM','DEFENDER':'TEGENSTANDER','DEFENDERS':'TEGENSTANDERS',
  'Defending team':'Tegenstanderteam','Choose the player':'Kies de speler','Solo player':'Solospeler',
  '✧ APP ASSIGNED':'✧ DOOR APP GEKOZEN','✎ PLAYER CHOICE':'✎ SPELER KIEST',
  'The app selected this matchup.':'De app heeft deze tegenstander gekozen.',
  'The defending side can stop the point, but never earn one this turn.':'Het verdedigende team kan het punt tegenhouden, maar zelf deze beurt geen punt verdienen.',
  'CLOCK INSTRUCTIONS':'TIMERINSTRUCTIES', 'NO CLOCK NEEDED':'GEEN TIMER NODIG', 'NO MAIN CLOCK NEEDED. Follow the spoken-turn rules; nothing needs to be started.':'GEEN TIMER NODIG. Volg de regels op de speelkaart.',
  'There is no countdown for this challenge.':'Bij deze uitdaging telt er geen klok af.',
  'Start timer ↗':'Start timer ↗','Pause timer':'Pauzeer timer','Resume timer ▶':'Hervat timer ▶',
  'Resume writing timer ▶':'Hervat schrijftijd ▶','Timer running…':'Timer loopt…',
  'Start memory challenge ↗':'Begin geheugenspel ↗','Time\'s up ✓':'Tijd voorbij ✓',
  'Only the host controls this timer.':'Alleen de host bedient deze timer.',
  'MIN : SEC':'MIN : SEC','CHALLENGE':'UITDAGING','SECOND CHALLENGE':'SECONDEN UITDAGING','STAGE':'FASE','OF':'VAN',
  'CHOOSE DIFFICULTY':'KIES MOEILIJKHEIDSGRAAD','CHOOSE SITUATIONS':'KIES SITUATIES',
  'Difficulty level':'Moeilijkheidsgraad','Headline style':'Koppenstijl',
  'Goofy':'Gek','Normal / everyday':'Normaal / alledaags',
  'not available for this game':'niet beschikbaar voor dit spel',
  'Change level before judging the result.':'Verander het niveau voordat je de uitslag bepaalt.',
  'Choose before starting the clock or revealing the card.':'Kies voordat je de timer start of de kaart opent.',
  'GAME CARD':'SPELKAART','Card is showing':'Kaart is zichtbaar','Viewing time is over':'Kijktijd voorbij','Open when ready':'Open als je klaar bent',
  '✕ Exit fullscreen':'✕ Volledig scherm sluiten','⛶ Fullscreen card':'⛶ Kaart op volledig scherm',
  'Reveal game card':'Toon spelkaart','Hide game card':'Verberg spelkaart',
  'Card is visible':'Kaart is zichtbaar','Card viewed ✓':'Kaart bekeken ✓',
  'Reveal answers':'Toon antwoorden','Hide answers':'Verberg antwoorden',
  'ANSWER KEY':'ANTWOORDEN','ORIGINAL SHAPE REFERENCE':'OORSPRONKELIJKE TEKENING',
  'Hide original shape':'Verberg origineel','Show original shape':'Toon origineel',
  '↺ Restart memory challenge':'↺ Geheugenspel opnieuw starten',
  '↺ Re-view card (reset both timers)':'↺ Kaart opnieuw bekijken (beide timers opnieuw)',
  '✓ Finish attempt & reveal answers':'✓ Poging afronden en antwoorden tonen',
  'HOW TO WIN THE POINT':'ZO VERDIEN JE HET PUNT',
  'Some cards contain secret clues. Only the correct player should peek.':'Sommige kaarten bevatten geheime aanwijzingen. Alleen de juiste speler mag kijken.',
  'The secret card is hidden. Continue from memory until the clock finishes.':'De geheime kaart is verborgen. Ga door uit je hoofd totdat de timer afloopt.',
  'Press Start memory challenge: the secret card will show automatically for the first timed stage.':'Druk op Start geheugenspel: de geheime kaart verschijnt automatisch tijdens de eerste fase.',
  'Time\'s up!':'De tijd is om!', 'Okay, see the result':'Oké, bekijk de uitslag',
  'Reveal the word list':'Toon de woordenlijst','Reveal the digit answer':'Toon de cijferreeks',
  'GAME COMPLETE · VERSION 4.3':'SPEL AFGELOPEN · VERSIE 4.3',
  'We have a winner!':'We hebben een winnaar!','It\'s a tie!':'Gelijkspel!',
  '✦ FINAL RESULT ✦':'✦ EINDUITSLAG ✦','Congratulations, champions of the living room!':'Gefeliciteerd, kampioenen van de huiskamer!',
  'The top teams share the win.':'De beste teams delen de overwinning.',
  'Final scoreboard':'Eindstand','point':'punt','points':'punten',
  '↺ Play another game':'↺ Nog een spel spelen','Ask the host to start the next game.':'Vraag de host om het volgende spel te starten.',
  'GAME SETTINGS':'SPELINSTELLINGEN','Your categories':'Jullie categorieën',
  'New selections take effect after this round. Your scores stay the same.':'Nieuwe keuzes gelden vanaf de volgende beurt. De scores blijven staan.',
  'Close categories':'Categorieën sluiten','Done ✓':'Klaar ✓',
  'LIVING ROOM BATTLES · V4.2':'LIVING ROOM BATTLES · V4.3',
  'LIVING ROOM BATTLES · V4.3':'LIVING ROOM BATTLES · V4.3',
  'GAME NIGHT, SORTED.':'SPELAVOND GEREGELD.',
  'Built for the living room, not the leaderboard.':'Gemaakt voor de huiskamer, niet voor de ranglijst.',
  'One turn. One point. Infinite rematches.':'Eén beurt. Eén punt. Eindeloos opnieuw spelen.',
  'Words & language':'Woorden en taal',
  'Classic & General Trivia':'Klassieke en algemene quizvragen',
  'New Topic Trivia':'Themaquizzen',
  'Party Challenges (New)':'Nieuwe party-uitdagingen',
  'Drawing & paper':'Tekenen en papier','Memory & focus':'Geheugen en concentratie',
  'Logic & numbers':'Logica en getallen', 'Acting & gestures':'Uitbeelden en gebaren',
  'Creative challenges':'Creatieve uitdagingen','Strategy & bluff':'Strategie en bluf',
  'Category Flood':'Categorieënrace','Last-Letter Duel':'Laatsteletterduel',
  'Rhyme Rally':'Rijmwedstrijd','Five Quick Facts':'Vijf snelle vragen',
  'Quickfire Facts':'Bliksemvragen','Trivia Board':'Quizduel',
  'Sketch & Guess':'Teken en raad','Shape Copy':'Vorm natekenen',
  'Picture Race':'Tekensprint','Shopping Basket':'Boodschappenmandje',
  'Digit Memory':'Cijfergeheugen','Word Recall Battle':'Woorden onthouden',
  'Missing Numbers':'Ontbrekend getal','Clock Duel':'Klokkenduel',
  'Target Number':'Doelgetal','Silent Charades':'Stille hints',
  'Reaction Rules':'Reactieregels','Mime Relay':'Uitbeeldestafette',
  'Alphabet Story':'Alfabetverhaal','Alliteration Duel':'Alliteratieduel',
  'Headline Challenge':'Koppenwedstrijd','Codebreaker':'Codekraker',
  'Count to Thirty':'Tel tot dertig','Rock-Paper-Scissors Council':'Steen-papier-schaar',
  'Stare Battle (No Blinking)':'Staarwedstrijd (niet knipperen)',
  'Make the Other Laugh':'Laat de ander lachen','Rebus: Secret Word':'Rebus: geheim woord',
  'Arm Wrestling':'Armpje drukken','Riddle Round':'Raadselronde',
  'Trivia: History':'Quiz: geschiedenis','Trivia: Sports & Athletics':'Quiz: sport en atletiek',
  'Trivia: Movies & TV':'Quiz: films en tv','Trivia: Culture':'Quiz: cultuur',
  'Trivia: Geography':'Quiz: aardrijkskunde','Trivia: Science & Nature':'Quiz: wetenschap en natuur',
  'Trivia: Arts & Literature':'Quiz: kunst en literatuur','Trivia: Music':'Quiz: muziek',
  'History':'Geschiedenis','Sports & Athletics':'Sport en atletiek','Movies & TV':'Films en tv',
  'Culture':'Cultuur','Geography':'Aardrijkskunde','Science & Nature':'Wetenschap en natuur',
  'Arts & Literature':'Kunst en literatuur','Music':'Muziek',
  'Beginner':'Beginner','Novice':'Nieuweling','Amateur':'Amateur',
  'Intermediate':'Gevorderde','Competent':'Bekwaam','Skilled':'Ervaren',
  'Advanced':'Expert','Grandmaster':'Grootmeester',
  'Cooperation':'Samenwerking','Solo':'Solo','Duel':'Duel','Team battle':'Teamstrijd',
  'No extra equipment':'Geen extra benodigdheden','Text card and paper':'Pen/potlood en papier',
  'Text card, paper optional':'Pen/potlood en papier (optioneel)','Paper and pen':'Papier en pen',
  'Text card':'Tekstkaart', 'Paper and pencil':'Papier en potlood',
  'MULTIPLE CHOICE':'MEERKEUZEVRAGEN','MIXED QUESTIONS':'GEMENGDE VRAGEN','OPEN QUESTIONS':'OPEN VRAGEN',
  'TOPIC':'ONDERWERP','SECRET WORD':'GEHEIM WOORD','SECRET WORDS':'GEHEIME WOORDEN',
  'SECRET DIGITS':'GEHEIME CIJFERS','SECRET DRAWING LIST':'GEHEIME TEKENOPDRACHTEN',
  'Starting word':'Beginwoord','Starting rhyme word':'Beginrijmwoord',
  'Rhyme with':'Rijm op','Start with':'Begin met','FILL ONE LETTER':'VUL ÉÉN LETTER IN',
  'FILL TWO LETTERS':'VUL TWEE LETTERS IN','Hint':'Hint','EXAMPLE':'VOORBEELD',
  'COUNTS AS ONE':'TELT ALS ÉÉN','DRAW ONE SCENE':'TEKEN ÉÉN SCÈNE',
  'STORY THEME':'VERHAALTHEMA','YOUR LETTER':'JOUW LETTER','TAKE LETTER':'NEEM LETTER',
  'Take letter':'Neem letter','Answer each trivia clue.':'Beantwoord elke quizvraag.',
  'Read the extracted letters from top to bottom.':'Lees de gevonden letters van boven naar beneden.',
  'words':'woorden','letters':'letters','seconds':'seconden','minutes':'minuten',
  'correct':'goed','wrong':'fout','Answer':'Antwoord',
};


// V4.4: reviewed Dutch copy from the five-page playtest feedback.
// This table runs before the broad word-by-word fallback so whole UI labels
// and fragments cannot turn into half-English sentences.
Object.assign(UI, {
  '← Change game format':'← Verander spelvorm',
  'Player proficiency':'Spelersniveau',
  'Team proficiency':'Teamniveau',
  'Choose your side':'Kies je team',
  'ages':'leeftijd', 'Ages':'Leeftijd', 'Estimate':'Geschat', 'estimate':'geschat',
  'Each person has exactly one team and an individual score.':'Elke persoon heeft precies één team en een individuele score.',
  'Rename your teams and enter every player\'s name.':'Hernoem je team en voer elke spelersnaam in.',
  'One round means every team gets exactly one turn, in order.':'Een ronde betekent dat elk team precies één keer aan de beurt is geweest.',
  'GAME CARD':'SPEELKAART', 'Reveal game card':'Toon speelkaart',
  'Hide game card':'Verberg speelkaart', 'Fullscreen game card':'Speelkaart op volledig scherm',
  'No extra equipment':'Geen extra benodigdheden',
  'Text card, paper optional':'Pen/potlood en papier (optioneel)',
  'Stable table; clear space':'Stabiele, opgeruimde tafel',
  'HOW TO WIN THE POINT':'ZO VERDIEN JE HET PUNT',
  'The defending side can stop the point, but never earn one this turn.':'Het verdedigende team kan het punt voorkomen, maar nooit verdienen.',
  'Only the active team can score. Choose the outcome to switch turns automatically.':'Alleen het actieve team kan punten verdienen. Kies de uitslag om automatisch naar de volgende beurt te gaan.',
  'The active team earns a point only with more correct answers than the defender. A tie blocks the point.':'Het actieve team verdient alleen een punt als het meer vragen juist beantwoordt dan de tegenstander. Gelijkspel levert geen punt op.',
  'The active team earns the point with MORE correct answers than the defender. A tie blocks the point.':'Het actieve team verdient alleen een punt als het meer vragen juist beantwoordt dan de tegenstander. Gelijkspel levert geen punt op.',
  'NO MAIN CLOCK NEEDED. Follow the spoken-turn rules; nothing needs to be started.':'GEEN TIMER NODIG. Volg de regels op de speelkaart.',
  'Follow the game-card rules. There is no countdown for this challenge.':'Volg de regels op de speelkaart.',
  'The selected players':'De gekozen spelers',
  'GAME COMPLETE · VERSION 4.4':'SPEL AFGELOPEN · VERSIE 4.4',
  'LIVING ROOM BATTLES · V4.4':'LIVING ROOM BATTLES · V4.4',
  'GAME COMPLETE · VERSION 4.5':'SPEL AFGELOPEN · VERSIE 4.5',
  'LIVING ROOM BATTLES · V4.5':'LIVING ROOM BATTLES · V4.5',
});

// General Dutch terms used for cards, quiz answers, prompts and rules. Longest
// phrases are applied first; proper names and mathematical notation remain
// unchanged. The lexicon can be extended in future translation feedback.
const TERMS_RAW = `
which|welke
what|wat
who|wie
whose|van wie
whom|wie
where|waar
when|wanneer
why|waarom
how many|hoeveel
how much|hoeveel
how long|hoe lang
how far|hoe ver
how old|hoe oud
what is|wat is
what are|wat zijn
which is|welke is
which are|welke zijn
which of|welke van
what do we call|hoe noemen we
what is the name of|hoe heet
what does|wat doet
what did|wat deed
what was|wat was
what were|wat waren
how do|hoe
how does|hoe
how did|hoe
what can|wat kan
what would|wat zou
what happens|wat gebeurt
what type of|welk soort
what kind of|wat voor soort
who was|wie was
who is|wie is
who wrote|wie schreef
who painted|wie schilderde
who composed|wie componeerde
who directed|wie regisseerde
who discovered|wie ontdekte
who invented|wie vond uit
who created|wie maakte
who became|wie werd
who won|wie won
who developed|wie ontwikkelde
who formulated|wie formuleerde
who proved|wie bewees
who first|wie als eerste
who played|wie speelde
which country|welk land
which city|welke stad
which continent|welk werelddeel
which planet|welke planeet
which element|welk element
which chemical element|welk chemisch element
which animal|welk dier
which part|welk deel
which organ|welk orgaan
which river|welke rivier
which ocean|welke oceaan
which sea|welke zee
which mountain|welke berg
which gas|welk gas
which scientist|welke wetenschapper
which author|welke schrijver
which writer|welke schrijver
which film|welke film
which movie|welke film
which actor|welke acteur
which actress|welke actrice
which television|welke televisie
which tv|welke tv
which song|welk lied
which musician|welke muzikant
which instrument|welk instrument
which sport|welke sport
which team|welk team
which player|welke speler
which language|welke taal
which book|welk boek
which novel|welke roman
which word|welk woord
which letter|welke letter
which number|welk getal
which year|welk jaar
which century|welke eeuw
which war|welke oorlog
which battle|welke veldslag
which dynasty|welke dynastie
which empire|welk rijk
which name|welke naam
which direction|welke richting
which star|welke ster
which moon|welke maan
which shape|welke vorm
which force|welke kracht
which event|welke gebeurtenis
what country|welk land
what city|welke stad
what continent|welk werelddeel
what planet|welke planeet
what animal|welk dier
what gas|welk gas
what language|welke taal
what sport|welke sport
what instrument|welk instrument
what year|welk jaar
what color|welke kleur
what colour|welke kleur
what number|welk getal
what fraction|welke breuk
what percent|welk percentage
what percentage|welk percentage
what unit|welke eenheid
what chemical|welke chemische
what element|welk element
what molecule|welk molecuul
what organ|welk orgaan
what process|welk proces
what shape|welke vorm
what film|welke film
what song|welk lied
what book|welk boek
what word|welk woord
what name|welke naam
what type|welk type
what is the capital of|wat is de hoofdstad van
which is the capital of|wat is de hoofdstad van
capital of|hoofdstad van
what is the chemical symbol for|wat is het chemische symbool voor
what is the chemical formula for|wat is de chemische formule van
which element has the chemical symbol|welk element heeft het chemische symbool
what is the atomic number of|wat is het atoomnummer van
which element has atomic number|welk element heeft atoomnummer
what is the SI unit of|wat is de SI-eenheid van
what is the unit of|wat is de eenheid van
how many sides|hoeveel zijden
how many legs|hoeveel poten
how many players|hoeveel spelers
how many hours|hoeveel uur
how many seconds|hoeveel seconden
how many minutes|hoeveel minuten
how many days|hoeveel dagen
how many degrees|hoeveel graden
how many years|hoeveel jaar
how many times|hoe vaak
how many letters|hoeveel letters
what is the square root of|wat is de vierkantswortel van
what is the derivative of|wat is de afgeleide van
what is the sum of|wat is de som van
what is the difference between|wat is het verschil tussen
what is the smallest|wat is de kleinste
what is the largest|wat is de grootste
what is the longest|wat is de langste
what is the highest|wat is de hoogste
what is the first|wat is de eerste
what is the next|wat is de volgende
what is the last|wat is de laatste
what is the name|hoe luidt de naam
which of these|welke van deze
what do you call|hoe noem je
called|genoemd
known as|bekend als
known for|bekend om
associated with|verbonden met
in which year|in welk jaar
in what year|in welk jaar
in which country|in welk land
in what country|in welk land
in which city|in welke stad
in which continent|op welk werelddeel
in which century|in welke eeuw
on which continent|op welk werelddeel
in which movie|in welke film
in which film|in welke film
in which sport|in welke sport
in which season|in welk seizoen
is the|is de
are the|zijn de
was the|was de
is a|is een
was a|was een
are a|zijn een
is an|is een
was an|was een
has|heeft
have|hebben
had|had
was|was
were|waren
are|zijn
is|is
do|doen
did|deed
does|doet
can|kan
could|kon
would|zou
will|zal
must|moet
should|moet
may|mag
might|kan
needs|heeft nodig
need|nodig
required|vereist
require|vereisen
requires|vereist
from|van
of|van
for|voor
to|naar
into|in
onto|op
in|in
on|op
at|bij
with|met
without|zonder
between|tussen
through|door
across|over
around|rond
above|boven
below|onder
under|onder
over|over
before|voor
after|na
during|tijdens
until|tot
since|sinds
while|terwijl
and|en
or|of
but|maar
than|dan
then|dan
that|dat
this|dit
these|deze
those|die
the|de
a|een
an|een
its|zijn
it|het
his|zijn
her|haar
their|hun
your|jouw
our|ons
my|mijn
me|mij
you|jij
we|wij
they|zij
he|hij
she|zij
them|hen
us|ons
one|één
two|twee
three|drie
four|vier
five|vijf
six|zes
seven|zeven
eight|acht
nine|negen
ten|tien
eleven|elf
twelve|twaalf
thirteen|dertien
fourteen|veertien
fifteen|vijftien
sixteen|zestien
seventeen|zeventien
eighteen|achttien
nineteen|negentien
twenty|twintig
thirty|dertig
forty|veertig
fifty|vijftig
hundred|honderd
thousand|duizend
million|miljoen
first|eerste
second|tweede
third|derde
fourth|vierde
fifth|vijfde
sixth|zesde
seventh|zevende
eighth|achtste
last|laatste
next|volgende
other|andere
same|zelfde
all|alle
every|elke
each|elk
any|enige
none|geen
only|alleen
more|meer
most|meeste
less|minder
least|minst
another|ander
new|nieuw
old|oud
older|ouder
young|jong
younger|jonger
large|groot
largest|grootste
small|klein
smallest|kleinste
big|groot
biggest|grootste
long|lang
longest|langste
short|kort
shortest|kortste
high|hoog
highest|hoogste
low|laag
lowest|laagste
fast|snel
faster|sneller
slow|langzaam
light|licht
lighter|lichter
heavy|zwaar
heavier|zwaarder
hard|hard
harder|moeilijker
easy|makkelijk
easier|makkelijker
difficult|moeilijk
simple|eenvoudig
correct|juist
wrong|fout
valid|geldig
true|waar
false|onwaar
real|echt
fake|nep
famous|beroemd
popular|populair
common|veelvoorkomend
everyday|alledaags
different|verschillend
similar|vergelijkbaar
important|belangrijk
modern|modern
ancient|oud
medieval|middeleeuws
historical|historisch
scientific|wetenschappelijk
physical|fysiek
chemical|chemisch
natural|natuurlijk
human|menselijk
living|levend
current|huidig
ordinary|gewoon
normal|normaal
national|nationaal
international|internationaal
local|lokaal
worldwide|wereldwijd
mostly|meestal
often|vaak
usually|gewoonlijk
mainly|vooral
especially|vooral
approximately|ongeveer
exactly|precies
almost|bijna
completely|volledig
simultaneously|tegelijkertijd
together|samen
alone|alleen
independently|zelfstandig
immediately|meteen
automatically|automatisch
randomly|willekeurig
secretly|stiekem
openly|openlijk
quietly|stil
silently|zonder te praten
quickly|snel
slowly|langzaam
always|altijd
never|nooit
sometimes|soms
often|vaak
again|opnieuw
now|nu
there|daar
here|hier
where|waar
which|welke
what|wat
who|wie
how|hoe
why|waarom
when|wanneer
name|naam
answer|antwoord
answers|antwoorden
question|vraag
questions|vragen
clue|aanwijzing
clues|aanwijzingen
hint|hint
hints|hints
word|woord
words|woorden
letter|letter
letters|letters
number|getal
numbers|getallen
digit|cijfer
digits|cijfers
code|code
codes|codes
secret|geheim
mystery|mysterie
puzzle|puzzel
riddle|raadsel
riddles|raadsels
game|spel
games|spellen
minigame|minispel
minigames|minispellen
team|team
teams|teams
player|speler
players|spelers
opponent|tegenstander
opponents|tegenstanders
defender|tegenstander
defenders|tegenstanders
judge|scheidsrechter
round|ronde
rounds|rondes
turn|beurt
turns|beurten
point|punt
points|punten
score|score
scores|scores
win|winnen
wins|wint
winning|winnen
lose|verliezen
loses|verliest
lost|verloren
tie|gelijkspel
ties|gelijke spelen
draw|tekenen
drawing|tekening
sketch|schets
copy|kopiëren
paper|papier
pen|pen
pencil|potlood
equipment|benodigdheden
timer|timer
clock|klok
clocks|klokken
seconds|seconden
second|seconde
minutes|minuten
minute|minuut
hours|uren
hour|uur
days|dagen
day|dag
week|week
weeks|weken
month|maand
months|maanden
year|jaar
years|jaren
century|eeuw
centuries|eeuwen
morning|ochtend
afternoon|middag
evening|avond
night|nacht
midnight|middernacht
noon|middag
today|vandaag
yesterday|gisteren
tomorrow|morgen
start|start
starts|begint
started|gestart
starting|beginnend
begin|beginnen
begins|begint
continue|ga verder
continues|gaat verder
stop|stoppen
stops|stopt
end|einde
ends|eindigt
finish|afronden
finishes|rondt af
finished|afgerond
complete|voltooien
completed|voltooid
reveal|tonen
reveals|toont
revealed|getoond
show|toon
shows|toont
showing|zichtbaar
hide|verberg
hidden|verborgen
view|bekijken
viewed|bekeken
watch|kijken
look|kijk
see|zien
seen|gezien
read|lees
write|schrijf
written|geschreven
say|zeg
said|zei
speak|spreken
spoken|gesproken
tell|vertel
told|verteld
listen|luister
hear|hoor
heard|gehoord
make|maak
made|gemaakt
create|maken
created|gemaakt
build|bouwen
built|gebouwd
choose|kies
chose|koos
selected|gekozen
select|selecteren
pick|kies
picked|gekozen
check|controleren
checked|gecontroleerd
count|tellen
counts|telt
counted|geteld
calculate|bereken
evaluate|bereken
solve|los op
solving|oplossen
find|vind
found|gevonden
forms|vormt
form|vorm
produce|produceren
produces|produceert
produced|geproduceerd
measure|meten
measures|meet
measured|gemeten
record|opnemen
records|neemt op
remember|onthoud
remembered|onthouden
memorize|onthoud
memorized|onthouden
study|bestuderen
studies|bestudeert
learn|leren
learned|geleerd
play|spelen
played|gespeeld
plays|speelt
score|scoren
scores|scoort
beat|verslaan
beats|verslaat
face|tegenover staan
faces|gezichten
compete|strijden
competing|strijdend
participate|meedoen
participating|deelnemend
repeat|herhalen
repeated|herhaald
repeats|herhaalt
reject|afkeuren
rejects|keurt af
allow|toestaan
allowed|toegestaan
accept|accepteren
accepted|geaccepteerd
agree|eens zijn
agreeing|eens zijn
fail|falen
fails|faalt
mistake|fout
mistakes|fouten
help|helpen
helps|helpt
support|steunen
share|delen
shared|gedeeld
switch|wisselen
switched|gewisseld
change|veranderen
changes|verandert
mix|mengen
mixed|gemengd
multiply|vermenigvuldigen
multiplied|vermenigvuldigd
multiplication|vermenigvuldiging
divide|delen
divided|gedeeld
division|deling
add|optellen
added|opgeteld
addition|optellen
subtract|aftrekken
subtraction|aftrekken
plus|plus
minus|min
square|vierkant
squared|in het kwadraat
cube|kubus
cubed|tot de derde macht
root|wortel
square root|vierkantswortel
factorial|faculteit
power|macht
sum|som
difference|verschil
percentage|percentage
percent|procent
fraction|breuk
equation|vergelijking
sequence|reeks
prime|priemgetal
integer|geheel getal
decimal|decimaal
factor|factor
multiple|veelvoud
unit|eenheid
constant|constante
derivative|afgeleide
angle|hoek
angles|hoeken
degrees|graden
degree|graad
triangle|driehoek
triangles|driehoeken
rectangle|rechthoek
rectangular|rechthoekig
circle|cirkel
round|rond
square|vierkant
oval|ovaal
pentagon|vijfhoek
hexagon|zeshoek
octagon|achthoek
shape|vorm
shapes|vormen
side|zijde
sides|zijden
corner|hoek
corners|hoeken
edge|rand
edges|randen
vertex|hoekpunt
vertices|hoekpunten
area|oppervlakte
volume|volume
length|lengte
height|hoogte
width|breedte
weight|gewicht
mass|massa
speed|snelheid
velocity|snelheid
force|kracht
energy|energie
heat|warmte
temperature|temperatuur
matter|materie
electricity|elektriciteit
electrical|elektrisch
magnetic|magnetisch
resistance|weerstand
current|stroom
voltage|spanning
capacitance|capaciteit
inductance|inductantie
flux|flux
frequency|frequentie
radiation|straling
light|licht
sound|geluid
color|kleur
colour|kleur
red|rood
blue|blauw
green|groen
yellow|geel
orange|oranje
purple|paars
pink|roze
black|zwart
white|wit
brown|bruin
grey|grijs
gray|grijs
gold|goud
silver|zilver
copper|koper
iron|ijzer
salt|zout
water|water
ice|ijs
steam|stoom
rain|regen
snow|sneeuw
cloud|wolk
clouds|wolken
sky|lucht
sun|zon
moon|maan
star|ster
stars|sterren
planet|planeet
planets|planeten
earth|aarde
mars|Mars
mercury|Mercurius
venus|Venus
jupiter|Jupiter
saturn|Saturnus
uranus|Uranus
neptune|Neptunus
pluto|Pluto
solar system|zonnestelsel
solar|zonne-
sunlight|zonlicht
galaxy|melkwegstelsel
universe|heelal
space|ruimte
rocket|raket
satellite|satelliet
meteor|meteoor
asteroid|asteroïde
comet|komeet
atmosphere|atmosfeer
troposphere|troposfeer
stratosphere|stratosfeer
equator|evenaar
north|noord
south|zuid
east|oost
west|west
northern|noordelijk
southern|zuidelijk
eastern|oostelijk
western|westelijk
continent|werelddeel
continents|werelddelen
ocean|oceaan
oceans|oceanen
sea|zee
seas|zeeën
river|rivier
rivers|rivieren
lake|meer
lakes|meren
mountain|berg
mountains|bergen
hill|heuvel
valley|vallei
island|eiland
islands|eilanden
desert|woestijn
forest|bos
forests|bossen
jungle|oerwoud
beach|strand
coast|kust
coastal|aan de kust
capital|hoofdstad
capitals|hoofdsteden
city|stad
cities|steden
town|plaats
village|dorp
country|land
countries|landen
world|wereld
globe|aardbol
map|kaart
maps|kaarten
region|regio
regions|regio's
border|grens
borders|grenzen
population|bevolking
inhabitants|inwoners
people|mensen
person|persoon
family|familie
parent|ouder
father|vader
mother|moeder
son|zoon
daughter|dochter
child|kind
children|kinderen
baby|baby
man|man
woman|vrouw
men|mannen
women|vrouwen
boy|jongen
girl|meisje
king|koning
queen|koningin
prince|prins
princess|prinses
emperor|keizer
empire|rijk
ruler|heerser
leader|leider
president|president
prime minister|premier
minister|minister
government|regering
parliament|parlement
law|wet
laws|wetten
country|land
nation|natie
civilization|beschaving
civilisations|beschavingen
civilizations|beschavingen
ancient egypt|het oude Egypte
egypt|Egypte
greece|Griekenland
rome|Rome
roman|Romeins
romans|Romeinen
britain|Groot-Brittannië
united kingdom|Verenigd Koninkrijk
united states|Verenigde Staten
usa|VS
france|Frankrijk
germany|Duitsland
spain|Spanje
italy|Italië
portugal|Portugal
poland|Polen
sweden|Zweden
norway|Noorwegen
denmark|Denemarken
netherlands|Nederland
belgium|België
switzerland|Zwitserland
austria|Oostenrijk
hungary|Hongarije
croatia|Kroatië
serbia|Servië
romania|Roemenië
russia|Rusland
ukraine|Oekraïne
china|China
japan|Japan
india|India
brazil|Brazilië
mexico|Mexico
canada|Canada
south africa|Zuid-Afrika
north america|Noord-Amerika
south america|Zuid-Amerika
africa|Afrika
asia|Azië
europe|Europa
antarctica|Antarctica
australia|Australië
new zealand|Nieuw-Zeeland
pacific|Stille Oceaan
atlantic|Atlantische Oceaan
indian ocean|Indische Oceaan
arctic ocean|Noordelijke IJszee
mediterranean|Middellandse Zee
black sea|Zwarte Zee
red sea|Rode Zee
baltic sea|Oostzee
middle east|Midden-Oosten
western europe|West-Europa
eastern europe|Oost-Europa
central asia|Centraal-Azië
north africa|Noord-Afrika
south asia|Zuid-Azië
history|geschiedenis
historical|historisch
past|verleden
future|toekomst
present|heden
war|oorlog
wars|oorlogen
battle|veldslag
battles|veldslagen
revolution|revolutie
revolutions|revoluties
treaty|verdrag
treaties|verdragen
peace|vrede
independence|onafhankelijkheid
independent|onafhankelijk
freedom|vrijheid
castle|kasteel
castles|kastelen
knight|ridder
knights|ridders
armor|harnas
armour|harnas
crown|kroon
pyramid|piramide
pyramids|piramides
museum|museum
museums|musea
fossil|fossiel
fossils|fossielen
archaeologist|archeoloog
archaeologists|archeologen
archaeology|archeologie
artifact|voorwerp
artifacts|voorwerpen
ruins|ruïnes
ship|schip
ships|schepen
sail|zeilen
sailors|zeelieden
voyage|zeereis
explorer|ontdekkingsreiziger
exploration|ontdekkingstocht
invention|uitvinding
invented|uitgevonden
invention|uitvinding
printing|drukkunst
printed|gedrukt
book|boek
books|boeken
novel|roman
novels|romans
poem|gedicht
poetry|poëzie
poet|dichter
writer|schrijver
author|auteur
literature|literatuur
literary|literair
story|verhaal
stories|verhalen
chapter|hoofdstuk
page|pagina
pages|pagina's
library|bibliotheek
libraries|bibliotheken
painting|schilderij
paintings|schilderijen
paint|schilderen
painter|schilder
artist|kunstenaar
artists|kunstenaars
art|kunst
arts|kunsten
sculpture|beeldhouwwerk
sculptor|beeldhouwer
sculptures|beeldhouwwerken
portrait|portret
landscape|landschap
architecture|architectuur
architect|architect
design|ontwerp
designed|ontworpen
movement|beweging
movements|bewegingen
period|periode
style|stijl
styles|stijlen
music|muziek
musical|muzikaal
musician|muzikant
musicians|muzikanten
composer|componist
composers|componisten
composed|gecomponeerd
composition|compositie
song|lied
songs|liedjes
singer|zanger
sing|zingen
sings|zingt
sang|zong
band|band
bands|bands
orchestra|orkest
symphony|symfonie
opera|opera
melody|melodie
rhythm|ritme
beat|maat
beats|beats
instrument|instrument
instruments|instrumenten
piano|piano
guitar|gitaar
violin|viool
trumpet|trompet
flute|fluit
drum|trommel
drums|drums
keyboard|toetsenbord
keys|toetsen
concert|concert
album|album
albums|albums
lyrics|songtekst
verse|couplet
chorus|refrein
melody|melodie
jazz|jazz
rock|rock
pop|pop
classical|klassiek
folk|volksmuziek
rap|rap
hip hop|hiphop
blues|blues
film|film
films|films
movie|film
movies|films
cinema|bioscoop
television|televisie
tv|tv
series|serie
show|programma
shows|programma's
actor|acteur
actress|actrice
actors|acteurs
actresses|actrices
character|personage
characters|personages
played|gespeeld
plays|speelt
starring|met in de hoofdrol
director|regisseur
directed|geregisseerd
animated|geanimeerd
animation|animatie
cartoon|tekenfilm
scene|scène
scenes|scènes
episode|aflevering
episodes|afleveringen
season|seizoen
seasons|seizoenen
fantasy|fantasie
science fiction|sciencefiction
adventure|avontuur
comedy|komedie
drama|drama
horror|horror
thriller|thriller
hero|held
villain|schurk
villains|schurken
superhero|superheld
princess|prinses
magic|magie
magical|magisch
wizard|tovenaar
school|school
schools|scholen
student|leerling
students|leerlingen
teacher|leraar
teachers|leraren
classroom|klaslokaal
class|klas
university|universiteit
college|hogeschool
lesson|les
learn|leren
study|studeren
subject|vak
subjects|vakken
language|taal
languages|talen
alphabet|alfabet
letter|letter
letters|letters
sentence|zin
sentences|zinnen
phrase|zinsdeel
phrases|zinnen
rhyme|rijm
rhyming|rijmend
alliteration|alliteratie
vowel|klinker
consonant|medeklinker
syllable|lettergreep
grammar|grammatica
synonym|synoniem
antonym|antoniem
meaning|betekenis
means|betekent
spoken|gesproken
written|geschreven
speak|spreken
say|zeggen
sports|sporten
sport|sport
athletics|atletiek
football|voetbal
soccer|voetbal
basketball|basketbal
volleyball|volleybal
tennis|tennis
cricket|cricket
baseball|honkbal
hockey|hockey
ice hockey|ijshockey
rugby|rugby
cycling|wielrennen
bicycle|fiets
bicycles|fietsen
running|hardlopen
run|rennen
race|wedstrijd
races|wedstrijden
swimming|zwemmen
swim|zwemmen
skating|schaatsen
skiing|skiën
rowing|roeien
boxing|boksen
wrestling|worstelen
archery|boogschieten
gymnastics|gymnastiek
marathon|marathon
triathlon|triatlon
olympic|olympisch
olympics|Olympische Spelen
games|spelen
gold medal|gouden medaille
medal|medaille
medals|medailles
team|team
teams|teams
coach|trainer
referee|scheidsrechter
umpire|scheidsrechter
stadium|stadion
field|veld
court|baan
track|baan
pitch|veld
goal|doelpunt
goals|doelpunten
ball|bal
balls|ballen
player|speler
players|spelers
champion|kampioen
championship|kampioenschap
tournament|toernooi
match|wedstrijd
matches|wedstrijden
points|punten
point|punt
score|score
scored|scoorde
record|record
world record|wereldrecord
compete|meedoen
competition|competitie
win|winnen
won|gewonnen
winner|winnaar
winning|winnend
animal|dier
animals|dieren
plant|plant
plants|planten
flower|bloem
flowers|bloemen
tree|boom
trees|bomen
garden|tuin
gardens|tuinen
grass|gras
leaf|blad
leaves|bladeren
root|wortel
roots|wortels
stem|stengel
petal|bloemblad
petals|bloemblaadjes
fruit|fruit
fruits|vruchten
vegetable|groente
vegetables|groenten
seed|zaad
seeds|zaden
forest|bos
wood|hout
woods|bossen
bird|vogel
birds|vogels
fish|vis
fishes|vissen
shark|haai
whale|walvis
dolphin|dolfijn
octopus|octopus
crab|krab
frog|kikker
frogs|kikkers
tadpole|kikkervisje
snake|slang
snakes|slangen
lizard|hagedis
reptile|reptiel
reptiles|reptielen
insect|insect
insects|insecten
spider|spin
spiders|spinnen
bee|bij
bees|bijen
butterfly|vlinder
butterflies|vlinders
caterpillar|rups
caterpillars|rupsen
moth|mot
moths|motten
ant|mier
ants|mieren
cat|kat
cats|katten
dog|hond
dogs|honden
cow|koe
cows|koeien
pig|varken
pigs|varkens
sheep|schaap
lamb|lam
horse|paard
horses|paarden
donkey|ezel
chicken|kip
chickens|kippen
duck|eend
ducks|eenden
elephant|olifant
giraffe|giraf
lion|leeuw
tiger|tijger
bear|beer
bears|beren
monkey|aap
monkeys|apen
rabbit|konijn
rabbits|konijnen
mouse|muis
mice|muizen
rat|rat
rats|ratten
fox|vos
wolf|wolf
wolves|wolven
turtle|schildpad
penguin|pinguïn
pigeon|duif
deer|hert
kangaroo|kangoeroe
zebra|zebra
hippo|nijlpaard
crocodile|krokodil
bat|vleermuis
panda|panda
goat|geit
squirrel|eekhoorn
animal kingdom|dierenrijk
species|soort
mammal|zoogdier
mammals|zoogdieren
herbivore|planteneter
carnivore|vleeseter
omnivore|alleseter
predator|roofdier
prey|prooi
habitat|leefgebied
nature|natuur
natural|natuurlijk
ecosystem|ecosysteem
biodiversity|biodiversiteit
biology|biologie
chemistry|scheikunde
physics|natuurkunde
science|wetenschap
scientist|wetenschapper
scientists|wetenschappers
experiment|experiment
experiments|experimenten
research|onderzoek
laboratory|laboratorium
lab|lab
microscope|microscoop
telescope|telescoop
thermometer|thermometer
barometer|barometer
magnet|magneet
magnets|magneten
atom|atoom
atoms|atomen
atomic|atomair
chemical|chemisch
chemicals|chemicaliën
element|element
elements|elementen
symbol|symbool
symbols|symbolen
formula|formule
formulas|formules
oxygen|zuurstof
hydrogen|waterstof
nitrogen|stikstof
carbon|koolstof
carbon dioxide|koolstofdioxide
sodium|natrium
potassium|kalium
calcium|calcium
magnesium|magnesium
chlorine|chloor
mercury|kwik
zinc|zink
lead|lood
tin|tin
iron|ijzer
silver|zilver
gold|goud
tungsten|wolfraam
molybdenum|molybdeen
fluorine|fluor
sulfur|zwavel
sulphur|zwavel
helium|helium
neon|neon
argon|argon
phosphorus|fosfor
platinum|platina
uranium|uranium
react|reageren
reaction|reactie
reactions|reacties
acid|zuur
acidic|zuur
basic|basisch
alkaline|basisch
molecule|molecuul
molecules|moleculen
cell|cel
cells|cellen
nucleus|kern
mitochondrion|mitochondrium
mitochondria|mitochondriën
chromosome|chromosoom
chromosomes|chromosomen
DNA|DNA
RNA|RNA
genes|genen
gene|gen
genetics|genetica
evolution|evolutie
species|soort
fungi|schimmels
fungus|schimmel
bacteria|bacteriën
bacterium|bacterie
virus|virus
viruses|virussen
photosynthesis|fotosynthese
respiration|ademhaling
breathing|ademen
breathe|ademen
lungs|longen
heart|hart
blood|bloed
blood vessels|bloedvaten
brain|hersenen
head|hoofd
eye|oog
eyes|ogen
ear|oor
ears|oren
nose|neus
mouth|mond
teeth|tanden
tooth|tand
neck|nek
hand|hand
hands|handen
finger|vinger
fingers|vingers
arm|arm
arms|armen
leg|been
legs|benen
foot|voet
feet|voeten
body|lichaam
skin|huid
hair|haar
skeleton|skelet
bone|bot
bones|botten
muscle|spier
muscles|spieren
organ|orgaan
organs|organen
stomach|maag
liver|lever
kidney|nier
kidneys|nieren
pancreas|alvleesklier
intestine|darm
intestines|darmen
nervous system|zenuwstelsel
insulin|insuline
hormone|hormoon
hormones|hormonen
vision|zicht
sight|zicht
hearing|gehoor
smell|reuk
taste|smaak
touch|aanraking
health|gezondheid
food|voedsel
foods|voedingsmiddelen
breakfast|ontbijt
lunch|lunch
dinner|avondeten
sandwich|boterham
bread|brood
cheese|kaas
milk|melk
egg|ei
eggs|eieren
apple|appel
apples|appels
banana|banaan
bananas|bananen
orange|sinaasappel
oranges|sinaasappels
pear|peer
pears|peren
lemon|citroen
carrot|wortel
carrots|wortels
tomato|tomaat
tomatoes|tomaten
potato|aardappel
potatoes|aardappelen
watermelon|watermeloen
strawberry|aardbei
strawberries|aardbeien
pizza|pizza
cake|taart
cookie|koekje
cookies|koekjes
pancake|pannenkoek
pancakes|pannenkoeken
yogurt|yoghurt
juice|sap
coffee|koffie
tea|thee
sugar|suiker
honey|honing
salt|zout
pepper|peper
ice cream|ijsje
chocolate|chocolade
soup|soep
fish|vis
meat|vlees
chicken|kip
rice|rijst
pasta|pasta
sauce|saus
restaurant|restaurant
kitchen|keuken
house|huis
home|thuis
room|kamer
rooms|kamers
bedroom|slaapkamer
bathroom|badkamer
living room|huiskamer
bed|bed
beds|bedden
table|tafel
chair|stoel
chairs|stoelen
desk|bureau
door|deur
doors|deuren
window|raam
windows|ramen
roof|dak
chimney|schoorsteen
wall|muur
floor|vloer
stairs|trap
fence|hek
bridge|brug
bridges|bruggen
street|straat
road|weg
roads|wegen
train|trein
trains|treinen
bus|bus
buses|bussen
car|auto
cars|auto's
truck|vrachtwagen
plane|vliegtuig
airplane|vliegtuig
aircraft|vliegtuig
boat|boot
boats|boten
ship|schip
bicycle|fiets
bike|fiets
motorcycle|motorfiets
traffic|verkeer
station|station
airport|luchthaven
flight|vlucht
flights|vluchten
travel|reizen
journey|reis
trip|reis
transport|vervoer
transportation|vervoer
vehicle|voertuig
vehicles|voertuigen
wheel|wiel
wheels|wielen
umbrella|paraplu
hat|hoed
hats|hoeden
shoe|schoen
shoes|schoenen
shirt|shirt
jacket|jas
coat|jas
sweater|trui
socks|sokken
sock|sok
glove|handschoen
gloves|handschoenen
scarf|sjaal
bag|tas
bags|tassen
backpack|rugzak
suitcase|koffer
notebook|schrift
pen|pen
pencil|potlood
pencils|potloden
ruler|liniaal
eraser|gum
phone|telefoon
telephone|telefoon
computer|computer
smartphone|smartphone
screen|scherm
screens|schermen
keyboard|toetsenbord
mouse|muis
headphones|koptelefoon
camera|camera
picture|plaatje
pictures|afbeeldingen
photo|foto
photograph|foto
photos|foto's
photographs|foto's
clock|klok
watch|horloge
watches|horloges
candle|kaars
fire|vuur
flame|vlam
fireworks|vuurwerk
lamp|lamp
light bulb|gloeilamp
lightning|bliksem
thunder|donder
storm|storm
wind|wind
weather|weer
rainbow|regenboog
volcano|vulkaan
lava|lava
earthquake|aardbeving
flood|overstroming
iceberg|ijsberg
smoke|rook
safety|veiligheid
safe|veilig
warm|warm
hot|heet
cold|koud
freezing|bevriezend
frozen|bevroren
melt|smelten
melting|smelten
boil|koken
boiling|koken
evaporate|verdampen
evaporation|verdamping
condensation|condensatie
water cycle|waterkringloop
formation|vorming
formed|gevormd
form|vormen
supply|voorraad
supplies|benodigdheden
use|gebruiken
uses|gebruikt
used|gebruikt
using|gebruiken
contains|bevat
contain|bevatten
consists|bestaat
consist|bestaan
made of|gemaakt van
made from|gemaakt uit
belongs to|hoort bij
belongs|behoort
comes from|komt van
comes after|komt na
comes before|komt voor
becomes|wordt
became|werd
goes|gaat
go|gaan
went|ging
moves|beweegt
move|bewegen
travels|reist
travel|reizen
is located|ligt
located|gelegen
lies|ligt
runs|stroomt
flows|stroomt
rises|komt op
sets|gaat onder
rotates|draait
orbits|draait om
follows|volgt
followed|volgde
lands|landt
landed|landde
hits|raakt
hit|raakte
dies|sterft
died|stierf
born|geboren
birth|geboorte
discovered|ontdekte
founded|stichtte
ruled|heerste
led|leidde
served|diende
signed|tekende
ended|eindigde
began|begon
started|begon
took|nam
brought|bracht
gave|gaf
wore|droeg
built|bouwde
created|maakte
introduced|introduceerde
invented|vond uit
explained|verklaarde
proved|bewees
published|publiceerde
wrote|schreef
painted|schilderde
composed|componeerde
directed|regisseerde
acted|speelde
performed|trad op
sang|zong
played|speelde
won|won
lost|verloor
grew|groeide
grown|gegroeid
knew|wist
known|bekend
seen|gezien
saw|zag
heard|hoorde
read|gelezen
said|zei
told|vertelde
thought|dacht
believed|geloofde
believe|geloven
think|denken
thinks|denkt
knows|weet
know|weten
finds|vindt
found|vond
feels|voelt
felt|voelde
looks|lijkt
seems|lijkt
appear|verschijnen
appears|verschijnt
shown|getoond
shows|toont
shown in|te zien in
shown on|te zien op
`;

const TERMS = new Map();
for (const line of TERMS_RAW.trim().split('\n')) {
  const pos = line.indexOf('|');
  if (pos > 0) TERMS.set(line.slice(0,pos).toLowerCase(), line.slice(pos+1));
}

const EXTRA_RAW = `active|actieve
inactive|niet-actieve
both|beide
previous|vorige
beginning|beginnend
beginning with|beginnend met
starting with|beginnend met
starting letter|beginletter
starting letters|beginletters
take|neem
takes|neemt
taken|genomen
take turns|wissel elkaar af
alternately|om de beurt
alternate|wissel af
alternating|afwisselend
as many as possible|zo veel mogelijk
as many|zo veel
as possible|mogelijk
many|veel
much|veel
few|weinig
at least|minstens
at most|hoogstens
exactly once|precies één keer
once|één keer
twice|twee keer
three times|drie keer
times|keer
everyone|iedereen
everybody|iedereen
someone|iemand
anyone|iemand
nobody|niemand
no one|niemand
neither|geen van beide
either|een van beide
separately|apart
separate|apart
distinct|verschillende
non-repeated|zonder dubbelen
repeated|herhaalde
repeating|herhalen
repeats|herhalingen
no repeats|niet herhalen
fixed target|vast doel
minimum|minimum
quota|minimumaantal
no minimum|geen minimum
version|versie
versions|versies
original|origineel
other team|ander team
another team|een ander team
team member|teamlid
teammate|teamgenoot
teammates|teamgenoten
same category|dezelfde categorie
category|categorie
categories|categorieën
items|dingen
item|ding
itemized|opgesomd
list|lijst
lists|lijsten
list of|lijst met
clue list|lijst met aanwijzingen
word list|woordenlijst
digit sequence|cijferreeks
sequence|reeks
sequences|reeksen
letter sequences|letterreeksen
card|kaart
cards|kaarten
game card|spelkaart
game-card|spelkaart
secret card|geheime kaart
text card|tekstkaart
the reference|het voorbeeld
reference|voorbeeld
on the card|op de kaart
from the card|van de kaart
memory|geheugen
remembered|onthouden
memorize|onthouden
preview|voorbeeld bekijken
viewing|bekijken
reveal|tonen
revealing|het openen
before revealing|voordat je de kaart opent
before showing|voordat je toont
before opening|voordat je opent
open the card|open de kaart
open card|open de kaart
hide the card|verberg de kaart
show the card|toon de kaart
reopen|opnieuw openen
re-view|opnieuw bekijken
same card|dezelfde kaart
first guess|eerste gok
guess|raad
guessed|geraden
guesses|raadt
guessing|raden
competing|strijdend
competition|wedstrijd
neutral|neutraal
judge|beoordelaar
judging|beoordelen
checked|gecontroleerd
checkers|controleurs
judge fairly|oordeel eerlijk
consensus|overeenstemming
third team|derde team
first to|als eerste
first place|eerste plaats
second place|tweede plaats
third place|derde plaats
in a row|achter elkaar
clockwise|met de klok mee
counterclockwise|tegen de klok in
reply|antwoord
replies|antwoorden
responses|reacties
response|reactie
spoke|sprak
say aloud|zeg hardop
no main clock|geen hoofdtimer
main clock|hoofdtimer
no timer|geen timer
no clock|geen timer
clock needed|timer nodig
clock runs|timer loopt
clock finishes|timer afloopt
timer ends|timer afloopt
clock ends|timer afloopt
time|tijd
time out|tijd voorbij
time's up|tijd voorbij
within|binnen
in time|op tijd
on time|op tijd
too late|te laat
early|vroeg
late|laat
longer than|langer dan
shorter than|korter dan
throughout|gedurende
entire|hele
whole|hele
all the|alle
full|volledig
whole story|heel het verhaal
connected|samenhangend
consecutive|opeenvolgende
continuing|voortgaand
finish line|finishlijn
shared|gedeeld
allowing|waarbij
allowed|toegestaan
while|terwijl
when|wanneer
before|voordat
after|nadat
if|als
then|dan
unless|tenzij
otherwise|anders
whether|of
because|omdat
as|als
for each|voor elke
per|per
again|opnieuw
earn|verdienen
earns|verdient
earned|verdiend
awards|levert op
award|prijs
prize|prijs
prizes|prijzen
winning team|winnend team
losing team|verliezend team
active team|actief team
active player|actieve speler
defending team|verdedigend team
defending player|verdedigende speler
defender's|van de tegenstander
players'|van de spelers
teams'|van de teams
one point|één punt
no point|geen punt
blocked|tegengehouden
blocks|houdt tegen
block|tegenhouden
more than|meer dan
less than|minder dan
more correct|meer goed
same amount|evenveel
more answers|meer antwoorden
zero|nul
mistakes|fouten
errors|fouten
error|fout
wrong guess|foute gok
wrong first|foute eerste
make mistakes|fouten maken
no mistakes|geen fouten
without mistakes|zonder fouten
no errors|geen fouten
all correct|alles goed
correctly|goed
incorrectly|fout
correct answer|goed antwoord
right answer|goed antwoord
wrong answer|fout antwoord
right|juist
wrong|fout
how to|hoe je
how to win|hoe win je
instructions|instructies
instruction|instructie
rules|regels
rule|regel
switch rules|wissel van regel
switching|wisselen
reaction|reactie
reaction rules|reactieregels
react|reageren
odd|oneven
even|even
odd number|oneven getal
even number|even getal
jump|spring
clap|klap
touch|raak aan
shoulder|schouder
ground|grond
hands|handen
feet|voeten
body parts|lichaamsdelen
face expressions|gezichtsuitdrukkingen
facial expressions|gezichtsuitdrukkingen
laugh|lachen
laughs|lacht
smile|glimlachen
smiles|glimlacht
joke|grap
jokes|grappen
funny|grappig
humorous|grappig
goofy|gek
situations|situaties
situation|situatie
headline|krantenkop
headlines|krantenkoppen
maximum|maximaal
minimum|minimaal
no more than|niet meer dan
upper|bovenste
lower|onderste
top|bovenkant
bottom|onderkant
above|boven
below|onder
first sentence|eerste zin
sentences|zinnen
sentence|zin
story theme|verhaalthema
themes|thema's
theme|thema
connected story|doorlopend verhaal
drawing list|tekenlijst
draw one scene|teken één scène
draw one picture|teken één afbeelding
include|voeg toe
includes|bevat
included|toegevoegd
add|voeg toe
at the top|bovenaan
at the bottom|onderaan
left|links
right|rechts
center|midden
central|midden
middle|midden
in the middle|in het midden
front|voor
back|achter
behind|achter
next to|naast
beside|naast
opposite|tegenover
inside|binnen
outside|buiten
outdoors|buiten
underneath|onder
upright|rechtop
upside down|ondersteboven
holding|vasthoudend
hold|vasthouden
hold up|houd omhoog
figure|figuur
figures|figuren
feature|detail
features|details
requested|gevraagde
requirement|vereiste
requirements|vereisten
recognizable|herkenbaar
recognizably|herkenbaar
recognize|herkennen
recognizes|herkent
private|privé
privately|apart
secret|geheim
secrets|geheimen
clues|aanwijzingen
clue|aanwijzing
puzzle|puzzel
puzzles|puzzels
code|code
codes|codes
coded|gecodeerd
decode|ontcijfer
decoding|ontcijferen
encoded|gecodeerd
pattern|patroon
patterns|patronen
anagram|anagram
word game|woordspel
rhyme|rijm
rhymes|rijmwoorden
rhyming|rijmend
rhyme with|rijm op
near-rhymes|bijna-rijmen
exact rhymes|echte rijmen
ending sounds|eindklanken
ending sound|eindklank
ending|einde
endings|uitgangen
sound|geluid
sounds|geluiden
sound alike|klinken hetzelfde
pronounced|uitgesproken
pronunciation|uitspraak
vowel|klinker
vowels|klinkers
consonant|medeklinker
consonants|medeklinkers
letter|letter
letters|letters
word|woord
words|woorden
syllable|lettergreep
syllables|lettergrepen
synonym|synoniem
synonyms|synoniemen
means|betekent
meaning|betekenis
expression|uitdrukking
expressions|uitdrukkingen
phrase|zin
phrases|zinnen
phrase with|zin met
alliterative|allitererend
alliteration|alliteratie
rebus|rebus
secret word|geheim woord
secret words|geheime woorden
clue answer|antwoord op de aanwijzing
extracted letters|gevonden letters
extracted|gevonden
ignore|negeer
ignoring|negerend
spaces|spaties
space|spatie
punctuation|leestekens
punctuation marks|leestekens
numbered|genummerde
index|positie
position|positie
positions|posities
number|nummer
letter number|letternummer
from top to bottom|van boven naar beneden
from the top|van boven
bottom to top|van beneden naar boven
full name|volledige naam
full answer|volledig antwoord
all the letters|alle letters
full list|volledige lijst
before time runs out|voordat de tijd om is
when time runs out|als de tijd om is
when time expires|als de tijd om is
after time expires|nadat de tijd voorbij is
before 150 seconds expire|binnen 150 seconden
within 150 seconds|binnen 150 seconden
150-second timer|timer van 150 seconden
60-second timer|timer van 60 seconden
30-second timer|timer van 30 seconden
25-second memory|25 seconden onthouden
20-second memory|20 seconden onthouden
90 seconds|90 seconden
60 seconds|60 seconden
30 seconds|30 seconden
25 seconds|25 seconden
20 seconds|20 seconden
150 seconds|150 seconden
10 seconds|10 seconden
five seconds|vijf seconden
5 seconds|5 seconden
three seconds|drie seconden
one minute|één minuut
one hour|één uur
one day|één dag
one year|één jaar
first person|eerste persoon
woman|vrouw
man|man
people|mensen
person|persoon
first woman|eerste vrouw
first man|eerste man
mainly|vooral
mostly|vooral
especially|vooral
famous for|beroemd om
well known for|bekend om
best known for|vooral bekend om
featured|kwam voor in
features|komt voor in
feature|komt voor
stars|sterren
starring|met in de hoofdrol
shows|toont
show|programma
shown|te zien
animated movie|animatiefilm
animated film|animatiefilm
cartoon|tekenfilm
live-action|met echte acteurs
fairy tale|sprookje
fairy-tale|sprookjes-
character|personage
characters|personages
movie series|filmreeks
film series|filmreeks
series|reeks
main character|hoofdpersonage
main villain|hoofdschurk
villain|schurk
hero|held
princess|prinses
queen|koningin
king|koning
robot|robot
clownfish|anemoonvis
lost|verdwaalde
girl|meisje
boy|jongen
old man|oude man
old woman|oude vrouw
named|met de naam
called|genaamd
name of|naam van
with the name|met de naam
controlled|bestuurde
controls|bestuurt
control|besturen
save|redden
saved|gered
saving|redden
flies|vliegt
flying|vliegend
fly|vliegen
sailing|zeilend
sails|zeilt
balloons|ballonnen
balloon|ballon
sail|zeilen
kingdom|koninkrijk
kingdoms|koninkrijken
wear|dragen
wore|droeg
wearing|dragend
hat|hoed
crown|kroon
royal|koninklijk
rides|rijdt
ride|rijden
rode|reed
horse|paard
horses|paarden
car|auto
cars|auto's
before cars|voor auto's
before airplanes|vóór vliegtuigen
long before|lang voor
yesterday|gisteren
tomorrow|morgen
lived|leefde
live|leven
living|levend
alive|in leven
long ago|lang geleden
before us|voor ons
ancestors|voorouders
past or future|verleden of toekomst
future or past|toekomst of verleden
older than|ouder dan
younger than|jonger dan
first landed|landde als eerste
landed|landde
walked|liep
walk|lopen
walking|lopend
walks|loopt
walking on|lopend op
on the Moon|op de maan
on Mars|op Mars
on Earth|op aarde
space mission|ruimtemissie
mission|missie
land on|landen op
travelled|reisde
traveled|reisde
sank|zonk
sink|zinken
sinking|zinken
struck|raakte
hitting|raken
hit|raakte
iceberg|ijsberg
mountain|berg
mountains|bergen
volcano|vulkaan
volcanic|vulkanisch
buried|begraven
buried by|bedolven onder
buried in|begraven in
fell|viel
fall|vallen
falling|vallend
falls|valt
fall down|naar beneden vallen
came first|kwam eerder
earlier|eerder
first|eerste
later|later
last|laatste
still|nog steeds
used for|gebruikt voor
used to|vroeger
automobile|auto
before the|voor de
without|zonder
lightning|bliksem
thunder|donder
storm|storm
thunderstorm|onweer
rain|regen
rains|regent
water|water
freeze|bevriezen
freezes|bevriest
freezing|bevriezen
boils|kookt
boiling|koken
evaporating|verdampen
liquid|vloeistof
gas|gas
solid|vaste stof
physical change|natuurkundige verandering
change|verandering
changes|veranderingen
changed|veranderd
temperature|temperatuur
at sea level|op zeeniveau
sea level|zeeniveau
ordinary room temperature|gewone kamertemperatuur
room temperature|kamertemperatuur
snow and ice|sneeuw en ijs
sky|lucht
night|nacht
day|dag
star|ster
planet|planeet
planets|planeten
solar system|zonnestelsel
red planet|rode planeet
sun|zon
moon|maan
earth|aarde
water|water
sunlight|zonlicht
daylight|daglicht
light|licht
bright|helder
dark|donker
green|groen
red|rood
blue|blauw
yellow|geel
purple|paars
white|wit
black|zwart
pink|roze
brown|bruin
orange|oranje
silver|zilver
gold|goud
first president|eerste president
president|president
ruler|heerser
rulers|heersers
reign|regeringsperiode
ruled|regeerde
prime minister|premier
in office|in functie
independence movement|onafhankelijkheidsbeweging
independence|onafhankelijkheid
independent|onafhankelijk
signed|ondertekende
sealing|bekrachtigen
sealed|bekrachtigde
emancipation|emancipatie
civil rights|burgerrechten
civil-rights|burgerrechten-
famous speech|beroemde toespraak
speech|toespraak
speeches|toespraken
movement|beweging
movements|bewegingen
world war|wereldoorlog
world war i|Eerste Wereldoorlog
world war ii|Tweede Wereldoorlog
first world war|Eerste Wereldoorlog
second world war|Tweede Wereldoorlog
great wall|Chinese Muur
wall|muur
walls|muren
trade network|handelsnetwerk
trade|handel
traders|handelaren
revolution|revolutie
protest|protest
protested|protesteerde
protests|protesten
war|oorlog
wars|oorlogen
peace|vrede
peace treaty|vredesverdrag
peace treaties|vredesverdragen
treaty|verdrag
treaties|verdragen
battle|veldslag
battles|veldslagen
naval battle|zeeslag
army|leger
soldier|soldaat
soldiers|soldaten
military|militair
military training|militaire training
training|training
trained|getraind
victory|overwinning
victories|overwinningen
conquest|verovering
conquered|veroverde
defeated|versloeg
defeat|verslaan
lasted|duurde
last|laatste
began|begon
begun|begonnen
begin|beginnen
ended|eindigde
end|einde
ends|eindigt
founded|stichtte
founded by|gesticht door
founder|oprichter
founded in|opgericht in
reform|hervorming
reforms|hervormingen
unified|verenigde
unification|eenwording
unite|verenigen
united|verenigd
ruler of|heerser van
rule of|heerschappij van
led|leidde
leader|leider
leaders|leiders
became|werd
become|worden
power|macht
came to power|kwam aan de macht
took power|greep de macht
powerful|machtig
forced|dwong
forcing|dwingen
in what year|in welk jaar
in which year|in welk jaar
what year|welk jaar
in which century|in welke eeuw
which century|welke eeuw
what century|welke eeuw
what date|welke datum
which date|welke datum
how long ago|hoe lang geleden
ancient|oud
medieval|middeleeuws
modern|modern
historical|historisch
history|geschiedenis
historian|historicus
archaeologist|archeoloog
archaeologists|archeologen
archaeology|archeologie
old objects|oude voorwerpen
objects|voorwerpen
object|voorwerp
ruins|ruïnes
relic|relikwie
relics|relikwieën
artifact|archeologisch voorwerp
artifacts|archeologische voorwerpen
old kingdoms|oude koninkrijken
old empires|oude rijken
empires|rijken
empire|rijk
dynasty|dynastie
dynasties|dynastieën
queen|koningin
king|koning
knight|ridder
knights|ridders
castle|kasteel
castles|kastelen
armor|harnas
crown|kroon
pyramids|piramides
pyramid|piramide
colosseum|Colosseum
roman|Romeins
romans|Romeinen
egyptian|Egyptisch
egyptians|Egyptenaren
greek|Grieks
greeks|Grieken
roman empire|Romeinse Rijk
ancient egypt|het oude Egypte
`;
for (const line of EXTRA_RAW.trim().split('\n')) { const n=line.indexOf('|'); if(n>0) TERMS.set(line.slice(0,n).toLowerCase(),line.slice(n+1)); }

// Proper names and original media titles must not be translated word by word.
// Players should be able to recognize the official name as well as the answer.
const PROTECTED_NAMES = [
  'Finding Nemo','Frozen','Toy Story','The Lion King','Star Wars','Home Alone',
  'Snow White and the Seven Dwarfs','The Wizard of Oz','Despicable Me','Inside Out',
  'Harry Potter','Black Panther','The Hunger Games','Lord of the Rings',
  'The Lord of the Rings','The Little Mermaid','The Simpsons','Game of Thrones',
  'Breaking Bad','Stranger Things','The Office','The Crown','House of the Dragon',
  'The Hobbit','The Beatles','The Rolling Stones','One Direction',
  'Pride and Prejudice','Animal Farm','The Metamorphosis',
  'One Hundred Years of Solitude','The Great Gatsby','The Catcher in the Rye',
  'The Old Man and the Sea','A Tale of Two Cities','To Kill a Mockingbird',
  'The Sound of Music','Mary Poppins','Moana','Cinderella','SpongeBob SquarePants',
  'The Godfather','The Matrix','The Dark Knight','The Avengers',
  'Beauty and the Beast','The Little Prince','The Last Supper',
  'The Starry Night','The Persistence of Memory','Mona Lisa','Guernica',
  'Romeo and Juliet','Hamlet','Macbeth','Othello','King Lear',
  'Titanic','Bambi','Shrek','Cars','Up','Paddington','Minions','Hogwarts',
  'Bohemian Rhapsody','Imagine','Thriller','Let It Be','Hey Jude',
  'Happy Birthday','Yesterday','Billie Jean','Like a Rolling Stone',
  'I Have a Dream', 'New York', 'South Africa', 'North America',
].sort((a,b)=>b.length-a.length);

const BRAND_PROTECTED = new RegExp('(?<![\\p{L}])('+ PROTECTED_NAMES.map(v=>v.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|') + ')(?![\\p{L}])','giu');
// A large number of answers have articles (A king, A knight, ...).
// Keeping their article in ordinary title case avoids rendering EEN.
const VERB_PHRASES = {
  'did not':'niet','does not':'niet','do not':'niet',
};

// Natural verbs, typical game actions and short answers found in the original packs.
const POLISH_RAW = `yes|ja
no|nee
none|geen
crown|kroon
pilots|piloten
bakers|bakkers
divers|duikers
french|Franse
organism|organisme
remains|resten
traces|sporen
things|dingen
toy|speelgoed
some|enkele
someone|iemand
anything|iets
many|veel
children|kinderen
child|kind
kingdoms|koninkrijken
knights|ridders
bricks|bakstenen
brick|bakstenen
road|weg
follows|volgt
following|volgend
climbs|klimt
climbing|klimmen
dwarfs|dwergen
dwarf|dwerg
fairy-tale|sprookjes
old-fashioned|ouderwets
wear|dragen
wore|droeg
worn|gedragen
riding|fietsen
ride|rijden
rode|reed
sailors|zeelieden
sailed|voer
sailing|varen
does|doet
did|deed
studies|bestudeert
study|studie
studied|bestudeerde
built|bouwde
building|bouwen
keeping|bewaren
keep|bewaren
found|vonden
usually|meestal
famous|bekend
rather|eerder
see|zien
seen|gezien
airplanes|vliegtuigen
motorcars|auto's
invented|uitgevonden
organisms|organismen
beyond|voorbij
around|rond
called|genoemd
which|welke
features|speelt mee
appears|komt voor
starred|speelde in
characters|personages
movie|film
movies|films
animated|animatie-
lost|verdwaalde
left|achtergelaten
away|weg
young|jonge
ancient|oude
queen|koningin
king|koning
picture|afbeelding
toys|speelgoed
colors|kleuren
colour|kleur
color|kleur
cup|beker
kite|vlieger
box|doos
floor|vloer
jumping|springen
walking|lopen
sitting|zitten
laughing|lachen
crying|huilen
waving|zwaaien
sleeping|slapen
eating|eten
drinking|drinken
clapping|klappen
brushing|poetsen
washing|wassen
throwing|gooien
opening|openen
reading|lezen
hugging|knuffelen
kicking|schoppen
dancing|dansen
shivering|rillen
flying|vliegen
blowing|blazen
climbing|klimmen
tying|strikken
feeding|voeren
watering|water geven
playing|spelen
catching|vangen
sweeping|vegen
making|maken
looking|kijken
sneaking|sluipen
skipping|huppelen
juggling|jongleren
building|bouwen
thinking|nadenken
sleep|slapen
secret actions|GEHEIME HANDELINGEN
secret action|GEHEIME HANDELING
secret words|GEHEIME WOORDEN
study for|BEKIJK GEDURENDE
higher than|HOGER DAN
lower than|LAGER DAN
caller|VOORLEZER
read one number every|LEES ELKE
numbers|GETALLEN
number|GETAL
odd|ONEVEN
even|EVEN
jump|SPRING
clap|KLAP
touch your shoulder|RAAK JE SCHOUDER AAN
touch the ground|RAAK DE GROND AAN
touch|RAAK AAN
no mistakes|GEEN FOUTEN
needed|nodig
count|tel
write as many|schrijf zo veel mogelijk
as possible|op
world|wereld
protect|beschermen
first name|voornaam
what kind of|wat voor soort
race car|raceauto
comic book|stripboek
ocean-voyaging|zeevarende
heroine|heldin
accidentally|per ongeluk
left behind|achtergelaten
school|school
fictional|fictieve
weapon|wapen
glows|gloeit
used for|gebruikt voor
float|zweven
through the air|door de lucht
through|door
left behind|achtergelaten
scenery|landschap
words|woorden
word|woord
floats|zweeft
help|helpen
small|kleine
little|kleine
including|waaronder
glass slipper|glazen muiltje
slipper|muiltje
nanny|kinderjuffrouw
fossil|fossiel
trace|spoor
A kingdom|een koninkrijk
secret drawing list|GEHEIME TEKENOPDRACHTEN
how many|hoeveel
what color|welke kleur
who was|wie was
in which|in welke
where is|waar ligt
when was|wanneer was
what do we call|hoe noemen we
what do you call|hoe noem je
what does|wat doet
what did|wat deed
which city|welke stad
which country|welk land
which instrument|welk instrument
which planet|welke planeet
which animal|welk dier
which part|welk onderdeel
which organ|welk orgaan
which element|welk element
`;
for(const line of POLISH_RAW.trim().split('\n')){const n=line.indexOf('|');if(n>0)TERMS.set(line.slice(0,n).toLowerCase(),line.slice(n+1));}

const EXTENDED_RAW = `by|door
of|van
about|over
on|op
into|in
there|er
while|terwijl
itself|zichzelf
themselves|zichzelf
their|hun
his|zijn
her|haar
its|zijn
afterwards|daarna
commonly|vaak
commonly used|veelgebruikt
traditionally|traditioneel
traditional|traditionele
standard|standaard
work|werk
working|werken
part|deel
parts|delen
involves|bestaat uit
involved|betrokken
involves playing|speel je met
major|belangrijke
minor|kleine
term|term
terms|termen
event|evenement
events|evenementen
celebration|viering
celebrated|gevierd
ceremony|ceremonie
holiday|feestdag
holidays|feestdagen
festivals|festivals
festival|festival
cultural|culturele
culture|cultuur
technique|techniek
released|uitgebracht
release|uitgave
recording|opname
recorded|opgenomen
depicts|beeldt af
depicted|afgebeeld
represent|vertegenwoordigen
represents|staat voor
primarily|voornamelijk
scoring|punten maken
score|score
scores|scores
system|systeem
systems|systemen
meters|meters
meter|meter
strings|snaren
string|snaar
keys|toetsen
key|toets
singer|zanger
singers|zangers
musician|muzikant
musicians|muzikanten
music|muziek
instruments|instrumenten
instrument|instrument
piano|piano
guitar|gitaar
violin|viool
trumpet|trompet
flute|dwarsfluit
harp|harp
keyboard|toetsenbord
flared|uitlopende
valves|ventielen
brass|koperen
bow|strijkstok
chin|kin
skins|vellen
skin|vel
stretched|gespannen
stays|blijft
stayed|bleef
held|gehouden
hold|vasthouden
breathed|ingeademd
breathe|ademen
breathes|ademt
breathing|ademhaling
fill|vullen
filling|vullen
fills|vult
filled|gevuld
sank|zonk
sunk|gezonken
hitting|botsen tegen
hit|botsen tegen
sinking|zinken
sinks|zinkt
steps|stappen
step|stap
during|tijdens
famous for|beroemd vanwege
famous|beroemd
known for|bekend om
known|bekend
related to|gerelateerd aan
relates to|heeft te maken met
associated with|verbonden met
called the|de naam
says|zegt
say|zeggen
speaks|spreekt
spoke|sprak
speaking|spreken
said|zei
lived|leefden
lives|leeft
live|leven
living|levende
lives in|woont in
born|geboren
women|vrouwen
woman|vrouw
men|mannen
man|man
country|land
countries|landen
capital|hoofdstad
continents|werelddelen
continent|werelddeel
north|noord
south|zuid
east|oost
west|west
west of|ten westen van
east of|ten oosten van
north of|ten noorden van
south of|ten zuiden van
island|eiland
islands|eilanden
mountain|berg
mountains|bergen
forest|bos
forests|bossen
river|rivier
rivers|rivieren
lakes|meren
lake|meer
oceans|oceanen
ocean|oceaan
salty|zout
body of water|wateroppervlak
water|water
sea|zee
ground|grond
channel|waterloop
surrounded by|omgeven door
surrounded|omgeven
flowing|stromend
flows|stroomt
flow|stromen
wet|nat
dry|droog
height|hoogte
wide|breed
long|lang
area|oppervlakte
high|hoog
tall|hoog
large|groot
very large|heel groot
very|heel
tiny|piepklein
little|kleine
small|klein
big|groot
giant|reusachtig
round|rond
shape|vorm
shapes|vormen
size|grootte
sizes|groottes
largest|grootste
smallest|kleinste
highest|hoogste
lowest|laagste
amount|hoeveelheid
quantity|hoeveelheid
weight|gewicht
weighs|weegt
weigh|wegen
than|dan
more|meer
less|minder
most|meeste
few|weinig
ancient|oude
modern|moderne
old|oude
new|nieuwe
young|jonge
historic|historisch
historical|historische
history|geschiedenis
museum|museum
objects|voorwerpen
object|voorwerp
ruins|ruïnes
archaeology|archeologie
art|kunst
arts|kunsten
artistic|artistieke
artist|kunstenaar
artwork|kunstwerk
painting|schilderij
painted|geschilderd
paint|verf
paints|verft
painter|schilder
draw|tekenen
drawing|tekening
draws|tekent
illustration|illustratie
illustrator|illustrator
illustrated|geïllustreerd
picture|afbeelding
pictures|afbeeldingen
image|afbeelding
images|afbeeldingen
clay|klei
decorative|decoratieve
lacquer|lakwerk
ceramics|keramiek
sculpture|beeldhouwwerk
sculptures|beelden
material|materiaal
materials|materialen
piece|stuk
pieces|stukken
literature|literatuur
book|boek
books|boeken
poem|gedicht
poetry|poëzie
poet|dichter
novel|roman
story|verhaal
stories|verhalen
fairy-tale|sprookjes
fable|fabel
novelist|romanschrijver
writer|schrijver
writes|schrijft
written|geschreven
write|schrijven
read|lezen
reads|leest
reading|lezen
made|gemaakt
make|maken
makes|maakt
making|maken
used|gebruikt
use|gebruiken
using|met
uses|gebruikt
purpose|doel
useful|nuttig
able|in staat
cannot|kan niet
can|kan
could|kon
should|moet
must|moet
have|hebben
has|heeft
had|had
were|waren
was|was
being|die
are|zijn
is|is
and|en
or|of
not|niet
only|alleen
where|waar
who|wie
what|wat
which|welke
when|wanneer
why|waarom
how|hoe
several|verschillende
some|enkele
other|ander
others|anderen
one|één
a|een
an|een
the|de
you|je
your|je
we|we
our|ons
people|mensen
person|persoon
everybody|iedereen
everyone|iedereen
someone|iemand
whoever|wie dan ook
students|studenten
student|student
children|kinderen
child|kind
kingdoms|koninkrijken
kingdom|koninkrijk
castles|kastelen
castle|kasteel
crown|kroon
crowns|kronen
queen|koningin
king|koning
royal|koninklijke
imperial|keizerlijke
emperor|keizer
founder|oprichter
founded|stichtte
fought|vocht
war|oorlog
wars|oorlogen
battle|veldslag
battles|veldslagen
fought a war|voerde oorlog
army|leger
soldiers|soldaten
soldier|soldaat
military|militaire
died|overleed
die|sterven
was born|werd geboren
first|eerste
last|laatste
began|begon
begins|begint
beginning|begin
ends|eindigt
end|einde
second|tweede
third|derde
fourth|vierde
fifth|vijfde
half|helft
quarter|kwart
century|eeuw
decade|decennium
current|huidige
previous|vorige
next|volgende
before|voor
after|na
later|later
earlier|eerder
hour|uur
hours|uur
minute|minuut
minutes|minuten
second|seconde
seconds|seconden
day|dag
days|dagen
month|maand
months|maanden
year|jaar
years|jaren
world|wereld
earth|aarde
sun|zon
moon|maan
stars|sterren
star|ster
planet|planeet
planets|planeten
space|ruimte
atmosphere|atmosfeer
atmospheric|atmosferische
layer|laag
layers|lagen
surface|oppervlak
sky|lucht
clouds|wolken
cloud|wolk
wind|wind
rain|regen
ice|ijs
snow|sneeuw
storm|storm
globe|wereldbol
compass|kompas
map|kaart
maps|kaarten
roots|wortels
root|wortel
plant|plant
plants|planten
flower|bloem
flowers|bloemen
petals|bloemblaadjes
leaf|blad
leaves|bladeren
fruit|fruit
fruits|fruit
vegetable|groente
vegetables|groenten
animals|dieren
animal|dier
mammals|zoogdieren
mammal|zoogdier
insects|insecten
insect|insect
spider|spin
spins|spint
web|web
bees|bijen
bee|bij
honey|honing
nectar|nectar
wool|wol
fur|vacht
feathers|veren
feather|veer
legs|poten
leg|poot
arms|armen
arm|arm
feet|voeten
foot|voet
hands|handen
hand|hand
face|gezicht
head|hoofd
neck|nek
body|lichaam
eyes|ogen
eye|oog
ears|oren
ear|oor
tail|staart
tails|staarten
heart|hart
lung|long
lungs|longen
stomach|maag
blood|bloed
organs|organen
organ|orgaan
bones|botten
bone|bot
muscle|spier
muscles|spieren
cells|cellen
cell|cel
sciences|wetenschappen
science|wetenschap
scientist|wetenschapper
scientists|wetenschappers
nature|natuur
natural|natuurlijke
chemical|chemische
chemistry|scheikunde
physics|natuurkunde
matter|materie
energy|energie
gases|gassen
gas|gas
oxygen|zuurstof
hydrogen|waterstof
carbon|koolstof
atom|atoom
atoms|atomen
molecule|molecuul
molecules|moleculen
geometry|meetkunde
mathematics|wiskunde
math|rekenen
squared|in het kwadraat
cubed|tot de derde macht
multiple|veelvoud
prime|priem
factor|factor
radius|straal
angle|hoek
angles|hoeken
side|zijde
sides|zijden
triangle|driehoek
square|vierkant
rectangle|rechthoek
circle|cirkel
shape|vorm
playing|spelen
played|gespeeld
play|spelen
sports|sporten
sport|sport
athletics|atletiek
athlete|atleet
athletes|atleten
team|team
teams|teams
player|speler
players|spelers
rackets|rackets
racket|racket
skates|schaatsen
helmet|helm
net|net
basket|basket
puck|puck
pool|zwembad
hoop|basket
bouncing|stuiterende
ball|bal
balls|ballen
baseball|honkbal
football|voetbal
soccer|voetbal
basketball|basketbal
swimming|zwemmen
running|hardlopen
jumping|springen
climbing|klimmen
skiing|skiën
skis|ski's
skates|schaatsen
hockey|hockey
gymnastics|turnen
cycling|fietsen
diving|schoonspringen
tennis|tennis
bat|knuppel
shuttlecock|shuttlecock
horse|paard
rider|ruiter
fences|hindernissen
mats|matten
medal|medaille
medals|medailles
Olympics|Olympische Spelen
Olympic|Olympisch
chopsticks|eetstokjes
recipe|recept
recipes|recepten
meal|maaltijd
food|eten
foods|etenswaren
cooking|koken
cooked|gekookt
cook|kok
dish|gerecht
dishes|gerechten
savory|hartig
sweet|zoet
sweets|snoep
dessert|dessert
bakery|bakkerij
baking|bakken
baked|gebakken
bread|brood
cake|taart
birthday|verjaardag
birthdays|verjaardagen
Christmas|Kerstmis
Easter|Pasen
Halloween|Halloween
calendar|kalender
festival|festival
celebration|feest
celebrated|gevierd
celebrate|vieren
ceremony|ceremonie
wedding|bruiloft
costumes|kostuums
costume|kostuum
parade|optocht
colorful|kleurrijke
painted|beschilderde
carved|uitgehold
lantern|lantaarn
pumpkin|pompoen
holiday|feestdag
holidays|feestdagen
singing|zingen
sings|zingt
sang|zong
song|lied
songs|liedjes
band|band
choir|koor
composer|componist
composed|componeerde
compose|componeren
conducts|dirigeert
conductor|dirigent
orchestra|orkest
orchestral|orkestrale
concert|concert
performance|optreden
performs|treedt op
performing|optreden
audience|publiek
rhythm|ritme
beat|maat
beats|tellen
notes|noten
note|noot
pitch|toonhoogte
melody|melodie
interval|interval
scale|toonladder
chord|akkoord
dance|dans
dances|danst
dancing|dansen
ballet|ballet
jazz|jazz
opera|opera
sound|geluid
sounds|geluiden
noise|lawaai
loud|hard
soft|zacht
softly|zacht
quiet|stil
quietly|zachtjes
silent|stil
silence|stilte
loudly|luid
fast|snel
slow|langzaam
speed|snelheid
quick|snel
frequently|vaak
usually|meestal
often|vaak
sometimes|soms
always|altijd
never|nooit
every|elke
each|elke
same|dezelfde
different|verschillende
first|eerste
last|laatste
next|volgende
between|tussen
through|door
toward|richting
out|uit
up|omhoog
down|omlaag
over|over
under|onder
above|boven
below|onder
inside|binnen
outside|buiten
behind|achter
across|over
along|langs
together|samen
apart|apart
single|enkel
both|beide
all|alle
none|geen
still|nog
already|al
here|hier
there|daar
now|nu
then|dan
example|voorbeeld
examples|voorbeelden
question|vraag
questions|vragen
answer|antwoord
answers|antwoorden
correct|goed
wrong|fout
right|juist
true|waar
false|onwaar
name|naam
named|genaamd
means|betekent
meaning|betekenis
mean|bedoelen
called|genoemd
label|label
word|woord
words|woorden
phrase|zin
phrases|zinnen
letter|letter
letters|letters
count|tellen
counting|tellen
number|getal
numbers|getallen
choose|kies
chosen|gekozen
pick|kiezen
picked|gekozen
decide|beslis
remember|onthoud
memorize|onthoud
write|schrijf
draw|teken
show|toon
shown|getoond
reveal|onthul
revealed|onthuld
hide|verberg
hidden|verborgen
start|begin
stop|stop
continue|ga door
finish|afronden
finished|afgerond
restart|opnieuw beginnen
reset|opnieuw instellen
wrong answer|fout antwoord
correct answer|goed antwoord
choose language|kies taal`;
for(const line of EXTENDED_RAW.trim().split('\n')){const n=line.indexOf('|');if(n>0)TERMS.set(line.slice(0,n).toLowerCase(),line.slice(n+1));}

const FINAL_RAW = `also|ook
worth|waard
title|titel
titles|titels
colored|gekleurde
tells|vertelt
clothing|kleding
air|lucht
describes|beschrijft
set|gesitueerd
group|groep
tradition|traditie
standard|standaard
president|president
rings|ringen
final|laatste
be|zijn
and|en
target|doel
kick|schoppen
main|belangrijkste
try|proberen
throw|gooien
rock|steen
rocks|stenen
freestyle|vrije slag
marathon|marathon
distance|afstand
developed|ontwikkelde
develop|ontwikkelen
direction|richting
particles|deeltjes
brothers|broers
serve|opslag
given|gegeven
political|politieke
commissioned|gaf opdracht voor
church|kerk
goalkeeper|doelman
metal|metaal
metals|metalen
runners|lopers
board|bord
route|route
rowers|roeiers
stroke|slag
fencing|schermen
disciplines|disciplines
perfect|perfect
holds|heeft
against|tegen
boundary|grens
creature|wezen
creatures|wezens
dreams|dromen
generations|generaties
arranged|gerangschikt
masked|gemaskerde
storytelling|verhalen vertellen
biblical|Bijbels
cuisine|keuken
state|staat
concept|begrip
larger|groter
relative|verwant
grows|groeit
electron|elektron
bond|binding
orbit|baan
quantum|kwantum
entropy|entropie
theorem|stelling
sculpted|gebeeldhouwd
novella|novelle
semitones|halve tonen
octave|octaaf
unfinished|onvoltooid
mode|modus
minimalist|minimalistisch
dinosaurs|dinosauriërs
stone|steen
stones|stenen
structures|bouwwerken
structure|bouwwerk
build|bouwen
built|bouwde
series|reeks
franchise|reeks
character|personage
characters|personages
starring|met in de hoofdrol
stars|speelt de hoofdrol
friendly|vriendelijke
ogre|oger
toy|speelgoed
doll|pop
disney|Disney
christmas|kerst
home alone|alleen thuis
colored|gekleurde
plate|bord
painted|geschilderde
collect|verzamelen
collects|verzamelt
gives|geeft
give|geven
given|gegeven
hear|horen
hearing|horen
shine|schijnen
shines|schijnt
shone|scheen
blow out|uitblazen
blow|blazen
hunt for|zoeken naar
hunt|zoeken
decorate|versieren
decorated|versierd
what are|wat zijn
what do|wat doen
what is|wat is
which are|welke zijn
have been|zijn geweest
used for|gebruikt voor
comes from|komt uit
related to|heeft te maken met`;
for(const line of FINAL_RAW.trim().split('\n')){const n=line.indexOf('|');if(n>0)TERMS.set(line.slice(0,n).toLowerCase(),line.slice(n+1));}

const TERM_KEYS = [...TERMS.keys()].sort((a,b)=>b.length-a.length);
const WORD_EXP = new RegExp('(?<![\\p{L}\\p{N}])(' + TERM_KEYS.map(s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|') + ')(?![\\p{L}\\p{N}])','giu');

// Human-edited card patterns. Most original topic trivia questions share
// recurring grammatical constructions, which these patterns translate fluently.
const FRAMES = [
  [/^Who was the first person to walk on the Moon\?$/i, ()=>'Wie was de eerste mens die op de maan liep?'],
  [/^What do you use to write or draw with graphite\?$/i, ()=>'Waarmee kun je schrijven of tekenen met grafiet?'],
  [/^Which animated movie features a lost clownfish called Nemo\?$/i, ()=>'In welke animatiefilm is een verdwaalde anemoonvis te zien die Nemo heet?'],
  [/^Write as many (.+?) as possible\.$/i, m=>`Schrijf zo veel mogelijk ${gloss(m[1])} op.`],
  [/^NAME (\d+) (.+?)\.$/i, m=>`NOEM ${m[1]} ${gloss(m[2])}.`],
  [/^EXAMPLE \(COUNTS AS ONE\): (.+?)\.$/i, m=>`VOORBEELD (TELT MEE): ${gloss(m[1])}.`],
  [/^NAME (\d+) MORE\.$/i, m=>`NOEM NOG ${m[1]}.`],
  [/^What do you call (.+?)\?$/i, m=>`Hoe noem je ${gloss(m[1])}?`],
  [/^What do we call (.+?)\?$/i, m=>`Hoe noemen we ${gloss(m[1])}?`],
  [/^What do you use to (.+?)\?$/i, m=>`Wat gebruik je om ${gloss(m[1])}?`],
  [/^What do you wear on (.+?)\?$/i, m=>`Wat draag je aan ${gloss(m[1])}?`],
  [/^What do you put on when (.+?)\?$/i, m=>`Wat trek je aan als ${gloss(m[1])}?`],
  [/^What did (.+?) use to (.+?)\?$/i, m=>`Wat gebruikten ${gloss(m[1])} om ${gloss(m[2])}?`],
  [/^What did (.+?) often wear to protect themselves\?$/i, m=>`Wat droegen ${gloss(m[1])} vaak om zichzelf te beschermen?`],
  [/^What did (.+?) ride before (.+?)\?$/i, m=>`Waarop reden ${gloss(m[1])} voordat ${gloss(m[2])}?`],
  [/^What did (.+?) wear (.+?)\?$/i, m=>`Wat droegen ${gloss(m[1])} ${gloss(m[2])}?`],
  [/^Which (.+?) features (.+?)\?$/i, m=>`In welke ${gloss(m[1])} komt ${gloss(m[2])} voor?`],
  [/^Which (.+?) tells the story of (.+?)\?$/i, m=>`Welke ${gloss(m[1])} vertelt het verhaal van ${gloss(m[2])}?`],
  [/^Which country has (.+?) as its capital\?$/i, m=>`Van welk land is ${gloss(m[1])} de hoofdstad?`],
  [/^Which country has (.+?) as its (.+?) capital\?$/i, m=>`Van welk land is ${gloss(m[1])} de ${gloss(m[2])} hoofdstad?`],
  [/^Which country has (.+?)\?$/i, m=>`Welk land heeft ${gloss(m[1])}?`],
  [/^Which (.+?) has (.+?)\?$/i, m=>`Welke ${gloss(m[1])} heeft ${gloss(m[2])}?`],
  [/^Which country has the city of (.+?)\?$/i, m=>`In welk land ligt de stad ${gloss(m[1])}?`],
  [/^Which country (.+?)\?$/i, m=>`Welk land ${gloss(m[1])}?`],

  [/^Which part of (.+?) do you hear with\?$/i, m=>`Met welk deel van ${gloss(m[1])} hoor je?`],
  [/^Which part of (.+?) usually develops into (.+?)\?$/i, m=>`Welk deel van ${gloss(m[1])} groeit gewoonlijk uit tot ${gloss(m[2])}?`],
  [/^Which part of (.+?) (.+?)\?$/i, m=>`Welk deel van ${gloss(m[1])} ${gloss(m[2])}?`],
  [/^Who was the first (.+?) to (.+?)\?$/i, m=>`Wie was de eerste ${gloss(m[1])} die ${gloss(m[2])}?`],
  [/^Which planet is called (.+?)\?$/i, m=>`Welke planeet wordt ${gloss(m[1])} genoemd?`],
  [/^Which instrument has (.+?)\?$/i, m=>`Welk instrument heeft ${gloss(m[1])}?`],
  [/^What does a (.+?) (.+?)\?$/i, m=>`Wat ${gloss(m[2])} een ${gloss(m[1])}?`],
  [/^What color is (.+?)\?$/i, m=>`Welke kleur heeft ${gloss(m[1])}?`],
  [/^How many ([^?]+?) are in (.+?)\?$/i, m=>`Hoeveel ${gloss(m[1])} zitten er in ${gloss(m[2])}?`],
  [/^How many ([^?]+?) does a (.+?) have\?$/i, m=>`Hoeveel ${gloss(m[1])} heeft een ${gloss(m[2])}?`],
  [/^Did (.+?) live before or after (.+?)\?$/i, m=>`Leefden ${gloss(m[1])} vóór of ná ${gloss(m[2])}?`],
  [/^Did (.+?) sink after hitting (.+?)\?$/i, m=>`Zonk ${gloss(m[1])} nadat die ${gloss(m[2])} raakte?`],
  [/^Did (.+?) walk on (.+?)\?$/i, m=>`Liep ${gloss(m[1])} op ${gloss(m[2])}?`],
  [/^Did (.+?) have (.+?)\?$/i, m=>`Hadden ${gloss(m[1])} ${gloss(m[2])}?`],
  [/^Does (.+?) study (.+?)\?$/i, m=>`Bestudeert ${gloss(m[1])} ${gloss(m[2])}?`],
  [/^Was (.+?) a (.+?)\?$/i, m=>`Was ${gloss(m[1])} een ${gloss(m[2])}?`],
  [/^Were (.+?) (.+?)\?$/i, m=>`Waren ${gloss(m[1])} ${gloss(m[2])}?`],
  [/^What makes (.+?) (.+?)\?$/i, m=>`Waardoor ${gloss(m[2])} ${gloss(m[1])}?`],
  [/^What power does (.+?) have (.+?)\?$/i, m=>`Welke kracht heeft ${gloss(m[1])} ${gloss(m[2])}?`],
  [/^What school does (.+?) attend\?$/i, m=>`Op welke school zit ${gloss(m[1])}?`],
  [/^What is (\d+)% of (\d+)\?$/i, m=>`Wat is ${m[1]}% van ${m[2]}?`],
  [/^What is (.+?) squared\?$/i, m=>`Wat is ${m[1]} in het kwadraat?`],
  [/^What is (.+?) cubed\?$/i, m=>`Wat is ${m[1]} tot de derde macht?`],
  [/^Calculate (.+?)\.$/i, m=>`Bereken ${gloss(m[1])}.`],
  [/^Evaluate (.+?)\.$/i, m=>`Bereken ${gloss(m[1])}.`],
  [/^Solve (.+?)\.$/i, m=>`Los op: ${gloss(m[1])}.`],
  [/^What is the capital of (.+?)\?$/i, m=>`Wat is de hoofdstad van ${gloss(m[1])}?`],
  [/^What is the chemical symbol for (.+?)\?$/i, m=>`Wat is het chemische symbool van ${gloss(m[1])}?`],
  [/^Which (?:chemical )?element has (?:the )?(?:chemical )?symbol (.+?)\?$/i, m=>`Welk element heeft het symbool ${m[1]}?`],
  [/^What is the atomic number of (.+?)\?$/i, m=>`Wat is het atoomnummer van ${gloss(m[1])}?`],
  [/^Which (?:chemical )?element has atomic number (.+?)\?$/i, m=>`Welk element heeft atoomnummer ${m[1]}?`],
  [/^What is the SI unit of (.+?)\?$/i, m=>`Wat is de SI-eenheid van ${gloss(m[1])}?`],
  [/^Which planet (.+?)\?$/i, m=>`Welke planeet ${gloss(m[1])}?`],
  [/^Which animal (.+?)\?$/i, m=>`Welk dier ${gloss(m[1])}?`],
  [/^Which city (.+?)\?$/i, m=>`Welke stad ${gloss(m[1])}?`],
  [/^Which scientist (.+?)\?$/i, m=>`Welke wetenschapper ${gloss(m[1])}?`],
  [/^Which (movie|film|book|novel|song|sport|instrument|artist|actor|writer|author|language) (.+?)\?$/i, m=>`Welke ${gloss(m[1])} ${gloss(m[2])}?`],
  [/^How many (.+?) (?:are|were) (.+?)\?$/i, m=>`Hoeveel ${gloss(m[1])} ${gloss('are')} ${gloss(m[2])}?`],
  [/^How many (.+?) does (.+?) have\?$/i, m=>`Hoeveel ${gloss(m[1])} heeft ${gloss(m[2])}?`],
  [/^How many (.+?) do (.+?) have\?$/i, m=>`Hoeveel ${gloss(m[1])} hebben ${gloss(m[2])}?`],
  [/^Who wrote (.+?)\?$/i, m=>`Wie schreef ${gloss(m[1])}?`],
  [/^Who painted (.+?)\?$/i, m=>`Wie schilderde ${gloss(m[1])}?`],
  [/^Who composed (.+?)\?$/i, m=>`Wie componeerde ${gloss(m[1])}?`],
  [/^Who directed (.+?)\?$/i, m=>`Wie regisseerde ${gloss(m[1])}?`],
  [/^What does (.+?) stand for\?$/i, m=>`Waar staat ${m[1]} voor?`],
  [/^What is (.+?) in Celsius\?$/i, m=>`Hoeveel is ${gloss(m[1])} in graden Celsius?`],
  [/^What is the (.+?) called\?$/i, m=>`Hoe heet ${gloss(m[1])}?`],
  [/^What do we call (.+?)\?$/i, m=>`Hoe noemen we ${gloss(m[1])}?`],
  [/^What is (.+?) called\?$/i, m=>`Hoe heet ${gloss(m[1])}?`],
  [/^Which (.+?) is known as (.+?)\?$/i, m=>`Welke ${gloss(m[1])} staat bekend als ${gloss(m[2])}?`],
  [/^In what year (.+?)\?$/i, m=>`In welk jaar ${gloss(m[1])}?`],
  [/^In which year (.+?)\?$/i, m=>`In welk jaar ${gloss(m[1])}?`],
  [/^In which country (.+?)\?$/i, m=>`In welk land ${gloss(m[1])}?`],
  [/^On which continent (.+?)\?$/i, m=>`Op welk werelddeel ${gloss(m[1])}?`],
  [/^How long (.+?)\?$/i, m=>`Hoe lang ${gloss(m[1])}?`],
  [/^What is (\d+) (?:times|×) (\d+)\?$/i, m=>`Hoeveel is ${m[1]} × ${m[2]}?`],
  [/^What is (\d+) divided by (\d+)\?$/i, m=>`Hoeveel is ${m[1]} gedeeld door ${m[2]}?`],
  [/^What is (.+?)\?$/i, m=>`Wat is ${gloss(m[1])}?`],
  [/^Which (.+?)\?$/i, m=>`Welke ${gloss(m[1])}?`],
  [/^Who (.+?)\?$/i, m=>`Wie ${gloss(m[1])}?`],
  [/^Why (.+?)\?$/i, m=>`Waarom ${gloss(m[1])}?`],
  [/^How (.+?)\?$/i, m=>`Hoe ${gloss(m[1])}?`],
];

// Special word-game vocabulary: Dutch starting words must actually be Dutch.
const RHYME_WORDS = {
  CAT:'KAT',SUN:'ZON',DOG:'HOND',HAT:'HOED',BALL:'BAL',DAY:'DAG',BEE:'BIJ',TREE:'BOOM',
  CAKE:'TAART',LIGHT:'LICHT',RAIN:'REGEN',BOAT:'BOOT',MOUSE:'MUIS',DREAM:'DROOM',SAND:'ZAND',PLAY:'SPEL',
  FLOWER:'BLOEM',GARDEN:'TUIN',WONDER:'WONDER',BRIGHT:'HELDER',MOTION:'BEWEGING',TRAIN:'TREIN',PAINT:'VERF',STORY:'VERHAAL',
  GLOW:'GLOED',WIND:'WIND',SIGHT:'ZICHT',RIVER:'RIVIER',SUNDAY:'ZONDAG',STONE:'STEEN',WATER:'WATER',MOON:'MAAN',CLOUD:'WOLK',
  STATION:'STATION',CREATION:'CREATIE',NATION:'NATIE',POWER:'KRACHT',DECISION:'BESLISSING',VISION:'VISIE',
  REFLECTION:'REFLECTIE',CONNECTION:'CONNECTIE',CELEBRATION:'CELEBRATIE',PRESENCE:'PRESENTIE',PROVISION:'PROVISIE',DETECTION:'DETECTIE',
  ILLUSION:'ILLUSIE',CONCLUSION:'CONCLUSIE',VIBRATION:'VIBRATIE',PREDICTION:'PREDICTIE',COLLISION:'BOTSING',SOLUTION:'OPLOSSING',
};
const ALLITERATION_EXAMPLES = {
  B:['Blije beren','Blije beren brullen','Blije bruine beren brullen'],
  S:['Slimme slangen','Slimme slangen sissen','Zes slimme slangen sissen'],
  M:['Mooie muizen','Mooie muizen marcheren','Meerdere mooie muizen marcheren'],
  P:['Paarse paarden','Paarse paarden praten','Pittige paarse paarden praten'],
  T:['Tamme tijgers','Tamme tijgers trainen','Twee tamme tijgers trainen'],
  C:['Coole clowns','Coole clowns creëren','Coole creatieve clowns creëren'],
  D:['Dappere dieren','Dappere dieren dansen','Drie dappere dieren dansen'],
  L:['Lieve leeuwen','Lieve leeuwen lachen','Lieve luie leeuwen lachen'],
  F:['Fijne fietsen','Fijne fietsen flitsen','Vier fijne fietsen flitsen'],
  R:['Rode rozen','Rode ratten rennen','Razendsnelle rode ratten rennen'],
  W:['Warme wafels','Wilde wolven wandelen','Wilde witte wolven wandelen'],
};

const escaped = (s) => s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
const capitalized = (s) => s[0]?.toUpperCase() + s.slice(1);
function gloss(input) {
  const protectedPieces=[];
  const shielded=String(input).replace(BRAND_PROTECTED,(value)=>{
    const index=protectedPieces.push(value)-1;
    return `¤${index}¤`;
  });
  const translated=shielded.replace(WORD_EXP,(found)=>{
    const target=TERMS.get(found.toLowerCase()) || found;
    return found.length>1 && found === found.toUpperCase() && /[A-Z]/.test(found) ? target.toUpperCase() : /^[A-Z]/.test(found) ? capitalized(target) : target;
  });
  return translated.replace(/¤(\d+)¤/g,(_,index)=>protectedPieces[Number(index)]);
}
function polish44(value) {
  return String(value)
    .replace(/\bspelkaart\b/gi, (match)=>match===match.toUpperCase() ? 'SPEELKAART' : /^[A-Z]/.test(match) ? 'Speelkaart' : 'speelkaart')
    .replace(/\bleeftijden\b/gi, (match)=>match[0] === 'L' ? 'Leeftijd' : 'leeftijd')
    .replace(/\bages\b/gi, 'leeftijd')
    .replace(/\bproficiency\b/gi, 'niveau')
    .replace(/\bNee extra benodigdheden\b/gi, 'geen extra benodigdheden')
    .replace(/\bBeginnen de timer\b/gi, 'Start de timer')
    .replace(/\bBEGIN de timer\b/g, 'START de timer')
    .replace(/\bBegin de timer\b/g, 'Start de timer')
    .replace(/\bBeginnen wanneer\b/g, 'Begin wanneer')
    .replace(/\bBeginnen geheugenspel\b/gi, 'Begin geheugenspel');
}
function translateLine(raw) {
  if (!raw || !/[a-z]/i.test(raw)) return raw;
  const outer = raw.match(/^(\s*)(.*?)(\s*)$/s);
  const line = outer?.[2] || raw;
  if (UI[line] != null) return (outer?.[1]||'') + polish44(UI[line]) + (outer?.[3]||'');
  // Precise Dutch labels for dynamically numbered players and rounds.
  const player = line.match(/^Player (\d+)$/i);
  if (player) return `Speler ${player[1]}`;
  const recent = line.match(/^LAST (\d+) RESULTS$/i);
  if (recent) return `LAATSTE ${recent[1]} RESULTATEN`;
  const shopping = line.match(/^Start with:\s*(.+?)\.\s*Add one new item every turn\.$/i);
  if (shopping) return `Begin met: ${polish44(gloss(shopping[1]))}. Voeg elke beurt één nieuw item toe.`;
  if (line.startsWith('LIVING ROOM') && line.includes('BATTLES')) return raw;
  if (/^[A-Z0-9+\-=×÷^.,:;\s\[\]()/%]+$/.test(line) && !/[A-Z]{3,}/.test(line)) return raw;
  // A human-reviewed Dutch question takes precedence over word translation.
  // Multiple-choice letters A/B/C/D remain unchanged even as options translate.
  const exactQuestion = line.match(/^(.+?\?)(\s+[A-D]\)\s+.+)?$/s);
  if(exactQuestion && DUTCH_QUESTION_OVERRIDES[exactQuestion[1]]){
    let result=DUTCH_QUESTION_OVERRIDES[exactQuestion[1]];
    if(exactQuestion[2]){
      const choices=[...exactQuestion[2].matchAll(/([A-D]\)\s*)(.*?)(?=\s+[A-D]\)|$)/gs)];
      result += ' '+choices.map(x=>x[1]+gloss(x[2])).join(' ');
    }
    return (outer?.[1]||'')+result+(outer?.[3]||'');
  }
  // A/B/C/D multiple-choice alternatives can be localized separately.
  if (/^A=1,?\s+B=2/i.test(line)) return raw;
  const nth = line.match(/^(\d{1,2}[.)]\s*)(.*)$/s);
  if (nth) return (outer?.[1]||'')+nth[1]+translateLine(nth[2])+(outer?.[3]||'');
  const topic = line.match(/^TOPIC:\s*(.+)$/i); if(topic) return 'ONDERWERP: '+translateLine(topic[1]);
  const word = line.match(/^(Starting rhyme word|Starting word|Rhyme with|Start with):\s*([\w -]+)([.!]?)$/i);
  if (word) return `${translateLine(word[1])}: ${RHYME_WORDS[word[2].trim().toUpperCase()] || gloss(word[2]).toUpperCase()}${word[3]}`;
  const allit = line.match(/^EXAMPLE:\s*(.+?)\.?$/i);
  if (allit) {
    const found=Object.entries(ALLITERATION_EXAMPLES).flatMap(([letter,options])=>options.map((value,i)=>[letter,i,value])).find(([letter,i])=>[
      'Big bears','Brave bears bounce','Brave brown bears bounce','Silly snakes','Silly snakes sing','Seven silly snakes sing',
      'Merry monkeys','Merry monkeys march','Many merry monkeys march','Pink pigs','Pink pigs play','Pink playful pigs parade',
      'Tall trees','Tall trees tremble','Three tall trees tremble','Cute cats','Cute cats climb','Cute clever cats climb',
      'Dancing dogs','Dancing dogs dash','Daring dancing dogs dash','Little lions','Little lions leap','Little lazy lions leap',
      'Funny frogs','Funny frogs fly','Four funny frogs fly','Red roses','Red rabbits race','Rapid red rabbits race',
      'Warm waffles','Wild wolves wander','Wild white wolves wander'
    ]["BSMPTCDLFRW".indexOf(letter)*3+i] === allit[1]);
    if (found) return 'VOORBEELD: '+found[2]+'.';
  }
  const reaction=line.match(/^CALLER:\s*READ ONE NUMBER EVERY (\d+) SECONDS\.$/i);
  if(reaction)return `VOORLEZER: LEES ELKE ${reaction[1]} SECONDEN ÉÉN GETAL VOOR.`;
  const secretWords=line.match(/^SECRET WORDS — STUDY FOR (\d+) SECONDS$/i);
  if(secretWords)return `GEHEIME WOORDEN — BEKIJK ZE ${secretWords[1]} SECONDEN`;
  const secretActions=line.match(/^SECRET ACTIONS — (.+)$/i);
  if(secretActions)return `GEHEIME HANDELINGEN — ${gloss(secretActions[1])}`;
  const allitLine=line.match(/^Write (\d+)-word phrases\. Every word starts with ([A-Z])\.$/i);
  if(allitLine)return `Schrijf zinnen van ${allitLine[1]} woorden. Elk woord begint met ${allitLine[2]}.`;
  const numberedChoice = line.match(/^(.*?)(\s+[A-D]\)\s+.+)$/s);
  if (numberedChoice && /[A-D]\)/.test(numberedChoice[2])) {
    const choices = [...numberedChoice[2].matchAll(/([A-D]\)\s*)(.*?)(?=\s+[A-D]\)|$)/gs)];
    if (choices.length > 1) return translateLine(numberedChoice[1])+' '+choices.map(m=>m[1]+gloss(m[2])).join(' ');
  }
  if (line.startsWith('CHOOSE A, B OR C')) return 'KIES A, B OF C'+line.slice(16);
  for (const [regex,build] of FRAMES) {const match=line.match(regex);if(match) return (outer?.[1]||'')+build(match)+(outer?.[3]||'');}
  return (outer?.[1]||'')+polish44(gloss(line))+(outer?.[3]||'');
}

/** Translate English source at read/render time, including full question lists. */
export function dutch(value) {
  if (value == null) return value;
  const raw=String(value);
  if (UI[raw] != null) return polish44(UI[raw]);
  return polish44(raw.split('\n').map(translateLine).join('\n'));
}

/** Translate rendered interface strings, card content, option labels and ARIA. */
export function translatePage(document, language) {
  const isDutch=language==='nl';
  if (document.documentElement) document.documentElement.lang=isDutch?'nl':'en';
  if (!isDutch) {document.title='Living Room Battles V4.5 — Game Night';return;}
  document.title='Living Room Battles V4.5 — Spelavond';
  const walker=document.createTreeWalker(document.body, document.defaultView?.NodeFilter?.SHOW_TEXT ?? 4);
  const nodes=[];let node;
  while((node=walker.nextNode())) {
    const parent=node.parentElement;
    if (!parent || parent.closest('script,style,textarea,code,[data-no-translate]'))continue;
    if (!node.nodeValue?.trim())continue;
    nodes.push(node);
  }
  for(const item of nodes)item.nodeValue=dutch(item.nodeValue);
  for(const el of document.querySelectorAll('[aria-label],[placeholder],[title]')){
    for(const attr of ['aria-label','placeholder','title'])if(el.hasAttribute(attr))el.setAttribute(attr,dutch(el.getAttribute(attr)));
  }
}
