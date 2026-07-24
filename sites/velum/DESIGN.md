# VELUM — Design source of truth

*Locked 2026-07-24, first design session. Dry run of the Vesper series opener.*

## The one-line brief

**A charter operation whose product is not being seen.**

## Identity

**Name:** Velum — Latin for veil and for sail; also the thin accessory cloud
that drapes the shoulders of a cumulus tower. The word is the operation:
a veil, a passage, a cloud form. "VELUM" is also the operating callsign.
**Series:** Vesper (dusk, passage, discretion).
**Place:** Genève Aéroport, north apron, own hangar. Swiss registry.
**Founding:** 1987, by two Swissair captains who left the flag carrier to
fly for eleven families. The client book has never been advertised.
**Proposition:** The least visible way to the fields without a terminal.

**Distinct-house note (Vesper has two charter siblings).** Velum and Auriga
share the Vesper register the way the four Nocturnes share theirs — one
quality of light, two different worlds. Velum is the **short-field, alpine
house**: its distinction is *access*, foregrounding the PC-24, Samedan, the
893-metre gravel, the strips with no name on the board — discretion that
also goes where scheduled aviation cannot. Auriga is the placeless, global,
crew-as-hosts house. Keep them apart on world, signature (Velum's vertical
flight-plan rail vs Auriga's route board), and type (Velum owns Spectral +
IBM Plex Mono); they may share the twilight palette family. If they ever
need to look tonally distinct too, regenerate Velum's four plates toward the
cold blue minute before first light rather than the warm afterglow.

The outfit has no phone number anywhere on the page — deliberately, and the
page says so. Contact is by introduction through a current client or through
two named FBO desks. This is the brand behaving like its clients.

## The operation

- Three aircraft, no livery. White fuselage, grey registration, nothing else.
- The registry lists a Zug holding company, as is normal practice.
- Tails do not appear on public flight trackers.
- Crews are salaried, not freelanced; median eleven years with the house.
- One dispatcher is assigned per client, permanently. Clients message the
  dispatcher; the dispatcher does everything else.

## The fleet — three tails

| Tail | Aircraft | What it is for |
|---|---|---|
| HB-JVL | Bombardier Global 6500 | The Atlantic and further. 6,600 nm, Mach 0.90, three cabin zones. |
| HB-JLA | Dassault Falcon 8X | The continent. 6,450 nm from 1,830 m of runway; the quietest cabin flying. |
| HB-VSK | Pilatus PC-24 | The places the others cannot go. Certified for gravel, grass, and 893 m — Samedan, La Môle, strips with no name on the board. |

Facts are real to the types. Numbers render in mono, written in full.

## Binding palette — materials of civil twilight at altitude

| Token | Value | Role |
|---|---:|---|
| Flight deck | `#0d1017` | Page ground — night air at FL450. Blue-black, never pure black |
| Stratus | `#151a24` | Raised surfaces, spec blocks, the second dark |
| Airframe | `#8f98a8` | Anodized aluminum — secondary text, hairlines, ticks |
| Cirrus | `#dfe3ea` | Primary body text and display type |
| Horizon | `#c9915d` | The apricot band where the sun just left — one rule, active states, the single button. Never a broad fill |

Contrast: cirrus on flight deck ≈ 14:1 (body floor met). Horizon on flight
deck ≈ 6.9:1 — labels and rules only, never long copy.

Distinction from Nocturne is structural: Nocturne is warm-black ground with
a warm metal as lamp-light; Velum is cool-black ground with cold aluminum,
and the only warmth is a distant horizon. Light comes from the edge of the
world, not from a lamp.

## Type

- **Spectral (300/200, italic for the aside)** — the display and body voice.
  Cool, precise, literary; reads like a well-set logbook narrative. No
  sibling uses it.
- **IBM Plex Mono (400/500)** — the working voice. Flight plans, METARs,
  and telex are monospaced in real life; every label, tail number, block
  time, and the signature rail speak in it. Tracked caps at small sizes.
  No Foundry site has used a mono before — it is this world's own register.

## Vocabulary

The trade's real nouns, everywhere: tails (not "fleet"), legs (not
"routes"), off blocks / on blocks, block time, positioning, empty legs,
dispatcher (not "concierge"), introduction (not "contact"). Chapters carry
flight-phase codes: OFF BLOCKS · CLIMB · CRUISE · DESCENT · ON BLOCKS.

## Signature interaction — the flight-plan rail

The one bold spend, and only this subject could own it: **the page is a
flight, and a fixed mono rail flies it.** Scroll position maps onto a
vertical flight profile — off blocks at the hero, climb through the
operation, cruise across the tails, descent through the legs, on blocks at
the introduction. A fixed readout in the lower-left gutter shows the
current phase and flight level (`CRZ FL450`), beside a small SVG profile
with a dot riding the path. The altitude figure counts through the climb
and descent as the visitor scrolls.

JS off: the rail does not render (the page is complete without it).
Reduced motion: the rail still tracks scroll — it is instrumentation, like
a scrollbar, not an animation — but the dot moves without easing.

## Page arc

`OFF BLOCKS (hero) → CLIMB (the operation) → CRUISE (three tails) →
DESCENT (legs flown) → ON BLOCKS (introduction)`

One page, one flight, Geneva evening departure. The hero is the Global on
the wet north apron at civil twilight; the close is a single email address
and the sentence "There is no telephone number on this page."

## Imagery

Constant art-direction phrase for the whole batch: *"civil twilight, deep
blue-black sky with a thin apricot band low on the horizon, cold aluminum
reflections, wet dark tarmac, no text, no lettering, no people."* The
no-lettering rule is doctrine and brand at once: the aircraft carry no
livery. Palette inside the frame must match the tokens; regenerate
violations. Exposure floor: mean luma ≥ 15 after the gamma pass.

Dry-run shot list (4 finals): 1. hero — Global on the apron, blue hour;
2. Falcon 8X airframe close-up, aluminum in last light; 3. cabin window at
cruise, dusk band outside, one low lamp; 4. PC-24 on the Samedan gravel,
alps going dark. Remaining slots stand in as stratus-toned CSS plates.

## Copy voice

Telegraphic, unhedged, no luxury adjectives — discretion is proved by
withholding, not described. The formal admission, once: *"We are not the
least expensive way to fly. We are the least visible."* Numbers do the
poetry: 893 metres, eleven years, three tails, 0:54 block.

## Never

A warm lacquer ground or gold accent (that is Nocturne's lamp) · sunset
gradients or an apricot sky filling the frame · stock jet-set lifestyle
photography, champagne flutes, red carpets · "luxury / bespoke / elevate" ·
a contact form with fields · uniform card grids · rounded corners · route
map clichés with dotted arcs and pins · client names, testimonials, or any
social proof (the brand's entire point) · a phone number.
