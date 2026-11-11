// Single-player-per-team format: two or three players, each their own team.
// Uses the very same level-specific question packs as the original team game.
// Only the current player's team may score; a defender can only block it.
export const SINGLE_EXCLUDED_GAMES = new Set([
  "sketch-guess", "mime-relay", "silent-charades", "picture-race",
]);

export const SINGLE_GAME_MODES = Object.freeze({
  "category-flood": ["solo", "duel"],
  "rhyme-rally": ["duel"],
  "last-letter-duel": ["duel"],
  "team-trivia": ["solo"],
  "quickfire-facts": ["solo", "duel"],
  "trivia-board": ["duel"],
  "shape-copy": ["duel"],
  "shopping-basket": ["duel"],
  "digit-duel": ["solo", "duel"],
  "word-recall-battle": ["duel"],
  "missing-numbers": ["solo"],
  "clock-duel": ["solo"],
  "target-number": ["duel"],
  "reaction-rules": ["duel"],
  "alphabet-story": ["duel"],
  "alliteration-duel": ["duel"],
  "headline-teams": ["duel"],
  "codebreaker": ["solo"],
  "count-to-thirty": ["duel"],
  "rps-council": ["duel"],
  "staring-contest": ["duel"],
  "make-laugh": ["duel"],
  "rebus": ["duel"],
  "arm-wrestling": ["duel"],
  "riddle-round": ["solo"],
  ...Object.fromEntries(["history", "sports", "movies-tv", "culture", "geography", "science-nature", "arts-literature", "music"].map((topic) => [`topic-trivia-${topic}`, ["duel"]])),
});

export function modesForSingle(game) {
  return SINGLE_GAME_MODES[game.id] || [];
}

