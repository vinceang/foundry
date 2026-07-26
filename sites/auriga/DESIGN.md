# AURIGA — Design source of truth

*Drafted 2026-07-24 (dry-run). First site of the proposed Vesper series —
see `docs/vesper-taste-profile.md`.*

## The one-line brief

**A charter you are told about, never shown.**

## Identity

**Name:** Auriga — the Charioteer, the constellation that stands highest at
dusk in the northern winter. The one who carries you. Its stars name the
fleet.
**Series:** Vesper (dusk register — civil twilight; the register Vince
approved over the rejected chiaroscuro take).
**Place:** Deliberately placeless — the world's three quiet fields:
Farnborough (London), Le Bourget (Paris), Teterboro (New York). Founded
1994 at Farnborough as the flight department of a single family office;
opened to written introductions in 2003.
**Proposition:** Ultra-discreet private jet charter. No published telephone
number, no livery, no press. Discretion is demonstrated, not announced.

## The operation

- **Three tails, named for Auriga's stars:**
  - *Capella* — Bombardier Global 7500. 7,700 nm. The long night.
  - *Menkalinan* — Dassault Falcon 8X. 6,450 nm. The Atlantic and the Gulf.
  - *Hassaleh* — Embraer Praetor 600. 4,018 nm. The continent.
- Paint is unmarked white; registrations kept small and unremarkable by
  design. Eleven crew. Two pilots and one steward per tail — the same three
  faces for the life of a contract.
- **The flaw, admitted formally once:** Auriga does not fly to airports
  that require it to be seen. Some cities are served from an hour away.

## Binding palette — the sky at 20:45

| Token | Value | Role |
|---|---:|---|
| Zenith | `#0f141d` | Page ground — blue-black overhead, never pure black |
| Tarmac | `#182029` | Below-horizon surfaces: panels, the board |
| Airframe | `#95a0ad` | Aluminum working grey — secondary text, hairlines |
| Afterglow | `#e8a26b` | The horizon's apricot — labels, accents, focus, one action |
| Cabin linen | `#ece6da` | Warm off-white — primary text, instrument light |

Afterglow behaves like Nocturne's metal: only where light would strike —
whisper labels, hairline glints, timestamps, one primary action per view.
The Board's sky-swatch time chips are the sanctioned exception: they carry
literal sky colors because they *are* sky, computed at build time.

Contrast: cabin linen on zenith ≈ 14:1; airframe on zenith ≈ 7.5:1;
afterglow on zenith ≈ 8:1 (labels only).

## Type — three voices

- **Instrument Serif** (display; regular + italic) — the statement voice.
  High-contrast, instrument-panel elegance; one weight is the discipline.
- **Instrument Sans** (body, 380–450) — the quiet explaining voice, 55–60ch.
- **Fragment Mono** (tracked caps ~11px for whisper labels; regular for ops
  data) — the working voice: codes, times, registrations, the board.

Cadence, every chapter: mono whisper label in afterglow → Instrument Serif
statement → dim Instrument Sans body. Numbers that matter (ranges, hours,
counts) render in the mono, exact, never abbreviated.

No face is shared with any sibling, nor with the rejected rehearsals
(Spectral/Plex Mono were Velum's).

## Signature geometry

**The great-circle arc** — a thin curved line, the route drawn as
navigation draws it. It is the only ornament: section rules are shallow
arcs; the board draws full ones. Zero border-radius elsewhere.

## Vocabulary

The trade's own nouns, navigation included: **Protocol · Tails · The Board
· Aloft · Introduction.** Principals, not clients. Wheels-up, positioning,
legs, slots. A request is an *introduction*; it is answered *in writing*.

## Signature interaction — The Board

The one bold spend. An operations board of four standing city pairs.
Selecting a pair draws its great-circle arc across a dotted graticule and
sets the departure and arrival times **in local light**: each timestamp
sits on a swatch of the sky at that local hour — dusk apricot, deep night,
dawn rose, morning blue — computed at build time from a sky scale.
The four routes are chosen so the board demonstrates the whole scale:

| Route | Block | Local light |
|---|---|---|
| FAB → TEB | 7 h 20 | dusk → night |
| LBG → RUH | 5 h 55 | afternoon → dusk |
| GVA → HND | 12 h 05 | morning → dawn +1 |
| TEB → LBG | 6 h 40 | evening → morning +1 |

JS-off: all four rows render complete with their time chips; the first
route's arc is drawn. Buttons are real buttons with `aria-pressed`.

## Page arc

**One evening, one crossing: the page departs the apron at last light and
lands in cabin lamplight.**

`Apron (hero) → Protocol → Tails → The Board → Aloft → Introduction`

The page ground may deepen slightly as it descends — the sky darkening
through the visit — but never below the hour (Vesper commitment 1).

## Imagery

Two registers, and the split is the point.

**The evening (hero, Aloft).** Constant phrase: *"civil twilight, deep blue
sky still luminous overhead, low apricot afterglow at the horizon, subject
fully modelled by the remaining daylight and its own warm instrument lights,
no text."* Finals: the apron hero, the cabin aloft, one material close-up
(cabin detail in lamp light), one human-presence shot (the steward — the
crew are the hosts of the in-between hour).

**The daylight (Tails, added 2026-07-26).** The fleet is the one section
photographed in full light — the aircraft are documented, not staged.
Constant phrase: *"the aircraft is completely blank — glossy bare white
paint, unmarked fuselage, nose and fin; no writing, letters, numbers,
registration, logo, emblem, stripe or livery anywhere. Bright and airy
under a soft luminous overcast, nothing blown out. Extremely sharp: panel
lines, rivets, polished aluminium leading edges. Cool blue-grey and pale
aluminium with a single warm apricot accent. No text, watermark, caption or
border in the frame."* Each plate carries one distant, back-turned crew
figure for scale. Because these run bright against a dusk ground, the frame
does the seating: a hairline border and a faint scrim at the foot.

Generated with `tools/gen-image.mjs --model gpt-image-2 --size 1536x1024`.
Higgsfield `soul_2` was tried first and is the wrong tool for this subject —
any prompt naming a runway, apron or "aviation photography" pulls it into
aircraft-spotter reference imagery, and it returns invented registrations,
tail liveries and photographer watermarks that no amount of negative
prompting removes. Its hangar-interior frames were clean; its outdoor ones
never were.

## Copy voice

Short, declarative, exact. Discretion shown by what is withheld: "We
publish no telephone number. If we fly you, you have it." Never mystique
("if you know, you know" is an anti-pattern), never "exclusive/elite/
bespoke", no urgency, no social proof.

## Never

Nocturne chiaroscuro (already rejected once for this subject) · full-frame
sunset orange · lens flares · silhouetted anonymous figures · map clipart /
globe hero · champagne-and-red-carpet lifestyle · route cards in a uniform
grid · rounded corners · a second warm accent · borrowed sibling faces or
tokens.
