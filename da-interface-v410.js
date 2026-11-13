/**
 * V4.10: Reviewed Danish text for the setup, matchup, clock, difficulty,
 * verdict, equipment, and recent-turn interface. English game data remains
 * canonical; language-dependent question/card packs are handled elsewhere.
 * This translator deliberately avoids word-by-word substitutions.
 */
const L = {
  Beginner: 'Begynder', Novice: 'Nybegynder', Amateur: 'Amatør',
  Intermediate: 'Øvet', Competent: 'Kompetent', Skilled: 'Dygtig',
  Advanced: 'Avanceret', Grandmaster: 'Stormester',
};
const exact = {
  // Solo and team setup
  'Every player': 'Hver spiller',
  'for themselves.': 'spiller for sig selv.',
  'SOLO SHOWDOWN · ONE PLAYER PER TEAM': 'SOLODYST · ÉN SPILLER PR. HOLD',
  'TEAM BATTLES · ORIGINAL FORMAT': 'HOLDKAMP · ORIGINAL SPILFORM',
  'Each person is their own one-player team. Take turns earning your point solo or block the current player in a duel.':
    'Hver spiller udgør sit eget hold. I skiftes til at forsøge at få et point alene eller forhindre en modstander i at få point i en duel.',
  'Bring your people, pick your favorite challenges, and let the friendly rivalry begin. Quick living-room games. One point at a time.':
    'Saml venner og familie, vælg jeres yndlingsudfordringer, og dyst mod hinanden. Hurtige spil i stuen – ét point ad gangen.',
  'Enter 2 to 6 player names. Each person has exactly one team and an individual score.':
    'Indtast navnene på 2 til 6 spillere. Hver spiller udgør sit eget hold og har sin egen pointscore.',
  "Rename your teams and enter every player's name.":
    'Giv holdene navne, og indtast navnene på alle spillerne.',
  "Choose a proficiency for each player. By default, questions use that person's level. Intellectual/strategy duels match opponents of the same or one adjacent level; trivia can compare different levels using different questions.":
    'Vælg niveau for hver spiller. Spørgsmålene tilpasses som udgangspunkt den aktive spillers niveau. I videns- og strategidueller har modstanderne højst ét niveaus forskel. I quizdueller kan spillere på forskellige niveauer få forskellige spørgsmål.',
  "Choose a proficiency for each team. By default, questions use that team's level. Intellectual/strategy duels match opponents of the same or one adjacent level; trivia can compare different levels using different questions.":
    'Vælg niveau for hvert hold. Spørgsmålene tilpasses som udgangspunkt det aktive holds niveau. I videns- og strategidueller har modstanderne højst ét niveaus forskel. I quizdueller kan hold på forskellige niveauer få forskellige spørgsmål.',
  'This player is their own team. Their score counts only on their turns.':
    'Spilleren udgør sit eget hold og kan kun få point på sine egne ture.',
  "Who's playing?": 'Hvem skal spille?',
  'YOUR PLAYERS': 'JERES SPILLERE',
  'YOUR TEAMS': 'JERES HOLD',
  'YOUR SQUAD': 'JERES HOLD',
  'PLAYER NAME': 'SPILLERNAVN',
  'Player name': 'Spillernavn',
  'Team name': 'Holdnavn',
  'Player proficiency': 'Spillerens niveau',
  'Team proficiency': 'Holdets niveau',
  'Choose your side': 'Vælg dit hold',
  'Add third player': 'Tilføj en tredje spiller',
  'Remove third player': 'Fjern den tredje spiller',
  'Add another player': 'Tilføj en spiller mere',
  'Add another team': 'Tilføj et hold mere',
  'GAME LENGTH': 'SPILLETS VARIGHED',
  'How many rounds?': 'Hvor mange runder?',
  'Rounds per team': 'Runder pr. hold',
  'One round means every team gets exactly one turn, in order.':
    'En runde betyder, at hvert hold kommer til én gang i rækkefølge.',
  'ESTIMATED GAME LENGTH': 'FORVENTET SPILLETID',
  'Estimate: about 2 minutes 30 seconds for a standard challenge, plus ~30 seconds for rules and scoring. Some games use shorter clocks or no main clock at all, so actual playtime will vary.':
    'Regn med cirka 2 minutter og 30 sekunder pr. udfordring og cirka 30 sekunder til regler og point. Nogle spil har kortere tid eller slet ingen timer, så den samlede spilletid kan variere.',
  'All categories are on by default. Turn off anything your group doesn\'t fancy.':
    'Alle kategorier er valgt som udgangspunkt. Fravælg dem, I ikke ønsker at spille.',
  'Everyone has their own score and gets an equal number of turns. Your setup is saved in this browser.':
    'Alle har deres egen pointscore og får lige mange ture. Jeres indstillinger er gemt i denne browser.',
  'One device controls the game. Your setup is saved in this browser.':
    'Spillet styres fra én enhed. Jeres indstillinger er gemt i denne browser.',
  'Everyone has their own score and gets an equal number of turns.':
    'Alle har deres egen pointscore og får lige mange ture.',
  'Your setup is saved in this browser.':
    'Jeres indstillinger er gemt i denne browser.',
  'Ready to rumble?': 'Er I klar til at spille?',
  'Maximum six players reached.': 'Der kan højst være seks spillere.',
  'Maximum six teams reached.': 'Der kan højst være seks hold.',
  '← Change game format': '← Skift spilform',
  'PLAYERS': 'SPILLERE', 'TEAMS': 'HOLD',
  'GAMES': 'SPIL',
  // Who plays / opponent selection
  'WHO PLAYS?': 'HVEM SPILLER?',
  'All in, together.': 'Alle på holdet samarbejder.',
  'Every member of': 'Alle spillere på',
  'works toward the same point. No defending team in this round.':
    'samarbejder om at få ét point. Der er intet modstanderhold i denne runde.',
  'One player. Six questions.': 'Én spiller besvarer seks spørgsmål.',
  'One member of': 'Én spiller fra',
  'answers alone.': 'besvarer spørgsmålene alene.',
  'Teammates must not help; no defending team participates.':
    'Holdkammeraterne må ikke hjælpe. Der deltager ikke noget modstanderhold.',
  'answers alone. Teammates must not help; no defending team participates.':
    'besvarer spørgsmålene alene. Holdkammeraterne må ikke hjælpe, og der deltager ikke noget modstanderhold.',
  'No defender competes in this round.': 'Der er ingen modstander i denne runde.',
  'Anyone else may check the answers but cannot score.':
    'En anden spiller må kontrollere svarene, men kan ikke selv få point.',
  'Choose the player': 'Vælg spilleren',
  'One player. One rival.': 'Én spiller mod én modstander.',
  'Two players per team: 2v2.': 'To spillere fra hvert hold: 2 mod 2.',
  'Team versus team.': 'Hold mod hold.',
  'THE MATCHUP': 'MODSTANDERNE',
  '✧ APP ASSIGNED': '✧ VALGT AF APPEN',
  '✎ PLAYER CHOICE': '✎ VALGT AF SPILLEREN',
  'The app selected this matchup.': 'Appen har valgt modstanderne.',
  'The active team,': 'Det aktive hold,',
  'chooses BOTH its own player and the opposing player.':
    'vælger både sin egen spiller og modstanderens spiller.',
  'chooses its defending team.': 'vælger modstanderholdet.',
  'Defending team': 'Modstanderhold',
  'ACTIVE PLAYER': 'AKTIV SPILLER',
  'DEFENDER': 'MODSTANDER',
  'ACTIVE TEAM': 'AKTIVT HOLD',
  'DEFENDERS': 'MODSTANDERE',
  'The defending side can stop the point, but never earn one this turn.':
    'Modstanderen kan forhindre det aktive hold i at få point, men kan ikke selv få point på denne tur.',
  '⚖ Neutral judge:': '⚖ Neutral dommer:',
  'watches for the first blink.': 'holder øje med, hvem der blinker først.',
  'judges which dancer wins.': 'afgør, hvem der vinder danseduellen.',
  'decides which headline wins each situation.': 'afgør, hvilken overskrift der vinder i hver situation.',
  '⚖ No neutral team: both sides decide fairly who blinked first; replay disputes.':
    '⚖ Intet neutralt hold: I vurderer i fællesskab, hvem der blinkede først. Ved uenighed spiller I om.',
  '⚖ No neutral team: non-dancing teammates from both teams judge fairly together.':
    '⚖ Intet neutralt hold: De øvrige holdkammerater fra begge hold udpeger sammen vinderen på fair vis.',
  '⚖ No neutral team: both sides decide together. Disagreements count as ties.':
    '⚖ Intet neutralt hold: Begge hold beslutter sammen. Ved uenighed bliver det uafgjort.',
  'Select any TWO players; third sits out': 'Vælg to spillere; den tredje sidder over',
  '✦ REBUS 2v2: Each team selects exactly TWO participating players. If a team has three players, the third must sit out and may not suggest answers.':
    '✦ REBUS 2 MOD 2: Hvert hold vælger præcis to deltagere. Hvis holdet har tre spillere, sidder den tredje over og må ikke hjælpe.',
  // Clock instruction cards, preview warning, timer and equipment
  'CLOCK INSTRUCTIONS': 'TIMERINSTRUKTION',
  'NO MAIN CLOCK NEEDED. Follow the spoken-turn rules; nothing needs to be started.':
    'INGEN TIMER NØDVENDIG. Følg reglerne for skiftende ture på spilkortet.',
  'NO CLOCK NEEDED': 'INGEN TIMER NØDVENDIG',
  'Follow the game-card rules. There is no countdown for this challenge.':
    'Følg reglerne på spilkortet.',
  'NO CLOCK NEEDED. Follow the game-card rules. There is no countdown for this challenge.':
    'INGEN TIMER NØDVENDIG. Følg reglerne på spilkortet.',
  'Start when your team is ready to play.': 'Start timeren, når holdet er klar til at spille.',
  'START the timer BEFORE revealing the game card.':
    'START timeren, før du åbner spilkortet.',
  'The stages switch automatically. No 150-second timer.':
    'Faserne skifter automatisk.',
  'Start memory challenge ↗': 'Start hukommelsesleg ↗',
  '↺ Restart memory challenge': '↺ Start hukommelseslegen forfra',
  '↺ Re-view card (reset both timers)': '↺ Vis kortet igen (nulstil begge timere)',
  'Timer running…': 'Timeren kører…',
  'Resume writing timer ▶': 'Fortsæt skrivetiden ▶',
  'Resume timer ▶': 'Fortsæt timeren ▶',
  'Pause timer': 'Sæt timeren på pause',
  'Start timer ↗': 'Start timeren ↗',
  'Time\'s up ✓': 'Tiden er gået ✓',
  'Only the host controls this timer.': 'Kun værten kan styre timeren.',
  'MIN : SEC': 'MIN : SEK',
  'CLOCK NEEDED': 'TIMER NØDVENDIG',
  'Time is up': 'Tiden er gået',
  'The selected players get': 'De udvalgte spillere får',
  'to study the card. It then hides automatically.':
    'til at se på spilkortet. Derefter skjules det automatisk.',
  'If something goes wrong, use the confirmed re-view option to restart both clocks.':
    'Hvis noget går galt, kan værten efter bekræftelse vise kortet igen og nulstille begge timere.',
  'At this level, the selected players may keep the card visible while drawing. Teammates may not help.':
    'På dette niveau må de udvalgte spillere se kortet, mens de tegner. Holdkammeraterne må ikke hjælpe.',
  'Card is showing': 'Kortet vises',
  'Viewing time is over': 'Visningstiden er slut',
  'Open when ready': 'Åbn, når I er klar',
  'Card viewed ✓': 'Kortet er blevet vist ✓',
  'Card is visible': 'Kortet er synligt',
  'Hide game card': 'Skjul spilkortet',
  'Reveal game card': 'Åbn spilkortet',
  'Some cards contain secret clues. Only the correct player should peek.':
    'Nogle spilkort indeholder hemmelige oplysninger. Kun den udvalgte spiller må se dem.',
  'The secret card is hidden. Continue from memory until the clock finishes.':
    'Det hemmelige kort er skjult. Fortsæt fra hukommelsen, indtil tiden er gået.',
  'Press Start memory challenge: the secret card will show automatically for the first timed stage.':
    'Tryk på »Start hukommelsesleg«. Det hemmelige kort vises automatisk i første fase.',
  'CHOOSE DIFFICULTY': 'VÆLG SVÆRHEDSGRAD',
  'Difficulty level': 'Sværhedsgrad',
  'Change level before judging the result.': '', // legacy instruction removed in prior Dutch feedback
  'Choose before starting the clock or revealing the card.':
    'Vælg niveau, før du starter timeren og åbner spilkortet.',
  'CHOOSE SITUATIONS': 'VÆLG SITUATIONER',
  'Goofy': 'Skøre',
  'Normal / everyday': 'Almindelige / hverdag',
  'No extra equipment': 'Intet ekstra udstyr',
  'Text card and paper': 'Pen/blyant og papir',
  'Text card and paper optional': 'Pen/blyant og papir (valgfrit)',
  'Text card, paper optional': 'Pen/blyant og papir (valgfrit)',
  'Paper and pen': 'Papir og pen',
  'Paper and pencil': 'Papir og blyant',
  'Text card': 'Tekstkort',
  'Stable table; clear space': 'Et stabilt bord og god plads',
  'A phone and your music streaming service': 'En telefon og adgang til en musiktjeneste',
  'THE VERDICT': 'RESULTATET',
  'Only the active team can score. Choose the outcome to switch turns automatically.':
    'Kun det aktive hold kan få point. Vælg resultatet for automatisk at gå videre til næste tur.',
  '✓ Point earned': '✓ Point vundet',
  '× No point': '× Intet point',
  // Previous turns / score
  'No rounds completed yet. The story starts now.':
    'Ingen har været på tur endnu. Eventyret begynder nu.',
  'Round recap': 'Oversigt over de seneste ture',
  'LAST RESULTS': 'SENESTE RESULTATER',
  'FINAL RESULT': 'SLUTRESULTAT',
  'We have a winner!': 'Vi har en vinder!',
  "It's a tie!": 'Det er uafgjort!',
  'Final scoreboard': 'Slutstilling',
  'GUEST VIEW · HOST CONTROLS GAME': 'GÆSTEVISNING · VÆRTEN STYRER SPILLET',
  'CURRENTLY PLAYING': 'DET ER NU',
  'TURN': 'TUR',
  'ROUND': 'RUNDE',
  'Point earned': 'Point vundet',
  'No point awarded': 'Intet point givet',
  'Point': 'Point', 'Points': 'Point',
  'The challenge clock has ended! Stop playing and check whether the active team met its winning condition.':
    'Tiden er gået! Stop spillet, og kontrollér, om det aktive hold opfyldte kravet for at få point.',
  'The 30-second writing stage has ended. Stop writing and reveal the correct digit sequence.':
    'De 30 sekunders skrivetid er gået. Stop med at skrive, og vis den korrekte talrække.',
  'Ask the host to start the next game.': 'Bed værten om at starte næste spil.',
};

