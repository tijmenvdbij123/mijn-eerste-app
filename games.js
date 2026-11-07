// A small, editable launch set. New minigames can be added as objects here.
// Modes: coop = active teammates collaborate; duel = one selected player per side;
// battle = full active team versus a defending team. Only active teams ever score.
export const CATEGORIES = [
  { id: "words", name: "Words & language", icon: "Aa", color: "peach" },
  { id: "trivia", name: "Knowledge & trivia", icon: "?", color: "sky" },
  { id: "drawing", name: "Drawing & paper", icon: "✎", color: "lilac" },
  { id: "memory", name: "Memory & focus", icon: "◉", color: "mint" },
  { id: "logic", name: "Logic & numbers", icon: "#", color: "yellow" },
  { id: "acting", name: "Acting & gestures", icon: "✦", color: "peach" },
  { id: "creative", name: "Creative challenges", icon: "✺", color: "lilac" },
  { id: "strategy", name: "Strategy & bluff", icon: "♟", color: "sky" },
];

export const GAMES = [
  {
    id: "category-flood", category: "words", mode: "coop", name: "Category Flood", equipment: "No extra equipment",
    description: "Start the 150-second timer. Work together to name 20 items. One player from ANOTHER team must count every valid answer, check for duplicates and reject repeated words.",
    win: "The active team gives 20 valid, non-repeated answers within 150 seconds.",
    prompts: [{ text: "Name 20 ANIMALS." }, { text: "Name 20 FOODS." }, { text: "Name 20 THINGS FOUND IN A KITCHEN." }],
  },
  {
    id: "last-letter-duel", category: "words", mode: "duel", clock: "none", name: "Last-Letter Duel", equipment: "No extra equipment",
    description: "Take turns saying a new word beginning with the last letter of the previous word. Five seconds per answer.",
    win: "The active player scores only if the defending player gets stuck first. Repeats do not count.",
    prompts: [{ text: "Starting word: GARDEN" }, { text: "Starting word: PLANET" }, { text: "Starting word: TIGER" }],
  },
  {
    id: "rhyme-rally", category: "words", mode: "battle", clock: "none", name: "Rhyme Rally", equipment: "No extra equipment",
    description: "Use the word shown on the GAME CARD as the starting rhyme word. A member of the active team begins with a DIFFERENT rhyming word. Go clockwise through EVERY player on both teams. Each player has five seconds to respond. No main clock needed.",
    win: "The active team scores only if someone on the defending team fails first. Repeated or non-rhyming words count as failures.",
    prompts: [{ text: "Rhyme with LIGHT." }, { text: "Rhyme with CAKE." }, { text: "Rhyme with DAY." }],
  },
  {
    id: "team-trivia", category: "trivia", mode: "coop", name: "Five Quick Facts", equipment: "Text card, paper optional",
    description: "Discuss the five questions and write one answer per question.",
    win: "Get at least four of the five answers correct.",
    prompts: [
      { text: "1. How many sides does a hexagon have?\n2. What is H2O commonly called?\n3. Which planet is known as the Red Planet?\n4. What is the capital of Italy?\n5. How many minutes are in two hours?", answer: "1. Six\n2. Water\n3. Mars\n4. Rome\n5. 120" },
      { text: "1. Which ocean is the largest?\n2. What gas do plants absorb in photosynthesis?\n3. How many continents are there in the common seven-continent model?\n4. What is 12 × 8?\n5. Which instrument has black and white keys?", answer: "1. Pacific\n2. Carbon dioxide\n3. Seven\n4. 96\n5. Piano" },
    ],
  },
  {
    id: "quickfire-facts", category: "trivia", mode: "duel", modeVariants: ["duel", "coop"], name: "Quickfire Facts", equipment: "Text card and paper",
    description: "Answer six fast questions from the game card. The app randomly chooses a 1v1 duel or an active-team-only round.",
    descriptionByMode: { duel: "Both selected players answer the same six questions independently. No helping from teammates.", coop: "The active teammates work together to answer the same six questions." },
    win: "Get the best result on the six questions.",
    winByMode: { duel: "The active player gets more correct than the defending player; a tie blocks the point.", coop: "The active team gets at least five of the six questions right." },
    prompts: [
      { text: "1. 7 × 9?\n2. Capital of Spain?\n3. Chemical symbol for gold?\n4. Days in a leap year?\n5. A triangle's interior angles total how many degrees?\n6. Which mammal can fly?", answer: "1. 63\n2. Madrid\n3. Au\n4. 366\n5. 180\n6. Bat" },
      { text: "1. 15 + 27?\n2. Capital of Germany?\n3. How many legs does a spider have?\n4. Which planet is closest to the Sun?\n5. What is 100 / 4?\n6. What is the freezing point of water in Celsius?", answer: "1. 42\n2. Berlin\n3. Eight\n4. Mercury\n5. 25\n6. 0°C" },
    ],
  },
  {
    id: "trivia-board", category: "trivia", mode: "battle", name: "Trivia Board", equipment: "Text card and paper",
    description: "Both teams answer six questions. Some cards use multiple choice, some mix multiple choice and open answers, and others use only open answers. Discuss privately and submit one set of answers per team.",
    win: "The active team gets more of the six answers right than the defending team; a tie blocks the point.",
    prompts: [
      { text: "1. Which element has atomic number 26? A) Copper B) Iron C) Zinc D) Nickel\n2. Which treaty ended World War I with Germany? A) Versailles B) Utrecht C) Paris 1763 D) Tordesillas\n3. Which moon orbits Saturn? A) Europa B) Phobos C) Titan D) Ganymede\n4. What is the derivative of x³? A) 3x B) x² C) 2x³ D) 3x²\n5. Which country has the city of Samarkand? A) Uzbekistan B) Armenia C) Mongolia D) Georgia\n6. Who wrote The Metamorphosis? A) Camus B) Dostoevsky C) Kafka D) Orwell", answer: "1. B — Iron\n2. A — Versailles\n3. C — Titan\n4. D — 3x²\n5. A — Uzbekistan\n6. C — Franz Kafka" },
      { text: "1. Which sea lies between Europe and Africa? A) Black B) Baltic C) Mediterranean D) Caspian\n2. What is the SI unit of electrical resistance? A) Volt B) Ohm C) Watt D) Ampere\n3. Who composed The Four Seasons? A) Vivaldi B) Mozart C) Handel D) Bach\n4. How many edges does an octahedron have? A) 8 B) 10 C) 16 D) 12\n5. What is the largest internal organ in an adult human? A) Lung B) Liver C) Kidney D) Stomach\n6. In what year did the Berlin Wall fall? A) 1979 B) 1991 C) 1989 D) 1968", answer: "1. C — Mediterranean\n2. B — Ohm\n3. A — Vivaldi\n4. D — 12\n5. B — Liver\n6. C — 1989" },
    ],
  },
  {
    id: "sketch-guess", category: "drawing", mode: "coop", name: "Sketch & Guess", equipment: "Paper and pen",
    requiresTimerBeforeReveal: true,
    description: "Start the 150-second timer before revealing the card. One active teammate secretly reads the six prompts and draws without words or letters; partners guess.",
    win: "Guess at least four of the six objects before 150 seconds run out.",
    prompts: [{ text: "SECRET DRAWING LIST\nUmbrella • Bicycle • Pizza • Lighthouse • Turtle • Guitar" }, { text: "SECRET DRAWING LIST\nRocket • Sandwich • Castle • Candle • Octopus • Backpack" }],
  },
  {
    id: "shape-copy", category: "drawing", mode: "duel", name: "Shape Copy", equipment: "Paper and pen",
    requiresTimerBeforeReveal: true, revealSeconds: 15, allowRevealReset: true,
    description: "Start the 150-second timer. Only the chosen active player AND defender may study the card together for 15 seconds. All teammates look away. The card automatically hides, and both draw from memory. If something went wrong, use the confirmed re-view option to restart both timers.",
    win: "The active player's drawing must contain more correctly placed features than the defender's.",
    prompts: [{ text: "Draw a house with 1 square body, 1 triangular roof, 2 square windows, 1 central door, a chimney on the left, and a sun in the top right." }, { text: "Draw a robot with 1 round head, 2 square eyes, 1 rectangular body, 2 arms with 3 fingers each, and 2 legs with triangle feet." }],
  },
  {
    id: "picture-race", category: "drawing", mode: "coop", name: "Picture Race", equipment: "Paper and pen",
    requiresTimerBeforeReveal: true,
    description: "A different challenge from Sketch & Guess: ALL active teammates create ONE shared scene together. Start the 150-second timer before opening the card. Include every detail listed; there is NO guessing phase. Every teammate must add something. Afterward another team judges the visible details.",
    win: "Draw at least five of six listed details recognizably in one picture before 150 seconds expire. The other team counts the details (but cannot score).",
    prompts: [{ text: "DRAW ONE SCENE: PARK PICNIC\nInclude all six: 1. Picnic blanket 2. Basket 3. Tree 4. Kite 5. Dog 6. Sun" }, { text: "DRAW ONE SCENE: BUSY STREET\nInclude all six: 1. Bus 2. Bicycle 3. Streetlamp 4. Zebra crossing 5. Bakery 6. Pigeon" }],
  },
  {
    id: "shopping-basket", category: "memory", mode: "duel", clock: "none", name: "Shopping Basket", equipment: "No extra equipment",
    description: "The selected active player and defender alternate. Say 'I went shopping and bought...', repeat EVERY item in order, then add one new item. Five seconds to begin each turn.",
    win: "The active player scores only if the defender is first to forget, change the order, or repeat an item. No main clock needed; play until someone fails.",
    prompts: [{ text: "Start with: APPLES. Add one new item every turn." }, { text: "Start with: BREAD. Add one new item every turn." }],
  },
  {
    id: "digit-duel", category: "memory", mode: "duel", clock: "staged", stages: [{ label: "MEMORIZE", seconds: 20 }, { label: "WRITE FROM MEMORY", seconds: 30 }], name: "Digit Memory", equipment: "Text card and paper",
    description: "Press Start memory challenge. ONLY the selected active player and defender see the 12 digits for 20 seconds; the card then hides automatically. The next 30-second timer gives both players time to write the digits from memory. There is NO 150-second timer.",
    win: "The active player needs more digits in their correct positions.",
    prompts: [{ text: "SECRET NUMBER\n684291573026" }, { text: "SECRET NUMBER\n932716408251" }, { text: "SECRET NUMBER\n527083196442" }],
  },
  {
    id: "word-recall-battle", category: "memory", mode: "battle", clock: "staged", stages: [{ label: "MEMORIZE", seconds: 25 }, { label: "WRITE REMEMBERED WORDS", seconds: 60 }], name: "Word Recall Battle", equipment: "Text card and paper",
    description: "Press Start memory challenge. Both teams study 16 words for 25 seconds, then the card hides and a 60-second writing timer starts automatically. At time-up, reveal the original list, count each team's correct words and decide whether the active team scores.",
    win: "The active team must recall more distinct exact words than defenders.",
    prompts: [{ text: "SECRET LIST\nRiver, clock, blanket, tiger, candle, bridge, orange, pillow, garden, train, mirror, ocean, basket, cloud, pencil, window", answer: "River • clock • blanket • tiger • candle • bridge • orange • pillow • garden • train • mirror • ocean • basket • cloud • pencil • window" }, { text: "SECRET LIST\nRocket, mountain, lemon, feather, camera, bicycle, castle, turtle, spoon, forest, lamp, guitar, snow, circle, carpet, island", answer: "Rocket • mountain • lemon • feather • camera • bicycle • castle • turtle • spoon • forest • lamp • guitar • snow • circle • carpet • island" }],
  },
  {
    id: "missing-numbers", category: "logic", mode: "coop", name: "Missing Numbers", equipment: "Text card and paper",
    requiresTimerBeforeReveal: true,
    description: "FIRST start the 150-second timer, THEN reveal the card. Work together to solve eight number sequences.",
    win: "Get at least six of eight correct.",
    prompts: [{ text: "1. 2, 4, 6, ?\n2. 3, 6, 12, ?\n3. 1, 4, 9, ?\n4. 20, 17, 14, ?\n5. 2, 3, 5, 8, ?\n6. 81, 27, 9, ?\n7. 5, 10, 20, ?\n8. 1, 1, 2, 3, 5, ?", answer: "1. 8\n2. 24\n3. 16\n4. 11\n5. 13\n6. 3\n7. 40\n8. 8" }],
  },
  {
    id: "clock-duel", category: "logic", mode: "duel", name: "Clock Duel", defaultDifficulty: "hard", equipment: "Text card and paper",
    requiresTimerBeforeReveal: true,
    description: "Both selected players independently solve tricky multi-step time, time-zone, and midnight calculations. Use a 24-hour clock.",
    win: "The active player needs more correct answers than the defender.",
    prompts: [
      { text: "Use 24-hour time.\n1. 2h 47m after 22:38?\n2. 3h 56m before 01:24?\n3. A movie starts 19:45, lasts 2h 38m, and has a 15m intermission. When does it end?\n4. Train leaves 23:57 and arrives 02:16 the next day. Travel time?\n5. It's 17:25 in London. City B is 5 hours ahead. Time in City B?\n6. A timer starts 11:58:40 and runs 3m 35s. Stop time?", answer: "1. 01:25 next day\n2. 21:28 previous day\n3. 22:38\n4. 2h 19m\n5. 22:25\n6. 12:02:15" },
      { text: "Use 24-hour time.\n1. 4h 38m after 21:49?\n2. 2h 52m before 00:37?\n3. A flight leaves 08:55 and travels 7h 45m. The destination is 3h behind. Local arrival time?\n4. A train arrives 00:12 after traveling 3h 47m. Departure time?\n5. How many minutes between 13:48 and 16:23?\n6. Add 1h 38m 55s to 23:35:30.", answer: "1. 02:27 next day\n2. 21:45 previous day\n3. 13:40\n4. 20:25 previous day\n5. 155 minutes\n6. 01:14:25 next day" },
    ],
  },
  {
    id: "target-number", category: "logic", mode: "battle", name: "Target Number", equipment: "Text card and paper", duration: 60,
    requiresTimerBeforeReveal: true,
    description: "START the 60-second timer BEFORE revealing the card. Use all four numbers exactly once with +, -, × or ÷ to approach the target. Parentheses allowed.",
    win: "Within 60 seconds, the active team's valid expression must get closer to the target than the defending team's. A tie blocks the point.",
    prompts: [{ text: "TARGET: 24\nNUMBERS: 2, 3, 5, 7" }, { text: "TARGET: 50\nNUMBERS: 4, 6, 8, 9" }, { text: "TARGET: 36\nNUMBERS: 2, 5, 7, 9" }],
  },
  {
    id: "silent-charades", category: "acting", mode: "coop", name: "Silent Charades", defaultDifficulty: "easy", equipment: "No extra equipment",
    requiresTimerBeforeReveal: true,
    description: "Start the 150-second timer BEFORE revealing the secret card. One active teammate silently acts the clues; teammates guess. The actor cannot speak.",
    win: "Correctly guess at least four of five actions.",
    prompts: [{ text: "SECRET ACTIONS\nBrushing teeth • Fishing • Baking a cake • Riding a horse • Walking in rain" }, { text: "SECRET ACTIONS\nPlaying tennis • Falling asleep • Opening a gift • Washing dishes • Taking a photo" }],
  },
  {
    id: "reaction-rules", category: "acting", mode: "duel", clock: "none", name: "Reaction Rules", equipment: "No extra equipment",
    description: "The selected defender reads the list aloud (one number about every two seconds); the active player reacts. EVEN = clap, ODD = touch a shoulder. After number six, reverse the rules. No main timer needed.",
    win: "The active player scores ONLY with ZERO mistakes. The defending caller checks each action; they do not perform the gestures.",
    prompts: [{ text: "CALLER'S LIST\n4, 9, 2, 7, 6, 3 | SWITCH | 8, 5, 10, 1, 12, 11" }, { text: "CALLER'S LIST\n5, 2, 7, 4, 9, 6 | SWITCH | 3, 8, 1, 10, 11, 12" }],
  },
  {
    id: "mime-relay", category: "acting", mode: "coop", name: "Mime Relay", equipment: "No extra equipment",
    requiresTimerBeforeReveal: true,
    description: "Active team only! Choose ONE actor and ONE guesser (a third teammate may help guess). Start the 150-second timer BEFORE revealing the ten secret words. The actor mimes without speaking.",
    win: "Correctly guess at least 8 of the 10 words within 150 seconds.",
    prompts: [
      { text: "SECRET MIME WORDS — 10\nSwimming • Cooking • Climbing • Writing • Dancing • Skiing • Fishing • Sleeping • Painting • Bowling" },
      { text: "SECRET MIME WORDS — 10\nReading • Driving • Vacuuming • Rowing • Sneezing • Singing • Juggling • Running • Typing • Gardening" },
      { text: "SECRET MIME WORDS — 10\nElephant • Firefighter • Robot • Toothbrush • Guitar • Penguin • Birthday • Pirate • Airplane • Astronaut" },
    ],
  },
  {
    id: "alphabet-story", category: "creative", mode: "coop", name: "Alphabet Story", equipment: "No extra equipment",
    requiresTimerBeforeReveal: true,
    description: "Start the 150-second timer BEFORE revealing your theme. Tell a story together in ten sentences; each new sentence starts with the next letter A through J.",
    win: "Complete ten connected sentences with the correct starting letters in 150 seconds.",
    prompts: [{ text: "STORY THEME\nA mysterious suitcase appears in your living room." }, { text: "STORY THEME\nYour houseplant starts giving advice." }],
  },
  {
    id: "alliteration-duel", category: "creative", mode: "duel", name: "Alliteration Duel", equipment: "Paper and pen",
    requiresTimerBeforeReveal: true,
    description: "Start the 150-second timer BEFORE revealing the letter. Both selected players write sensible three-word phrases, each word beginning with that letter.",
    win: "The active player must create more valid, distinct three-word phrases within 150 seconds than the defender.",
    prompts: [{ text: "YOUR LETTER: B\nExample: Brave bears bounce." }, { text: "YOUR LETTER: S\nExample: Seven silly sailors." }, { text: "YOUR LETTER: M\nExample: Mighty mice march." }],
  },
  {
    id: "headline-teams", category: "creative", mode: "battle", name: "Headline Challenge", equipment: "Text card and paper", defaultStyle: "goofy",
    requiresTimerBeforeReveal: true,
    description: "Start the 150-second timer BEFORE revealing six situations. Each team makes ONE funny newspaper headline of at most TEN words for EACH situation. Teams can discuss internally.",
    win: "After 150 seconds, judge every situation separately by group consensus. If a third, neutral team is present, they decide. The active team scores only if it wins MORE situations than the defender; a tie blocks the point.",
    prompts: [
      { text: "SIX SITUATIONS — one funny headline (max 10 words) per situation\n1. A dog becomes mayor\n2. It rains spaghetti\n3. A robot joins school\n4. A bicycle learns to fly\n5. The moon turns purple\n6. A cat opens a restaurant" },
      { text: "SIX SITUATIONS — one funny headline (max 10 words) per situation\n1. Penguins take over the airport\n2. An invisible artist wins a prize\n3. The school principal is a parrot\n4. All clocks run backwards\n5. The local library bans books\n6. A potato enters the Olympics" },
    ],
  },
  {
    id: "codebreaker", category: "strategy", mode: "coop", name: "Codebreaker", equipment: "Text card and paper",
    requiresTimerBeforeReveal: true,
    description: "Start the 150-second timer BEFORE revealing the secret codes. Decode every word using A=1, B=2, and so on.",
    win: "Decode all four words within 150 seconds on Medium. Choose Easy for two, or Hard for six.",
    prompts: [{ text: "A=1, B=2, ..., Z=26\n1. 3-1-20\n2. 8-15-21-19-5\n3. 16-9-26-26-1", answer: "1. CAT\n2. HOUSE\n3. PIZZA" }, { text: "A=1, B=2, ..., Z=26\n1. 4-15-7\n2. 13-15-15-14\n3. 7-1-18-4-5-14", answer: "1. DOG\n2. MOON\n3. GARDEN" }],
  },
  {
    id: "count-to-thirty", category: "strategy", mode: "duel", clock: "none", noGameCard: true, name: "Count to Thirty", equipment: "No extra equipment",
    description: "Starting at 1, players alternate saying one, two, or three consecutive numbers. Whoever says 30 loses.",
    win: "The active player scores only if the defender is forced to say 30.",
    prompts: [{ text: "START: 1\nSay 1-3 numbers on each turn. Whoever says 30 loses." }],
  },
  {
    id: "rps-council", category: "strategy", mode: "battle", clock: "none", name: "Rock-Paper-Scissors Council", equipment: "No extra equipment",
    description: "Each team appoints ONE revealer at the start. Before every throw, teammates privately agree on their shared gesture. Only the appointed revealers show gestures simultaneously, for five throws.",
    win: "The active team must win more of the five rounds than the defenders. Ties do not count.",
    prompts: [{ text: "BEST OF FIVE\nRock beats scissors. Scissors beats paper. Paper beats rock." }],
  },
];

