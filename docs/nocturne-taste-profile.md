# Nocturne — a taste profile

A lamplit room in a private museum: darkness as the ground, one metal as the
light, and the conviction that restraint — not decoration — is what reads as
premium. Distilled from the Shokunin build (July 2026), with the brand
specifics parameterized out.

**Standalone use:** hand this file to any LLM as the aesthetic direction for
a project, alongside 1–3 reference screenshots (imagery anchors a model's
target far better than prose — canonical references live in
`foundry/docs/visuals/shokunin/`, live site: https://shokunin-topaz.vercel.app).
**With vince-ui:** this profile is a *mood layer*; the house skill's
structural rules (grid, 8pt, hierarchy, accessibility) remain the floor.

**Reach for it when** the subject deserves reverence — a portfolio, an
archive, a collection, a craft, a body of work presented as artifacts.
**Avoid it for** dense productivity UI, playful brands, or anything that
must feel fast and busy; this profile trades efficiency for ceremony.

---

## The five commitments

Everything else is derivable from these:

1. **Darkness is a material, not a color.** The ground is a *substance* —
   lacquer, ink, slate, velvet, basalt — expressed as a near-black with a
   hue (Shokunin: `#120d0a` black-brown lacquer). Never pure `#000`. Depth
   comes from layered darks of the same material, plus at most one cooler
   "night air" hue for a single chapter per page.
2. **One metal behaves as light.** A single metallic accent — smoked gold,
   aged brass, oxidized silver, copper — appears only where light would
   strike: labels, hairlines, marks, one primary button per view, glints on
   hover. If metal exceeds ~5% of the frame it has become jewelry; pull
   back. Light comes *from* the metal; there is no other accent color.
3. **Scarcity is the layout.** One subject at a time, generous darkness
   around it, alternating asymmetric compositions — never a uniform card
   grid (a grid says inventory; alternation says curation). Show what is
   absent, locked, or forthcoming as content: empty states are ceremonial,
   not apologetic.
4. **Motion moves toward stillness.** One easing curve for everything
   (`cubic-bezier(.19,1,.22,1)`-class), long durations (0.9–2.2s).
   Entrances settle; loops breathe; nothing bounces, snaps, or loops
   busily. One ambient effect per viewport, maximum. All motion is
   progressive enhancement, and reduced-motion gets the finished, static
   composition — never a broken one.
5. **Copy proves; it never claims.** Declarative, short, unhedged
   sentences. Material specificity is the poetry — numbers, hours,
   processes — never "premium/luxury/exclusive" as adjectives, never
   urgency, discounts, exclamation marks, or social proof. Admitting a
   flaw formally, once, makes every other claim credible.

## Parameterize per project

These are choices the profile deliberately does not make for you:

| Axis | Shokunin's answer | Your options |
|---|---|---|
| Ground material | Black-brown urushi lacquer | Ink, slate, velvet, basalt, deep leather… |
| The metal | Smoked gold `#c2a061` | Brass, silver, copper, bronze, platinum |
| Night-air hue | Kon indigo `#131c26` | Any cool dark; or omit |
| Display face | Marcellus (lapidary serif) | Any serif with carved/engraved dignity |
| Body/label face | Manrope 300 / 600 tracked caps | Any quiet grotesque or humanist sans |
| Signature geometry | 45°-rotated square (diamond) | Pick ONE shape; it is the only ornament |
| Cultural motif | Vertical kanji rails | Optional; must be real and correct, never costume |
| World vocabulary | Register / Works / Petition | Name your domain's nouns and use them everywhere |

## Type cadence

Three voices, strict casting: a display face (regular weight only, tracked
slightly wide, sizes via clamp up to hero scale), a light body face, and
tracked-caps whisper labels (~10.5px, 600, `.3–.42em` tracking, set in the
metal). Every chapter opens with the same cadence — it *is* the rhythm:

```
WHISPER LABEL IN METAL TRACKED CAPS
Large display statement, one or two lines.
Dim body copy that explains, 55–60ch max.
```

Numbers that matter (prices, counts, indices) render in the display face,
one size up, written out in full — never abbreviated.

## Structure

- 8px rhythm; chapters separated by 128–192px of darkness. When in doubt,
  add emptiness — it is the luxury signal.
- A fixed "frame" of hairline corner fittings in faint metal at the
  viewport edges — the one piece of game-UI energy; add no other chrome.
- **Fixed chrome never touches content.** Headers go transparent over the
  hero, take a dark veil (blur + hairline) once scrolled, withdraw on
  scroll-down, return on scroll-up. Margin rails use vertical text
  (bottom-to-top for rotated Latin — the spine convention) and stay
  entirely inside the gutter.
- Zero border-radius. The signature shape is the only ornament.

## Imagery

One recipe, no exceptions: **one subject, one warm light, void background.**
Chiaroscuro; the palette inside the frame must match the tokens; no text in
images; no faces. Generation prompt template (keep one constant phrase per
batch): *"…pitch-black background, single warm key light, deep chiaroscuro
shadows, museum artifact presentation, ultra-premium, no text, no people."*

**Video must earn its place**: if CSS could fake it (zoom, pan), use the
still. Video exists for parallax, revealed geometry, light raking a
surface. The camera moves as a visitor would — slow constant-speed arc,
never a turntable, never handheld. The subject never moves; ambient life
(dust, breathing light) is welcome. Generate from the exact still it
layers over so the loop can dip back to the image seamlessly. One video
per page; desktop-only, lazy, compressed (dark footage compresses
brilliantly — target ≤4MB).

## Floors (non-negotiable)

Complete page with JS off; visible focus states in the metal; body
contrast ≥7:1; real buttons with ARIA for interactive marks; keyboard
paths incl. Escape; images ≤500KB; mobile keeps the same darkness and
cadence — a smaller lamp, not a lesser brand.

## Anti-patterns (instant fails)

Pure black/white · a second accent color · uniform card grids · rounded
corners · bouncy/springy motion · urgency copy, badges, timers · "luxury"
said instead of shown · decorative gradients · stock-photo lifestyle
imagery · costume use of a culture's motifs · more than one ambient effect
per viewport.

## Process rider (how this look actually gets made)

The document is half; the loop is the other half. Work in critique passes:
render → screenshot → find five concrete weaknesses → fix → repeat (≥3
passes). Verify geometry (overlaps, clearances) with measurements, not
eyeballs. Regenerate any asset that violates the palette rather than
shipping it. And apply the test relentlessly: **if a screen could belong
to any other site, it is wrong.**
