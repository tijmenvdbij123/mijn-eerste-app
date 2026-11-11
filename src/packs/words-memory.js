const LEVELS = ["beginner", "novice", "amateur", "intermediate", "competent", "skilled", "advanced", "grandmaster"];
const prompts = (words, prefix) => words.map((word) => ({ text: `${prefix}${word.toUpperCase()}` }));

const RHYMES = {
  beginner: ["CAT", "SUN", "DOG", "HAT", "BALL", "DAY", "BEE", "TREE"],
  novice: ["CAKE", "LIGHT", "RAIN", "BOAT", "MOUSE", "DREAM", "SAND", "PLAY"],
  amateur: ["FLOWER", "GARDEN", "WONDER", "BRIGHT", "MOTION", "TRAIN", "PAINT", "STORY"],
  intermediate: ["RAIN", "DREAM", "GLOW", "WIND", "SIGHT", "FLOWER", "RIVER", "SUNDAY"],
  competent: ["LIGHT", "CAKE", "STONE", "WATER", "MOON", "TRAIN", "CLOUD", "BRIGHT"],
  skilled: ["STATION", "CREATION", "NATION", "MOTION", "POWER", "GARDEN", "DECISION", "VISION"],
  advanced: ["REFLECTION", "CREATION", "DECISION", "CONNECTION", "CELEBRATION", "PRESENCE", "PROVISION", "DETECTION"],
  grandmaster: ["ILLUSION", "CONCLUSION", "VIBRATION", "PREDICTION", "COLLISION", "SOLUTION", "MOTION", "STATION"],
};
// Every given word above has at least one common exact rhyme; the older
// near-rhyme allowance stays available for the first four proficiencies.

const LAST_LETTER = {
  beginner: ["CAT", "DOG", "SUN", "BALL", "TREE", "HAT"],
  novice: ["GARDEN", "PLANET", "TIGER", "BASKET", "ROCKET", "ANIMAL"],
  amateur: ["BICYCLE", "FOREST", "MARKET", "AIRPORT", "LIBRARY", "DINNER"],
  intermediate: ["ADVENTURE", "TELESCOPE", "KNOWLEDGE", "EQUATOR", "PIONEER", "LANTERN"],
  competent: ["COMPASS", "ATMOSPHERE", "DISCOVERY", "SATELLITE", "INVENTION", "CONNECTION"],
  skilled: ["ASTRONOMY", "ARCHITECTURE", "SYMMETRY", "METAPHOR", "PARAMETER", "NAVIGATION"],
  advanced: ["METAMORPHOSIS", "CHRONOLOGY", "PHILOSOPHY", "SPECTRUM", "HYPOTHESIS", "CONTINUUM"],
  grandmaster: ["EPISTEMOLOGY", "THERMODYNAMICS", "BIOGEOGRAPHY", "QUANTIFICATION", "RECONCILIATION", "CRYSTALLOGRAPHY"],
};

const CATEGORIES = {
  beginner: { count: 8, topics: ["ANIMALS|CAT", "COLORS|RED", "FOODS|APPLE", "TOYS|BALL", "THINGS IN A HOUSE|CHAIR", "THINGS AT THE PARK|TREE"] },
  novice: { count: 8, topics: ["FRUITS|BANANA", "SPORTS|FOOTBALL", "THINGS AT SCHOOL|PENCIL", "PLACES IN A CITY|SHOP", "THINGS THAT CAN FLY|BIRD", "THINGS YOU CAN WEAR|SHIRT"] },
  amateur: { count: 10, topics: ["COUNTRIES", "MUSICAL INSTRUMENTS", "VEGETABLES", "KITCHEN ITEMS", "JOBS", "TYPES OF TRANSPORT"] },
  intermediate: { count: 10, topics: ["CAPITAL CITIES", "CHEMICAL ELEMENTS", "HISTORICAL FIGURES", "OLYMPIC SPORTS", "TYPES OF TREES", "LANGUAGES"] },
  competent: { count: 10, topics: ["COUNTRIES IN EUROPE", "CHEMICAL ELEMENTS", "MUSICAL INSTRUMENTS", "NATIONAL CAPITALS", "TYPES OF BIRDS", "CITIES OUTSIDE YOUR COUNTRY"] },
  skilled: { count: 10, topics: ["CHEMICAL ELEMENTS WITH THEIR SYMBOLS", "CAPITAL CITIES IN EUROPE", "COUNTRIES IN AFRICA", "FAMOUS NOVELS", "NOVELS AND THEIR AUTHORS", "MOUNTAIN RANGES"] },
  advanced: { count: 10, topics: ["FAMOUS SCIENTISTS", "COUNTRIES IN AFRICA", "CHEMICAL ELEMENTS BEFORE ATOMIC NUMBER 40", "HISTORICAL DYNASTIES", "ART MOVEMENTS", "NON-ENGLISH EUROPEAN CAPITALS"] },
  grandmaster: { count: 10, topics: ["NOBEL PRIZE WINNERS IN SCIENCE", "CHEMICAL ELEMENTS WITH ATOMIC NUMBERS ABOVE 50", "HISTORICAL PEACE TREATIES", "20TH-CENTURY MATHEMATICIANS", "UNESCO WORLD HERITAGE SITES", "WORLD LANGUAGES WITH OVER 10 MILLION SPEAKERS"] },
};

