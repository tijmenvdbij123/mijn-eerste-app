# Living Room Battles — Version 2 (GitHub Pages upload)

This is the complete **static website**. No server, build, or account system is needed.

## Upload to your existing GitHub repository

1. Unzip this file on your computer.
2. Open your GitHub repository: https://github.com/tijmenvdbij123/mijn-eerste-app
3. Replace the old website files with these V2 files in the **repository root**. Keep the original directory structure:

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
5. Refresh the website after deployment. If you still see V1, do a hard refresh (Ctrl+Shift+R) or open the page in a private tab.

**Important:** `src/` and `assets/` must remain folders, not filenames with the folder name removed. Upload `index.html` at the root, **not** inside another folder named `dist` or `game-night-v2`.

## What's new in Version 2?

- 1–20 rounds per team, game-length estimate, automatic end screen and final standings.
- The active team can choose both representatives in 1v1 player-choice matchups.
- 24 revised minigames, including harder multiple-choice trivia and more challenging time calculations.
- Cooperative or battle mode chosen randomly for Picture Race and Quickfire Facts.
- Shopping Basket now a 1v1 memory duel; Mime Relay now a 10-word cooperative challenge (8 needed to score).
- Real automatic secret-card preview countdowns: Shape Copy 5 seconds, Digit Memory 20 seconds, Word Recall Battle 25 seconds. Once hidden, they do not reveal again, even after refreshing.
- A 30-second Target Number timer. Most other challenges use 150 seconds; specified games require starting the timer before opening the card.

Only the active team can score. The group decides whether the win condition was achieved and taps **Point earned** or **No point**. Scores and setup are saved locally in the browser, separate from Version 1.

To edit minigames, change `src/games.js`. To change the user interface, change `src/app.js` and `assets/style.css`.
