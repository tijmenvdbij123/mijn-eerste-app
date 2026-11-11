const LEVELS = ["beginner", "novice", "amateur", "intermediate", "competent", "skilled", "advanced", "grandmaster"];

// Five distinct hand-curated drawing situations at EACH of eight levels.
const SCENES = {
  beginner: [
    "SUNNY DAY|sun|cloud|ball|stick person|tree|flower",
    "AT HOME|square house|triangle roof|door|window|sun|cat",
    "AT THE PARK|tree|ball|bench|bird|flower|sun",
    "RAINY DAY|cloud|rain|umbrella|puddle|boots|house",
    "AT THE BEACH|sun|water|sand|bucket|ball|fish"],
  novice: [
    "PICNIC|picnic blanket|basket|tree|kite|dog|sun",
    "FARM|barn|cow|tractor|fence|haystack|chicken",
    "PLAYGROUND|slide|swing|sandbox|seesaw|tree|bench",
    "BUS STOP|bus|backpack|clock|traffic light|road|student",
    "UNDERWATER|fish|octopus|seaweed|coral|shell|sunken boat"],
  amateur: [
    "BUSY STREET|bus|bicycle|streetlamp|zebra crossing|bakery|pigeon",
    "CAMPING TRIP|tent|campfire|backpack|flashlight|mountain|stream",
    "CASTLE COURT|castle|drawbridge|knight|flag|horse|tower",
    "TRAIN STATION|train|clock tower|ticket booth|platform|suitcase|bench",
    "SPORTING EVENT|stadium|goal|scoreboard|referee|whistle|trophy"],
  intermediate: [
    "ARCTIC BASE|igloo|snowmobile|radio mast|scientist|polar bear|weather station",
    "MOVIE SET|camera crane|director's chair|boom microphone|spotlight|green screen|clapperboard",
    "SPACE MISSION|rocket|astronaut|satellite|space capsule|solar panels|planet",
    "HARBOR|container ship|lighthouse|crane|lifebuoy|anchor|drawbridge",
    "SCIENCE FAIR|microscope|volcano model|robot arm|display board|telescope|lab goggles"],
  competent: [
    "SPACE STATION|rocket|astronaut|planet|satellite|space station|meteor",
    "MEDIEVAL CITY|watchtower|waterwheel|arched bridge|market stall|horse carriage|clock tower",
    "MUSEUM|fossil skeleton|ancient vase|statue|glass display|grand staircase|security camera",
    "MOUNTAIN RESCUE|helicopter|rope bridge|mountain climber|snowy cliff|rescue stretcher|radio tower",
    "SCIENCE LAB|electron microscope|centrifuge|test tube rack|safety shower|robotic hand|whiteboard equation"],
  skilled: [
    "ARCHITECT'S OFFICE|blueprint|spiral staircase model|caliper|scale ruler|suspension bridge model|skylight",
    "DEEP-SEA EXPEDITION|submersible|sonar screen|pressure gauge|bioluminescent fish|hydrothermal vent|robotic claw",
    "PLANETARIUM|star projector|celestial dome|refracting telescope|constellation chart|orbit model|moon phases",
    "ARCHAEOLOGICAL DIG|excavation grid|trowel|ancient column|artifact catalog|stratified soil|protective canopy",
    "WIND FARM|offshore turbine|service boat|transformer|subsea cable|maintenance crane|control center"],
  advanced: [
    "FUTURISTIC CITY|suspension bridge|solar-panel roof|delivery drone|observatory dome|elevated railway|hologram billboard",
    "SPACE OBSERVATORY|segmented telescope mirror|solar shield|orbital antenna|spectrograph|docking hatch|constellation map",
    "COMPLEX MACHINE|interlocking gears|hydraulic piston|timing belt|pressure dial|cooling fan|circuit board",
    "ANCIENT TEMPLE|corbelled arch|spiral relief|six columns|interior shrine|stone staircase|sunken courtyard",
    "SUSTAINABLE DISTRICT|rainwater tank|green roof|vertical garden|tram line|wind turbine|bike bridge"],
  grandmaster: [
    "IMPOSSIBLE LABORATORY|Möbius strip|Escher-style staircase|Foucault pendulum|nested gyroscope|fractal diagram|optical prism",
    "HISTORIC CLOCKWORK|escapement mechanism|pendulum regulator|differential gear|weight pulley|moon-phase dial|chronograph face",
    "UNDERWATER METROPOLIS|pressure dome|submerged monorail|geodesic habitat|tidal generator|bioluminescent garden|research submersible",
    "COMPLEX OBSERVATORY|radio telescope array|spectrometer|adaptive optics mirror|equatorial mount|rotating dome|star-tracking computer",
    "MATHEMATICAL GARDEN|Penrose tiles|hyperbolic sculpture|Fibonacci spiral|topological torus|geodesic arch|recursive hedge"],
};

