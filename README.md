# Living Room Battles — Version 3.5

This ZIP is a **ready-to-upload GitHub Pages website**. It uses plain HTML,
CSS and JavaScript; there is no installation or build step. V3.5 introduces
**Solo Showdown**, while keeping the original **Team Battles** format.

## Update your GitHub Pages website

1. Unzip `Living-Room-Battles-V3.5-Website.zip` on your computer.
2. Open https://github.com/tijmenvdbij123/mijn-eerste-app .
3. Upload the extracted contents **directly into the root of the repository**:
   `index.html`, `assets/`, `src/`, and the documentation. Do not nest them
   inside a `dist/` or `Living-Room-Battles` folder.
4. Replace existing files with the same paths. Keep all nested files in
   `src/packs/` and the new `src/single-mode.js`.
5. Commit, wait for GitHub Pages to deploy, then open
   https://tijmenvdbij123.github.io/mijn-eerste-app/ .
6. If you see the old interface, press Ctrl+Shift+R to hard-refresh.

## Choose a format on the home screen

### Team Battles — unchanged original mode

- 2–6 teams, with 2 or 3 named players per team.
- All **24** original minigames, original team/cooperation/battle rules,
  level-dependent question packs, clocks, rounds and scoring.

### Solo Showdown — NEW

- **2 or 3 players total**, with exactly one named player on each team.
- **20** minigames. Sketch & Guess, Mime Relay, Silent Charades and Picture
  Race are excluded **only in Solo Showdown**; Team Battles keeps all four.
- The game chooses between a one-player challenge and a 1v1 duel when both
  formats exist. Solo challenges award a point for meeting the card's target;
  duels only award a point if the **current player** wins. The defender
  cannot earn a point during someone else's turn.
- Individual names, proficiency levels, scores, round counts, category
  selections and automatic turns are fully supported.
- The app selects or offers a defender in keeping with existing proficiency
  compatibility. In 3-player Headline Challenge, the third player judges.

The exact 20-game rule mapping and decisions are in
`V3.5-FEEDBACK-AUDIT.md`.

## Preserved from earlier versions

- All eight proficiency levels and the original V3.4 question and game-card
  packages, including the shared bank of **336 trivia questions**.
- Custom rounds with an approximate duration before starting.
- Per-game clocks, automatic time-up notices, hidden timed cards, fullscreen
  cards, answer reveals, and confirmed memory-card restart options.
- Browser save and optional internet-based multi-device session codes: one
  host plus up to four guests. Guests read synced cards; only the host
  controls the timer, reveals and scoring. All connected devices should run
  V3.5; do not mix browser tabs running V3.4 and V3.5.
- V3.3/V3.4 team names, categories and setup are migrated when available;
  older partially completed matches are reset to setup because the game
  rules and formats changed.

## Files you can edit later

| Path | Purpose |
| --- | --- |
| `index.html` | Website entry point |
| `assets/style.css` | Layout, colors, mobile responsiveness |
| `src/app.js` | Screens, players, timers, controls, sessions |
| `src/engine.js` | Levels, eligible games, matchups, turn order and points |
| `src/single-mode.js` | NEW Solo Showdown game list and 20 adapted rule sets |
| `src/games.js` | Original minigame definitions |
| `src/levels.js` | Eight-level configuration |
| `src/packs/` | Existing question and drawing/game-card datasets |

No private application server is necessary. The session feature uses
third-party signaling and WebRTC and requires a working internet connection
and the host to keep their tab open; some networks may block peer connections.

For developers, the full source outside this upload ZIP has automated tests
that can be run with `npm test`.
