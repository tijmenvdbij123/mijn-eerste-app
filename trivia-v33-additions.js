// V3.3: 15 manually curated, age-appropriate facts plus 13 generated number
// questions for each of the eight proficiency levels. This is one shared bank
// for Five Quick Facts, Quickfire Facts and Trivia Board.
// Each record: question | correct answer | three credible incorrect choices.
const NEW_FACTS = {
  beginner: [
    "What color is snow?|White|Green|Purple|Orange",
    "Which animal says meow?|Cat|Horse|Duck|Frog",
    "What do you use to see things?|Eyes|Ears|Feet|Hands",
    "What fruit is long and yellow?|Banana|Apple|Grape|Cherry",
    "Which animal has a shell and walks slowly?|Snail|Dog|Bird|Horse",
    "How many wheels are on a car?|Four|Two|Three|Six",
    "Which part of your body do you hear with?|Ears|Eyes|Nose|Fingers",
    "What do you call a baby dog?|Puppy|Kitten|Calf|Lamb",
    "Which of these grows on a tree?|Apple|Carrot|Potato|Lettuce",
    "What color do you get by mixing blue and yellow paint?|Green|Red|Purple|Orange",
    "What comes after Tuesday?|Wednesday|Monday|Friday|Sunday",
    "Which animal swims and has fins?|Fish|Cat|Sheep|Chicken",
    "What do you put on when it rains?|Raincoat|Sunglasses|Swimsuit|Sandals",
    "How many fingers are on one hand including the thumb?|Five|Four|Six|Ten",
    "What do you use to brush your teeth?|Toothbrush|Comb|Spoon|Pencil",
  ],
  novice: [
    "What is the capital of the United Kingdom?|London|Paris|Dublin|Berlin",
    "Which planet is called the Red Planet?|Mars|Venus|Earth|Neptune",
    "What is the largest land animal alive today?|African elephant|Giraffe|Rhino|Hippo",
    "How many hours are in one day?|24|12|30|48",
    "Which direction does the sun usually rise from?|East|West|North|South",
    "How many months are in a year?|Twelve|Ten|Eleven|Thirteen",
    "Which shape has four equal sides and four square corners?|Square|Triangle|Circle|Pentagon",
    "Which part of a plant is usually underground?|Roots|Leaves|Flowers|Fruit",
    "What is a young cat called?|Kitten|Puppy|Calf|Foal",
    "Which animal is famous for black-and-white stripes?|Zebra|Lion|Bear|Elephant",
    "Which instrument has strings and is played with a bow?|Violin|Drum|Trumpet|Flute",
    "What does a thermometer measure?|Temperature|Distance|Speed|Weight",
    "How many centimeters make a meter?|100|10|60|1000",
    "What is the opposite of north?|South|East|West|Up",
    "Which organ do you use to think?|Brain|Stomach|Liver|Lung",
  ],
  amateur: [
    "Which ocean is west of Europe?|Atlantic Ocean|Pacific Ocean|Indian Ocean|Arctic Ocean",
    "Which continent is Kenya in?|Africa|Asia|Europe|South America",
    "What is the capital of Germany?|Berlin|Munich|Vienna|Hamburg",
    "How many bones are in the adult human skeleton, approximately?|206|106|306|406",
    "What force pulls objects toward Earth?|Gravity|Magnetism|Friction|Buoyancy",
    "Which organ helps you breathe by moving air?|Lungs|Kidneys|Pancreas|Liver",
    "How many minutes are in two and a half hours?|150|125|180|130",
    "What is the longest side of a right triangle called?|Hypotenuse|Median|Radius|Diameter",
    "What language is mainly spoken in Brazil?|Portuguese|Spanish|French|Italian",
    "Which planet is closest to the Sun?|Mercury|Venus|Earth|Mars",
    "What is the capital of Italy?|Rome|Milan|Venice|Naples",
    "What is frozen rain that falls as balls of ice called?|Hail|Fog|Mist|Dew",
    "How many sides does a hexagon have?|Six|Five|Seven|Eight",
    "Which scientist is associated with the falling-apple gravity story?|Isaac Newton|Albert Einstein|Marie Curie|Charles Darwin",
    "What do we call animals that eat only plants?|Herbivores|Carnivores|Omnivores|Predators",
  ],
  intermediate: [
    "What is the chemical symbol for gold?|Au|Ag|Cu|Fe",
    "How many sides does an octagon have?|Eight|Six|Seven|Nine",
    "Which gas do plants absorb during photosynthesis?|Carbon dioxide|Oxygen|Nitrogen|Hydrogen",
    "Which continent includes Thailand?|Asia|Europe|Africa|Oceania",
    "What does the chemical formula CO2 represent?|Carbon dioxide|Carbon monoxide|Oxygen|Water",
    "Which country is famous for the city of Barcelona?|Spain|Portugal|Italy|France",
    "What is the capital of Canada?|Ottawa|Toronto|Montreal|Vancouver",
    "Which organ produces insulin?|Pancreas|Heart|Kidney|Spleen",
    "How many degrees are in a full circle?|360|180|270|90",
    "Which metal is liquid at ordinary room temperature?|Mercury|Iron|Copper|Aluminium",
    "What is the name for a word with the same meaning as another?|Synonym|Antonym|Homophone|Acronym",
    "What is the process of water changing from liquid to gas called?|Evaporation|Condensation|Freezing|Melting",
    "What is the capital of Greece?|Athens|Rome|Ankara|Sofia",
    "Who painted the Mona Lisa?|Leonardo da Vinci|Vincent van Gogh|Pablo Picasso|Claude Monet",
    "What is the smallest prime number?|Two|One|Three|Zero",
  ],
  competent: [
    "What is the capital of Austria?|Vienna|Prague|Budapest|Bern",
    "Who wrote Animal Farm?|George Orwell|Aldous Huxley|J. R. R. Tolkien|Mark Twain",
    "How many degrees are inside any triangle in Euclidean geometry?|180|90|270|360",
    "What is the derivative of x squared?|2x|x|x squared|2",
    "Which part of a human cell holds most of its DNA?|Nucleus|Ribosome|Mitochondrion|Cell membrane",
    "What is the chemical symbol for sodium?|Na|S|So|Sn",
    "What is the capital of Poland?|Warsaw|Krakow|Gdansk|Wroclaw",
    "Which element has the chemical symbol Fe?|Iron|Fluorine|Francium|Gold",
    "What is the largest planet in our Solar System?|Jupiter|Saturn|Neptune|Earth",
    "Who wrote Romeo and Juliet?|William Shakespeare|Charles Dickens|Jane Austen|Oscar Wilde",
    "Which river flows through Paris?|Seine|Thames|Danube|Rhine",
    "Which mathematician is linked to the Pythagorean theorem?|Pythagoras|Euler|Gauss|Pascal",
    "What is the capital of Finland?|Helsinki|Oslo|Stockholm|Reykjavik",
    "What is the common name for NaCl?|Table salt|Baking soda|Sugar|Vinegar",
    "Which part of a flower usually develops into fruit?|Ovary|Petal|Stem|Pollen",
  ],
  skilled: [
    "Who wrote The Metamorphosis?|Franz Kafka|Albert Camus|George Orwell|Leo Tolstoy",
    "Which river runs through Budapest?|Danube|Seine|Rhine|Thames",
    "What is the chemical symbol for potassium?|K|P|Pt|Po",
    "Which planet rotates almost on its side?|Uranus|Mars|Venus|Jupiter",
    "What is the chemical symbol for silver?|Ag|Au|Si|Sn",
    "Which scientist formulated the three laws of planetary motion?|Johannes Kepler|Isaac Newton|Galileo Galilei|Niels Bohr",
    "What is the SI unit of force?|Newton|Joule|Watt|Pascal",
    "What is the capital of Slovenia?|Ljubljana|Zagreb|Bratislava|Sarajevo",
    "Which composer wrote The Four Seasons?|Antonio Vivaldi|Wolfgang Mozart|Ludwig Beethoven|Johann Bach",
    "Which organelle is often called the powerhouse of the cell?|Mitochondrion|Nucleus|Ribosome|Vacuole",
    "What is the capital of Croatia?|Zagreb|Split|Dubrovnik|Rijeka",
    "What is the derivative of x cubed?|3x squared|2x|x cubed|3x",
    "Which element has atomic number 6?|Carbon|Oxygen|Nitrogen|Boron",
    "Which treaty ended the First World War with Germany?|Treaty of Versailles|Treaty of Utrecht|Treaty of Paris 1763|Treaty of Tordesillas",
    "Which moon is Saturn's largest?|Titan|Europa|Ganymede|Io",
  ],
  advanced: [
    "Who formulated the uncertainty principle?|Werner Heisenberg|Max Planck|Albert Einstein|Niels Bohr",
    "Which atmospheric layer contains most everyday weather?|Troposphere|Stratosphere|Mesosphere|Thermosphere",
    "Who wrote One Hundred Years of Solitude?|Gabriel Garcia Marquez|Mario Vargas Llosa|Jorge Luis Borges|Isabel Allende",
    "Which SI unit measures magnetic flux?|Weber|Tesla|Henry|Farad",
    "Which sea is bordered by Jordan and Israel?|Dead Sea|Caspian Sea|Red Sea|Black Sea",
    "What is the atomic number of cobalt?|27|25|26|28",
    "What is the capital of Mongolia?|Ulaanbaatar|Astana|Kathmandu|Thimphu",
    "Which element has atomic number 8?|Oxygen|Carbon|Nitrogen|Neon",
    "Which element has the symbol W?|Tungsten|Tin|Tantalum|Titanium",
    "Which SI unit measures electrical resistance?|Ohm|Volt|Watt|Ampere",
    "What is the capital of Estonia?|Tallinn|Riga|Vilnius|Helsinki",
    "Who discovered penicillin?|Alexander Fleming|Louis Pasteur|Robert Koch|Joseph Lister",
    "Which planet has the shortest orbital period?|Mercury|Venus|Earth|Mars",
    "Which mathematical constant is approximately 2.71828?|Euler's number e|Pi|Golden ratio|Square root of 2",
    "Which Greek philosopher taught Alexander the Great?|Aristotle|Plato|Socrates|Epicurus",
  ],
  grandmaster: [
    "Which element has atomic number 72?|Hafnium|Rhenium|Zirconium|Tantalum",
    "Who proved the incompleteness theorems?|Kurt Godel|David Hilbert|Alan Turing|Bertrand Russell",
    "What is the capital of Eritrea?|Asmara|Addis Ababa|Djibouti|Juba",
    "Which moon has stable lakes of methane and ethane?|Titan|Europa|Io|Callisto",
    "What is the capital of Bhutan?|Thimphu|Kathmandu|Dhaka|Colombo",
    "What is the capital of Palau?|Ngerulmud|Koror|Suva|Hagatna",
    "Who introduced the lambda calculus?|Alonzo Church|Alan Turing|Kurt Godel|John von Neumann",
    "Which mathematician proved Fermat's Last Theorem?|Andrew Wiles|Grigori Perelman|Terence Tao|John Nash",
    "Which artist painted The Garden of Earthly Delights?|Hieronymus Bosch|Pieter Bruegel|Albrecht Durer|Jan van Eyck",
    "What is the capital of Kiribati?|South Tarawa|Funafuti|Apia|Nuku'alofa",
    "Who formulated the concept of natural selection jointly with Darwin?|Alfred Russel Wallace|Gregor Mendel|Thomas Huxley|Carl Linnaeus",
    "Which element has atomic number 74?|Tungsten|Rhenium|Tantalum|Osmium",
    "Which mathematician is associated with the incompleteness theorems?|Kurt Godel|Alonzo Church|David Hilbert|Gottlob Frege",
    "Which noble gas has atomic number 54?|Xenon|Krypton|Argon|Radon",
    "Which author wrote The Master and Margarita?|Mikhail Bulgakov|Boris Pasternak|Nikolai Gogol|Leo Tolstoy",
  ],
};

