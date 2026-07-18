# Aresta — image register

The campaign was generated 2026-07-17 with `tools/gen-image.mjs` (gpt-image,
Higgsfield MCP was down) using one constant art-direction phrase: clear
Atlantic daylight, pale mineral plaster, sand-toned concrete, limestone,
white oak, blackened bronze, and the five DESIGN.md swatches. Raw PNGs stay
in `assets-src/` (not shipped); optimized JPEGs (sips q78 full width, q74 at
800 px for `srcset`) ship from `public/images/`.

## Shipped campaign

| Asset | Role |
|---|---|
| `hero-west` | Hero — the west facade raked by last light, Atlantic behind |
| `stair` | The building — limestone stair, one aperture |
| `court` | Courts — Court II, the strawberry tree |
| `room-east` | Rooms by light — first light, 07:10 |
| `room-south` | Rooms by light — high light, 13:00 |
| `room-west` | Rooms by light — last light, 18:40 |
| `pool` | Water — the limestone pool aligned to the horizon |
| `bath` | Water — bath carved from a single block |
| `table` | The table — breakfast room at 08:00 |
| `service` | The table — the one human service moment (hands only) |
| `garden` | Courts — plateau planting as architecture |
| `material-stone` | Materials — limestone meets plaster, bronze shadow gap |
| `material-linen` | Materials — flax on oak |
| `place` | Place — the wild Carrapateira cliff, uninhabited |

`assets-src/place-v1-hasbuilding.png` is the rejected first take (it grew a
building; the section copy promises wild coast).

## Pre-brief studies

The original contemporary calibration references remain in `assets-src/`
(`color-board.jpg`, `room-*-reference.png`, `living/bath/dining-reference.png`).
They are not shipped and must not join the campaign — their architecture
predates the Carrapateira decision.

## Regeneration

`assets-src/gen-batch.sh` re-runs the whole campaign (skips files that
already exist; move a PNG aside to regenerate it).
