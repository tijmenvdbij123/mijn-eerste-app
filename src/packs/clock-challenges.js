// V4.13: harder, answer-checked Clock Duel cards from Intermediate onward.
// Amateur and all other pre-existing cards remain untouched.
// The same underlying time calculations are presented in EN/NL/DA so a
// change of device language never changes the correct result.
const LEVELS = ["intermediate", "competent", "skilled", "advanced", "grandmaster"];
const pad = n => String(n).padStart(2,"0");
const time = mins => `${pad(((Math.floor(mins)%1440)+1440)%1440/60|0)}:${pad(((Math.floor(mins)%60)+60)%60)}`;
const hms = sec => `${time(Math.floor(sec/60))}:${pad(((sec%60)+60)%60)}`;
const plus = (h,m) => h*60+m;
const withDay = (mins, lang) => {
  const day=Math.floor(mins/1440);
  const suffix=day===0?"":lang==="nl"?(day>0?` (volgende dag${day>1?` +${day-1}`:""})`:` (vorige dag${day < -1?` −${-day-1}`:""})`):lang==="da"?(day>0?` (næste dag${day>1?` +${day-1}`:""})`:` (forrige dag${day < -1?` −${-day-1}`:""})`):(day>0?` (next day${day>1?` +${day-1}`:""})`:` (previous day${day < -1?` −${-day-1}`:""})`);
  return time(mins)+suffix;
};
const q=(en,nl,da,answer) => ({en,nl,da,answer});
function build(level,pack) {
  const p=pack;
  const base=9*60+17+p*7;
  const questions=[];
  if(level==="intermediate") {
    const d1=plus(1,25+p*4), d2=plus(1,35+p*3);
    questions.push(q(`What time is ${Math.floor(d1/60)}h ${d1%60}m after ${time(base)}?`,`Hoe laat is het ${Math.floor(d1/60)} uur en ${d1%60} minuten na ${time(base)}?`,`Hvad er klokken ${Math.floor(d1/60)} time og ${d1%60} minutter efter ${time(base)}?`,l=>withDay(base+d1,l)));
    const b=13*60+11+p*6;
    questions.push(q(`What time is 1h ${35+p*3}m before ${time(b)}?`,`Hoe laat is het 1 uur en ${35+p*3} minuten vóór ${time(b)}?`,`Hvad er klokken 1 time og ${35+p*3} minutter før ${time(b)}?`,l=>withDay(b-d2,l)));
    const depart=8*60+15+p*4, arr=depart+plus(2,25+p*3);
    questions.push(q(`A trip starts at ${time(depart)} and ends at ${time(arr)}. How many hours and minutes does it last?`,`Een reis begint om ${time(depart)} en eindigt om ${time(arr)}. Hoe lang duurt de reis in uren en minuten?`,`En tur begynder kl. ${time(depart)} og slutter kl. ${time(arr)}. Hvor mange timer og minutter varer den?`,()=>`${Math.floor((arr-depart)/60)}h ${pad((arr-depart)%60)}m`));
    const bus=17*60+38+p*5,total=plus(1,10+p*2)+15+42;
    questions.push(q(`A bus leaves at ${time(bus)}, drives 1h ${10+p*2}m, waits 15m and drives another 42m. Arrival time?`,`Een bus vertrekt om ${time(bus)}, rijdt 1 uur en ${10+p*2} minuten, wacht 15 minuten en rijdt nog 42 minuten. Hoe laat komt hij aan?`,`En bus kører kl. ${time(bus)}, kører 1 time og ${10+p*2} minutter, holder pause i 15 minutter og kører 42 minutter mere. Hvornår er den fremme?`,l=>withDay(bus+total,l)));
    const night=23*60+31+p*4;
    questions.push(q(`What time is ${55+p*4} minutes after ${time(night)}?`,`Hoe laat is het ${55+p*4} minuten na ${time(night)}?`,`Hvad er klokken ${55+p*4} minutter efter ${time(night)}?`,l=>withDay(night+55+p*4,l)));
    const early=65+p*4;
    questions.push(q(`What time was it 90 minutes before ${time(early)}?`,`Hoe laat was het 90 minuten vóór ${time(early)}?`,`Hvad var klokken 90 minutter før ${time(early)}?`,l=>withDay(early-90,l)));
  } else if(level==="competent") {
    const b=21*60+39+p*3,d=plus(3,35+p*2);
    questions.push(q(`Add 3h ${35+p*2}m to ${time(b)}. Give the day if it changes.`,`Tel 3 uur en ${35+p*2} minuten op bij ${time(b)}. Vermeld een nieuwe dag indien nodig.`,`Læg 3 timer og ${35+p*2} minutter til ${time(b)}. Angiv, hvis dagen skifter.`,l=>withDay(b+d,l)));
    const e=2*60+11+p*5;
    questions.push(q(`What time is 4h ${15+p*2}m before ${time(e)}?`,`Hoe laat is het 4 uur en ${15+p*2} minuten vóór ${time(e)}?`,`Hvad er klokken 4 timer og ${15+p*2} minutter før ${time(e)}?`,l=>withDay(e-plus(4,15+p*2),l)));
    const start=22*60+40+p*2, end=24*60+plus(2,22+p*5);
    questions.push(q(`How long is it from ${time(start)} to ${time(end)} the NEXT day?`,`Hoe lang is het van ${time(start)} tot ${time(end)} de VOLGENDE dag?`,`Hvor lang tid går der fra ${time(start)} til ${time(end)} NÆSTE dag?`,()=>`${Math.floor((end-start)/60)}h ${pad((end-start)%60)}m`));
    const depart=15*60+42+p*4,total=plus(2,38+p)+22+plus(1,26+p);
    questions.push(q(`A train departs ${time(depart)}, runs 2h ${38+p}m, stops 22m, then runs 1h ${26+p}m. Arrival?`,`Een trein vertrekt om ${time(depart)}, rijdt 2 uur en ${38+p} minuten, stopt 22 minuten en rijdt dan 1 uur en ${26+p} minuten. Aankomsttijd?`,`Et tog kører kl. ${time(depart)}, kører 2 timer og ${38+p} minutter, holder stille i 22 minutter og kører yderligere 1 time og ${26+p} minutter. Ankomst?`,l=>withDay(depart+total,l)));
    const f=18*60+25+p*4, duration=plus(2,45+p*3),offset=2;
    questions.push(q(`Flight departs at ${time(f)}, lasts 2h ${45+p*3}m. Destination is 2h AHEAD. Local arrival time?`,`Een vlucht vertrekt om ${time(f)}, duurt 2 uur en ${45+p*3} minuten. De bestemming loopt 2 uur VOOR. Wat is de lokale aankomsttijd?`,`Et fly afgår kl. ${time(f)} og flyver 2 timer og ${45+p*3} minutter. Destinationen er 2 timer FORAN. Lokal ankomsttid?`,l=>withDay(f+duration+offset*60,l)));
    const sec=11*3600+58*60+39+p*2, add=4*60+37+p;
    questions.push(q(`Add 4m ${37+p}s to ${hms(sec)}.`,`Tel 4 minuten en ${37+p} seconden op bij ${hms(sec)}.`,`Læg 4 minutter og ${37+p} sekunder til ${hms(sec)}.`,()=>hms(sec+add)));
  } else if(level==="skilled") {
    const dep=23*60+16+p*6,duration=plus(6,28+p*3),offset=-4;
    questions.push(q(`Flight leaves at ${time(dep)}, flies 6h ${28+p*3}m. Destination is 4 hours BEHIND. Give local arrival and day.`,`Een vlucht vertrekt om ${time(dep)}, duurt 6 uur en ${28+p*3} minuten. De bestemming loopt 4 uur ACHTER. Geef lokale tijd en dag.`,`Et fly afgår kl. ${time(dep)} og flyver 6 timer og ${28+p*3} minutter. Destinationen er 4 timer BAGUD. Angiv lokal ankomsttid og dag.`,l=>withDay(dep+duration+offset*60,l)));
    const at=22*3600+58*60+47+p, add=plus(2,32+p)*60+(29+p);
    questions.push(q(`Add 2h ${32+p}m ${29+p}s to ${hms(at)}.`,`Tel 2 uur, ${32+p} minuten en ${29+p} seconden op bij ${hms(at)}.`,`Læg 2 timer, ${32+p} minutter og ${29+p} sekunder til ${hms(at)}.`,l=>hms(at+add)+ (Math.floor((at+add)/86400)>0?(l==='nl'?' (volgende dag)':l==='da'?' (næste dag)':' (next day)'):'')));
    const start=6*60+14+p*3, t=plus(4,18+p*2)+45+plus(2,39+p);
    questions.push(q(`A trip starts at ${time(start)}; travel 4h ${18+p*2}m, rest 45m, then travel 2h ${39+p}m. Arrival?`,`Een reis begint om ${time(start)}: 4 uur en ${18+p*2} minuten reizen, 45 minuten pauze en nog 2 uur en ${39+p} minuten reizen. Aankomst?`,`En rejse starter kl. ${time(start)}: 4 timer og ${18+p*2} minutter, 45 minutters pause og yderligere 2 timer og ${39+p} minutter. Ankomst?`,l=>withDay(start+t,l)));
    const a=11*3600+57*60+(43+p),b=12*3600+3*60+12+p*3;
    questions.push(q(`How many SECONDS pass from ${hms(a)} to ${hms(b)}?`,`Hoeveel SECONDEN zitten tussen ${hms(a)} en ${hms(b)}?`,`Hvor mange SEKUNDER går der fra ${hms(a)} til ${hms(b)}?`,()=>`${b-a} s`));
    const monday=19*60+36+p*4, two=plus(8,47+p*2),ahead=3;
    questions.push(q(`A flight departs Monday at ${time(monday)}, lasts 8h ${47+p*2}m, arriving in a city 3h AHEAD. What local day and time?`,`Een vlucht vertrekt maandag om ${time(monday)}, duurt 8 uur en ${47+p*2} minuten ; de bestemming loopt 3 uur VOOR op de vertreklocatie. Welke dag en lokale tijd?`,`Et fly afgår mandag kl. ${time(monday)}, varer 8 timer og ${47+p*2} minutter og lander i en by 3 timer FORAN. Hvilken lokal dag og tid?`,l=> (l==='nl'?'dinsdag':l==='da'?'tirsdag':'Tuesday')+` ${time(monday+two+ahead*60)}`));
    const before=3*60+12+p*2;
    questions.push(q(`What time was it 7h ${28+p*3}m BEFORE ${time(before)}?`,`Hoe laat was het 7 uur en ${28+p*3} minuten VÓÓR ${time(before)}?`,`Hvad var klokken 7 timer og ${28+p*3} minutter FØR ${time(before)}?`,l=>withDay(before-plus(7,28+p*3),l)));
  } else if(level==="advanced") {
    const dep=22*60+46+p*3, dur=plus(11,25+p*4),offset=-6;
    questions.push(q(`Flight leaves Monday ${time(dep)}, flies 11h ${25+p*4}m, destination is 6h BEHIND the departure city. Give LOCAL day and time.`,`Een vlucht vertrekt maandag om ${time(dep)}, duurt 11 uur en ${25+p*4} minuten; de bestemming loopt 6 uur achter. Wat zijn de lokale dag en tijd?`,`Et fly afgår mandag kl. ${time(dep)}, varer 11 timer og ${25+p*4} minutter; destinationen er 6 timer bagud. Hvilken lokal dag og tid?`,l=> (l==='nl'?'dinsdag':l==='da'?'tirsdag':'Tuesday')+` ${time(dep+dur+offset*60)}`));
    const start=22*3600+43*60+37+p, incr=plus(4,53+p)*60+41+p;
    questions.push(q(`Add 4h ${53+p}m ${41+p}s to ${hms(start)}. Give the day.`,`Tel 4 uur, ${53+p} minuten en ${41+p} seconden op bij ${hms(start)}. Vermeld de dag.`,`Læg 4 timer, ${53+p} minutter og ${41+p} sekunder til ${hms(start)}. Angiv dagen.`,l=>hms(start+incr)+(l==='nl'?' (volgende dag)':l==='da'?' (næste dag)':' (next day)')));
    const d=7*60+18+p*3, dur1=plus(3,14+p), connection=plus(1,35), dur2=plus(5,26+p), ahead=2;
    questions.push(q(`First flight leaves 07:${pad(18+p*3)}, lasts 3h ${14+p}m; connection 1h35m; second flight 5h ${26+p}m. Destination 2h AHEAD. Arrival local?`,`Eerste vlucht vertrekt om ${time(d)}, duurt 3 uur en ${14+p} minuten; overstap 1 uur en 35 minuten; tweede vlucht 5 uur en ${26+p} minuten. Bestemming 2 uur VOOR. Lokale aankomst?`,`Første fly afgår kl. ${time(d)}, varer 3 timer og ${14+p} minutter; skiftetid 1 time og 35 minutter; andet fly varer 5 timer og ${26+p} minutter. Destination 2 timer FORAN. Lokal ankomst?`,l=>withDay(d+dur1+connection+dur2+ahead*60,l)));
    const at=23*60+28+p*5,elapsed=plus(5,17+p);
    questions.push(q(`How long between ${time(at)} and ${time(at+elapsed)} NEXT DAY?`,`Hoeveel tijd zit er tussen ${time(at)} en ${time(at+elapsed)} op de VOLGENDE dag?`,`Hvor lang tid er der mellem ${time(at)} og ${time(at+elapsed)} NÆSTE dag?`,()=>`${Math.floor(elapsed/60)}h ${pad(elapsed%60)}m`));
    const t1=11*60+41+p, a1=plus(4,12+p),t2=12*60+17+p, a2=plus(3,22+p);
    questions.push(q(`Trains A/B leave ${time(t1)}/${time(t2)}; travel 4h${12+p}m/3h${22+p}m. Which arrives FIRST and by how many minutes?`,`Treinen A/B vertrekken om ${time(t1)}/${time(t2)}; ritduur 4 uur ${12+p} minuten / 3 uur ${22+p} minuten. Welke komt EERST, en hoeveel minuten eerder?`,`Tog A/B afgår kl. ${time(t1)}/${time(t2)}; rejsetid 4 timer ${12+p} minutter / 3 timer ${22+p} minutter. Hvilket kommer FØRST, og hvor mange minutter før?`,l=>`${t1+a1 < t2+a2?'A':'B'} · ${Math.abs((t1+a1)-(t2+a2))} ${l==='nl'?'minuten':l==='da'?'minutter':'minutes'}`));
    const local=9*60+35+p*4, offset2=8;
    questions.push(q(`A meeting is at ${time(local)} in a city 8h AHEAD. What time is it in the home city?`,`Een afspraak is om ${time(local)} in een stad die 8 uur VOOR loopt. Hoe laat is het thuis?`,`Et møde er kl. ${time(local)} i en by, der er 8 timer FORAN. Hvad er klokken hjemme?`,l=>withDay(local-offset2*60,l)));
  } else { // grandmaster
    const dep=20*60+51+p*2,flight1=plus(12,40+p),stop=plus(3,25+p),flight2=plus(8,37+p),offset=9;
    questions.push(q(`Monday ${time(dep)}: flight 12h${40+p}m, layover 3h${25+p}m, flight 8h${37+p}m; destination 9h AHEAD of departure. Arrival LOCAL weekday/time?`,`Maandag ${time(dep)}: vlucht 12 uur ${40+p} min, overstap 3 uur ${25+p} min, vlucht 8 uur ${37+p} min; bestemming 9 uur VOOR. Lokale dag en tijd van aankomst?`,`Mandag ${time(dep)}: fly 12 timer ${40+p} min, mellemlanding 3 timer ${25+p} min, fly 8 timer ${37+p} min; destination 9 timer FORAN. Lokal ankomstdag og -tid?`,l=>{const sum=dep+flight1+stop+flight2+offset*60;const day=Math.floor(sum/1440);const names={en:['Monday','Tuesday','Wednesday','Thursday'],nl:['maandag','dinsdag','woensdag','donderdag'],da:['mandag','tirsdag','onsdag','torsdag']};return `${names[l][day]} ${time(sum)}`;}));
    const t=23*3600+59*60+43+p, plusSec=plus(9,54+p)*60+47+p;
    questions.push(q(`Add 9h${54+p}m${47+p}s to ${hms(t)}. State day change.`,`Tel 9 uur ${54+p} min ${47+p} sec op bij ${hms(t)}. Vermeld een dagwisseling.`,`Læg 9 timer ${54+p} min ${47+p} sek til ${hms(t)}. Angiv dagsskift.`,l=>hms(t+plusSec)+(l==='nl'?' (volgende dag)':l==='da'?' (næste dag)':' (next day)')));
    const home=17*60+38+p, flight=plus(17,22+p),dest=-8;
    questions.push(q(`Depart Wednesday ${time(home)}; flight 17h${22+p}m. Destination is 8h BEHIND departure city. Local arrival day/time?`,`Vertrek woensdag ${time(home)}; vlucht 17 uur ${22+p} min. Bestemming is 8 uur ACHTER. Lokale aankomstdag en -tijd?`,`Afgang onsdag ${time(home)}; fly 17 timer ${22+p} min. Destinationen er 8 timer BAGUD. Lokal ankomstdag og -tid?`,l=>{let dt=home+flight+dest*60;const days={en:['Wednesday','Thursday','Friday'],nl:['woensdag','donderdag','vrijdag'],da:['onsdag','torsdag','fredag']};return `${days[l][Math.floor(dt/1440)]} ${time(dt)}`;}));
    const stopStart=7*60+42+p, length1=plus(4,49+p), pause=plus(2,27), length2=plus(6,18+p);
    questions.push(q(`A route starts ${time(stopStart)}, goes 4h${49+p}m, stops 2h27m, then goes 6h${18+p}m. What is the arrival day/time?`,`Een route start om ${time(stopStart)}, duurt 4 uur ${49+p} min, kent een pauze van 2 uur 27 min en gaat dan nog 6 uur ${18+p} min verder. Aankomstdag en -tijd?`,`En rute starter kl. ${time(stopStart)}, varer 4 timer ${49+p} min, har 2 timer 27 min pause og fortsætter 6 timer ${18+p} min. Ankomstdag og -tid?`,l=>withDay(stopStart+length1+pause+length2,l)));
    const a=18*60+17+p*2, b=20*60+52+p*3, target=a+plus(7,31+p);
    questions.push(q(`A timezone is 5h AHEAD. Local clock shows ${time(b)}. Home clock shows ${time(a)}. How many minutes between the two HOME-time readings? (Convert both correctly.)`,`Tijdzone B loopt 5 uur VOOR. Klok B toont ${time(b)} en de thuisklok ${time(a)}. Hoeveel minuten verschil zit er tussen beide tijden in de THUISTIJDZONE?`,`Tidszone B er 5 timer FORAN. Ur B viser ${time(b)}, og uret hjemme viser ${time(a)}. Hvor mange minutter er der mellem tidspunkterne i HJEMMETIDSZONEN?`,()=>`${Math.abs((b-5*60)-a)} min`));
    const n=22*60+43+p*2, before=plus(14,37+p);
    questions.push(q(`What local day and time is 14h${37+p}m BEFORE ${time(n)}?`,`Welke dag en tijd is het 14 uur ${37+p} minuten VÓÓR ${time(n)}?`,`Hvilken dag og tid er det 14 timer ${37+p} minutter FØR ${time(n)}?`,l=>withDay(n-before,l)));
  }
  if (questions.length!==6) throw Error(`Clock card count: ${level}`);
  const languageVariants = Object.fromEntries(["en","nl","da"].map(lang=>[lang, {
    text: (lang==='nl'?"GEBRUIK DE 24-UURSKLOK":lang==='da'?"BRUG 24-TIMERS UR":"USE 24-HOUR TIME")+"\n"+questions.map((item,i)=>`${i+1}. ${item[lang]}`).join("\n"),
    answer: questions.map((item,i)=>`${i+1}. ${item.answer(lang)}`).join("\n")
  }]));
  return { ...languageVariants.en, languageVariants, localizedCard:true };
}
export const HARDER_CLOCK_PACKS = {
  "clock-duel": Object.fromEntries(LEVELS.map(level=>[level, { prompts: Array.from({length:5}, (_,i)=>build(level,i)) }]))
};
