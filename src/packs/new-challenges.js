import { TOPIC_LEVELS, TOPIC_QUESTIONS } from './topic-trivia.js';

// Riddle cards: one clear accepted answer per riddle, separate answer key.
// Five cards per playable level; novice requires 1/2; intermediate tiers 2/3;
// advanced 3/4 and grandmaster 4/5. Do not assign this to beginners.
const RIDDLES = {
  novice: [
    ['What has four legs but cannot walk?', 'A table'],
    ['What has hands but cannot clap?', 'A clock'],
    ['What gets wetter while it dries?', 'A towel'],
    ['What has teeth but cannot bite?', 'A comb'],
    ['What has a neck but no head?', 'A bottle'],
    ['What goes up when rain comes down?', 'An umbrella'],
    ['What has pages but cannot speak?', 'A book'],
    ['What has keys but no doors?', 'A piano'],
    ['What has a face and two hands but no arms?', 'A clock'],
    ['What has a mouth but never eats and carries water?', 'A river'],
  ],
  amateur: [
    ['What can you catch but never throw?', 'A cold'],
    ['What breaks when you say its name?', 'Silence'],
    ['What has a thumb and four fingers but is not alive?', 'A glove'],
    ['What has an eye but cannot see and is used for sewing?', 'A needle'],
    ['What can fill a room but takes up no physical space?', 'Light'],
    ['What can travel around the world while staying in a corner?', 'A postage stamp'],
    ['What has many needles but never sews?', 'A pine tree'],
    ['What is full of holes yet holds water?', 'A sponge'],
    ['What goes through cities and fields but never moves?', 'A road'],
    ['What has a ring but no finger and people answer it?', 'A telephone'],
    ['What has a bed but never sleeps?', 'A river'],
    ['What comes down but never goes up in a storm?', 'Rain'],
    ['What can be opened but is not a door and contains pages?', 'A book'],
    ['What is yours but other people use it more?', 'Your name'],
    ['What grows shorter as it works to light a room?', 'A candle'],
  ],
  intermediate: [
    ['I speak without a mouth and answer when you call in a mountain. What am I?', 'An echo'],
    ['The more you take away from me, the bigger I become. What am I?', 'A hole'],
    ['What belongs to you but is usually said by other people?', 'Your name'],
    ['What has branches but no leaves, and holds your money?', 'A bank'],
    ['What can run but has no legs, and has a bank but no money?', 'A river'],
    ['What has one head, one foot and four legs?', 'A bed'],
    ['What is always in front of you but you cannot see it?', 'The future'],
    ['What comes once in a minute, twice in a moment, but never in a thousand years?', 'The letter M'],
    ['What begins with T, ends with T, and contains tea?', 'A teapot'],
    ['What can you hold in your right hand but not in your left hand?', 'Your left hand'],
    ['What gets bigger the more you remove from it?', 'A hole'],
    ['What has no life but can die when a battery is empty?', 'A phone'],
    ['What can be cracked, made, told and played?', 'A joke'],
    ['What grows even when nothing is planted, and is counted each birthday?', 'Age'],
    ['What has cities, rivers and forests, but no buildings, water or trees?', 'A map'],
  ],
  competent: [
    ['A man walks in the rain without a hat or umbrella. Not a single hair becomes wet. Why?', 'He is bald'],
    ['I have no life but grow; I need air and water kills me. What am I?', 'Fire'],
    ['What has a head and a tail but no body?', 'A coin'],
    ['The person who makes me sells me; the person who buys me does not use me. What am I?', 'A coffin'],
    ['What has four wheels and flies, but cannot take off?', 'A garbage truck'],
    ['What is so fragile that naming it destroys it?', 'Silence'],
    ['You see a boat packed with people, but there is not a single person aboard. Why?', 'All are married'],
    ['What word is pronounced the same if you remove four of its five letters?', 'Queue'],
    ['Which month has 28 days?', 'Every month'],
    ['If two is company and three is a crowd, what are four and five?', 'Nine'],
    ['What has a bottom at the top?', 'Your legs'],
    ['I am taken before you can receive me; on paper I may show your smile. What am I?', 'A photograph'],
    ['What is light as a feather, but even the strongest person cannot hold it for long?', 'Their breath'],
    ['What can be broken without being touched?', 'A promise'],
    ['What comes at the end of everything?', 'The letter G'],
  ],
  skilled: [
    ['Two fathers and two sons eat three apples, one each. How can this be?', 'Grandfather, father and son'],
    ['You are in a race and pass the person in second place. Which place are you in?', 'Second place'],
    ['A farmer has 17 sheep; all but nine run away. How many remain?', 'Nine'],
    ['Before Mount Everest was first measured, what was the highest mountain on Earth?', 'Mount Everest'],
    ['What English word has three consecutive double letters?', 'Bookkeeper'],
    ['Which weighs more, a kilogram of feathers or a kilogram of iron?', 'Neither; both weigh one kilogram'],
    ['I can be written, I can be spoken, I can be exposed, and I can be broken. What am I?', 'A secret'],
    ['What five-letter word becomes shorter when you add two letters?', 'Short'],
    ['An electric train travels north. Which way does its smoke go?', 'It makes no smoke'],
    ['How many times can you subtract ten from one hundred?', 'Once (then you subtract from ninety)'],
    ['What word begins and ends with E but contains one letter?', 'Envelope'],
    ['What is never at the beginning of a word but is always at the end of never?', 'The letter R'],
    ['I can be picked but have no fruit; people may pick me during an election. What am I?', 'A candidate'],
    ['What can you keep after giving it to someone?', 'Your word'],
    ['What number gives the same result when added to itself and multiplied by itself?', 'Two'],
  ],
  advanced: [
    ['Three people check into a room; each pays $10. The desk refunds $5, a clerk keeps $2 and returns $1 each. What mistake causes the missing-dollar paradox?', 'Adding the $2 to the $27; the $27 already includes the $2'],
    ['A clock strikes six times in five seconds. How long does it take to strike twelve times at the same rate?', '11 seconds'],
    ['What is the next number: 1, 11, 21, 1211, 111221, ...?', '312211'],
    ['You have three switches outside a room and one bulb inside. You may enter only once. How identify the right switch?', 'Turn one on then off, another on; enter: on=second, warm=first, cold=third'],
    ['A family has two children. The older is a girl. What is the probability both are girls if genders are equally likely?', 'One half (1/2)'],
    ['Two ropes each take one hour to burn irregularly. How measure exactly 45 minutes?', 'Light rope A both ends and B one end; when A ends (30 min), light B other end; B ends 15 min later'],
    ['You have an 8-liter jug full of water and empty 5- and 3-liter jugs. How make exactly 4 liters?', '8→5; 5→3; 3→8; 5→3; 8→5; 5→3 leaves 4 in 5 (or equivalent)'],
    ['What is the smallest positive number divisible by every integer 1 through 10?', '2520'],
    ['In a sequence of powers of two 2, 4, 8, 16, 32, what is the next term?', '64'],
    ['A father is 4 times his son’s age. In 20 years he will be twice his son’s age. How old is the son now?', '10'],
    ['One lily pad doubles its area each day; a pond fills on day 30. When was it half full?', 'Day 29'],
    ['What four-digit number becomes 9 times larger when its digits are reversed?', '1089 (9801 is 9 × 1089)'],
    ['A cube has all six faces painted; it is cut into 27 equal small cubes. How many have paint on exactly two faces?', '12'],
    ['What is the minimum number of people ensuring at least two share a birthday, ignoring leap days?', '366'],
    ['A number is twice the sum of its digits, and it has two digits. Give a valid example.', '18 (1+8=9; 2×9=18)'],
    ['What is the angle between clock hands at 3:30?', '75 degrees'],
    ['Five machines take five minutes to make five objects. How long for 100 machines to make 100 objects?', '5 minutes'],
    ['You toss two fair coins. What is the probability of exactly one head?', 'One half (1/2)'],
    ['A bag has 5 red and 5 blue balls. What minimum draw guarantees two of the same color?', 'Three'],
    ['How many squares of all sizes are in a 3×3 square grid?', '14'],
  ],
  grandmaster: [
    ['There are 100 lockers initially closed. On pass n you toggle every nth locker. How many stay open?', '10'],
    ['What is the next term in the Recamán sequence starting 0, 1, 3, 6, 2, 7, 13, 20, ...?', '12'],
    ['What is the minimum number of handshakes when everyone in a group of 12 shakes everyone else once?', '66'],
    ['A cube is painted on every face and cut into 64 identical cubes. How many have exactly two faces painted?', '24'],
    ['In the classic Monty Hall problem, what is the probability of winning by switching doors?', '2/3'],
    ['How many different ways can 5 distinct books be arranged on a shelf?', '120'],
    ['Which is larger: 2^10 or 10^3?', '2^10 (1024)'],
    ['Two fair dice are thrown. What is the probability their sum is 7?', '1/6'],
    ['What is the least common multiple of 12, 18 and 30?', '180'],
    ['How many diagonals does a regular decagon have?', '35'],
    ['Which positive integer has digits summing to 9 and is exactly 3 times the sum of its digits?', '27'],
    ['If a chessboard is missing two opposite corners, can it be tiled perfectly with 31 dominoes?', 'No (both removed squares share a color)'],
    ['How many different subsets does a set with six elements have?', '64'],
    ['Which four-digit number has its digits reversed when multiplied by 9?', '1089 (1089 × 9 = 9801)'],
    ['How many prime numbers are less than 20?', '8'],
    ['What is the sum of the interior angles of a regular dodecagon?', '1800 degrees'],
    ['In a 5×5 grid of unit squares, how many total squares of every size are there?', '55'],
    ['For the sequence 1, 4, 9, 16, 25, what is the 20th term?', '400'],
    ['If you choose one of three envelopes containing 1, 2 and 3 coins without seeing, what is expected number of coins?', '2'],
    ['What is the value of 0! (zero factorial)?', '1'],
    ['In base 2, what is the representation of decimal 42?', '101010'],
    ['What is the next Fibonacci number after 89?', '144'],
    ['If n(n+1)=156 for a positive integer n, what is n?', '12'],
    ['What is the smallest prime factor of 2025?', '3'],
    ['A right triangle has legs 9 and 12. What is its hypotenuse?', '15'],
  ],
};

