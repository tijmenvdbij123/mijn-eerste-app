/** Distinct news scenarios, individually rewritten in natural Dutch. */
const NL=`Een school opent een speeltuin
Een puppy vindt een thuis
Een gezin legt een tuin aan
Een kind wint een hardloopwedstrijd
Een bibliotheek krijgt nieuwe boeken
In een park worden bomen geplant
Een dierentuin verwelkomt een pasgeboren dier
Een bakkerij maakt een enorme taart
Een bus komt eerder aan dan verwacht
Een voetbalteam wint een beker
Een kat draagt een hoed
Een puppy wint een prijsrozet
Een taart is veel te groot
Een eend rijdt op een fiets
Een teddybeer geeft een feestje
Een clown raakt een schoen kwijt
Een kikker wordt kok
Een ballon raakt vast
Een hond leert dansen
Een koe bezoekt een school
Een school opent een bibliotheek
Een stad legt een fietspad aan
Een leerling wint een wetenschapswedstrijd
Een nieuwe sportclub opent zijn deuren
Vrijwilligers maken het strand schoon
Een gezin adopteert een hond
Een stad viert haar jubileum
Een voetbalteam wint de finale
Een leraar ontvangt een onderscheiding
Een buurttuin verbouwt groenten
Een hond wordt burgemeester
Het regent spaghetti
Een robot gaat naar school
Een fiets leert vliegen
Een kat opent een restaurant
Een pinguïn neemt de bus
Een leraar verandert in een papegaai
De maan ziet er paars uit
Een aardappel wint een wedstrijd
Een pizza verdwijnt spoorloos
Een stad opent een buurthuis
Een team wint een toernooi
Een school krijgt nieuwe computers
Een bibliotheek organiseert een festival
Een goed doel haalt geld op
Een jeugdorkest speelt in de buitenlucht
Een wijk begint met afvalscheiding
Een station wordt gerenoveerd
Een leerling vindt een historisch voorwerp
Een nieuwe brug wordt geopend
Pinguïns nemen het vliegveld over
Een onzichtbare kunstenaar wint een prijs
Alle klokken lopen achteruit
De bibliotheek verbiedt boeken
Een hamster begint een nieuwszender
De schooldirecteur blijkt een robot
Een stad stemt voor gratis ijs
Een papegaai kaapt de mededelingen
Een fiets vestigt een snelheidsrecord
Een olifant doet auditie voor een film
Een universiteit biedt nieuwe beurzen aan
Een stad begint een openbaarvervoerprogramma
Een wetenschapsmuseum opent een tentoonstelling
Een ondernemer richt een coöperatie op
Een park beschermt plaatselijke wilde dieren
Een gemeenteraad keurt een fietsplan goed
Een sportclub breidt zijn trainingen uit
Een ziekenhuis opent een nieuwe vleugel
Wetenschappers ontvangen een prijs
Een school geeft les over mediawijsheid
Een wetenschapper vindt eetbare wolken uit
De burgemeester kondigt een nationale dutjesdag aan
Een winkelcentrum verandert in een jungle
Een robot weigert huiswerk te maken
De bus krijgt podiumvrees
Een gans traint een voetbalteam
Een kok ontdekt een onzichtbaar ingrediënt
Verkeerslichten spelen muziek
Een museum toont een levende dinosaurus
Het regent boterhammen
Een stad herziet haar woningbouwplannen
Een universiteit begint klimaatonderzoek
Een bedrijf test een vierdaagse werkweek
Een museum ontvangt een schenking
Een regering begint een onderwijsprogramma
Een rechtbank publiceert een uitspraak
Een spoorlijn verkort de reistijd
Een ziekenhuis financiert onderzoek
Een start-up ontwikkelt duurzame energie
Een gemeenteraad debatteert over de begroting
Een miljardair koopt de naamrechten van de maan
Een museum veilt een tijdmachine
Een stad kiest een hologram als burgemeester
Op de beurs worden grappen verhandeld
Een start-up verkoopt onweer in flessen
Wetenschappers ontdekken een tweede woensdag
Een luchtvaartmaatschappij vliegt naar gisteren
Een boek geeft zijn eigen bibliotheek een boete
Alle vergaderingen worden vrijwillig
Een standbeeld sleept de stad voor de rechter
Het parlement stelt een hervorming van de vervoersfinanciering voor
Onderzoekers bestuderen hitte-eilanden in steden
Een bedrijf test nieuwe vormen van overleg op het werk
Een commissie onderzoekt de verkiezingsregels
Een universiteit begint internationaal roboticaonderzoek
Een kuststad onthult nieuwe waterkeringen
Een regering onderzoekt digitale identiteitsbewijzen
Een museum geeft een historisch voorwerp terug
Wetenschappers beschrijven een patroon in de oceaan
Een toezichthouder onderzoekt energieprikkels
Onderzoekers vragen patent aan op een nieuwe weekdag
Een kat wordt hoofdeconoom
Een universiteit opent een opleiding in denkbeeldige wetenschap
Robots leren klagen over hun werk
Een stad vervangt verkiezingen door karaoke
Een kunstenaar verkoopt een onzichtbare wolkenkrabber
De maan dient een klacht in wegens geluidsoverlast
Een luchtvaartmaatschappij verkoopt vluchten zonder bestemming
Een filosoof opent een hamburgertent
Een bank betaalt rente in complimenten
Een parlementair onderzoek stelt een grote hervorming ter discussie
Economen zijn het oneens over de groeiende productiviteit
Wetenschappers betwisten een ingreep in het klimaat
Een grondwettelijk hof beoordeelt het recht op privacy
Een topoverleg bespreekt de berekening van uitstoot
Een coalitie valt uiteen door ruzie over infrastructuur
Universiteiten stellen omstreden gegevensuitwisseling voor
Een ontdekking roept vragen op over onderzoeksethiek
Een accountantscontrole onthult onverwachte moderniseringskosten
Een stad herziet haar verkeersramingen
Noodbevoegdheden stuiten op grondwettelijke bezwaren
Centrale bankiers krijgen tegenstrijdige inflatiesignalen
Een belangrijk onderzoek wordt ingetrokken na een mislukte herhaling
Diplomaten onderhandelen over betwiste watervoorraden
Wetenschappers vinden een apparaat uit dat gesprekken kan bewerken
Een centrale bank voert lachen in als betaalmiddel
Historici ontdekken middeleeuwse sociale media
Diplomaten onderhandelen met duiven
Een kwantumcomputer verslaat zichzelf met schaken
Een kunstenaar verkoopt een ondertekend blanco contract
Een astronaut keert terug met een parkeerboete
Het parlement discussieert of gisteren wel heeft bestaan
Een filosoof veilt bewijs van de vrije wil
Klokken eisen via de rechter loon voor overuren
Een apparaat meet sarcasme in fotonen
Universiteiten staken tegen onmogelijk huiswerk
Parallelle tijdlijnen delen één parkeervergunning
Een supercomputer eist diplomatieke onschendbaarheid`;
export const REVIEWED_HEADLINE_LINES=NL.split('\n');
if(REVIEWED_HEADLINE_LINES.length!==148) throw Error(`Headline translations: ${REVIEWED_HEADLINE_LINES.length}/148`);