const SKETCH = {
  beginner: ["sun|ball|fish|cat|hat|cup", "tree|star|dog|car|moon|flower", "apple|book|house|bird|cake|shoe", "bed|boat|rain|egg|sock|banana", "kite|duck|chair|clock|bear|pencil"],
  novice: ["umbrella|bike|pizza|turtle|guitar|rocket", "sandcastle|train|basket|cookie|dragon|pillow", "backpack|candle|teapot|snail|donut|rainbow", "school bus|glasses|octopus|balloon|camera|ice cream", "ladder|wheelbarrow|sailboat|fishbowl|helmet|cactus"],
  amateur: ["bicycle|pizza|lighthouse|turtle|guitar|umbrella", "rocket|sandwich|castle|candle|octopus|backpack", "windmill|skateboard|kangaroo|submarine|campfire|snowman", "telescope|waterfall|helicopter|fountain|saxophone|firetruck", "aquarium|carousel|parachute|chessboard|traffic light|scarecrow"],
  intermediate: ["compass|suspension bridge|microscope|hot-air balloon|hammock|watermill", "satellite|catapult|periscope|observatory|violin case|hourglass", "amphitheater|wind turbine|archway|lifeboat|ice sculpture|harp", "volcano crater|subway station|planetarium|lunar rover|grand piano|gondola", "fossil|lighthouse lens|water tower|solar panel|chess knight|zip line"],
  competent: ["telescope|windmill|lighthouse|roller coaster|microscope|scarecrow", "hydroelectric dam|satellite dish|greenhouse|scuba diver|cello|compass rose", "spiral staircase|radio tower|dinosaur fossil|hot-air balloon|anchor chain|robotic arm", "sundial|drawbridge|weather vane|planetarium dome|suspension bridge|gyroscope", "wind turbine|astronaut helmet|tropical reef|viaduct|metronome|parachute"],
  skilled: ["suspension bridge|sextant|astrolabe|mechanical clock|submersible|harpsichord", "orchestra conductor|satellite array|wind tunnel|hydraulic press|DNA double helix|cathedral", "rocket nozzle|radio telescope|stone aqueduct|water turbine|time-lapse camera|crane", "spiral galaxy|optical prism|seismograph|amphitheater|monorail|periscope", "fossil ammonite|weather radar|circuit board|geodesic dome|sculpture|steampunk locomotive"],
  advanced: ["gyroscope|observatory dome|coral atoll|gear differential|suspension bridge|Möbius strip", "tessellation|steam engine valve|baroque cathedral|spectrometer|photovoltaic cell|molecular model", "Penrose triangle|archaeological dig|aircraft carrier|hydraulic piston|orbital satellite|catenary arch", "sonar display|geodesic dome|fractal fern|spiral staircase|turbine blade|kinetic sculpture", "perpendicular bisector|magnetic field|elliptical orbit|origami crane|parabolic antenna|sextant"],
  grandmaster: ["Foucault pendulum|Klein bottle|Möbius strip|geodesic dome|Fibonacci spiral|astrolabe", "Penrose tiling|quasicrystal|hyperbolic paraboloid|fractal geometry|gyroscopic stabilizer|interference pattern", "Rube Goldberg machine|isometric projection|corbelled arch|topological torus|harmonic oscillator|spectrograph", "electromagnetic coil|differential gear|spiral galaxy|recursive sculpture|equatorial mount|wave interference", "Voronoi diagram|Cantor set|optical illusion staircase|carbon nanotube|seismographic trace|elliptical orbit"],
};