// Curated card counts and scoring thresholds, separate from older games.
export const RIDDLE_REQUIREMENTS = {
  novice:[2,1], amateur:[3,2], intermediate:[3,2], competent:[3,2],
  skilled:[3,2], advanced:[4,3], grandmaster:[5,4],
};

const riddlePacks = {};
for (const [level, [count, need]] of Object.entries(RIDDLE_REQUIREMENTS)) {
  const pool = RIDDLES[level];
  if (pool.length < count * 5) throw new Error(`Not enough ${level} riddles`);
  riddlePacks[level] = {
    description: `Start the 150-second timer BEFORE showing the card. Answer the ${count} riddles; you need ${need} correct. Another team checks after time expires.`,
    win: `The active team scores by correctly solving at least ${need} of ${count} riddles within 150 seconds.`,
    prompts: Array.from({length:5}, (_, i) => {
      const r = pool.slice(i*count,i*count+count);
      return {
        text: r.map(([q],j)=>`${j+1}. ${q}`).join('\n'),
        answer: r.map(([,a],j)=>`${j+1}. ${a}`).join('\n'),
      };
    }),
  };
}

export const REBUS_LENGTHS = {novice:3,amateur:4,intermediate:4,competent:5,skilled:5,advanced:6,grandmaster:7};
const REBUS_WORDS = {
  novice: ['CAT','DOG','SUN','BUS','HAT','PEN','CUP','MAP'],
  amateur: ['TREE','MOON','STAR','FISH','BOOK','RAIN','LAMP','HOME'],
  intermediate: ['GAME','BIRD','BLUE','WIND','BEAR','KING','FROG','BOAT'],
  competent: ['APPLE','TRAIN','BREAD','HORSE','WATER','LIGHT','MUSIC','OCEAN'],
  skilled: ['SMILE','TABLE','CHAIR','HOUSE','RIVER','CLOUD','DANCE','PLANT'],
  advanced: ['ORANGE','PLANET','BRIDGE','FOREST','CANDLE','WINTER','SPRING','PUZZLE'],
  grandmaster: ['GIRAFFE','RAINBOW','HARMONY','CHICKEN','PENGUIN','JOURNEY','LIBRARY','PICTURE'],
};
export const REBUS_SOURCE_LEVEL = Object.fromEntries(Object.keys(REBUS_LENGTHS).map((level)=>[level,TOPIC_LEVELS[TOPIC_LEVELS.indexOf(level)-1]]));
export const REBUS_PACKS = {};

