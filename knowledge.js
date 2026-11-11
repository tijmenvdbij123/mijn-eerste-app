// Curated facts and reproducible number puzzles. Each proficiency has its own
// question bank, and each bank is reshuffled into several different cards.
import { TRIVIA_ADDITIONS, TRIVIA_MOVES } from "./trivia-v33-additions.js";
import { calibrateTrivia } from "./trivia-v34-rules.js";
const f = (question, answer, choices) => ({ question, answer, choices: choices.split("|") });

const FACTS = {
  beginner: [
    f("Which animal says woof?", "Dog", "Cat|Dog|Cow|Duck"),
    f("How many wheels does a bicycle have?", "Two", "One|Three|Two|Four"),
    f("What color is a ripe banana?", "Yellow", "Purple|Blue|Yellow|Pink"),
    f("How many legs does a cat have?", "Four", "Two|Four|Six|Eight"),
    f("Which shape is round?", "Circle", "Square|Triangle|Circle|Rectangle"),
    f("What do you wear on your feet?", "Shoes", "Gloves|Hat|Shoes|Scarf"),
    f("What animal has a trunk?", "Elephant", "Elephant|Rabbit|Frog|Sheep"),
    f("What is 2 + 3?", "5", "4|6|5|7"),
    f("What falls from clouds when it rains?", "Water", "Sand|Paper|Water|Stones"),
    f("Which fruit is usually red or green?", "Apple", "Lemon|Apple|Banana|Coconut"),
    f("What rises in the morning, goes down in the evening, and gives us light?", "Sun", "Moon|Sun|Mars|Venus"),
    f("How many hands do most people have?", "Two", "One|Two|Three|Four"),
    f("What do bees make?", "Honey", "Cheese|Honey|Bread|Juice"),
    f("What is the opposite of hot?", "Cold", "Wet|Tall|Cold|Fast"),
  ],
  novice: [
    f("What is 7 + 8?", "15", "14|15|16|17"),
    f("How many sides does a triangle have?", "Three", "Two|Four|Five|Three"),
    f("What is the capital of France?", "Paris", "Rome|Madrid|Paris|Berlin"),
    f("How many days are in a week?", "Seven", "Five|Six|Seven|Eight"),
    f("Which planet do we live on?", "Earth", "Mars|Earth|Venus|Neptune"),
    f("How many legs does a spider have?", "Eight", "Six|Ten|Eight|Twelve"),
    f("What is 6 × 3?", "18", "15|21|18|24"),
    f("Which season comes after winter?", "Spring", "Summer|Autumn|Spring|Winter"),
    f("What is frozen water called?", "Ice", "Steam|Ice|Mist|Rain"),
    f("What is 40 - 13?", "27", "23|26|29|27"),
    f("Which ocean is west of Europe?", "Atlantic", "Pacific|Indian|Arctic|Atlantic"),
    f("How many minutes are in an hour?", "60", "30|50|60|100"),
    f("What is 12 ÷ 3?", "4", "3|5|4|6"),
    f("Which animal turns from a caterpillar into an adult?", "Butterfly", "Butterfly|Snail|Fox|Dolphin"),
  ],
  amateur: [
    f("What is 12 × 7?", "84", "72|84|96|78"),
    f("Which continent contains Brazil?", "South America", "Africa|Europe|South America|Asia"),
    f("Which planet has prominent rings?", "Saturn", "Mars|Saturn|Venus|Mercury"),
    f("What is 15% of 200?", "30", "25|35|30|40"),
    f("What gas do people breathe in to survive?", "Oxygen", "Carbon dioxide|Oxygen|Helium|Hydrogen"),
    f("How many degrees make a right angle?", "90", "45|180|60|90"),
    f("What is the capital of Spain?", "Madrid", "Lisbon|Madrid|Rome|Athens"),
    f("Which organ pumps blood?", "Heart", "Kidney|Liver|Heart|Lung"),
    f("What is 144 ÷ 12?", "12", "11|14|12|16"),
    f("What is the chemical symbol for gold?", "Au", "Ag|Au|Fe|Cu"),
    f("How many sides does an octagon have?", "Eight", "Six|Seven|Nine|Eight"),
    f("Which instrument has black and white keys?", "Piano", "Guitar|Flute|Piano|Violin"),
    f("What is 3/4 as a percentage?", "75%", "25%|50%|75%|80%"),
    f("Which gas do plants absorb during photosynthesis?", "Carbon dioxide", "Oxygen|Nitrogen|Carbon dioxide|Helium"),
  ],
  intermediate: [
    f("What is 17 × 13?", "221", "211|221|231|227"),
    f("What is the chemical symbol for silver?", "Ag", "Au|Ag|Si|Sr"),
    f("What is the capital of Portugal?", "Lisbon", "Madrid|Porto|Lisbon|Seville"),
    f("Which organ filters blood to make urine?", "Kidneys", "Lungs|Heart|Kidneys|Stomach"),
    f("What is 35% of 240?", "84", "74|84|96|86"),
    f("What is the largest ocean?", "Pacific", "Atlantic|Indian|Arctic|Pacific"),
    f("What is the square root of 625?", "25", "15|20|25|35"),
    f("How many degrees make the interior angles of a triangle?", "180", "90|180|270|360"),
    f("What is the capital of Austria?", "Vienna", "Prague|Vienna|Bern|Budapest"),
    f("Who wrote Animal Farm?", "George Orwell", "Charles Dickens|George Orwell|J. R. R. Tolkien|Jane Austen"),
    f("What is 2 to the power of 8?", "256", "128|512|256|1024"),
    f("What is the chemical symbol for potassium?", "K", "P|Pt|Po|K"),
    f("Which planet is known for rotating on its side?", "Uranus", "Saturn|Uranus|Jupiter|Mars"),
    f("What is the derivative of x²?", "2x", "x|2x|x²|2"),
  ],
  competent: [
    f("What is 23 × 14?", "322", "312|322|332|342"),
    f("Which element has atomic number 8?", "Oxygen", "Nitrogen|Neon|Oxygen|Carbon"),
    f("Which capital belongs to Hungary?", "Budapest", "Bucharest|Belgrade|Bratislava|Budapest"),
    f("Convert 3/8 to a percentage.", "37.5%", "35%|32.5%|37.5%|38%"),
    f("Who wrote The Metamorphosis?", "Franz Kafka", "Franz Kafka|Albert Camus|George Orwell|Leo Tolstoy"),
    f("Which element's symbol is W?", "Tungsten", "Tin|Tungsten|Titanium|Tantalum"),
    f("What is 19 squared?", "361", "341|361|381|391"),
    f("What is the SI unit of electrical resistance?", "Ohm", "Volt|Watt|Ampere|Ohm"),
    f("Which moon is Saturn's largest?", "Titan", "Europa|Io|Titan|Phobos"),
    f("Which river runs through Budapest?", "Danube", "Seine|Rhine|Vistula|Danube"),
    f("What is 7 factorial?", "5040", "720|5040|40320|10080"),
    f("What is the derivative of x³?", "3x²", "3x|x²|3x²|x³"),
    f("Which scientist developed the three laws of planetary motion?", "Johannes Kepler", "Isaac Newton|Galileo Galilei|Johannes Kepler|Niels Bohr"),
    f("Which part of a cell contains most DNA in humans?", "Nucleus", "Nucleus|Ribosome|Cell membrane|Golgi apparatus"),
  ],
  skilled: [
    f("What is 37 × 24?", "888", "888|868|898|978"),
    f("What is the capital of Croatia?", "Zagreb", "Ljubljana|Zagreb|Sarajevo|Belgrade"),
    f("Which element has atomic number 47?", "Silver", "Gold|Copper|Silver|Zinc"),
    f("Who formulated the uncertainty principle?", "Werner Heisenberg", "Albert Einstein|Werner Heisenberg|Max Planck|Erwin Schrödinger"),
    f("What is the square root of 2025?", "45", "35|40|45|55"),
    f("Which atmospheric layer contains most weather?", "Troposphere", "Thermosphere|Mesosphere|Stratosphere|Troposphere"),
    f("Which country has the city of Samarkand?", "Uzbekistan", "Kazakhstan|Uzbekistan|Mongolia|Armenia"),
    f("What is 2 to the power of 11?", "2048", "1024|4096|2048|8192"),
    f("Who wrote One Hundred Years of Solitude?", "Gabriel García Márquez", "Mario Vargas Llosa|Gabriel García Márquez|Jorge Luis Borges|Isabel Allende"),
    f("Which moon is the largest in the Solar System?", "Ganymede", "Titan|Europa|Ganymede|Callisto"),
    f("Which SI unit measures magnetic flux?", "Weber", "Tesla|Weber|Henry|Farad"),
    f("What is the next prime after 89?", "97", "91|93|97|99"),
    f("What is 17 cubed?", "4913", "4096|4913|5832|6859"),
    f("What is the capital of Mongolia?", "Ulaanbaatar", "Thimphu|Ulaanbaatar|Kathmandu|Astana"),
  ],
  advanced: [
    f("What is 47 × 36?", "1692", "1662|1692|1792|1682"),
    f("Which element has atomic number 72?", "Hafnium", "Tantalum|Hafnium|Zirconium|Rhenium"),
    f("Who proved the incompleteness theorems?", "Kurt Gödel", "David Hilbert|Bertrand Russell|Kurt Gödel|Alan Turing"),
    f("What is the capital of Eritrea?", "Asmara", "Asmara|Addis Ababa|Djibouti|Juba"),
    f("Evaluate 2^12 - 3^6.", "3367", "3347|3367|3467|3327"),
    f("Which moon has methane lakes?", "Titan", "Europa|Callisto|Titan|Triton"),
    f("What is 29 squared?", "841", "821|831|841|851"),
    f("What is the capital of Bhutan?", "Thimphu", "Kathmandu|Thimphu|Dhaka|Colombo"),
    f("Which element's symbol is Mo?", "Molybdenum", "Manganese|Molybdenum|Mercury|Magnesium"),
    f("What is 13 factorial divided by 12 factorial?", "13", "12|13|24|156"),
    f("Which mathematical constant is the limit of (1+1/n)^n?", "e", "pi|e|phi|gamma"),
    f("Who wrote The Master and Margarita?", "Mikhail Bulgakov", "Boris Pasternak|Mikhail Bulgakov|Fyodor Dostoevsky|Leo Tolstoy"),
    f("What is the derivative of sin(x)?", "cos(x)", "-sin(x)|cos(x)|-cos(x)|tan(x)"),
    f("What is 31 squared?", "961", "931|951|961|991"),
  ],
  grandmaster: [
    f("What is 2^15 - 3^8?", "26207", "26207|25207|26017|26107"),
    f("What is the greatest common divisor of 391 and 299?", "23", "13|17|23|29"),
    f("What is the determinant of the matrix [[3,7],[5,2]]?", "-29", "-29|-19|29|41"),
    f("Solve x² - 13x + 42 = 0; give the two roots.", "6 and 7", "5 and 8|6 and 7|3 and 14|2 and 21"),
    f("Which mathematician introduced the lambda calculus?", "Alonzo Church", "Kurt Gödel|Alonzo Church|Alan Turing|John von Neumann"),
    f("What is the smallest prime greater than 199?", "211", "201|203|211|209"),
    f("Evaluate 17³ + 11².", "5034", "4934|5004|5034|5044"),
    f("What is the capital of Palau?", "Ngerulmud", "Koror|Hagåtña|Ngerulmud|Suva"),
    f("Who wrote The Brothers Karamazov?", "Fyodor Dostoevsky", "Nikolai Gogol|Leo Tolstoy|Fyodor Dostoevsky|Mikhail Bulgakov"),
    f("What is 7! divided by (5! × 2!)?", "21", "14|28|21|35"),
    f("What is the derivative of ln(x) for positive x?", "1/x", "ln(x)|x|1/x|e^x"),
    f("What is 997 mod 13?", "9", "7|9|10|11"),
    f("What is 37² - 36²?", "73", "72|73|74|75"),
    f("What is the sum 1 + 2 + ... + 100?", "5050", "5000|5050|5100|5150"),
  ],
};