const SHAPES = {
  beginner: [
    "Draw a circle sun, two straight rays, a square house, triangle roof and one tree on the right.",
    "Draw a square gift box, one bow on top, a balloon to its left and a star above it.",
    "Draw one round face, two circle eyes, a smile, two ears, and a hat with a square top.",
    "Draw a long rectangle bus with two wheels, three square windows and one door.",
    "Draw one flower with five petals, two leaves, one straight stem and a cloud above it."],
  novice: [
    "Draw a two-story house with chimney, front door, two upstairs windows and a tree to its left.",
    "Draw a rocket with triangular nose, two wings, three round windows and two flames.",
    "Draw a robot with round head, two antennae, square body, four buttons and triangle feet.",
    "Draw a park with two benches, a three-branch tree, a kite and sun at top right.",
    "Draw a sailboat with two sails, a flag, three waves and one circle sun."],
  amateur: [
    "Draw a house with triangular roof, door, two square windows, chimney left, fence and top-right sun.",
    "Draw a bicycle with two equal wheels, pedals, seat, front basket, bell and small flag.",
    "Draw a castle with three towers, arched gate, two flags, a moat and bridge.",
    "Draw a treehouse reached by ladder, one window, rope swing, bird nest and three leaves.",
    "Draw a spaceship with two oval windows, four landing legs, round antenna and a planet behind it."],
  intermediate: [
    "Draw a robot with round head, asymmetrical square eyes, two antennae, three buttons, one claw and one hand.",
    "Draw a lighthouse with five horizontal stripes, domed lamp, two rocks and a boat to its right.",
    "Draw a bridge with four arches, two streetlamps, a bicycle and three waves below.",
    "Draw a telescope on a tripod pointing to a crescent moon, three stars and a ringed planet.",
    "Draw a greenhouse with slanted roof, four panels, two potted plants and an open door."],
  competent: [
    "Draw a robot: round head, two square eyes, two antennae, rectangular body, three buttons, two arms with three fingers and triangle feet.",
    "Draw a clock tower with Roman numerals at 3, 6, 9 and 12, two windows, an arch and flag.",
    "Draw a sailboat with three different sails, two ropes, a compass symbol and waves on both sides.",
    "Draw an observatory with split dome, pointed telescope, three steps, antenna and tiny planet.",
    "Draw a mechanical bird with two gears, three feathers, spring tail and differently shaped eyes."],
  skilled: [
    "Draw a suspension bridge: two towers, four cables, five deck segments, a boat below and cloud top left.",
    "Draw a laboratory with microscope, three beakers, spiral tube, safety goggles and overhead lamp.",
    "Draw a cathedral facade: pointed arch, rose window, two spires, five steps and flying buttress.",
    "Draw a submarine with two propellers, four portholes, periscope, anchor, sonar fin and fish below.",
    "Draw a wind turbine with three blades, access ladder, cables, control box, bird and setting sun."],
  advanced: [
    "Draw a castle: four towers with the second tallest, three flags, battlements, drawbridge, two moat fish, three small left windows, crescent moon on right and top-left star.",
    "Draw a watch mechanism with five interlocking gears, escapement, spring, two screws and pendulum.",
    "Draw a city skyline with two suspension cables, three different-height domes, elevated tram, clock and antenna.",
    "Draw a satellite with hexagonal body, two unequal solar panels, four antennae, camera and Earth crescent.",
    "Draw a spiral staircase seen from above, outer railing, five visible steps, central post and checkerboard floor."],
  grandmaster: [
    "Draw a complex observatory: split dome, segmented mirror, three struts, equatorial mount, alignment laser and two constellations.",
    "Draw a clockwork automaton: two counter-rotating gears, cam follower, spring, escapement, crank and four bolts.",
    "Draw an impossible staircase with four flights, two archways, three shadow directions and suspended lantern.",
    "Draw a submarine schematic: double hull, ballast tank, sonar array, periscope, two propellers and depth gauge.",
    "Draw a geodesic greenhouse with six triangle panels, interior spiral path, vertical garden, water tank and solar lamp."],
};