function cleanAnswer(answer) {
  return answer.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toUpperCase().replace(/[^A-Z]/g,'');
}
for (const [level, lettersNeeded] of Object.entries(REBUS_LENGTHS)) {
  const sourceLevel = REBUS_SOURCE_LEVEL[level];
  const topicNames = Object.keys(TOPIC_QUESTIONS);
  // Every clue has a SINGLE-WORD answer, so the requested character position
  // is unambiguous. Spread clues across different trivia topics.
  const topicPools = Object.fromEntries(topicNames.map((topic) => [topic,
    TOPIC_QUESTIONS[topic][sourceLevel]
      .filter((q) => /^[A-Za-zÀ-ÿ-]+$/.test(q.answer.trim()))
      .map((q) => ({ ...q, cleaned: cleanAnswer(q.answer) }))
      .filter((q) => q.cleaned.length >= 3 && q.cleaned.length <= 26),
  ]));
  const prompts = REBUS_WORDS[level].map((word, cardIndex)=>{
    const used = new Set();
    const selected = [...word].map((letter,i)=>{
      const selectedTopic = topicNames[(cardIndex + i*3) % topicNames.length];
      const candidates = topicPools[selectedTopic].filter((q)=>q.cleaned.includes(letter) && !used.has(q.text));
      // As a fallback, draw from any topic at the same LOWER trivia level.
      const matches = candidates.length ? candidates : Object.values(topicPools).flat().filter((q)=>q.cleaned.includes(letter) && !used.has(q.text));
      if (!matches.length) throw new Error(`Cannot make rebus letter ${letter}/${level}`);
      const chosen = matches[(cardIndex*17 + i*7 + TOPIC_LEVELS.indexOf(level)*5) % matches.length];
      used.add(chosen.text);
      const index = chosen.cleaned.indexOf(letter)+1;
      return { ...chosen, index, letter, sourceTopic: selectedTopic };
    });
    if (selected.length !== lettersNeeded || selected.map((x)=>x.letter).join('')!==word) throw new Error(`Bad rebus: ${word}`);
    return {
      text: `SECRET WORD: ${lettersNeeded} letters\nAnswer each trivia clue. Take the numbered LETTER of each answer, ignoring spaces and punctuation. Read the extracted letters from top to bottom.\n\n`+selected.map((q,i)=>`${i+1}. ${q.text}\n   → Take letter ${q.index} of the answer.`).join('\n\n'),
      answer: selected.map((q,i)=>`${i+1}. ${q.answer} → ${q.cleaned} → letter ${q.index} = ${q.letter}`).join('\n')+`\nSECRET WORD: ${word}`,
      sourceLevel, secretWord:word, clues:selected.map((q)=>({question:q.text,answer:q.answer,letterIndex:q.index,letter:q.letter})),
    };
  });
  REBUS_PACKS[level] = {
    description:`A ${lettersNeeded}-question rebus. Start the 150-second timer before showing BOTH sides the same clue card. Trivia question difficulty: ${sourceLevel} (one level below the active level). Extract a specified letter from each answer to form a ${lettersNeeded}-letter word. First final guess counts.`,
    win:'The first team to guess the secret word correctly wins. If a side makes a WRONG FIRST final-word guess, the opposing side wins immediately. The active team earns a point only if it wins.',
    prompts,
  };
}

export const NEW_CHALLENGE_PACKS = {
  'rebus':REBUS_PACKS,
  'riddle-round':riddlePacks,
};
