# Living Room Battles — Version 3.1 (GitHub Pages upload)

This is the complete **static website**. No build step, private server or account system is needed. The optional multi-device session uses a third-party free signaling service.

## Upload to your existing GitHub repository

1. Unzip this file on your computer.
2. Open your GitHub repository: https://github.com/tijmenvdbij123/mijn-eerste-app
3. Replace the old website files with these V3.1 files in the **repository root**. Keep the original directory structure:

   ```text
   index.html
   assets/
     style.css
   src/
     app.js
     engine.js
     games.js
     levels.js
     session.js
   README.md
   ```

4. Commit the changed files. If GitHub Pages is enabled for `main` / `(root)`, your site will update automatically at https://tijmenvdbij123.github.io/mijn-eerste-app/ .
5. Refresh the website after deployment. If you still see an old version, do a hard refresh (Ctrl+Shift+R) or open the page in a private tab.

**Important:** `src/` and `assets/` must remain folders, not filenames with the folder name removed. Upload `index.html` at the root, **not** inside another folder named `dist` or `game-night-v2`.

## What's new in Version 3.1?

- **Fullscreen game cards:** tap the Fullscreen card button to see rules/questions in a larger, readable format. Exit at any time.
- **Clock instructions on every card** and a **time-up popup** when a timed challenge finishes.
- **Eight proficiency levels:** Beginner (age 4–7), Novice (7–10), Amateur (10–13), Intermediate (13–16), Competent (16–18), Skilled (18+), Advanced (18+ hard), Grandmaster (18+ expert). Each team sets its own proficiency on the setup screen. Games default to that level.
- **Level-aware matchmaking:** most battles match a team with another at the same level, one above or one below. Trivia with different level-adjusted questions, and Rock-Paper-Scissors Council, can match any level.
- **Optional connected sessions:** press **Make session** to create an eight-character code, and let four others press **Join session**. Guests can read the synchronized game cards and scoreboard. Only the host controls game flow, timers, card reveals, answer reveals and scores.
- **Difficulty content:** five knowledge/logic games have eight levels of questions; other difficulty-based games use four anchor tiers mapped to the eight choices.
- **Headline Challenge:** choose Goofy or Normal situations.
- **Picture Race:** cooperative shared-scene drawing, distinct from Sketch & Guess, and timer must be started before revealing.
- **Shape Copy:** preview varies by level (30s / unlimited / 30s / 15s); confirmed re-view resets both clocks, and the original reference can be shown after time-up.
- **Digit Memory:** 4/8/12/16 digits by difficulty; 20 seconds to memorize, 30 seconds to write, with confirmed restart and an answer reveal after time-up.
- **Word Recall Battle:** 25 seconds to memorize, 60 seconds to write, time-up popup, then reveal original words.
- **Target Number:** 60 seconds, started before revealing.
- **No main clock:** Rhyme Rally, Last-Letter Duel, Shopping Basket, Reaction Rules, Rock-Paper-Scissors Council, Count to Thirty.
- Your existing teams, categories, 1–20-round setup, point-scoring rule and turn rotation are retained.

Only the active team can score. The group decides whether the win condition was achieved and taps **Point earned** or **No point**. The host stores the match in the browser, separate from Versions 1, 2 and 3.

## Shared-session requirements and limitations

- **Internet is required** on all participating devices for the PeerJS library and cloud signaling. Sessions work on GitHub Pages, but may fail across restrictive Wi-Fi, firewalls or mobile networks because the browser-to-browser connection is not guaranteed.
- Host and guests should open the **same published website version**. The host must leave the webpage open. Refreshing, losing internet or closing the host device may disconnect guests; they can rejoin or make a new session.
- Connected devices receive the live state, but sessions are **not permanent rooms**. There is no log-in or remote database. If sessions are unreliable in your group, play on a single device and consider upgrading to a proper server later.

To edit minigames change `src/games.js`; to update V3.1 difficulty content change `src/levels.js`. `src/session.js` contains the synchronized session logic. To change the interface, change `src/app.js` and `assets/style.css`.
