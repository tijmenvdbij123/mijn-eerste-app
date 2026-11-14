/**
 * V4.16 — Guessing the Word (team cooperation only).
 * Each line is target + forbidden clue, explicitly authored in EN / NL / DA.
 * Cards have exactly five pairs. Same card index in every display language,
 * so guests can switch languages independently without changing the challenge.
 * The first entry is English; translations are reviewed, not machine-generated.
 */
const WORD_PAIRS = {
  novice: `
Cat|Meow|Kat|Miauw|Kat|Mjav
Dog|Bark|Hond|Blaffen|Hund|Gø
Apple|Fruit|Appel|Fruit|Æble|Frugt
Bicycle|Wheels|Fiets|Wielen|Cykel|Hjul
Snowman|Winter|Sneeuwpop|Winter|Snemand|Vinter
Pizza|Cheese|Pizza|Kaas|Pizza|Ost
Rainbow|Colours|Regenboog|Kleuren|Regnbue|Farver
Ice cream|Cold|IJsje|Koud|Is|Koldt
Pirate|Ship|Piraat|Schip|Pirat|Skib
Firefighter|Fire|Brandweerman|Brand|Brandmand|Brand
Elephant|Trunk|Olifant|Slurf|Elefant|Snabel
Dinosaur|Extinct|Dinosaurus|Uitgestorven|Dinosaur|Uddød
Mickey Mouse|Disney|Mickey Mouse|Disney|Mickey Mouse|Disney
Football|Ball|Voetbal|Bal|Fodbold|Bold
Toothbrush|Teeth|Tandenborstel|Tanden|Tandbørste|Tænder
Banana|Yellow|Banaan|Geel|Banan|Gul
Penguin|Ice|Pinguïn|IJs|Pingvin|Is
Birthday|Cake|Verjaardag|Taart|Fødselsdag|Kage
Train|Railway|Trein|Spoor|Tog|Jernbane
Doctor|Hospital|Dokter|Ziekenhuis|Læge|Hospital
Butterfly|Wings|Vlinder|Vleugels|Sommerfugl|Vinger
Popcorn|Cinema|Popcorn|Bioscoop|Popcorn|Biograf
Astronaut|Space|Astronaut|Ruimte|Astronaut|Rummet
Balloon|Air|Ballon|Lucht|Ballon|Luft
Swimming|Pool|Zwemmen|Zwembad|Svømning|Svømmehal
Kangaroo|Jump|Kangoeroe|Springen|Kænguru|Hoppe
Sandwich|Bread|Broodje|Brood|Sandwich|Brød
Spider-Man|Web|Spider-Man|Web|Spider-Man|Spind
School|Teacher|School|Leraar|Skole|Lærer
Guitar|Music|Gitaar|Muziek|Guitar|Musik`,
  amateur: `
Volcano|Lava|Vulkaan|Lava|Vulkan|Lava
Compass|North|Kompas|Noord|Kompas|Nord
Museum|Art|Museum|Kunst|Museum|Kunst
Skateboard|Wheels|Skateboard|Wielen|Skateboard|Hjul
Telescope|Stars|Telescoop|Sterren|Teleskop|Stjerner
Thunderstorm|Lightning|Onweer|Bliksem|Tordenvejr|Lyn
Orchestra|Music|Orkest|Muziek|Orkester|Musik
Passport|Travel|Paspoort|Reizen|Pas|Rejse
Berlin|Germany|Berlijn|Duitsland|Berlin|Tyskland
Karate|Martial arts|Karate|Vechtsport|Karate|Kampsport
Safari|Animals|Safari|Dieren|Safari|Dyr
Camel|Desert|Kameel|Woestijn|Kamel|Ørken
Chess|King|Schaken|Koning|Skak|Konge
Yoga|Exercise|Yoga|Oefeningen|Yoga|Øvelser
Aquarium|Fish|Aquarium|Vissen|Akvarium|Fisk
Chocolate|Cocoa|Chocolade|Cacao|Chokolade|Kakao
Waterfall|River|Waterval|Rivier|Vandfald|Flod
Detective|Clues|Detective|Aanwijzingen|Detektiv|Spor
Eiffel Tower|Paris|Eiffeltoren|Parijs|Eiffeltårnet|Paris
Submarine|Ocean|Onderzeeër|Oceaan|Ubåd|Hav
Magnet|Metal|Magneet|Metaal|Magnet|Metal
Recycling|Plastic|Recyclen|Plastic|Genbrug|Plastik
Violin|Strings|Viool|Snaren|Violin|Strenge
Tornado|Wind|Tornado|Wind|Tornado|Vind
Olympic Games|Sport|Olympische Spelen|Sport|Olympiske Lege|Sport
Microphone|Singing|Microfoon|Zingen|Mikrofon|Sang
Parachute|Sky|Parachute|Lucht|Faldskærm|Himmel
Albert Einstein|Physics|Albert Einstein|Natuurkunde|Albert Einstein|Fysik
Parliament|Laws|Parlement|Wetten|Parlament|Love
Igloo|Snow|Iglo|Sneeuw|Iglo|Sne`,
  intermediate: `
Photosynthesis|Sunlight|Fotosynthese|Zonlicht|Fotosyntese|Sollys
Democracy|Voting|Democratie|Stemmen|Demokrati|Afstemning
Gravity|Falling|Zwaartekracht|Vallen|Tyngdekraft|Fald
Screenplay|Film|Filmscenario|Film|Filmmanuskript|Film
Marathon|Running|Marathon|Hardlopen|Maraton|Løb
Archaeologist|Excavation|Archeoloog|Opgraving|Arkæolog|Udgravning
Beethoven|Composer|Beethoven|Componist|Beethoven|Komponist
Glacier|Ice|Gletsjer|IJs|Gletsjer|Is
Longitude|Map|Lengtegraad|Kaart|Længdegrad|Kort
Vaccination|Immunity|Vaccinatie|Immuniteit|Vaccination|Immunitet
Latitude|Equator|Breedtegraad|Evenaar|Breddegrad|Ækvator
Inflation|Prices|Inflatie|Prijzen|Inflation|Priser
Shakespeare|Plays|Shakespeare|Toneelstukken|Shakespeare|Skuespil
Solar eclipse|Moon|Zonsverduistering|Maan|Solformørkelse|Måne
Algorithm|Steps|Algoritme|Stappen|Algoritme|Trin
Habitat|Ecosystem|Leefgebied|Ecosysteem|Levested|Økosystem
Carbon dioxide|Gas|Koolstofdioxide|Gas|Kuldioxid|Gas
Renaissance|Art|Renaissance|Kunst|Renæssance|Kunst
Satellite|Orbit|Satelliet|Baan|Satellit|Kredsløb
Iceland|Volcanoes|IJsland|Vulkanen|Island|Vulkaner
Hypothesis|Experiment|Hypothese|Experiment|Hypotese|Forsøg
Election|Ballot|Verkiezing|Stembiljet|Valg|Stemmeseddel
Metabolism|Energy|Stofwisseling|Energie|Stofskifte|Energi
Geometry|Shapes|Meetkunde|Vormen|Geometri|Former
Audiobook|Narrator|Luisterboek|Voorlezer|Lydbog|Oplæser
Constellation|Stars|Sterrenbeeld|Sterren|Stjernebillede|Stjerner
Renewable energy|Wind|Hernieuwbare energie|Wind|Vedvarende energi|Vind
Byzantine Empire|Constantinople|Byzantijnse Rijk|Constantinopel|Det Byzantinske Rige|Konstantinopel
Megaphone|Amplify|Megafoon|Versterken|Megafon|Forstærke
Oxygen|Breathing|Zuurstof|Ademen|Ilt|Åndedræt`,
  competent: `
Ecosystem|Food chain|Ecosysteem|Voedselketen|Økosystem|Fødekæde
Inflation rate|Currency|Inflatiepercentage|Valuta|Inflationsrate|Valuta
DNA|Genes|DNA|Genen|DNA|Gener
Diplomacy|Embassy|Diplomatie|Ambassade|Diplomati|Ambassade
Constitutional monarchy|King|Constitutionele monarchie|Koning|Konstitutionelt monarki|Konge
Supply chain|Logistics|Toeleveringsketen|Logistiek|Forsyningskæde|Logistik
Black hole|Gravity|Zwart gat|Zwaartekracht|Sort hul|Tyngdekraft
Placebo|Medicine|Placebo|Medicijn|Placebo|Medicin
Linguistics|Language|Taalkunde|Taal|Lingvistik|Sprog
A Midsummer Night's Dream|Shakespeare|Een midzomernachtdroom|Shakespeare|En skærsommernatsdrøm|Shakespeare
Enzyme|Protein|Enzym|Eiwit|Enzym|Protein
Chemical reaction|Atoms|Chemische reactie|Atomen|Kemisk reaktion|Atomer
Berlin Wall|Cold War|Berlijnse Muur|Koude Oorlog|Berlinmuren|Den kolde krig
Chlorophyll|Plants|Bladgroen|Planten|Klorofyl|Planter
Data encryption|Password|Gegevensversleuteling|Wachtwoord|Datakryptering|Adgangskode
Neurology|Brain|Neurologie|Hersenen|Neurologi|Hjerne
Ethical dilemma|Morality|Ethisch dilemma|Moraal|Etisk dilemma|Moral
Greenhouse effect|Temperature|Broeikaseffect|Temperatuur|Drivhuseffekt|Temperatur
Jazz|Improvisation|Jazz|Improvisatie|Jazz|Improvisation
Tectonic plates|Earthquake|Tektonische platen|Aardbeving|Tektoniske plader|Jordskælv
Cryptocurrency|Blockchain|Cryptovaluta|Blockchain|Kryptovaluta|Blockchain
French Revolution|Bastille|Franse Revolutie|Bastille|Den Franske Revolution|Bastillen
Supply and demand|Prices|Vraag en aanbod|Prijzen|Udbud og efterspørgsel|Priser
Machine learning|Algorithm|Machinaal leren|Algoritme|Maskinlæring|Algoritme
Abstract art|Realism|Abstracte kunst|Realisme|Abstrakt kunst|Realisme
Drought|Rainfall|Droogte|Neerslag|Tørke|Nedbør
Cultural heritage|Tradition|Cultureel erfgoed|Traditie|Kulturarv|Tradition
Ion|Electron|Ion|Elektron|Ion|Elektron
Natural selection|Evolution|Natuurlijke selectie|Evolutie|Naturlig selektion|Evolution
Jane Austen|Novelist|Jane Austen|Romanschrijfster|Jane Austen|Romanforfatter`,
  skilled: `
Entropy|Disorder|Entropie|Wanorde|Entropi|Uorden
Cognitive bias|Judgement|Cognitieve vertekening|Oordeel|Kognitiv bias|Bedømmelse
Relativity|Einstein|Relativiteitstheorie|Einstein|Relativitetsteori|Einstein
Baroque|Music|Barok|Muziek|Barok|Musik
pH|Acidity|pH|Zuurtegraad|pH|Surhedsgrad
Opportunity cost|Economics|Opportuniteitskosten|Economie|Alternativomkostning|Økonomi
Quantum mechanics|Particles|Kwantummechanica|Deeltjes|Kvantemekanik|Partikler
Fiscal policy|Taxes|Begrotingsbeleid|Belastingen|Finanspolitik|Skatter
Gerrymandering|Elections|Kiesdistrictmanipulatie|Verkiezingen|Valgkredsmanipulation|Valg
Johannes Vermeer|Painting|Johannes Vermeer|Schilderkunst|Johannes Vermeer|Malerkunst
CRISPR|Genome|CRISPR|Genoom|CRISPR|Genom
Epistemology|Knowledge|Epistemologie|Kennis|Erkendelsesteori|Viden
Oligopoly|Market|Oligopolie|Markt|Oligopol|Marked
Plate tectonics|Mantle|Platentektoniek|Aardmantel|Pladetektonik|Jordkappe
Doppler effect|Sound|Dopplereffect|Geluid|Dopplereffekt|Lyd
Metaphor|Figurative|Metafoor|Figuurlijk|Metafor|Billedlig
Antibiotics|Bacteria|Antibiotica|Bacteriën|Antibiotika|Bakterier
Spacetime|Physics|Ruimtetijd|Natuurkunde|Rumtid|Fysik
The Hague|International court|Den Haag|Internationaal gerechtshof|Haag|International domstol
Epidemiology|Disease|Epidemiologie|Ziekte|Epidemiologi|Sygdom
Gradient|Calculus|Gradiënt|Differentiaalrekening|Gradient|Differentialregning
Sustainable energy|Environment|Duurzame energie|Milieu|Bæredygtig energi|Miljø
Existentialism|Philosophy|Existentialisme|Filosofie|Eksistentialisme|Filosofi
Biodiversity|Species|Biodiversiteit|Soorten|Biodiversitet|Arter
Artificial intelligence|Neural network|Kunstmatige intelligentie|Neuraal netwerk|Kunstig intelligens|Neuralt netværk
Evaporation|Vapour|Verdamping|Damp|Fordampning|Damp
Cultural appropriation|Identity|Culturele toe-eigening|Identiteit|Kulturel appropriation|Identitet
Equilibrium|Balance|Evenwicht|Balans|Ligevægt|Balance
Hubble Space Telescope|Astronomy|Hubble-ruimtetelescoop|Astronomie|Hubble-rumteleskopet|Astronomi
Mitosis|Cells|Mitose|Cellen|Mitose|Celler`,
  advanced: `
Heisenberg uncertainty principle|Position|Onzekerheidsprincipe van Heisenberg|Positie|Heisenbergs usikkerhedsprincip|Position
Thermodynamics|Heat|Thermodynamica|Warmte|Termodynamik|Varme
Prosopagnosia|Faces|Prosopagnosie|Gezichten|Prosopagnosi|Ansigter
Sunk cost fallacy|Expenses|Verzonkenkostenfout|Uitgaven|Sunk cost-fejlslutning|Udgifter
Treaty of Versailles|World War I|Verdrag van Versailles|Eerste Wereldoorlog|Versaillestraktaten|Første Verdenskrig
Quasar|Galaxy|Quasar|Sterrenstelsel|Kvasar|Galakse
Schrödinger's cat|Superposition|Schrödingers kat|Superpositie|Schrödingers kat|Superposition
Bayesian inference|Probability|Bayesiaanse gevolgtrekking|Kansrekening|Bayesiansk inferens|Sandsynlighed
Kurt Gödel|Incompleteness|Kurt Gödel|Onvolledigheid|Kurt Gödel|Ufuldstændighed
Cognitive dissonance|Tension|Cognitieve dissonantie|Spanning|Kognitiv dissonans|Spænding
Krebs cycle|Metabolism|Citroenzuurcyclus|Stofwisseling|Citronsyrecyklus|Stofskifte
Antitrust|Monopoly|Mededingingsrecht|Monopolie|Konkurrenceret|Monopol
Catharsis|Emotion|Catharsis|Emotie|Katarsis|Følelse
Chiaroscuro|Light|Clair-obscur|Licht|Chiaroscuro|Lys
Recombinant DNA|Genetics|Recombinant DNA|Genetica|Rekombinant DNA|Genetik
Phenomenology|Consciousness|Fenomenologie|Bewustzijn|Fænomenologi|Bevidsthed
Schengen Area|Borders|Schengengebied|Grenzen|Schengenområdet|Grænser
Turing test|Intelligence|Turingtest|Intelligentie|Turingtest|Intelligens
Neurotransmitter|Synapse|Neurotransmitter|Synaps|Neurotransmitter|Synapse
The Rite of Spring|Stravinsky|Le Sacre du printemps|Stravinsky|Le Sacre du printemps|Stravinskij
Mitochondrion|ATP|Mitochondrion|ATP|Mitokondrie|ATP
Hygrometer|Humidity|Hygrometer|Luchtvochtigheid|Hygrometer|Luftfugtighed
Anthropocene|Humans|Antropoceen|Mensen|Antropocæn|Mennesker
Immanuel Kant|Categorical imperative|Immanuel Kant|Categorische imperatief|Immanuel Kant|Kategorisk imperativ
Michel Foucault|Power|Michel Foucault|Macht|Michel Foucault|Magt
Endoplasmic reticulum|Protein|Endoplasmatisch reticulum|Eiwit|Endoplasmatisk retikulum|Protein
Deadweight loss|Economics|Welvaartsverlies|Economie|Dødvægtstab|Økonomi
Leviathan|Thomas Hobbes|Leviathan|Thomas Hobbes|Leviathan|Thomas Hobbes
Pythagorean theorem|Triangle|Stelling van Pythagoras|Driehoek|Pythagoras' sætning|Trekant
Marbling|Paper|Marmeren|Papier|Marmorering|Papir`,
  grandmaster: `
Noether's theorem|Symmetry|Stelling van Noether|Symmetrie|Noethers sætning|Symmetri
Riemann hypothesis|Prime numbers|Riemann-hypothese|Priemgetallen|Riemann-hypotesen|Primtal
Palimpsest|Manuscript|Palimpsest|Handschrift|Palimpsest|Manuskript
Stochastic calculus|Brownian motion|Stochastische calculus|Brownse beweging|Stokastisk analyse|Brownsk bevægelse
Bell's inequality|Entanglement|Ongelijkheid van Bell|Verstrengeling|Bells ulighed|Sammenfiltring
Gödel's incompleteness theorems|Proof|Onvolledigheidsstellingen van Gödel|Bewijs|Gödels ufuldstændighedssætninger|Bevis
Byzantine iconoclasm|Religious images|Byzantijns iconoclasme|Religieuze afbeeldingen|Byzantinsk ikonoklasme|Religiøse billeder
Immunohistochemistry|Antibodies|Immunohistochemie|Antistoffen|Immunhistokemi|Antistoffer
Nash equilibrium|Strategies|Nash-evenwicht|Strategieën|Nash-ligevægt|Strategier
De Broglie wavelength|Matter|De Broglie-golflengte|Materie|De Broglie-bølgelængde|Stof
Fermi paradox|Extraterrestrials|Fermi-paradox|Buitenaards leven|Fermi-paradokset|Udenjordisk liv
Hyperbolic geometry|Curvature|Hyperbolische meetkunde|Kromming|Hyperbolsk geometri|Krumning
Noumenon|Thing in itself|Noumenon|Ding op zich|Noumenon|Tingen i sig selv
CRISPR-Cas9|Nuclease|CRISPR-Cas9|Nuclease|CRISPR-Cas9|Nuklease
Thermohaline circulation|Salinity|Thermohaliene circulatie|Zoutgehalte|Termohalin cirkulation|Saltholdighed
Lagrange multipliers|Constraints|Lagrange-multiplicatoren|Randvoorwaarden|Lagranges multiplikatorer|Betingelser
Synesthesia|Senses|Synesthesie|Zintuigen|Synæstesi|Sanser
Niccolò Machiavelli|The Prince|Niccolò Machiavelli|De vorst|Niccolò Machiavelli|Fyrsten
Seigniorage|Currency|Seigneuriage|Valuta|Seigniorage|Valuta
Marcel Proust|In Search of Lost Time|Marcel Proust|Op zoek naar de verloren tijd|Marcel Proust|På sporet af den tabte tid
Dirac equation|Fermions|Diracvergelijking|Fermionen|Dirac-ligningen|Fermioner
Riemann zeta function|Complex numbers|Riemann-zètafunctie|Complexe getallen|Riemanns zetafunktion|Komplekse tal
Polysemy|Meanings|Polysemie|Betekenissen|Polysemi|Betydninger
Dodecaphony|Twelve-tone|Dodecafonie|Twaalftoons|Dodekafoni|Tolvtoneteknik
Quaternion|Imaginary numbers|Quaternion|Imaginaire getallen|Kvaternion|Imaginære tal
Chandrasekhar limit|White dwarf|Chandrasekhar-limiet|Witte dwerg|Chandrasekhar-grænsen|Hvid dværg
Epigenetics|DNA methylation|Epigenetica|DNA-methylering|Epigenetik|DNA-methylering
Penrose tiling|Aperiodic|Penrose-betegeling|Aperiodiek|Penrose-fliselægning|Aperiodisk
Heraclitus|Flux|Heraclitus|Verandering|Heraklit|Forandring
Dunning–Kruger effect|Overconfidence|Dunning-krugereffect|Zelfoverschatting|Dunning-Kruger-effekten|Overmod`,
};

