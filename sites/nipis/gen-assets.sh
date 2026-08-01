#!/bin/bash
# Nipis image batch. One constant art-direction phrase across every prompt —
# this is what makes the site read as one photographer's work.
cd "$(dirname "$0")/../.." || exit 1
M=gpt-image-2
AD="bright soft backlit tropical morning daylight through a wooden capiz-shell window, sheer ivory pineapple-fibre cloth read against the light, pale ivory and ecru and raw fibre tones with deep green only where there is real leaf, documentary craft photography, shallow depth of field, no text, no logos, no signage, no lettering"
O=sites/nipis/assets-src

g() { node tools/gen-image.mjs --model $M --prompt "$2" --out "$O/$1.png" --size "$3" --quality high; }

g hero-window "A finished sheer ivory barong Tagalog shirt on a carved wooden hanger, hung in front of a large bright window of translucent capiz shell panes. The daylight passes straight through the fabric so the garment glows and its embroidered chest panel reads as delicate shadow tracery. The cloth is visibly transparent. $AD" 1536x1024

g kiskis "Close view of a Filipino craftsman's weathered hands drawing a broken porcelain shard along the length of a long green pineapple leaf on a wooden board, scraping to free pale hair-fine fibres that separate and catch the light. Deep green leaf against pale ivory fibre. $AD" 1536x1024

g hibla "Extreme macro of hair-fine pale ivory pineapple-leaf fibres, hand-knotted end to end into one continuous thread, lying on dark aged hardwood. The fibres are almost translucent and catch a rim of window light. $AD" 1024x1536

g habi "A wooden handloom strung with a warp of pale ivory pineapple fibre, the shed open, seen against a bright window so the fine warp threads glow as thin parallel lines of light. Bamboo and hardwood loom parts. $AD" 1536x1024

g burda "A Filipina embroiderer's hands and a fine needle working delicate drawn-thread openwork embroidery on sheer ivory cloth stretched taut in a round wooden embroidery frame, held near a bright window. Her face is softly lit at the edge of the frame, concentrating on the needle. $AD" 1536x1024

g mananahi "A Filipino tailor at a worn wooden bench, large steel shears in hand, laying out a cut panel of sheer ivory cloth beside chalk and a paper pattern. He is lit by a broad window behind him, calm and absorbed in the work. $AD" 1024x1536

g aparador "Three finished sheer ivory and ecru barong Tagalog shirts hanging on plain wooden hangers against a pale limewashed wall in bright daylight, their embroidered front panels reading as fine shadow. Editorial, generous space. $AD" 1536x1024

g sukat "A tailor's worktable from above: a cloth tape measure, tailor's chalk, a folded length of sheer ivory pineapple cloth, and a blank paper spec sheet with pencil. Warm worn wood, bright window light raking across. $AD" 1536x1024

echo "BATCH DONE"
ls -la $O
