// V4.12: Three-language worked practice cards. These are illustrative only:
// never reuse the current secret prompt, answer key, timer or turn state.
// Keep this data independent of the selected game language: each guest may
// display the same round in their own language.
export const EXAMPLE_GAME_IDS = Object.freeze([
  "rebus", "riddle-round", "last-letter-duel", "category-flood",
  "rhyme-rally", "shopping-basket", "target-number", "missing-numbers", "alphabet-story",
  "count-to-thirty", "codebreaker", "word-length-staircase", "no-e-parade", "guessing-the-word",
]);

const L = {
  en: {
    icon: "Show a worked example", heading: "Example with the answer", practice: "PRACTICE CARD · NOT YOUR LIVE QUESTION",
    task: "Example challenge", answer: "Answer / example result", why: "How it works",
    footer: "This example never counts as your current question or turn. Your live card stays hidden until you open it normally.",
    running: "If the game timer is already running, it continues while this example is open.", close: "Close example",
  },
  nl: {
    icon: "Bekijk een voorbeeld met antwoord", heading: "Voorbeeld met antwoord", practice: "OEFENKAART · NIET JE ECHTE SPEELKAART",
    task: "Voorbeeldopdracht", answer: "Antwoord / voorbeelduitslag", why: "Zo werkt het",
    footer: "Dit voorbeeld telt nooit mee voor de huidige vraag of beurt. De echte speelkaart blijft verborgen totdat je deze zelf opent.",
    running: "Als de timer al loopt, blijft deze doorlopen terwijl je het voorbeeld bekijkt.", close: "Sluit voorbeeld",
  },
  da: {
    icon: "Vis et eksempel med svar", heading: "Eksempel med svar", practice: "ØVEKORT · IKKE DIT RIGTIGE SPILKORT",
    task: "Eksempelopgave", answer: "Svar / eksempelresultat", why: "Sådan fungerer det",
    footer: "Dette eksempel tæller ikke som dit aktuelle spørgsmål eller din tur. Det rigtige spilkort forbliver skjult, indtil du selv åbner det.",
    running: "Hvis timeren allerede kører, fortsætter den, mens du ser eksemplet.", close: "Luk eksemplet",
  },
};
export function exampleUi(language = "en") { return L[language] || L.en; }