// Difficulty is selected by the players when a game card opens. Empty medium
// entries use the curated base game prompts above; other entries override them.
export const GAME_LEVELS = {
  "team-trivia": {
    easy: { prompts: [
      { text: "1. What color are ripe bananas?\n2. What is 5 + 7?\n3. Which animal says 'meow'?\n4. How many days are in a week?\n5. What is the capital of France?", answer: "1. Yellow\n2. 12\n3. Cat\n4. Seven\n5. Paris" },
      { text: "1. What do bees make?\n2. How many wheels does a bicycle have?\n3. Name Earth's natural moon.\n4. What is 10 × 4?\n5. What is frozen water called?", answer: "1. Honey\n2. Two\n3. The Moon\n4. 40\n5. Ice" },
    ] },
    medium: {},
    hard: { prompts: [
      { text: "1. Which element has atomic number 47?\n2. What is the capital of Slovenia?\n3. Which astronomer formulated the three laws of planetary motion?\n4. What is 17 squared?\n5. In which century did the printing press spread through Europe?", answer: "1. Silver (Ag)\n2. Ljubljana\n3. Johannes Kepler\n4. 289\n5. 15th century" },
      { text: "1. Which river runs through Budapest?\n2. What is the SI unit of magnetic flux?\n3. What is the square root of 2025?\n4. Who wrote One Hundred Years of Solitude?\n5. Which moon is the largest in the Solar System?", answer: "1. Danube\n2. Weber\n3. 45\n4. Gabriel García Márquez\n5. Ganymede" },
    ] },
  },
  "quickfire-facts": {
    easy: { prompts: [
      { text: "1. 4 × 6?\n2. Capital of France?\n3. Number of legs on a dog?\n4. What is 100 - 25?\n5. Which planet do we live on?\n6. How many months in a year?", answer: "1. 24\n2. Paris\n3. Four\n4. 75\n5. Earth\n6. Twelve" },
      { text: "1. 9 + 8?\n2. Days in an ordinary year?\n3. What is frozen water?\n4. Capital of England?\n5. How many sides does a square have?\n6. Which star is nearest Earth?", answer: "1. 17\n2. 365\n3. Ice\n4. London\n5. Four\n6. The Sun" },
    ] },
    medium: {},
    hard: { prompts: [
      { text: "1. 19 × 17?\n2. What is the capital of Kazakhstan?\n3. Atomic number of chlorine?\n4. Which scientist proposed continental drift?\n5. What is 2 to the power of 10?\n6. Which sea is bordered by Jordan and Israel?", answer: "1. 323\n2. Astana\n3. 17\n4. Alfred Wegener\n5. 1024\n6. Dead Sea" },
      { text: "1. 23 squared?\n2. Currency of Poland?\n3. Chemical symbol for tungsten?\n4. Who wrote The Trial?\n5. 15% of 360?\n6. Which ocean contains the Mariana Trench?", answer: "1. 529\n2. Złoty\n3. W\n4. Franz Kafka\n5. 54\n6. Pacific Ocean" },
    ] },
  },
  "trivia-board": {
    easy: { description: "A six-question open-answer trivia round. Each team works together and writes its own answers.", prompts: [
      { text: "OPEN QUESTIONS\n1. Which planet is called the Red Planet?\n2. What is the capital of Spain?\n3. How many sides has a pentagon?\n4. Which animal is the largest living mammal?\n5. What does H2O represent?\n6. How many minutes are in three hours?", answer: "1. Mars\n2. Madrid\n3. Five\n4. Blue whale\n5. Water\n6. 180" },
      { text: "OPEN QUESTIONS\n1. What is the capital of Japan?\n2. Which gas do humans breathe in to survive?\n3. What is 11 × 9?\n4. How many continents are commonly recognized?\n5. What instrument has 88 keys?\n6. Name the closest star to Earth.", answer: "1. Tokyo\n2. Oxygen\n3. 99\n4. Seven\n5. Piano\n6. Sun" },
    ] },
    medium: { description: "A mix of open questions and multiple choice. Multiple-choice questions have trickier options, so think carefully.", prompts: [
      { text: "MIXED QUESTIONS\n1. OPEN: Which scientist formulated the laws of motion?\n2. CHOOSE: Which city is the capital of Canada? A) Toronto B) Ottawa C) Montreal D) Vancouver\n3. OPEN: What is 14 × 13?\n4. CHOOSE: Which is an SI base unit? A) Liter B) Newton C) Kelvin D) Watt\n5. OPEN: Which river flows through Paris?\n6. CHOOSE: The chemical formula for ozone is: A) O B) O2 C) CO2 D) O3", answer: "1. Isaac Newton\n2. B — Ottawa\n3. 182\n4. C — Kelvin\n5. Seine\n6. D — O3" },
      { text: "OPEN QUESTIONS ONLY\n1. What is the capital of Portugal?\n2. Who wrote Romeo and Juliet?\n3. Which organ produces insulin?\n4. What is the atomic symbol for sodium?\n5. In which year did humans first land on the Moon?\n6. Which sea lies between Europe and Africa?", answer: "1. Lisbon\n2. William Shakespeare\n3. Pancreas\n4. Na\n5. 1969\n6. Mediterranean Sea" },
    ] },
    hard: { description: "Advanced multiple-choice trivia with close distractors. Each team submits one answer sheet.", prompts: [
      { text: "ADVANCED MULTIPLE CHOICE\n1. Which is the longest river entirely within France? A) Seine B) Loire C) Rhône D) Garonne\n2. Atomic number of cobalt? A) 25 B) 26 C) 27 D) 28\n3. Who wrote The Name of the Rose? A) Calvino B) Eco C) Moravia D) Levi\n4. Which moon has lakes of methane? A) Enceladus B) Io C) Europa D) Titan\n5. The Peace of Westphalia was signed in: A) 1618 B) 1648 C) 1688 D) 1713\n6. Which language belongs to the Uralic family? A) Lithuanian B) Finnish C) Greek D) Albanian", answer: "1. B — Loire\n2. C — 27\n3. B — Umberto Eco\n4. D — Titan\n5. B — 1648\n6. B — Finnish" },
      { text: "ADVANCED MULTIPLE CHOICE\n1. Which element has atomic number 74? A) Tungsten B) Rhenium C) Tantalum D) Osmium\n2. Which mathematician proved the last theorem in 1994? A) Perelman B) Wiles C) Tao D) Nash\n3. Which of these is NOT a moon of Jupiter? A) Io B) Callisto C) Titan D) Europa\n4. Who painted The Garden of Earthly Delights? A) Bruegel B) Bosch C) Dürer D) Van Eyck\n5. Which country contains ancient Petra? A) Syria B) Egypt C) Jordan D) Lebanon\n6. Which noble gas is the lightest? A) Helium B) Neon C) Argon D) Krypton", answer: "1. A — Tungsten\n2. B — Andrew Wiles\n3. C — Titan\n4. B — Hieronymus Bosch\n5. C — Jordan\n6. A — Helium" },
    ] },
  },
  "sketch-guess": {
    easy: { prompts: [{ text: "SECRET DRAWING LIST\nSun • Car • Tree • House • Fish • Apple" }, { text: "SECRET DRAWING LIST\nBall • Hat • Shoe • Cat • Cup • Book" }] },
    medium: {},
    hard: { prompts: [{ text: "SECRET DRAWING LIST\nTraffic jam • Eruption • Disguise • Gravity • Chess tournament • Time travel" }, { text: "SECRET DRAWING LIST\nMuseum heist • Solar eclipse • Avalanche • Recycling • Orchestra • Treasure map" }] },
  },
  "picture-race": {
    easy: { prompts: [{ text: "DRAW ONE SCENE: BEACH\nInclude all six: 1. Sun 2. Waves 3. Beach ball 4. Umbrella 5. Crab 6. Ice cream" }, { text: "DRAW ONE SCENE: GARDEN\nInclude all six: 1. Tree 2. Flower 3. Bird 4. Fence 5. Watering can 6. Butterfly" }] },
    medium: {},
    hard: { prompts: [{ text: "DRAW ONE SCENE: SPACE STATION\nInclude all six: 1. Docking spacecraft 2. Solar panels 3. Earth in the background 4. Floating astronaut 5. Robotic arm 6. Satellite" }, { text: "DRAW ONE SCENE: STEAMPUNK CITY\nInclude all six: 1. Clock tower 2. Airship 3. Gears on a bridge 4. Steam pipe 5. Goggles on a character 6. Suspended train" }] },
  },
  "shape-copy": {
    easy: { prompts: [{ text: "Draw from memory: a square house, triangular roof, one round window, a door with a knob, a cloud above, and a tree on the right." }, { text: "Draw from memory: a cat with two triangular ears, two circle eyes, a round nose, four legs, a long tail, and whiskers." }] },
    medium: {},
    hard: { prompts: [{ text: "Draw from memory: a castle with THREE towers (middle tallest), battlements on every tower, exactly TWO flags, an arched gate, a bridge crossing a moat, TWO windows on the left tower, a crescent moon upper left, and a star upper right." }, { text: "Draw from memory: a spaceship with a hexagonal body, THREE circular windows on its left side, TWO fins pointing down, a narrow antenna on top, FOUR flames under the engine, a planet with TWO rings behind it, and a tiny satellite lower right." }] },
  },
  "missing-numbers": {
    easy: { prompts: [
      { text: "Fill in the 8 missing numbers.\n1. 1, 2, 3, ?\n2. 2, 4, 6, ?\n3. 5, 10, 15, ?\n4. 10, 9, 8, ?\n5. 1, 3, 5, ?\n6. 3, 6, 9, ?\n7. 2, 4, 8, ?\n8. 20, 15, 10, ?", answer: "1. 4\n2. 8\n3. 20\n4. 7\n5. 7\n6. 12\n7. 16\n8. 5" },
    ] },
    medium: {},
    hard: { prompts: [
      { text: "Fill in the 8 missing numbers.\n1. 3, 8, 15, 24, ?\n2. 2, 6, 18, 54, ?\n3. 1, 2, 6, 24, ?\n4. 100, 94, 85, 73, ?\n5. 2, 5, 11, 23, ?\n6. 1, 4, 10, 19, 31, ?\n7. 81, 64, 49, 36, ?\n8. 1, 1, 2, 6, 24, ?", answer: "1. 35 (+5,+7,+9,+11)\n2. 162 (×3)\n3. 120 (factorials)\n4. 58 (-6,-9,-12,-15)\n5. 47 (×2+1)\n6. 46 (+3,+6,+9,+12,+15)\n7. 25 (descending squares)\n8. 120 (factorials)" },
    ] },
  },
  "target-number": {
    easy: { prompts: [{ text: "TARGET: 20\nNUMBERS: 2, 3, 4, 5\nUse each number exactly once." }, { text: "TARGET: 15\nNUMBERS: 1, 2, 3, 5\nUse each number exactly once." }] },
    medium: {},
    hard: { prompts: [{ text: "TARGET: 91\nNUMBERS: 3, 4, 7, 9\nUse all four numbers exactly once." }, { text: "TARGET: 107\nNUMBERS: 2, 5, 8, 11\nUse all four numbers exactly once." }] },
  },
  "clock-duel": {
    easy: { description: "Start the clock before revealing. Both players independently solve simple time additions and subtractions, using a 24-hour clock.", prompts: [
      { text: "24-HOUR CLOCK\n1. 20 minutes after 09:15?\n2. 35 minutes before 16:20?\n3. 1 hour after 11:40?\n4. 50 minutes after 07:30?\n5. 15 minutes before 12:10?\n6. 2 hours after 18:25?", answer: "1. 09:35\n2. 15:45\n3. 12:40\n4. 08:20\n5. 11:55\n6. 20:25" },
    ] },
    medium: { description: "Start the clock before revealing. Both selected players solve six time calculations with hour and minute changes.", prompts: [
      { text: "24-HOUR CLOCK\n1. 85 minutes after 14:45?\n2. 130 minutes before 11:05?\n3. 2 hours 35 minutes after 20:50?\n4. 1 hour 45 minutes before 05:10?\n5. A train leaves at 15:28 and travels 2h 47m. Arrival?\n6. How many minutes between 09:37 and 12:12?", answer: "1. 16:10\n2. 08:55\n3. 23:25\n4. 03:25\n5. 18:15\n6. 155 minutes" },
    ] },
    hard: {},
  },
  "silent-charades": {
    easy: {},
    medium: { prompts: [{ text: "SECRET ACTIONS\nAssembling furniture • Missing a bus • Escaping a spider • Being a waiter • Getting a haircut" }, { text: "SECRET ACTIONS\nUnwrapping a giant present • Walking on ice • Fixing a leaking tap • Going through airport security • Giving a speech" }] },
    hard: { prompts: [{ text: "SECRET ACTIONS / CONCEPTS\nBeing stuck in a time loop • Negotiating with an alien • Having déjà vu • Hiding an embarrassing secret • Getting caught in a lie" }, { text: "SECRET ACTIONS / CONCEPTS\nExperiencing zero gravity • Winning an imaginary argument • Losing your memory • Discovering invisible walls • Escaping a dream" }] },
  },
  "reaction-rules": {
    easy: { description: "No main clock. The defender calls FIVE numbers from 1–20, FIVE seconds apart. Active player CLAPS for even, TOUCHES A SHOULDER for odd. No rule switch.", win: "The active player must perform all 5 gestures correctly with ZERO mistakes.", prompts: [
      { text: "CALLER: say each number 5 seconds apart\n4, 7, 12, 19, 6\nEVEN = clap. ODD = shoulder. No switching." },
      { text: "CALLER: say each number 5 seconds apart\n11, 2, 17, 8, 15\nEVEN = clap. ODD = shoulder. No switching." },
    ] },
    medium: { description: "No main clock. The selected defender reads TWELVE numbers up to 1000, two seconds apart. EVEN = clap; ODD = shoulder touch. After number SIX, REVERSE these two rules.", win: "The active player must perform all 12 gestures correctly with ZERO mistakes.", prompts: [
      { text: "CALLER: two seconds apart\n248, 913, 62, 701, 456, 19\nSWITCH EVEN/ODD RULES\n185, 420, 999, 84, 511, 360" },
      { text: "CALLER: two seconds apart\n97, 640, 333, 218, 751, 406\nSWITCH EVEN/ODD RULES\n572, 101, 990, 437, 68, 825" },
    ] },
    hard: { description: "No main clock. The defender calls TWELVE numbers up to 1000, two seconds apart. First six: EVEN = clap and ODD = shoulder, AND JUMP on EVERY number. After six: reverse even/odd gestures, AND TOUCH THE GROUND on EVERY number.", win: "The active player must do every required gesture, extra action and rule switch with ZERO mistakes.", prompts: [
      { text: "CALLER: two seconds apart\n112, 653, 480, 71, 926, 395\nSWITCH EVEN/ODD + TOUCH GROUND INSTEAD OF JUMP\n581, 204, 999, 16, 703, 748" },
      { text: "CALLER: two seconds apart\n457, 82, 619, 300, 75, 994\nSWITCH EVEN/ODD + TOUCH GROUND INSTEAD OF JUMP\n31, 864, 511, 240, 907, 126" },
    ] },
  },
  "mime-relay": {
    easy: { description: "Start the 150-second timer before revealing. One active-team actor mimes easy words; one teammate guesses (the third may help).", win: "Guess at least 8 of the 10 easy words within 150 seconds.", prompts: [
      { text: "SECRET EASY MIME WORDS — 10\nDog • Cat • Eating • Running • Sleeping • Crying • Laughing • Swimming • Reading • Driving" },
      { text: "SECRET EASY MIME WORDS — 10\nBird • Jumping • Dancing • Drinking • Phone • Brushing teeth • Rain • Cooking • Football • Singing" },
    ] },
    medium: {},
    hard: { description: "Start the 150-second timer before revealing. Use the same 10-word difficulty as Medium, but there is NO room for error.", win: "Guess ALL 10 out of 10 words within 150 seconds.", prompts: [
      { text: "SECRET MIME WORDS — ALL 10 REQUIRED\nSwimming • Cooking • Climbing • Writing • Dancing • Skiing • Fishing • Sleeping • Painting • Bowling" },
      { text: "SECRET MIME WORDS — ALL 10 REQUIRED\nReading • Driving • Vacuuming • Rowing • Sneezing • Singing • Juggling • Running • Typing • Gardening" },
    ] },
  },
  "alliteration-duel": {
    easy: { description: "Start the 150-second timer before revealing the letter. Write sensible TWO-word phrases where both words begin with the chosen letter.", win: "The active player writes more distinct, valid TWO-word phrases than the defender within 150 seconds.", prompts: [{ text: "LETTER: B\nExample: Bouncing balls." }, { text: "LETTER: S\nExample: Silly sailors." }] },
    medium: {},
    hard: { description: "Start the 150-second timer before revealing the letter. Write sensible FOUR-word phrases where all four words begin with the chosen letter.", win: "The active player writes more distinct, valid FOUR-word phrases than the defender within 150 seconds.", prompts: [{ text: "LETTER: B\nExample: Brave brown bears bounce." }, { text: "LETTER: S\nExample: Seven sneaky sailors sing." }, { text: "LETTER: M\nExample: Many mighty monkeys march." }] },
  },
  "alphabet-story": {
    easy: { description: "Start the 150-second timer before revealing. Tell a connected story with SIX sentences, opening with A, B, C, D, E, F in order, using an easy theme.", win: "Complete SIX connected sentences with the correct A–F opening letters within 150 seconds.", prompts: [{ text: "EASY STORY THEME\nYou find a lost puppy in the park. Create sentences A, B, C, D, E, F." }, { text: "EASY STORY THEME\nYour class takes a surprise trip to the zoo. Create sentences A, B, C, D, E, F." }] },
    medium: {},
    hard: { description: "Start the 150-second timer before revealing. Tell a connected story of TWENTY-SIX sentences, beginning A through Z in alphabetical order, all following the given theme.", win: "Complete all TWENTY-SIX connected sentences, A–Z, within 150 seconds.", prompts: [{ text: "HARD STORY THEME\nA secret door in your home leads to another century. Create sentences A THROUGH Z." }, { text: "HARD STORY THEME\nEvery object in the city comes alive overnight. Create sentences A THROUGH Z." }] },
  },
  "codebreaker": {
    easy: { description: "Start the 150-second timer BEFORE revealing the card. Decode TWO letter-number words (A=1 to Z=26).", win: "Decode BOTH secret words within 150 seconds.", prompts: [
      { text: "A=1, B=2, ..., Z=26\n1. 3-1-20\n2. 8-15-21-19-5", answer: "1. CAT\n2. HOUSE" },
      { text: "A=1, B=2, ..., Z=26\n1. 4-15-7\n2. 13-15-15-14", answer: "1. DOG\n2. MOON" },
    ] },
    medium: { description: "Start the 150-second timer BEFORE revealing the card. Decode FOUR letter-number words (A=1 to Z=26).", win: "Decode ALL FOUR secret words within 150 seconds.", prompts: [
      { text: "A=1, B=2, ..., Z=26\n1. 3-1-20\n2. 8-15-21-19-5\n3. 16-9-26-26-1\n4. 7-1-18-4-5-14", answer: "1. CAT\n2. HOUSE\n3. PIZZA\n4. GARDEN" },
      { text: "A=1, B=2, ..., Z=26\n1. 4-15-7\n2. 13-15-15-14\n3. 2-18-9-4-7-5\n4. 18-15-3-11-5-20", answer: "1. DOG\n2. MOON\n3. BRIDGE\n4. ROCKET" },
    ] },
    hard: { description: "Start the 150-second timer BEFORE revealing the card. Decode SIX letter-number words (A=1 to Z=26).", win: "Decode ALL SIX secret words within 150 seconds.", prompts: [
      { text: "A=1, B=2, ..., Z=26\n1. 3-1-20\n2. 8-15-21-19-5\n3. 16-9-26-26-1\n4. 7-1-18-4-5-14\n5. 2-18-9-4-7-5\n6. 20-5-12-5-19-3-15-16-5", answer: "1. CAT\n2. HOUSE\n3. PIZZA\n4. GARDEN\n5. BRIDGE\n6. TELESCOPE" },
      { text: "A=1, B=2, ..., Z=26\n1. 4-15-7\n2. 13-15-15-14\n3. 18-15-3-11-5-20\n4. 3-1-19-20-12-5\n5. 5-12-5-16-8-1-14-20\n6. 13-9-3-18-15-19-3-15-16-5", answer: "1. DOG\n2. MOON\n3. ROCKET\n4. CASTLE\n5. ELEPHANT\n6. MICROSCOPE" },
    ] },
  },
};

export const GAME_STYLES = {
  "headline-teams": {
    goofy: {},
    normal: { prompts: [
      { text: "SIX EVERYDAY SITUATIONS — one headline (max 10 words) each\n1. A city opens a new public library\n2. A school organizes a charity run\n3. The train station adds bicycle parking\n4. A local team wins a regional final\n5. Neighbors create a community garden\n6. A museum opens an evening exhibition" },
      { text: "SIX EVERYDAY SITUATIONS — one headline (max 10 words) each\n1. New recycling bins arrive in town\n2. The annual food festival begins\n3. Students design a small solar car\n4. A park reopens after renovation\n5. A café celebrates its tenth anniversary\n6. Volunteers clean up the river bank" },
    ] },
  },
};

export const MODE_NAMES = { coop: "Work together", duel: "1 vs 1 duel", battle: "Team battle" };
export const GAME_DURATION = 150;
