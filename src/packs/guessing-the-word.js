/**
 * V4.18 — Guessing the Word (team cooperation only).
 * Each line is target + forbidden clue, explicitly authored in EN / NL / DA.
 * Cards have exactly five pairs. Same card index in every display language,
 * so guests can switch languages independently without changing the challenge.
 * The first entry is English; translations are reviewed, not machine-generated.
 */
const ORIGINAL_WORD_PAIRS = {
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
Firefighter|Helmet|Brandweerman|Helm|Brandmand|Hjelm
Elephant|Trunk|Olifant|Slurf|Elefant|Snabel
Dinosaur|Extinct|Dinosaurus|Uitgestorven|Dinosaur|Uddød
Mickey Mouse|Disney|Mickey Mouse|Disney|Mickey Mouse|Disney
Football|Goal|Voetbal|Doel|Fodbold|Mål
Toothbrush|Teeth|Tandenborstel|Poetsen|Tandbørste|Tænder
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
Sandwich|Bread|Broodje|Lunch|Sandwich|Brød
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
Screenplay|Actors|Filmscenario|Acteurs|Filmmanuskript|Skuespillere
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
Constellation|Stars|Sterrenbeeld|Hemel|Stjernebillede|Stjerner
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
Linguistics|Language|Taalkunde|Woordenschat|Lingvistik|Sprog
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
Gerrymandering|Elections|Kiesdistrictmanipulatie|Verkiezingen|Valgkredsmanipulation|Grænser
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
Evaporation|Vapour|Verdamping|Waterdruppels|Fordampning|Varme
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

// The previous live pack is moved exactly ONE level higher: Novice→Amateur,
// Amateur→Intermediate, …, Advanced→Grandmaster. The former Grandmaster pack
// is retired. Each level also has fresh, friendlier everyday/trivia material.
const NEW_EASIER_WORD_PAIRS = {
  novice: `
Sun|Hot|Zon|Warm|Sol|Varm
Moon|Night|Maan|Nacht|Måne|Nat
Tree|Leaves|Boom|Bladeren|Træ|Blade
Fish|Water|Vis|Water|Fisk|Vand
Book|Pages|Boek|Bladzijden|Bog|Sider
Car|Road|Auto|Weg|Bil|Vej
Cake|Birthday|Taart|Verjaardag|Kage|Fødselsdag
Bed|Sleep|Bed|Slapen|Seng|Sove
Duck|Quack|Eend|Kwak|And|Rap
Chair|Sit|Stoel|Zitten|Stol|Sidde
Horse|Neigh|Paard|Hinniken|Hest|Vrinske
Santa Claus|Christmas|Kerstman|Kerstmis|Julemanden|Gaver
London|England|Londen|Engeland|London|England
Paris|France|Parijs|Frankrijk|Paris|Frankrig
Earth|Planet|Aarde|Planeet|Jorden|Planet
Butter|Bread|Boter|Brood|Smør|Brød
Lion|Roar|Leeuw|Brullen|Løve|Brøle
Rain|Umbrella|Regen|Paraplu|Regn|Paraply
Shark|Sea|Haai|Zee|Haj|Hav
Cinderella|Slipper|Assepoester|Muiltje|Askepot|Sko
Dolphin|Jump|Dolfijn|Springen|Delfin|Hoppe
Milk|Cow|Melk|Koe|Mælk|Ko
Camera|Photo|Camera|Foto|Kamera|Billede
Robot|Machine|Robot|Machine|Robot|Maskine
Chocolate|Sweet|Chocolade|Zoet|Chokolade|Sød
Piano|Keys|Piano|Toetsen|Klaver|Tangenter
Winter|Snow|Winter|Sneeuw|Vinter|Sne
Bee|Honey|Bij|Honing|Bi|Honning
Clock|Time|Klok|Tijd|Ur|Tid
Superman|Cape|Superman|Cape|Superman|Kappe`,
  amateur: `
Rome|Italy|Rome|Italië|Rom|Italien
Harry Potter|Wizard|Harry Potter|Tovenaar|Harry Potter|Troldmand
Mount Everest|Mountain|Mount Everest|Berg|Mount Everest|Bjerg
Albert Einstein|Scientist|Albert Einstein|Wetenschapper|Albert Einstein|Forsker
Pyramids|Egypt|Piramides|Egypte|Pyramider|Egypten
Jupiter|Gas|Jupiter|Gas|Jupiter|Gas
World War II|1945|Tweede Wereldoorlog|1945|Anden Verdenskrig|1945
Leonardo da Vinci|Mona Lisa|Leonardo da Vinci|Mona Lisa|Leonardo da Vinci|Mona Lisa
Amazon River|South America|Amazonerivier|Zuid-Amerika|Amazonfloden|Sydamerika
Olympics|Medals|Olympische Spelen|Medailles|OL|Medaljer
Viking|Ship|Viking|Schip|Viking|Skib
Venus|Space|Venus|Ruimte|Venus|Rummet
Pterodactyl|Wings|Pterodactyl|Vleugels|Flyveøgle|Vinger
Egypt|Nile|Egypte|Nijl|Egypten|Nilen
Romeo and Juliet|Shakespeare|Romeo en Julia|Shakespeare|Romeo og Julie|Shakespeare
Taj Mahal|India|Taj Mahal|India|Taj Mahal|Indien
Lego|Bricks|Lego|Steentjes|Lego|Klodser
Mozart|Music|Mozart|Muziek|Mozart|Musik
Sydney|Australia|Sydney|Australië|Sydney|Australien
Mars|Red|Mars|Rood|Mars|Rød
Gravity|Fall|Zwaartekracht|Vallen|Tyngdekraft|Falde
Napoleon|France|Napoleon|Frankrijk|Napoleon|Frankrig
Shakespeare|Writer|Shakespeare|Schrijver|Shakespeare|Forfatter
Eiffel Tower|Paris|Eiffeltoren|Parijs|Eiffeltårnet|Paris
Polar bear|Arctic|IJsbeer|Noordpool|Isbjørn|Arktis
The Netherlands|Amsterdam|Nederland|Amsterdam|Nederlandene|Amsterdam
Denmark|Copenhagen|Denemarken|Kopenhagen|Danmark|København
Africa|Continent|Afrika|Continent|Afrika|Kontinent
Electricity|Power|Elektriciteit|Stroom|Elektricitet|Strøm
Telescope|Stars|Telescoop|Sterren|Teleskop|Stjerner`,
  intermediate: `
The Great Wall of China|Beijing|Chinese Muur|Peking|Den Kinesiske Mur|Beijing
Marie Curie|Radioactivity|Marie Curie|Radioactiviteit|Marie Curie|Radioaktivitet
Atlantic Ocean|Water|Atlantische Oceaan|Water|Atlanterhavet|Vand
Abraham Lincoln|President|Abraham Lincoln|President|Abraham Lincoln|Præsident
Solar system|Sun|Zonnestelsel|Planeten|Solsystemet|Planeter
Photosynthesis|Plants|Fotosynthese|Planten|Fotosyntese|Planter
Tsunami|Wave|Tsunami|Golf|Tsunami|Bølge
Cold War|Russia|Koude Oorlog|Rusland|Den kolde krig|Rusland
Frida Kahlo|Painting|Frida Kahlo|Schilderij|Frida Kahlo|Maleri
Great Barrier Reef|Australia|Great Barrier Reef|Australië|Great Barrier Reef|Australien
Gutenberg|Printing|Gutenberg|Drukkunst|Gutenberg|Trykning
Mount Fuji|Japan|Mount Fuji|Japan|Fuji-bjerget|Japan
Martin Luther King Jr.|Dream|Martin Luther King Jr.|Droom|Martin Luther King Jr.|Drøm
Saturn|Rings|Saturnus|Ringen|Saturn|Ringe
Charles Darwin|Evolution|Charles Darwin|Evolutie|Charles Darwin|Evolution
Antarctica|Ice|Antarctica|IJs|Antarktis|Pingviner
Ancient Greece|Athens|Oude Griekenland|Athene|Antikkens Grækenland|Athen
The Beatles|Band|The Beatles|Muziekgroep|The Beatles|Band
DNA|Genes|DNA|Genen|DNA|Gener
Berlin Wall|Germany|Berlijnse Muur|Duitsland|Berlinmuren|Tyskland
Oxygen|Breathing|Zuurstof|Ademen|Ilt|Åndedræt
Cleopatra|Egypt|Cleopatra|Egypte|Kleopatra|Egypten
Istanbul|Turkey|Istanbul|Turkije|Istanbul|Tyrkiet
Earthquake|Ground|Aardbeving|Grond|Jordskælv|Rystelser
Van Gogh|Sunflowers|Van Gogh|Zonnebloemen|Van Gogh|Solsikker
Pacific Ocean|Largest|Stille Oceaan|Grootste|Stillehavet|Største
Nelson Mandela|South Africa|Nelson Mandela|Zuid-Afrika|Nelson Mandela|Sydafrika
The Amazon rainforest|Trees|Amazonewoud|Bomen|Amazonasregnskoven|Træer
Black hole|Space|Zwart gat|Ruimte|Sort hul|Rummet
The Renaissance|Art|Renaissance|Kunst|Renæssancen|Kunst`,
  competent: `
Neil Armstrong|Moon|Neil Armstrong|Maan|Neil Armstrong|Måne
French Revolution|Bastille|Franse Revolutie|Bastille|Den Franske Revolution|Bastillen
Himalayas|Mountains|Himalaya|Bergen|Himalaya|Bjerge
Isaac Newton|Apple|Isaac Newton|Appel|Isaac Newton|Æble
Penicillin|Antibiotic|Penicilline|Antibioticum|Penicillin|Antibiotikum
The Louvre|Museum|Louvre|Museum|Louvre|Museum
Industrial Revolution|Factories|Industriële Revolutie|Fabrieken|Den industrielle revolution|Fabrikker
Alexander Fleming|Discovery|Alexander Fleming|Ontdekking|Alexander Fleming|Opdagelse
The Sahara|Desert|Sahara|Woestijn|Sahara|Ørken
World War I|Trenches|Eerste Wereldoorlog|Loopgraven|Første Verdenskrig|Skyttegrave
Mahatma Gandhi|India|Mahatma Gandhi|India|Mahatma Gandhi|Indien
The equator|Latitude|Evenaar|Breedtegraad|Ækvator|Breddegrad
DNA fingerprinting|Crime|DNA-profiel|Misdaad|DNA-profil|Kriminalitet
Vincent van Gogh|Painter|Vincent van Gogh|Schilder|Vincent van Gogh|Maler
Mount Kilimanjaro|Tanzania|Kilimanjaro|Tanzania|Kilimanjaro|Tanzania
Galileo Galilei|Telescope|Galileo Galilei|Telescoop|Galileo Galilei|Teleskop
Coral reef|Fish|Koraalrif|Vissen|Koralrev|Fisk
Climate change|Warming|Klimaatverandering|Opwarming|Klimaændringer|Opvarmning
United Nations|Peace|Verenigde Naties|Vrede|FN|Fred
Hippocrates|Medicine|Hippocrates|Geneeskunde|Hippokrates|Medicin
Plate tectonics|Earthquake|Platentektoniek|Aardbeving|Pladetektonik|Jordskælv
The Danube|Europe|Donau|Europa|Donau|Europa
Nikola Tesla|Electricity|Nikola Tesla|Elektriciteit|Nikola Tesla|Elektricitet
The Colosseum|Rome|Colosseum|Rome|Colosseum|Rom
Chlorophyll|Green|Chlorofyl|Groen|Klorofyl|Grøn
The Silk Road|Trade|Zijderoute|Handel|Silkevejen|Handel
Jane Austen|Novels|Jane Austen|Romans|Jane Austen|Romaner
Mars rover|Robot|Marsrover|Robot|Marsrover|Robot
Louis Pasteur|Vaccine|Louis Pasteur|Vaccin|Louis Pasteur|Vaccine
Tropical rainforest|Trees|Tropisch regenwoud|Bomen|Tropisk regnskov|Træer`,
  skilled: `
Alan Turing|Computers|Alan Turing|Computers|Alan Turing|Computere
Machu Picchu|Peru|Machu Picchu|Peru|Machu Picchu|Peru
Theory of relativity|Einstein|Relativiteitstheorie|Einstein|Relativitetsteori|Einstein
Ada Lovelace|Programming|Ada Lovelace|Programmeren|Ada Lovelace|Programmering
The Arctic Circle|North|Noordpoolcirkel|Poolgebied|Polarcirklen|Nord
Quantum physics|Particles|Kwantumfysica|Deeltjes|Kvantefysik|Partikler
The Ottoman Empire|Turkey|Ottomaanse Rijk|Turkije|Det Osmanniske Rige|Tyrkiet
Franz Kafka|Novelist|Franz Kafka|Romanschrijver|Franz Kafka|Romanforfatter
Antibiotic resistance|Bacteria|Antibioticaresistentie|Bacteriën|Antibiotikaresistens|Bakterier
The Great Depression|Economy|Grote Depressie|Economie|Den store depression|Økonomi
Rosalind Franklin|DNA|Rosalind Franklin|DNA|Rosalind Franklin|DNA
Trans-Siberian Railway|Russia|Trans-Siberische spoorlijn|Rusland|Den transsibiriske jernbane|Rusland
The Mona Lisa|Smile|Mona Lisa|Glimlach|Mona Lisa|Smil
Krakatoa|Volcano|Krakatau|Vulkaan|Krakatau|Vulkan
The Suez Canal|Egypt|Suezkanaal|Egypte|Suezkanalen|Egypten
Gregor Mendel|Genetics|Gregor Mendel|Erfelijkheid|Gregor Mendel|Genetik
International Space Station|Orbit|Internationaal ruimtestation|Baan|Den Internationale Rumstation|Kredsløb
The European Union|Members|Europese Unie|Lidstaten|EU|Medlemmer
The Rosetta Stone|Egyptian|Steen van Rosetta|Egyptisch|Rosettastenen|Egyptisk
Antoine Lavoisier|Chemistry|Antoine Lavoisier|Scheikunde|Antoine Lavoisier|Kemi
The Andes|South America|Andes|Zuid-Amerika|Andesbjergene|Sydamerika
Antonie van Leeuwenhoek|Microscope|Antonie van Leeuwenhoek|Microscoop|Antonie van Leeuwenhoek|Mikroskop
Hubble telescope|Space|Hubble-telescoop|Ruimte|Hubble-teleskopet|Rummet
The Black Death|Plague|Zwarte Dood|Pest|Den sorte død|Pest
Hydroelectricity|Water|Waterkracht|Turbines|Vandkraft|Turbiner
The Acropolis|Athens|Akropolis|Athene|Akropolis|Athen
Doppler effect|Sound|Dopplereffect|Geluid|Dopplereffekt|Lyd
The Enlightenment|Reason|Verlichting|Rede|Oplysningstiden|Fornuft
Rachel Carson|Environment|Rachel Carson|Milieu|Rachel Carson|Miljø
The Bayeux Tapestry|Normans|Tapijt van Bayeux|Noormannen|Bayeux-tapetet|Normannere`,
  advanced: `
Niels Bohr|Atom|Niels Bohr|Atoom|Niels Bohr|Atom
Treaty of Versailles|1919|Verdrag van Versailles|1919|Versaillestraktaten|1919
The Mediterranean Sea|Europe|Middellandse Zee|Europa|Middelhavet|Europa
Margaret Thatcher|Britain|Margaret Thatcher|Groot-Brittannië|Margaret Thatcher|Storbritannien
Stephen Hawking|Physics|Stephen Hawking|Natuurkunde|Stephen Hawking|Fysik
The Big Bang|Universe|Oerknal|Heelal|Big Bang|Universet
The printing press|Gutenberg|Drukpers|Gutenberg|Trykpressen|Gutenberg
Copenhagen|Denmark|Kopenhagen|Denemarken|København|Danmark
The periodic table|Elements|Periodiek systeem|Elementen|Det periodiske system|Grundstoffer
The Panama Canal|Ships|Panamakanaal|Schepen|Panamakanalen|Skibe
Leonhard Euler|Mathematics|Leonhard Euler|Wiskunde|Leonhard Euler|Matematik
The French Resistance|Occupation|Frans verzet|Bezetting|Den franske modstandsbevægelse|Besættelse
Microplastics|Oceans|Microplastics|Oceanen|Mikroplast|Havene
The Nobel Prize|Sweden|Nobelprijs|Zweden|Nobelprisen|Sverige
The Great Famine|Ireland|Grote Hongersnood|Ierland|Den store hungersnød|Irland
James Watt|Steam|James Watt|Stoom|James Watt|Damp
The Bolshoi Theatre|Moscow|Bolsjojtheater|Moskou|Bolsjojteatret|Moskva
The Milky Way|Galaxy|Melkweg|Sterrenstelsel|Mælkevejen|Galakse
The human genome|DNA|Menselijk genoom|DNA|Det menneskelige genom|DNA
The Battle of Waterloo|Napoleon|Slag bij Waterloo|Napoleon|Slaget ved Waterloo|Napoleon
Aristotle|Philosophy|Aristoteles|Filosofie|Aristoteles|Filosofi
The Dead Sea|Salt|Dode Zee|Zout|Det Døde Hav|Salt
The equatorial rainforest|Humidity|Equatoriaal regenwoud|Vochtigheid|Ækvatorial regnskov|Fugtighed
Wolfgang Mozart|Composer|Wolfgang Mozart|Componist|Wolfgang Mozart|Komponist
The North Sea|Europe|Noordzee|Europa|Nordsøen|Europa
Earth's magnetic field|Compass|Aardmagnetisch veld|Kompas|Jordens magnetfelt|Kompas
Chernobyl|1986|Tsjernobyl|1986|Tjernobyl|1986
Galápagos Islands|Darwin|Galapagoseilanden|Darwin|Galápagosøerne|Darwin
The Roman Empire|Caesar|Romeinse Rijk|Caesar|Romerriget|Cæsar
The Amazon basin|River|Amazonebekken|Rivier|Amazonasbassinet|Flod`,
  grandmaster: `
The Higgs boson|Particles|Higgsboson|Deeltjes|Higgsbosonen|Partikler
Black Wednesday|Pound|Zwarte Woensdag|Britse pond|Sorte onsdag|Pund
Fibonacci sequence|Numbers|Fibonaccireeks|Getallen|Fibonacci-følgen|Tal
Hannah Arendt|Philosophy|Hannah Arendt|Filosofie|Hannah Arendt|Filosofi
Euclid|Geometry|Euclides|Meetkunde|Euklid|Geometri
The Antarctic Treaty|Peace|Antarctisch Verdrag|Vrede|Antarktistraktaten|Fred
The Rosetta mission|Comet|Rosetta-missie|Komeet|Rosetta-missionen|Komet
Antoine de Saint-Exupéry|The Little Prince|Antoine de Saint-Exupéry|De kleine prins|Antoine de Saint-Exupéry|Den lille prins
The eurozone|Currency|Eurozone|Valuta|Eurozonen|Valuta
The Magna Carta|King|Magna Carta|Koning|Magna Carta|Konge
The Silk Road|Merchants|Zijderoute|Kooplieden|Silkevejen|Købmænd
The Battle of Hastings|1066|Slag bij Hastings|1066|Slaget ved Hastings|1066
The Hubble constant|Expansion|Hubbleconstante|Uitdijing|Hubble-konstanten|Udvidelse
Alan Turing|Computer|Alan Turing|Computer|Alan Turing|Computer
The Suez Crisis|Egypt|Suezcrisis|Egypte|Suezkrisen|Egypten
The Fibonacci spiral|Nature|Fibonaccispiraal|Natuur|Fibonacci-spiralen|Natur
The Doppler effect|Frequency|Dopplereffect|Frequentie|Dopplereffekten|Frekvens
The Berlin Conference|Africa|Conferentie van Berlijn|Afrika|Berlinkonferencen|Afrika
The Gulf Stream|Atlantic|Golfstroom|Atlantische Oceaan|Golfstrømmen|Atlanterhavet
The Enlightenment|Reason|Verlichting|Rede|Oplysningstiden|Fornuft
Florence Nightingale|Nursing|Florence Nightingale|Verpleging|Florence Nightingale|Sygepleje
The laws of motion|Newton|Bewegingswetten|Newton|Bevægelseslovene|Newton
The fall of Constantinople|1453|Val van Constantinopel|1453|Konstantinopels fald|1453
The Treaty of Rome|European Union|Verdrag van Rome|Europese Unie|Romtraktaten|EU
The Amazon rainforest|Brazil|Amazonewoud|Brazilië|Amazonasregnskoven|Brasilien
The Vasa ship|Sweden|Vasa-schip|Zweden|Vasaskibet|Sverige
The Black Death|Europe|Zwarte Dood|Europa|Den sorte død|Europa
The ozone layer|Atmosphere|Ozonlaag|Atmosfeer|Ozonlaget|Atmosfære
The Canterbury Tales|Chaucer|Canterbury Tales|Chaucer|Canterbury-fortællingerne|Chaucer
The human microbiome|Bacteria|Menselijk microbioom|Bacteriën|Det menneskelige mikrobiom|Bakterier`,
};

const RANKS = ['novice', 'amateur', 'intermediate', 'competent', 'skilled', 'advanced', 'grandmaster'];
const WORD_PAIRS = Object.fromEntries(RANKS.map((level, i) => [
  level,
  NEW_EASIER_WORD_PAIRS[level].trim() + (i ? '\n' + ORIGINAL_WORD_PAIRS[RANKS[i - 1]].trim() : ''),
]));


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