// All three trivia games draw from the SAME 8-level dataset. Retain the 112
// V3.2 facts, relocate those marked as too hard, then add 224 new questions.
const orderedLevels = Object.keys(FACTS);
export const TRIVIA_BASELINE_COUNT = Object.values(FACTS).reduce((sum, facts) => sum + facts.length, 0);
const uncalibratedBank = Object.fromEntries(orderedLevels.map((level) => [level, [...FACTS[level]]]));
for (const [question, target] of Object.entries(TRIVIA_MOVES)) {
  for (const level of orderedLevels) {
    const index = uncalibratedBank[level].findIndex((fact) => fact.question === question);
    if (index < 0 || level === target) continue;
    uncalibratedBank[target].push(uncalibratedBank[level].splice(index, 1)[0]);
    break;
  }
}
for (const level of orderedLevels) {
  const seen = new Set(uncalibratedBank[level].map((fact) => fact.question.toLowerCase().trim()));
  for (const newFact of TRIVIA_ADDITIONS[level]) {
    if (seen.has(newFact.question.toLowerCase().trim())) {
      // Duplicated V3.3 wording: the V3.4 editorial pass later removes easy
      // fallback questions from advanced decks and fills with tiered maths.
      const n = uncalibratedBank[level].length;
      const a = n + 12, b = n + 3;
      const replacement = { question: `Solve ${a} + ${b} - ${n}.`, answer: String(a + b - n), choices: [String(a + b - n), String(a + b - n + 1), String(a + b - n - 1), String(a + b - n + 2)] };
      uncalibratedBank[level].push(replacement);
      continue;
    }
    uncalibratedBank[level].push(newFact);
    seen.add(newFact.question.toLowerCase().trim());
  }
}
export const TRIVIA_BANK = calibrateTrivia(uncalibratedBank);
const originalTitles = new Set(Object.values(FACTS).flat().map((fact) => fact.question));
export const TRIVIA_NEW_QUESTIONS = Object.fromEntries(orderedLevels.map((level) => [level,
  TRIVIA_BANK[level].filter((fact) => !originalTitles.has(fact.question)),
]));

