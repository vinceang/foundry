# HURR — design source of truth

*Written 2026-08-09, before any component. A falconry furniture house in Al
Ain, in the third register: **Vesper**.*

## The one-line brief

**Everything here is made for a bird that could leave.**

A falcon is not owned. It is flown free every day, at first and last light,
and it comes back — or it does not. Every object this house makes is
equipment for that daily consent: the hood it wears while it waits, the glove
it stands on, the jesses that hold only until the moment they are slipped.
The craft is not restraint. It is the making of things a wild animal will
tolerate, which is a far harder brief.

## Identity

**Name:** **Hurr** — الحر. In Gulf Arabic *al-hurr* is the saker falcon, the
bird of this region's falconry; the same root means **free**. One word that
holds both the species and the whole argument of the house. A maker named for
the freedom of the thing it equips.

**Place:** **Al Ain**, Abu Dhabi emirate, United Arab Emirates — the oasis
city at the foot of Jebel Hafeet, inland where the falconry actually is
rather than on the coast where the money is. A workshop of four benches off
the Al Jimi date gardens; the mews behind it, facing the mountain so the
birds see the last light.

Coordinates for the map: **24.2075 N, 55.7447 E**.

**Series:** **Vesper.** The backlog pencilled Nocturne, and that is wrong for
a reason worth writing down. Nocturne is one lamp in a dark room, an artifact
held in reverence. This subject does not live there. Falconry is flown at
first and last light — the hunt is at dusk, the bird is weighed at dawn — and
a hooded falcon waits through a darkness it cannot see. And the register's
own definition settles it: Vesper's subjects are **things in transit**. A
falcon in flight is the purest case the collection will ever have.

The distinction from the two existing Vespers is the point of difference:
Auriga and Velum are twilight *at altitude*, cold aluminium and a distant
apricot horizon. This is twilight **on the ground, in a desert**, where the
afterglow is rose going to ember, the materials are leather and feather and
brass, and the warmth is close rather than far.

## Binding palette — materials of a desert civil twilight

| Token | Value | Role |
|---|---:|---|
| Zenith | `#0f1220` | Page ground — the desert sky twenty minutes after sundown. Blue-violet near-dark, never black |
| Sabkha | `#171a2a` | Raised surfaces, the second dark — salt flat holding the last light |
| Haggard | `#a8a29a` | Feather grey, faintly warm — secondary text, hairlines, stitch rules |
| Bone | `#e9e4dc` | Primary body text and display — bleached bone, not white |
| Ember | `#cb5f52` | The afterglow band. One rule, active states, the single button. Never a broad fill |
| Kabsa | `#a8763f` | Tooled hood leather — material accent, plate borders, the stitch line |

**Measured, not eyeballed** (against Zenith `#0f1220`):

| Pair | Ratio | Verdict |
|---|---:|---|
| Bone on Zenith | 14.72 | body ✓ |
| Haggard on Zenith | 7.36 | body ✓ |
| Ember on Zenith | 4.70 | labels and rules ✓ |
| Kabsa on Zenith | 4.72 | ✓ |
| **Zenith on Ember** (button label) | **4.70** | the button reads ✓ |
| Bone on Ember | 3.13 | ✗ — the button takes **dark** type, never bone |

Ember started at `#c2564a` and measured 4.19 — labels would have missed AA and
the button had no readable label in either direction (3.51 bone, 4.19 zenith).
Lightened to the first value that clears both. This is the check the register
keeps failing, so it is written down.

Ember and Kabsa are deliberately **not** apricot: Auriga (`#e8a26b`) and Velum
(`#c9915d`) have both spent that hue, and a third would make the register look
like one generator. Desert dusk runs rose to ember, which is true and unused.

Contrast, to be measured not eyeballed: Bone on Zenith must clear 4.5:1 for
body; Haggard on Zenith is the secondary floor; Ember and Kabsa are labels,
rules and buttons only, never long copy.

## Type

- **Amiri (400/700)** — the display voice. A revival of a Naskh face, drawn
  with real Arabic type heritage, and its Latin is a lucid Baskerville-ish
  serif. Using the Latin companion of an Arabic face on an Emirati subject is
  a substantive choice, not decoration. No sibling uses it.
- **Barlow (400/500, tabular figures)** — the working voice. Weights, hood
  sizes, head measurements, times. Falconers weigh a bird to the gram every
  single day, so the working voice must set numbers well.

Deliberately not: Instrument Serif (Auriga), Spectral + IBM Plex Mono
(Velum). The register does not get a third mono.

## The opening move

**The daily record.** Vesper's native alternative is the operational readout,
and falconry hands us a real one: every flying bird is weighed each morning,
and its flying weight decides whether it hunts that day. So a chapter opens
with a line from the book:

