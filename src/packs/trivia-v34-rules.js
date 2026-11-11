// Version 3.4: question-by-question editorial corrections from playtesting.
// A single canonical bank feeds Five Quick Facts, Quickfire Facts and Trivia Board.
export const MOVES_V34 = {
  "Which planet is called the Red Planet?": "amateur",
  "Which direction does the sun usually rise from?": "amateur",
  "Which shape has four equal sides and four square corners?": "amateur",
  "What is 6 × 3?": "amateur",
  "What is 12 ÷ 3?": "amateur",
  "Which continent is Kenya in?": "amateur",
  "What is the longest side of a right triangle called?": "intermediate",
  "What language is mainly spoken in Brazil?": "skilled",
  "Which planet is closest to the Sun?": "intermediate",
  "Which scientist is associated with the falling-apple gravity story?": "intermediate",
  "What do we call animals that eat only plants?": "intermediate",
  "What is 25% of 200?": "intermediate",
  "What is 99 divided by 11?": "intermediate",
  "What is 40% of 200?": "intermediate",
  "What is 15% of 200?": "intermediate",
  "What is 3/4 as a percentage?": "intermediate",
  "What is 144 ÷ 12?": "intermediate",
  "What is the capital of Canada?": "competent",
  "Which organ produces insulin?": "competent",
  "Which metal is liquid at ordinary room temperature?": "skilled",
  "What is the name for a word with the same meaning as another?": "competent",
  "What is the process of water changing from liquid to gas called?": "competent",
  "What is 11 squared?": "competent",
  "What is 17 × 13?": "competent",
  "What is 35% of 240?": "competent",
  "Which element has the chemical symbol Fe?": "skilled",
  "What is the common name for NaCl?": "skilled",
  "Which part of a flower usually develops into fruit?": "skilled",
  "Which planet rotates almost on its side?": "advanced",
  "Which planet is known for rotating on its side?": "advanced",
  "Which scientist formulated the three laws of planetary motion?": "advanced",
  "Which scientist developed the three laws of planetary motion?": "advanced",
  "What is 25 cubed?": "advanced",
};

export const MULTIPLE_CHOICE_V34 = new Set([
  "What is the capital of the United Kingdom?",
  "Which planet is called the Red Planet?",
  "What is the largest land animal alive today?",
  "How many hours are in one day?",
  "What does a thermometer measure?",
  "Which continent is Kenya in?",
  "What is the longest side of a right triangle called?",
  "Which planet is closest to the Sun?",
  "Which scientist is associated with the falling-apple gravity story?",
  "What do we call animals that eat only plants?",
  "What is the capital of Canada?",
  "Which organ produces insulin?",
  "Which metal is liquid at ordinary room temperature?",
  "What is the process of water changing from liquid to gas called?",
  "Which part of a human cell holds most of its DNA?",
  "Which part of a cell contains most DNA in humans?",
  "What is the chemical symbol for sodium?",
  "Which element has the chemical symbol Fe?",
  "What is the common name for NaCl?",
  "Which planet rotates almost on its side?",
  "Which planet is known for rotating on its side?",
]);

const LEVELS = ["beginner", "novice", "amateur", "intermediate", "competent", "skilled", "advanced", "grandmaster"];
const mathChoices = (n, step = 1) => [n, n + step, n - step, n + step * 2].map(String);

