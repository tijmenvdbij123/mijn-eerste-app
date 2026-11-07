# Living Room Battles — Version 3 (GitHub Pages upload)

This is the complete **static website**. No server, build, or account system is needed.

## Upload to your existing GitHub repository

1. Unzip this file on your computer.
2. Open your GitHub repository: https://github.com/tijmenvdbij123/mijn-eerste-app
3. Replace the old website files with these V3 files in the **repository root**. Keep the original directory structure:

   ```text
   index.html
   assets/
     style.css
   src/
     app.js
     engine.js
     games.js
   README.md
   ```

4. Commit the changed files. If GitHub Pages is enabled for `main` / `(root)`, your site will update automatically at https://tijmenvdbij123.github.io/mijn-eerste-app/ .
5. Refresh the website after deployment. If you still see V2, do a hard refresh (Ctrl+Shift+R) or open the page in a private tab.

**Important:** `src/` and `assets/` must remain folders, not filenames with the folder name removed. Upload `index.html` at the root, **not** inside another folder named `dist` or `game-night-v2`.

## What's new in Version 3?

- **Fullscreen game cards:** tap the Fullscreen card button to see rules/questions in a larger, readable format. Exit at any time.
- **Clock instructions on every card** and a **time-up popup** when a timed challenge finishes.
- **Difficulty selection:** Easy, Medium, or Hard for Trivia, Drawing, and the other specified games. Choose before a timed round starts; options lock when play begins.
- **Headline Challenge:** choose Goofy or Normal situations.
- **Picture Race:** cooperative shared-scene drawing, distinct from Sketch & Guess, and timer must be started before revealing.
- **Shape Copy:** 15-second secret preview; confirmed re-view resets both the preview and main timer.
- **Digit Memory:** 20 seconds to memorize, followed immediately by 30 seconds to write.
- **Word Recall Battle:** 25 seconds to memorize, 60 seconds to write, time-up popup, then reveal original words.
- **Target Number:** 60 seconds, started before revealing.
- **No main clock:** Rhyme Rally, Last-Letter Duel, Shopping Basket, Reaction Rules, Rock-Paper-Scissors Council, Count to Thirty.
- Your existing teams, categories, 1–20-round setup, point-scoring rule and turn rotation are retained.

Only the active team can score. The group decides whether the win condition was achieved and taps **Point earned** or **No point**. Scores and setup are saved locally in the browser, separate from Versions 1 and 2.

To edit minigames and difficulty content, change `src/games.js` (`GAMES`, `GAME_LEVELS`, `GAME_STYLES`). To change the user interface, change `src/app.js` and `assets/style.css`.
