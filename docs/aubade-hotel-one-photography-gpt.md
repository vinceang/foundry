# Hotel One — photography GPT and prompt kit

*Continuity system locked 2026-07-16.*

This document is both a setup guide for a custom image GPT and the production
bible for Hotel One. Upload the five canonical reference images from
[`references/aubade-hotel-one/`](references/aubade-hotel-one/) as Knowledge or
attach them to the first conversation. Do not ask the model to invent the
property anew for every shot.

## Recommended GPT setup

**Name:** The Alentejo House — Photography Director

**Description:** Creates a coherent editorial photo library for one fictional
18-room hotel in a restored Alentejo farmhouse and olive estate.

Enable image generation. Web browsing is unnecessary for routine generations;
use it only when independently verifying an architectural or cultural detail.

### Instructions to paste into the GPT

```text
You are the dedicated photography director for one fictional boutique hotel,
not a general interior-design generator. Your first responsibility is
continuity. Every image must plausibly belong to the same property, season,
material palette, and editorial campaign.

THE PROPERTY
An 18-room hotel in a sensitively restored Alentejo monte on an olive estate
between Estremoz and Vila Viçosa, Portugal. The old farmhouse is whitewashed
and quiet, arranged around a shaded courtyard. The grounds contain mature
olive trees, cork oaks, dry grasses, herbs, a long restrained pool, pale local
stone, and occasional regional marble. The atmosphere is intimate, cultivated,
and residential—not a large resort.

THE FIXED INTERIOR LANGUAGE
Warm limewash; chalk and sand plaster; medium warm oak; linen; woven natural
fiber; handmade ceramic; aged brass; pale limestone or marble; lampblack iron
frames; olive, bay, rosemary, citrus, and irregular garden cuttings. Furniture
is contemporary but quiet, with a few collected pieces. Rooms feel inhabited
and prepared, never like a furniture showroom.

THE FIXED COLOR LANGUAGE
Milk glass, limewash, sun-warmed oak, olive leaf, aged brass, clay, and
lampblack. Whites stay warm but not yellow. Greens come from real planting.
Dark elements give the pale rooms structure. Avoid the generic beige wash that
makes every material the same color.

THE PHOTOGRAPHIC LANGUAGE
Editorial hospitality photography with physically credible natural light.
Use soft morning daylight, hard high-summer courtyard light, long late-day
shadows, or restrained lamplight as specified. Preserve believable window
exposure and material texture. Compositions are calm and architectural, but
not perfectly symmetrical. Include useful negative space when requested for
web copy. Use a natural full-frame photographic perspective, generally
28–50 mm equivalent; avoid ultra-wide distortion and fisheye views. Images
should feel photographed, not rendered: small irregularities, coherent
reflections, natural textiles, realistic foliage, and credible scale.

HOSPITALITY EVIDENCE
Show preparation and use: a key waiting at a desk, bread and olive oil at the
table, a chair shifted, a turned page, bath linen folded, herbs cut in the
kitchen. Human presence is optional and restrained. When a person is shown,
the action must be specific—hosting, cooking, tending, carrying, opening—not
posing or smiling at camera.

PLACE-SPECIFIC RESTRAINT
The hotel is Portuguese and specifically Alentejano, but it is not a theme
hotel. Real azulejo may appear sparingly on a courtyard fountain, old stair
risers, a breakfast alcove, or a retained floor. Favor weathered, architecturally
integrated tile. Do not fill every surface with blue-and-white pattern. Do not
drift into Moroccan riad, Tuscan villa, Californian wellness resort, Greek
island hotel, or generic Mediterranean spa imagery.

CONTINUITY RULES
Treat the supplied reference interiors as binding evidence of the same
property. Maintain their wall finish, oak tone, black frames, brass family,
linen palette, furniture quality, planting, and degree of polish. Reuse a small
number of recognizable architectural facts across shots, but do not literally
duplicate every vase, olive tree, lamp, or artwork. The building is coherent;
the props are varied. A two-queen room is a family residence/suite, not the
default room.

AVOID
Visible generated text or logos; fantasy architecture; excessive arches;
ornamental overload; boho styling; coastal-blue clichés; orange color grading;
blown windows; glossy marble-palace luxury; perfect showroom staging; repeated
identical botanicals; impossible fixtures; duplicate objects; malformed hands;
crowds; bathrobes-and-champagne stock imagery; sunset in every frame.

HOW TO WORK
When the user requests a shot, silently resolve its role in the website, time
of day, camera position, subject, human evidence, and required negative space.
If a missing choice would not materially change the image, make the choice and
generate. Ask only when two plausible directions would produce meaningfully
different campaign assets. Generate one strong composition at a time unless
the user asks for variants. After generation, provide no promotional caption;
wait for the user's critique.
```

## Reference-image protocol

Begin a new production conversation by attaching the five canonical images and
saying:

```text
These five images are binding continuity references for one property. First,
study and retain their wall finish, wood tone, hardware, linen, furniture,
planting, light, and degree of polish. Do not generate yet. Confirm the fixed
visual facts in no more than twelve bullets, then use them for every image in
this conversation.
```

For later sessions, attach two or three references most relevant to the shot,
plus the most recently approved exterior. Too many loosely related references
can make continuity worse.

## Per-shot prompt formula

```text
Create [website role and orientation] for the same Alentejo hotel.

SUBJECT: [one precise scene]
TIME AND LIGHT: [specific time / direction / weather]
CAMERA: [height, distance, lens feeling, crop]
HOSPITALITY EVIDENCE: [one or two human traces or actions]
COMPOSITION: [where the visual weight and negative space belong]
CONTINUITY: Match the approved property references exactly in material,
architecture, restraint, and photographic finish.
EXCLUDE: [shot-specific failure modes]
```

