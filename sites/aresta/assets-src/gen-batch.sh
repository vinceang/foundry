#!/bin/zsh
# Aresta image campaign — one constant art-direction phrase across the batch.
set -u
cd /Users/vincentang/Documents/projects/foundry

BASE="Photorealistic architectural photography, clear Atlantic daylight with a visible sun direction, contemporary Portuguese coastal architecture: pale mineral plaster walls, sand-toned in-situ concrete, pale limestone, white oak joinery, blackened bronze details. Muted palette of sun-bleached flax, grey-beige mineral plaster, lichen green-ochre, bronze oak, deep eucalyptus green. Precise minimal composition, crisp shadow lines, generous negative space, calm and exact. No text, no signage, no logos, no people."

OUT=sites/aresta/assets-src

gen() {
  local name=$1 size=$2 prompt=$3
  if [[ -f $OUT/$name.png ]]; then echo "skip $name"; return; fi
  echo "=== $name"
  node tools/gen-image.mjs --prompt "$prompt $BASE" --out "$OUT/$name.png" --size "$size" --quality high || echo "FAILED $name"
}

gen hero-west 1536x1024 "A long low two-storey hotel of pale mineral plaster standing on a clifftop plateau of dry bleached grass, seen from the southwest so the long west facade recedes in perspective. A strict rhythm of identical deep recessed window bays, each reveal 90cm deep. Late-afternoon sun rakes along the facade so every reveal casts a long crisp diagonal shadow; calm Atlantic horizon behind the building."

gen court 1024x1536 "A planted interior courtyard cut into a contemporary hotel: pale mineral plaster walls on all sides, one sculptural strawberry tree with dark trunk, low coastal heath planting, a narrow still water channel in pale limestone paving, strong midday sun casting one hard diagonal shadow across the wall."

gen stair 1024x1536 "A pale limestone staircase between two mineral plaster walls inside a contemporary hotel, sunlight entering from a tall narrow aperture above, one crisp diagonal blade of light across the steps, blackened bronze handrail set flush into the wall."

gen room-east 1536x1024 "A contemporary hotel bedroom in the early morning at first light: low warm sunrise light entering through one deep oak-lined window reveal, falling across a bed dressed in sun-bleached flax linen, mineral plaster walls, pale limestone floor, view to a green planted court, long soft morning shadows."

gen room-south 1536x1024 "The same style of contemporary hotel bedroom at midday under high sun: a sharp bright trapezoid of sunlight cast on the pale limestone floor through a deep window reveal, bed dressed in flax linen against an oak headboard wall, mineral plaster walls, glimpse of a pool terrace beyond, shadows short and crisp."

gen room-west 1536x1024 "The same style of contemporary hotel bedroom in the last hour of daylight: low golden-rose evening sun over the Atlantic entering through a full-height window, the ocean horizon visible, walnut joinery glowing warm, bed in flax linen half in deep shadow, long warm shadows across the limestone floor."

gen pool 1536x1024 "A long narrow swimming pool cut from pale limestone on a clifftop terrace, water a deep mineral eucalyptus green, aligned exactly with the flat Atlantic horizon beyond, one pale plaster wall running along one side, low evening sun, empty and still."

gen bath 1024x1536 "A bathtub carved from one block of pale limestone standing in a mineral plaster niche, a single brushed bronze spout from the wall, high side light from a deep concealed window, one folded flax linen towel on the stone rim, steam faintly visible in the light."

gen table 1536x1024 "A hotel breakfast room in morning light: one long white oak table with precise joinery, pale ceramic tableware set for breakfast, mineral plaster walls, floor-to-ceiling glass opening to a planted court, low morning sun laying a band of light along the table."

gen garden 1024x1536 "Coastal planting treated as architecture beside a pale plaster wall: clipped rounded coastal heath, silver-green grasses, one low wall of dark schist stone covered in pale green lichen, raking afternoon sun, composition exact and calm."

gen place 1536x1024 "The wild cliff edge of the Costa Vicentina at Carrapateira, Portugal: dark grey-brown schist cliffs breaking into the Atlantic, a plateau of dry bleached grass and low green heath above, clear afternoon light, no buildings, the horizon perfectly level."

gen material-stone 1024x1536 "Extreme close-up of architecture: the joint where a pale limestone floor meets a mineral plaster wall, with a recessed blackened bronze shadow-gap channel between them, raking side light revealing the grain of both materials."

gen material-linen 1024x1536 "Extreme close-up: heavy sun-bleached flax linen folded on a white oak shelf with precise joinery, raking warm light revealing the weave of the linen and the grain of the oak, deep shadow to one side."

gen service 1536x1024 "The hands of a hotel staff member in a plain flax apron placing a pale ceramic coffee service on a deep limestone window ledge in morning light, composition cropped to hands and ledge, faces not visible, calm and precise."

echo "BATCH DONE"
ls -la $OUT/*.png
