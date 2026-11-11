# Living Room Battles — Version 3.4

This is the complete **GitHub Pages website**. It runs with static HTML, CSS
and JavaScript. No build step or credit card is needed. Optional multi-device
sessions require internet access for PeerJS signaling and WebRTC.

## Update your existing website

1. Extract **Living-Room-Battles-V3.4-Website.zip** on your computer.
2. Visit https://github.com/tijmenvdbij123/mijn-eerste-app .
3. Replace the website files at the repository **root** with the extracted
   contents: `index.html`, `assets/`, `src/` and this `README.md`.
4. Keep the nested `src/packs/` folder, including the new
   `trivia-v34-rules.js` file. Do not upload an enclosing `dist/` folder.
5. Commit. Once GitHub Pages has deployed the changes, visit
   https://tijmenvdbij123.github.io/mijn-eerste-app/ .
6. If the old layout or questions remain, hard-refresh with Ctrl+Shift+R.

## What's fixed in V3.4

- The single shared trivia bank still contains **336 unique questions**: 42
  per level, with the exact level transfers listed in `V3.4-FEEDBACK-AUDIT.md`.
- `V3.4-TRIVIA-QUESTION-CATALOG.md` lists **all 336 questions and their
  correct answers**, grouped by proficiency, for easy manual review.
- Questions the designer marked `a,b,c,d` always show four choices. The
  intended answer is included, with three different plausible alternatives.
- Novice math uses only addition and subtraction; Amateur math uses basic
  multiplication/division; Intermediate adds combined arithmetic and easy
  percentages. Squares start at Competent. Advanced and Grandmaster no longer
  include the simple filler sums such as `Solve 40 + 31 - 28`.
- **Category Flood** requires 8 answers at Beginner/Novice, and 10 at every
  other level including Grandmaster. Topic cards stay the same.
- Beginner-ineligible games remain in the pool for older teams; Beginners are
  excluded as potential defenders in those games.
- **Sketch & Guess** and **Shape Copy** remain unavailable to Beginner teams,
  and playable levels have additional, simpler drawing prompts. Shape Copy's
  preview windows, confirmed re-view and reference review are preserved.
- **Word Recall Battle** now has a *Restart memory challenge* button, with a
  confirmation before both its 25-second viewing and 60-second writing timers
  reset. Digit Memory keeps its existing restart.
- **Missing Number** and **Clock Duel** have gentler number and time patterns.
- **Novice Target Number** uses targets and numbers no higher than 20 and
  *addition/subtraction only*; every card has an exact solution.
- **Mime Relay** and **Silent Charades** use more concrete, recognizable
  actions from Intermediate/Competent upward.
- **Alphabet Story** keeps its requested shifted themes and A–D, A–F, A–J,
  A–T and A–Z progressions, while Alliteration Duel uses easier starting
  letters and examples on every card.
- Codebreaker remains at **3/4/5/5** puzzles for Intermediate through
  Advanced, preserving the older Expert/Grandmaster setup.
- Sessions now explicitly require the same V3.4 version on host and guests.
  Guest fullscreen cards remain displayed as the host's timer updates.

Games marked perfect in feedback—Rhyme Rally, Last Letter Duel, Shopping
Basket, Reaction Rules, Headline Challenge, Count to Thirty and Rock-Paper-
Scissors Council—retain their game rules and flow.

## What stays the same

- 2–6 teams, 2 or 3 named players per team; eight proficiency levels.
- Your team names, category choices and number of rounds can be configured.
- All eight categories are enabled by default; turns rotate in team order.
- Only the active team can earn a point. An opponent can prevent a point.
- Five Quick Facts is cooperative (4/5); Quickfire Facts is solo or 1v1
  (4/6); Trivia Board is a team battle. All draw from the shared trivia bank.
- Every game states whether its clock is required; timer expiry displays a
  popup. Host controls game and guest devices are read-only.
- Five connected devices maximum (one host and up to four guests).
- Original V3.3 browser settings are migrated to the V3.4 setup screen;
  incomplete V3.3 rounds are not continued with altered question cards.

## Editing the game

| File | Responsibility |
| --- | --- |
| `src/app.js` | Game screens, host controls, timers, setup and reset buttons |
| `src/engine.js` | Team levels, opponent selection, rounds and scoring |
| `src/session.js` | Session codes and synchronized host/guest updates |
| `src/games.js` | Original game definitions |
| `src/packs/knowledge.js` | Trivia and logic cards |
| `src/packs/trivia-v33-additions.js` | V3.3 source of new trivia facts |
| `src/packs/trivia-v34-rules.js` | V3.4 fact moves, multiple-choice and math |
| `src/packs/drawing.js` | Sketch, Copy and Picture Race cards |
| `src/packs/acting.js` | Mime, Charades and Reaction Rules |
| `src/packs/words-memory.js` | Category Flood, Rhyme and memory challenges |
| `src/packs/creative.js` | Alphabet Story, Alliteration and Headline |

The developer source directory includes **41 automated tests** (`npm test`).
There is no runtime package installation required to use the website.

## Shared-session limits

Sessions use a third-party peer-to-peer signaling service, not a permanent
database. Keep the host browser open. Some networks or firewalls may prevent
connections; guests may need to join again. Local one-device games work
without that service.
