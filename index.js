import { KNOWLEDGE_PACKS } from "./knowledge.js";
import { WORD_MEMORY_PACKS } from "./words-memory.js";
import { ACTING_PACKS } from "./acting.js";
import { DRAWING_PACKS } from "./drawing.js";
import { CREATIVE_PACKS } from "./creative.js";
import { TOPIC_TRIVIA_PACKS } from "./topic-trivia.js";
import { NEW_CHALLENGE_PACKS } from "./new-challenges.js";
import { DICTIONARY_PACKS } from "./dictionary-definitions.js";
import { HARDER_CLOCK_PACKS } from "./clock-challenges.js";
import { NO_E_PARADE_PACKS } from "./no-e-parade.js";
import { GUESSING_WORD_PACKS } from "./guessing-the-word.js";

// Most content-based games have at least five prompt packages per level.
// Rock-Paper-Scissors Council has fixed rules and needs no question cards.
export const EXPANDED_PACKS = {
  ...KNOWLEDGE_PACKS,
  ...WORD_MEMORY_PACKS,
  ...ACTING_PACKS,
  ...DRAWING_PACKS,
  ...CREATIVE_PACKS,
  ...TOPIC_TRIVIA_PACKS,
  ...NEW_CHALLENGE_PACKS,
  ...DICTIONARY_PACKS,
  ...HARDER_CLOCK_PACKS,
  ...NO_E_PARADE_PACKS,
  ...GUESSING_WORD_PACKS,
};