> `HURR · 1,012 g · flown 17:42 · burqu' size 4`

It carries true information — species, weight, the hour it was flown, the
hood it wears. Deleting it would lose facts. That is the test the profile
sets, and a tracked caps label above a heading fails it.

Held site-wide. **Never** a decorative label above a heading — that is
Nocturne's spent move.

## Signature interaction — "The burqu', cut to one bird"

The one bold spend, built and critiqued first, and fused with the order form
per doctrine.

A falcon's hood is genuinely bespoke: it is cut to the individual bird's
head, and a hood that does not fit is not a lesser product, it is a cruelty.
So the configurator is not a novelty — it is how this object is actually
ordered.

**The visitor enters their bird.** Species (saker, peregrine, gyr, gyr-hybrid),
head width in millimetres, beak-to-crown, and whether the bird is an eyas
(nest-taken, calm) or a passage bird (wild-caught, sharper). As those numbers
change, a large drawn hood **re-cuts live**:

- The three pattern pieces of an Arab hood — the block, the two side panels —
  redraw to the measurements, in flat pattern, the way a cutter would lay them.
- The plume socket moves with the crown height.
- The braces (the two leather straps that open and close the hood behind) tighten
  and slacken on the drawing.
- A passage bird gets a deeper eye panel; a gyr gets a taller block. The
  drawing changes shape, not just scale.

Then the same panel takes the order. Choosing and commissioning are one act.
Nothing is templated from Veta: that draws a surfboard outline from rider
numbers; this cuts flat leather pattern pieces from an animal's skull.

**Signature geometry: the saddle stitch.** The only ornament on the site is a
two-strand dashed line — the hand stitch that closes a hood. Section rules are
stitch lines; the configurator's pattern edges are stitch lines. Not arcs
(Auriga), not rails (Velum). Zero border-radius elsewhere.

## Vocabulary

The trade's own nouns, correct and unaffected:

| Word | Meaning |
|---|---|
| **burqu'** (برقع) | the hood |
| **mangalah** (منقلة) | the falconer's glove |
| **talwah** | the lure, swung to call the bird back |
| **hurr** / **shaheen** | saker / peregrine |
| mews | the housing (standard English falconry) |
| jesses, bewits, block, bells | standard English falconry, all correct |

Navigation uses them: *The mews · The burqu' · The mangalah · The record ·
Commission*. No invented Arabic. Where a term is Arabic it is written in
transliteration with the script beside it once, never as ornament.

## Page arc

**One page thesis:** *a bird that could leave, and the four objects that ask
it not to.*

I. **First light** — the hero: the bird on the block at dusk, mountain behind.
II. **The record** — the daily weight, the operational readout as chapter opener.
III. **The burqu'** — the signature: cut to one bird, and the order.
IV. **The mangalah** — the glove; the interface between hand and talon.
V. **The mews** — the workshop and the man at the bench (human presence).
VI. **What is kept** — the archive of past commissions, bird by bird.
VII. **Commission** — the order form, in the house's own voice.

## How the site takes an order

Hoods run roughly $180–$900; a full mangalah in kid-lined leather $400–1,200;
bells, jesses and bewits under $100. **Every real variant sits well under
$5,000, so this site gets a proper order form**, not commission-by-letter —
which the collection has overused. The form is fused into the signature: the
bird's measurements *are* the order.

Fictional brand, so it collects the order and hands off an enquiry. **Never a
card number.**

## Imagery

Constant art-direction phrase across the whole batch, for coherence:

> *photographed at desert civil twilight, twenty minutes after sundown, the
> sky still luminous blue-violet with a low rose-ember band at the horizon;
> warm close lantern light on leather and feather; generously lit subject,
> never murky; large-format, fine grain*

Shot list:
1. Hero — saker on a block, Jebel Hafeet behind, sky still luminous.
2. The hood in the hand — tooled leather, plume, close.
3. Pattern pieces on the bench — flat leather, awl, thread.
4. The glove — kid lining, the bird's feet.
5. **Human presence** — the maker at the bench, stitching, lantern light.
6. The mews at last light — perches, the birds settled.

The bird is the *subject's reason*, never a trophy: no kills, no display of
dominance, no hand raised in victory. The craft is the subject, the bird is
who it is for.

## Never

- Not Nocturne's chiaroscuro. A page darker than a desert dusk is the
  register's canonical failure and has been rejected once already.
- Not a third apricot afterglow.
- Not a tracked caps label above a heading.
- Not a light-over-time signature — the collection is crowded with those, and
  this subject has a far better axis in the pattern cut.
- Not falconry-as-luxury-lifestyle. No sheikhs, no Land Cruisers, no gold.
  A workshop, four benches, and a bird that could leave.
