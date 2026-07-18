# LAGAR DO SOL — Design System

An eighteen-room *monte* and restored olive press between Estremoz and Vila
Viçosa, Portugal. This file is the source of truth for the first Aubade site.

## The one-line brief

**A day at a house among the olives.** The site should make a guest feel the
gate opening, breakfast being set, shade crossing plaster, and dinner settling
into lamplight—then invite them to stay.

## The world

The seventeenth-century *lagar* became the dining room; the house grew around
it. Whitewash, local marble and limestone, warm oak, linen, aged brass,
lampblack iron, olive and cork trees, dry grass, and retained tile are evidence
of place. This is an intimate working estate, never a resort or a Portuguese
theme set.

## Identity

**Name:** Lagar do Sol  
**Descriptor:** Um monte entre Estremoz e Vila Viçosa  
**Proposition:** The rooms live like private houses; the estate hosts like a
hotel.

The primary mark is the spare two-tone olive branch carried by the wordmark.
Its dark and pale leaves are structural, not botanical decoration. Use the
branch alone only where the full name would be redundant, such as the stay
dialogue; do not substitute the earlier millstone symbol.

## Tokens

| Material | Value | Role |
|---|---:|---|
| Chalk | `#faf6ed` | Lightest field |
| Limewash | `#f1eadc` | Primary ground |
| Pale stone | `#ddd1bd` | Secondary ground and rules |
| Olive leaf | `#66705c` | Botanical structure |
| Lagar brass | `#a68552` | Tiny points of emphasis |
| Clay | `#a26f4e` | Rare warm counterpoint |
| Chestnut | `#845226` | Eyebrows and editorial kickers |
| Lampblack | `#27271f` | Type, iron, contrast |
| Deep olive | `#34382d` | Evening and footer ground |

Tan-on-cream body copy is prohibited. Paragraphs use lampblack at readable
opacity. Chestnut gives the editorial hierarchy a warmer counterpoint to the
olive grounds; it is reserved for short kickers rather than body copy.

## Type

- **Bona Nova:** the house voice. Old-style, literary, and warm without the
  fashion-magazine severity of a Didone. Display heads use restrained roman;
  italic is reserved for one human note.
- **Manrope:** times, navigation, room facts, forms, and practical language.

Do not use script type, extreme contrast, all-uppercase paragraphs, or tiny
letterspaced body copy.

## Signature interaction — the day line

A narrow fixed line at the left edge records the actual guest-day sequence.
Its active time changes as chapters enter the viewport:

`07:20 → 08:05 → 09:10 → 10:15 → 11:30 → 12:40 → 15:20 → 16:15 → 19:35`

The line is navigation and timekeeping, not a progress bar. On small screens it
becomes a compact horizontal readout. It must remain useful without motion and
respect `prefers-reduced-motion`.

## Pattern

One simplified eight-point Iberian tile geometry is drawn with CSS gradients.
Use it at 5–8% visual opacity on chapter thresholds and the availability
surface only. Vary scale and crop, not motif. Real tile belongs in photography;
the digital pattern is supporting architecture.

## Layout

Desktop compositions alternate between large photographic fields and quiet
plaster text surfaces. Images crop decisively but never become uniform cards.
Room categories appear as editorial chapters before any comparison. Mobile
keeps the photographic sequence and removes overlaps that compromise reading.

```text
hero:      word / sky                         house + gate
arrival:   observation         |              desk + host
rooms:     statement           | living room, then offset details
table:     wide courtyard breakfast + small tactile continuation
grounds:   courtyard → estate → pool
evening:   full-width long table → quiet stay invitation
```

## Interior photography

Rooms feel inherited, not installed. Limewash, dark timber, terracotta, linen,
rush, stone, and aged brass carry the interiors; furniture is collected rather
than matched. Keep the three room types spatially distinct: Nascente opens east
to the grove, Pátio opens into the shared courtyard, and Olival reads as the old
family apartment with its own salon. Tile is an architectural remnant, not a
theme, and should change form from room to room. Preserve the photographs' 3:2
field of view so thresholds, outlooks, and adjoining rooms remain legible.

## Motion

Motion follows the property: the day-line state changes, content settles into
place once, and image scale may shift by no more than 2% on deliberate hover.
No parallax, floating particles, bouncing controls, or looping decoration.

## Copy

Copy hosts rather than sells. Use times, directions, ingredients, rooms, and
prepared acts. Prefer “Coffee begins in the kitchen at seven” over “curated
luxury.” English is primary in the first build; Portuguese appears in the
descriptor and may become a full locale later.

## Accessibility and performance

Semantic landmarks, visible focus, keyboard-operable dialog, tested contrast,
responsive sources, lazy loading below the fold, reduced-motion support, and a
complete no-JavaScript reading path are non-negotiable.

## Never

Generic beige hotel cards; rounded floating panels; blue-and-white tile on
every surface; Moroccan-ri'ad cues; terracotta CTA by reflex; glassmorphism;
stock spa language; room-tier names invented only to raise price; animation
without physical cause.
