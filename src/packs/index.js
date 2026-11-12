import { KNOWLEDGE_PACKS } from "./knowledge.js";
import { WORD_MEMORY_PACKS } from "./words-memory.js";
import { ACTING_PACKS } from "./acting.js";
import { DRAWING_PACKS } from "./drawing.js";
import { CREATIVE_PACKS } from "./creative.js";
import { TOPIC_TRIVIA_PACKS } from "./topic-trivia.js";
import { NEW_CHALLENGE_PACKS } from "./new-challenges.js";

// Every content-based game has at least five fresh prompt packages per level.
// Rock-Paper-Scissors Council has fixed rules and needs no question cards.
export const EXPANDED_PACKS = {
  ...KNOWLEDGE_PACKS,
  ...WORD_MEMORY_PACKS,
  ...ACTING_PACKS,
  ...DRAWING_PACKS,
  ...CREATIVE_PACKS,
  ...TOPIC_TRIVIA_PACKS,
  ...NEW_CHALLENGE_PACKS,
};
