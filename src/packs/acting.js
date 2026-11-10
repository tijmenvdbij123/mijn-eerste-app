const LEVELS = ["beginner", "novice", "amateur", "intermediate", "competent", "skilled", "advanced", "grandmaster"];

const ACTIONS = {
  beginner: "waving|sleeping|eating|drinking|jumping|walking|clapping|sitting|laughing|crying|running|brushing teeth|washing hands|throwing a ball|opening a door|reading a book|hugging a teddy|kicking a ball|dancing|shivering".split("|"),
  novice: "flying a kite|riding a bike|building a sandcastle|blowing bubbles|climbing a ladder|tying shoes|feeding a pet|watering flowers|playing piano|catching a ball|sweeping a floor|making a sandwich|looking through binoculars|rowing a boat|taking a photo|walking a dog|planting a seed|skipping rope|baking cookies|packing a bag".split("|"),
  amateur: "fishing|riding a horse|playing tennis|baking a cake|painting a wall|opening a gift|playing drums|vacuuming|surfing|roller skating|making pizza|gardening|playing volleyball|swimming underwater|building a snowman|reading a map|washing a car|camping|juggling|acting as a pirate".split("|"),
  intermediate: "steering a sailboat|practising karate|changing a tire|performing a magic trick|piloting an airplane|rescuing a kitten|searching for treasure|winning a race|walking on a tightrope|training a dog|conducting an orchestra|playing an accordion|scuba diving|repairing a bicycle|learning to skateboard|opening an umbrella in wind|shoveling snow|playing chess|building a tent|skating on thin ice".split("|"),
  competent: "giving a weather forecast|battling strong wind|directing traffic|building a robot|filming a documentary|performing surgery|exploring a cave|discovering a hidden passage|doing scientific experiments|conducting a choir|running a marathon|giving a job interview|fixing a leaking pipe|playing an invisible violin|launching a rocket|escaping a maze|balancing on a beam|stargazing|examining fossils|making pottery".split("|"),
  skilled: "negotiating a salary|directing a movie scene|assembling flat-pack furniture|navigating with a compass|conducting a chemistry experiment|delivering an award speech|coaching a football team|interpreting sign language|piloting a hot-air balloon|sailing through a storm|restoring an old painting|performing a courtroom argument|running a restaurant|repairing a telescope|inventing a new dance|escaping an avalanche|photographing wildlife|mediating an argument|playing a virtuoso solo|training for a triathlon".split("|"),
  advanced: "simulating zero gravity|defusing an imaginary bomb|orchestrating a heist|performing a scientific breakthrough|navigating a submarine|conducting a symphony in a thunderstorm|solving a Rubik's cube blindfolded|walking through a mirrored maze|attempting an impossible magic illusion|restoring an ancient sculpture|exploring a volcanic crater|conducting a satellite launch|acting as a malfunctioning robot|translating a heated debate|testing a parachute|learning to operate a crane|crossing a fragile rope bridge|interviewing an extraterrestrial|assembling a complicated machine|negotiating a peace treaty".split("|"),
  grandmaster: "demonstrating time travel|arguing with an invisible philosopher|conducting an orchestra in zero gravity|reconstructing an archaeological site|trying to communicate with a distant civilization|repairing an underwater space station|performing surgery on a robot|directing an opera without sound|escaping a paradoxical labyrinth|interpreting a cryptic ancient text|controlling a runaway experiment|recreating an eclipse|instructing a team of astronauts|performing an elaborate courtroom cross-examination|navigating a submarine through ice|discovering a new mathematical theorem|balancing conflicting negotiations|testing a theoretical invention|demonstrating optical illusion|conducting a silent auction".split("|"),
};

function actionCards(level, count, heading) {
  const actions = ACTIONS[level];
  return Array.from({ length: 5 }, (_, pack) => {
    const selected = Array.from({ length: count }, (_, i) => actions[(pack * 4 + i) % actions.length]);
    return { text: `${heading}\n${selected.map((word) => word[0].toUpperCase() + word.slice(1)).join(" • ")}` };
  });
}