function quizCards(level, gameId) {
  const facts = TRIVIA_BANK[level];
  const count = gameId === "team-trivia" ? 5 : 6;
  // Twenty-four distinct challenge cards per level ensure all the new facts
  // actually appear in real games, not just in an unused bank.
  const gcd = (a, b) => b ? gcd(b, a % b) : a;
  const stride = [5, 7, 11, 13, 17, 19, 23, 29, 31, 37].find((candidate) => gcd(candidate, facts.length) === 1) || 1;
  const startPoints = Array.from({ length: 24 }, (_, card) => (card * stride) % facts.length);
  return startPoints.map((start, cardNumber) => {
    const questions = Array.from({ length: count }, (_, i) => facts[(start + i) % facts.length]);
    const boardStyle = cardNumber % 3;
    const isMultipleChoice = (i) => Boolean(questions[i].forceMultipleChoice) || (gameId === "trivia-board" ? (boardStyle === 0 || boardStyle === 1 && i % 2 === 0) : gameId === "quickfire-facts" && level === "beginner");
    const text = questions.map((item, i) => {
      const multipleChoice = isMultipleChoice(i);
      const choices = item.choices.map((_, index) => item.choices[(index + cardNumber) % item.choices.length]);
      return `${i + 1}. ${item.question}${multipleChoice ? "\n   " + choices.map((choice, k) => `${"ABCD"[k]}) ${choice}`).join("  ") : ""}`;
    }).join("\n");
    const answer = questions.map((item, i) => {
      const choices = item.choices.map((_, index) => item.choices[(index + cardNumber) % item.choices.length]);
      return `${i + 1}. ${isMultipleChoice(i) ? `${"ABCD"[choices.indexOf(item.answer)]}) ` : ""}${item.answer}`;
    }).join("\n");
    const heading = boardStyle === 2 && questions.some((item) => item.forceMultipleChoice) ? "MIXED QUESTIONS" : ["MULTIPLE CHOICE", "MIXED QUESTIONS", "OPEN QUESTIONS"][boardStyle];
    return { text: `${gameId === "trivia-board" ? heading + "\n" : ""}${text}`, answer };
  });
}

