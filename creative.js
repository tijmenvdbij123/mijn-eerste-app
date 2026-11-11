const LEVELS = ["beginner", "novice", "amateur", "intermediate", "competent", "skilled", "advanced", "grandmaster"];

const THEMES = {
  beginner: ["A puppy finds a ball.", "A bunny loses its hat.", "A cat visits a garden.", "A bird looks for a nest.", "A bear goes on a picnic."],
  novice: ["A kitten finds a door in a tree.", "A friend brings a surprise cake.", "A dog gets lost in a park.", "A toy robot says hello.", "A snowman wants to go shopping."],
  amateur: ["Two friends discover a tunnel under their school.", "A boat appears on a football field.", "A map leads to a secret room.", "A strange egg appears in the garden.", "A bicycle suddenly starts talking."],
  intermediate: ["A museum exhibit comes to life.", "A forecast predicts upside-down rain.", "A class must solve a mystery before sunset.", "A famous painting disappears.", "A scientist invents a voice-swapping machine."],
  competent: ["The town's clocks stop at one mysterious minute.", "A railway station broadcasts coded messages.", "A journalist discovers a city beneath a river.", "A robotics competition goes wrong.", "A future version of you knocks on your door."],
  skilled: ["An astronomer receives a reply to a centuries-old signal.", "A tiny island declares independence during a storm.", "An AI accidentally becomes the city's mayor.", "A historian finds two incompatible versions of an event.", "A research team discovers a city that moves every night."],
  advanced: ["A failed experiment makes effects happen before causes.", "Everyone in town recalls a different version of yesterday.", "Archaeologists uncover a treaty signed in the distant future.", "A scientist negotiates with their alternate timeline.", "World maps disagree on the location of an entire country."],
  grandmaster: ["A historian proves the future alters evidence in the past.", "An experiment reveals a civilization inside a mathematical proof.", "Two universes submit incompatible claims to one museum.", "A court debates an invention discovered before its inventor was born.", "An ambassador negotiates between civilizations with different time flows."],
};

const ALLITERATION = {
  beginner: "B S M P T", novice: "C D F L R", amateur: "F R L W C", intermediate: "R C P N F",
  competent: "S P T D M", skilled: "M C L R P", advanced: "Q X Z V J", grandmaster: "Y Q X Z V",
};

