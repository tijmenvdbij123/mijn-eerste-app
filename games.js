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
    description: "Teams alternate saying distinct words that rhyme with the given word. Five seconds to respond.",
    win: "The defending team must fail before the active team does.",
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
    id: "quickfire-facts", category: "trivia", mode: "duel", name: "Quickfire Facts", equipment: "Text card and paper",
    description: "Both selected players answer the same six questions independently.",
    win: "The active player must get more correct answers than the defender. A tie blocks the point.",
    prompts: [
      { text: "1. 7 × 9?\n2. Capital of Spain?\n3. Chemical symbol for gold?\n4. Days in a leap year?\n5. A triangle's interior angles total how many degrees?\n6. Which mammal can fly?", answer: "1. 63\n2. Madrid\n3. Au\n4. 366\n5. 180\n6. Bat" },
      { text: "1. 15 + 27?\n2. Capital of Germany?\n3. How many legs does a spider have?\n4. Which planet is closest to the Sun?\n5. What is 100 / 4?\n6. What is the freezing point of water in Celsius?", answer: "1. 42\n2. Berlin\n3. Eight\n4. Mercury\n5. 25\n6. 0°C" },
    ],
  },
  {
    id: "trivia-board", category: "trivia", mode: "battle", name: "Trivia Board", equipment: "Text card and paper",
    description: "Every teammate may discuss, but each team submits one shared set of answers.",
    win: "The active team must get more answers right than the defending team.",
    prompts: [
      { text: "1. Largest land animal?\n2. How many hours in two days?\n3. Chemical symbol O?\n4. Capital of Denmark?\n5. 9 squared?\n6. How many strings does a standard violin have?", answer: "1. African elephant\n2. 48\n3. Oxygen\n4. Copenhagen\n5. 81\n6. Four" },
      { text: "1. Which metal is liquid at room temperature?\n2. Who painted the Mona Lisa?\n3. Capital of Norway?\n4. 11 × 11?\n5. How many faces does a cube have?\n6. Which animal lays the largest eggs today?", answer: "1. Mercury\n2. Leonardo da Vinci\n3. Oslo\n4. 121\n5. Six\n6. Ostrich" },
    ],
  },
  {
    id: "sketch-guess", category: "drawing", mode: "coop", name: "Sketch & Guess", equipment: "Paper and pen",
    description: "One active teammate secretly reads the prompt, draws without words or letters, and partners guess.",
    win: "Guess at least four of the six objects.",
    prompts: [{ text: "SECRET DRAWING LIST\nUmbrella • Bicycle • Pizza • Lighthouse • Turtle • Guitar" }, { text: "SECRET DRAWING LIST\nRocket • Sandwich • Castle • Candle • Octopus • Backpack" }],
  },
  {
    id: "shape-copy", category: "drawing", mode: "duel", name: "Shape Copy", equipment: "Paper and pen",
    description: "Both players draw the same object from the list of exact geometric instructions.",
    win: "The active player's drawing must contain more correctly placed features than the defender's.",
    prompts: [{ text: "Draw a house with 1 square body, 1 triangular roof, 2 square windows, 1 central door, a chimney on the left, and a sun in the top right." }, { text: "Draw a robot with 1 round head, 2 square eyes, 1 rectangular body, 2 arms with 3 fingers each, and 2 legs with triangle feet." }],
  },
  {
    id: "picture-race", category: "drawing", mode: "battle", name: "Picture Race", equipment: "Paper and pen",
    description: "Each team has one drawer at a time. Draw objects for teammates to guess, no words or letters.",
    win: "The active team must correctly guess more items than the defenders.",
    prompts: [{ text: "SECRET WORDS\nChair • Moon • Banana • Train • Flower • Camera" }, { text: "SECRET WORDS\nBridge • Lion • Fish • Clock • Plane • Shoe" }],
  },
  {
    id: "shopping-basket", category: "memory", mode: "coop", name: "Shopping Basket", equipment: "No extra equipment",
    description: "Say 'I went shopping and bought...' and add one item. Each player repeats the entire list in order.",
    win: "Successfully recite a chain of 12 distinct items without missing one.",
    prompts: [{ text: "Start with: APPLES. Add one new item every turn." }, { text: "Start with: BREAD. Add one new item every turn." }],
  },
  {
    id: "digit-duel", category: "memory", mode: "duel", name: "Digit Memory", equipment: "Text card and paper",
    description: "Both players study the same 12 digits for 20 seconds. Hide the prompt, then write them from memory.",
    win: "The active player needs more digits in their correct positions.",
    prompts: [{ text: "SECRET NUMBER\n684291573026" }, { text: "SECRET NUMBER\n932716408251" }, { text: "SECRET NUMBER\n527083196442" }],
  },
  {
    id: "word-recall-battle", category: "memory", mode: "battle", name: "Word Recall Battle", equipment: "Text card and paper",
    description: "Both teams view 16 words for 25 seconds, hide them, then write down as many as they remember.",
    win: "The active team must recall more distinct exact words than defenders.",
    prompts: [{ text: "SECRET LIST\nRiver, clock, blanket, tiger, candle, bridge, orange, pillow, garden, train, mirror, ocean, basket, cloud, pencil, window" }, { text: "SECRET LIST\nRocket, mountain, lemon, feather, camera, bicycle, castle, turtle, spoon, forest, lamp, guitar, snow, circle, carpet, island" }],
  },
  {
    id: "missing-numbers", category: "logic", mode: "coop", name: "Missing Numbers", equipment: "Text card and paper",
    description: "Work together to solve eight sequences. Fill each question mark with the next number.",
    win: "Get at least six of eight correct.",
    prompts: [{ text: "1. 2, 4, 6, ?\n2. 3, 6, 12, ?\n3. 1, 4, 9, ?\n4. 20, 17, 14, ?\n5. 2, 3, 5, 8, ?\n6. 81, 27, 9, ?\n7. 5, 10, 20, ?\n8. 1, 1, 2, 3, 5, ?", answer: "1. 8\n2. 24\n3. 16\n4. 11\n5. 13\n6. 3\n7. 40\n8. 8" }],
  },
  {
    id: "clock-duel", category: "logic", mode: "duel", name: "Clock Duel", equipment: "Text card and paper",
    description: "Both players calculate time offsets independently.",
    win: "The active player needs more correct answers than the defender.",
    prompts: [{ text: "1. 30 min after 2:45?\n2. 20 min before 10:10?\n3. 75 min after 6:00?\n4. 90 min before 12:00?\n5. 50 min after 8:35?\n6. 15 min before 3:05?", answer: "1. 3:15\n2. 9:50\n3. 7:15\n4. 10:30\n5. 9:25\n6. 2:50" }],
  },
  {
    id: "target-number", category: "logic", mode: "battle", name: "Target Number", equipment: "Text card and paper",
    description: "Use all four numbers exactly once with +, -, × or ÷ to get close to the target. Every teammate can contribute.",
    win: "The active team's valid answer must be closer to the target than the defending team's.",
    prompts: [{ text: "TARGET: 24\nNUMBERS: 2, 3, 5, 7" }, { text: "TARGET: 50\nNUMBERS: 4, 6, 8, 9" }, { text: "TARGET: 36\nNUMBERS: 2, 5, 7, 9" }],
  },
  {
    id: "silent-charades", category: "acting", mode: "coop", name: "Silent Charades", equipment: "No extra equipment",
    description: "One player silently acts the secret actions. Teammates must guess; no speech from the actor.",
    win: "Correctly guess at least four of five actions.",
    prompts: [{ text: "SECRET ACTIONS\nBrushing teeth • Fishing • Baking a cake • Riding a horse • Walking in rain" }, { text: "SECRET ACTIONS\nPlaying tennis • Falling asleep • Opening a gift • Washing dishes • Taking a photo" }],
  },
  {
    id: "reaction-rules", category: "acting", mode: "duel", name: "Reaction Rules", equipment: "No extra equipment",
    description: "A neutral person calls 12 numbers. Clap for even numbers; touch your shoulder for odd numbers. Switch actions after the sixth.",
    win: "The active player must make fewer gesture mistakes than the defender.",
    prompts: [{ text: "CALLER'S LIST\n4, 9, 2, 7, 6, 3 | SWITCH | 8, 5, 10, 1, 12, 11" }, { text: "CALLER'S LIST\n5, 2, 7, 4, 9, 6 | SWITCH | 3, 8, 1, 10, 11, 12" }],
  },
  {
    id: "mime-relay", category: "acting", mode: "battle", name: "Mime Relay", equipment: "No extra equipment",
    description: "Each team rotates the actor after every word. Actors may mime only; teammates guess.",
    win: "The active team must guess more of the six actions than defenders.",
    prompts: [{ text: "SECRET ACTIONS\nSwimming • Cooking • Climbing • Writing • Dancing • Skiing" }, { text: "SECRET ACTIONS\nReading • Driving • Painting • Rowing • Vacuuming • Sleeping" }],
  },
  {
    id: "alphabet-story", category: "creative", mode: "coop", name: "Alphabet Story", equipment: "No extra equipment",
    description: "Tell a story together in ten sentences. Each new sentence begins with the next letter A through J.",
    win: "Complete ten connected sentences, all with the correct opening letter.",
    prompts: [{ text: "STORY THEME\nA mysterious suitcase appears in your living room." }, { text: "STORY THEME\nYour houseplant starts giving advice." }],
  },
  {
    id: "alliteration-duel", category: "creative", mode: "duel", name: "Alliteration Duel", equipment: "Paper and pen",
    description: "Write as many sensible three-word phrases as possible, with all three words starting with the shown letter.",
    win: "The active player must have more valid, distinct three-word phrases than the defender.",
    prompts: [{ text: "YOUR LETTER: B\nExample: Brave bears bounce." }, { text: "YOUR LETTER: S\nExample: Seven silly sailors." }, { text: "YOUR LETTER: M\nExample: Mighty mice march." }],
  },
  {
    id: "headline-teams", category: "creative", mode: "battle", name: "Headline Challenge", equipment: "Text card and paper",
    description: "Write exactly five-word newspaper headlines for the six silly situations on screen.",
    win: "The active team needs more complete five-word headlines than defenders. No repeated headline.",
    prompts: [{ text: "SITUATIONS\n1. A dog becomes mayor\n2. It rains spaghetti\n3. A robot joins school\n4. A bicycle learns to fly\n5. The moon turns purple\n6. A cat opens a restaurant" }],
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
    description: "Each team secretly agrees on one shared gesture, then reveals simultaneously. Repeat for five rounds.",
    win: "The active team must win more of the five rounds than the defenders. Ties do not count.",
    prompts: [{ text: "BEST OF FIVE\nRock beats scissors. Scissors beats paper. Paper beats rock." }],
  },
];

export const MODE_NAMES = { coop: "Work together", duel: "1 vs 1 duel", battle: "Team battle" };
export const GAME_DURATION = 150;