const practice = {
  rebus: {
    en: {
      title: "Rebus: Secret Word",
      intro: "Answer each short clue, then take the indicated letter. Put those letters in order to find the secret word.",
      task: "1. Yellow, curved fruit? Take letter 1.\n2. Red or green fruit from a tree? Take letter 1.\n3. Colour of grass? Take letter 1.",
      answer: "BANANA → B\nAPPLE → A\nGREEN → G\nSecret word: BAG",
      why: "B + A + G = BAG. In the real duel, each side gets only ONE final guess. A wrong first guess loses immediately.",
    },
    nl: {
      title: "Rebus: geheim woord",
      intro: "Beantwoord elke vraag en neem de aangegeven letter van het antwoord. Zet de letters achter elkaar om het geheime woord te vinden.",
      task: "1. Welke gele vrucht is krom? Neem letter 1.\n2. Welk fruit groeit aan een boom en kan rood of groen zijn? Neem letter 1.\n3. Waarmee verlicht je een kamer? Neem letter 1.",
      answer: "BANAAN → B\nAPPEL → A\nLAMP → L\nGeheim woord: BAL",
      why: "B + A + L = BAL. Tijdens de echte wedstrijd mag iedere kant het geheime woord maar ÉÉN keer definitief raden. Een eerste foute gok betekent direct verlies.",
    },
    da: {
      title: "Rebus: hemmeligt ord",
      intro: "Besvar hvert spørgsmål, og tag bogstavet med det angivne nummer fra svaret. Sæt bogstaverne sammen til det hemmelige ord.",
      task: "1. Hvilken gul frugt er krum? Tag bogstav 1.\n2. Hvad kalder man frossent vand, som man kan spise? Tag bogstav 1.\n3. Hvad bruger man til at lyse et værelse op? Tag bogstav 1.",
      answer: "BANAN → B\nIS → I\nLAMPE → L\nHemmeligt ord: BIL",
      why: "B + I + L = BIL. I den rigtige dyst har hver side kun ÉT endeligt gæt. Et forkert første gæt betyder øjeblikkeligt nederlag.",
    },
  },
  "riddle-round": {
    en: { title: "Riddle Round", intro: "Read the riddle carefully. Guess what it describes; the answers are checked after the attempt.", task: "What gets wetter the more it dries?", answer: "A towel.", why: "A towel dries things by absorbing their water, so the towel itself gets wet. The real card shows several riddles; how many you must solve depends on your level." },
    nl: { title: "Raadselronde", intro: "Lees het raadsel goed. Bedenk wat ermee wordt bedoeld. De antwoorden worden na afloop gecontroleerd.", task: "Wat wordt natter naarmate het meer droogt?", answer: "Een handdoek.", why: "Een handdoek droogt andere dingen door water op te nemen en wordt daardoor zelf nat. De echte speelkaart bevat meerdere raadsels. Het vereiste aantal goede antwoorden hangt af van je niveau." },
    da: { title: "Gåderunde", intro: "Læs gåden grundigt, og find ud af, hvad den beskriver. Svarene kontrolleres efter forsøget.", task: "Hvad bliver vådere, jo mere det tørrer?", answer: "Et håndklæde.", why: "Et håndklæde tørrer andre ting ved at suge vand til sig og bliver derfor selv vådt. Det rigtige kort indeholder flere gåder. Det krævede antal rigtige svar afhænger af niveauet." },
  },
  "no-e-parade": {
    en: {title: "No-E Parade", intro: "Say a different real word without the letter E on each turn. No repeats. Count the seconds aloud; there is no app timer or game card.",
      task: "Allowed word chain: SUN → CAT → DOG. What if the next player says TREE? Or repeats CAT?",
      answer: "SUN ✓ · CAT ✓ · DOG ✓\nTREE ✕ (contains E)\nCAT again ✕ (repeated)",
      why: "Every valid word must be different and contain no E. A player also fails by not answering within the turn limit. In a duel, the active side scores only if the defender fails first."},
    nl: {title: "Woorden zonder E", intro: "Noem om de beurt verschillende bestaande woorden zonder de letter E. Herhaal geen woorden. Tel zelf de seconden; er is geen app-timer of speelkaart.",
      task: "Goede reeks: ZON → KAT → HOND. Wat gebeurt er als de volgende speler BEER zegt? Of KAT herhaalt?",
      answer: "ZON ✓ · KAT ✓ · HOND ✓\nBEER ✕ (bevat de letter E)\nKAT opnieuw ✕ (al genoemd)",
      why: "Elk geldig woord is nieuw en bevat geen E. Ook wie niet op tijd antwoordt, valt af. In een duel scoort de actieve kant alleen als de tegenstander als eerste faalt."},
    da: {title: "Ord uden E", intro: "Sig på skift forskellige rigtige ord uden bogstavet E. Ingen gentagelser. Tæl selv sekunderne; der er hverken app-timer eller spilkort.",
      task: "Gyldig kæde: SOL → KAT → HUND. Hvad sker der, hvis næste spiller siger HEST? Eller gentager SOL?",
      answer: "SOL ✓ · KAT ✓ · HUND ✓\nHEST ✕ (indeholder E)\nSOL igen ✕ (er allerede sagt)",
      why: "Hvert gyldigt ord skal være nyt og må ikke indeholde E. Man taber også ved at svare for sent. I en dyst får den aktive side kun point, hvis modstanderen fejler først."},
  },
  "guessing-the-word": {
    en: {title: "Guessing the Word", intro: "Only one teammate sees the five pairs below. That player describes each answer without saying the answer, its forbidden clue, or any part of those expressions.",
      task: "1. CAT — forbidden: MEOW\n2. TRAIN — forbidden: RAILS\n3. MOON — forbidden: NIGHT\n4. APPLE — forbidden: FRUIT\n5. BOOK — forbidden: PAGES",
      answer: "For CAT, allowed hint: ‘A small pet that purrs and catches mice.’\nNot allowed: ‘It says MEOW’, ‘CAT’, or ‘CATLIKE’.\nA teammate may guess ‘CAT’ aloud.",
      why: "Start the 150-second timer before opening the live secret card. Teammates guess five targets. If the clue-giver says a forbidden word, the answer or part of either, the team is immediately disqualified. The required number correct depends on the level."},
    nl: {title: "Raad het woord (verboden hint)", intro: "Alleen één teamgenoot ziet de vijf woordparen. Die omschrijft de antwoorden zonder het antwoord, de verboden hint of een deel van een van beide te noemen.",
      task: "1. KAT — verboden: MIAUW\n2. TREIN — verboden: SPOOR\n3. MAAN — verboden: NACHT\n4. APPEL — verboden: FRUIT\n5. BOEK — verboden: BLADZIJDEN",
      answer: "Voor KAT mag je zeggen: ‘Een huisdier dat spint en muizen vangt.’\nVerboden: ‘Het zegt MIAUW’, ‘KAT’ of ‘KATTEN’.\nEen teamgenoot mag ‘KAT’ wel als antwoord raden.",
      why: "Start de timer van 150 seconden vóór het openen van de echte geheime speelkaart. De teamgenoten raden vijf woorden. Noemt de omschrijver het antwoord, een verboden hint of een deel daarvan, dan is het team meteen gediskwalificeerd. Het vereiste aantal goede antwoorden hangt af van het niveau."},
    da: {title: "Gæt ordet (forbudt ledetråd)", intro: "Kun én spiller på holdet ser de fem ordpar. Spilleren beskriver svarene uden at sige selve svaret, det forbudte ord eller dele af nogen af dem.",
      task: "1. KAT — forbudt: MJAV\n2. TOG — forbudt: SKINNER\n3. MÅNE — forbudt: NAT\n4. ÆBLE — forbudt: FRUGT\n5. BOG — forbudt: SIDER",
      answer: "For KAT er dette tilladt: ‘Et kæledyr, der spinder og fanger mus.’\nForbudt: ‘Det siger MJAV’, ‘KAT’ eller ‘KATTE’.\nEn holdkammerat må gerne gætte ‘KAT’ højt.",
      why: "Start timeren på 150 sekunder, før det rigtige hemmelige kort åbnes. Holdkammeraterne gætter fem ord. Hvis den, der beskriver, siger svaret, det forbudte ord eller en del deraf, diskvalificeres holdet straks. Antallet af nødvendige rigtige svar afhænger af niveauet."},
  },
  "word-length-staircase": {
    en: {
      title: "Word Length Staircase",
      intro: "Start at 3 letters. The active side says the first word; then alternate sides. Each turn needs a word of the NEXT length, up to 9, then begin again at 3. Names do not count. Five seconds per turn.",
      task: "What could seven correct consecutive turns sound like (3 to 9 letters)?",
      answer: "3 — CAT (active)\n4 — TREE (defender)\n5 — APPLE (active)\n6 — BANANA (defender)\n7 — ORANGES (active)\n8 — ELEPHANT (defender)\n9 — PINEAPPLE (active)",
      why: "Each word has exactly the required number of letters. Next is 3 again. If the defender says a wrong-length word, uses a name or cannot answer within five seconds, the active side earns one point; if the active side fails first, nobody scores.",
    },
    nl: {
      title: "Woordlengtetrap",
      intro: "Begin met 3 letters. De actieve kant zegt het eerste woord; daarna wisselen beide kanten elkaar af. Elk volgend woord heeft één letter meer, tot 9; begin dan opnieuw bij 3. Gebruik geen namen. Vijf seconden per beurt.",
      task: "Welke zeven woorden kunnen achter elkaar worden genoemd (van 3 tot 9 letters)?",
      answer: "3 — KAT (actief)\n4 — BOOM (verdediger)\n5 — APPEL (actief)\n6 — BANAAN (verdediger)\n7 — OLIFANT (actief)\n8 — KROKODIL (verdediger)\n9 — BROMFIETS (actief)",
      why: "Elk woord heeft precies het juiste aantal letters. Daarna is 3 weer aan de beurt. Maakt de verdediger als eerste een fout met de woordlengte, noemt die een naam of antwoordt die te laat, dan verdient de actieve kant één punt. Faalt de actieve kant eerst, dan wordt geen punt gegeven.",
    },
    da: {
      title: "Ordtrappe",
      intro: "Start med 3 bogstaver. Den aktive side siger det første ord, og derefter skiftes siderne. Hvert nyt ord er ét bogstav længere, frem til 9; derefter starter I igen ved 3. Ingen egennavne. Fem sekunder pr. tur.",
      task: "Hvilke syv ord kan siges i rækkefølge (fra 3 til 9 bogstaver)?",
      answer: "3 — KAT (aktiv)\n4 — HUND (forsvarer)\n5 — STOLE (aktiv)\n6 — GRISEN (forsvarer)\n7 — ELEFANT (aktiv)\n8 — KROKODIL (forsvarer)\n9 — SOMMERHUS (aktiv)",
      why: "Hvert ord har præcis det krævede antal bogstaver. Derefter starter I ved 3 igen. Hvis modstanderen først siger et ord med forkert længde, bruger et egennavn eller ikke svarer inden for fem sekunder, får den aktive side ét point. Hvis den aktive side fejler først, får ingen point.",
    },
  },
  "last-letter-duel": {
    en: { title: "Last-Letter Duel", intro: "Say a fresh word beginning with the LAST letter of the previous word. Take turns; you have five seconds each.", task: "Starting word: CAT. What could the next three players say?", answer: "CAT → TREE → EGG → GOAT", why: "CAT ends in T, so TREE begins with T. TREE ends in E, so EGG begins with E. EGG ends in G, so GOAT begins with G. No repeated words. The active side scores only if an opponent fails first." },
    nl: { title: "Laatsteletterduel", intro: "Noem telkens een nieuw woord dat begint met de LAATSTE letter van het vorige woord. Je hebt vijf seconden per beurt.", task: "Beginwoord: KAT. Welke drie woorden kunnen daarna volgen?", answer: "KAT → TIJGER → ROOS → SLANG", why: "KAT eindigt op T, dus TIJGER begint met T. TIJGER eindigt op R, dus ROOS begint met R. ROOS eindigt op S, dus SLANG begint met S. Herhaal geen woorden. De actieve kant scoort alleen als de tegenstander als eerste faalt." },
    da: { title: "Sidste bogstav-duel", intro: "Sig et nyt ord, der begynder med det SIDSTE bogstav i det forrige ord. Skift tur, og svar inden fem sekunder.", task: "Startord: KAT. Hvilke tre ord kan følge efter?", answer: "KAT → TRÆ → ÆBLE → ELEFANT", why: "KAT slutter på T, så TRÆ begynder med T. TRÆ slutter på Æ, så ÆBLE begynder med Æ. ÆBLE slutter på E, så ELEFANT begynder med E. Ord må ikke gentages. Den aktive side får kun point, hvis modstanderen fejler først." },
  },
  "category-flood": {
    en: {title: "Category Flood",intro: "Name or write different valid things from the category. No repeats.",task: "Category: ANIMALS",answer: "Dog, cat, horse, cow, sheep, pig, duck, fish, lion, bear",why: "Each animal counts once. The real card decides your category; a solo/cooperative round has a set target, while a 1v1 round is won by listing more valid items than the opponent."},
    nl: {title: "Categorieënrace",intro: "Noem of schrijf verschillende geldige antwoorden uit een categorie. Herhaal geen antwoorden.",task: "Categorie: DIEREN",answer: "Hond, kat, paard, koe, schaap, varken, eend, vis, leeuw, beer",why: "Elk dier telt één keer. De echte speelkaart bepaalt de categorie. Bij een individuele of gezamenlijke opdracht moet je een vastgesteld aantal halen; bij een 1-tegen-1-duel wint degene met de meeste geldige antwoorden."},
    da: {title: "Kategoriræs",intro: "Nævn eller skriv forskellige gyldige ting fra kategorien. Ingen gentagelser.",task: "Kategori: DYR",answer: "Hund, kat, hest, ko, får, gris, and, fisk, løve, bjørn",why: "Hvert dyr tæller én gang. Det rigtige kort angiver kategorien. I en solo- eller samarbejdsrunde skal I nå et bestemt antal, mens flest gyldige svar vinder en 1-mod-1-dyst."},
  },
  "rhyme-rally": {
    en: {title: "Rhyme Rally",intro: "Say a new word that rhymes with the word on the card. Take turns, five seconds per reply, without repeats.",task: "Starting word: CAT",answer: "HAT → BAT → MAT",why: "CAT, HAT, BAT and MAT share the same ending sound. The active team/player scores only if the defending side fails first. Near-rhymes are allowed only at levels where the rules permit them."},
    nl: {title: "Rijmwedstrijd",intro: "Noem om de beurt een nieuw woord dat rijmt op het woord op de speelkaart. Je krijgt vijf seconden en mag geen woorden herhalen.",task: "Beginwoord: KAT",answer: "MAT → ZAT → PLAT",why: "KAT, MAT, ZAT en PLAT hebben dezelfde eindklank. De actieve speler of het actieve team scoort alleen als de tegenstander als eerste faalt. Bijna-rijm is alleen toegestaan als de regels van het niveau dat aangeven."},
    da: {title: "Rimduel",intro: "Sig på skift et nyt ord, der rimer på ordet på kortet. I har fem sekunder til hvert svar, og ordene må ikke gentages.",task: "Startord: HAT",answer: "KAT → SKAT → GLAT",why: "HAT, KAT, SKAT og GLAT har samme slutlyd. Den aktive spiller eller det aktive hold får kun point, hvis modstanderen fejler først. Næsten-rim er kun tilladt, hvis niveauets regler siger det."},
  },
  "shopping-basket": {
    en: {title: "Shopping Basket",intro: "Repeat ALL earlier shopping items in the right order, then add ONE new item. Take turns.",task: "The card starts with APPLE. What do the first three turns sound like?",answer: "A: Apple, milk.\nB: Apple, milk, bread.\nA: Apple, milk, bread, cheese.",why: "The opening item, APPLE, stays first. Every turn repeats the full list and adds exactly one new item. Forgetting an item, changing the order, or repeating a new item loses."},
    nl: {title: "Boodschappenmandje",intro: "Herhaal ALLE eerdere boodschappen in de juiste volgorde en voeg telkens ÉÉN nieuw artikel toe.",task: "De speelkaart begint met APPEL. Hoe kunnen de eerste drie beurten klinken?",answer: "A: Appel, melk.\nB: Appel, melk, brood.\nA: Appel, melk, brood, kaas.",why: "Het beginartikel, APPEL, blijft vooraan staan. Elke speler herhaalt de hele lijst en voegt precies één nieuw artikel toe. Iets vergeten, de volgorde veranderen of een artikel dubbel toevoegen betekent verlies."},
    da: {title: "Indkøbskurven",intro: "Gentag ALLE tidligere varer i den rigtige rækkefølge, og tilføj ÉN ny vare på hver tur.",task: "Spilkortet begynder med ÆBLE. Hvordan kunne de første tre ture lyde?",answer: "A: Æble, mælk.\nB: Æble, mælk, brød.\nA: Æble, mælk, brød, ost.",why: "Startvaren, ÆBLE, står altid først. Hver spiller gentager hele listen og tilføjer præcis én ny vare. Glemmer man en vare, ændrer rækkefølgen eller gentager en vare som ny, taber man."},
  },
  "missing-numbers": {
    en: {
      title: "Missing Numbers",
      intro: "Find the pattern in each number sequence and fill in the missing number. The live card has eight sequences; solve at least six correctly in 150 seconds.",
      task: "2, 5, 8, 11, ?",
      answer: "14 (add 3 each time)",
      why: "The numbers increase by 3 each time: 2 → 5 → 8 → 11 → 14. Look for a repeated rule (such as adding, subtracting or multiplying) on each line. This is a separate practice example, not a live question.",
    },
    nl: {
      title: "Ontbrekende getallen",
      intro: "Ontdek het patroon in elke getallenreeks en vul het ontbrekende getal in. Op de echte speelkaart staan acht reeksen. Los er binnen 150 seconden minstens zes goed op.",
      task: "2, 5, 8, 11, ?",
      answer: "14 (steeds 3 erbij)",
      why: "Elk getal is 3 groter dan het vorige: 2 → 5 → 8 → 11 → 14. Zoek bij elke reeks naar de regel, bijvoorbeeld optellen, aftrekken of vermenigvuldigen. Dit is alleen een oefenvoorbeeld, niet de echte opdracht.",
    },
    da: {
      title: "Manglende tal",
      intro: "Find mønsteret i hver talrække, og udfyld det manglende tal. På det rigtige spilkort er der otte talrækker. Løs mindst seks korrekt på 150 sekunder.",
      task: "2, 5, 8, 11, ?",
      answer: "14 (læg 3 til hver gang)",
      why: "Hvert tal er 3 større end det forrige: 2 → 5 → 8 → 11 → 14. Find reglen bag hver række, for eksempel plus, minus eller gange. Dette er kun et øveeksempel, ikke den rigtige opgave.",
    },
  },
  "target-number": {
    en: {title: "Target Number",intro: "Use ALL four numbers exactly once with the operations allowed on your game card. Aim for the target.",task: "TARGET: 14\nNUMBERS: 1, 2, 3, 8",answer: "1 + 2 + 3 + 8 = 14",why: "Each number appears exactly once and the result is exactly 14. In a duel, the active side scores only if its valid result is CLOSER to the target than the defender's. The real card may allow more operations and harder targets."},
    nl: {title: "Doelgetal",intro: "Gebruik ALLE vier de getallen precies één keer, met de bewerkingen die op jouw speelkaart zijn toegestaan. Probeer het doelgetal te bereiken.",task: "DOEL: 14\nGETALLEN: 1, 2, 3, 8",answer: "1 + 2 + 3 + 8 = 14",why: "Elk getal komt precies één keer voor en de uitkomst is precies 14. In een duel scoort de actieve kant alleen als de geldige uitkomst DICHTER bij het doelgetal ligt dan die van de tegenstander. Op de echte kaart kunnen andere bewerkingen zijn toegestaan."},
    da: {title: "Måltal",intro: "Brug ALLE fire tal præcis én gang med de regnearter, som er tilladt på dit spilkort. Prøv at ramme måltallet.",task: "MÅL: 14\nTAL: 1, 2, 3, 8",answer: "1 + 2 + 3 + 8 = 14",why: "Hvert tal bruges præcis én gang, og resultatet er præcis 14. I en dyst får den aktive side kun point, hvis dens gyldige resultat er TÆTTERE på måltallet end modstanderens. Det rigtige kort kan tillade flere regnearter."},
  },
  "alphabet-story": {
    en: {title: "Alphabet Story",intro: "Make a connected story. Each new sentence starts with the next letter in the alphabet.",task: "Theme: A storm arrives. Tell four sentences beginning A, B, C, D.",answer: "A: Anna hears thunder.\nB: Ben shuts the windows.\nC: Clara grabs a flashlight.\nD: Dad says everyone is safe.",why: "The story stays connected and the first letters go A → B → C → D. In the real game, the number of required letters depends on your level. In solo duels, alternate sentences until someone fails; the active player earns a point only if the defender fails first."},
    nl: {title: "Alfabetverhaal",intro: "Vertel een samenhangend verhaal. Elke nieuwe zin moet beginnen met de volgende letter van het alfabet.",task: "Thema: Er komt onweer. Vertel vier zinnen die beginnen met A, B, C, D.",answer: "A: Anna hoort onweer.\nB: Bas sluit de ramen.\nC: Cleo pakt een zaklamp.\nD: Daarna gaan ze bij elkaar zitten.",why: "De zinnen horen bij hetzelfde verhaal en beginnen achtereenvolgens met A → B → C → D. In het echte spel hangt het aantal letters af van het niveau. Bij een soloduel wisselen spelers elkaar af; de actieve speler scoort alleen als de tegenstander als eerste faalt."},
    da: {title: "Alfabethistorie",intro: "Fortæl en sammenhængende historie. Hver ny sætning skal begynde med det næste bogstav i alfabetet.",task: "Tema: Et tordenvejr nærmer sig. Fortæl fire sætninger, der begynder med A, B, C, D.",answer: "A: Anna hører torden.\nB: Bo lukker vinduerne.\nC: Clara finder en lommelygte.\nD: Derefter sætter de sig sammen.",why: "Sætningerne hører til den samme historie, og begyndelsesbogstaverne følger A → B → C → D. I det rigtige spil afhænger antal bogstaver af niveauet. I en solodyst skiftes spillerne til at sige sætninger; den aktive spiller får kun point, hvis modstanderen fejler først."},
  },
  "count-to-thirty": {
    en: {title: "Count to Thirty",intro: "Take turns counting from 1. On each turn, say ONE, TWO or THREE consecutive numbers. Whoever says the final target number loses.",task: "Example with a target of {target}. What happens if Player A says that number?",answer: "A: 1, 2\nB: 3, 4, 5\nA: 6\n… keep taking turns …\nB: {previous}\nA: {target}",why: "Player A LOSES, because A says {target}. On some levels the losing number is 20; on others it is 30. The active player earns a point only if the defender has to say it."},
    nl: {title: "Tel tot dertig",intro: "Tel om de beurt vanaf 1. Je mag per beurt ÉÉN, TWEE of DRIE opeenvolgende getallen noemen. Wie het laatste doelgetal zegt, verliest.",task: "Voorbeeld met als eindgetal {target}. Wat gebeurt er als speler A dat getal zegt?",answer: "A: 1, 2\nB: 3, 4, 5\nA: 6\n… blijf om de beurt tellen …\nB: {previous}\nA: {target}",why: "Speler A VERLIEST, omdat A {target} zegt. Bij sommige niveaus verlies je bij 20, bij andere bij 30. De actieve speler scoort alleen als de tegenstander het eindgetal moet noemen."},
    da: {title: "Tæl til tredive",intro: "Tæl på skift fra 1. På hver tur må du sige ÉT, TO eller TRE tal i træk. Den, der siger det sidste måltal, taber.",task: "Eksempel med sluttallet {target}. Hvad sker der, hvis spiller A siger det tal?",answer: "A: 1, 2\nB: 3, 4, 5\nA: 6\n… skift fortsat tur …\nB: {previous}\nA: {target}",why: "Spiller A TABER, fordi A siger {target}. På nogle niveauer er tabstallet 20, på andre 30. Den aktive spiller får kun point, hvis modstanderen tvinges til at sige sluttallet."},
  },
  codebreaker: {
    en: {title: "Codebreaker",intro: "Replace numbers with letters. The code uses A=1, B=2, …, Z=26. Easier cards may mix visible letters and numbers.",task: "Easy: C1T\nNumber code: 3-1-20",answer: "1 = A, so C1T = CAT.\n3 = C, 1 = A, 20 = T, so 3-1-20 = CAT.",why: "Each digit or number refers to a letter position in the alphabet. On the real card, solve the required number of words at your level before time runs out."},
    nl: {title: "Codekraker",intro: "Vervang getallen door letters. De code gebruikt A=1, B=2, …, Z=26. Op makkelijke kaarten zie je soms al een paar letters.",task: "Makkelijk: K1T\nCijfercode: 11-1-20",answer: "1 = A, dus K1T = KAT.\n11 = K, 1 = A, 20 = T, dus 11-1-20 = KAT.",why: "Elk cijfer of getal verwijst naar een letterpositie in het alfabet. Op de echte speelkaart moet je binnen de tijd het vereiste aantal woorden voor jouw niveau ontcijferen."},
    da: {title: "Kodeknækker",intro: "Erstat tal med bogstaver. Koden bruger A=1, B=2, …, Z=26. På nemme kort kan der allerede stå nogle bogstaver.",task: "Let: K1T\nTalkode: 11-1-20",answer: "1 = A, så K1T = KAT.\n11 = K, 1 = A, 20 = T, så 11-1-20 = KAT.",why: "Hvert ciffer eller tal angiver et bogstavs plads i alfabetet. På det rigtige spilkort skal du afkode det krævede antal ord på dit niveau, før tiden løber ud."},
  },
};

