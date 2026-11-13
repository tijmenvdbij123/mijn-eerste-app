/** Offline English → Danish localization. English source and Dutch packs remain intact. */
import { DANISH_QUESTION_OVERRIDES } from './da-questions.js';
import { reviewedDanishInterface } from './da-interface-v410.js';
import { reviewedDanishCard } from './da-reviewed-card-forms.js';
import { REVIEWED_DANISH_DESCRIPTIONS } from './da-reviewed-descriptions.js';
import { REVIEWED_DANISH_TOPIC_QUESTIONS } from './da-reviewed-topic.js';
import { REVIEWED_DANISH_CLASSIC_QUESTIONS } from './da-reviewed-classic.js';
import { REVIEWED_DANISH_ANSWERS } from './da-reviewed-answers.js';
import { REVIEWED_DANISH_ACTIONS } from './da-reviewed-actions.js';
import { REVIEWED_DANISH_HEADLINES } from './da-reviewed-headlines.js';
import { REVIEWED_DANISH_SHAPES } from './da-reviewed-shapes.js';
import { REVIEWED_DANISH_STORY_THEMES } from './da-reviewed-stories.js';
import { REVIEWED_DANISH_DRAW_ITEMS, REVIEWED_DANISH_DRAW_THEMES } from './da-reviewed-visual.js';
const REVIEWED_DANISH_SENTENCES = new Set([...Object.values(REVIEWED_DANISH_TOPIC_QUESTIONS), ...Object.values(REVIEWED_DANISH_CLASSIC_QUESTIONS), ...Object.values(REVIEWED_DANISH_ANSWERS), ...Object.values(REVIEWED_DANISH_DESCRIPTIONS)]);

