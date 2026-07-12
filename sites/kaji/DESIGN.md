# KAJI — Design System

鍛冶 · Hand-forged kitchen knives, Munetsugu Hamono, Sakai lineage est. 1782.
This document is the aesthetic source of truth. Extend the site *from* it; don't restyle around it.

## The one-line brief

**A museum vitrine, not a webshop.** Every choice should read as reverence: for the steel, for the fire, for the three people who make the blades. If an element feels eager, loud, or salesy, it's wrong.

## Design pillars

1. **Ink and paper alternation.** The page breathes by alternating near-black (sumi) and warm off-white (washi) sections. Dark sections hold atmosphere and imagery; light sections hold reading and commerce. Never two identical grounds back-to-back without a deliberate seam (the hamon divider is one such seam).
2. **One accent, used like a seal.** Vermilion (朱, shu) appears the way a hanko stamp appears on a document — small, deliberate, load-bearing. It marks: the accent word in a display line, eyebrows, meters, the hanko, hover states. It never fills large areas and never appears as gradient.
3. **Typography is bilingual and hierarchical.** Japanese display type leads emotionally; English carries information; mono carries specification. All three registers appear on almost every screen, in that priority.
4. **Real photographic assets, one photographer's eye.** Every image obeys the same lighting language (see Asset recipes). If a new image looks like it came from a different shoot, regenerate it.
5. **Motion toward stillness.** Things settle: reveals rise and stop, the hamon line draws itself once, meters fill once. Nothing loops attention-seekingly. Hover states whisper (a hairline, a 4–5% scale, a 5px slide).

## Tokens (defined in `src/styles/global.css` `:root`)

### Color

| Token | Value | Role |
|---|---|---|
| `--sumi` | `#0b0b0c` | Primary dark ground |
| `--sumi-2` / `--sumi-3` | `#131316` / `#1c1c20` | Raised dark surfaces, hover fills |
| `--washi` | `#efe9dd` | Primary light ground (manifesto, commission) |
| `--washi-2` | `#e5ddcc` | Card mats on light ground |
| `--paper` / `--paper-warm` | `#f5f1e8` / `#f7f3ea` | Collection ground |
| `--shu` | `#c0362a` | The seal red — borders, hanko, small fills |
| `--shu-bright` | `#d94a34` | Accent text/lines on dark grounds |
| `--shu-deep` | `#97281f` | Accent text on light grounds (prices) |
| `--on-dark` / `--on-dark-dim` / `--on-dark-faint` | `#efe9dd` / `#a49e92` / 45% washi | Dark-ground text hierarchy |
| `--on-light` / `--on-light-dim` | `#201e1b` / `#6b6459` | Light-ground text hierarchy |
| `--line-dark` / `--line-light` | 14% washi / 14% ink | Hairline rules |

Contrast rule: body text is always `--on-*-dim` or stronger; `--on-dark-faint` is only for labels ≤12px in mono caps.

### Type

| Register | Stack | Used for |
|---|---|---|
| `--serif-jp` | Shippori Mincho | ALL display: h1/h2/h3, kanji, stats, names. Weights 500–600 for Latin display, 600–700 for brand marks |
| `--serif` | Newsreader (italic axis used) | Body prose, leads, quotes. Italic = voice/quote/aside |
| `--mono` | IBM Plex Mono | Eyebrows, specs, labels, nav, prices-adjacent metadata. Always letter-spaced (.12em–.32em), usually uppercase, 10–12px |

