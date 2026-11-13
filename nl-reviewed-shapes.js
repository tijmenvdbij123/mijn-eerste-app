// Original instructions paired with independent Dutch sentences, in their
// original order. The original English source stays authoritative.
const DUTCH = `Teken een grote ronde zon, een wolk, een vierkant huis, een driehoekig dak en een deur.
Teken een kat met twee driehoekige oren, ronde ogen, vier poten en een lange staart.
Teken een fiets met twee wielen, een zadel, een stuur, een bel en een mand.
Teken een grote ronde zon, een vierkant huis, een driehoekig dak, een rechte deur, een wolk en een boom.
Teken een rond gezicht met twee ogen, een neus, een glimlach, twee oren en een hoed.
Teken een ronde zon met twee rechte zonnestralen, een vierkant huis, een driehoekig dak en een boom rechts.
Teken een vierkante geschenkdoos met een strik erbovenop, een ballon links ervan en een ster erboven.
Teken een rond gezicht met twee ronde ogen, een glimlach, twee oren en een hoed met een vierkante bovenkant.
Teken een lange rechthoekige bus met twee wielen, drie vierkante ramen en een deur.
Teken een bloem met vijf bloemblaadjes, twee bladeren, een rechte steel en een wolk erboven.
Teken een bus met twee wielen, drie ramen, een deur, een koplamp en een weg.
Teken een raket met een driehoekige punt, twee zijvinnen, drie ramen en vlammen.
Teken een boom met een brede stam, vijf bladeren, een vogel, gras en een wolk.
Teken een bus met twee ronde wielen, vier vierkante ramen, een deur, een chauffeur en een weg.
Teken een raket met een driehoekige neus, drie ronde ramen, twee vinnen, twee vlammen en een ster.
Teken een huis met twee verdiepingen, een schoorsteen, een voordeur, twee ramen boven en een boom links.
Teken een raket met een driehoekige neus, twee vleugels, drie ronde ramen en twee vlammen.
Teken een robot met een rond hoofd, twee antennes, een vierkant lichaam, vier knoppen en driehoekige voeten.
Teken een park met twee bankjes, een boom met drie takken, een vlieger en rechtsboven een zon.
Teken een zeilboot met twee zeilen, een vlag, drie golven en een ronde zon.
Teken een kasteel met twee torens, drie vlaggen, een deur, een brug en een zon.
Teken een vuurtoren met drie strepen, een felle lamp, twee golven, een vogel en een boot.
Teken een robot met een vierkant lichaam, twee armen, een rond hoofd, drie knoppen en driehoekige voeten.
Teken een kasteel met drie torens, twee vlaggen, een brug, vier ramen en een maan.
Teken een fiets met twee even grote wielen, pedalen, een zadel, een bel, een mand en een lamp.
Teken een huis met een driehoekig dak, een deur, twee vierkante ramen, een schoorsteen links, een hek en een zon rechtsboven.
Teken een fiets met twee even grote wielen, pedalen, een zadel, een mand voorop, een bel en een klein vlaggetje.
Teken een kasteel met drie torens, een poort met een boog, twee vlaggen, een slotgracht en een brug.
Teken een boomhut met een ladder, een raam, een touwschommel, een vogelnest en drie bladeren.
Teken een ruimteschip met twee ovale ramen, vier landingspoten, een ronde antenne en een planeet erachter.
Teken een trein met twee wagons, zes wielen, een schoorsteen, drie ramen en een stationsbord.
Teken een luchtballon met vier strepen, een mand, twee wolken en een vogel.
Teken een telescoop op een driepoot, gericht op de maan, met daarnaast drie sterren.
Teken een vuurtoren met drie strepen, een koepel, twee golven, een boot, een rots en een vogel.
Teken een robot met een vierkant hoofd, twee ronde ogen, vier knoppen, twee grijpers en twee driehoekige voeten.
Teken een robot met een rond hoofd, twee ongelijke vierkante ogen, twee antennes, drie knoppen, een grijper en een hand.
Teken een vuurtoren met vijf horizontale strepen, een lamp met een koepel, twee rotsen en rechts een boot.
Teken een brug met vier bogen, twee straatlantaarns, een fiets en drie golven eronder.
Teken een telescoop op een driepoot, gericht op een sikkelmaan, met drie sterren en een planeet met ringen.
Teken een kas met een schuin dak, vier panelen, twee planten in potten en een open deur.
Teken een onderzeeër met vier ronde ramen, een periscoop, twee schroeven en twee vissen.
Teken een hangbrug met twee torens, vier kabels, twee auto's en golven eronder.
Teken een raket met twee vinnen, drie ramen, een klein vlaggetje en een planeet.
Teken een robot met een rond hoofd, twee antennes, drie knoppen op zijn lichaam, twee gebogen armen, twee benen en een vierkante rugzak.
Teken een sterrenwacht met een koepel, een telescoop, een antenne, drie traptreden, twee sterren en een sikkelmaan.
Teken een robot met een rond hoofd, twee vierkante ogen, twee antennes, een rechthoekig lichaam, drie knoppen, twee armen met elk drie vingers en driehoekige voeten.
Teken een klokkentoren met Romeinse cijfers bij 3, 6, 9 en 12, twee ramen, een boog en een vlag.
Teken een zeilboot met drie verschillende zeilen, twee touwen, een kompasteken en golven aan beide kanten.
Teken een sterrenwacht met een open koepel, een naar buiten gerichte telescoop, drie treden, een antenne en een kleine planeet.
Teken een mechanische vogel met twee tandwielen, drie veren, een veervormige staart en ogen met verschillende vormen.
Teken een kathedraal met twee torens, een centrale deur, een roosvenster, vier treden en een klok.
Teken een satelliet met twee vierkante zonnepanelen, een antenne, een camera en daaronder de planeet aarde.
Teken een oude klok met Romeinse cijfers, twee wijzers, een slinger en drie versierde tandwielen.
Teken een hangbrug met twee torens, vier kabels, een bootje, een zon en drie golven.
Teken een onderzeeër met vier patrijspoorten, een periscoop, twee schroeven, een anker en twee vissen.
Teken een hangbrug met twee torens, vier kabels, vijf brugdekdelen, een boot eronder en linksboven een wolk.
Teken een laboratorium met een microscoop, drie bekerglazen, een spiraalvormige buis, een veiligheidsbril en een plafondlamp.
Teken de voorgevel van een kathedraal met een spitsboog, een roosvenster, twee spitsen, vijf treden en een luchtboog.
Teken een onderzeeër met twee schroeven, vier patrijspoorten, een periscoop, een anker, een sonarvin en een vis eronder.
Teken een windturbine met drie wieken, een toegangsladder, kabels, een schakelkast, een vogel en een ondergaande zon.
Teken een grote koepel van een sterrenwacht met een open spleet, een telescoop, een antenne, twee treden en vier sterren.
Teken een doorsnede van een onderzeeër met drie hutten, een periscoop, twee schroeven, een roer en een dieptemeter.
Teken een brug met drie bogen, vier lampen, twee kabels, een rivier en een boot eronder.
Teken een satelliet met een zeshoekig lichaam, twee zonnepanelen, drie antennes, twee ramen en een kleine planeet.
Teken een kasteel met vier ongelijke torens, drie vlaggen, een slotgracht, een brug, vijf ramen en een maan.
Teken een kasteel met vier torens waarvan de tweede het hoogst is, drie vlaggen, kantelen, een ophaalbrug, twee vissen in de gracht, drie kleine ramen links, rechts een sikkelmaan en linksboven een ster.
Teken een uurwerkmechanisme met vijf in elkaar grijpende tandwielen, een echappement, een veer, twee schroeven en een slinger.
Teken de skyline van een stad met twee hangkabels, drie koepels van verschillende hoogte, een verhoogde tram, een klok en een antenne.
Teken een satelliet met een zeshoekig lichaam, twee ongelijke zonnepanelen, vier antennes, een camera en een sikkelvormige aarde.
Teken een wenteltrap van bovenaf, met een buitenleuning, vijf zichtbare treden, een middenpaal en een geblokte vloer.
Teken een complexe sterrenwacht met een open koepel, een gesegmenteerde spiegel, drie steunstangen, een equatoriale montering, een uitlijnlaser en twee sterrenbeelden.
Teken een mechanische automaat met twee tegengesteld draaiende tandwielen, een nokvolger, een veer, een echappement, een slinger en vier bouten.
Teken een onmogelijke trap met vier trapdelen, twee boogdoorgangen, drie verschillende schaduwrichtingen en een hangende lantaarn.
Teken een schema van een onderzeeër met een dubbele romp, een ballasttank, een sonarinstallatie, een periscoop, twee schroeven en een dieptemeter.
Teken een geodetische kas met zes driehoekige panelen, een spiraalvormig pad binnenin, een verticale tuin, een watertank en een lamp op zonne-energie.`;
const ENGLISH=["Draw a large circle sun, one cloud, a square house, triangular roof and one door.", "Draw a cat with two triangle ears, round eyes, four legs and a long tail.", "Draw a bicycle with two wheels, a seat, handlebars, a bell and one basket.", "Draw one large circle sun, a square house, a triangular roof, a straight door, one cloud and one tree.", "Draw a round face with two eyes, a nose, a smile, two ears and a hat.", "Draw a circle sun, two straight rays, a square house, triangle roof and one tree on the right.", "Draw a square gift box, one bow on top, a balloon to its left and a star above it.", "Draw one round face, two circle eyes, a smile, two ears, and a hat with a square top.", "Draw a long rectangle bus with two wheels, three square windows and one door.", "Draw one flower with five petals, two leaves, one straight stem and a cloud above it.", "Draw a bus with two wheels, three windows, a door, a front light and a road.", "Draw a rocket with a triangle top, two side fins, three windows and flames.", "Draw a tree with a wide trunk, five leaves, a bird, grass and a cloud.", "Draw a bus with two round wheels, four square windows, one door, a driver and a road.", "Draw a rocket with a triangle nose, three round windows, two fins, two flames and a star.", "Draw a two-story house with chimney, front door, two upstairs windows and a tree to its left.", "Draw a rocket with triangular nose, two wings, three round windows and two flames.", "Draw a robot with round head, two antennae, square body, four buttons and triangle feet.", "Draw a park with two benches, a three-branch tree, a kite and sun at top right.", "Draw a sailboat with two sails, a flag, three waves and one circle sun.", "Draw a castle with two towers, three flags, a door, a bridge and a sun.", "Draw a lighthouse with three stripes, a bright lamp, two waves, a bird and one boat.", "Draw a robot with square body, two arms, round head, three buttons and triangle feet.", "Draw a castle with three towers, two flags, one bridge, four windows and a moon.", "Draw a bicycle with two equal wheels, pedals, a seat, a bell, a basket and one lamp.", "Draw a house with triangular roof, door, two square windows, chimney left, fence and top-right sun.", "Draw a bicycle with two equal wheels, pedals, seat, front basket, bell and small flag.", "Draw a castle with three towers, arched gate, two flags, a moat and bridge.", "Draw a treehouse reached by ladder, one window, rope swing, bird nest and three leaves.", "Draw a spaceship with two oval windows, four landing legs, round antenna and a planet behind it.", "Draw a train with two carriages, six wheels, a chimney, three windows and a station sign.", "Draw a hot-air balloon with four stripes, a basket, two clouds and a bird.", "Draw a telescope on a tripod, pointed at a moon, with three stars beside it.", "Draw a lighthouse with three stripes, a dome, two waves, a boat, a rock and one bird.", "Draw a robot with a square head, two round eyes, four buttons, two claws and two triangle feet.", "Draw a robot with round head, asymmetrical square eyes, two antennae, three buttons, one claw and one hand.", "Draw a lighthouse with five horizontal stripes, domed lamp, two rocks and a boat to its right.", "Draw a bridge with four arches, two streetlamps, a bicycle and three waves below.", "Draw a telescope on a tripod pointing to a crescent moon, three stars and a ringed planet.", "Draw a greenhouse with slanted roof, four panels, two potted plants and an open door.", "Draw a submarine with four round windows, a periscope, two propellers and two fish.", "Draw a suspension bridge with two towers, four cables, two cars and waves below.", "Draw a rocket with two fins, three windows, a small flag and a planet.", "Draw a robot with round head, two antennae, three body buttons, two bent arms, two legs and a square backpack.", "Draw an observatory with a dome, a telescope, an antenna, three stairs, two stars and a crescent moon.", "Draw a robot: round head, two square eyes, two antennae, rectangular body, three buttons, two arms with three fingers and triangle feet.", "Draw a clock tower with Roman numerals at 3, 6, 9 and 12, two windows, an arch and flag.", "Draw a sailboat with three different sails, two ropes, a compass symbol and waves on both sides.", "Draw an observatory with split dome, pointed telescope, three steps, antenna and tiny planet.", "Draw a mechanical bird with two gears, three feathers, spring tail and differently shaped eyes.", "Draw a cathedral with two towers, a central door, a rose window, four steps and a clock.", "Draw a satellite with two square solar panels, an antenna, a camera and planet Earth below.", "Draw an old clock with Roman numerals, two hands, a pendulum and three decorative gears.", "Draw a suspension bridge with two towers, four cables, a small boat, a sun and three waves.", "Draw a submarine with four portholes, a periscope, two propellers, an anchor and two fish.", "Draw a suspension bridge: two towers, four cables, five deck segments, a boat below and cloud top left.", "Draw a laboratory with microscope, three beakers, spiral tube, safety goggles and overhead lamp.", "Draw a cathedral facade: pointed arch, rose window, two spires, five steps and flying buttress.", "Draw a submarine with two propellers, four portholes, periscope, anchor, sonar fin and fish below.", "Draw a wind turbine with three blades, access ladder, cables, control box, bird and setting sun.", "Draw a large observatory dome with an open slit, telescope, antenna, two stairs and four stars.", "Draw a submarine cross-section with three cabins, periscope, two propellers, rudder and depth gauge.", "Draw a bridge with three arches, four lamps, two cables, a river and boat below.", "Draw a satellite with six-sided body, two solar panels, three antennae, two windows and a tiny planet.", "Draw a castle with four unequal towers, three flags, a moat, a bridge, five windows and a moon.", "Draw a castle: four towers with the second tallest, three flags, battlements, drawbridge, two moat fish, three small left windows, crescent moon on right and top-left star.", "Draw a watch mechanism with five interlocking gears, escapement, spring, two screws and pendulum.", "Draw a city skyline with two suspension cables, three different-height domes, elevated tram, clock and antenna.", "Draw a satellite with hexagonal body, two unequal solar panels, four antennae, camera and Earth crescent.", "Draw a spiral staircase seen from above, outer railing, five visible steps, central post and checkerboard floor.", "Draw a complex observatory: split dome, segmented mirror, three struts, equatorial mount, alignment laser and two constellations.", "Draw a clockwork automaton: two counter-rotating gears, cam follower, spring, escapement, crank and four bolts.", "Draw an impossible staircase with four flights, two archways, three shadow directions and suspended lantern.", "Draw a submarine schematic: double hull, ballast tank, sonar array, periscope, two propellers and depth gauge.", "Draw a geodesic greenhouse with six triangle panels, interior spiral path, vertical garden, water tank and solar lamp."];
export const REVIEWED_DUTCH_SHAPE_LINES=DUTCH.trim().split('\n');
if(REVIEWED_DUTCH_SHAPE_LINES.length!==75)throw Error(`Expected 75 shapes, got ${REVIEWED_DUTCH_SHAPE_LINES.length}`);

export const REVIEWED_DUTCH_SHAPES=Object.fromEntries(ENGLISH.map((en,i)=>[en,REVIEWED_DUTCH_SHAPE_LINES[i]]));