const sequence = (items) => `${items.slice(0, -1).join(", ")}, ?`;
function sequenceCards(level) {
  // V3.4: simpler patterns across ALL levels; preserve eight correct answers.
  const index = Math.max(0, ["beginner", "novice", "amateur", "intermediate", "competent", "skilled", "advanced", "grandmaster"].indexOf(level) - 2);
  return Array.from({ length: 5 }, (_, pack) => {
    const puzzles = Array.from({ length: 8 }, (_, i) => {
      const start = 1 + pack + i;
      let values;
      if (index === 0) values = Array.from({ length: 5 }, (_, n) => start + n);
      else if (index === 1) values = Array.from({ length: 5 }, (_, n) => start + n * (2 + i % 3));
      else if (index === 2) values = i % 2 ? Array.from({ length: 5 }, (_, n) => start * (n + 1)) : Array.from({ length: 5 }, (_, n) => start * 2 ** n);
      else if (index === 3) values = i % 2 ? Array.from({ length: 5 }, (_, n) => start + n * n) : Array.from({ length: 5 }, (_, n) => start * 3 ** n);
      else if (index === 4) values = Array.from({ length: 5 }, (_, n) => start + (n + 1) ** (i % 2 + 2));
      else if (index === 5) values = Array.from({ length: 5 }, (_, n) => start + (n + 1) ** 3 + n * (1 + i % 3));
      else if (index === 6) values = Array.from({ length: 5 }, (_, n) => start + (n + 1) ** (i % 2 + 3));
      else values = Array.from({ length: 5 }, (_, n) => start + (n + 1) ** 4 + (n + 1) ** 2);
      return { question: sequence(values), answer: values.at(-1) };
    });
    return { text: puzzles.map((p, i) => `${i + 1}. ${p.question}`).join("\n"), answer: puzzles.map((p, i) => `${i + 1}. ${p.answer}`).join("\n") };
  });
}