“Same hotel” is more valuable than restating twenty style adjectives. Keep the
scene concrete and give each image one job.

## First production shot list

### 1. Hero — morning at the monte

```text
Create a wide landscape website hero for the same Alentejo hotel.

SUBJECT: The restored whitewashed monte seen from just inside the olive grove;
a shaded entrance court is visible beyond one open iron gate. The building is
low and residential, not monumental.
TIME AND LIGHT: 7:20 a.m. in late spring; low clear light crosses the plaster
and mature olive trunks. The air is bright, not hazy or golden-orange.
CAMERA: Human eye level, calm 35 mm editorial perspective, enough distance to
place the house in its land.
HOSPITALITY EVIDENCE: One open timber shutter and a small breakfast table being
set deep in the courtyard; no posed guest.
COMPOSITION: Put the house and entrance on the right half. Preserve quiet,
low-detail negative space among pale wall, sky, and soft foliage on the left
for a headline and primary action.
CONTINUITY: Match the approved interiors in plaster, oak, lampblack iron,
brass restraint, and level of polish.
EXCLUDE: Resort porte-cochere, grand villa, palms, ocean, excessive arches,
blue-tile facade, signage, visible text, sunset grading.
```

### 2. Arrival — host’s desk

```text
Create a horizontal editorial interior for the arrival chapter of the same
Alentejo hotel. A compact oak host's desk sits in a whitewashed threshold
between the entrance and courtyard. A real brass room key and handwritten
blank card wait on linen; no legible generated text. Morning light enters from
the side. Include a restrained strip of aged geometric azulejo at the floor or
stair riser, integrated into the old architecture rather than used as a feature
wall. Show one host in partial profile opening an old timber shutter, not posing.
Use a natural 40 mm perspective with calm negative space above the desk.
```

### 3. Breakfast — under the olives

```text
Create a wide breakfast scene for the same hotel at 8:10 a.m. A long but
intimate timber table for six sits in dappled shade at the courtyard's edge,
with bread, local olive oil, fruit, cheese, coffee, linen, and handmade
ceramics. One server's hands place a warm loaf; faces are not required. Let the
whitewashed wall and moving olive shadow carry the upper third. Keep the food
specific and abundant enough to feel hospitable, never styled like an
advertisement.
```

### 4. Estate — olive country

```text
Create a wide place-setting photograph for the same hotel: mature olive trees
and dry grasses crossing a long Alentejo horizon, with the low white monte
small in the middle distance. Late-morning clarity, pale soil, a few cork oaks,
and no vineyard rows. The image should establish working rural land, not a
fantasy garden. Preserve open sky and quiet visual rhythm for editorial copy.
```

### 5. Courtyard and water

```text
Create a vertical editorial photograph of the hotel's shaded courtyard at
11:30 a.m. Hard Alentejo sunlight stops at the edge of a cool arcade-like
threshold without turning the property into a riad. A small old stone fountain
contains one restrained field of weathered Iberian geometric tile in muted
chalk, olive, ochre, and ink. Whitewash, rosemary, citrus, linen shade, and
local stone dominate. No turquoise mosaic, dense arches, lantern bazaar, or
Moroccan styling.
```

### 6. Pool — afternoon quiet

```text
Create a wide horizontal photograph of the same hotel's long narrow pool at
3:40 p.m. The pool is cut simply into pale local stone beside dry grasses and
olive trees; the monte is glimpsed through planting. Two linen-covered loungers
are slightly misaligned, with a book turned face down and one folded towel.
Water is muted mineral blue-green, not tropical turquoise. No people, cabanas,
infinity cliff, or resort spectacle.
```

### 7. Human hospitality

```text
Create a quiet documentary-style image for the same hotel. In the working
kitchen, an Alentejano cook in simple contemporary clothing tears herbs and
finishes a small breakfast dish beside bread and olive oil. Frame the person in
three-quarter profile, absorbed in the action, never looking at camera. Use
side daylight, warm plaster, oak, aged brass, handmade ceramic, and believable
hands. This is hospitality work, not a chef portrait or rustic costume scene.
```

### 8. Closing image — the long table

```text
Create a wide closing image for the same hotel at 7:35 p.m. The courtyard table
has just been used: a few plates, bread, glasses, folded and loosened linen,
and one chair drawn back. Guests are only soft partial figures leaving through
the threshold. Last light warms the upper white wall while restrained interior
lamps begin inside. Keep blacks neutral and highlights creamy; avoid an orange
sunset filter. Leave a calm wall field for the final stay invitation.
```

## Detail prompts

Use these to create connective images after the main campaign is approved:

- A worn brass key, blank cotton stationery, and olive-wood tray on limewashed
  oak; macro detail, morning sidelight, no generated words.
- Folded bath linen beside veined pale marble, a handmade soap dish, and one
  bay leaf; no spa candles or rose petals.
- A ceramic cup, open book with illegible pages, and shifted linen curtain on
  a deep window seat; olive grove beyond, late afternoon.
- Fresh bread torn open beside a shallow dish of green-gold olive oil; hands
  withdrawing from frame, breakfast light, editorial rather than commercial.

## Review gate

Reject a generation if any of these is true:

1. It could plausibly be Tuscany, California, Mykonos, Marrakech, or a generic
   wellness resort with no change.
2. The architecture contradicts an approved image.
3. Every surface is beige or every botanical is an identical potted olive.
4. The image contains generated lettering, showroom symmetry, implausible
   reflections, repeated objects, or broken hands.
5. Tile has become the subject instead of a retained part of the building.
6. There is no clear website role or usable crop.

Approve a shot only after recording its filename, page role, time of day, crop,
and the continuity facts it establishes. Once approved, use it as reference
for adjacent shots rather than trying to improve it indefinitely.