// V3.3 moves the old drawing packs up one level (no Beginner assignment),
// keeps Grandmaster's former Advanced and Expert packs, and adds simpler
// purpose-made cards at every playable level.
const SHIFTED_LEVEL = {
  novice: "beginner", amateur: "novice", intermediate: "amateur",
  competent: "intermediate", skilled: "competent", advanced: "skilled",
  grandmaster: "advanced",
};
const EASIER_V33 = {
  novice: {
    scenes: ["GARDEN|sun|flower|tree|butterfly|cloud|ball", "FAMILY ROOM|sofa|lamp|rug|window|cat|book"],
    sketches: ["sun|dog|cup|tree|ball|hat", "fish|house|star|apple|car|shoe"],
    shapes: ["Draw one large circle sun, a square house, a triangular roof, a straight door, one cloud and one tree.", "Draw a round face with two eyes, a nose, a smile, two ears and a hat."],
  },
  amateur: {
    scenes: ["PLAYGROUND|slide|swing|tree|ball|bench|sun", "FARMYARD|barn|cow|fence|chicken|sun|tree"],
    sketches: ["pizza|bike|cake|clock|duck|train", "turtle|rainbow|pencil|umbrella|basket|rocket"],
    shapes: ["Draw a bus with two round wheels, four square windows, one door, a driver and a road.", "Draw a rocket with a triangle nose, three round windows, two fins, two flames and a star."],
  },
  intermediate: {
    scenes: ["CAMPING|tent|tree|campfire|backpack|mountain|star", "BUSY PARK|fountain|dog|cyclist|tree|bench|pond"],
    sketches: ["castle|windmill|lighthouse|guitar|helmet|pancake", "helicopter|octopus|firetruck|skateboard|volcano|sailboat"],
    shapes: ["Draw a castle with three towers, two flags, one bridge, four windows and a moon.", "Draw a bicycle with two equal wheels, pedals, a seat, a bell, a basket and one lamp."],
  },
  competent: {
    scenes: ["TRAIN JOURNEY|train|station clock|suitcase|bench|ticket|platform", "MUSEUM TRIP|statue|painting|stairs|bench|guide|display case"],
    sketches: ["telescope|submarine|scarecrow|bridge|aquarium|carousel", "microscope|windmill|parachute|saxophone|lighthouse|campfire"],
    shapes: ["Draw a lighthouse with three stripes, a dome, two waves, a boat, a rock and one bird.", "Draw a robot with a square head, two round eyes, four buttons, two claws and two triangle feet."],
  },
  skilled: {
    scenes: ["SPACE TRIP|rocket|astronaut|moon|planet|satellite|stars", "OLD TOWN|clock tower|bridge|market|fountain|horse|gate"],
    sketches: ["roller coaster|robot arm|hot-air balloon|compass|water tower|fossil", "greenhouse|astronaut|wind turbine|zip line|radio tower|aqueduct"],
    shapes: ["Draw a robot with round head, two antennae, three body buttons, two bent arms, two legs and a square backpack.", "Draw an observatory with a dome, a telescope, an antenna, three stairs, two stars and a crescent moon."],
  },
  advanced: {
    scenes: ["SCIENCE LAB|microscope|test tubes|gloves|whiteboard|robot hand|safety sign", "HARBOR|lighthouse|container ship|crane|anchor|bridge|lifebuoy"],
    sketches: ["satellite dish|submersible|harpsichord|cathedral|sextant|suspension bridge", "orbit model|hydraulic press|geodesic dome|weather radar|metronome|prism"],
    shapes: ["Draw a suspension bridge with two towers, four cables, a small boat, a sun and three waves.", "Draw a submarine with four portholes, a periscope, two propellers, an anchor and two fish."],
  },
  grandmaster: {
    scenes: ["FUTURE CITY|tram|solar panels|drone|skyscraper|sky bridge|wind turbine", "SPACE OBSERVATORY|telescope|solar sail|antenna|astronaut|moon|orbital platform"],
    sketches: ["spectrometer|tessellation|gyroscope|seismograph|geodesic dome|spiral staircase", "observatory dome|submersible|hydraulic piston|fractal fern|prism|sextant"],
    shapes: ["Draw a satellite with six-sided body, two solar panels, three antennae, two windows and a tiny planet.", "Draw a castle with four unequal towers, three flags, a moat, a bridge, five windows and a moon."],
  },
};

function scenePrompt(line) {
  const [title, ...items] = line.split("|");
  return { text: `DRAW ONE SCENE: ${title}\n${items.map((item, j) => `${j + 1}. ${item}`).join("\n")}` };
}
const extraAt = (level, key) => EASIER_V33[level]?.[key] || [];
const levelPool = (pack, level) => level === "beginner" ? [] :
  level === "grandmaster" ? [...pack.advanced, ...pack.grandmaster] : pack[SHIFTED_LEVEL[level]];

export const DRAWING_PACKS = {
  "picture-race": Object.fromEntries(LEVELS.map((level, i) => [level, {
    prompts: [...levelPool(SCENES, level), ...extraAt(level, "scenes")].map(scenePrompt),
    description: "Start the 150-second timer before revealing. Every active teammate contributes to ONE shared picture. Include the requested details; there is no guessing phase. Another team checks the drawing afterward.",
    win: `Draw at least ${i < 4 ? 4 : 5} of the SIX requested details clearly within 150 seconds.`,
  }])),
  "sketch-guess": Object.fromEntries(LEVELS.map((level, i) => [level, {
    prompts: [...levelPool(SKETCH, level), ...extraAt(level, "sketches")].map((line) => ({ text: `SECRET DRAWING LIST — SIX\n${line.split("|").map((item) => item[0].toUpperCase() + item.slice(1)).join(" • ")}` })),
    description: "Start the 150-second timer BEFORE revealing. One active teammate draws each secret clue without words or letters while teammates guess.",
    win: `Guess at least ${i < 4 ? 4 : 5} of the six objects within 150 seconds.`,
  }])),
  "shape-copy": Object.fromEntries(LEVELS.map((level, i) => [level, {
    prompts: [...levelPool(SHAPES, level), ...extraAt(level, "shapes")].map((text) => ({ text })),
    previewSeconds: [null,30,30,null,null,30,30,15][i],
    alwaysVisible: i === 3 || i === 4,
    description: `Start the 150-second timer before revealing. Only the selected players can study the shape card ${i === 3 || i === 4 ? "throughout the drawing challenge" : `for ${[null,30,30,null,null,30,30,15][i] || 30} seconds`}. Their teammates must look away. The host can reveal the reference when time ends.`,
    win: "The active player's drawing must include more correctly placed features than the defender's. A tie blocks the point.",
  }])),
};
