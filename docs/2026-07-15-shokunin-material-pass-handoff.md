# Handoff — Shokunin material pass (intent set 2026-07-15)

A brief for a future session, written after the Schwarzwald material
session of 2026-07-15. **Nothing has been done to Shokunin yet.** This
documents *what the owner wants, why, and how to translate it* — so any
agent can pick it up cold.

## The intent, in the owner's words

After a day of adding material texture to Schwarzwald, Vince said:
*"We might have to revisit Shokunin to add some touches as we did here.
Loving this."* The touches, in the order they delighted him:

1. **Soft grain on card/panel surfaces** — his reaction was "Wow.. Wow.
   There it is. Ship it." He called it "the paper effect."
2. **Tone-on-tone wallpaper** on select chapters — an old-world
   wallcovering feel ("something one might see in a cigar room"),
   seeded by Lea Verou's CSS3 Patterns Gallery (he linked cross-dots).
3. **Warm secondary grounds** breaking up a dark monotone — Schwarzwald
   gained two: a parlor brown and a card-fill cherry, each *named as a
   material in the brand's world*, each with a one-or-two-chapters-per-
   page discipline.

## Reference implementation (read, then translate — never copy)

All in `sites/schwarzwald/`, shipped and live at
https://schwarzwald-chi.vercel.app:

- **Grain** — `src/styles/global.css`, the `--grain` custom property: an
  SVG `feTurbulence` noise tile as a data URI (zero requests), tinted to
  the brand's *light* color (there: brass `0.93 0.77 0.53`), alpha baked
  to `.1` via `feColorMatrix`, laid with the card fill as
  `background: var(--card-color) var(--grain)`. 180px tile,
  `baseFrequency .8`, `stitchTiles='stitch'`.
- **Wallpaper** — same file, `.wallpaper::before`: crossing 45° lines on
  a 109px cell (lines at **2.8% alpha** after the owner muted them) with
  a brighter dot at each crossing (**12% alpha** — justified in-world as
  metal catching lamplight), masked with a vertical linear-gradient so
  the pattern fades with the section's light. Applied only to the
  chapters where "the house speaks in its own voice."
- **Doctrine writing** — `sites/schwarzwald/DESIGN.md` §2 (tokens as
  materials), §4 (the wallpaper entry, incl. two *rejected* prototypes
  and why). Every texture got a rule about where it may and may not
  appear. Do the same in Shokunin's DESIGN.md.

## Translation table (Schwarzwald → Shokunin)

Shokunin's world is **lacquer seen by lamplight** (its DESIGN.md is
binding; also `sites/shokunin/AGENTS.md` for identity-separation rules).
Its vocabulary: `--urushi` lacquer grounds, `--kin` smoked gold,
`--kon` indigo (one chapter per page), `--silk` text, **the diamond ◇ as
the house geometric mark**, Marcellus for display.

- Grain tint: **kin**, not brass — try `0.90 0.80 0.58`-ish mapped from
  `--kin-bright` `#e6cd93`. On urushi cards (`--urushi-2/3`) the grain
  should read as *lacquer dust / silk weave*, not paper. Name the token
  in-world (e.g. `--nashiji` — pear-skin lacquer speckle, a real urushi
  finishing technique; check it against DESIGN.md's vocabulary rules).
- Wallpaper: **the diamond lattice is natively Shokunin's** — the
  trellis/harlequin direction that had to be rejected for Schwarzwald
  (diamonds are Shokunin's mark) is exactly right here. A kin-line
  diamond trellis, or sashiko-style stitch pattern, on the doctrine/
  atelier chapters. Same discipline: lines ≤3% alpha, masked to fade,
  only in "interior" chapters, never behind imagery plates, never on
  the kon (indigo) chapter.
- Secondary ground: if the page reads monotone, consider one warm
  raised-lacquer ground promoted to a chapter (urushi-3 territory),
  named as a material. Only if screenshots show the monotone problem —
  Schwarzwald needed it; Shokunin may not.
- **No red/vermilion ever** (Kaji's), no paper metaphors that collide
  with Kaji, no Schwarzwald tokens/names/values copied across. The
  repo's thesis is that the sites share tooling, never design.

## Taste calibration (learned on Schwarzwald, applies to the owner)

- Start every texture at "felt, not seen"; expect one nudge *up* on
  particulate texture (he asked grain 7% → 10%) and nudges *down* on
  structural lines (he muted trellis lines 5% → 2.8%).
- Dots/glints may be brighter than lines if they can be justified as
  metal catching light.
- He reviews on a large desktop and on iPhone via devtools — verify
  both; watch that pattern layers never sit under low-contrast text.
- Send 1:1 crops for texture review — full-page screenshots hide grain.

## Process (unchanged house method)

- `?nofx` + `node tools/shot-full.mjs` / `tools/shot-clip.mjs` **from
  repo root**; critique loop on screenshots before showing anything.
- Commit per step, message style `Shokunin: <what> — <why>`. Deploys are
  CLI-manual: `cd sites/shokunin && vercel deploy --prod --yes`
  (project `shokunin`, live at https://shokunin-topaz.vercel.app).
  Pushing to GitHub does NOT deploy.
- Update `sites/shokunin/DESIGN.md` in the same commit as each change —
  textures get placement rules, and rejected prototypes get recorded so
  they aren't re-litigated.
- First acts of the session: read `sites/shokunin/DESIGN.md` and
  `AGENTS.md`, take fresh screenshots of the live site, and *then*
  propose — the owner likes an A/B screenshot comparison before
  committing to a texture.
