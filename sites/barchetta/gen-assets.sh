#!/bin/bash
# Barchetta image batch. One constant art-direction phrase across every prompt.
# Nocturne register: the subject is ALWAYS fully modelled in generous warm
# light — the darkness is what surrounds it, never what covers it.
cd "$(dirname "$0")/../.." || exit 1
M=gpt-image-2
AD="lit by a single warm work lamp that fully and generously models the subject, soft amber fill, deep near-black surroundings, worn wooden tailor's board, rich and legible rather than murky, documentary craft photography, shallow depth of field, no text, no logos, no signage, no lettering"
O=sites/barchetta/assets-src

g() { node tools/gen-image.mjs --model $M --prompt "$2" --out "$O/$1.png" --size "$3" --quality high; }

g hero-board "A half-made unlined tailored jacket in soft brown wool lying open on a worn wooden tailor's board, white basting thread running through it, tailor's chalk and long steel shears beside it. The coat's inside is turned up so the canvas shows. $AD" 1536x1024

g crine "Extreme macro of layered horsehair canvas and a woollen chest piece, pad-stitched together with rows of small hand stitches in pale thread, the coarse weave of the haircloth catching the lamp. $AD" 1024x1536

g imbastitura "Close view of an Italian tailor's hands drawing a long needle and white basting thread through brown jacket cloth and its canvas interlining, a thimble on the middle finger, the stitch line running away into shadow. $AD" 1536x1024

g spalla "Close detail of a soft shirt-style shoulder on a tailored jacket — the sleeve head gathered in fine ripples into the armhole, hand-stitched, seen in raking lamplight against a dark ground. $AD" 1024x1536

g barchetta "Macro detail of a curved boat-shaped breast pocket on a brown tailored jacket, its gently rising crescent line hand-stitched, the cloth's twill visible, warm lamplight raking across. $AD" 1536x1024

g maestro "An older Italian master tailor at his wooden board, chalk in hand, marking a paper pattern on cloth. His face is lit warmly by the single work lamp above the board, absorbed and calm, deep dark room behind him. $AD" 1024x1536

g prova "A basted-together jacket in progress on a wooden tailor's dress form, held with long white basting stitches and raw unfinished edges, one sleeve pinned, lit by the work lamp against a dark studio. $AD" 1536x1024

g pronte "Three finished soft-shouldered tailored jackets in tobacco brown, indigo and pale grey hanging on wooden hangers from a rail, lit warmly from one side against a dark wall. $AD" 1536x1024

g ordinare "A tailor's worktable seen from above: a cloth tape measure, tailor's chalk, long steel shears, a folded paper pattern and a blank order slip on dark worn wood, warm lamplight pooling across it. $AD" 1536x1024

echo "BATCH DONE"
