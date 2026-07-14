# Handoff — Vicente guitar detail pages session, 2026-07-13

State of Casa Vicente after the desktop session that followed the phone-review
cleanup. The site is **complete for today's scope, deployed, and healthy**.

- **Live (production):** https://casavicente.vercel.app (Vercel project
  `vicente`, CLI-manual deploys: `cd sites/vicente && vercel deploy --prod --yes`;
  no git integration — pushing does NOT deploy)
- **Authority docs:** `sites/vicente/DESIGN.md` (binding; updated today),
  root `README.md`, this file. Previous session: 
  `docs/2026-07-13-vicente-mobile-session-handoff.md` (closed).

## What shipped today

1. **Phone-session resolution** — Concierto detail page removed per Vince
   (component, styles, EN/ES routes); three-guitars section restored (the
   breakage: an inline `<a>` swapped for the `.guitar-figure` div); mobile
   hero fixes kept and folded into `global.css`; deepened phone hero scrim.
2. **Screenshot convention** — `shots/` is gitignored scratch; curated
   record captures live in `docs/visuals/<site>/` (see its README).
3. **Guitar detail pages** (`/guitars/clasica|blanca|negra/` + ES
   `/es/guitarras/...`) — GuitarPage.astro; hero inverts the luthier split
   (body nogal left, guitar on full-bleed marfil right); per-guitar voice
   quote, *la voz* narrative, **la ficha** house-book spec ledger, etiqueta,
   maker section linking his profile, prev/next nav. All copy hand-authored
   EN/ES in `src/i18n.ts` (`guitarPages`). Home cards + footer link all
   three via the `.card-link` stretched overlay.
4. **The full-bleed hero saga** (read DESIGN.md §Signature elements +
   Asset recipes before touching):
   - fixed header overlays the hero column → contain box reserves the
     header zone via `--pt` var, else wide/short viewports hide headstocks
   - full-bleed achieved by **blurred ambient extend** (cover copy of the
     same photo, blur 34px, scale 1.12) + sharp contain layer with
     **padding-aware feather masks** (CSS vars `--pt/--px/--pb/--fz`) +
     warm vignette. A flex/max-height attempt failed (percentage
     max-height vs stretched grid column overflows at short viewports).
   - blanca + negra photos **regenerated** (gpt-image-2 via
     `tools/gen-image.mjs`, key at `~/.config/site-assets/openai.key`):
     warm cream backdrops matched to clasica + mandatory ≥10% margins on
     all sides (now in the DESIGN.md recipe — the feather needs them).
     Old versions in git history; rejected v2 in `assets-src/`.
5. **Lorenzo recast** — Vince regenerated the portrait ~12 years younger
   (was reading as Leonardo's twin); backup at
   `assets-src/luthier-lorenzo-old.png`.
6. Commission section: note spacing under the CTA widened (s4→s6).

## Open threads (priority order)

1. **Commission form** — still a dead `#` link on home; guitar-page CTAs
   point at `/#encargo`. The "letter, not commerce" treatment is unspecced
   for Vicente — design fresh when Vince asks.
2. **Portrait-orientation hero film for mobile** (needs Higgsfield;
   connection was down all of today's session).
3. Headstock insignia composite (second etiqueta surface) — never built.
4. Workshop image regen without legible poster text (currently
   crop-managed via object-position).
5. Etiqueta composite string-highlight refinement if ever used >700px.
6. `sites/vicente/cosmic-cycle/` — stray Astro starter scaffold,
   accidentally committed 2026-07-13 (phone session created it). Vince
   was told; remove on his word.

## Quirks (repo-wide, worth re-reading)

- `rm` is deny-listed — `git rm` works, or move files aside.
- Screenshot tools (`tools/shot-full.mjs`, `shot-clip.mjs`, inline
  playwright-core) **must run from repo root**.
- Vicente dev server this session: port 4574. Kaji/Shokunin may hold others.
- gpt-image renders: inspect anatomy before use (fret joins, tuners,
  bridge count) — recipe + clauses in DESIGN.md §Asset recipes.
- Cross-session memory `foundry-asset-pipeline` exists at the Claude
  project level.