// Scenarios are intentionally imaginary to avoid accidental real-world news.
const SITUATIONS = {
  goofy: {
    beginner: "A cat wears a hat|A puppy wins a ribbon|A cake is too big|A duck rides a bike|A teddy bear has a party|A clown loses a shoe|A frog becomes a chef|A balloon gets stuck|A dog learns to dance|A cow visits school",
    novice: "A dog becomes mayor|It rains spaghetti|A robot joins school|A bicycle learns to fly|A cat opens a restaurant|A penguin takes the bus|A teacher turns into a parrot|The moon looks purple|A potato wins a race|A pizza disappears",
    amateur: "Penguins take over the airport|An invisible artist wins a prize|All clocks run backward|The library bans books|A hamster starts a news channel|The principal is a robot|A town votes for free ice cream|A parrot steals the announcements|A bike sets a speed record|An elephant auditions for a film",
    intermediate: "A scientist invents edible clouds|The mayor announces a national nap day|A mall becomes a jungle|A robot refuses to do homework|The bus develops stage fright|A goose coaches a football team|A chef discovers an invisible ingredient|Traffic lights play music|A museum displays a living dinosaur|It rains sandwiches",
    competent: "A billionaire buys the moon's naming rights|A museum auctions a time machine|A city elects a hologram|A stock exchange trades jokes|A startup bottles thunderstorms|Scientists discover a second Wednesday|An airline flies to yesterday|A book fines its own library|All meetings become optional|A statue takes the city to court",
    skilled: "Researchers patent a new day of the week|A cat becomes chief economist|A university opens imaginary science|Robots learn to complain about work|A city replaces voting with karaoke|An artist sells an invisible skyscraper|The moon files a noise complaint|An airline sells zero-destination flights|A philosopher opens a burger shop|A bank pays interest in compliments",
    advanced: "Scientists invent a machine that edits conversations|A central bank adopts laughter as currency|Historians discover medieval social media|Diplomats negotiate with pigeons|A quantum computer defeats itself at chess|An artist sells a signed blank contract|An astronaut returns with a parking ticket|Parliament argues whether yesterday existed|A philosopher auctions proof of free will|The clocks sue for overtime pay",
    grandmaster: "A device measures sarcasm in photons|Universities strike against impossible homework|Parallel timelines share one parking permit|A supercomputer demands diplomatic immunity|Archaeologists unearth an ancient group chat|A lab violates conservation of gossip|Uncertainty becomes a taxable asset|A time traveler sues for future delays|An interplanetary treaty bans passive-aggressive signals|Black holes begin collecting customer reviews",
  },
  normal: {
    beginner: "A school opens a playground|A puppy finds a home|A family grows a garden|A child wins a race|A library gets new books|A park plants trees|A zoo welcomes a baby animal|A bakery makes a big cake|A bus arrives early|A soccer team wins a trophy",
    novice: "A school opens a library|A city builds a bike path|A student wins a science fair|A new sports club opens|Volunteers clean the beach|A family adopts a dog|A town celebrates its anniversary|A football team wins a final|A teacher receives an award|A local garden grows vegetables",
    amateur: "A city opens a community center|A team wins a tournament|A school receives new computers|A library hosts a festival|A charity raises funds|A youth orchestra plays outdoors|A district starts recycling|A station gets renovated|A student finds a historic artifact|A new bridge opens",
    intermediate: "A university offers new scholarships|A city launches a transport program|A science museum opens an exhibition|An entrepreneur starts a cooperative|A park protects local wildlife|A council approves a cycling plan|A sports club expands training|A hospital opens a new wing|Scientists receive an award|A school teaches media literacy",
    competent: "A city revises its housing plan|A university begins climate research|A company trials a four-day workweek|A museum receives a donation|A government launches an education initiative|A court publishes a ruling|A rail line reduces travel time|A hospital funds research|A startup develops renewable energy|A council debates the budget",
    skilled: "Parliament proposes transport funding reform|Researchers study urban heat islands|A company pilots workplace bargaining|A commission reviews election rules|A university begins international robotics work|A coastal city unveils flood defenses|A government reviews digital identity|A museum returns a historic artifact|Scientists describe an ocean pattern|A regulator reviews energy incentives",
    advanced: "A parliamentary inquiry questions a major reform|Economists disagree on rising productivity|Scientists dispute a climate intervention|A constitutional court weighs privacy rights|A summit debates emissions accounting|A coalition splits over infrastructure funding|Universities propose controversial data sharing|A discovery creates research-ethics questions|An audit finds unexpected modernization costs|A city revises transport estimates",
    grandmaster: "Emergency powers face a constitutional challenge|Central bankers face conflicting inflation signals|A major study is retracted after failed replication|Diplomats negotiate disputed water resources|Researchers debate selection bias in a model|A committee investigates regulatory harmonization|A coastal authority publishes probabilistic risk|An international court considers orbital jurisdiction|A university debates algorithmic governance|Economists challenge theories of productivity",
  },
};

function headlineCards(level, style) {
  const firstThree = LEVELS.indexOf(level) <= 2;
  const count = firstThree ? 4 : 6;
  const situations = SITUATIONS[style][level].split("|");
  return Array.from({ length: 5 }, (_, pack) => ({
    text: `${count} ${style.toUpperCase()} SITUATIONS — maximum 10 words per headline\n${Array.from({ length: count }, (_, i) => `${i + 1}. ${situations[(pack * 2 + i) % situations.length]}`).join("\n")}`,
  }));
}

