// Version 3.1 proficiency scale. These are game-difficulty labels, not an IQ test.
export const LEVELS = [
  { id: "beginner", name: "Beginner", age: "4–7" },
  { id: "novice", name: "Novice", age: "7–10" },
  { id: "amateur", name: "Amateur", age: "10–13" },
  { id: "intermediate", name: "Intermediate", age: "13–16" },
  { id: "competent", name: "Competent", age: "16–18" },
  { id: "skilled", name: "Skilled", age: "18+" },
  { id: "advanced", name: "Advanced", age: "18+ hard" },
  { id: "grandmaster", name: "Grandmaster", age: "18+ expert" },
];

export const levelIndex = (value) => Math.max(0, LEVELS.findIndex((item) => item.id === value));
export const isAdjacentLevel = (a, b) => Math.abs(levelIndex(a) - levelIndex(b)) <= 1;
export const FOUR_ANCHORS = ["beginner", "amateur", "competent", "advanced"];
export const fourLevelFor = (level) => FOUR_ANCHORS[Math.floor(levelIndex(level) / 2)];
export const EIGHT_LEVEL_GAME_IDS = new Set(["team-trivia", "quickfire-facts", "clock-duel", "missing-numbers", "codebreaker"]);

// Games whose opponents may have any proficiency because each side receives its
// own level-adjusted prompt. Rock-paper-scissors is a universal exception.
export const OPEN_MATCHUP_GAME_IDS = new Set(["team-trivia", "quickfire-facts", "trivia-board", "rps-council", "staring-contest", "make-laugh", ...["history", "sports", "movies-tv", "culture", "geography", "science-nature", "arts-literature", "music"].map((x) => `topic-trivia-${x}`)]);

const q = (text, answer) => ({ text, answer });