Display scale is fluid: hero `clamp(48px, min(12vw, 17.5svh), 190px)` — the `svh` term is load-bearing (keeps short viewports from overflowing into the header; don't remove it). Section h2s `clamp(32–34px, ~5vw, 64–72px)`.

Vertical text: `writing-mode: vertical-rl` with `text-orientation: upright` for pure CJK, `mixed` when Latin/dashes are present. Every dark section carries one vertical or ghosted kanji element — it's the house watermark move (hero 一鍛一刀, manifesto 鍛えて、研ぐ, process 鍛錬 + 壱弐参肆伍, smiths 三人, footer 鍛冶). Ghost opacity 3–8%.

### Space & layout

8pt scale via `--s1…--s10` (8→256px). Container `--container: 1360px`, gutter `clamp(20px, 5vw, 88px)`. Section vertical padding `clamp(88px, 12vw, 160px)`; the manifesto and commission run taller (up to 220px) because emptiness is their material.

### Motion

Single easing: `--ease: cubic-bezier(.22,1,.36,1)` ("settle"). Reveals: translateY(28px)→0 + fade, 1.1s, stagger via `--i` × 90ms, IntersectionObserver adds `.is-in`, unobserve after firing. **Progressive enhancement contract:** `.reveal` is visible by default; hiding only happens under `html.js`, and `prefers-reduced-motion` disables all of it. Any new animated element must keep this contract.

## Signature elements (reuse these before inventing new ones)

- **Hamon divider** — the drawn-on-scroll SVG temper line with glow + echo path at the process seam. The site's one theatrical flourish; don't add a second one elsewhere.
- **Hanko seal** — 66px `--shu` square, white vertical kanji, −3.5° rotation. Signature/authorship marker.
- **Eyebrow** — mono caps + 28px vermilion dash. Every section opens with one (`The lineage · 系譜` pattern: English · kanji).
- **Gallery mat** — product images sit in `--washi-2` mats with 1px `--line-light` border, `mix-blend-mode: multiply` to seat the photo, vermilion inset hairline on hover.
- **Meters** — 2px track + vermilion fill, scaleX reveal. For any quantified comparison.
- **Ghost numerals/kanji** — oversized `--serif-jp` at 3–8% opacity, clipped by section `overflow:hidden`.
- **Film grain** — fixed SVG-noise overlay, 5% overlay blend, site-wide. Don't stack additional texture on top.
- **Header** — mix-blend difference over the hero only; past 60px scroll it becomes a solid `rgba(11,11,12,.82)` blurred bar; hides on scroll-down past 260px, returns on scroll-up.

## Asset recipes (gpt-image; keep the set looking like one shoot)

Shared grammar — near-black or washi ground, ONE warm light source, "editorial", "museum still-life", "extreme fine detail":

- **Dark hero/atmosphere:** "…near-black matte background, single dramatic raking light, deep shadows, editorial museum still-life photography, medium format, shallow depth of field, calm and reverent"
- **Product (catalog):** "standing perfectly vertical, tip up, centered, on a seamless warm off-white washi paper backdrop (hex efe9dd), soft even diffused studio light, one subtle soft shadow falling to the right, minimal elegant editorial catalog still-life" — portrait 1024×1536. The multiply-blend mat forgives small backdrop mismatch; big mismatch = regenerate.
- **Portraits:** "lit by warm ember forge-light from one side with a faint cool rim light, half the face falling into deep shadow, near-black smoky background, editorial documentary craft portrait, Dutch-master chiaroscuro" — half-shadow is both the look *and* the uncanny-valley hedge. Wardrobe: indigo/charcoal workwear only. **Vince has veto on every face.**
- Explore at `--quality medium`, finalize heroes at `high`. Budget lives in `doctor/HANDOFF.md`.

**Video (hero, shipped):** the hero film's job is to *showcase the blade* — a slow, locked-and-smooth macro camera glide along the steel that reveals hamon/grain detail, then returns to the exact opening framing so the loop closes (out-and-back structure). Vince's direction: near-still cinemagraphs are NOT enough — the camera must move and the steel must perform; the calm lives in the pace, not in stillness. Scene content itself stays quiet (no scene changes, no people, background stays dark). Generated via Higgsfield Seedance 2.0 image-to-video from the approved `/hero-01.png` start frame. Ship as muted looping `<video>` at full opacity with a long crossfade from the poster; `/hero-01.png` is the poster and the `prefers-reduced-motion` truth.

## Content voice

- English: short declaratives with one poetic turn per section, never two. ("What you buy is not a product. It is a decision made permanent.")
- Domain terms are real and used correctly: aogami/shirogami, kasumi/kurouchi/honyaki/migaki, hamon, mei, togi, tsuchime. Never invent Japanese; never decorate with random kanji — every kanji on the page means what it says.
- Prices in yen. Scarcity stated as fact, not urgency ("never more than three hundred a year" — no countdowns, no "only 2 left").

## Hard don'ts

No pure white or pure black. No gradients except photographic overlays. No border-radius (everything square-cut). No drop shadows on cards (mats + hairlines do that job). No second accent color. No sans-serif anywhere. No sakura/torii/wave clichés. No emoji. No autoplay sound, ever.