const SHIFTED = { novice: "beginner", amateur: "novice", intermediate: "amateur", competent: "intermediate", skilled: "competent", advanced: "skilled", grandmaster: "advanced" };
const ALLITERATION_EASY = {
  novice: "B S M P T", amateur: "C B L R F", intermediate: "B S M T D", competent: "C D F L R",
  skilled: "S P T D M", advanced: "M C L R P", grandmaster: "F R L W C",
};
const STORY_TOP_THEMES = [
  "A class discovers a mystery in its school.",
  "A city loses its electricity during a celebration.",
  "A group of hikers finds a map in a cave.",
  "A museum prepares a surprising exhibition.",
  "A detective searches for a missing painting.",
];
const storyLimit = { novice: "D", amateur: "D", intermediate: "F", competent: "F", skilled: "J", advanced: "T", grandmaster: "Z" };
const storyCount = { novice: 4, amateur: 4, intermediate: 6, competent: 6, skilled: 10, advanced: 20, grandmaster: 26 };
function storyThemes(level) {
  if (level === "beginner") return [];
  if (["skilled", "advanced", "grandmaster"].includes(level)) return [...THEMES.intermediate, ...STORY_TOP_THEMES];
  return THEMES[SHIFTED[level]];
}

function shiftedHeadlines(level, style) {
  if (level === "beginner") return [];
  const source = SHIFTED[level];
  const situations = (level === "grandmaster" ? `${SITUATIONS[style].advanced}|${SITUATIONS[style].grandmaster}` : SITUATIONS[style][source]).split("|");
  const count = LEVELS.indexOf(level) <= 2 ? 4 : 6;
  return Array.from({ length: 5 }, (_, pack) => ({
    text: `${count} ${style.toUpperCase()} SITUATIONS — maximum 10 words per headline\n${Array.from({ length: count }, (_, i) => `${i + 1}. ${situations[(pack * 2 + i) % situations.length]}`).join("\n")}`,
  }));
}

export const CREATIVE_PACKS = {
  "alphabet-story": Object.fromEntries(LEVELS.map((level, i) => [level, {
    prompts: storyThemes(level).map((theme) => ({ text: `STORY THEME: ${theme}\nMake one connected story, beginning with letters A–${storyLimit[level] || "D"}.` })),
    description: `Start the 150-second timer BEFORE showing the story theme. Tell one connected story together. Begin consecutive sentences with letters A through ${storyLimit[level] || "D"}.`,
    win: `Complete all ${storyCount[level] || 4} connected sentences, with the right starting letters, before 150 seconds run out.`,
  }])),
  "alliteration-duel": Object.fromEntries(LEVELS.map((level, i) => [level, {
    prompts: (ALLITERATION_EASY[level] || "").split(" ").filter(Boolean).map((letter) => ({ text: `YOUR LETTER: ${letter}\nWrite ${i <= 3 ? "TWO" : i <= 6 ? "THREE" : "FOUR"}-word phrases; every word starts with ${letter}.` })),
    description: `Start the 150-second timer BEFORE showing the letter. Both selected players write distinct, sensible ${i <= 3 ? "two" : i <= 6 ? "three" : "four"}-word phrases beginning with that letter.`,
    win: `The active player must write more valid ${i <= 3 ? "two" : i <= 6 ? "three" : "four"}-word phrases than the defender.`,
  }])),
  "headline-teams": Object.fromEntries(LEVELS.map((level, i) => [level, {
    stylePrompts: { goofy: shiftedHeadlines(level, "goofy"), normal: shiftedHeadlines(level, "normal") },
    description: `Start the 150-second timer BEFORE showing the ${i <= 2 ? 4 : 6} situations. Each team writes a humorous headline of no more than TEN words for EACH situation. Choose Goofy or Normal themes.`,
    win: `Judge the ${i <= 2 ? 4 : 6} situations by consensus or a neutral third team. The active team scores only if it wins MORE situations; a tie blocks the point.`,
  }])),
  "count-to-thirty": Object.fromEntries(LEVELS.map((level, i) => [level, {
    description: `No main clock or separate card. Start at 1; players alternate saying one, two or three consecutive numbers. Whoever says ${i <= 2 ? 20 : 30} loses.`,
    win: `The active player scores only if the defender is forced to say ${i <= 2 ? 20 : 30}.`,
  }])),
};