export function singleContent(game, round, original) {
  const mode = round.mode;
  const response = { ...original };
  switch (game.id) {
    case "category-flood": {
      const amount = Number(original.win.match(/\d+/)?.[0] || 10);
      if (mode === "solo") {
        response.description = `SOLO VERSION (fixed target). Start the 150-second timer BEFORE revealing. The active player alone must name or write ${amount} different valid items from the category. A non-playing person checks the answers and repeated words.`;
        response.win = `The active player earns the point by giving ${amount} distinct valid items within 150 seconds.`;
      } else {
        response.description = "1v1 VERSION (most items). Start the 150-second timer BEFORE revealing the card. Both players separately WRITE as many distinct, valid items as possible from the SAME category. Do not copy. Compare lists when the timer ends.";
        response.equipment = "Text card and paper";
        response.win = "The active player scores only if their list contains MORE valid, non-repeated items than the defender's. A tie blocks the point. There is NO minimum quota in this version.";
        response.prompts = original.prompts.map((prompt) => {
          // Card text only names the category. The instructions already
          // explain the timer, uniqueness rule and shared-category rule.
          const category = prompt.text.split("\n")[0]
            .replace(/^Name \d+ /i, "")
            .replace(/\.$/, "")
            .replace(/^TYPES OF /i, "")
            .toLowerCase();
          return { ...prompt, text: `Write as many ${category} as possible.` };
        });
      }
      break;
    }
    case "rhyme-rally":
      response.description = "1v1; NO main clock. Begin with the word ON THE CARD. The active player says a DIFFERENT rhyming word first, then both players alternate clockwise, with five seconds per reply. No repeats.";
      response.win = "The active player earns the point only if the defender is first to fail to rhyme, repeat a word or take longer than five seconds.";
      break;
    case "last-letter-duel":
      response.description = "1v1; NO main clock. The active player starts, using the last letter of the word on the card. Alternate new words beginning with the previous word's last letter, five seconds per turn.";
      response.win = "The active player scores only if the defender is the first to say an invalid word, repeat one, or run out of five seconds.";
      break;
    case "team-trivia":
      response.description = "SOLO. The active player answers FIVE level-adjusted trivia questions alone. Start the 150-second timer before checking answers; no teammates are available.";
      response.win = "Answer at least FOUR out of FIVE questions correctly within 150 seconds. Only the active player can earn the point.";
      break;
    case "quickfire-facts":
      response.description = mode === "solo" ? "SOLO. The active player answers six questions alone at their adjusted difficulty." : "1v1. Both players independently answer six questions, each at their own adjusted difficulty.";
      response.win = mode === "solo" ? "The active player scores with at least FOUR of SIX correct answers." : "The active player needs FOUR of SIX correct AND more correct answers than the defender; a tie blocks the point.";
      break;
    case "trivia-board":
      response.description = "1v1 Trivia Board. The active player and defender each answer SIX questions independently on their OWN level-adjusted card; compare after the timer. Cards can have multiple-choice, mixed and open questions.";
      response.win = "The active player scores only by getting MORE of their six questions correct than the defender. A tie blocks the point.";
      break;
    case "shape-copy":
      response.description = `${original.description} 1v1: just the two competing players may look at the original shape card. Each draws their own copy from memory.`;
      response.win = "The active player scores if their drawing has MORE correctly copied details than the defender's; a tie blocks the point.";
      break;
    case "shopping-basket":
      response.description = "1v1, NO main clock. Start with the card's item; active player goes first. Alternate saying ALL previous shopping items in order before adding one new item. Five seconds to start each turn.";
      response.win = "The active player scores only if the defending player forgets an item, changes the order or repeats an item FIRST.";
      break;
    case "digit-duel":
      response.description = `Start the staged timer: 20 seconds to memorize, followed by 30 seconds to write the number from memory. ${mode === "solo" ? "SOLO: the active player works alone." : "1v1: both players study the SAME digit sequence and write their own answer."} You can confirm a restart if the timer was pressed accidentally.`;
      response.win = mode === "solo" ? "The active player scores only if EVERY digit is correct and in the correct position." : "The active player scores only if MORE digit positions are correct than for the defender. A tie blocks the point.";
      break;
    case "word-recall-battle":
      response.description = "1v1. Both players study the SAME 16-word list for 25 seconds; it then hides. Write as many of the words you JUST SAW as you remember during the next 90 seconds. Compare your separate lists when the answers are revealed.";
      response.win = "The active player scores only if they recall MORE distinct correct words than the defender. A tie blocks the point.";
      break;
    case "missing-numbers":
      response.description = "SOLO. Start the 150-second timer BEFORE revealing; the active player solves all eight number sequences alone.";
      response.win = "The active player scores by solving at least SIX of the EIGHT sequences correctly within 150 seconds.";
      break;
    case "clock-duel":
      response.description = "SOLO. Start the 150-second timer BEFORE revealing; the active player works out six time questions alone, using 24-hour time.";
      response.win = "The active player scores only if ALL SIX time calculations are correct before 150 seconds expire.";
      break;
    case "target-number":
      response.description = `${original.description} 1v1: both players use the same target and four numbers, writing independent expressions.`;
      response.win = "The active player scores only if their valid expression is CLOSER to the target than the defender's. A tie blocks the point.";
      break;
    case "reaction-rules":
      response.description = `${original.description} 1v1: the defender CALLS the numbers and checks the active player's actions; the defender does not need to perform the actions.`;
      response.win = "The active player scores only by making ZERO mistakes. The defending caller may only block the point.";
      break;
    case "alliteration-duel":
      response.description = `${original.description} 1v1: both players use the same starting letter and write independently.`;
      response.win = "The active player scores only if they make MORE distinct, valid alliterative phrases than the defender in 150 seconds.";
      break;
    case "headline-teams":
      response.description = "1v1. Start the 150-second timer before revealing the situations. Each player independently writes ONE funny headline of at most TEN words for EACH situation. With three players, the neutral third player judges each situation; with two, both players decide together.";
      response.win = "The active player must win MORE situations than the defender. If there is no neutral judge and the two players cannot agree, that situation is a tie. Any overall tie blocks the point.";
      break;
    case "codebreaker":
      response.description = `SOLO. ${original.description} The active player decodes the entire card alone; reveal the correct words only when the timer ends.`;
      response.win = original.win.replace(/\bGet\b/, "The active player scores by getting").replace(/^Decode\b/, "The active player scores by decoding");
      break;
    case "count-to-thirty":
      response.description = `${original.description} 1v1, NO clock. The active player begins at 1. Each player says one, two or three consecutive numbers on their turn.`;
      response.win = original.win.replace(/active (player|team)/i, "active player").replace(/scores/i, "scores a point");
      break;
    case "rps-council":
      response.description = "1v1, NO clock. The active player and defender reveal rock, paper or scissors simultaneously. Play BEST OF FIVE DECISIVE rounds: the first player to win THREE rounds wins. A tied throw counts as NO round, so throw again. No team consultation.";
      response.win = "The active player scores only by being FIRST to win THREE decisive rounds. Rock beats scissors, scissors beats paper, paper beats rock. A tie awards no round to either player; replay it.";
      break;
    case "alphabet-story":
      response.description = `${original.description} 1v1: the active player starts with an A sentence, the defender continues with B, and so on. Alternate connected sentences in the same story, each beginning with the required next letter. A wrong letter, broken story or missed turn loses.`;
      response.win = "The active player earns the point only if the defender FAILS FIRST. If the active player fails first, the defender blocks the point. If both finish the ENTIRE A-to-final-letter story correctly, the defending player wins and the active player gets NO point.";
      break;
    case "staring-contest":
      response.description = "1v1, no timer. Stare without blinking. First to blink loses. If a neutral third player is present they judge; otherwise decide fairly together and replay any disagreement.";
      response.win = "The active player scores only if the defender blinks first.";
      break;
    case "make-laugh":
      response.description = "1v1. You have 60 seconds to make the defender laugh with funny faces, jokes, words, gestures or acting. No touching or unsafe stunts. Any levels can face each other.";
      response.win = "The active player scores if the defending player laughs before 60 seconds run out.";
      break;
    case "rebus":
      response.description = "1v1. Start 150 seconds, then BOTH players read the SAME clue card. Answer the trivia clues, take the stated numbered letters, and guess the secret word. Each person gets ONE binding final-word guess. A wrong first final-word guess loses instantly, making the opponent the winner. Clues are drawn from trivia one proficiency level lower.";
      response.win = "The active player scores if they give the correct first guess OR the defender guesses incorrectly first. No solution in 150 seconds means no point.";
      break;
    case "arm-wrestling":
      response.description = "1v1, NO clock. Sit at a stable table, keep elbows supported and never force an uncomfortable arm position. Both players must willingly agree to play and stop if anyone feels pain.";
      response.win = "Only an active-player victory earns a point. A defender win blocks the point.";
      break;
    case "riddle-round":
      response.description = "SOLO. Start 150 seconds before revealing. Solve the riddles alone; another player checks the answers after the time ends.";
      response.win = original.win.replace(/active team/g, "active player");
      break;
    default:
      if (game.id.startsWith("topic-trivia-")) {
        response.description = "1v1 TOPIC TRIVIA. Both players independently answer FIVE questions, each using their own proficiency-level card. Start 150 seconds before revealing both cards.";
        response.win = "The active player scores if they get MORE of their five answers correct than the defender; ties block the point.";
        break;
      }
      throw new Error(`No single-player rule for ${game.id}`);
  }
  return response;
}
