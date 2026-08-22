#!/bin/bash
# BENT image batch. One constant art-direction phrase across every prompt.
# The hour is argued from the subject: a wooden coaster crew works the circuit
# at first light, before the park opens. It is the only time the ride reads as
# a building rather than as a ride.
cd "$(dirname "$0")/../.." || exit 1
O=sites/bent/assets-src
AD="early morning light just after sunrise raking low and level through the structure, weathered silver-grey southern yellow pine timber, documentary architectural photography, deep clear shadows, cool blue shadow against warm low sun, film grain, no text, no logos, no signage, no lettering, no banners"

g() { node tools/gen-image-bench.mjs --prompt "$2" --out "$O/$1.png" --size "$3"; }

g hero "A very large wooden roller coaster structure photographed along its length at dawn, an enormous lattice of criss-crossed weathered timber bents receding into morning haze, completely empty, no train, no people, long shadows thrown across bare ground, hardwood ridges behind. Architectural, monumental, silent. $AD" 1536x1024

g bent "Looking straight up at a single A-frame timber bent of a wooden roller coaster from directly below, the two raking legs and cross-braces converging overhead against a pale dawn sky, bolt plates and washers visible in the weathered wood, strong geometry. $AD" 1024x1536

g laminate "Extreme macro of the freshly sawn cut end of a wooden roller coaster track: nine distinct stacked layers of laminated southern yellow pine, each layer's grain visible, a flat steel running rail bolted along the top edge, the newest layers bright golden against older grey ones. Museum specimen presentation on a workbench. $AD" 1536x1024

g walk "A carpenter in work clothes and a tool belt walking along the narrow wooden catwalk beside the track of a wooden roller coaster at first light, seen from behind in profile, small against the enormous timber structure around him, low sun behind. He is working, not posing. $AD" 1024x1536

g timber "A neat stack of newly milled bright golden southern yellow pine boards resting against the weathered silver-grey timber legs of a wooden roller coaster, the fresh gold wood vivid against the decades-old grey structure, sawdust on the ground, early light. $AD" 1536x1024

g salvage "A single cut section of laminated wooden roller coaster track lying on a heavy workbench in daylight, roughly three feet long, its nine pine layers visible at the sawn end, worn steel running rail still bolted on top, the wood polished smooth by decades of wheels. Studied like an artifact. $AD" 1536x1024

echo "BATCH DONE"