// Explicitly move the V3.2 questions identified in feedback to their requested
// levels. These move rather than duplicate, so the level labels stay credible.
export const TRIVIA_MOVES = {
  "Which ocean is west of Europe?": "amateur",
  "What is the chemical symbol for gold?": "intermediate",
  "How many sides does an octagon have?": "intermediate",
  "Which gas do plants absorb during photosynthesis?": "intermediate",
  "What is the square root of 625?": "advanced",
  "What is the chemical symbol for potassium?": "skilled",
  "Which planet is known for rotating on its side?": "skilled",
  "What is the chemical symbol for silver?": "skilled",
  "How many degrees make the interior angles of a triangle?": "competent",
  "What is the capital of Austria?": "competent",
  "Who wrote Animal Farm?": "competent",
  "What is the derivative of x²?": "competent",
  "Which part of a cell contains most DNA in humans?": "competent",
  "Who wrote The Metamorphosis?": "skilled",
  "Which river runs through Budapest?": "skilled",
  "Which element has atomic number 8?": "advanced",
  "Which element's symbol is W?": "advanced",
  "What is 19 squared?": "advanced",
  "What is the SI unit of electrical resistance?": "advanced",
  "What is 7 factorial?": "advanced",
  "Which scientist developed the three laws of planetary motion?": "skilled",
  "Who formulated the uncertainty principle?": "advanced",
  "Which atmospheric layer contains most weather?": "advanced",
  "What is the square root of 2025?": "advanced",
  "Who wrote One Hundred Years of Solitude?": "advanced",
  "Which SI unit measures magnetic flux?": "advanced",
  "What is the next prime after 89?": "advanced",
  "What is 17 cubed?": "advanced",
  "What is the capital of Mongolia?": "advanced",
  "Which country has the city of Samarkand?": "grandmaster",
  "Which moon is the largest in the Solar System?": "grandmaster",
  "Which element has atomic number 72?": "grandmaster",
  "Who proved the incompleteness theorems?": "grandmaster",
  "What is the capital of Eritrea?": "grandmaster",
  "Evaluate 2^12 - 3^6.": "grandmaster",
  "Which moon has methane lakes?": "grandmaster",
  "What is the capital of Bhutan?": "grandmaster",
};