export const LEVEL_CONTENT = {
  "rhyme-rally": {
    beginner: { description: "No clock. Start with the card word. Go clockwise through both teams. Near-rhymes are allowed (e.g. DAY and PAIN share a similar vowel sound). Each player has five seconds.", win: "The active team scores if a defending player fails first. Near-rhymes count; repeated words do not." },
    competent: { description: "No clock. Start with the card word. Go clockwise through both teams, starting with an active player. ONLY true ending-sound rhymes count (e.g. DAY and PLAY). Five seconds per answer.", win: "The active team scores if a defending player fails first. Only true rhyming words count, no repeats." },
  },
  "category-flood": {
    beginner: { description: "Start 150 seconds. Another team keeps count and rejects duplicates. Name 10 things from a very easy category.", win: "Name 10 unique correct items before time runs out.", prompts: [{ text: "Name 10 ANIMALS." }, { text: "Name 10 COLORS." }] },
    amateur: { description: "Start 150 seconds. Another team counts valid answers and catches duplicates. Name 10 from a normal category.", win: "Name 10 unique correct items before time runs out.", prompts: [{ text: "Name 10 FOODS." }, { text: "Name 10 THINGS FOUND IN A KITCHEN." }] },
    competent: { description: "Start 150 seconds. Another team tracks answers and catches duplicates. Name 20 from a normal category.", win: "Name 20 unique correct items before time runs out.", prompts: [{ text: "Name 20 ANIMALS." }, { text: "Name 20 FOODS." }] },
    advanced: { description: "Start 150 seconds. Another team tracks and checks answers. Name 20 from a difficult category.", win: "Name 20 different valid answers before 150 seconds run out.", prompts: [{ text: "Name 20 COUNTRIES IN AFRICA." }, { text: "Name 20 CHEMICAL ELEMENTS." }] },
  },
  "picture-race": {
    beginner: { description: "Start the timer before revealing. Together draw a single scene with easy items. Every teammate draws something.", win: "Include 4 of the 6 clearly recognizable objects in one picture within 150 seconds.", prompts: [{ text: "DRAW ONE PICNIC SCENE: 1. Sun 2. Tree 3. Ball 4. Flower 5. Dog 6. Cup" }] },
    amateur: { description: "Start timer before revealing. Draw one scene together, each teammate adding something.", win: "Draw at least 4 of the 6 requested details clearly within 150 seconds.", prompts: [{ text: "DRAW ONE BEACH SCENE: 1. Sun 2. Waves 3. Beach ball 4. Umbrella 5. Crab 6. Ice cream" }] },
    competent: { description: "Start timer before revealing. Draw a shared scene with more difficult objects; everyone contributes.", win: "Draw at least 5 of the 6 details clearly within 150 seconds.", prompts: [{ text: "DRAW ONE SPACE SCENE: 1. Rocket 2. Astronaut 3. Planet 4. Satellite 5. Space station 6. Meteor" }] },
    advanced: { description: "Start timer before revealing. Draw a complicated shared scene; everyone contributes.", win: "Draw at least 5 of the 6 difficult details clearly within 150 seconds.", prompts: [{ text: "DRAW ONE FUTURISTIC CITY: 1. Suspension bridge 2. Solar-panel roof 3. Drone 4. Observatory dome 5. Elevated railway 6. Hologram billboard" }] },
  },
  "sketch-guess": {
    beginner: { description: "Start the timer before revealing. One player draws each easy word while teammates guess.", win: "Guess at least 4 of 6 easy objects within 150 seconds.", prompts: [{ text: "SECRET DRAWING LIST\nSun • Ball • Car • Fish • House • Tree" }] },
    amateur: { description: "Start the timer before revealing. One player draws, teammates guess, no letters or words.", win: "Guess at least 4 of 6 objects within 150 seconds." },
    competent: { description: "Start the timer before revealing. One player draws more challenging clues; teammates guess.", win: "Guess at least 5 of 6 objects within 150 seconds.", prompts: [{ text: "SECRET DRAWING LIST\nTelescope • Windmill • Lighthouse • Roller coaster • Microscope • Scarecrow" }] },
    advanced: { description: "Start the timer before revealing. Draw difficult ideas without words or letters.", win: "Guess at least 5 of 6 difficult clues within 150 seconds." },
  },
  "shape-copy": {
    beginner: { description: "Start the 150-second timer. Only the two selected players study the card for 30 seconds; teammates look away. Draw from memory.", previewSeconds: 30, prompts: [{ text: "Remember and draw: one square house, one triangle roof, a circle sun, one tree to the right, a front door and one cloud." }] },
    amateur: { description: "Start the 150-second timer. Both selected players may keep the reference card visible while drawing. Teammates may not help.", previewSeconds: null, alwaysVisible: true, prompts: [{ text: "Draw a house with a triangular roof, one door, two square windows, a chimney on the left, a fence and a sun in the top right." }] },
    competent: { description: "Start the 150-second timer. Only the two selected players can study the reference for 30 seconds; then draw from memory.", previewSeconds: 30, prompts: [{ text: "Draw a robot: round head, two square eyes, two antennas, rectangular body, three buttons, two arms with three fingers, and two triangular feet." }] },
    advanced: { description: "Start the 150-second timer. The selected players have only 15 seconds to memorize a difficult card; then draw from memory.", previewSeconds: 15, prompts: [{ text: "Draw a castle: four towers with the second tallest, exactly three flags, battlements on all towers, a drawbridge, two moat fish, three tiny left windows, a crescent moon on the right and a star at top left." }] },
  },
  "word-recall-battle": {
    beginner: { description: "Memorize 16 very easy everyday words for 25 seconds, then write for 90 seconds. Defending team must be level-compatible.", prompts: [q("SECRET EASY WORDS\nCat, dog, ball, sun, fish, tree, hat, cup, car, book, shoe, apple, bee, milk, rain, bed", "Cat • dog • ball • sun • fish • tree • hat • cup • car • book • shoe • apple • bee • milk • rain • bed")] },
  },
  "digit-duel": {
    beginner: { description: "Memorize FOUR digits for 20 seconds, then write them down within 30 seconds. No 150-second clock.", prompts: [q("SECRET DIGITS\n6842", "6842"), q("SECRET DIGITS\n3057", "3057")] },
    amateur: { description: "Memorize EIGHT digits for 20 seconds, then write them down within 30 seconds.", prompts: [q("SECRET DIGITS\n68429157", "68429157"), q("SECRET DIGITS\n93271640", "93271640")] },
    competent: { description: "Memorize TWELVE digits for 20 seconds, then write them down within 30 seconds.", prompts: [q("SECRET DIGITS\n684291573026", "684291573026"), q("SECRET DIGITS\n932716408251", "932716408251")] },
    advanced: { description: "Memorize SIXTEEN digits for 20 seconds, then write them down within 30 seconds.", prompts: [q("SECRET DIGITS\n6842915730268145", "6842915730268145"), q("SECRET DIGITS\n9327164082515703", "9327164082515703")] },
  },
  "target-number": {
    beginner: { prompts: [{ text: "TARGET 10\nUse 1, 2, 3, 4 once each." }], win: "In 60 seconds get as close to 10 as possible using every number exactly once, closer than the defender." },
    amateur: { prompts: [{ text: "TARGET 20\nUse 2, 3, 4, 5 once each." }], win: "Within 60 seconds get closer to 20 than the defender, using all four numbers once." },
    competent: { prompts: [{ text: "TARGET 50\nUse 4, 6, 8, 9 once each." }], win: "Within 60 seconds get closer to 50 than the defender, using all four numbers once." },
    advanced: { prompts: [{ text: "TARGET 107\nUse 2, 5, 8, 11 once each." }], win: "Within 60 seconds get closer to 107 than the defender, using all four numbers once." },
  },
  "reaction-rules": {
    beginner: { description: "No main timer. The defender calls FIVE numbers from 1 to 10, TEN seconds apart. If the number is HIGHER than five, JUMP; if it is FIVE OR LOWER, TOUCH THE GROUND.", win: "The active player must respond to all five numbers without a single mistake.", prompts: [{ text: "CALLER: SAY EACH NUMBER 10 SECONDS APART\n3 • 8 • 1 • 10 • 5\n1–5: touch the ground. 6–10: jump." }] },
  },
  "silent-charades": {
    beginner: { description: "Start the timer before revealing. Mime very simple actions without speaking; teammates guess.", win: "Guess at least 4 of the 5 easy actions within 150 seconds.", prompts: [{ text: "SECRET ACTIONS\nEating • Sleeping • Walking • Drinking • Jumping" }] },
  },
  "mime-relay": {
    beginner: { description: "Start the timer before revealing. One player mimes easy actions and another guesses.", win: "Guess at least 8 of the 10 very easy words within 150 seconds.", prompts: [{ text: "SECRET MIME WORDS — 10\nCat • Dog • Eating • Sleeping • Jumping • Laughing • Walking • Drinking • Swimming • Dancing" }] },
  },
  "alphabet-story": {
    beginner: { description: "Start the timer before revealing. Tell one very simple story in FOUR connected sentences beginning A, B, C and D.", win: "Complete four connected A–D sentences within 150 seconds.", prompts: [{ text: "EASY THEME: A puppy finds a ball in the park. Make sentences A, B, C, D." }] },
  },
  "headline-teams": {
    beginner: { promptCount: 4, description: "Start the timer before revealing. Each team writes a funny headline (maximum ten words) for FOUR easy situations. Choose Goofy or Normal.", win: "After 150 seconds judge each of the four situations. The active team scores only if it wins more situations than the defender." },
    novice: { promptCount: 4, description: "Start the timer before revealing. Write short headlines for FOUR easy situations, max ten words each.", win: "The active team scores if it wins more of the four judged situations." },
    amateur: { promptCount: 4, description: "Start the timer before revealing. Write a headline for FOUR everyday situations, max ten words each.", win: "The active team scores if it wins more of the four judged situations." },
  },
  "count-to-thirty": {
    beginner: { description: "No clock or card needed. Starting at 1, each player says one, two or three consecutive numbers. Whoever says TWENTY loses.", win: "The active player scores only if the defender is forced to say 20." },
    novice: { description: "No clock or card needed. Starting at 1, say one to three numbers per turn. The player who says 20 loses.", win: "The active player scores only if the defender says 20." },
    amateur: { description: "No clock or card needed. Count in turns from 1, saying up to three numbers. Whoever says 20 loses.", win: "The active player scores only if the defender says 20." },
  },
};