Object.assign(exact, {
  'Single-player challenge': 'Soloudfordring',
  '1 vs 1 duel': '1-mod-1-duel',
  'Work together': 'Samarbejde',
  'Team battle': 'Holdkamp',
  '◷ CLOCK INSTRUCTIONS': '◷ TIMERINSTRUKTIONER',
  'CLOCK INSTRUCTIONS': 'TIMERINSTRUKTIONER',
  '◷ NO CLOCK NEEDED': '◷ INGEN TIMER NØDVENDIG',
  '✎ No extra equipment': '✎ Intet ekstra udstyr',
  '✎ Text card and paper': '✎ Pen/blyant og papir',
  '✎ Text card and paper optional': '✎ Pen/blyant og papir (valgfrit)',
  '✎ Text card, paper optional': '✎ Pen/blyant og papir (valgfrit)',
  '✎ Paper and pen': '✎ Papir og pen',
  '✎ Stable table; clear space': '✎ Et stabilt bord og god plads',
  '✎ A phone and your music streaming service': '✎ En telefon og adgang til en musiktjeneste',
  '🛡 The defending side can stop the point, but never earn one this turn.':
    '🛡 Modstanderen kan forhindre det aktive hold i at få point, men kan ikke selv få point på denne tur.',
  'Det er nu': 'PÅ TUR NU',
  'CURRENTLY PLAYING': 'PÅ TUR NU',
  '+ Add third player': '+ Tilføj en tredje spiller',
  '↺ Play another game': '↺ Spil igen',
  'Clear all': 'Fravælg alle',
  'Clear': 'Fravælg alle',
  'Hide': 'Skjul',
  'Choose': 'Vælg',
  'Choose individual games': 'Vælg enkelte spil',
  'Player score': 'Spillerens point',
  'player per team': 'spiller pr. hold',
  'players per team': 'spillere pr. hold',
  'Game on': 'Spillet er i gang',
  'LAST RESULTS': 'SENESTE RESULTATER',
  '◷ NO CLOCK NEEDED. Follow the game-card rules. There is no countdown for this challenge.':
    '◷ INGEN TIMER NØDVENDIG. Følg reglerne på spilkortet.',
});
const trim = s => String(s).trim();
const age = s => `${L[s] || s}`;
const standard = (raw) => {
  const m=raw.match(/^Default:\s*(Beginner|Novice|Amateur|Intermediate|Competent|Skilled|Advanced|Grandmaster)\s*\(([^)]+)\)\.\s*(.*)$/);
  if(!m)return null;
  const prefix=`Standardniveau: ${age(m[1])} (${m[2]}).`;
  return m[3].includes('Change level before judging')?prefix:prefix+' Vælg niveau, før du starter timeren og åbner spilkortet.';
};
export function reviewedDanishInterface(value) {
  if(value == null)return null;
  const raw=String(value),s=trim(raw);
  // Never alter a custom name or already-Danish sentence by accident.
  if(Object.hasOwn(exact,s))return exact[s];
  // Keep literal player/team names stable; a one-letter 'A' must never
  // become the Danish indefinite article 'en'.
  if(/^Hold [A-F]$/.test(s))return s;
  if(/^Team [A-F]$/.test(s))return `Hold ${s.at(-1)}`;
  if(/^Spiller [1-9]$/.test(s))return s;
  if(/^Player [1-9]$/.test(s))return `Spiller ${s.at(-1)}`;
  const def=standard(s); if(def!==null)return def;
  let m;
  if((m=s.match(/^Choose a proficiency for each (player|team)\. By default, questions use that (?:person's|team's) level\. Intellectual\/strategy duels match opponents of the same or one adjacent level; trivia can compare different levels using different questions\.$/)))return exact[m[0]] ?? null;
  if((m=s.match(/^PLAYER (\d+) · ONE-PERSON TEAM$/i)))return `SPILLER ${m[1]} · HOLD MED ÉN SPILLER`;
  if((m=s.match(/^TEAM (\d+)$/)))return `HOLD ${m[1]}`;
  if((m=s.match(/^Player (\d+) (name|proficiency)$/)))return `Spiller ${m[1]} – ${m[2]==='name'?'navn':'niveau'}`;
  if((m=s.match(/^Team (\d+) (name|proficiency)$/)))return `Hold ${m[1]} – ${m[2]==='name'?'navn':'niveau'}`;
  if((m=s.match(/^Team (\d+) player (\d+) name$/)))return `Hold ${m[1]}, spiller ${m[2]} – navn`;
  if((m=s.match(/^Remove (player|team) (\d+)$/)))return `Fjern ${m[1]==='player'?'spiller':'hold'} ${m[2]}`;
  if((m=s.match(/^([A-Za-z]+) · ages (18\+ (hard|expert))$/))&&L[m[1]])return `${L[m[1]]} · fra 18 år (${m[3]==='hard'?'svær':'ekspert'})`;
  if((m=s.match(/^([A-Za-z]+) · ages (.+)$/))&&L[m[1]])return `${L[m[1]]} · alder ${m[2]}`;
  if((m=s.match(/^(Advanced|Grandmaster) \(18\+ (hard|expert)\)$/)))return `${L[m[1]]} (18+ · ${m[2]==='hard'?'svær':'ekspert'})`;
  if((m=s.match(/^(Beginner|Novice|Amateur|Intermediate|Competent|Skilled|Advanced|Grandmaster) \((.+)\)$/)))return `${L[m[1]]} (${m[2]})`;
  if((m=s.match(/^(Beginner|Novice|Amateur|Intermediate|Competent|Skilled|Advanced|Grandmaster) \(([^)]+)\) · not available for this game$/)))return `${L[m[1]]} (${m[2].replace(' hard',' · svær').replace(' expert',' · ekspert')}) · ikke tilgængeligt i dette spil`;
  if((m=s.match(/^(.+?) · ages (.+)$/)))return `${m[1]} · alder ${m[2]}`;
  if((m=s.match(/^of (\d+) categories enabled$/)))return `af ${m[1]} kategorier valgt`;
  if((m=s.match(/^(?:Hold|Team|Spiller|Player) [A-F1-9]: (Beginner|Novice|Amateur|Intermediate|Competent|Skilled|Advanced|Grandmaster) \(([^)]+)\)$/))){
    const who=m[0].split(':')[0].replace(/^Team /,'Hold ').replace(/^Player /,'Spiller ');
    return `${who}: ${L[m[1]]} (${m[2].replace(' hard',' · svær').replace(' expert',' · ekspert')})`;
  }
  if(s==='to study the card. It then hides automatically. You cannot reveal it again.')return 'til at studere spilkortet. Derefter skjules det automatisk. Kortet kan ikke vises igen.';
  if((m=s.match(/^to study the card\. It then hides automatically\.(.*)$/)))return `til at studere spilkortet. Derefter skjules det automatisk.${m[1] ? ' Hvis noget går galt, kan værten efter bekræftelse vise kortet igen og nulstille begge timere.' : ''}`;
  if((m=s.match(/^to study the card\. It then hides automatically\. You cannot reveal it again\.$/)))return 'til at studere spilkortet. Derefter skjules det automatisk. Kortet kan ikke vises igen.';
  if((m=s.match(/^~(\d+) minutes$/)))return `cirka ${m[1]} minutter`;
  if((m=s.match(/^(\d+) turns overall · ~(\d+) minutes per full round$/)))return `${m[1]} ture i alt · cirka ${m[2]} minutter pr. runde`;
  if((m=s.match(/^(\d+) of (\d+) categories enabled$/)))return `${m[1]} af ${m[2]} kategorier valgt`;
  if((m=s.match(/^(\d+) \/ (\d+) minigames$/)))return `${m[1]} af ${m[2]} minispil`;
  if((m=s.match(/^(.+?) plays alone\.$/)))return `${m[1]} spiller alene.`;
  if((m=s.match(/^No defender competes in this round\. (.+?) must meet the listed target to earn the point\. Anyone else may check the answers but cannot score\.$/)))return `Der er ingen modstander i denne runde. ${m[1]} skal nå målet for at få et point. En anden spiller må kontrollere svarene.`;
  if((m=s.match(/^The active player, (.+?), chooses an opponent\.$/)))return `Den aktive spiller, ${m[1]}, vælger en modstander.`;
  if((m=s.match(/^The active team, (.+?), chooses BOTH its own player and the opposing player\.$/)))return `Det aktive hold, ${m[1]}, vælger både sin egen spiller og en spiller fra modstanderholdet.`;
  if((m=s.match(/^The active team, (.+?), chooses its defending team\.$/)))return `Det aktive hold, ${m[1]}, vælger modstanderholdet.`;
  if((m=s.match(/^CLOCK NEEDED: (\d+) seconds\. START the timer BEFORE revealing the game card\.$/)))return `TIMER NØDVENDIG: ${m[1]} sekunder. START timeren, før du åbner spilkortet.`;
  if((m=s.match(/^CLOCK NEEDED: (\d+) seconds\. Start when your team is ready to play\.$/)))return `TIMER NØDVENDIG: ${m[1]} sekunder. Start timeren, når holdet er klar til at spille.`;
  if((m=s.match(/^Start the (\d+)-second timer before revealing this card\.$/)))return `Start timeren på ${m[1]} sekunder, før du åbner spilkortet.`;
  if((m=s.match(/^⏱ Start the (\d+)-second timer before revealing this card\.$/)))return `⏱ Start timeren på ${m[1]} sekunder, før du åbner spilkortet.`;
  if((m=s.match(/^CLOCK NEEDED\. Press Start: (\d+)s (?:study|memorize) → (\d+)s (?:write|write from memory)\. The stages switch automatically\. No 150-second timer\.$/)))return `TIMER NØDVENDIG. Tryk på »Start hukommelsesleg«: ${m[1]} sekunder til at huske kortets indhold → ${m[2]} sekunder til at skrive det ned fra hukommelsen. Faserne skifter automatisk.`;
  if((m=s.match(/^CLOCK NEEDED\. Press Start: (.+)\. The stages switch automatically\. No 150-second timer\.$/)))return `TIMER NØDVENDIG. Tryk på »Start hukommelsesleg«: ${m[1].replace(/\b(\d+)s\s+study\b/gi,'$1 sekunder til at huske').replace(/\b(\d+)s\s+write from memory\b/gi,'$1 sekunder til at skrive ned fra hukommelsen')}. Faserne skifter automatisk.`;
  if((m=s.match(/^STAGE (\d+) OF (\d+): (.+)$/)))return `FASE ${m[1]} AF ${m[2]}: ${/^study|memor/i.test(m[3])?'HUSK':/^writ/i.test(m[3])?'SKRIV':m[3]}`;
  if((m=s.match(/^(\d+)-SECOND CHALLENGE$/)))return `${m[1]} SEKUNDERS UDFORDRING`;
  if((m=s.match(/^Card hides in (\d+) seconds$/)))return `Kortet skjules om ${m[1]} sekunder`;
  if((m=s.match(/^Reveal for (\d+) seconds$/)))return `Vis kortet i ${m[1]} sekunder`;
  if((m=s.match(/^([\w\sÀ-ÿ]+) · not available for this game$/)))return `${m[1]} · ikke muligt i dette spil`;
  if((m=s.match(/^Did (.+?) win\?$/)))return `Har ${m[1]} vundet?`;
  if((m=s.match(/^LAST (\d+) RESULTS$/)))return `SENESTE ${m[1]} RESULTATER`;
  if((m=s.match(/^(\d+) rounds per team · (\d+) turns played · (\d+) points awarded$/)))return `${m[1]} runder pr. hold · ${m[2]} ture spillet · ${m[3]} point uddelt`;
  if((m=s.match(/^The 90-second writing stage is over\. Stop writing, reveal the original list and count both (players'|teams') correct words\.$/)))return `De 90 sekunders skrivetid er gået. Stop med at skrive, vis ordlisten, og tæl de rigtige ord for begge ${m[1]==="players'"?'spillere':'hold'}.`;
  if((m=s.match(/^GAME COMPLETE · VERSION (.+)$/)))return `SPILLET ER SLUT · VERSION ${m[1]}`;
  if((m=s.match(/^([0-9]+) (point|points)$/)))return `${m[1]} point`;
  return null;
}