const fmt = (minutes) => `${String((Math.floor(minutes / 60) % 24 + 24) % 24).padStart(2, "0")}:${String((minutes % 60 + 60) % 60).padStart(2, "0")}`;
const day = (minutes) => minutes < 0 ? " previous day" : minutes >= 1440 ? " next day" : "";
const resultTime = (minutes) => fmt(minutes) + day(minutes);

function clockCards(level, requestedRank = null) {
  const rank = requestedRank ?? Math.max(0, ["beginner", "novice", "amateur", "intermediate", "competent", "skilled", "advanced", "grandmaster"].indexOf(level) - 2);
  const step = [5, 5, 10, 15, 25, 45, 90, 140][rank];
  const cards = Array.from({ length: 5 }, (_, pack) => {
    const times = [9 * 60 + 10 + pack * 11, 13 * 60 + 15 + pack * 7, 11 * 60 + pack * 9,
      (rank > 3 ? 21 : 14) * 60 + 18 + pack * 6, 16 * 60 + 5 + pack * 13, (rank > 4 ? 23 : 10) * 60 + 12 + pack * 10];
    const deltas = rank <= 2 ? [5, 10, 10, 15, 10, 15] : [step, step + 15, step * 2, step + 20, step * 3, step + 25];
    const questions = times.map((time, i) => `${i + 1}. What time is ${deltas[i]} minutes ${i % 2 ? "BEFORE" : "AFTER"} ${fmt(time)}?`);
    const answers = times.map((time, i) => `${i + 1}. ${resultTime(time + (i % 2 ? -deltas[i] : deltas[i]))}`);
    if (rank >= 6) {
      const h = 3 + rank + pack;
      const offset = rank === 6 ? -3 : 7;
      questions[4] = `5. A flight leaves at ${fmt(times[4])}, flies ${h}h ${12 + pack}m, and its destination is ${Math.abs(offset)} hours ${offset < 0 ? "behind" : "ahead"}. What is the local arrival time?`;
      const arrival = times[4] + h * 60 + 12 + pack + offset * 60;
      answers[4] = `5. ${resultTime(arrival)}`;
      const startSec = 22 * 3600 + (35 + pack) * 60 + (11 + pack);
      const deltaSec = (4 + pack) * 3600 + (27 + pack) * 60 + (43 + pack);
      const total = startSec + deltaSec;
      const s = total % 60; const mins = Math.floor(total / 60);
      questions[5] = `6. Add ${4 + pack}h ${27 + pack}m ${43 + pack}s to 22:${35 + pack}:${11 + pack}.`;
      answers[5] = `6. ${fmt(mins)}:${String(s).padStart(2,"0")}${day(mins)}`;
    }
    return { text: `USE 24-HOUR TIME\n${questions.join("\n")}`, answer: answers.join("\n") };
  });
  // Expert retains the former expert questions as well as the previous
  // Advanced set moved up to it.
  return level === "grandmaster" && requestedRank === null ? [...cards, ...clockCards(level, 7)] : cards;
}