const mathematicalChoices = (correct, offset) => {
  const variants = [correct, correct + offset, correct - offset, correct + 2 * offset];
  return variants.map(String);
};

function arithmetic(level, i) {
  // Each bank gets 13 fresh, reproducible age-calibrated calculation questions.
  const seed = i + 1;
  let question; let answer;
  if (level === "beginner") {
    const a = 2 + i % 5, b = 1 + (i * 2) % 4;
    if (i % 3 === 0) { question = `What is ${a} + ${b}?`; answer = a + b; }
    else if (i % 3 === 1) { question = `What is ${a + b} - ${b}?`; answer = a; }
    else { question = `You have ${a} crayons and get ${b} more. How many now?`; answer = a + b; }
  } else if (level === "novice") {
    const a = 12 + i * 3, b = 4 + i % 7;
    if (i % 3 === 0) { question = `What is ${a} + ${b}?`; answer = a + b; }
    else if (i % 3 === 1) { question = `What is ${a} - ${b}?`; answer = a - b; }
    else { question = `What is ${2 + i % 7} times ${3 + i % 6}?`; answer = (2 + i % 7) * (3 + i % 6); }
  } else if (level === "amateur") {
    const a = 7 + i, b = 9 + i % 8;
    if (i % 3 === 0) { question = `What is ${a} × ${b}?`; answer = a * b; }
    else if (i % 3 === 1) { question = `What is ${20 + 5 * i}% of 200?`; answer = 40 + 10 * i; }
    else { question = `What is ${a * b} divided by ${b}?`; answer = a; }
  } else if (level === "intermediate") {
    const a = 11 + i, b = 14 + i;
    if (i % 3 === 0) { question = `What is ${a} squared?`; answer = a * a; }
    else if (i % 3 === 1) { question = `If 3x + ${b} = ${3 * a + b}, what is x?`; answer = a; }
    else { question = `What is ${a} × ${b}?`; answer = a * b; }
  } else if (level === "competent") {
    const a = 17 + i, b = 16 + i;
    if (i % 3 === 0) { question = `What is ${a} squared?`; answer = a * a; }
    else if (i % 3 === 1) { question = `Solve 5x - ${b} = ${5 * a - b}. Find x.`; answer = a; }
    else { question = `What is ${a} × ${b}?`; answer = a * b; }
  } else if (level === "skilled") {
    const a = 23 + i, b = 19 + i;
    if (i % 3 === 0) { question = `What is ${a} × ${b}?`; answer = a * b; }
    else if (i % 3 === 1) { question = `What is ${a * a} minus ${b * b}?`; answer = a * a - b * b; }
    else { question = `What is ${a} cubed?`; answer = a ** 3; }
  } else if (level === "advanced") {
    const a = 31 + i, b = 17 + i;
    if (i % 3 === 0) { question = `Evaluate ${a} squared minus ${b} squared.`; answer = a * a - b * b; }
    else if (i % 3 === 1) { question = `What is ${a} cubed?`; answer = a ** 3; }
    else { question = `Evaluate ${a} × ${b} + ${seed} squared.`; answer = a * b + seed ** 2; }
  } else {
    const a = 43 + i, b = 29 + i;
    if (i % 3 === 0) { question = `Evaluate ${a} cubed minus ${b} squared.`; answer = a ** 3 - b ** 2; }
    else if (i % 3 === 1) { question = `What is ${a} × ${b} minus ${seed} cubed?`; answer = a * b - seed ** 3; }
    else { question = `What is ${a} cubed plus ${b} squared?`; answer = a ** 3 + b ** 2; }
  }
  const choices = mathematicalChoices(answer, level === "beginner" ? 1 : (i % 3) + 1);
  return { question, answer: String(answer), choices };
}

export const TRIVIA_ADDITIONS = Object.fromEntries(Object.entries(NEW_FACTS).map(([level, rows]) => [level,
  [
    ...rows.map((line) => { const [question, answer, ...wrong] = line.split("|"); return { question, answer, choices: [answer, ...wrong] }; }),
    ...Array.from({ length: 13 }, (_, i) => arithmetic(level, i)),
  ],
]));
