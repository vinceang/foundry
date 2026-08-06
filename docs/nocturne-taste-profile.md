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
| Chapter opening | Whisper label in the metal | See "The opening move"; pick one and hold it site-wide |

## Type cadence

Three voices, strict casting: a display face (regular weight only, tracked
slightly wide, sizes via clamp up to hero scale), a light body face, and
tracked-caps whisper labels (11px floor, 600, `.3–.42em` tracking, set in
the metal).

The three voices are the constant. The *arrangement* they open a chapter in
is a per-site decision — see "The opening move" below. Body copy runs
55–60ch. Numbers that matter (prices, counts, indices) render in the
display face, one size up, written out in full — never abbreviated.

## The opening move

How a chapter announces itself is a **per-site choice, made once and held
throughout that site** — not a house template. Consistency belongs inside a
site; across the collection it reads as one generator.

A structural device — a label, a number, a rule, a mark — earns its place
only by encoding something true about the content. If it could be deleted
without losing information, delete it.

The whisper label above a display statement is *one* answer (Shokunin's).
It is no longer the default, and it is now well spent across the
collection. Alternatives, all built from devices this register already
owns:

- **The label moves to the margin rail.** Same metal, same vocabulary, set
  vertically in the gutter under the spine convention — the announcing
  block disappears while the information stays.
- **Absorbed into the display statement**, so the heading carries its own
  weight.
- **A measure that carries real information** — a count, an hour, a number
  of winters, an index. Legitimate precisely because the reader needs it;
  never a decorative `01 / 02 / 03`.
- **Cold open.** The display statement, nothing above it.
- **A colophon.** The mark closes the chapter instead of announcing it.

Record the site's answer in its `DESIGN.md` beside the signature
interaction.

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

One recipe: **one subject, one warm light, void background.** The dark is
where the light stops — never an underexposed subject. Ask for the subject
generously lit and fully modelled against the near-black; a murky plate
reads as a mistake, not as reverence (mean luma ≥15 is a floor; the 20–40
band is the target). The palette inside the frame must match the tokens;
no text in images.

People belong in the world. The maker at the bench, hands mid-process, a
craftsman profiled beside their work — given the same lamp and the same
reverence as the artifacts, roughly one human chapter per site. Faces are
welcome when the story is the maker; people are never lifestyle models or
set dressing.

Generation prompt template (keep one constant phrase per batch):
*"…near-black background, generous warm key light fully modelling the
subject, soft amber fill, deep shadow surround, museum artifact
presentation, no text."* For maker shots, swap the presentation clause:
*"…a craftsman at work, face lit by the work itself."*

**Video must earn its place**: if CSS could fake it (zoom, pan), use the
still. Video exists for parallax, revealed geometry, light raking a
surface. The camera moves as a visitor would — slow constant-speed arc,
never a turntable, never handheld. The subject never moves; ambient life
(dust, breathing light) is welcome. Generate from the exact still it
layers over so the loop can dip back to the image seamlessly. One video
per page; desktop-only, lazy, compressed (dark footage compresses
brilliantly — target ≤4MB).

## Forms and states

When the price puts a real order form on the site (see
`foundry-series.md`, commitment 7), the form is part of the world, not an
exception to it. It takes the register's type, palette, and voice — and it
is designed in **all** its states, not just at rest:

| State | Nocturne's answer |
|---|---|
| Rest | Hairline field in the metal on the dark ground; label always visible, never placeholder-only |
| Focus | The metal brightens — the same focus treatment as the rest of the site |
| Filled | Body face, full contrast; the entry reads as a written line |
| Error | Named in the metal beside the field, in the world's voice: what is wrong and what to do. Never red-only, never a generic "Invalid input" |
| Submitting | The action states it is working; nothing spins decoratively |
| Sent | A ceremonial confirmation — what was received, what happens next, when. The empty-state rule applies: formal, not apologetic |

Errors name the problem and the recovery. The form never loses what was
typed. Validation is real (`aria-invalid`, a live region for the result),
because a commission lost to a silent failure is the one unforgivable
interaction in this register.

## Floors (non-negotiable)

Complete page with JS off; visible focus states in the metal; body
contrast ≥7:1; no functional text below 11px — tracked micro-labels
included; real buttons with ARIA for interactive marks; keyboard paths
incl. Escape; form errors announced, not just colored; images ≤500KB;
mobile keeps the same darkness and cadence — a smaller lamp, not a lesser
brand.

## Anti-patterns (instant fails)

Pure black/white · a second accent color · uniform card grids · rounded
corners · bouncy/springy motion · urgency copy, badges, timers · "luxury"
said instead of shown · decorative gradients · stock-photo lifestyle
imagery · costume use of a culture's motifs · more than one ambient effect
per viewport · a tracked label above every heading as the automatic
opener · functional text below 11px · a form with no designed error state.

## Process rider (how this look actually gets made)

The document is half; the loop is the other half. Work in critique passes:
render → screenshot → find five concrete weaknesses → fix → repeat (≥3
passes). Verify geometry (overlaps, clearances) with measurements, not
eyeballs. Regenerate any asset that violates the palette rather than
shipping it. And apply the test relentlessly, in both directions:

1. **If a screen could belong to any other site, it is wrong.**
2. **If a screen could belong to another *Foundry* site, it is also
   wrong.** This is the sharper of the two and the one the collection
   keeps failing: light-over-time, commission-by-letter, and the whisper
   label each passed test 1 and failed test 2 for years before anyone
   named them. A device on every site distinguishes none of them.