const TARGETS = {
  beginner: [[10,1,2,3,4],[12,1,2,4,5],[9,1,2,3,6],[14,2,3,4,5],[16,1,3,5,7]],
  novice: [[24,2,3,4,5],[30,3,4,5,6],[36,2,4,6,8],[28,1,3,7,9],[48,2,5,8,9]],
  amateur: [[42,2,3,7,8],[48,3,5,7,9],[75,2,6,8,10],[63,3,4,7,11],[80,2,4,9,12]],
  intermediate: [[96,3,6,8,11],[105,4,7,9,12],[118,2,5,13,17],[125,6,8,11,15],[144,4,9,12,15]],
  competent: [[183,4,9,13,17],[212,6,11,14,19],[245,3,8,17,23],[286,5,13,19,24],[319,7,11,23,29]],
  skilled: [[347,7,11,17,23],[421,5,13,19,31],[508,8,17,23,29],[613,9,19,27,35],[729,11,17,29,41]],
  advanced: [[967,11,19,31,43],[1247,13,23,37,47],[1564,17,29,41,53],[1879,19,31,43,61],[2345,23,37,53,71]],
  grandmaster: [[3179,17,31,47,73],[4093,19,37,59,83],[5227,23,43,67,97],[6891,29,47,71,103],[8017,31,53,79,109]],
};
// Novice must be able to get an EXACT answer using + and - alone. Every
// target, operand and partial sum is 20 or less.
const NOVICE_TARGETS = [[8, 1, 2, 3, 4], [10, 1, 2, 3, 6], [12, 1, 2, 4, 5], [14, 1, 3, 4, 6], [16, 2, 3, 5, 6]];

const WORDS = {
  amateur: "cat dog moon tree sun fish book rain cake milk star lamp bird park boat leaf apple ball cloud train".split(" "),
  intermediate: "planet bridge rocket pocket feather garden library mirror castle forest jacket lantern tunnel compass meadow fountain island captain dolphin valley".split(" "),
  competent: "horizon satellite mosaic telescope parchment blueprint prism orchestra marble glacier waterfall cathedral battery triangle crystal balcony portrait lantern".split(" "),
  skilled: "labyrinth microscope architecture constellation symmetry telescope equilibrium philosophy kaleidoscope chronology algorithm hemisphere atmosphere velocity".split(" "),
  advanced: "metamorphosis astrophysics cartography lithosphere photosynthesis eccentricity autobiography spectroscopy architecture mitochondria perpendicular amphitheater constellation".split(" "),
  grandmaster: "electromagnetism epistemology crystallography thermodynamics phenomenology geochronology anthropomorphism bioluminescence interdisciplinarity paleoclimatology counterintuitive".split(" "),
};
const BEGINNER_WORDS = [["CAT","pet"],["DOG","pet"],["SUN","sky"],["HAT","clothing"],["BED","furniture"],["CUP","drink"],["PEN","writing"],["BUS","vehicle"],["BAG","carry"],["EGG","food"],["FAN","air"],["PIG","animal"],["MAP","directions"],["KEY","lock"],["BOX","container"],["TOY","play"]];
const NOVICE_WORDS = [["APPLE","fruit"],["HOUSE","home"],["TIGER","animal"],["WATER","drink"],["BREAD","food"],["HORSE","animal"],["CHAIR","furniture"],["CLOCK","time"],["SHEEP","animal"],["BEACH","sand"],["PIZZA","food"],["TRAIN","vehicle"],["PLANT","grows"],["SHOES","feet"],["MOUSE","animal"],["PAPER","write"]];
const encode = (word) => [...word.toUpperCase()].map((letter) => letter.charCodeAt(0) - 64).join("-");

