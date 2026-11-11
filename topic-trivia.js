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
  const questions = {};
  const packs = {};
  for (const [i, level] of TOPIC_LEVELS.entries()) {
    // At each level, use ten well-curated facts from the level below plus
    // ten new facts. Beginner uses 20 beginner facts only.
    const seeds = i === 0 ? sections.beginner : [...sections[TOPIC_LEVELS[i-1]].slice(-10), ...sections[level]];
    if (seeds.length !== 20) throw new Error(`Topic ${topic}/${level}: ${seeds.length} factual seeds instead of 20`);
    const forty = [ ...seeds.map((s) => ({text:s[0], answer:s[1]})),
      ...seeds.map((s) => ({text:s[2], answer:s[3]})) ];
    if (forty.length !== 40 || new Set(forty.map((q) => q.text.toLowerCase())).size !== 40) throw new Error(`Topic ${topic}/${level} has duplicate questions`);
    for (const q of forty) if (!q.text || !q.answer || /\b(TODO|placeholder|unknown)\b/i.test(q.answer)) throw new Error(`Empty or incomplete ${topic}/${level} question`);
    questions[level] = forty;
    packs[level] = { prompts: Array.from({length:8}, (_, card) => ({
      text: `TOPIC: ${TOPIC_NAMES[topic]}\n` + forty.slice(card*5,card*5+5).map((q,n) => `${n+1}. ${q.text}`).join('\n'),
      answer: forty.slice(card*5,card*5+5).map((q,n) => `${n+1}. ${q.answer}`).join('\n'),
    })) };
  }
  TOPIC_QUESTIONS[topic] = questions;
  TOPIC_TRIVIA_PACKS[`topic-trivia-${topic}`] = packs;
}
