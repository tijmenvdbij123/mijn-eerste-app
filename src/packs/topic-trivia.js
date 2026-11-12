// Every topic has independent eight-level factual seed lists. A seed carries
// two genuinely different question directions with their answer keys.
// 20 seeds per level -> 40 questions -> eight distinct five-question cards.
import { TOPIC_FACTS_A } from './topic-trivia-seeds-a.js';
import { TOPIC_FACTS_B } from './topic-trivia-seeds-b.js';
import { TOPIC_FACTS_C } from './topic-trivia-seeds-c.js';
import { TOPIC_FACTS_D } from './topic-trivia-seeds-d.js';

export const TOPIC_FACTS = { ...TOPIC_FACTS_A, ...TOPIC_FACTS_B, ...TOPIC_FACTS_C, ...TOPIC_FACTS_D };
export const TOPIC_LEVELS = ['beginner', 'novice', 'amateur', 'intermediate', 'competent', 'skilled', 'advanced', 'grandmaster'];
export const TOPIC_NAMES = { history:'History', sports:'Sports & Athletics', 'movies-tv':'Movies & TV', culture:'Culture', geography:'Geography', 'science-nature':'Science & Nature', 'arts-literature':'Arts & Literature', music:'Music' };
export const TOPIC_QUESTIONS = {};
export const TOPIC_TRIVIA_PACKS = {};

for (const [topic, sections] of Object.entries(TOPIC_FACTS)) {
  // Keep the V4.0 set intact so every moved question and answer is preserved.
  const original = {};
  for (const [i, level] of TOPIC_LEVELS.entries()) {
    const seeds = i === 0 ? sections.beginner : [...sections[TOPIC_LEVELS[i - 1]].slice(-10), ...sections[level]];
    if (seeds.length !== 20) throw new Error(`Topic ${topic}/${level}: expected 20 factual seeds`);
    const forty = [...seeds.map(s => ({text:s[0], answer:s[1]})), ...seeds.map(s => ({text:s[2], answer:s[3]}))];
    if (new Set(forty.map(q => q.text.toLowerCase())).size !== 40) throw new Error(`Topic ${topic}/${level}: duplicate question`);
    for (const q of forty) if (!q.text || !q.answer || /\b(TODO|placeholder|unknown)\b/i.test(q.answer)) throw new Error(`Invalid question ${topic}/${level}`);
    original[level] = forty;
  }

  // Beginners cannot receive Topic Trivia in either format. Retain this
  // internal pool for Rebus clue generation (which uses the level below).
  const questions = { beginner: original.beginner };
  for (let i = 1; i < TOPIC_LEVELS.length - 1; i++) {
    questions[TOPIC_LEVELS[i]] = original[TOPIC_LEVELS[i - 1]];
  }
  questions.grandmaster = [...original.advanced, ...original.grandmaster];

  const packs = {};
  for (const [level, pool] of Object.entries(questions)) {
    if (pool.length % 5) throw new Error(`Topic ${topic}/${level}: not divisible into cards`);
    packs[level] = { prompts: Array.from({length:pool.length/5}, (_, card) => {
      const five = pool.slice(card * 5, card * 5 + 5);
      return {
        text: `TOPIC: ${TOPIC_NAMES[topic]}\n` + five.map((q, n) => `${n+1}. ${q.text}`).join('\n'),
        answer: five.map((q, n) => `${n+1}. ${q.answer}`).join('\n'),
      };
    }) };
  }
  TOPIC_QUESTIONS[topic] = questions;
  TOPIC_TRIVIA_PACKS[`topic-trivia-${topic}`] = packs;
}
