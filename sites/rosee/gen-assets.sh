#!/bin/bash
# Rosée image batch. One constant art-direction phrase across every prompt.
# Aubade, argued from the subject: jasmine and rose are picked before sunrise
# because that is when the oil is highest. The light is harvest dawn.
cd "$(dirname "$0")/../.." || exit 1
M=gpt-image-2
AD="clear cool Provencal dawn light just before sunrise, dew still on everything, pale limestone and wicker and glass, soft generous natural light with long low shadows, documentary craft photography, shallow depth of field, no text, no logos, no signage, no lettering"
O=sites/rosee/assets-src
g() { node tools/gen-image.mjs --model $M --prompt "$2" --out "$O/$1.png" --size "$3" --quality high; }

g hero-cueillette "A picker's hands lifting small white jasmine blossoms into a large woven wicker basket held at the waist, in a jasmine field at first light. Dew on the petals, the blossoms luminous against dark green leaves. $AD" 1536x1024
g champ "Long rows of low jasmine bushes in a Provencal field at dawn, mist lying between the rows, hills behind, the first light coming in low and level across the crop. $AD" 1536x1024
g jasmin "Extreme macro of freshly picked white jasmine blossoms heaped in a wicker basket, each flower still carrying droplets of dew, cool morning light. $AD" 1024x1536
g rose-mai "A heap of pale pink centifolia rose petals in a shallow wicker tray on a stone table, just picked, dew on them, cool dawn light raking across. $AD" 1536x1024
g alambic "A row of tall copper extraction vessels and a still in a whitewashed stone workshop, morning light falling through a high window onto the polished copper. $AD" 1024x1536
g concrete "A small glass beaker holding thick waxy amber-gold floral concrete on a pale stone bench, a steel spatula beside it, cool morning light through a window. $AD" 1536x1024
g orgue "A perfumer's organ: tiered wooden shelves crowded with small amber and clear glass bottles of essences, a stack of paper smelling strips in front, soft morning light from the left. $AD" 1536x1024
g nez "A woman perfumer at her perfumer's organ holding a paper smelling strip to her nose with her eyes lowered in concentration, surrounded by small glass bottles, lit softly by a large window at dawn. $AD" 1024x1536
g collection "Three plain glass perfume bottles with pale unlabelled stoppers standing on a rough pale limestone slab, cool dawn light from one side casting long shadows, a sprig of jasmine beside them. $AD" 1536x1024
g commander "A packing table seen from above: a plain glass perfume bottle, a small wooden box lined with wood wool, blank paper labels, twine and scissors on pale stone, cool morning light. $AD" 1536x1024
echo "BATCH DONE"
