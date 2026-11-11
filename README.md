# Living Room Battles — Version 4.0

**Version 4.0 of the browser-based, local party-minigame website.** This folder is ready to upload to GitHub Pages as-is. No npm installation, server-side build step, or credit card is required; `index.html` is at the root.

## New in V4.0

- Eight **topic-specific trivia games**, under **New Topic Trivia**: History, Sports & Athletics, Movies & TV, Culture, Geography, Science & Nature, Arts & Literature, Music. The previous trivia category is renamed **Classic & General Trivia**. Each new topic has 8 proficiency levels, with **40 question prompts per level** (eight five-question cards) and answer keys: **2,560 question placements** altogether. Each level's 40 questions have distinct wording, although some facts are asked from two directions and some questions deliberately carry over from the neighboring difficulty level. The new topic quizzes are head-to-head: each side gets five questions adjusted to its own level; only the current team scores, and only by answering more correctly than its opponent. The clock is 150 seconds.
- A new category, **Party Challenges**, contains the five additional new games:
  - **Stare Battle (No Blinking):** untimed 1v1, any levels; neutral team's judge if available.
  - **Make the Other Laugh:** 60-second 1v1, any levels; faces, speech, jokes and acting allowed.
  - **Rebus: Secret Word:** 150 seconds, 1v1 or 2v2 in Team Battles; 1v1 in Solo Showdown. Each letter is extracted from an answer to a trivia question **one proficiency level below** the rebus level. The SAME puzzle is used by both sides. Each side has one final-word guess: a wrong first guess means the other side wins immediately. Beginner is excluded.
  - **Arm Wrestling:** untimed 1v1; only willing players, use a stable surface, stop if anyone feels discomfort.
  - **Riddle Round:** 150-second cooperative challenge in Team Battles, solo challenge in Solo Showdown; Beginner excluded. The number of riddles and the winning threshold increase with proficiency.
- **37 games** in Team Battles (the original 24 plus 13 new games), **33 games** in Solo Showdown (the original 20 plus 13 new games). Existing game rules, question packs, timers, format options, names, levels and scores are preserved.
- Rebus, Riddle and new topic trivia answers remain hidden during the round; host has a confirmed **Finish attempt & reveal answers** control for early completion. On a naturally expired timer, answer keys become available for checking.
- Optional multi-device sessions use a new V4.0 session namespace; everyone should open the **same V4.0** website version. Old incomplete matches are reset to setup because the game catalog has changed.

## Rebus and Riddle levels

| Proficiency | Rebus: letters/clues | Riddle questions | Correct required |
|---|---:|---:|---:|
| Beginner | Not available | Not available | — |
| Novice | 3 | 2 | 1 |
| Amateur | 4 | 3 | 2 |
| Intermediate | 4 | 3 | 2 |
| Competent | 5 | 3 | 2 |
| Skilled | 5 | 3 | 2 |
| Advanced | 6 | 4 | 3 |
| Grandmaster (Expert) | 7 | 5 | 4 |

## Install / update on GitHub Pages

1. Extract `Living-Room-Battles-V4.0-Website.zip`.
2. Open your repository: <https://github.com/tijmenvdbij123/mijn-eerste-app>.
3. Upload the **contents** of the extracted ZIP **into the repository root**, keeping `index.html`, `assets/` and `src/` in their existing paths. Do not nest the website inside an extra folder.
4. Replace files with matching names. **Do not omit the seven new files under `src/packs/`:** `topic-trivia.js`, `topic-trivia-seed-parser.js`, `topic-trivia-seeds-a.js`, `topic-trivia-seeds-b.js`, `topic-trivia-seeds-c.js`, `topic-trivia-seeds-d.js`, `new-challenges.js` (seven new files), plus the updated `src/packs/index.js`. All are required for the app to load.
5. Commit the changes, allow Pages to deploy, then open <https://tijmenvdbij123.github.io/mijn-eerste-app/>. On a cached page, force refresh with Ctrl+Shift+R.

## Game modes

**Team Battles:** 2–6 teams of 2–3 players each. Only the currently active team can earn a point. Includes all 37 games. Rebus lets two chosen teammates play against two defenders in a 2v2 option; any third teammate must sit out and not help.

**Solo Showdown:** 2–3 players total, each their own one-player team. Includes 33 games. The four original drawing/acting cooperative games—Sketch & Guess, Mime Relay, Silent Charades and Picture Race—remain Team Battles-only. All **13 new games** are available in both formats, with the new topic trivia and other 1v1 games adapting to one player on each side.

All eight original proficiencies stay in place: Beginner, Novice, Amateur, Intermediate, Competent, Skilled, Advanced and Grandmaster. Opponents ordinarily have comparable proficiencies; universal games (including Stare Battle and Make the Other Laugh) permit any pairing. Where the two sides answer different trivia questions, each receives its own adjusted card.

## Files and testing

| File | Purpose |
|---|---|
| `index.html` | Website entry page |
| `assets/style.css` | Styling/mobile layout |
| `src/app.js` | User interface, revealed cards, timer, game/session controls |
| `src/engine.js` | Levels, selection, scoring, states |
| `src/games.js` | Definitions and categories for all 37 games |
| `src/levels.js` | Existing level configuration and special open matchmaking |
| `src/single-mode.js` | Solo Showdown mode and adjusted rules |
| `src/session.js` | Optional host/guest synchronization |
| `src/packs/topic-trivia*.js` | New-topic trivia question banks and helpers |
| `src/packs/new-challenges.js` | Rebus and Riddle card banks |
| `V4.0-FEEDBACK-AUDIT.md` | Point-by-point implementation record and interpretations |
| `V4.0-NEW-GAMES-CATALOG.md` | All new questions/cards and answer keys |
| `V4.0-FILE-CHANGES.md` | Changed and added file paths vs. V3.6 |
| `tests/*.test.mjs` | Dependency-free Node.js test suite |

With Node.js installed, run `node --test tests/*.test.mjs` from this folder to check the rules and UI rendering. These are automated tests and **not** a substitute for playtesting with real players on your phone/browser.

The optional shared session uses third-party signaling and WebRTC. It needs an internet connection and may be blocked by some networks; local play runs without this feature.