// Never fill adult decks with three-term first-school arithmetic. Each tier
// has distinct reproducible maths calibrated to its age-specific instructions.
export function gradeMath(level, i) {
  const j = i + 1;
  let q, a;
  if (level === "beginner") {
    const x = 2 + i % 8, y = 1 + (i * 3) % 5;
    q = i % 2 ? `What is ${x + y} - ${y}?` : `What is ${x} + ${y}?`;
    a = i % 2 ? x : x + y;
  } else if (level === "novice") {
    const x = 16 + i * 2, y = 3 + i % 9;
    q = i % 2 ? `Calculate ${x} - ${y}.` : `Calculate ${x} + ${y}.`;
    a = i % 2 ? x - y : x + y;
  } else if (level === "amateur") {
    const x = 3 + i % 10, y = 2 + (i * 3) % 9;
    q = i % 2 ? `Calculate ${x * y} ÷ ${y}.` : `Calculate ${x} × ${y}.`;
    a = i % 2 ? x : x * y;
  } else if (level === "intermediate") {
    const x = 5 + i % 9, y = 3 + i % 8, z = 2 + i % 5;
    if (i % 3 === 0) { q = `Calculate ${x} × ${y} - ${z}.`; a = x * y - z; }
    else if (i % 3 === 1) { q = `Calculate ${x * y} ÷ ${y} + ${z}.`; a = x + z; }
    else { const p = 10 + 10 * (Math.floor(i / 3) % 2), n = 100 + i * 20; q = `What is ${p}% of ${n}?`; a = p * n / 100; }
  } else if (level === "competent") {
    const x = 11 + i, y = 6 + i % 13, z = 11 + i % 18;
    if (i % 4 === 0) { q = `What is ${x} squared?`; a = x ** 2; }
    else if (i % 4 === 1) { q = `Calculate ${x} × ${y} - ${z}.`; a = x * y - z; }
    else if (i % 4 === 2) { const n = 1010 + i * 70; q = `What is 10% of ${n}?`; a = n / 10; }
    else { q = `Calculate ${x * y} ÷ ${y} + ${z}.`; a = x + z; }
  } else if (level === "skilled") {
    const x = 19 + i, y = 13 + i % 9;
    if (i % 3 === 0) { q = `Calculate ${x} × ${y} - ${y * 3}.`; a = x * y - y * 3; }
    else if (i % 3 === 1) { q = `Calculate ${x} squared minus ${y} squared.`; a = x*x-y*y; }
    else { q = `Evaluate (${x} + ${y}) × (${x} - ${y}).`; a = (x+y)*(x-y); }
  } else if (level === "advanced") {
    const x = 27 + i, y = 14 + i % 11;
    if (i % 3 === 0) { q = `Evaluate ${x} cubed minus ${y} squared.`; a = x**3-y*y; }
    else if (i % 3 === 1) { q = `Evaluate ${x} squared plus ${y} cubed.`; a = x*x+y**3; }
    else { q = `Evaluate (${x} + ${y})² - (${x} - ${y})².`; a = 4*x*y; }
  } else {
    const x = 41 + i, y = 23 + i % 17;
    if (i % 3 === 0) { q = `Evaluate ${x} cubed minus ${y} squared.`; a = x**3-y*y; }
    else if (i % 3 === 1) { q = `Evaluate ${x} squared plus ${y} cubed.`; a = x*x+y**3; }
    else { q = `Calculate ${x}³ - ${y}³ + ${j}².`; a = x**3-y**3+j*j; }
  }
  return { question: q, answer: String(a), choices: mathChoices(a, level === "beginner" ? 1 : 2 + i % 6) };
}

const elementarySum = /^Solve \d+ \+ \d+ - \d+\.$/;
const isSquared = (q) => /\bsquared\b|\bsquare root\b|²/.test(q.toLowerCase());
const isTooHardForNovice = (q) => /(?:×|÷|\b(times|divided|squared|cubed|factorial|power of|percentage|percent|evaluate|solve \dx)\b|\d+%|\d+\/\d+|\d+\s*\*)/i.test(q);
const isTooHardForAmateur = (q) => /(?:\d+%|\d+\/\d+|\b(squared|cubed|factorial|percent|percentage|power of|derivative)\b|\^|²|³)/i.test(q);

export function calibrateTrivia(bank) {
  const relocated = Object.fromEntries(LEVELS.map((l) => [l, []]));
  for (const source of LEVELS) for (const old of bank[source]) {
    const q = old.question;
    const destination = MOVES_V34[q] || (source === "intermediate" && isSquared(q) ? "competent"
      : source === "skilled" && /^What is \d+ cubed\?$/.test(q) ? "advanced" : source);
    if (source === "novice" && isTooHardForNovice(q) && !MOVES_V34[q]) continue;
    if (source === "amateur" && isTooHardForAmateur(q) && !MOVES_V34[q]) continue;
    if (source === "amateur") {
      const mult = /^What is (\d+) × (\d+)\?/.exec(q);
      const div = /^What is (\d+) divided by (\d+)\?/.exec(q);
      if (mult && (Number(mult[1]) > 12 || Number(mult[2]) > 12)) continue;
      if (div && (Number(div[1]) > 100 || Number(div[2]) > 12)) continue;
    }
    if (source === "intermediate" && /^If 3x |^What is 2 to the power/.test(q)) continue;
    if (source === "intermediate" && !MOVES_V34[q]) {
      const mult = /^What is (\d+) × (\d+)\?/.exec(q);
      if (mult && (Number(mult[1]) > 12 || Number(mult[2]) > 12)) continue;
    }
    if (["amateur", "intermediate", "competent", "skilled", "advanced", "grandmaster"].includes(source) && elementarySum.test(q)) continue;
    relocated[destination].push({ ...old, forceMultipleChoice: MULTIPLE_CHOICE_V34.has(q) });
  }
  // One unique question occupies one level. Preserve explicitly requested
  // relocations first, and keep each tier the same 42-question deck size.
  const globalSeen = new Set();
  for (const level of LEVELS) {
    relocated[level].sort((a,b) => Number(Boolean(MOVES_V34[b.question])) - Number(Boolean(MOVES_V34[a.question])));
    relocated[level] = relocated[level].filter((fact) => {
      const q = fact.question.trim().toLowerCase();
      if (globalSeen.has(q)) return false;
      globalSeen.add(q);
      return true;
    }).slice(0, 42);
    for (let n = 0; relocated[level].length < 42 && n < 1000; n++) {
      const extra = gradeMath(level, n);
      const q = extra.question.toLowerCase();
      if (globalSeen.has(q)) continue;
      relocated[level].push(extra);
      globalSeen.add(q);
    }
    if (relocated[level].length !== 42) throw new Error(`Missing age-appropriate trivia questions for ${level}`);
  }
  return relocated;
}