const CAPTIONS = {
  en: { target: 'WORD TO GUESS', forbidden: 'FORBIDDEN CLUE' },
  nl: { target: 'TE RADEN WOORD', forbidden: 'VERBODEN HINT' },
  da: { target: 'ORD DER SKAL GÆTTES', forbidden: 'FORBUDT HINT' },
};

function toPrompt(five) {
  const languageVariants = Object.fromEntries(['en', 'nl', 'da'].map((lang, languageIndex) => {
    const captions = CAPTIONS[lang];
    const pairs = five.map((row) => ({word: row[languageIndex * 2], forbidden: row[languageIndex * 2 + 1]}));
    return [lang, {
      text: pairs.map(({ word, forbidden }, i) => `${i+1}. ${captions.target}: ${word}\n   ${captions.forbidden}: ${forbidden}`).join('\n\n'),
      pairs,
    }];
  }));
  return { ...languageVariants.en, languageVariants, localizedCard: true, secretForClueGiver: true };
}

export const GUESSING_WORD_PACKS = {
  'guessing-the-word': Object.fromEntries(Object.entries(WORD_PAIRS).map(([level, raw]) => {
    const rows = raw.trim().split('\n').map((line) => line.trim().split('|').map(x => x.trim()));
    if (rows.length % 5 !== 0 || rows.some((row) => row.length !== 6 || row.some((value) => !value))) {
      throw new Error(`Invalid Guessing the Word pack at level ${level}`);
    }
    return [level, {prompts: Array.from({length: rows.length / 5}, (_, i) => toPrompt(rows.slice(i * 5, i * 5 + 5)))}];
  })),
};
