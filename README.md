# Living Room Battles — Version 3.3 (GitHub Pages upload)

This is the complete **static website**. No build step, private server or account system is needed. The optional multi-device session uses a third-party free signaling service.

## Upload to your existing GitHub repository

1. Unzip this file on your computer.
2. Open your GitHub repository: https://github.com/tijmenvdbij123/mijn-eerste-app
3. Replace the old website files with these V3.3 files in the **repository root**. Keep the original directory structure:

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
     packs/
       index.js
       knowledge.js
       trivia-v33-additions.js
       words-memory.js
       drawing.js
       acting.js
       creative.js
   README.md
   ```

4. Commit the changed files. If GitHub Pages is enabled for `main` / `(root)`, your site will update automatically at https://tijmenvdbij123.github.io/mijn-eerste-app/ .
5. Refresh the website after deployment. If you still see an old version, do a hard refresh (Ctrl+Shift+R) or open the page in a private tab.

**Important:** `src/` and `assets/` must remain folders, not filenames with the folder name removed. Upload `index.html` at the root, **not** inside another folder named `dist` or `game-night-v2`.

## What's new in Version 3.3?

- **Trivia bank tripled:** 112 original questions plus 224 newly added, making 336 questions shared by all three trivia minigames. The trivia library now creates 24 different cards per level and game. A separate Word document lists all 224 new questions and their answers.
- **Five Quick Facts is cooperative only**, with at least 4 of 5 correct answers needed.
- **Quickfire Facts selects a solo player or a 1v1 duel.** The active player must get 4 of 6 correct; in a duel they must also beat the defender. Quickfire uses slightly easier trivia than Five Quick Facts.
- **Trivia Board is always a team battle.** Every team receives questions suited to its own level, drawn from that same shared trivia dataset.
- **Beginner exclusions:** the six earlier exclusions remain, and Sketch & Guess, Shape Copy, and Picture Race now also start from Novice. Their previous question packs move upward, with extra accessible prompts.
- **Category Flood:** the card cannot open before the timer is running. Beginner and Novice now name 8 items and get a counting example; Intermediate through Advanced name 10 and Grandmaster names 15. Categories were adjusted for age appropriateness.
- **Digit Memory:** 3/4/5/7/8/10/12/15 digits at Beginner through Grandmaster levels.
- **Word Recall Battle:** neighboring levels now share gentler memory vocabulary: Beginner/Novice, Amateur/Intermediate, Competent/Skilled, Advanced/Grandmaster.
- **Logic, acting and creative games:** easier sequences, shifted Clock Duel and Target Number levels, simpler mime/charade prompts from Intermediate upward, adjusted Alphabet Story and Alliteration levels, and 3/4/5/5 word puzzles for Intermediate through Advanced Codebreaker.
- **Reaction Rules:** Beginner teammates may help during play; Novice explains odd/even; the Intermediate caller must not announce the rule switch.
- **Smoother guest fullscreen:** the host's timer updates no longer rebuild the guest's fullscreen card on every tick. If the actual card changes, the guest's fullscreen position is preserved.

- **Fullscreen game cards:** tap the Fullscreen card button to see rules/questions in a larger, readable format. Exit at any time.
- **Clock instructions on every card** and a **time-up popup** when a timed challenge finishes.
- **Eight proficiency levels:** Beginner (age 4–7), Novice (7–10), Amateur (10–13), Intermediate (13–16), Competent (16–18), Skilled (18+), Advanced (18+ hard), Grandmaster (18+ expert). Each team sets its own proficiency on the setup screen. Games default to that level.
- **Level-aware matchmaking:** most battles match a team with another at the same level, one above or one below. Trivia with different level-adjusted questions, and Rock-Paper-Scissors Council, can match any level.
- **Optional connected sessions:** press **Make session** to create an eight-character code, and let four others press **Join session**. Guests can read the synchronized game cards and scoreboard. Only the host controls game flow, timers, card reveals, answer reveals and scores.
- **Difficulty content:** all question-based games have eight curated tiers with several cards per tier.
- **Headline Challenge:** choose Goofy or Normal situations.
- **Picture Race:** cooperative shared-scene drawing, distinct from Sketch & Guess, and timer must be started before revealing.
- **Shape Copy:** preview varies by level (30s / unlimited / 30s / 15s); confirmed re-view resets both clocks, and the original reference can be shown after time-up.
- **Digit Memory:** 20 seconds to memorize, 30 seconds to write, with confirmed restart and an answer reveal after time-up.
- **Word Recall Battle:** 25 seconds to memorize, then 60 seconds to **write down as many of those words as possible**; reveal the original words for scoring at time-up.
- **Target Number:** 60 seconds, started before revealing.
- **No main clock:** Rhyme Rally, Last-Letter Duel, Shopping Basket, Reaction Rules, Rock-Paper-Scissors Council, Count to Thirty.
- Your existing teams, categories, 1–20-round setup, point-scoring rule and turn rotation are retained.

Only the active team can score. The group decides whether the win condition was achieved and taps **Point earned** or **No point**. The host stores the match in its own V3.3 browser save, separate from previous versions.

## Shared-session requirements and limitations

- **Internet is required** on all participating devices for the PeerJS library and cloud signaling. Sessions work on GitHub Pages, but may fail across restrictive Wi-Fi, firewalls or mobile networks because the browser-to-browser connection is not guaranteed.
- Host and guests should open the **same published website version**. The host must leave the webpage open. Refreshing, losing internet or closing the host device may disconnect guests; they can rejoin or make a new session.
- Connected devices receive the live state, but sessions are **not permanent rooms**. There is no log-in or remote database. If sessions are unreliable in your group, play on a single device and consider upgrading to a proper server later.

To edit minigame rules change `src/games.js`; for Version 3.3 content banks use `src/packs/*.js`. The original trivia facts are in `src/packs/knowledge.js`, with new trivia in `src/packs/trivia-v33-additions.js`. The earlier difficulty settings remain in `src/levels.js`. `src/session.js` contains synchronized session logic; `src/app.js` and `assets/style.css` hold the interface.