export function workedExample(gameId, language = "en", context = {}) {
  const entries = practice[gameId];
  if (!entries) return null;
  const p = entries[language] || entries.en;
  const target = ["beginner", "novice", "amateur"].includes(context.difficulty) ? 20 : 30;
  const fill = (value) => value.replace(/\{target\}/g, String(target)).replace(/\{previous\}/g, String(target - 1));
  const result = Object.fromEntries(Object.entries(p).map(([key, value]) => [key, fill(value)]));
  if (gameId === "category-flood") {
    const duel = context.mode === "duel" || context.mode === "battle" && context.format === "single";
    const count = ["beginner", "novice"].includes(context.difficulty) ? 8 : 10;
    const items = result.answer.split(", ");
    if (duel) {
      if (language === "nl") { result.task = "1 tegen 1: schrijf zo veel mogelijk DIEREN op."; result.answer = `Speler A: ${items.slice(0, 8).join(", ")} (8 goed)\nSpeler B: ${items.slice(0, 6).join(", ")} (6 goed)\nSpeler A wint het voorbeeld.`; }
      else if (language === "da") { result.task = "1 mod 1: skriv så mange DYR som muligt."; result.answer = `Spiller A: ${items.slice(0, 8).join(", ")} (8 rigtige)\nSpiller B: ${items.slice(0, 6).join(", ")} (6 rigtige)\nSpiller A vinder eksemplet.`; }
      else { result.task = "1 vs 1: write as many ANIMALS as possible."; result.answer = `Player A: ${items.slice(0, 8).join(", ")} (8 valid)\nPlayer B: ${items.slice(0, 6).join(", ")} (6 valid)\nPlayer A wins the example.`; }
    } else {
      result.task = `${result.task}${language === "nl" ? ` — noem ${count} dieren` : language === "da" ? ` — nævn ${count} dyr` : ` — name ${count} animals`}`;
      result.answer = items.slice(0, count).join(", ");
    }
  }
  return result;
}
