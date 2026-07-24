# Handoff — Bottega Sant'Agata (2026-07-24)

A single-maker violin bottega in Cremona, Lombardy, on the Contrada Sant'Agata
since 1911. Nocturne register. Directory: `sites/santagata`.

## The world in five lines
- One maker, **Tobia Ferraboschi** (third of his name), one apprentice, eleven
  violins a year — accepted **by letter**, never sold from a shelf.
- The register keeps only what is *on the bench* (`Al banco`), *promised*
  (`Promesso`), or *voiced and gone* (`Intonato`) — never a product grid.
- The bench also makes its own bows, cases, rosin, strings — sold by **a real
  order form** (Il banco, "the counter"), which is the site's whole reason to
  exist.
- The register is a Cremonese bench at night: pitch-brown dark (`--legno
  #0c0908`), one warm varnish light (`--vernice #c8964a`, red-gold), and one
  cool inversion in the graduation chapter (`--abete #141b1f`).
- The signature is **La Graduazione** — a maple plate's arching thickness shown
  as a live contour field; a caliper reads it centre → edge (4.2 → 2.3 mm) on
  scroll, one ring lighting at a time, ending on a ledger line.

## How it diverges from Casa Vicente (the nearest sibling)
Vicente is **Granada**, Andalusian **flamenco/classical guitars**, Averia Serif
Libre + EB Garamond, Spanish, since 1932; signature is a Moorish horseshoe arch
and the order path is a commission stub only.

Sant'Agata is **Cremona**, Cremonese **classical violins**, **Fraunces**
(ink-trapped, lapidary) + **Hanken Grotesk**, Italian, since 1911; the palette
is pece pitch-brown + red-gold vernice (never Vicente's naranja/café-brown);
the signature ornament is the **effe** (f-hole glyph, never an arch); the
interaction is the **live graduation map**; and the order model is **two paths,
both live**. No screen reads as Vicente: different city, instrument, type,
palette, ornament, interaction, order model.

## The commission-vs-order split (the doctrine's first live test)
- **La Commissione — by letter.** A violin is above €48,000. No cart could hold
  it. The primary CTA opens a `mailto:` to the bench ("Write to the bench").
- **Il Banco — a real order form.** Bench accessories (bow €3,400, case €1,650,
  rosin €42, strings €118, shoulder rest €210) are all well under €5,000. The
  form has structured fields (quantity steppers with live total, name, reply
  email, address, note), a clear primary submit, full keyboard support, and
  hands off by assembling a structured order into a **`mailto:` body**. It
  **never captures a card and never processes a payment** — nothing is charged
  until the bench replies. Works with JS off (native form submission).
- The two paths sit adjacent in the closing chapter with an explicit two-column
  strip so the split reads as deliberate.

## Build / verification
- Static Astro, two Google font families, vanilla script, zero JS frameworks.
- `npm --prefix sites/santagata run build` passes clean.
- Six plates in `public/plates/` (hero, maestro, scroll/ricciolo, effe,
  registro, banco), all ≤188KB (floor 500KB). The graduation map is drawn SVG.
- Floors verified via playwright critique loop (dev port 4361, `?nofx`):
  JS-off renders a complete page with the graduation in its finished state;
  focus-visible is a 1.5px vernice outline at 4px offset; body copy ≥7:1 on
  every ground (including the cooler abete chapter, bumped to `#b4aa99` → 7.6:1);
  full keyboard path reaches every form control and the submit; reduced-motion
  handled in CSS; dedicated mobile pass (390px) reflows to one column.
- Signature verified interactive: scroll sweeps 4.2 → 3.7 → 3.1 → 2.8 → 2.6 →
  2.3 mm, each contour ring lighting in turn, ledger appearing at the edge.

## Live
- Live URL: **https://santagata.vercel.app** (bare alias is ours; the
  `-vincent-angs-projects` URL also serves the same deployment). HTTP 200,
  `<title>` confirmed, SSO protection disabled.
- Live render verified by screenshot: `shots/live/santagata.png` — confirmed
  all six images load, Fraunces + Hanken Grotesk render, and the graduation
  interaction sweeps live (3.7 → 2.3 mm on scroll).