const SHOPPING = {
  beginner: ["APPLES", "MILK", "BREAD", "EGGS", "BANANAS", "COOKIES"],
  novice: ["CARROTS", "PANCAKES", "YOGURT", "ORANGES", "SOAP", "JUICE"],
  amateur: ["TOOTHPASTE", "LEMONADE", "NOTEBOOK", "SUNGLASSES", "UMBRELLA", "BACKPACK"],
  intermediate: ["WATERMELON", "HEADPHONES", "CHOCOLATE", "VOLLEYBALL", "SNOW GLOBE", "TEA POT"],
  competent: ["MEASURING TAPE", "THERMOS FLASK", "DESK LAMP", "COFFEE GRINDER", "CORKSCREW", "POCKET WATCH"],
  skilled: ["BINOCULARS", "CALCULATOR", "MAGNIFYING GLASS", "BAROMETER", "CAMPING STOVE", "TRAVEL ADAPTER"],
  advanced: ["ASTROLABE", "SEXTANT", "TELESCOPE", "GRAMOPHONE", "METRONOME", "KALEIDOSCOPE"],
  grandmaster: ["SPECTROMETER", "OSCILLOSCOPE", "MICROTOME", "CHRONOMETER", "REFRACTOMETER", "CALORIMETER"],
};

const MEMORY_BANKS = {
  beginner: "cat dog sun ball cup hat bed tree fish book car shoe apple milk rain bee star pig bus egg box duck frog sock leaf pie cake kite".split(" "),
  novice: "pencil rocket jacket ocean tiger river clock candle carrot pillow ladder garden farmer beach lemon window button spoon island castle bicycle mirror flower train balloon rainbow".split(" "),
  amateur: "compass lantern notebook mountain theater blanket trumpet bicycle volcano island sandwich anchor glacier chimney telescope hammock suitcase rainbow tunnel marble".split(" "),
  intermediate: "dolphin horizon factory museum glacier parachute microscope orchestra backpack constellation staircase compass waterfall cathedral telescope harvest equilibrium astronaut lighthouse meteorologist violinist".split(" "),
  competent: "parliament nebula hemisphere satellite hurricane blueprint thermometer navigation engineer cathedral orchestra democracy chemistry magnetism prism laboratory legislature biochemistry consequence revolution".split(" "),
  skilled: "longitude algorithm momentum geometry philosophy symmetry crystallization telescope mitochondrion equilibrium biodiversity taxonomy architecture chronology astronomy mechanism probability metallurgy physics".split(" "),
  advanced: "epistemology archaeology thermodynamics spectroscopy bioluminescence manuscript infrastructure cartography anthropology metamorphosis physiology kaleidoscope astrophysics ecosystem linguistics topography biodiversity gravitation".split(" "),
  grandmaster: "paleoclimatology photosynthesis phenomenology crystallography spectroscopy mitochondrial biogeography paleontology hermeneutics geochemistry electromagnetism intercontinental cosmology philology epistemology thermodynamics metamathematics anthropocene".split(" "),
};

