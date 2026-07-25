# VETA — Design source of truth

*Written 2026-07-24, before any component. A maker (not a hotel) in the
Aubade register: a custom surfboard shaping bay on the Oaxacan coast.*

## The one-line brief

**One line down the blank decides the whole board.**

## Identity

**Name:** Veta — Spanish for the *grain* or *vein*: the line the stringer
draws down the centre of a foam blank, and the seam of colour a resin tint
leaves in the lamination. Every board Veta makes is organised around one
line — the stringer, the outline, the rocker curve read from the rail. The
name is the site's whole argument: a board is a drawn line before it is a
thing you ride.

**Series:** Aubade — the morning voice, adapted for a *maker's workshop*
rather than hospitality. The hospitality of craft: the shaper's care made
visible, not a host's welcome. Warm coastal daylight is the ground, but the
subject is the bench, the dust, the resin, and the hands.

**Place:** A shaping bay above **Playa Zicatela, Puerto Escondido, Oaxaca**,
Mexico — the Pacific point where the sand-bottom beach break throws heavy,
line-driven waves. The bay opens to the north light off the hills; the boards
are made a five-minute walk from the water they are read for.

**The shaper:** Tomás Rivera, shaping since a first blank in 2004, on his
own racks since 2011. He planes by hand and hot-coats by eye. One bench, one
pair of hands — the reason the boards carry a number, not a model name.

**Proposition:** a board drawn to one rider, one wave, one line.

## The register argument (recorded because it was the call)