const REACTION = {
  beginner: { count: 5, spacing: 10, max: 10, switchAt: 0, rules: "Numbers HIGHER THAN 5: JUMP. Numbers 1–5: TOUCH THE GROUND." },
  novice: { count: 5, spacing: 10, max: 10, switchAt: 0, rules: "ODD: CLAP. EVEN: TOUCH YOUR SHOULDER." },
  amateur: { count: 5, spacing: 5, max: 20, switchAt: 0, rules: "ODD: CLAP. EVEN: TOUCH YOUR SHOULDER." },
  intermediate: { count: 6, spacing: 5, max: 20, switchAt: 3, rules: "FIRST 3 NUMBERS: ODD = CLAP, EVEN = TOUCH SHOULDER. AFTER THE THIRD: REVERSE (ODD = TOUCH SHOULDER, EVEN = CLAP)." },
  competent: { count: 10, spacing: 5, max: 100, switchAt: 5, rules: "FIRST 5: ODD = CLAP, EVEN = TOUCH SHOULDER. AFTER FIFTH: REVERSE THE RULES." },
  skilled: { count: 10, spacing: 3, max: 100, switchAt: 5, rules: "FIRST 5: ODD = CLAP, EVEN = TOUCH SHOULDER. AFTER FIFTH: REVERSE THE RULES. REACT WITHIN THREE SECONDS." },
  advanced: { count: 10, spacing: 3, max: 100, switchAt: 5, tens: true, rules: "ALL NUMBERS ARE MULTIPLES OF TEN. For the first 5 numbers, JUMP; after the fifth number, TOUCH THE GROUND." },
  grandmaster: { count: 20, spacing: 3, max: 200, switchAt: 10, tens: true, rules: "ALL NUMBERS ARE MULTIPLES OF TEN. First 10: JUMP for each number. AFTER the tenth: TOUCH THE GROUND for each number." },
};

function reactionCards(level) {
  const rule = REACTION[level];
  return Array.from({ length: 5 }, (_, pack) => {
    // Deterministic permutations deliberately avoid repeated numbers in a card
    // when enough numbers are available.
    const numbers = Array.from({ length: rule.max }, (_, i) => i + 1);
    const generated = Array.from({ length: rule.count }, (_, i) => {
      const number = rule.tens ? ((i * 7 + pack * 3) % (rule.max / 10) + 1) * 10 : numbers[(i * 7 + pack * 3) % numbers.length];
      return number;
    });
    const text = `CALLER: READ ONE NUMBER EVERY ${rule.spacing} SECONDS.\n${rule.rules}\n\n${generated.map((number, i) => `${i + 1}. ${number}${rule.switchAt && i + 1 === rule.switchAt ? "  ← SWITCH NOW" : ""}`).join("\n")}`;
    return { text };
  });
}

export const ACTING_PACKS = {
  "silent-charades": Object.fromEntries(LEVELS.map((level, i) => [level, {
    description: "Start the 150-second timer BEFORE showing the secret card. One active teammate acts the listed actions silently; their teammates guess. The actor cannot speak or spell words.",
    win: `Guess at least ${i <= 2 ? 4 : 5} of the five ${level} actions before 150 seconds runs out.`,
    prompts: actionCards(level, 5, "SECRET ACTIONS — FIVE"),
  }])),
  "mime-relay": Object.fromEntries(LEVELS.map((level, i) => [level, {
    description: "Active team only. Choose an actor and a guesser; a third teammate may help guess. Start the 150-second timer before revealing ten secret clues. The actor silently mimes them.",
    win: `Guess at least ${i < 4 ? 8 : i < 6 ? 9 : 10} of the ten ${level} clues in 150 seconds.`,
    prompts: actionCards(level, 10, "SECRET MIME CLUES — TEN"),
  }])),
  "reaction-rules": Object.fromEntries(LEVELS.map((level) => [level, {
    description: `No main clock. The selected player from the other team calls ${REACTION[level].count} numbers aloud, ${REACTION[level].spacing} seconds apart. The active player immediately follows each action. ${REACTION[level].rules}`,
    win: "The active player scores ONLY by making ZERO mistakes on the entire list. The defending caller judges each reaction.",
    prompts: reactionCards(level),
  }])),
};