// A content key may be one of eight precise levels or one of the four anchors.
// Use the closest lower-supported level, so guest devices and hosts agree.
export function contentKey(config, level) {
  if (!config) return null;
  if (config[level]) return level;
  const target = levelIndex(level);
  const options = Object.keys(config).filter((key) => LEVELS.some((entry) => entry.id === key));
  if (!options.length) return null;
  const lower = options.filter((key) => levelIndex(key) <= target);
  return lower.length ? lower.sort((a, b) => levelIndex(b) - levelIndex(a))[0] : options.sort((a, b) => levelIndex(a) - levelIndex(b))[0];
}

// The original V3 cards are intentionally reused at the difficulty specified
// in the feedback. All other entries below contain genuinely new questions.
export const EIGHT_BASE_MAP = {
  "team-trivia": { intermediate: "easy", competent: "medium", advanced: "hard" },
  "quickfire-facts": { amateur: "medium", skilled: "hard" },
  "clock-duel": { novice: "easy", intermediate: "medium", competent: "hard" },
  "missing-numbers": { amateur: "easy", intermediate: "medium", competent: "hard" },
  codebreaker: { amateur: "easy", intermediate: "medium", skilled: "hard" },
};

export const EIGHT_LEVEL_CONTENT = {
  "team-trivia": {
    beginner: { prompts: [q("1. What sound does a dog make?\n2. How many hands do you have?\n3. What color is grass?\n4. Which animal gives us milk?\n5. Is the Sun out in the day or at night?", "1. Woof / bark\n2. Two\n3. Green\n4. Cow\n5. Day")] },
    novice: { prompts: [q("1. What is 7 + 5?\n2. What animal has a long trunk?\n3. What season comes after winter?\n4. How many corners does a square have?\n5. What is the opposite of hot?", "1. 12\n2. Elephant\n3. Spring\n4. Four\n5. Cold")] },
    amateur: { prompts: [q("1. How many seconds in a minute?\n2. Which continent contains Brazil?\n3. What is 12 × 7?\n4. Which planet is famous for its rings?\n5. What is the process by which plants make food called?", "1. 60\n2. South America\n3. 84\n4. Saturn\n5. Photosynthesis")] },
    skilled: { prompts: [q("1. What is the capital of Croatia?\n2. What is 16 squared?\n3. Which element is represented by K?\n4. Which language has the most native speakers?\n5. Which layer of the atmosphere contains most weather?", "1. Zagreb\n2. 256\n3. Potassium\n4. Mandarin Chinese\n5. Troposphere")] },
    grandmaster: { prompts: [q("1. Which element has atomic number 72?\n2. What is the name of the deepest known ocean trench?\n3. Who wrote The Master and Margarita?\n4. What is the capital of Bhutan?\n5. Which mathematical constant is the limit of (1+1/n)^n?", "1. Hafnium\n2. Mariana Trench\n3. Mikhail Bulgakov\n4. Thimphu\n5. Euler's number e")] },
  },
  "quickfire-facts": {
    beginner: { prompts: [q("CHOOSE A, B OR C\n1. Which is red? A) Strawberry B) Banana C) Grass\n2. 2 + 2? A) 3 B) 4 C) 5\n3. What flies? A) Fish B) Bird C) Worm\n4. Which is water? A) Ice B) Rock C) Sand\n5. How many noses do people have? A) 1 B) 2 C) 3\n6. What shines in the day? A) Moon B) Sun C) Lamp", "1. A\n2. B\n3. B\n4. A\n5. A\n6. B")] },
    novice: { prompts: [q("1. 5 + 6?\n2. How many legs does a spider have?\n3. Capital of France?\n4. How many days in a week?\n5. Which animal says moo?\n6. Which planet is our home?", "1. 11\n2. Eight\n3. Paris\n4. Seven\n5. Cow\n6. Earth")] },
    intermediate: { prompts: [q("1. 14 × 7?\n2. Chemical symbol for silver?\n3. Capital of Portugal?\n4. How many degrees are in a straight angle?\n5. Which organ filters blood to produce urine?\n6. What is 25% of 360?", "1. 98\n2. Ag\n3. Lisbon\n4. 180°\n5. Kidneys\n6. 90")] },
    competent: { prompts: [q("1. 23 × 14?\n2. Capital of Hungary?\n3. Which element has atomic number 8?\n4. Who wrote Animal Farm?\n5. Convert 3/8 to a percentage.\n6. Which planet rotates on its side?", "1. 322\n2. Budapest\n3. Oxygen\n4. George Orwell\n5. 37.5%\n6. Uranus")] },
    advanced: { prompts: [q("1. 37 × 24?\n2. Chemical symbol for molybdenum?\n3. What is the capital of Mongolia?\n4. Who formulated the uncertainty principle?\n5. What is the next prime after 89?\n6. Which ocean current warms western Europe?", "1. 888\n2. Mo\n3. Ulaanbaatar\n4. Werner Heisenberg\n5. 97\n6. Gulf Stream / North Atlantic Drift")] },
    grandmaster: { prompts: [q("1. 47 × 36?\n2. Atomic number of osmium?\n3. Who formulated the incompleteness theorems?\n4. What is the capital of Eritrea?\n5. Which moon has a nitrogen-rich atmosphere and methane lakes?\n6. Evaluate 2^12 - 3^6.", "1. 1692\n2. 76\n3. Kurt Gödel\n4. Asmara\n5. Titan\n6. 3367")] },
  },
  "clock-duel": {
    beginner: { prompts: [q("1. One hour after 09:00?\n2. One hour before 13:00?\n3. 10 minutes after 10:10?\n4. 5 minutes after 08:00?\n5. Half an hour after 12:00?\n6. One hour after 17:00?", "1. 10:00\n2. 12:00\n3. 10:20\n4. 08:05\n5. 12:30\n6. 18:00")] },
    amateur: { prompts: [q("1. 45 minutes after 09:30?\n2. 20 minutes before 13:05?\n3. 90 minutes after 16:45?\n4. 75 minutes before 08:20?\n5. A bus leaves 10:15 and rides for 55 minutes. Arrival?\n6. How many minutes between 14:25 and 15:50?", "1. 10:15\n2. 12:45\n3. 18:15\n4. 07:05\n5. 11:10\n6. 85 minutes")] },
    skilled: { prompts: [q("1. 5h 47m after 22:29?\n2. 4h 38m before 02:19?\n3. A train leaves 19:38 and travels 7h 51m. Arrival?\n4. How many seconds from 11:58:45 to 12:02:10?\n5. A flight leaves 14:25, lasts 5h 45m, destination 3 hours ahead. Arrival local time?\n6. 2h 16m after 23:51?", "1. 04:16 next day\n2. 21:41 previous day\n3. 03:29 next day\n4. 205 seconds\n5. 23:10\n6. 02:07 next day")] },
    advanced: { prompts: [q("1. 7h 58m after 21:47?\n2. 8h 39m before 04:12?\n3. A flight departs 23:35, flies 9h 50m, and the destination is 6h behind. Arrival local time?\n4. Duration between 22:57:39 and next-day 01:14:08?\n5. A concert starts 19:25, has three 47m sections and two 12m breaks. End time?\n6. Add 3h 29m 52s to 22:39:47.", "1. 05:45 next day\n2. 19:33 previous day\n3. 03:25 next day\n4. 2h 16m 29s\n5. 22:10\n6. 02:09:39 next day")] },
    grandmaster: { prompts: [q("1. 13h 47m after 17:29?\n2. 11h 52m before 06:03?\n3. An aircraft leaves 21:55 Monday, travels 16h 30m, and lands in a city 9h ahead. Local arrival day and time?\n4. Calculate difference between 23:59:42 and next-day 03:07:15.\n5. Two trains leave 11:25 and 12:07; the first lasts 3h 38m, the second 2h 51m. Which arrives first and by how long?\n6. Add 8h 58m 47s to 19:47:39.", "1. 07:16 next day\n2. 18:11 previous day\n3. Tuesday 23:25\n4. 3h 7m 33s\n5. Second arrives at 14:58, 5m before first at 15:03\n6. 04:46:26 next day")] },
  },
  "missing-numbers": {
    beginner: { prompts: [q("1. 1, 2, ?\n2. 3, 4, ?\n3. 5, 6, ?\n4. 2, 3, ?\n5. 7, 8, ?\n6. 10, 9, ?\n7. 4, 5, ?\n8. 0, 1, ?", "1. 3\n2. 5\n3. 7\n4. 4\n5. 9\n6. 8\n7. 6\n8. 2")] },
    novice: { prompts: [q("1. 2, 4, 6, ?\n2. 1, 3, 5, ?\n3. 10, 20, 30, ?\n4. 15, 12, 9, ?\n5. 3, 6, 9, ?\n6. 8, 7, 6, ?\n7. 2, 5, 8, ?\n8. 1, 2, 4, ?", "1. 8\n2. 7\n3. 40\n4. 6\n5. 12\n6. 5\n7. 11\n8. 8")] },
    skilled: { prompts: [q("1. 4, 11, 20, 31, ?\n2. 3, 9, 27, 81, ?\n3. 2, 6, 12, 20, 30, ?\n4. 1, 3, 7, 15, 31, ?\n5. 144, 121, 100, 81, ?\n6. 5, 11, 23, 47, ?\n7. 1, 5, 14, 30, 55, ?\n8. 2, 3, 5, 9, 17, ?", "1. 44 (+7,+9,+11,+13)\n2. 243\n3. 42\n4. 63\n5. 64\n6. 95\n7. 91 (squares of differences)\n8. 33")] },
    advanced: { prompts: [q("1. 2, 6, 15, 31, 56, ?\n2. 1, 4, 13, 40, 121, ?\n3. 1, 2, 6, 24, 120, ?\n4. 3, 8, 18, 38, 78, ?\n5. 1, 5, 11, 19, 29, ?\n6. 2, 7, 17, 37, 77, ?\n7. 64, 49, 36, 25, ?\n8. 5, 9, 17, 33, 65, ?", "1. 92 (+4,+9,+16,+25,+36)\n2. 364 (×3+1)\n3. 720\n4. 158 (×2+2)\n5. 41 (+4,+6,+8,+10,+12)\n6. 157 (×2+3)\n7. 16\n8. 129")] },
    grandmaster: { prompts: [q("1. 1, 4, 10, 20, 35, ?\n2. 2, 5, 11, 23, 47, ?\n3. 3, 10, 31, 94, 283, ?\n4. 1, 1, 2, 6, 24, 120, ?\n5. 7, 18, 34, 55, 81, ?\n6. 1, 8, 27, 64, ?\n7. 4, 12, 36, 108, ?\n8. 2, 12, 36, 80, 150, ?", "1. 56 (add 3,6,10,15,21)\n2. 95\n3. 850\n4. 720\n5. 112 (add 11,16,21,26,31)\n6. 125\n7. 324\n8. 252 (n³+n² for n=6)")] },
  },
  codebreaker: {
    beginner: { description: "Start the clock. One letter is missing from a simple word. Complete it.", win: "Fill in the ONE missing letter within 150 seconds.", prompts: [q("FILL ONE LETTER\nC _ T\nHint: a pet", "CAT"), q("FILL ONE LETTER\nD _ G\nHint: a pet", "DOG")] },
    novice: { description: "Start the clock. Two letters are missing from a simple word. Complete it.", win: "Fill in BOTH missing letters within 150 seconds.", prompts: [q("FILL TWO LETTERS\nH _ U _ E\nHint: a home", "HOUSE"), q("FILL TWO LETTERS\nA _ P _ E\nHint: a fruit", "APPLE")] },
    competent: { description: "Start the 150-second timer. Decode FIVE numbered words using A=1 to Z=26.", win: "Decode ALL FIVE words within 150 seconds.", prompts: [q("A=1, ..., Z=26\n1. 3-1-20\n2. 8-15-21-19-5\n3. 16-9-26-26-1\n4. 7-1-18-4-5-14\n5. 2-18-9-4-7-5", "1. CAT\n2. HOUSE\n3. PIZZA\n4. GARDEN\n5. BRIDGE")] },
    advanced: { description: "Start the 150-second timer. Decode SIX more challenging words with A=1 to Z=26.", win: "Decode all SIX words within 150 seconds.", prompts: [q("A=1, ..., Z=26\n1. 1-19-20-18-15-14-15-13-25\n2. 13-9-3-18-15-19-3-15-16-5\n3. 16-8-9-12-15-19-15-16-8-25\n4. 1-18-3-8-9-20-5-3-20\n5. 3-15-14-19-20-5-12-12-1-20-9-15-14\n6. 20-5-12-5-19-3-15-16-5", "1. ASTRONOMY\n2. MICROSCOPE\n3. PHILOSOPHY\n4. ARCHITECT\n5. CONSTELLATION\n6. TELESCOPE")] },
    grandmaster: { description: "Start the 150-second timer. Decode EIGHT difficult words using A=1 to Z=26.", win: "Decode all EIGHT words within 150 seconds.", prompts: [q("A=1, ..., Z=26\n1. 1-19-20-18-15-14-15-13-25\n2. 13-9-3-18-15-19-3-15-16-5\n3. 16-8-9-12-15-19-15-16-8-25\n4. 1-18-3-8-9-20-5-3-20\n5. 3-15-14-19-20-5-12-12-1-20-9-15-14\n6. 20-5-12-5-19-3-15-16-5\n7. 13-1-20-8-5-13-1-20-9-3-19\n8. 5-14-3-25-3-12-15-16-5-4-9-1", "1. ASTRONOMY\n2. MICROSCOPE\n3. PHILOSOPHY\n4. ARCHITECT\n5. CONSTELLATION\n6. TELESCOPE\n7. MATHEMATICS\n8. ENCYCLOPEDIA")] },
  },
};
