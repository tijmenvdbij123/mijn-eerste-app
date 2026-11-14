// V4.14: one *example* card per playable proficiency level.
// These examples are independent from the live word chain and never count as
// answers. The three versions are composed by native-language rules, not by
// a word-by-word translator (important: every example must contain NO E).
export const NO_E_LEVELS = Object.freeze({
  novice:       { target: 8,  seconds: 5, examples: { en: ['CAT','DOG','SUN'], nl: ['KAT','HOND','ZON'], da: ['KAT','HUND','SOL'] } },
  amateur:      { target: 10, seconds: 5, examples: { en: ['FROG','LION','CLOUD'], nl: ['WOLK','OLIFANT','KROKODIL'], da: ['FRØ','LØV','SKY'] } },
  intermediate: { target: 12, seconds: 5, examples: { en: ['ORBIT','PLAN','GLASS'], nl: ['KOMPAS','PLAN','GLAS'], da: ['KOMPAS','PLAN','GLAS'] } },
  competent:    { target: 15, seconds: 5, examples: { en: ['SYMPHONY','QUARTZ','LOGIC'], nl: ['MUSICAL','KWARTS','LOGICA'], da: ['SYMFONI','KVARTS','LOGIK'] } },
  skilled:      { target: 15, seconds: 3, examples: { en: ['ALGORITHM','QUANTUM','JAZZ'], nl: ['KWANTUM','PARADOX','JAZZ'], da: ['KVANTUM','PARADOKS','JAZZ'] } },
  advanced:     { target: 18, seconds: 3, examples: { en: ['PHOTON','OXYMORON','RHYTHM'], nl: ['FOTON','OXYMORON','WISKUNDIG'], da: ['FOTON','PARADOKS','KYNDIG'] } },
  grandmaster:  { target: 20, seconds: 3, examples: { en: ['QUINTILLION','RHYTHM','PSYCHOLOGY'], nl: ['CHRONOLOGISCH','PARADOX','HYPNOTISCH'], da: ['KRONOLOGISK','KVANTUM','HYPNOTISK'] } },
});

export function noESettings(level) { return NO_E_LEVELS[level] ?? NO_E_LEVELS.skilled; }

const EXAMPLE_LABELS = Object.freeze({
  en: 'EXAMPLE — these words are allowed (they do not count):',
  nl: 'VOORBEELD — deze woorden zijn toegestaan (ze tellen niet mee):',
  da: 'EKSEMPEL — disse ord kan bruges (de tæller ikke med):',
});

export const NO_E_PARADE_PACKS = {
  'no-e-parade': Object.fromEntries(Object.entries(NO_E_LEVELS).map(([level, config]) => {
    const languageVariants = Object.fromEntries(['en', 'nl', 'da'].map(lang => [lang, {
      text: `${EXAMPLE_LABELS[lang]}\n${config.examples[lang].join(' → ')}`,
    }]));
    return [level, { prompts: [{ text: languageVariants.en.text, languageVariants, localizedCard: true, isExample: true }] }];
  })),
};