- **Native hour.** A shaping bay lives in **flat, generous daylight** — the
  daylight-and-sidelight wash a shaper needs to read a rail's shadow line.
  Not a lamp at night (that is Nocturne's forge), not cold snow-light
  (Pastorale). Warm Pacific coastal morning, dust hanging gold in the air.
- **Not a hotel.** Aubade's opening subjects dwell and host; Veta *makes*.
  So the doctrine bends: hospitality becomes the shaper's care shown at the
  bench — hands planing foam, resin drawn across cloth, a face lit by the
  work — never a guest, never a lifestyle surfer. The Aubade daylight and
  material-as-palette rules hold; the hospitality rituals are replaced by
  the acts of the craft.
- **Distinct from every sibling.** No coastal maker exists in the collection;
  the two Aubade hotels are Iberian and architectural, Tyri/Malmfuru are
  Nordic timber, the Vespers are aviation. A Mexican Pacific foam-and-resin
  workshop has no near neighbour — the place carries the distance.

## Binding palette — materials from the world

| Token | Value | Role |
|---|---:|---|
| Foam dust | `#f2ece0` | Page ground — pale EPS/PU dust on daylight |
| Blank | `#e7dcc6` | Warm surface — a bare foam blank, panels |
| Kraft | `#cdbb98` | Fibreglass-cloth / kraft tone; secondary fields |
| Verde agua | `#5f8177` | Resin-tint teal — the ONE cool note; interaction, links, one action |
| Stringer | `#7d5a34` | Basswood stringer line; joinery, grounded controls, hairlines |
| Resina | `#3a2f22` | Cured amber-brown resin dark — depth, frames |
| Tinta | `#211b14` | Ink — body text, structural dark, frames |

**The verde-agua rule** (this register's version of the metal accent): the
resin-tint teal is the single applied colour and appears only where the
board's own tint would be — the active outline in the signature, link
underlines, focus, one primary button per view. Everything else is foam,
wood, cloth, and resin — the substances of the bench. If teal exceeds ~6% of
a frame it has become paint; pull back. Body text is tinta on foam-dust
(≈13:1, verified).

## Type

- **Fraunces (opsz + soft axis, light weights)** — the display voice. An
  old-style serif with a hand-drawn warmth; carries statements, the board
  numbers written out, chapter openings. Set at low weight, large optical
  size. The line has a shaper's hand in it.
- **Space Grotesk** — the working voice: dimensions, volume in litres,
  glassing schedules, fin counts, the order form, tracked-caps whisper labels
  (11px, 600, .3em, in stringer brown). A quiet grotesque with just enough
  character to sit beside Fraunces without echoing Archivo (Aresta) or
  Schibsted (Tyri).

Neither face is used by any sibling site. Avoid uppercase-everything,
extreme-contrast Didones, tiny low-contrast body text.

## Signature geometry

The **rail line**: a single sweeping outline curve is the only ornament —
section dividers, the favicon, the wordmark tick. Everything else is drawn
square; the one curve on the whole site is the curve the whole craft is about.

## Vocabulary — the domain's own nouns, navigation included

blank (the foam core) · **stringer** (the wood line down the centre) ·
**outline** (the plan-view curve of the rail) · **rocker** (the lengthwise
bottom curve, measured nose and tail in inches) · **rail** (the edge, hard or
soft) · **foil** (how thickness distributes bow to stern) · **volume**
(litres of float) · **glassing schedule** (the cloth layup, e.g. 6+4 oz) ·
**hot-coat** · **fin setup** (single / 2+1 / thruster / quad)

Navigation: **The bench** · **The line** (signature) · **Made** ·
**The maker** · **The stock** · **Order**.

## Page arc

`Hero → The bench → The line (signature: draw a board) → Made (materials) →
The maker (Tomás) → The stock (ready boards) → Order a board → Correspondence`

One line: *a blank becomes one rider's board — the bench where it's planed,
the line that redraws to a rider and a wave, the foam-cloth-resin it's made
from, the hands that make it, the few boards on the rack, and the form that
starts your own.*

## The signature interaction — "The line": the board redraws live

The one bold spend, built first and critiqued first. A large SVG board
outline (plan + rocker profile + fin cluster) sits on the daylight ground.
Three controls change it **in one motion**:

1. **Rider height** (a range, 5'2"–6'6") → scales the board's *length* and
   nudges *volume*; the plan lengthens and the litres readout climbs.
2. **Wave type** (Point / Beach / Reef, segmented radios) → morphs the
   **outline** (a point board drawn out and narrow; a beach board fuller
   through the middle) and the **rocker** (a reef board carries more nose
   lift).
3. **Style** (Drive / Flow / Loose) → shifts the **fin setup** and the
   **tail** (Drive → pulled-in pin, thruster; Loose → wider swallow, quad).

All three feed one SVG whose `path` `d` attributes interpolate between named
control-point sets, so **outline, rocker, and fins move together in one
animated redraw** — not three separate widgets. A live spec readout states
length, volume (L), rocker (nose/tail in inches), and glassing schedule,
updating with the drawing. "Start this board" carries the current spec
straight into the order form (pre-filling it).

The teal resin-tint line is the *active* outline; the previous outline ghosts
behind for one beat so you read the change as a redraw, the way a shaper
pencils over a template.

**JS off / `?nofx` / reduced motion:** the SVG renders at a sensible default
(6'2", Point, Drive) fully drawn, spec readout printed, all three control
groups present as real radios/range — the form still submits the chosen spec.
No animation, never a broken frame. The redraw transition is the only thing
JS adds.

## How the site takes an order — the order form is the primary path

A custom board here runs roughly **$850–$1,400** — squarely under $5,000, so
commitment 7 makes the order form the site's *primary* path, not a "write to
us" gesture. It is the centrepiece alongside the signature.

**The order form ("Order a board")** collects a real, structured commission:

- **The board:** length, width, thickness (or "shape to my volume"), volume
  target (L), and — pre-filled from the signature — wave type and style.
- **Construction:** blank (PU / EPS), stringer (none / basswood / paulownia),
  glassing schedule (4+4 / 6+4 / 6+6 oz), fin setup (single / 2+1 / thruster
  / quad), tint (clear / one resin-tint colour).
- **The rider:** height, weight, ability, and the board it's replacing.
- **Contact:** name, email, where they surf.

It hands off by **mailto** (`taller@veta.mx`) with `enctype="text/plain"` so
every field lands in the body as a legible order request — never a card,
never a checkout. It obeys Veta's type, palette and voice: fields labelled in
the craft's nouns, the primary button in verde agua, set on foam-dust ground.
It works fully with JS off (native `required`, `<select>`, range with a
number fallback). "Start this board" from the signature deep-links here with
the spec pre-filled.

**The stock** section carries a handful of finished boards ready now, each
with its real spec (dims, volume, glassing) and a "Reserve" mailto — small
editions, shown editorially, never a shop grid.

## Copy voice

Declarative, specific, numeric. Densities, ounces, inches, litres. "A 6'2"
at 32 litres, 6+4 oz deck, single 4-oz bottom." "Rocker read off the rail,
not a catalogue." No "stoke," no "ride the dream," no surf-brand hype, no
logo-tee lifestyle. The proof is the number and the hand.

## Imagery — the Veta recipe

**One recipe: warm Pacific coastal daylight, foam dust in the air, the board
and the bench fully modelled in generous light.** Bright, not murky — Aubade
daylight, luma high (target ~90–150 mean; the bay interior a touch lower but
never dark). Cool teal lives only in resin tint; warmth lives in foam, wood,
cloth. People are the maker at work — hands planing, resin drawn, face lit by
the work — never lifestyle surfers or models.

Constant batch phrase: *"warm Pacific coastal daylight, soft directional
north light with fine foam dust hanging in the air, pale foam and basswood
and fibreglass tones, one resin-tint teal note, documentary craft
photography, shallow depth of field, no text, no logos."*

Shot list:
1. `hero-bench` — the shaping bay: a foam blank on racks under sidelight, the
   stringer line catching light, dust in the air.
2. `hand-plane` — human presence: the shaper's hands running a block plane
   down the rail, foam curls, face just lit at the edge of frame.
3. `stringer` — material close-up: the basswood stringer down a bare blank,
   pencil template marks.
4. `resin-tint` — material close-up: teal resin drawn across fibreglass cloth
   on the deck, wet gloss.
5. `fin` — material close-up: a set of foiled fins.
6. `maker` — Tomás profiled at the racks, dust light, a finished board beside
   him.
7. `stock` — two or three finished boards leaning on a plaster wall in
   daylight, tints reading.
8. `order` — order-section image: a bench with template, pencil, tape, and a
   spec sheet — the commission about to begin.

Placeholders (if any) use solid blank / kraft / verde-agua blocks at the
intended crop — never grey boxes.

## Floors (binding)

Complete with JS off (the order form submits); visible verde-agua focus
states; body contrast ≥ 7:1; full keyboard paths (signature controls are real
radios/range); reduced-motion gets the finished static drawing; every image
≤500KB; dedicated mobile pass — the bay at phone scale keeps air and the line.

## Build status (completed 2026-07-24, full critique loop, pre-deploy)

All 8 planned finals generated + 2 extra distinct stock boards (10 total),
no CSS placeholders needed. Optimized to `public/images/` as full (≤1536px) +
`-800` variants, JPEG q74–78, every file ≤500KB (largest 449KB).

Measured mean luma (bright Aubade band, none murky): hero-bench 143, hand-plane
85, stringer 161, resin-tint 134, fin 89, maker 122, stock 149, order 132. The
human-presence shots (hand-plane at the bench; Tomás profiled) anchor the bench
and maker chapters, per doctrine.

Signature "The line" built and critiqued first (3 passes): the SVG board
redraws outline + rocker + tail + fins together from one parametric model fed
by rider-height range + wave radios + style radios; a live spec readout
(length/volume/rocker/glassing/fins) updates with it; "Start this board"
pre-fills the order form and scrolls to it. Model recalibrated to realistic
performance-shortboard numbers (6'2" rider → 6'0"/32.6 L/4.8–2.5" rocker/6+4 oz).
JS-off / `?nofx` / reduced-motion render the default board fully drawn with the
spec printed and all controls live (static default path baked into the HTML).

The order form is the site's primary path (custom board $850–$1,400, under
$5,000): four fieldsets (board / construction / rider / you) in the craft's
own nouns, mailto handoff (`taller@veta.mx`, `text/plain`), no card, works
JS-off. Segmented controls show their selected state without JS via `:has()`.

Floors verified: JS-off complete page + working order form + fully-drawn
signature; body contrast tinta-on-foam 14.5:1, muted 8.5:1, labels 5.3:1,
links 5.5:1; primary buttons dropped to verde-deep for foam-text ≥5.5:1;
keyboard path through the segmented radios (arrow keys move + redraw); focus
outlines in verde; reduced-motion gets the finished static composition; all
images ≤500KB; dedicated mobile pass at 390px (hero, signature, order form,
stock all stack and keep air). `npm run build` passes clean.

## Never

Surf-brand hype or "stoke" · logo tees / action-sport models / lifestyle
beach shots · dark chiaroscuro (that is Nocturne's lamp) · orange golden-hour
grading · rounded floating cards · a shop-grid of "products" (the stock is
shown editorially) · teal as a broad fill · tan-on-cream body text · a generic
checkout · a "write to us" gesture in place of the real order form.