function codeCards(level) {
  if (["beginner", "novice"].includes(level)) {
    const source = level === "beginner" ? BEGINNER_WORDS : NOVICE_WORDS;
    return Array.from({ length: 5 }, (_, pack) => {
      const chosen = Array.from({ length: 4 }, (_, i) => source[(pack * 3 + i) % source.length]);
      const masked = chosen.map(([word, hint], i) => {
        const positions = level === "beginner" ? [Math.floor(word.length / 2)] : [1, word.length - 2];
        const shown = [...word].map((letter, k) => positions.includes(k) ? "_" : letter).join(" ");
        return `${i + 1}. ${shown}  (hint: ${hint})`;
      });
      return { text: `${level === "beginner" ? "FILL ONE MISSING LETTER PER WORD" : "FILL TWO MISSING LETTERS PER WORD"}\n${masked.join("\n")}`, answer: chosen.map(([word], i) => `${i + 1}. ${word}`).join("\n") };
    });
  }
  const list = WORDS[level];
  const count = { amateur: 2, intermediate: 3, competent: 4, skilled: 5, advanced: 5, grandmaster: 8 }[level];
  return Array.from({ length: 5 }, (_, pack) => {
    const chosen = Array.from({ length: count }, (_, i) => list[(pack * 3 + i) % list.length]);
    return { text: `A=1, B=2, ... Z=26\n${chosen.map((word, i) => `${i + 1}. ${encode(word)}`).join("\n")}`, answer: chosen.map((word, i) => `${i + 1}. ${word.toUpperCase()}`).join("\n") };
  });
}

const levels = Object.keys(FACTS);
export const KNOWLEDGE_PACKS = {
  "team-trivia": Object.fromEntries(levels.map((level) => [level, {
    prompts: quizCards(level, "team-trivia"),
    description: "Work together as one team. Discuss the five questions on your team's card, then write one answer per question.",
    win: "The active team earns the point with at least FOUR out of FIVE correct answers.",
  }])),
  "quickfire-facts": Object.fromEntries(levels.map((level) => [level, {
    // One level easier than the team's stated level, except Beginner.
    prompts: quizCards(levels[Math.max(0, levels.indexOf(level) - 1)], "quickfire-facts"),
    description: "Only the selected player answers six fast questions. In a duel each player gets a level-adjusted question card; teammates cannot help.",
    win: "The active player must answer at least FOUR of SIX correctly. In 1v1, they must ALSO beat their opponent's score; a tie blocks the point.",
  }])),
  "trivia-board": Object.fromEntries(levels.map((level) => [level, {
    prompts: quizCards(level, "trivia-board"),
    description: "TEAM BATTLE ONLY. Both teams independently answer six questions from their own proficiency-level bank. Cards can be multiple choice, mixed or open questions. Write answers privately before comparing.",
    win: "The active team must get more of its six questions right than the defending team gets of theirs. A tie blocks the point.",
  }])),
  "missing-numbers": Object.fromEntries(levels.map((level) => [level, { prompts: sequenceCards(level) }])),
  "clock-duel": Object.fromEntries(levels.map((level) => [level, { prompts: clockCards(level) }])),
  "target-number": Object.fromEntries(levels.map((level) => [level, {
    prompts: (level === "novice" ? NOVICE_TARGETS : level === "grandmaster" ? [...TARGETS.advanced, ...TARGETS.grandmaster] : TARGETS[levels[Math.max(0, levels.indexOf(level) - 1)]]).map(([target, ...numbers]) => ({ text: `TARGET: ${target}\nUSE ALL FOUR NUMBERS EXACTLY ONCE: ${numbers.join(", ")}\nAllowed: ${level === "novice" ? "+ and − ONLY (no multiplication or division)" : "+, −, ×, ÷, and parentheses"}.` })),
    description: `Start the 60-second timer before revealing. Make an expression using all four numbers exactly once to approach the target. ${level === "novice" ? "NOVICE: only addition and subtraction; targets and numbers are at most 20." : ""}`,
    win: "The active team's valid expression must be closer to its target than the defender's. A tie blocks the point.",
  }])),
  codebreaker: Object.fromEntries(levels.map((level) => [level, {
    prompts: codeCards(level),
    description: level === "beginner" || level === "novice"
      ? `Start the 150-second timer before opening. Complete four words with ${level === "beginner" ? "one" : "two"} missing letter${level === "beginner" ? "" : "s"} each.`
      : `Start the 150-second timer before revealing. Decode ${ { amateur: 2, intermediate: 3, competent: 4, skilled: 5, advanced: 5, grandmaster: 8 }[level] } words using A=1, B=2, ..., Z=26.`,
    win: level === "beginner" || level === "novice" ? "Get at least THREE of FOUR words correct within 150 seconds." : `Decode all ${ { amateur: 2, intermediate: 3, competent: 4, skilled: 5, advanced: 5, grandmaster: 8 }[level] } words within 150 seconds.`,
  }])),
};