// Deterministic pseudo-random permutations generate five fresh, repeatable
// memory cards. Equal proficiencies get identical card pools on both teams.
function recallCards(words) {
  return Array.from({ length: 5 }, (_, pack) => {
    const selection = Array.from({ length: 16 }, (_, i) => words[(i + pack * 3) % words.length]);
    const list = selection.map((word) => word[0].toUpperCase() + word.slice(1));
    return { text: `SECRET WORDS — STUDY FOR 25 SECONDS\n${list.join(" • ")}`, answer: list.join(" • ") };
  });
}

function digitCards(level) {
  const rank = LEVELS.indexOf(level);
  const count = [3, 4, 5, 7, 8, 10, 12, 15][rank];
  return Array.from({ length: 5 }, (_, pack) => {
    const digits = Array.from({ length: count }, (_, i) => (7 + i * (rank + 3) + (Math.floor(i / 2) * 3) + pack * 7 + rank) % 10).join("");
    return { text: `SECRET DIGITS — STUDY FOR 20 SECONDS\n${digits}`, answer: digits };
  });
}

export const WORD_MEMORY_PACKS = {
  "rhyme-rally": Object.fromEntries(LEVELS.map((level, i) => [level, {
    prompts: prompts(RHYMES[level], "Starting rhyme word: "),
    description: `No main clock. Use the game-card word to begin, with an active teammate going first. Continue clockwise through EVERY player on both teams, allowing five seconds per reply. ${i < 4 ? "Near-rhymes count as well as exact rhymes." : "Only exact ending-sound rhymes count."}`,
    win: `The active team scores if a defending player fails first. ${i < 4 ? "Near-rhymes are accepted." : "Only exact rhymes are accepted."} No repeats.`,
  }])),
  "last-letter-duel": Object.fromEntries(LEVELS.map((level) => [level, { prompts: prompts(LAST_LETTER[level], "Starting word: ") }])),
  "category-flood": Object.fromEntries(LEVELS.map((level) => [level, {
    description: `Start the 150-second timer before revealing. Work together to name ${CATEGORIES[level].count} distinct answers. A player from another team counts valid answers and checks for repeats.`,
    win: `Give ${CATEGORIES[level].count} correct, non-repeated answers within 150 seconds.`,
    prompts: prompts(CATEGORIES[level].topics.map((topic) => {
      const [name, example] = topic.split("|");
      return `Name ${CATEGORIES[level].count} ${name}.${example ? `\nEXAMPLE (COUNTS AS ONE): ${example}. Name ${CATEGORIES[level].count - 1} more.` : ""}`;
    }), ""),
  }])),
  "shopping-basket": Object.fromEntries(LEVELS.map((level) => [level, { prompts: SHOPPING[level].map((word) => ({ text: `Start with: ${word}. Add one new item every turn.` })) }])),
  "word-recall-battle": Object.fromEntries(LEVELS.map((level) => [level, {
    description: "Press Start. Each team looks at its secret list for 25 seconds. When the words disappear, write down AS MANY of the words you JUST SAW as you can remember within 90 seconds. Do not write during the viewing stage. Stop when the timer ends; the host then reveals the list for scoring.",
    win: "The active team must write down more distinct, correctly recalled words from its own list than the defending team does from theirs. A tie blocks the point.",
    // Paired level packs: Beginner/Novice share beginner words,
    // Amateur/Intermediate share novice, Competent/Skilled share amateur,
    // Advanced/Grandmaster share intermediate.
    prompts: recallCards(MEMORY_BANKS[["beginner", "beginner", "novice", "novice", "amateur", "amateur", "intermediate", "intermediate"][LEVELS.indexOf(level)]]),
  }])),
  "digit-duel": Object.fromEntries(LEVELS.map((level) => [level, {
    prompts: digitCards(level),
    description: `Both selected players memorize ${[3, 4, 5, 7, 8, 10, 12, 15][LEVELS.indexOf(level)]} digits for 20 seconds; then the card hides and they have 30 seconds to write from memory. No 150-second timer.`,
  }])),
};
