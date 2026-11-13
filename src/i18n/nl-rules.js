/** Fluent, hand-edited Dutch rule copy for every playable V4.2 minigame.
 * Keep the English rules, pack data and scoring state unchanged. */
const RANKS = ['beginner','novice','amateur','intermediate','competent','skilled','advanced','grandmaster'];
const COUNT_DOWN = [3,4,5,7,8,10,12,15];
const STORY_END = ['D','D','D','F','F','J','T','Z'];
const STORY_COUNT = [4,4,4,6,6,10,20,26];
export function dutchGameRules(game, round, content) {
  const idx=Math.max(0,RANKS.indexOf(round.difficulty));
  const soloFormat=round.format === 'single';
  const soloRound=round.mode === 'solo';
  const duel=round.mode === 'duel' || round.mode === 'battle';
  const active=soloFormat?'de actieve speler':'het actieve team';
  const who=soloFormat?'de speler':'het team';
  const isOpponent=duel;
  const nFromPrompt=(content.prompts?.[0]?.answer||'').split('\n').filter(x=>/^\d+\./.test(x)).length;
  const categories=idx<=1?8:10;
  const d={description:'',win:''};
  switch(game.id){
    case 'category-flood':
      if (soloFormat && isOpponent) {
        d.description='1-tegen-1. Start de timer van 150 seconden voordat je de speelkaart toont. Schrijf allebei apart zo veel mogelijk verschillende geldige antwoorden uit DEZELFDE categorie op papier. Schrijf niet bij elkaar over. Vergelijk de lijsten na afloop.';
        d.win='De actieve speler scoort alleen als die meer verschillende goede antwoorden heeft dan de tegenstander. Bij een gelijkspel verdient niemand een punt.';
      } else if(soloFormat){
        d.description=`Soloversie. Start de timer van 150 seconden voordat je de kaart opent. Noem of schrijf zelfstandig ${categories} verschillende juiste antwoorden binnen de categorie. Een niet-deelnemer controleert de antwoorden en dubbele woorden.`;
        d.win=`De actieve speler verdient één punt met ${categories} verschillende goede antwoorden in 150 seconden.`;
      } else {
        d.description=`Start de timer van 150 seconden voordat je de speelkaart opent. Noem samen ${categories} verschillende woorden uit de categorie. Een speler van een ander team telt de goede antwoorden en controleert op dubbelen.`;
        d.win=`Het actieve team verdient één punt met ${categories} verschillende goede antwoorden binnen 150 seconden.`;
      }break;
    case 'last-letter-duel':
      d.description=soloFormat||round.mode==='duel'?'1-tegen-1, zonder hoofdtimer. Begin met het woord op de kaart. Zeg om de beurt een nieuw woord dat begint met de laatste letter van het vorige woord. Je hebt vijf seconden per beurt.':'Teamstrijd, zonder klok. Ga met alle spelers van beide teams in een kring zitten. Begin met het woord op de speelkaart en speel met de klok mee. Ieder woord moet beginnen met de laatste letter van het vorige woord. Elke speler heeft vijf seconden om te antwoorden.';
      d.win=`${active.charAt(0).toUpperCase()+active.slice(1)} scoort alleen als de tegenstander als eerste geen geldig nieuw woord weet, te laat is of een woord herhaalt.`;break;
    case 'rhyme-rally':
      d.description=soloFormat?'1-tegen-1. Geen hoofdtimer. Begin met het woord op de kaart. De actieve speler zegt eerst een ANDER rijmwoord. Zeg daarna om de beurt een nieuw rijmwoord. Je hebt vijf seconden per antwoord; herhalen mag niet.':'Geen hoofdtimer. Begin met het woord op de kaart. Een speler van het actieve team noemt als eerste een ANDER rijmwoord. Ga daarna met de klok mee langs ALLE spelers van beide teams. Iedereen heeft vijf seconden per antwoord.';
      d.description+=idx<4?' Bijna-rijmwoorden zijn ook goed.':' Alleen echte eindrijmen tellen mee.';
      d.win=`${active.charAt(0).toUpperCase()+active.slice(1)} scoort wanneer de tegenstander als eerste geen geldig rijmwoord kan noemen, te laat is of een woord herhaalt.`;break;
    case 'team-trivia':
      d.description=soloFormat?'Soloversie. Beantwoord zelf vijf vragen op jouw niveau. Teamgenoten mogen niet helpen. Schrijf één antwoord per vraag en controleer ze na afloop.':'Werk samen aan vijf vragen op het niveau van jullie team. Overleg en schrijf één antwoord per vraag. Er is geen tegenstander in deze ronde.';
      d.win=soloFormat?'Beantwoord minstens 3 van de 5 vragen goed om het punt te verdienen.':'Beantwoord minstens 4 van de 5 vragen goed om het punt te verdienen.';break;
    case 'quickfire-facts':
      d.description=soloFormat?(soloRound?'Soloversie. De actieve speler beantwoordt zelfstandig zes vragen op eigen niveau.':'1-tegen-1. Beide spelers beantwoorden onafhankelijk zes vragen, ieder op het eigen niveau.'):'Eén gekozen speler beantwoordt zes vragen op het eigen niveau. Teamgenoten mogen niet helpen. In een duel krijgt iedere speler een eigen vragenkaart.';
      d.win=soloFormat?(soloRound?'Beantwoord minstens 3 van de 6 vragen goed om een punt te verdienen.':'De actieve speler verdient alleen een punt met minstens 3 van de 6 vragen goed én meer goede antwoorden dan de tegenstander. Bij gelijkspel geen punt.'):'De actieve speler verdient alleen een punt met minstens 4 van de 6 vragen goed én meer goede antwoorden dan de tegenstander (bij een duel). Bij gelijkspel geen punt.';break;
    case 'trivia-board':
      d.description=soloFormat?'1-tegen-1. Beantwoord allebei afzonderlijk zes vragen, ieder op eigen niveau. Er zijn meerkeuzevragen, open vragen en gemengde kaarten. Vergelijk de antwoorden na afloop.':'Alleen team-tegen-team. Beide teams beantwoorden apart zes vragen op hun eigen niveau. Dit zijn meerkeuzevragen, open vragen of een combinatie. Schrijf de antwoorden op en vergelijk ze na afloop.';
      d.win=soloFormat?'De actieve speler verdient alleen een punt als die meer vragen goed beantwoordt dan de tegenstander. Gelijkspel levert geen punt op.':'Het actieve team verdient alleen een punt als het meer vragen goed beantwoordt dan de tegenstander. Gelijkspel levert geen punt op.';break;
    case 'sketch-guess':
      d.description='Start de timer van 150 seconden voordat je de geheime kaart opent. Eén speler van het actieve team tekent het opgegeven woord, zonder woorden of letters te schrijven. De andere teamleden raden.';
      d.win='Het actieve team verdient een punt als het binnen 150 seconden minstens vier van de zes afbeeldingen juist raadt.';break;
    case 'shape-copy':
      d.description=`Start de timer van 150 seconden vóór het openen van de kaart. Alleen de twee gekozen spelers mogen naar de omschrijving van de tekening kijken; hun teamgenoten kijken weg. ${content.alwaysVisible?'Op dit niveau mag de omschrijving tijdens het tekenen zichtbaar blijven.':`Na ${content.previewSeconds||15} seconden verdwijnt de kaart automatisch. Teken daarna uit je geheugen.`} Als er iets fout gaat, gebruik dan de resetknop om de tijd opnieuw te starten.`;
      d.win='De actieve speler verdient alleen een punt als diens tekening meer juist geplaatste details bevat dan die van de tegenstander. Bij gelijkspel geen punt.';break;
    case 'picture-race':
      d.description='Start de timer van 150 seconden vóór het tonen van de speelkaart. Alle teamleden tekenen samen ÉÉN afbeelding. Iedereen moet iets toevoegen. Er wordt niets geraden; voeg zo veel mogelijk gevraagde details toe. Een ander team controleert de tekening na afloop.';
      d.win='Verdien het punt door binnen 150 seconden voldoende gevraagde details herkenbaar in de gezamenlijke tekening op te nemen. De kaart vermeldt hoeveel.';break;
    case 'shopping-basket':
      d.description='1-tegen-1, zonder hoofdtimer. Begin met het boodschappenartikel op de speelkaart. Zeg om de beurt: “Ik ging boodschappen doen en kocht…”. Herhaal ALLE eerdere artikelen in dezelfde volgorde en voeg er één nieuw artikel aan toe.';
      d.win='De actieve speler verdient alleen een punt als de tegenstander als eerste een artikel vergeet, de volgorde verandert of niet op tijd begint.';break;
    case 'digit-duel':
      d.description=soloFormat?`Geheugenspel met twee fases: bekijk de ${COUNT_DOWN[idx]} cijfers 20 seconden en schrijf daarna binnen 30 seconden de reeks uit je geheugen op. ${isOpponent?'1-tegen-1: beide spelers bekijken DEZELFDE reeks en schrijven afzonderlijk.':'Soloversie: de actieve speler speelt alleen.'} Is de timer per ongeluk gestart, dan kun je na bevestiging opnieuw beginnen.`:`De twee gekozen spelers bekijken gedurende 20 seconden een reeks van ${COUNT_DOWN[idx]} cijfers. Daarna verdwijnt de kaart en krijgen zij 30 seconden om de cijfers uit hun geheugen op te schrijven. `;
      d.win=soloFormat?(isOpponent?'De actieve speler verdient alleen een punt als die meer juiste cijfers in de juiste volgorde onthoudt dan de tegenstander.':'De actieve speler verdient alleen een punt als die de hele cijferreeks correct opschrijft.'):'De actieve speler verdient het punt wanneer die meer cijfers correct op de juiste plaats heeft staan dan de tegenstander.';break;
    case 'word-recall-battle':
      d.description=soloFormat?'1-tegen-1. Beide spelers bekijken DEZELFDE lijst van 16 woorden gedurende 25 seconden. Daarna verdwijnt de kaart en schrijf je 90 seconden lang zo veel mogelijk woorden uit de lijst op. Vergelijk de lijsten als de antwoorden worden getoond.':'Druk op Start. Elk team bekijkt zijn geheime lijst 25 seconden. Als de woorden verdwijnen, schrijf je in 90 seconden zo veel mogelijk woorden op die je NET HEBT GEZIEN. Schrijf niet tijdens het bekijken. De host toont de lijst wanneer de tijd voorbij is.';
      d.win=`${active.charAt(0).toUpperCase()+active.slice(1)} scoort alleen als die meer verschillende goed onthouden woorden opschrijft dan de tegenstander. Gelijkspel betekent geen punt.`;break;
    case 'missing-numbers':
      d.description=soloFormat?'Soloversie. Start de timer van 150 seconden voordat je de kaart opent. Los zelfstandig acht cijferreeksen op.':'Start EERST de timer van 150 seconden, open DAARNA de kaart. Los samen de acht cijferreeksen op.';
      d.win='Beantwoord minstens zes van de acht ontbrekende getallen goed binnen 150 seconden om het punt te verdienen.';break;
    case 'clock-duel':
      d.description=soloFormat?'Soloversie. Start de timer van 150 seconden voordat je de kaart opent. Bereken zelfstandig zes tijdvragen met de 24-uursklok.':'Beide gekozen spelers lossen onafhankelijk vragen over tijd en tijdzones op. Gebruik de 24-uursklok.';
      d.win=soloFormat?'De actieve speler moet alle zes tijdvragen goed beantwoorden binnen 150 seconden om een punt te verdienen.':'De actieve speler verdient alleen een punt als die meer tijdsvragen goed heeft dan de tegenstander.';break;
    case 'target-number':
      d.description=`Start de timer van 60 seconden voordat je de kaart opent. Maak met de gegeven getallen een geldige berekening die zo dicht mogelijk bij het doelgetal komt.${round.difficulty==='novice'?' Gebruik alleen optellen en aftrekken met getallen tot en met 20.':''}`;
      d.win='De actieve speler verdient alleen een punt als diens geldige berekening dichter bij het doelgetal uitkomt dan die van de tegenstander. Bij gelijkspel geen punt.';break;
    case 'silent-charades':
      d.description='Start de timer van 150 seconden voordat de speler de geheime kaart bekijkt. De speler beeldt de opdrachten één voor één uit zonder woorden of geluiden. Teamgenoten raden de handelingen.';
      d.win='Het team verdient het punt als het binnen 150 seconden genoeg handelingen juist raadt. Op de kaart staat hoeveel.';break;
    case 'reaction-rules':
      d.description=`De tegenstander leest de getallen één voor één voor in het tempo op de kaart. De actieve speler voert steeds de bijbehorende beweging uit. De regels kunnen halverwege omschakelen.${round.difficulty==='beginner'?' Bij Beginner mogen de regels tussendoor nog worden herhaald.':''}${round.difficulty==='novice'?' Oneven getallen kun je niet door 2 delen zonder rest; even getallen wel.':''}${round.difficulty==='intermediate'?' Vertel tijdens het spel NIET wanneer de regel omschakelt: de speler moet dit onthouden.':''}`;
      d.win='De actieve speler verdient alleen een punt met NUL fouten. De voorlezer uit het verdedigende team controleert alle reacties.';break;
    case 'mime-relay':
      d.description='Begin de timer van 150 seconden voordat je de kaart toont. Een speler beeldt de tien opdrachten uit, terwijl de teamgenoten ze raden. Gebruik geen woorden; speel de acties één voor één uit.';
      d.win=`Raad binnen 150 seconden minstens ${idx>=6?'tien':idx>=4?'negen':'acht'} van de tien opdrachten goed om het punt te verdienen.`;break;
    case 'alphabet-story':
      d.description=soloFormat?`1-tegen-1: vertel om de beurt één zin van hetzelfde doorlopende verhaal. De beginletters moeten op volgorde van A tot ${STORY_END[idx]} gaan. Wie als eerste een fout maakt, verliest.`:`Start de timer van 150 seconden VOORDAT je het verhaalthema toont. Vertel samen één doorlopend verhaal. Elke volgende zin begint met de volgende letter, van A tot en met ${STORY_END[idx]}.`;
      d.win=soloFormat?'De actieve speler krijgt alleen een punt als de tegenstander EERDER een fout maakt. Als het volledige alfabetverhaal goed wordt afgemaakt, wint de tegenstander en krijgt de actieve speler geen punt.':`Voltooi alle ${STORY_COUNT[idx]} samenhangende zinnen met de juiste beginletters binnen 150 seconden.`;break;
    case 'alliteration-duel':
      d.description=`Start de timer van 150 seconden VOORDAT je de letter toont. Beide spelers schrijven zo veel mogelijk verschillende, begrijpelijke zinnetjes van ${idx<=4?2:idx<=6?3:4} woorden op. Elk woord begint met de letter op de kaart. Het voorbeeld op de kaart telt NIET mee.`;
      d.win='De actieve speler scoort alleen als die in 150 seconden meer juiste en verschillende alliteraties bedenkt dan de tegenstander.';break;
    case 'headline-teams':
      d.description=`Start de timer van 150 seconden VOORDAT de ${idx<=2?4:6} situaties verschijnen. Bedenk voor elke situatie een grappige krantenkop van maximaal TIEN woorden. Kies gewone of gekke situaties. Beide teams maken afzonderlijk koppen.`;
      d.win='De actieve speler of het actieve team verdient alleen een punt door MEER situaties te winnen dan de tegenstander. Een neutraal derde team beoordeelt indien beschikbaar; anders beslis je samen. Een gelijkspel levert geen punt op.';break;
    case 'codebreaker':
      d.description=soloFormat?`Soloversie. Start de timer van 150 seconden voordat je de kaart onthult. Ontcijfer zelfstandig ${nFromPrompt} woorden met de lettercode A=1 tot Z=26.`:`Start de timer van 150 seconden voordat je de kaart opent. Gebruik de code A=1 tot Z=26 om ${nFromPrompt} woorden te ontcijferen.`;
      d.win=soloFormat?`De actieve speler verdient een punt met minstens 3 van de ${nFromPrompt} woorden goed binnen 150 seconden.`:`Het team moet ${idx<=1?`minstens 3 van de ${nFromPrompt}`:`alle ${nFromPrompt}`} woorden goed ontcijferen binnen 150 seconden.`;break;
    case 'count-to-thirty':
      d.description=`Begin bij 1 en noem om de beurt één, twee of drie opeenvolgende getallen. Wie ${idx<=2?20:30} zegt, verliest.`;
      d.win=`De actieve speler krijgt alleen een punt als de tegenstander gedwongen wordt ${idx<=2?20:30} te zeggen.`;break;
    case 'rps-council':
      d.description='Steen-papier-schaar, om drie gewonnen rondes. Beide kanten kiezen in het geheim één teken. Toon tegelijk: steen verslaat schaar, schaar verslaat papier, papier verslaat steen. Een GELIJKSPEL telt NIET als ronde: probeer dezelfde ronde opnieuw. Geen hoofdtimer.';
      d.win='De actieve speler of het actieve team krijgt alleen een punt als die ALS EERSTE drie beslissende rondes wint. Een gelijkspel telt nooit mee.';break;
    case 'staring-contest':
      d.description='1-tegen-1, zonder timer. Kijk elkaar in de ogen zonder te knipperen. Wie het eerst knippert, verliest. Als er een neutraal derde team is, kijkt iemand van dat team mee als scheidsrechter. Anders beslissen jullie samen eerlijk; speel bij twijfel opnieuw.';
      d.win='De actieve speler verdient alleen een punt als de tegenstander het eerst knippert.';break;
    case 'make-laugh':
      d.description='1-tegen-1. Probeer de tegenstander binnen 60 seconden aan het lachen te krijgen. Grappige gezichten, praten, geluiden en gekke bewegingen zijn toegestaan. De verdediger probeert serieus te blijven.';
      d.win='De actieve speler krijgt alleen een punt als de tegenstander binnen 60 seconden lacht.';break;
    case 'rebus':
      d.description=`Rebus met ${idx<=1?3:idx<=3?4:idx<=5?5:idx===6?6:7} vragen. Start de timer van 150 seconden voordat ${soloFormat?'beide spelers':'beide teams'} de speelkaart te zien krijgen. Beantwoord de quizvragen en neem van elk antwoord de gevraagde letter. Samen vormen ze het geheime woord. Iedereen heeft maar ÉÉN definitieve gok.`;
      d.win='Wie als eerste het geheime woord goed raadt, wint. Een fout antwoord geeft het andere team direct de overwinning. Alleen het actieve team of de actieve speler kan in deze beurt een punt verdienen.';break;
    case 'arm-wrestling':
      d.description='1-tegen-1. Ga aan een stevige tafel zitten, zet beide ellebogen neer en houd elkaars hand vast. Tel af en begin tegelijk. Stop direct als iets pijn doet. Geen timer.';
      d.win='De actieve speler verdient alleen een punt als die het armpje drukken wint. Wint de tegenstander, dan is er geen punt.';break;
    case 'riddle-round':{
      const settings=[[0,0],[2,1],[3,2],[3,2],[3,2],[3,2],[4,3],[5,4]][idx];
      d.description=`Start de timer van 150 seconden VOORDAT je de kaart toont. Beantwoord ${settings[0]} raadsels. Je moet er minstens ${settings[1]} goed hebben. Een andere speler controleert de antwoorden nadat de tijd verstreken is.`;
      d.win=`${active.charAt(0).toUpperCase()+active.slice(1)} verdient een punt als minstens ${settings[1]} van de ${settings[0]} raadsels goed geraden is binnen 150 seconden.`;
      break;}
    default:
      if(game.id.startsWith('topic-trivia-')){
        d.description=soloFormat?'1-tegen-1. Beantwoord allebei vijf vragen over het gekozen onderwerp. Gebruik je eigen niveau. Spelers met hetzelfde niveau zien DEZELFDE kaart; verschillende niveaus krijgen elk een passende kaart.':'Teamstrijd. Beide teams beantwoorden onafhankelijk vijf vragen over het gekozen onderwerp. Gebruik de moeilijkheidsgraad van ieder team. Bij een gelijk niveau spelen beide teams met DEZELFDE vragenkaart.';
        d.win='De actieve speler of het actieve team verdient alleen een punt met MEER goede antwoorden dan de tegenstander. Bij een gelijkspel geen punt.';
      }else return content;
  }
  return {...content, description:d.description, win:d.win};
}