const ENGLISH=["A school opens a playground", "A puppy finds a home", "A family grows a garden", "A child wins a race", "A library gets new books", "A park plants trees", "A zoo welcomes a baby animal", "A bakery makes a big cake", "A bus arrives early", "A soccer team wins a trophy", "A cat wears a hat", "A puppy wins a ribbon", "A cake is too big", "A duck rides a bike", "A teddy bear has a party", "A clown loses a shoe", "A frog becomes a chef", "A balloon gets stuck", "A dog learns to dance", "A cow visits school", "A school opens a library", "A city builds a bike path", "A student wins a science fair", "A new sports club opens", "Volunteers clean the beach", "A family adopts a dog", "A town celebrates its anniversary", "A football team wins a final", "A teacher receives an award", "A local garden grows vegetables", "A dog becomes mayor", "It rains spaghetti", "A robot joins school", "A bicycle learns to fly", "A cat opens a restaurant", "A penguin takes the bus", "A teacher turns into a parrot", "The moon looks purple", "A potato wins a race", "A pizza disappears", "A city opens a community center", "A team wins a tournament", "A school receives new computers", "A library hosts a festival", "A charity raises funds", "A youth orchestra plays outdoors", "A district starts recycling", "A station gets renovated", "A student finds a historic artifact", "A new bridge opens", "Penguins take over the airport", "An invisible artist wins a prize", "All clocks run backward", "The library bans books", "A hamster starts a news channel", "The principal is a robot", "A town votes for free ice cream", "A parrot steals the announcements", "A bike sets a speed record", "An elephant auditions for a film", "A university offers new scholarships", "A city launches a transport program", "A science museum opens an exhibition", "An entrepreneur starts a cooperative", "A park protects local wildlife", "A council approves a cycling plan", "A sports club expands training", "A hospital opens a new wing", "Scientists receive an award", "A school teaches media literacy", "A scientist invents edible clouds", "The mayor announces a national nap day", "A mall becomes a jungle", "A robot refuses to do homework", "The bus develops stage fright", "A goose coaches a football team", "A chef discovers an invisible ingredient", "Traffic lights play music", "A museum displays a living dinosaur", "It rains sandwiches", "A city revises its housing plan", "A university begins climate research", "A company trials a four-day workweek", "A museum receives a donation", "A government launches an education initiative", "A court publishes a ruling", "A rail line reduces travel time", "A hospital funds research", "A startup develops renewable energy", "A council debates the budget", "A billionaire buys the moon's naming rights", "A museum auctions a time machine", "A city elects a hologram", "A stock exchange trades jokes", "A startup bottles thunderstorms", "Scientists discover a second Wednesday", "An airline flies to yesterday", "A book fines its own library", "All meetings become optional", "A statue takes the city to court", "Parliament proposes transport funding reform", "Researchers study urban heat islands", "A company pilots workplace bargaining", "A commission reviews election rules", "A university begins international robotics work", "A coastal city unveils flood defenses", "A government reviews digital identity", "A museum returns a historic artifact", "Scientists describe an ocean pattern", "A regulator reviews energy incentives", "Researchers patent a new day of the week", "A cat becomes chief economist", "A university opens imaginary science", "Robots learn to complain about work", "A city replaces voting with karaoke", "An artist sells an invisible skyscraper", "The moon files a noise complaint", "An airline sells zero-destination flights", "A philosopher opens a burger shop", "A bank pays interest in compliments", "A parliamentary inquiry questions a major reform", "Economists disagree on rising productivity", "Scientists dispute a climate intervention", "A constitutional court weighs privacy rights", "A summit debates emissions accounting", "A coalition splits over infrastructure funding", "Universities propose controversial data sharing", "A discovery creates research-ethics questions", "An audit finds unexpected modernization costs", "A city revises transport estimates", "Emergency powers face a constitutional challenge", "Central bankers face conflicting inflation signals", "A major study is retracted after failed replication", "Diplomats negotiate disputed water resources", "Scientists invent a machine that edits conversations", "A central bank adopts laughter as currency", "Historians discover medieval social media", "Diplomats negotiate with pigeons", "A quantum computer defeats itself at chess", "An artist sells a signed blank contract", "An astronaut returns with a parking ticket", "Parliament argues whether yesterday existed", "A philosopher auctions proof of free will", "The clocks sue for overtime pay", "A device measures sarcasm in photons", "Universities strike against impossible homework", "Parallel timelines share one parking permit", "A supercomputer demands diplomatic immunity"];
export const REVIEWED_DUTCH_HEADLINES=Object.fromEntries(ENGLISH.map((e,i)=>[e,REVIEWED_HEADLINE_LINES[i]]));
