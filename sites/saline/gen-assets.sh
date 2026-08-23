#!/usr/bin/env bash
# SALINE — the batch. Run from the repo root.
#
# One constant art-direction phrase across every prompt: that is what makes the
# eight plates read as one photographer's afternoon rather than eight stock
# pictures. See docs/foundry-standard.md § Imagery.
set -euo pipefail

AD="high summer midday on the marais salants of Guerande in Brittany, hard clear overhead sunlight, bleached pale clay banks and shallow standing water, documentary photography, natural colour, crisp and generously lit, no haze, no text, no signage, no lettering"

OUT=sites/saline/assets-src
G="node tools/gen-image-bench.mjs"

# ---------------------------------------------------------------- landscape
$G --size 1536x1024 --out $OUT/aerial.png --prompt \
"Low aerial view looking down on a working salt marsh: dozens of shallow rectangular clay evaporation pans in an irregular hand-cut grid, separated by narrow pale clay walkways. The pans hold water at three different concentrations across the frame — deep green in the largest pans, pale sand-coloured in the middle ones, and vivid rose-pink in the smallest pans at the far side. A few white heaps of harvested salt sit on the banks. ${AD}"

$G --size 1536x1024 --out $OUT/tremet.png --prompt \
"A narrow pale clay walkway running straight away from the camera to a low flat horizon, water on both sides reflecting an empty bright sky, the walkway barely wider than a person, cracked dry clay surface, distant heaps of white salt and a low line of marsh grass at the horizon. ${AD}"

$G --size 1536x1024 --out $OUT/gros-sel.png --prompt \
"A heap of wet coarse grey sea salt piled on a smooth clay platform at the edge of a shallow pan, still damp, faint rake furrows drawn through it, individual crystals catching the sun, blue-grey clay visible beneath. ${AD}"

$G --size 1536x1024 --out $OUT/fleur.png --prompt \
"Extreme close view across the surface of still shallow brine: a delicate white crust of fine salt crystals floating on the surface tension in a broken lattice, the rose-pink brine visible through the gaps, raking light catching each crystal edge, absolutely still water. ${AD}"

$G --size 1536x1024 --out $OUT/las.png --prompt \
"A long wooden rake with a flat board head, more than five metres of pale ash shaft, resting across the clay edge of a salt pan, worn smooth by decades of hands, no metal parts, the still brine of the pan beyond it. ${AD}"

# ---------------------------------------------------------------- portraits
$G --size 1024x1536 --out $OUT/paludier-1.png --prompt \
"A woman in her thirties standing at the edge of a shallow salt pan, bent forward, skimming a fine white crust of salt from the water surface with a wide flat wooden skimmer on a long handle. Her face is clearly visible and lit, absorbed in the work, sun-browned, hair tied back, plain worn work clothes. A real working moment, not posed. ${AD}"

$G --size 1024x1536 --out $OUT/paludier-2.png --prompt \
"Two salt workers on a narrow clay walkway heaping coarse grey salt into a tall conical mound with long wooden rakes, caught mid-lift, both faces visible, plain work clothes damp with sweat, the white heap rising between them. A real working moment, not posed. ${AD}"

$G --size 1024x1536 --out $OUT/paludier-3.png --prompt \
"Portrait of a weathered man in his sixties at the end of a working day, standing on the clay bank of a salt marsh, looking directly at the camera, squinting slightly against the sun, deeply sunburnt forearms with dried salt on the skin, a wooden rake held upright beside him, plain worn clothes. ${AD}"

echo "batch complete: $(ls -1 $OUT/*.png | wc -l | tr -d ' ') plates"