const UI = {
 'Dancing Competition':'Dansekonkurrence',
 'Living Room Battles':'Living Room Battles',
 'Enter 2 to 6 player names. Each person has exactly one team and an individual score.':'Skriv navnene på 2 til 6 spillere. Hver spiller har sit eget hold og sin egen score.',
 'Choose minigames':'Vælg minispil',
 '✓ Select all':'✓ Vælg alle',
 '⊘ Clear all':'⊘ Fravælg alle',
 'Choose individual games':'Vælg enkelte spil',
 '↷ Skip question':'↷ Spring opgaven over',
 '2–6 teams, each with 2 or 3 players. Work together or face another team in 38 living-room minigames.':'2–6 hold med 2 eller 3 spillere på hvert hold. Samarbejd eller dyst mod et andet hold i 38 stuespil.',
 '2 to 6 players total. Every person is their own team. Play alone for a point or challenge one opponent.':'2 til 6 spillere i alt. Hver spiller udgør sit eget hold. Spil alene om point eller dyst mod en modstander.',

 'Choose your':'Vælg din','game night.':'spilaften.','Choose your language.':'Vælg dit sprog.',
 'Team Battles':'Holdkamp','Solo Showdown':'Solodyst','Play Team Battles ↗':'Spil holdkamp ↗','Play Solo Showdown ↗':'Spil solodyst ↗',
 'ORIGINAL FORMAT':'ORIGINAL SPILFORM','ONE-PLAYER FORMAT':'ÉN SPILLER PR. HOLD',
 'Two formats. The same one-point-per-turn challenge. Pick how many people play on each side.':'To spilformer. Ét muligt point pr. tur. Vælg, hvor mange der spiller på hvert hold.',
 '2–6 teams, each with 2 or 3 players. Work together or face another team in 37 living-room minigames.':'2–6 hold med 2 eller 3 spillere på hvert hold. Samarbejd eller dyst mod et andet hold i 37 stuespil.',
 '2 or 3 players total. Every person is their own team. Play alone for a point or challenge one opponent.':'2 eller 3 spillere i alt. Hver spiller udgør sit eget hold. Spil alene om point eller dyst mod én modstander.',
 '2–3 players per team':'2–3 spillere pr. hold','1 player per team':'1 spiller pr. hold','37 minigames':'37 minispil','33 minigames':'33 minispil','38 minigames':'38 minispil','34 minigames':'34 minispil',
 'OPTIONAL · PLAY TOGETHER ON PHONES':'VALGFRIT · SPIL SAMMEN PÅ MOBILER','Create or join a session':'Opret eller deltag i en spilsession',
 'One host plus up to four guest devices. The host controls all timers, cards, answers and scoring; guests can read along. Requires internet on every device.':'Én vært og op til fire gæsteenheder. Værten styrer timere, kort, svar og point. Gæsterne kan følge med. Alle enheder kræver internet.',
 '✦ Make session':'✦ Opret session','Join with code':'Deltag med kode','8-letter code':'Kode på 8 tegn','Join session':'Deltag i session','End session':'Afslut session','Leave session':'Forlad session',
 'Waiting for your host':'Venter på værten','Waiting for your host.':'Venter på værten.',
 'Your host will set up teams and start the game. Their instructions and cards will appear here automatically.':'Værten opretter holdene og starter spillet. Instruktioner og kort vises automatisk her.',
 'STEP 01':'TRIN 01','STEP 02':'TRIN 02','STEP 03':'TRIN 03','STEP 04':'TRIN 04',
 'SOLO SHOWDOWN · ONE PLAYER PER TEAM':'SOLODYST · ÉN SPILLER PR. HOLD','TEAM BATTLES · ORIGINAL FORMAT':'HOLDKAMP · ORIGINAL SPILFORM',
 'Every player':'Hver spiller','for themselves.':'spiller for sig selv.','Make the room':'Gør stuen til','your arena.':'din arena.',
 'Each person is their own one-player team. Take turns earning your point solo or block the current player in a duel.':'Hver person udgør et hold med én spiller. Skiftes til at optjene point alene eller forhindre den aktive spiller i at vinde en duel.',
 'Bring your people, pick your favorite challenges, and let the friendly rivalry begin. Quick living-room games. One point at a time.':'Saml vennerne, vælg jeres yndlingsudfordringer, og lad den sjove konkurrence begynde. Hurtige spil i stuen, ét point ad gangen.',
 'available games':'tilgængelige spil','per turn':'pr. tur','player per team':'spiller pr. hold','players per team':'spillere pr. hold',
 'YOUR TEAMS':'JERES HOLD','YOUR PLAYERS':'JERES SPILLERE','The teams':'Holdene','The players':'Spillerne',
 'TEAM SETUP':'HOLDOPSÆTNING','SET UP YOUR TEAMS':'OPRET JERES HOLD',
 'Team name':'Holdnavn','Player name':'Spillernavn','Team':'Hold','Player':'Spiller','Players':'Spillere',
 'Add team':'Tilføj hold','Add player':'Tilføj spiller','Remove team':'Fjern hold','Remove player':'Fjern spiller',
 'Proficiency level':'Færdighedsniveau','Choose proficiency':'Vælg niveau','ages':'aldre','age':'alder',
 'Rounds per team':'Ture pr. hold','ESTIMATED GAME LENGTH':'FORVENTET SPILLETID','turns overall':'ture i alt','minutes per full round':'minutter pr. fuld runde',
 'minigames':'minispil','MINIGAMES':'MINISPIL','GAMES':'SPIL','YOUR VIBE':'JERES VALG','Pick your categories.':'Vælg jeres kategorier.',
 "All categories are on by default. Turn off anything your group doesn't fancy.":'Alle kategorier er valgt fra start. Slå dem fra, I ikke vil spille.',
 'Select all':'Vælg alle','Clear':'Ryd','categories enabled':'valgte kategorier','categories':'kategorier','Ready to rumble?':'Klar til at spille?',
 'Start the game ↗':'Start spillet ↗','Everyone has their own score and gets an equal number of turns.':'Alle har deres egen score og får lige mange ture.',
 'One device controls the game.':'Én enhed styrer spillet.','Your setup is saved in this browser.':'Dine indstillinger gemmes i browseren.',
 'Back':'Tilbage','← Back':'← Tilbage','← Back to game formats':'← Tilbage til spilformer','← Back / Terug':'← Tilbage',
 'LET THE GAMES BEGIN':'LAD SPILLENE BEGYNDE','Game on':'Spillet er i gang','Game on.':'Spillet er i gang.',
 '⚙ Categories':'⚙ Kategorier','↺ New game':'↺ Nyt spil','GUEST VIEW · HOST CONTROLS GAME':'GÆSTEVISNING · VÆRTEN STYRER SPILLET',
 'Scoreboard':'Pointtavle','ROUND':'RUNDE','TURN':'TUR','CURRENTLY PLAYING':'NUVÆRENDE TUR','PLAYER':'SPILLER','PLAYERS':'SPILLERE',
 'THE VERDICT':'RESULTATET','Point earned':'Point vundet','No point':'Intet point','✓ Point earned':'✓ Point vundet','× No point':'× Intet point',
 'Only the active team can score. Choose the outcome to switch turns automatically.':'Kun det aktive hold kan få point. Vælg resultatet for automatisk at skifte tur.',
 'Round recap':'Oversigt over runder','RESULTS':'RESULTATER','LAST':'SIDSTE',
 'No rounds completed yet. The story starts now.':'Ingen afsluttede runder endnu. Nu begynder det!',
 'WHO PLAYS?':'HVEM SPILLER?','THE MATCHUP':'DUELLEN','All in, together.':'Alle er med sammen.',
 'One player. Six questions.':'Én spiller. Seks spørgsmål.','One player. One rival.':'Én spiller. Én modstander.',
 'Team versus team.':'Hold mod hold.','Two players per team: 2v2.':'To spillere pr. hold: 2 mod 2.',
 'ACTIVE PLAYER':'AKTIV SPILLER','ACTIVE TEAM':'AKTIVT HOLD','DEFENDER':'MODSTANDER','DEFENDERS':'MODSTANDERE',
 'Defending team':'Modstanderhold','Choose the player':'Vælg spilleren','Solo player':'Solospiller',
 '✧ APP ASSIGNED':'✧ VALGT AF APPEN','✎ PLAYER CHOICE':'✎ VALGT AF SPILLEREN',
 'The app selected this matchup.':'Appen har valgt modstanderen.',
 'The defending side can stop the point, but never earn one this turn.':'Modstanderen kan forhindre et point, men kan ikke selv få point på denne tur.',
 'CLOCK INSTRUCTIONS':'TIMERREGLER','NO CLOCK NEEDED':'INGEN TIMER NØDVENDIG',
 'NO MAIN CLOCK NEEDED. Follow the spoken-turn rules; nothing needs to be started.':'INGEN HOVEDTIMER. Følg reglerne for mundtlige ture; intet skal startes.',
 'There is no countdown for this challenge.':'Der er ingen nedtælling i denne udfordring.',
 'Start timer ↗':'Start timer ↗','Pause timer':'Sæt timer på pause','Resume timer ▶':'Fortsæt timer ▶',
 'Resume writing timer ▶':'Fortsæt skrivetid ▶','Timer running…':'Timeren kører…','Start memory challenge ↗':'Start hukommelsesleg ↗',
 "Time's up ✓":'Tiden er gået ✓','Only the host controls this timer.':'Kun værten styrer denne timer.',
 'MIN : SEC':'MIN : SEK','CHALLENGE':'UDFORDRING','SECOND CHALLENGE':'SEKUNDERS UDFORDRING','STAGE':'FASE','OF':'AF',
 'CHOOSE DIFFICULTY':'VÆLG SVÆRHEDSGRAD','CHOOSE SITUATIONS':'VÆLG SITUATIONER','Difficulty level':'Sværhedsgrad',
 'Headline style':'Overskriftsstil','Goofy':'Skør','Normal / everyday':'Normal / hverdag',
 'not available for this game':'ikke tilgængeligt i dette spil',
 'Change level before judging the result.':'Skift niveau, før resultatet bedømmes.',
 'Choose before starting the clock or revealing the card.':'Vælg, før timeren startes eller kortet vises.',
 'GAME CARD':'SPILKORT','Card is showing':'Kortet vises','Viewing time is over':'Visningstiden er slut','Open when ready':'Åbn, når I er klar',
 '✕ Exit fullscreen':'✕ Luk fuld skærm','⛶ Fullscreen card':'⛶ Kort på fuld skærm',
 'Reveal game card':'Vis spilkort','Hide game card':'Skjul spilkort',
 'Card is visible':'Kortet er synligt','Card viewed ✓':'Kortet er set ✓',
 'Reveal answers':'Vis svar','Hide answers':'Skjul svar','ANSWER KEY':'SVAR','ORIGINAL SHAPE REFERENCE':'ORIGINALT FIGURFORLÆG',
 'Hide original shape':'Skjul originalen','Show original shape':'Vis originalen','↺ Restart memory challenge':'↺ Genstart hukommelsesleg',
 '↺ Re-view card (reset both timers)':'↺ Vis kort igen (nulstil begge timere)',
 '✓ Finish attempt & reveal answers':'✓ Afslut forsøg og vis svar',
 'HOW TO WIN THE POINT':'SÅDAN FÅR DU POINT',
 'Some cards contain secret clues. Only the correct player should peek.':'Nogle kort har hemmelige ledetråde. Kun den rigtige spiller må kigge.',
 'The secret card is hidden. Continue from memory until the clock finishes.':'Det hemmelige kort er skjult. Fortsæt efter hukommelsen, indtil tiden er gået.',
 'Press Start memory challenge: the secret card will show automatically for the first timed stage.':'Tryk Start hukommelsesleg: det hemmelige kort vises automatisk i første fase.',
 "Time's up!":'Tiden er gået!','Okay, see the result':'Okay, vis resultatet',
 'Reveal the word list':'Vis ordlisten','Reveal the digit answer':'Vis talrækken',
 'GAME COMPLETE · VERSION 4.3':'SPILLET ER SLUT · VERSION 4.3',
 'We have a winner!':'Vi har en vinder!',"It's a tie!":'Det er uafgjort!',
 '✦ FINAL RESULT ✦':'✦ SLUTRESULTAT ✦','Congratulations, champions of the living room!':'Tillykke, stuen har fået sine mestre!',
 'The top teams share the win.':'De bedste hold deler sejren.','Final scoreboard':'Slutstilling','point':'point','points':'point',
 'Yes':'Ja','No':'Nej','Cancel':'Annuller','OK':'OK',
 'Beginner':'Begynder','Novice':'Nybegynder','Amateur':'Amatør','Intermediate':'Øvet','Competent':'Kompetent','Skilled':'Dygtig','Advanced':'Avanceret','Grandmaster':'Stormester',
 'Cooperation':'Samarbejde','Solo':'Solo','Duel':'Duel','Team battle':'Holdduel',
 'Word Games':'Ordlege','Memory Games':'Hukommelseslege','Drawing Games':'Tegnelege','Classic & General Trivia':'Klassisk & almen quiz','New Topic Trivia':'Emnequizzer','Topic Trivia':'Emnequizzer','Party Challenges':'Festlige udfordringer',
 'Trivia: History':'Quiz: historie','Trivia: Sports & Athletics':'Quiz: sport og atletik','Trivia: Movies & TV':'Quiz: film og tv','Trivia: Culture':'Quiz: kultur',
 'Trivia: Geography':'Quiz: geografi','Trivia: Science & Nature':'Quiz: videnskab og natur','Trivia: Arts & Literature':'Quiz: kunst og litteratur','Trivia: Music':'Quiz: musik',
 'History':'Historie','Sports & Athletics':'Sport og atletik','Movies & TV':'Film og tv','Culture':'Kultur','Geography':'Geografi','Science & Nature':'Videnskab og natur','Arts & Literature':'Kunst og litteratur','Music':'Musik',
 'Category Flood':'Kategorijagt','Rhyme Rally':'Rimstafet','Last-Letter Duel':'Sidste-bogstavsduel',
 'Quickfire Facts':'Hurtigquiz','Five Quick Facts':'Fem hurtige fakta','Trivia Board':'Quizduel',
 'Shape Copy':'Kopiér figuren','Sketch & Guess':'Tegn og gæt','Picture Race':'Tegnekapløb',
 'Shopping Basket':'Indkøbskurven','Word Recall Battle':'Husk ordene','Digit Memory':'Talhukommelse',
 'Missing Number':'Manglende tal','Missing Numbers':'Manglende tal','Clock Duel':'Urduel','Target Number':'Måltallet',
 'Silent Charades':'Gæt en mime','Reaction Rules':'Reaktionsregler','Mime Relay':'Mimestafet',
 'Alphabet Story':'Alfabethodehistorie','Alliteration Duel':'Bogstavrimsduel','Headline Challenge':'Overskriftsudfordring',
 'Codebreaker':'Kodeknækker','Count to Thirty':'Tæl til tredive','Rock-Paper-Scissors Council':'Sten-saks-papir-råd',
 'Stare Battle':'Stirrekonkurrence','Make the Other Laugh':'Få den anden til at grine','Rebus: Secret Word':'Rebus: hemmeligt ord',
 'Arm Wrestling':'Armbrydning','Riddle Round':'Gåderunde',
 'No extra equipment':'Intet ekstra udstyr','Text card and paper':'Tekstkort og papir','Text card, paper optional':'Tekstkort, papir valgfrit','Paper and pen':'Papir og kuglepen','Paper and pencil':'Papir og blyant','Text card':'Tekstkort',
 'MULTIPLE CHOICE':'MULTIPLE CHOICE','MIXED QUESTIONS':'BLANDEDE SPØRGSMÅL','OPEN QUESTIONS':'ÅBNE SPØRGSMÅL',
 'TOPIC':'EMNE','SECRET WORD':'HEMMELIGT ORD','SECRET WORDS':'HEMMELIGE ORD','SECRET DIGITS':'HEMMELIGE CIFRE',
 'SECRET DRAWING LIST':'HEMMELIG TEGNELISTE','Starting word':'Startord','Starting rhyme word':'Startord til rim',
 'Rhyme with':'Rim på','Start with':'Begynd med','FILL ONE LETTER':'INDSÆT ÉT BOGSTAV','FILL TWO LETTERS':'INDSÆT TO BOGSTAVER',
 'Hint':'Tip','EXAMPLE':'EKSEMPEL','COUNTS AS ONE':'TÆLLER SOM ÉT','DRAW ONE SCENE':'TEGN ÉN SCENE',
 'STORY THEME':'HISTORIENS TEMA','YOUR LETTER':'DIT BOGSTAV','TAKE LETTER':'TAG BOGSTAV','Take letter':'Tag bogstav',
 'Answer each trivia clue.':'Besvar hvert quizspørgsmål.','Read the extracted letters from top to bottom.':'Læs de fundne bogstaver oppefra og ned.',
 'words':'ord','letters':'bogstaver','seconds':'sekunder','minutes':'minutter','correct':'rigtige','wrong':'forkert','Answer':'Svar'
};
Object.assign(UI, {
 'Words & language':'Ord og sprog',
 "Who's playing?":'Hvem spiller?',
 'Enter 2 or 3 player names. Each person has exactly one team and an individual score.':'Skriv navnene på 2 eller 3 spillere. Hver spiller udgør præcis ét hold og har sin egen score.',
 "Rename your teams and enter every player's name.":'Giv holdene navne, og indtast navnene på alle spillere.',
 'YOUR SQUAD':'JERES HOLD','GAME LENGTH':'SPILLETS LÆNGDE',
 'Choose a proficiency for each':'Vælg et færdighedsniveau for hver',
 'By default, questions use that':'Som udgangspunkt følger spørgsmålene dette',
 'Intellectual/strategy duels match opponents of the same or one adjacent level; trivia can compare different levels using different questions.':'I viden- og strategidueller matches man med en modstander på samme eller ét tilstødende niveau. Quizdueller kan sammenligne forskellige niveauer med forskellige spørgsmål.',
 'How many rounds?':'Hvor mange runder?',
 'One round means every team gets exactly one turn, in order.':'Én runde betyder, at hvert hold får præcis én tur i rækkefølge.',
 'Estimate: about 2 minutes 30 seconds for a standard challenge, plus ~30 seconds for rules and scoring. Some games use shorter clocks or no main clock at all, so actual playtime will vary.':'Forvent cirka 2 minutter og 30 sekunder pr. standardudfordring og cirka 30 sekunder ekstra til regler og point. Nogle spil er kortere eller uden timer.',
 'Player proficiency':'Spillerens færdighedsniveau','Team proficiency':'Holdets færdighedsniveau',
 'This player is their own team. Their score counts only on their turns.':'Denne spiller udgør sit eget hold og får kun point på sine egne ture.',
 'Add third player':'Tilføj tredje spiller','Remove third player':'Fjern tredje spiller',
 'Change game format':'Skift spilform','← Change game format':'← Skift spilform',
 'Changes apply to the next round, not the challenge already on screen.':'Ændringer gælder fra næste runde, ikke den udfordring, der allerede vises.',
 'Everyone has their own score and gets an equal number of turns.':'Alle har deres egen score og får lige mange ture.',
 'No defender competes in this round.':'Der er ingen modstander i denne runde.',
 'Anyone else may check the answers but cannot score.':'Andre må kontrollere svarene, men kan ikke få point.',
 'Every member of':'Alle på','works toward the same point. No defending team in this round.':'arbejder sammen om det samme point. Ingen modstander i denne runde.',
 'One member of':'Én spiller fra','answers alone. Teammates must not help; no defending team participates.':'svarer alene. Holdkammerater må ikke hjælpe, og der er intet modstanderhold.',
 'The active team chooses its defending team.':'Det aktive hold vælger modstanderholdet.',
 'Choose the active player':'Vælg den aktive spiller',
 'CURRENT TEAM':'AKTIVT HOLD','CURRENT PLAYER':'AKTIV SPILLER',
 'The selected players get':'De udvalgte spillere får',
 'to study the card. It then hides automatically.':'til at se kortet. Derefter skjules det automatisk.',
 'If something goes wrong, use the confirmed re-view option to restart both clocks.':'Hvis noget går galt, kan du efter bekræftelse vise kortet igen og genstarte begge timere.',
 'You cannot reveal it again.':'Kortet kan ikke vises igen.',
 'At this level, the selected players may keep the card visible while drawing. Teammates may not help.':'På dette niveau må de udvalgte spillere se kortet under tegningen. Holdkammerater må ikke hjælpe.',
 'GAME NIGHT':'SPILAFTEN',
 'Finish attempt':'Afslut forsøg','Show results':'Vis resultater',
 'Score awarded':'Point tildelt','No point awarded':'Intet point tildelt',
 'New game':'Nyt spil','Next round':'Næste runde',
 'End session':'Afslut session','Leave session':'Forlad session',
 'Read-only game view.':'Spilvisning uden kontrol.',
 'You are connected as a guest.':'Du er tilsluttet som gæst.',
 'Share code':'Del koden','LIVE SESSION · HOST':'LIVESESSION · VÆRT','LIVE SESSION · GUEST':'LIVESESSION · GÆST',
 'Connecting…':'Opretter forbindelse…','Connected!':'Forbundet!',
 'Only this host can control clocks and answers.':'Kun værten kan styre timere og svar.',
 'devices connected.':'enheder forbundet.','Read-only game view.':'Spilvisning uden kontrol.',
 'Other languages':'Andre sprog','OTHER LANGUAGES / ANDERE TALEN':'ANDRE SPROG / ANDERE TALEN',
 'Choose Nederlands or Dansk':'Vælg Nederlandsk eller Dansk',
 'LANGUAGE / TAAL':'SPROG / TAAL',
 'Choose your language · Kies je taal · Vælg dit sprog':'Vælg dit sprog · Kies je taal',
 'Choose another':'Vælg et andet','language.':'sprog.',
 'PLAY TOGETHER':'SPIL SAMMEN','PLAY TO WIN':'SPIL FOR AT VINDE',
 'Start the game':'Start spillet',
 'No point earned':'Intet point vundet',
 'a tie':'uafgjort',
 'DRAWING LIST':'TEGNELISTE',
 'SECRET MIME CLUES':'HEMMELIGE MIMEOPGAVER',
 'FIVE':'FEM','TEN':'TI',
 'BEFORE TIMER':'FØR TIMEREN',
 'WATCH THE CARD':'SE PÅ KORTET',
 'VIEW THE CARD':'SE KORTET',
 'REVEAL THE CARD':'VIS KORTET',
 'SHOW THE ANSWER':'VIS SVARET',
 'HOW TO PLAY':'SÅDAN SPILLER I',
 'EQUIPMENT':'UDSTYR',
 'NO GAME CARD':'INTET SPILKORT',
 'Time is up':'Tiden er gået',
 'SESSION':'SESSION',
 'New game started':'Nyt spil startet',
 'Chosen level':'Valgt niveau',
 'Start when your team is ready to play.':'Start, når holdet er klar til at spille.',
 'START the timer BEFORE revealing the game card.':'START timeren, FØR spilkortet vises.',
 'CLOCK NEEDED':'TIMER NØDVENDIG',
 'The stages switch automatically. No 150-second timer.':'Faserne skifter automatisk. Ingen timer på 150 sekunder.',
 'Press Start':'Tryk Start',
 'TIME LEFT':'TID TILBAGE',
 'A draw means no point':'Uafgjort giver intet point',
 'POINT EARNED':'POINT VUNDET',
 'NO POINT':'INTET POINT',
 'Round':'Runde',
 'Team A':'Hold A','Team B':'Hold B',
 'Player 1':'Spiller 1','Player 2':'Spiller 2','Player 3':'Spiller 3',
'Party Challenges (New)':'Festudfordringer','Party Challenges':'Festudfordringer',
 'Drawing & paper':'Tegning og papir','Memory & focus':'Hukommelse og koncentration',
 'Logic & numbers':'Logik og tal','Acting & gestures':'Mime og bevægelser',
 'Creative challenges':'Kreative udfordringer','Strategy & bluff':'Strategi og bluff',
 'Stare Battle (No Blinking)':'Stirrekonkurrence (uden at blinke)',
 'Secret card':'Hemmeligt kort','Single-player':'Én spiller','Team proficiency':'Holdets niveau','Player proficiency':'Spillerens niveau',
 'Choose your side':'Vælg dit hold','PLAYER 1 · ONE-PERSON TEAM':'SPILLER 1 · ÉN PERSON PR. HOLD',
 'Choose before starting the timer.':'Vælg, før timeren startes.',
 'Make session':'Opret session', 'Session code':'Sessionskode',
 'Session code copied':'Sessionskoden er kopieret',
 'Read-only game view.':'Spilvisning uden kontrol.',
 'Play in English':'Spil på engelsk','Other language':'Andet sprog',
 'Choose another language.':'Vælg et andet sprog.',
 'Choose the language for the entire game, including rules, game cards, questions, answers and timers.':'Vælg sprog for hele spillet, herunder regler, kort, spørgsmål, svar og timere.',
 'NO CLOCK NEEDED. Follow the game-card rules. There is no countdown for this challenge.':'INGEN TIMER. Følg reglerne på spilkortet. Der er ingen nedtælling.',
 'NO CLOCK NEEDED':'INGEN TIMER NØDVENDIG',
 'The secret card will hide automatically.':'Det hemmelige kort skjules automatisk.',
 'Default':'Standard','Team score':'Holdscore','Player score':'Spillerens point',
 'Play together':'Spil sammen','Play to win':'Spil for at vinde',
 'Built for the living room, not the leaderboard.':'Skabt til stuen, ikke til ranglisten.',
 'One turn. One point. Infinite rematches.':'Én tur. Ét point. Uendelige omkampe.',
 'GAME NIGHT, SORTED.':'STUEAFTEN MED SPIL.',
 'LIVING ROOM':'STUEN','BATTLES':'DYSTER',
});
const TERMS_RAW=`what|hvad
which|hvilken
who|hvem
where|hvor
when|hvornår
why|hvorfor
how many|hvor mange
how much|hvor meget
how long|hvor længe
how|hvordan
the|den
an|en
a|en
is|er
are|er
was|var
were|var
be|være
being|værende
and|og
or|eller
but|men
of|af
in|i
on|på
at|ved
by|af
from|fra
into|ind i
with|med
without|uden
to|til
for|for
its|dens
it|det
this|dette
that|den
these|disse
those|de
one|en
two|to
three|tre
four|fire
five|fem
six|seks
seven|syv
eight|otte
nine|ni
ten|ti
first|første
second|anden
third|tredje
last|sidste
next|næste
most|flest
more|flere
less|færre
same|samme
another|en anden
different|forskellige
all|alle
each|hvert
every|hver
only|kun
as|som
also|også
used|brugt
use|brug
uses|bruger
using|ved at bruge
can|kan
do|gør
does|gør
did|gjorde
has|har
have|har
had|havde
made|lavet
make|lav
called|kaldet
call|kalder
name|navn
named|kaldet
known|kendt
known as|kendt som
famous|berømt
associated|forbundet
associated with|forbundet med
usually|normalt
mainly|primært
often|ofte
common|almindelig
commonly|ofte
largest|største
smallest|mindste
longest|længste
shortest|korteste
highest|højeste
lowest|laveste
oldest|ældste
youngest|yngste
older|ældre
younger|yngre
live|leve
lives|lever
living|levende
alive|i live
animals|dyr
animal|dyr
plant|plante
plants|planter
flower|blomst
flowers|blomster
fruit|frugt
fruits|frugter
vegetables|grøntsager
vegetable|grøntsag
birds|fugle
bird|fugl
fish|fisk
mammal|pattedyr
insects|insekter
insect|insekt
body|krop
human|menneske
humans|mennesker
part|del
organ|organ
cell|celle
cells|celler
nucleus|cellekerne
dna|DNA
heart|hjerte
brain|hjerne
lungs|lunger
pancreas|bugspytkirtel
blood|blod
skin|hud
head|hoved
hand|hånd
hands|hænder
legs|ben
leg|ben
feet|fødder
foot|fod
eye|øje
eyes|øjne
ears|ører
ear|øre
nose|næse
mouth|mund
teeth|tænder
tooth|tand
hair|hår
tail|hale
wing|vinge
wings|vinger
bones|knogler
bone|knogle
sun|sol
moon|måne
star|stjerne
stars|stjerner
planet|planet
planets|planeter
earth|Jorden
mercury|Merkur
venus|Venus
mars|Mars
jupiter|Jupiter
saturn|Saturn
uranus|Uranus
neptune|Neptun
solar system|solsystem
solar|sol
space|rummet
sky|himmel
clouds|skyer
cloud|sky
rain|regn
snow|sne
wind|vind
weather|vejr
light|lys
sunlight|sollys
shadow|skygge
water|vand
sea|hav
ocean|ocean
river|flod
lake|sø
mountain|bjerg
mountains|bjerge
forest|skov
forests|skove
island|ø
islands|øer
desert|ørken
continent|kontinent
continents|kontinenter
capital|hovedstad
country|land
countries|lande
city|by
cities|byer
village|landsby
world|verden
north|nord
south|syd
east|øst
west|vest
northern|nordlig
southern|sydlig
eastern|østlig
western|vestlig
left|venstre
right|højre
up|op
upwards|opad
down|ned
downwards|nedad
front|foran
behind|bagved
before|før
after|efter
during|under
between|mellem
through|gennem
opposite|modsat
near|tæt på
around|omkring
above|over
below|under
inside|inde
outside|udenfor
map|kort
globe|globus
compass|kompas
direction|retning
france|Frankrig
french|fransk
germany|Tyskland
german|tysk
spain|Spanien
spanish|spansk
italy|Italien
italian|italiensk
united kingdom|Storbritannien
britain|Storbritannien
england|England
denmark|Danmark
danish|dansk
sweden|Sverige
norway|Norge
finland|Finland
netherlands|Nederlandene
dutch|nederlandsk
belgium|Belgien
switzerland|Schweiz
austria|Østrig
greece|Grækenland
egypt|Egypten
africa|Afrika
asia|Asien
europe|Europa
south america|Sydamerika
north america|Nordamerika
america|Amerika
united states|USA
usa|USA
canada|Canada
mexico|Mexico
brazil|Brasilien
argentina|Argentina
china|Kina
japan|Japan
japanese|japansk
india|Indien
russia|Rusland
australia|Australien
new zealand|New Zealand
kenya|Kenya
south africa|Sydafrika
paris|Paris
london|London
berlin|Berlin
rome|Rom
madrid|Madrid
athens|Athen
vienna|Wien
budapest|Budapest
copenhagen|København
stockholm|Stockholm
oslo|Oslo
helsinki|Helsinki
moscow|Moskva
tokyo|Tokyo
beijing|Beijing
new york|New York
washington|Washington
sydney|Sydney
science|videnskab
scientist|videnskabsmand
scientists|videnskabsfolk
biology|biologi
chemistry|kemi
chemical|kemisk
physics|fysik
physical|fysisk
nature|natur
natural|naturlig
history|historie
historical|historisk
culture|kultur
geography|geografi
art|kunst
arts|kunst
literature|litteratur
music|musik
musical|musikalsk
movies|film
movie|film
film|film
television|fjernsyn
tv|tv
books|bøger
book|bog
novel|roman
writer|forfatter
author|forfatter
wrote|skrev
written|skrevet
painter|maler
painted|malede
painting|maleri
paintings|malerier
composed|komponerede
composer|komponist
singer|sanger
song|sang
songs|sange
band|band
album|album
instrument|instrument
instruments|instrumenter
piano|klaver
guitar|guitar
violin|violin
trumpet|trompet
drums|trommer
flute|fløjte
sport|sport
sports|sport
athletics|atletik
football|fodbold
soccer|fodbold
tennis|tennis
basketball|basketball
volleyball|volleyball
swimming|svømning
running|løb
race|løb
game|spil
games|spil
played|spillede
play|spil
player|spiller
players|spillere
team|hold
teams|hold
score|score
point|point
points|point
won|vandt
win|vind
winning|vindende
lost|tabte
lose|tab
number|tal
numbers|tal
digits|cifre
digit|ciffer
sum|sum
subtract|træk fra
add|læg til
addition|addition
subtraction|subtraktion
multiply|gang
divide|dividér
multiplied|ganget
divided|divideret
percentage|procent
percent|procent
square|kvadrat
squared|i anden
cubed|i tredje
triangle|trekant
rectangle|rektangel
circle|cirkel
sides|sider
side|side
angles|vinkler
angle|vinkel
degrees|grader
derivative|afledte
factorial|fakultet
prime|primtal
calculate|beregn
evaluate|beregn
solve|løs
answer|svar
answers|svar
question|spørgsmål
questions|spørgsmål
trivia|quiz
clue|ledetråd
clues|ledetråde
secret|hemmelig
word|ord
words|ord
letter|bogstav
letters|bogstaver
starting|startende
starts|starter
start|start
beginning|begyndelse
end|slutning
ends|slutter
finish|slut
write|skriv
read|læs
say|sig
speak|tal
tell|fortæl
listen|lyt
hear|hør
look|se
see|se
draw|tegn
drawing|tegning
colored|farvet
color|farve
red|rød
blue|blå
green|grøn
yellow|gul
black|sort
white|hvid
purple|lilla
orange|orange
pink|lyserød
brown|brun
grey|grå
cat|kat
dog|hund
horse|hest
cow|ko
pig|gris
sheep|får
lion|løve
tiger|tiger
elephant|elefant
monkey|abe
frog|frø
snake|slange
spider|edderkop
butterfly|sommerfugl
bee|bi
ant|myre
duck|and
chicken|kylling
bear|bjørn
penguin|pingvin
dolphin|delfin
shark|haj
whale|hval
apple|æble
banana|banan
orange fruit|appelsin
lemon|citron
pear|pære
grape|drue
strawberry|jordbær
potato|kartoffel
carrot|gulerod
tomato|tomat
onion|løg
bread|brød
milk|mælk
cheese|ost
egg|æg
rice|ris
pasta|pasta
chocolate|chokolade
salt|salt
sugar|sukker
coffee|kaffe
tea|te
water bottle|vandflaske
cup|kop
bottle|flaske
plate|tallerken
spoon|ske
fork|gaffel
knife|kniv
food|mad
drink|drik
house|hus
home|hjem
room|rum
door|dør
window|vindue
roof|tag
floor|gulv
wall|væg
bed|seng
table|bord
chair|stol
sofa|sofa
lamp|lampe
clock|ur
watch|ur
phone|telefon
computer|computer
camera|kamera
car|bil
bus|bus
train|tog
plane|fly
boat|båd
ship|skib
bicycle|cykel
bike|cykel
wheels|hjul
wheel|hjul
road|vej
bridge|bro
tree|træ
leaves|blade
leaf|blad
garden|have
flowers|blomster
ice|is
fire|ild
air|luft
gas|gas
liquid|væske
solid|fast stof
oxygen|ilt
carbon|kulstof
carbon dioxide|kuldioxid
hydrogen|brint
nitrogen|kvælstof
iron|jern
gold|guld
silver|sølv
sodium|natrium
potassium|kalium
mercury metal|kviksølv
metal|metal
element|grundstof
elements|grundstoffer
symbol|symbol
atomic|atomar
atom|atom
atoms|atomer
unit|enhed
units|enheder
electrical|elektrisk
electricity|elektricitet
resistance|modstand
magnetic|magnetisk
gravity|tyngdekraft
force|kraft
energy|energi
temperature|temperatur
thermometer|termometer
photosynthesis|fotosyntese
cell nucleus|cellekerne
lightning|lyn
thunder|torden
starfish|søstjerne
colorful|farverig
ancient|gammel
empire|rige
emperor|kejser
king|konge
queen|dronning
royal|kongelig
war|krig
battle|slag
revolution|revolution
treaty|traktat
independence|uafhængighed
president|præsident
leader|leder
led|ledede
founded|grundlagde
built|byggede
invented|opfandt
invention|opfindelse
century|århundrede
year|år
years|år
month|måned
months|måneder
week|uge
day|dag
days|dage
hour|time
hours|timer
minute|minut
minutes|minutter
second|sekund
seconds|sekunder
morning|morgen
afternoon|eftermiddag
evening|aften
night|nat
winter|vinter
spring|forår
summer|sommer
autumn|efterår
fall|efterår
season|årstid
sunrise|solopgang
sunset|solnedgang
true|sandt
false|falsk
yes|ja
no|nej
none|ingen
nothing|intet
something|noget
example|eksempel
examples|eksempler
correct|rigtig
wrong|forkert
extra|ekstra
optional|valgfrit
required|påkrævet
allowed|tilladt
not allowed|ikke tilladt
always|altid
never|aldrig
sometimes|nogle gange
easy|let
medium|middel
hard|svær
very|meget
simple|enkel
quick|hurtig
fast|hurtig
slow|langsom
large|stor
small|lille
big|stor
little|lille
new|ny
old|gammel
fewer|færre
more than|mere end
less than|mindre end
at least|mindst
exactly|præcis
within|inden for
until|indtil
if|hvis
then|så
because|fordi
while|mens
other|anden
others|andre
together|sammen
alone|alene
individually|hver for sig
no timer|ingen timer
timer|timer
card|kort
cards|kort
paper|papir
pencil|blyant
pen|kuglepen
round|runde
rounds|runder
turn|tur
turns|ture
time|tid
challenge|udfordring
rule|regel
rules|regler
winner|vinder
opponent|modstander
defender|forsvarer
neutral|neutral
judge|dommer
judges|dommere
rhyme|rim
rhymes|rim
story|historie
stories|historier
headline|overskrift
headlines|overskrifter
memory|hukommelse
remember|huske
recall|huske
repeat|gentag
repeating|gentagelse
same time|samtidig
secret word|hemmeligt ord
starting word|startord
category|kategori
category flood|kategorijagt
no mistakes|ingen fejl
mistakes|fejl
mistake|fejl`;
const TERMS=new Map();for(const line of TERMS_RAW.split('\n')){const p=line.indexOf('|');if(p>0)TERMS.set(line.slice(0,p).toLowerCase(),line.slice(p+1));}
const EXTRA_RAW=`topic|emne
many|mange
take|tag
active|aktiv
you|du
your|din
scores|scorer
both|begge
than|end
features|indeholder
minus|minus
list|liste
blocks|forhindrer
defending|forsvarende
showing|viser
tie|uafgjort
correctly|korrekt
study|betragt
people|mennesker
directed|instrueret
mixed|blandet
level|niveau
guess|gæt
proficiency|færdighedsniveau
own|egen
target|mål
writes|skriver
least|mindst
multiple|flere
ball|bold
telescope|teleskop
now|nu
choice|valgmulighed
open|åben
item|genstand
expires|udløber
get|få
must|skal
top|øverst
connected|forbundet
works|virker
wins|vinder
their|deres
check|kontrollér
separately|hver for sig
once|én gang
not|ikke
touch|rør
theme|tema
revealing|visning
scene|scene
numbered|nummereret
ignoring|ignorér
bottom|bund
main|hoved
respectively|henholdsvis
actions|handlinger
spaces|mellemrum
punctuation|tegnsætning
extracted|udtrukne
selected|valgte
long|lang
per|pr.
contains|indeholder
character|figur
phrases|udtryk
caller|oplæser
teammate|holdkammerat
teammates|holdkammerater
count|tæl
mime|mime
find|find
work|arbejd
out|ud
says|siger
crayons|farveblyanter
playing|spiller
traditional|traditionel
shape|figur
throw|kast
stop|stop
follows|følger
men|mænd
parentheses|parenteser
situations|situationer
hint|tip
land|land
even|lige
things|ting
hat|hat
rains|regner
titan|Titan
person|person
opera|opera
objects|genstande
system|system
odd|ulige
clap|klap
loses|taber
puppy|hvalp
african|afrikansk
shoulder|skulder
falls|falder
frozen|frossen
comes|kommer
language|sprog
rock|sten
glacier|gletsjer
funny|sjov
standard|standard
begin|begynd
shoes|sko
young|ung
duel|duel
includes|indeholder
tungsten|wolfram
astronaut|astronaut
arm|arm
festival|festival
laugh|grin
olympic|olympisk
dioxide|dioxid
formulated|formulerede
animated|animeret
united|forenet
help|hjælp
museum|museum
motion|bevægelse
lighthouse|fyrtårn
castle|slot
staircase|trappe
picture|billede
jump|hop
about|om
distinct|forskellige
school|skole
snail|snegl
wednesday|onsdag
breathe|træk vejret
ladder|stige
cathedral|domkirke
may|må
show|vis
beats|slår
type|type
counts|tæller
valid|gyldig
over|over
cold|kold
fingers|fingre
strings|strenge
rings|ringe
mathematician|matematiker
laws|love
microscope|mikroskop
beach|strand
family|familie
immediately|straks
switch|skift
gives|giver
evaporation|fordampning
planetary|planetarisk
layer|lag
cannot|kan ikke
robot|robot
someone|nogen
term|udtryk
fairy|eventyr
tale|fortælling
rocket|raket
cake|kage
hot|varm
shell|skal
grows|vokser
raincoat|regnfrakke
adult|voksen
bow|bue
mitochondrion|mitokondrie
troposphere|troposfære
volcano|vulkan
set|sæt
event|begivenhed
making|laver
ground|jord
checks|kontrollerer
wear|bære
earns|tjener
trunk|snabel
baby|baby
toothbrush|tandbørste
roots|rødder
baking|bagning
ended|sluttede
root|rod
needs|behøver
shoe|sko
rainbow|regnbue
waterfall|vandfald
climbing|klatring
actor|skuespiller
situation|situation
whoever|den der
scissors|saks
best|bedst
decisive|afgørende
american|amerikansk
dynasty|dynasti
series|serie
makes|laver
plays|spiller
blinking|blinker
otherwise|ellers
touching|berøring
paint|maling
kitten|killing
hypotenuse|hypotenuse
ribosome|ribosom
principle|princip
church|kirke
sandwich|sandwich
anchor|anker
tower|tårn
chimney|skorsten
farmer|bonde
walking|går
riding|rider
final|endelig
man|mand
give|giv
english|engelsk
caterpillar|larve
herbivores|planteædere
membrane|membran
measures|måler
stable|stald
suitcase|kuffert
medieval|middelalderlig
constellation|stjernebillede
theater|teater
fifth|femte
castles|slotte
girl|pige
lantern|lygte
metamorphosis|metamorfose
celebration|fejring
honey|honning
put|læg
moving|bevæger sig
formula|formel
mathematical|matematisk
constant|konstant
greek|græsk
artist|kunstner
hammock|hængekøje
there|der
shopping|indkøb
marble|marmor
dance|dans
group|gruppe
faces|ansigter
renaissance|renæssance
fails|mislykkes
approximately|cirka
toward|mod
half|halv
atmospheric|atmosfærisk
flux|flux
zero|nul
kite|drage
balloon|ballon
backpack|rygsæk
tunnel|tunnel
include|medtag
windows|vinduer
factory|fabrik
harvest|høst
expression|udtryk
washing|vask
reverse|omvendt
object|genstand
involves|indebærer
gymnastics|gymnastik
like|ligesom
sound|lyd
goes|går
twelve|tolv
distance|afstand
keys|tangenter
helps|hjælper
changing|ændring
holds|holder
portuguese|portugisisk
runs|løber
developed|udviklede
plus|plus
stones|sten
glass|glas
rowing|roning
acting|skuespil
dark|mørk
them|dem
run|løb
wants|vil
olympics|OL
major|større
love|kærlighed
especially|især
voices|stemmer
supported|understøttet
power|kraft
mixing|blanding
fins|finner
rise|stige
warsaw|Warszawa
beat|slå
board|bræt
parachute|faldskærm
dome|kuppel
orchestra|orkester
equilibrium|ligevægt
opening|åbning
blowing|blæser
skiing|skiløb
performing|udfører
pigs|grise
track|bane
kind|slags
form|form
released|udkom
takes|tager
basket|kurv
kingdom|kongerige
poland|Polen
thailand|Thailand
croatia|Kroatien
lisbon|Lissabon
ljubljana|Ljubljana
children|børn
jazz|jazz
repeats|gentager
repeated|gentaget
clockwise|med uret
saying|siger
satellite|satellit
facts|fakta
meow|miav
walks|går
pacific|Stillehavet
insulin|insulin
great|store
privately|hemmeligt
drum|tromme
crane|kran
spiral|spiral
reveal|vis
cars|biler
decorative|dekorativ
mirror|spejl
requested|efterspurgte
details|detaljer
goal|mål
alternate|skiftes
scoring|pointgivning
button|knap
silently|lydløst
speech|tale
reaction|reaktion
sentences|sætninger
replayed|spilles om
replay|omkamp
korean|koreansk
traditionally|traditionelt
mean|betyder
tradition|tradition
measured|målt
stare|stirre
blinks|blinker
decide|beslut
fairly|retfærdigt
notebook|notesbog
blanket|tæppe
sandwich|sandwich
umbrella|paraply
crown|krone
camel|kamel
horseback|på hesteryg
homework|lektier
pencil case|penalhus
basketball hoop|basketkurv
react within|reagér inden for
reverse the rules|byt om på reglerne
switch now|skift nu
first five|de første fem
first 5|de første 5
odd numbers|ulige tal
even numbers|lige tal
odd = clap|ulige = klap
even = touch shoulder|lige = rør skulderen
`;for(const line of EXTRA_RAW.split('\n')){const i=line.indexOf('|');if(i>0)TERMS.set(line.slice(0,i).toLowerCase(),line.slice(i+1));}
const SPECIAL_TITLES=['Finding Nemo','Frozen','Toy Story','The Lion King','Star Wars','Home Alone','Snow White and the Seven Dwarfs','The Wizard of Oz','Despicable Me','Inside Out','Harry Potter','Black Panther','The Hunger Games','The Lord of the Rings','The Little Mermaid','The Simpsons','Game of Thrones','Breaking Bad','Stranger Things','The Office','The Crown','House of the Dragon','The Hobbit','The Beatles','The Rolling Stones','One Direction','Pride and Prejudice','Animal Farm','The Metamorphosis','One Hundred Years of Solitude','The Great Gatsby','The Catcher in the Rye','The Old Man and the Sea','A Tale of Two Cities','To Kill a Mockingbird','The Sound of Music','Mary Poppins','Moana','Cinderella','SpongeBob SquarePants','The Godfather','The Matrix','The Dark Knight','The Avengers','Beauty and the Beast','The Little Prince','The Last Supper','The Starry Night','The Persistence of Memory','Mona Lisa','Guernica','Romeo and Juliet','Hamlet','Macbeth','Othello','King Lear','Titanic','Bambi','Shrek','Cars','Up','Paddington','Minions','Hogwarts','Bohemian Rhapsody','Imagine','Thriller','Let It Be','Hey Jude','Happy Birthday','Yesterday','Billie Jean','Like a Rolling Stone','I Have a Dream','New York','South Africa','North America'];
const esc=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
const TITLE_RE=new RegExp('(?<![\\p{L}])('+SPECIAL_TITLES.sort((a,b)=>b.length-a.length).map(esc).join('|')+')(?![\\p{L}])','giu');
const TERM_RE=new RegExp('(?<![\\p{L}\\p{N}])('+[...TERMS.keys()].sort((a,b)=>b.length-a.length).map(esc).join('|')+')(?![\\p{L}\\p{N}])','giu');
function cap(s){return s[0]?.toUpperCase()+s.slice(1);}
function gloss(value){
 const pieces=[];const protectedText=String(value).replace(TITLE_RE,s=>{const ix=pieces.push(s)-1;return `¤${ix}¤`;});
 return protectedText.replace(TERM_RE,s=>{let v=TERMS.get(s.toLowerCase())||s;return s.length>1&&s===s.toUpperCase()?v.toUpperCase():/^[A-Z]/.test(s)?cap(v):v;}).replace(/¤(\d+)¤/g,(_,i)=>pieces[Number(i)]);
}
const FRAMES=[
 [/^Did (.+?) win\?$/i,m=>`Vandt ${gloss(m[1])}?`],
 [/^(.+?) plays alone\.$/i,m=>`${gloss(m[1])} spiller alene.`],
 [/^(.+?) turns overall · ~(.+?) minutes per full round$/i,m=>`${m[1]} ture i alt · cirka ${m[2]} minutter pr. runde`],
 [/^~(.+?) minutes$/i,m=>`cirka ${m[1]} minutter`],
 [/^(\d+) of (\d+) categories enabled$/i,m=>`${m[1]} af ${m[2]} kategorier valgt`],
 [/^Card hides in (\d+) seconds$/i,m=>`Kortet skjules om ${m[1]} sekunder`],
 [/^Reveal for (\d+) seconds$/i,m=>`Vis kortet i ${m[1]} sekunder`],
 [/^Start the (\d+)-second timer before revealing this card\.$/i,m=>`Start timeren på ${m[1]} sekunder, før kortet vises.`],
 [/^CLOCK NEEDED: (\d+) seconds\. (.+)$/i,m=>`TIMER NØDVENDIG: ${m[1]} sekunder. ${gloss(m[2])}`],
 [/^(.+?) ANSWER KEY$/i,m=>`${gloss(m[1])} · SVAR`],
 [/^Write as many (.+?) as possible\.$/i,m=>`Skriv så mange ${gloss(m[1])} som muligt.`],
 [/^NAME (\d+) (.+?)\.$/i,m=>`NÆVN ${m[1]} ${gloss(m[2])}.`],
 [/^EXAMPLE \(COUNTS AS ONE\): (.+?)\.$/i,m=>`EKSEMPEL (TÆLLER SOM ÉT): ${gloss(m[1])}.`],
 [/^NAME (\d+) MORE\.$/i,m=>`NÆVN ${m[1]} MERE.`],
 [/^Which planet is the Red Planet\?$/i,()=>`Hvilken planet kaldes den røde planet?`],
 [/^What is the capital of the United Kingdom\?$/i,()=>`Hvad er hovedstaden i Storbritannien?`],
 [/^What is the capital of (.+?)\?$/i,m=>`Hvad er hovedstaden i ${gloss(m[1])}?`],
 [/^Which country has (.+?) as its capital\?$/i,m=>`Hvilket land har ${gloss(m[1])} som hovedstad?`],
 [/^Which country has the city of (.+?)\?$/i,m=>`I hvilket land ligger byen ${gloss(m[1])}?`],
 [/^Which country (.+?)\?$/i,m=>`Hvilket land ${gloss(m[1])}?`],
 [/^Who (?:was|is) the first (.+?) to (.+?)\?$/i,m=>`Hvem var den første ${gloss(m[1])}, der ${gloss(m[2])}?`],
 [/^Who (?:was|is) (.+?)\?$/i,m=>`Hvem var ${gloss(m[1])}?`],
 [/^Who wrote (.+?)\?$/i,m=>`Hvem skrev ${gloss(m[1])}?`],
 [/^Who painted (.+?)\?$/i,m=>`Hvem malede ${gloss(m[1])}?`],
 [/^Who directed (.+?)\?$/i,m=>`Hvem instruerede ${gloss(m[1])}?`],
 [/^Who composed (.+?)\?$/i,m=>`Hvem komponerede ${gloss(m[1])}?`],
 [/^Which (.+?) features (.+?)\?$/i,m=>`Hvilken ${gloss(m[1])} har ${gloss(m[2])} med?`],
 [/^Which (.+?) tells the story of (.+?)\?$/i,m=>`Hvilken ${gloss(m[1])} fortæller historien om ${gloss(m[2])}?`],
 [/^Which (.+?) has (.+?)\?$/i,m=>`Hvilken ${gloss(m[1])} har ${gloss(m[2])}?`],
 [/^Which planet is called (.+?)\?$/i,m=>`Hvilken planet kaldes ${gloss(m[1])}?`],
 [/^Which planet (.+?)\?$/i,m=>`Hvilken planet ${gloss(m[1])}?`],
 [/^Which animal (.+?)\?$/i,m=>`Hvilket dyr ${gloss(m[1])}?`],
 [/^Which city (.+?)\?$/i,m=>`Hvilken by ${gloss(m[1])}?`],
 [/^Which scientist (.+?)\?$/i,m=>`Hvilken videnskabsmand ${gloss(m[1])}?`],
 [/^Which (movie|film|book|novel|song|sport|instrument|artist|actor|writer|author|language) (.+?)\?$/i,m=>`Hvilken ${gloss(m[1])} ${gloss(m[2])}?`],
 [/^Which part of (.+?) usually develops into (.+?)\?$/i,m=>`Hvilken del af ${gloss(m[1])} udvikler sig normalt til ${gloss(m[2])}?`],
 [/^Which part of (.+?) (.+?)\?$/i,m=>`Hvilken del af ${gloss(m[1])} ${gloss(m[2])}?`],
 [/^What is the chemical symbol for (.+?)\?$/i,m=>`Hvad er det kemiske symbol for ${gloss(m[1])}?`],
 [/^Which (?:chemical )?element has (?:the )?(?:chemical )?symbol (.+?)\?$/i,m=>`Hvilket grundstof har symbolet ${m[1]}?`],
 [/^What is the atomic number of (.+?)\?$/i,m=>`Hvad er atomnummeret for ${gloss(m[1])}?`],
 [/^Which (?:chemical )?element has atomic number (.+?)\?$/i,m=>`Hvilket grundstof har atomnummer ${m[1]}?`],
 [/^What is the SI unit of (.+?)\?$/i,m=>`Hvad er SI-enheden for ${gloss(m[1])}?`],
 [/^What is (\d+)% of (\d+)\?$/i,m=>`Hvad er ${m[1]} % af ${m[2]}?`],
 [/^What is (.+?) squared\?$/i,m=>`Hvad er ${m[1]} i anden potens?`],
 [/^What is (.+?) cubed\?$/i,m=>`Hvad er ${m[1]} i tredje potens?`],
 [/^Calculate (.+?)\.$/i,m=>`Beregn ${gloss(m[1])}.`],
 [/^Evaluate (.+?)\.$/i,m=>`Beregn ${gloss(m[1])}.`],
 [/^Solve (.+?)\.$/i,m=>`Løs: ${gloss(m[1])}.`],
 [/^What color is (.+?)\?$/i,m=>`Hvilken farve har ${gloss(m[1])}?`],
 [/^How many (.+?) are in (.+?)\?$/i,m=>`Hvor mange ${gloss(m[1])} er der i ${gloss(m[2])}?`],
 [/^How many (.+?) does (.+?) have\?$/i,m=>`Hvor mange ${gloss(m[1])} har ${gloss(m[2])}?`],
 [/^How many (.+?) do (.+?) have\?$/i,m=>`Hvor mange ${gloss(m[1])} har ${gloss(m[2])}?`],
 [/^What do (?:we|you) call (.+?)\?$/i,m=>`Hvad kalder man ${gloss(m[1])}?`],
 [/^What do you use to (.+?)\?$/i,m=>`Hvad bruger du til at ${gloss(m[1])}?`],
 [/^What does (.+?) stand for\?$/i,m=>`Hvad står ${gloss(m[1])} for?`],
 [/^What is the (.+?) called\?$/i,m=>`Hvad hedder ${gloss(m[1])}?`],
 [/^What is (.+?) called\?$/i,m=>`Hvad kaldes ${gloss(m[1])}?`],
 [/^Which (.+?) is known as (.+?)\?$/i,m=>`Hvilken ${gloss(m[1])} er kendt som ${gloss(m[2])}?`],
 [/^What is (.+?)\?$/i,m=>`Hvad er ${gloss(m[1])}?`],
 [/^Which (.+?)\?$/i,m=>`Hvilken ${gloss(m[1])}?`],
 [/^How (.+?)\?$/i,m=>`Hvordan ${gloss(m[1])}?`],
 [/^Why (.+?)\?$/i,m=>`Hvorfor ${gloss(m[1])}?`],
 [/^Where (.+?)\?$/i,m=>`Hvor ${gloss(m[1])}?`],
 [/^When (.+?)\?$/i,m=>`Hvornår ${gloss(m[1])}?`],
 [/^Does (.+?)\?$/i,m=>`Gør ${gloss(m[1])}?`],
 [/^Did (.+?)\?$/i,m=>`Gjorde ${gloss(m[1])}?`],
 [/^Was (.+?)\?$/i,m=>`Var ${gloss(m[1])}?`],
 [/^Were (.+?)\?$/i,m=>`Var ${gloss(m[1])}?`]
];
const RHYME_WORDS={CAT:'KAT',DOG:'HUND',SUN:'SOL',STAR:'STJERNE',LIGHT:'LYS',BALL:'BOLD',TREE:'TRÆ',FISH:'FISK',RAIN:'REGN',DAY:'DAG',BOOK:'BOG',MOON:'MÅNE',BLUE:'BLÅ',RED:'RØD',GREEN:'GRØN',NIGHT:'NAT'};
function translateLine(raw){if(!raw||!/[a-z]/i.test(raw))return raw;
 const humanReviewed = REVIEWED_DANISH_DESCRIPTIONS[raw] ?? REVIEWED_DANISH_TOPIC_QUESTIONS[raw] ?? REVIEWED_DANISH_CLASSIC_QUESTIONS[raw] ?? REVIEWED_DANISH_ANSWERS[raw];
 if(humanReviewed != null) return humanReviewed;
 if(REVIEWED_DANISH_SENTENCES.has(raw)) return raw;
 const outer=raw.match(/^(\s*)(.*?)(\s*)$/s),s=outer?.[2]||raw;const wrap=v=>(outer?.[1]||'')+v+(outer?.[3]||'');
 if(UI[s]!=null)return wrap(UI[s]);
 if(s.startsWith('LIVING ROOM')&&s.includes('BATTLES'))return raw;
 if(/^[A-Z0-9+\-=×÷^.,:;\s\[\]()/%]+$/.test(s)&&!/[A-Z]{3,}/.test(s))return raw;
 // Preserve multiple-choice labels and answer-key letters A–D.
 const answerChoice=s.match(/^([A-D])(\s*[).—–-]\s+)(.+)$/s);
 if(answerChoice&&answerChoice[2].includes('—'))return wrap(answerChoice[1]+answerChoice[2]+gloss(answerChoice[3]));
 const choicesOnly=[...s.matchAll(/([A-D]\)\s*)(.*?)(?=\s+[A-D]\)|$)/gs)];
 if(choicesOnly.length&&choicesOnly[0].index===0)return wrap(choicesOnly.map(m=>m[1]+(REVIEWED_DANISH_ANSWERS[m[2]]||gloss(m[2]))).join(' '));
 const nth=s.match(/^(\d{1,2}[.)]\s*)(.*)$/s);if(nth)return wrap(nth[1]+translateLine(nth[2]));
 const topic=s.match(/^TOPIC:\s*(.+)$/i);if(topic)return wrap('EMNE: '+translateLine(topic[1]));
 const word=s.match(/^(Starting rhyme word|Starting word|Rhyme with|Start with):\s*(.+)$/i);if(word)return wrap((UI[word[1]]||gloss(word[1]))+': '+(RHYME_WORDS[word[2].trim().toUpperCase()]||gloss(word[2])));
 const reaction=s.match(/^CALLER:\s*READ ONE NUMBER EVERY (\d+) SECONDS\.$/i);if(reaction)return wrap(`OPLÆSER: LÆS ÉT TAL OP HVERT ${reaction[1]}. SEKUND.`);
 const secrets=s.match(/^SECRET WORDS — STUDY FOR (\d+) SECONDS$/i);if(secrets)return wrap(`HEMMELIGE ORD — SE PÅ DEM I ${secrets[1]} SEKUNDER`);
 const actions=s.match(/^SECRET ACTIONS — (.+)$/i);if(actions)return wrap(`HEMMELIGE HANDLINGER — ${gloss(actions[1])}`);
 const exactQuestion=s.match(/^(.+?\?)(\s+[A-D]\)\s+.+)?$/s);
 if(exactQuestion&&(REVIEWED_DANISH_TOPIC_QUESTIONS[exactQuestion[1]] || REVIEWED_DANISH_CLASSIC_QUESTIONS[exactQuestion[1]] || DANISH_QUESTION_OVERRIDES[exactQuestion[1]])){
  let value=REVIEWED_DANISH_TOPIC_QUESTIONS[exactQuestion[1]] || REVIEWED_DANISH_CLASSIC_QUESTIONS[exactQuestion[1]] || DANISH_QUESTION_OVERRIDES[exactQuestion[1]];
  if(exactQuestion[2])value+=' '+[...exactQuestion[2].matchAll(/([A-D]\)\s*)(.*?)(?=\s+[A-D]\)|$)/gs)].map(x=>x[1]+(REVIEWED_DANISH_ANSWERS[x[2]]||gloss(x[2]))).join(' ');
  return wrap(value);
 }
 const choices=s.match(/^(.*?)(\s+[A-D]\)\s+.+)$/s);
 if(choices){const arr=[...choices[2].matchAll(/([A-D]\)\s*)(.*?)(?=\s+[A-D]\)|$)/gs)];if(arr.length>1)return wrap(translateLine(choices[1])+' '+arr.map(m=>m[1]+(REVIEWED_DANISH_ANSWERS[m[2]]||gloss(m[2]))).join(' '));}
 const allit=s.match(/^Write (\d+)-word phrases\. Every word starts with ([A-Z])\.$/i);if(allit)return wrap(`Skriv udtryk på ${allit[1]} ord. Alle ord begynder med ${allit[2]}.`);
 for(const [pattern,make] of FRAMES){const match=s.match(pattern);if(match)return wrap(make(match));}
 return wrap(gloss(s));
}
// Reviewed Danish source cards override the old English-word glossary.
// Working directly from the source keeps hidden clues and answer keys aligned.
export function danish(value){
 if(value==null)return value;
 const raw=String(value);
 const verifiedUi=reviewedDanishInterface(raw);
 if(verifiedUi!==null)return (raw.match(/^\s*/)?.[0]||'')+verifiedUi+(raw.match(/\s*$/)?.[0]||'');
 if(Object.hasOwn(REVIEWED_DANISH_DESCRIPTIONS,raw))return REVIEWED_DANISH_DESCRIPTIONS[raw];
 const card=reviewedDanishCard(raw);
 if(card!=null)return card;
 const dance=raw.match(/^Dance on the first one minute of this song: (.+)$/s);
 if(dance)return 'Dans til det første minut af denne sang: '+dance[1];
 if(raw.startsWith('Dans til det første minut af denne sang: '))return raw;
 if(Object.hasOwn(REVIEWED_DANISH_SHAPES,raw))return REVIEWED_DANISH_SHAPES[raw];
 if(raw.startsWith('STORY THEME: ')){
  const [theme,rule]=raw.split('\n');
  const subject=REVIEWED_DANISH_STORY_THEMES[theme.slice('STORY THEME: '.length)]||theme.slice('STORY THEME: '.length);
  const range=rule?.match(/letters (A–[A-Z]|A–Z)\.?$/);
  return 'HISTORIENS TEMA: '+subject+'\nFortæl en sammenhængende historie. Lad sætningerne begynde med bogstaverne '+(range?.[1]||'A–Z')+' i rækkefølge.';
 }
 if(/^\d+ (?:NORMAL|GOOFY) SITUATIONS —/.test(raw)){
  const [header,...rows]=raw.split('\n');
  const title=header.replace('NORMAL SITUATIONS','ALMINDELIGE SITUATIONER').replace('GOOFY SITUATIONS','FJOLLEDE SITUATIONER').replace('maximum 10 words per headline','højst 10 ord pr. overskrift');
  return title+'\n'+rows.map(line=>{const m=line.match(/^(\d+\.\s*)(.*)$/);return m?m[1]+(REVIEWED_DANISH_HEADLINES[m[2]]||m[2]):line}).join('\n');
 }
 if(raw.startsWith('DRAW ONE SCENE: ')){
  const [header,...rows]=raw.split('\n');
  const name=header.slice('DRAW ONE SCENE: '.length);
  return 'TEGN ÉN SCENE: '+(REVIEWED_DANISH_DRAW_THEMES[name]||name)+'\n'+rows.map(line=>{const m=line.match(/^(\d+\.\s*)(.*)$/);return m?m[1]+(REVIEWED_DANISH_DRAW_ITEMS[m[2]]||m[2]):line}).join('\n');
 }
 const acting=raw.match(/^(SECRET (?:MIME CLUES|ACTIONS) — (?:TEN|FIVE))\n([^\n]+)$/);
 if(acting){
  const header=acting[1].startsWith('SECRET MIME')?'HEMMELIGE MIMEOPGAVER — TI':'HEMMELIGE HANDLINGER — FEM';
  return header+'\n'+acting[2].split(' • ').map(a=>REVIEWED_DANISH_ACTIONS[a]||gloss(a)).join(' • ');
 }
 // Danish Rebus and Codebreaker packs are already in Danish, so do not re-encode them.
 if(/^(?:ERSTAT TALLET|ERSTAT TALLENE|HEMMELIGT ORD:)/.test(raw))return raw;
 if(UI[raw]!=null)return UI[raw];
 return raw.split('\n').map(translateLine).join('\n');
}
export function translateDanishPage(document,language){const isDanish=language==='da';if(!isDanish)return;
 if(document.documentElement)document.documentElement.lang='da';document.title='Living Room Battles V4.12 — Spilaften';
 const walker=document.createTreeWalker(document.body,document.defaultView?.NodeFilter?.SHOW_TEXT??4);const nodes=[];let node;
 while((node=walker.nextNode())){const parent=node.parentElement;if(!parent||parent.closest('script,style,textarea,code,[data-no-translate]'))continue;if(node.nodeValue?.trim())nodes.push(node);}
 for(const n of nodes)n.nodeValue=danish(n.nodeValue);
 for(const el of document.querySelectorAll('[aria-label],[placeholder],[title]'))for(const a of ['aria-label','placeholder','title'])if(el.hasAttribute(a))el.setAttribute(a,danish(el.getAttribute(a)));
}
