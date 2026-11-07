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
    description: "Work together to name 20 different items from the category on screen.",
    win: "The active team gives 20 valid, non-repeated answers within 150 seconds.",
    prompts: [{ text: "Name 20 ANIMALS." }, { text: "Name 20 FOODS." }, { text: "Name 20 THINGS FOUND IN A KITCHEN." }],
  },
  {
    id: "last-letter-duel", category: "words", mode: "duel", name: "Last-Letter Duel", equipment: "No extra equipment",
    description: "Take turns saying a new word beginning with the last letter of the previous word. Five seconds per answer.",
    win: "The active player scores only if the defending player gets stuck first. Repeats do not count.",
    prompts: [{ text: "Starting word: GARDEN" }, { text: "Starting word: PLANET" }, { text: "Starting word: TIGER" }],
  },
  {
    id: "rhyme-rally", category: "words", mode: "battle", name: "Rhyme Rally", equipment: "No extra equipment",
    description: "Everyone from both teams stands or sits in a clockwise order. A member of the active team starts. Go clockwise around ALL players: each person has five seconds to say a new rhyming word.",
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
    description: "A harder multiple-choice trivia showdown. Discuss privately and submit one set of A/B/C/D answers per team.",
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
    requiresTimerBeforeReveal: true, revealSeconds: 5,
    description: "Start the main timer. Only the selected active player AND selected defender may study the card together for FIVE seconds. All teammates must look away. The app hides it automatically; both players then draw from memory.",
    win: "The active player's drawing must contain more correctly placed features than the defender's.",
    prompts: [{ text: "Draw a house with 1 square body, 1 triangular roof, 2 square windows, 1 central door, a chimney on the left, and a sun in the top right." }, { text: "Draw a robot with 1 round head, 2 square eyes, 1 rectangular body, 2 arms with 3 fingers each, and 2 legs with triangle feet." }],
  },
  {
    id: "picture-race", category: "drawing", mode: "battle", modeVariants: ["battle", "coop"], name: "Picture Race", equipment: "Paper and pen",
    description: "The app randomly chooses whether the active team plays alone or faces a defending team. One drawer per team draws clues, with no words or letters.",
    descriptionByMode: { battle: "Each team has one drawer and teammates guessing; both sides use the same word list.", coop: "Only the active team plays: one teammate draws and the others guess the word list." },
    win: "Guess the most items.",
    winByMode: { battle: "The active team guesses more items than the defenders within 150 seconds.", coop: "The active team correctly guesses at least four of the six items within 150 seconds." },
    prompts: [{ text: "SECRET WORDS\nChair • Moon • Banana • Train • Flower • Camera" }, { text: "SECRET WORDS\nBridge • Lion • Fish • Clock • Plane • Shoe" }],
  },
  {
    id: "shopping-basket", category: "memory", mode: "duel", name: "Shopping Basket", equipment: "No extra equipment",
    description: "The selected active player and defender alternate. Say 'I went shopping and bought...', repeat EVERY item in order, then add one new item. Five seconds to begin each turn.",
    win: "Within 150 seconds, the active player scores only if the defender is first to forget, change the order, or repeat an item. If the active player fails first or time ends without a failure, no point.",
    prompts: [{ text: "Start with: APPLES. Add one new item every turn." }, { text: "Start with: BREAD. Add one new item every turn." }],
  },
  {
    id: "digit-duel", category: "memory", mode: "duel", name: "Digit Memory", equipment: "Text card and paper",
    requiresTimerBeforeReveal: true, revealSeconds: 20,
    description: "Start the main timer. ONLY the two selected players view the 12 digits for 20 seconds. The card auto-hides. Both then write the sequence from memory without help.",
    win: "The active player needs more digits in their correct positions.",
    prompts: [{ text: "SECRET NUMBER\n684291573026" }, { text: "SECRET NUMBER\n932716408251" }, { text: "SECRET NUMBER\n527083196442" }],
  },
  {
    id: "word-recall-battle", category: "memory", mode: "battle", name: "Word Recall Battle", equipment: "Text card and paper",
    requiresTimerBeforeReveal: true, revealSeconds: 25,
    description: "Start the main timer. Both teams study 16 words for 25 seconds; the app automatically hides the list. Each team then writes remembered words without looking again.",
    win: "The active team must recall more distinct exact words than defenders.",
    prompts: [{ text: "SECRET LIST\nRiver, clock, blanket, tiger, candle, bridge, orange, pillow, garden, train, mirror, ocean, basket, cloud, pencil, window" }, { text: "SECRET LIST\nRocket, mountain, lemon, feather, camera, bicycle, castle, turtle, spoon, forest, lamp, guitar, snow, circle, carpet, island" }],
  },
  {
    id: "missing-numbers", category: "logic", mode: "coop", name: "Missing Numbers", equipment: "Text card and paper",
    requiresTimerBeforeReveal: true,
    description: "FIRST start the 150-second timer, THEN reveal the card. Work together to solve eight number sequences.",
    win: "Get at least six of eight correct.",
    prompts: [{ text: "1. 2, 4, 6, ?\n2. 3, 6, 12, ?\n3. 1, 4, 9, ?\n4. 20, 17, 14, ?\n5. 2, 3, 5, 8, ?\n6. 81, 27, 9, ?\n7. 5, 10, 20, ?\n8. 1, 1, 2, 3, 5, ?", answer: "1. 8\n2. 24\n3. 16\n4. 11\n5. 13\n6. 3\n7. 40\n8. 8" }],
  },
  {
    id: "clock-duel", category: "logic", mode: "duel", name: "Clock Duel", equipment: "Text card and paper",
    description: "Both selected players independently solve tricky multi-step time, time-zone, and midnight calculations. Use a 24-hour clock.",
    win: "The active player needs more correct answers than the defender.",
    prompts: [
      { text: "Use 24-hour time.\n1. 2h 47m after 22:38?\n2. 3h 56m before 01:24?\n3. A movie starts 19:45, lasts 2h 38m, and has a 15m intermission. When does it end?\n4. Train leaves 23:57 and arrives 02:16 the next day. Travel time?\n5. It's 17:25 in London. City B is 5 hours ahead. Time in City B?\n6. A timer starts 11:58:40 and runs 3m 35s. Stop time?", answer: "1. 01:25 next day\n2. 21:28 previous day\n3. 22:38\n4. 2h 19m\n5. 22:25\n6. 12:02:15" },
      { text: "Use 24-hour time.\n1. 4h 38m after 21:49?\n2. 2h 52m before 00:37?\n3. A flight leaves 08:55 and travels 7h 45m. The destination is 3h behind. Local arrival time?\n4. A train arrives 00:12 after traveling 3h 47m. Departure time?\n5. How many minutes between 13:48 and 16:23?\n6. Add 1h 38m 55s to 23:35:30.", answer: "1. 02:27 next day\n2. 21:45 previous day\n3. 13:40\n4. 20:25 previous day\n5. 155 minutes\n6. 01:14:25 next day" },
    ],
  },
  {
    id: "target-number", category: "logic", mode: "battle", name: "Target Number", equipment: "Text card and paper", duration: 30,
    description: "A fast 30-second team battle! Use all four numbers exactly once with +, -, × or ÷ to approach the target. Parentheses allowed.",
    win: "In 30 seconds, the active team's valid expression must get closer to the target than the defending team's. A tie blocks the point.",
    prompts: [{ text: "TARGET: 24\nNUMBERS: 2, 3, 5, 7" }, { text: "TARGET: 50\nNUMBERS: 4, 6, 8, 9" }, { text: "TARGET: 36\nNUMBERS: 2, 5, 7, 9" }],
  },
  {
    id: "silent-charades", category: "acting", mode: "coop", name: "Silent Charades", equipment: "No extra equipment",
    requiresTimerBeforeReveal: true,
    description: "Start the 150-second timer BEFORE revealing the secret card. One active teammate silently acts the clues; teammates guess. The actor cannot speak.",
    win: "Correctly guess at least four of five actions.",
    prompts: [{ text: "SECRET ACTIONS\nBrushing teeth • Fishing • Baking a cake • Riding a horse • Walking in rain" }, { text: "SECRET ACTIONS\nPlaying tennis • Falling asleep • Opening a gift • Washing dishes • Taking a photo" }],
  },
  {
    id: "reaction-rules", category: "acting", mode: "duel", name: "Reaction Rules", equipment: "No extra equipment",
    description: "One selected defending player CALLS the 12 numbers, one by one, about two seconds apart. The selected active player claps for EVEN numbers and touches a shoulder for ODD numbers. After number six, reverse both rules.",
    win: "The active player earns the point by getting at least 10 of 12 gestures correct. The defender only calls and checks; they do not perform gestures.",
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
    id: "headline-teams", category: "creative", mode: "battle", name: "Headline Challenge", equipment: "Text card and paper",
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
    description: "Use the displayed A=1, B=2 letter code to decode three secret words.",
    win: "Decode all three before the clock runs out.",
    prompts: [{ text: "A=1, B=2, ..., Z=26\n1. 3-1-20\n2. 8-15-21-19-5\n3. 16-9-26-26-1", answer: "1. CAT\n2. HOUSE\n3. PIZZA" }, { text: "A=1, B=2, ..., Z=26\n1. 4-15-7\n2. 13-15-15-14\n3. 7-1-18-4-5-14", answer: "1. DOG\n2. MOON\n3. GARDEN" }],
  },
  {
    id: "count-to-thirty", category: "strategy", mode: "duel", name: "Count to Thirty", equipment: "No extra equipment",
    description: "Starting at 1, players alternate saying one, two, or three consecutive numbers. Whoever says 30 loses.",
    win: "The active player scores only if the defender is forced to say 30.",
    prompts: [{ text: "START: 1\nSay 1-3 numbers on each turn. Whoever says 30 loses." }],
  },
  {
    id: "rps-council", category: "strategy", mode: "battle", name: "Rock-Paper-Scissors Council", equipment: "No extra equipment",
    description: "Each team appoints ONE revealer at the start. Before every throw, teammates privately agree on their shared gesture. Only the appointed revealers show gestures simultaneously, for five throws.",
    win: "The active team must win more of the five rounds than the defenders. Ties do not count.",
    prompts: [{ text: "BEST OF FIVE\nRock beats scissors. Scissors beats paper. Paper beats rock." }],
  },
];

export const MODE_NAMES = { coop: "Work together", duel: "1 vs 1 duel", battle: "Team battle" };
export const GAME_DURATION = 150;
