import { KNOWLEDGE_PACKS } from "./knowledge.js";
import { WORD_MEMORY_PACKS } from "./words-memory.js";
import { ACTING_PACKS } from "./acting.js";
import { DRAWING_PACKS } from "./drawing.js";
import { CREATIVE_PACKS } from "./creative.js";

// Every content-based game has at least five fresh prompt packages per level.
// Rock-Paper-Scissors Council has fixed rules and needs no question cards.
export const EXPANDED_PACKS = {
  ...KNOWLEDGE_PACKS,
  ...WORD_MEMORY_PACKS,
  ...ACTING_PACKS,
  ...DRAWING_PACKS,
  ...CREATIVE_PACKS,
};
