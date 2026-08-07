# Traccia — handoff

**Built:** 2026-08-06 · **Series:** Pastorale · **Project:** `sites/traccia`
**Live:** https://traccia-telai.vercel.app

A one-bench steel frame builder in Edolo, high Val Camonica, under the
Mortirolo. Vince named the subject, the country and the register.

**Thesis:** *a frame is a set of angles argued from one rider and one road.*

Full source of truth: [`sites/traccia/DESIGN.md`](../sites/traccia/DESIGN.md).

## The register call, which was the interesting part

The backlog said Nocturne. Vince said Pastorale, and he was right for a reason
worth writing down: **the collection already holds three Italian Nocturnes** —
Sant'Agata (Cremona), Barchetta (Naples), Alla Luna (Murano) — and all three
are warm. A fourth warm Italian workshop under a lamp would have failed the
second half of the relentless test on sight.

Two arguments carry the register beyond "it's different":

- **The light in this trade genuinely is cold and flat.** You cannot read a
  mitre gap, a brazing fillet or a 0,3 mm alignment error under a warm point
  source; frame shops work to tall north windows for the same reason a drawing
  office does. A lamp-on-void plate would misrepresent how the work is seen.
- **The specification comes from outdoors.** What sets the angles is a body and
  a gradient, and the gradient lives on the Mortirolo in February. The bench
  executes; the valley specifies.

So Pastorale extends past northern outdoor timber trades without being
stretched. That is the doctrine-level thing this build establishes.

## Signature — "La traccia"

The configurator/order-form fusion, interpreted through **fit and handling**.
Five inputs (height, inseam, rider weight, road, reach), and everything is
computed from one real geometry model rather than a plausible-looking curve.

Numbers that came out right the first time, which is how you know the model is
real: a 178/84 rider on *passo* gets **72°48′ head angle, 57 mm trail, 998 mm
wheelbase, 595 mm front centre** — textbook road figures. *Randonnée* produces
**44 mm trail** off a 65 mm fork offset, which is genuine low-trail practice
for a front load; *bianca* produces 65 mm, genuinely gravel-stable.

**The conflict is toe overlap**, and it is the reason the interaction is worth
building. It is real, common, and has no free fix. A 156/70 rider overlaps by
~50 mm on any road; a 192/94 rider is clear. The drawing shows the toe arc
crossing the tyre in *minio*, and the house names all three answers with what
each one costs — ending on the honest one: *most riders his size ride with it,
including him.*

**One sign error, caught by checking against the world rather than the code:**
the contact patch trails *behind* where the steering axis meets the ground.
Taking it the other way put the wheelbase 110 mm long, which is what exposed
it. Worth remembering that a geometry model is testable against reality.

## Asset conventions

- Raw PNGs in `assets-src/` (gitignored); `./optimize.sh` ships to
  `public/images/` at 1536 + 800.
- **Bright plates compress far worse than dark ones.** At q78 the largest was
  717KB, over the 500KB floor. `optimize.sh` now steps quality down per file
  until each clears; largest shipped 485KB. A Nocturne's dark ground hides
  this problem — Pastorale does not.
- **Every bicycle prompt must say unbranded, no decals, no lettering.**
  Generators put invented brand names on frames at the slightest opening.
- Pastorale's luma band is **110–170**, not Nocturne's 20–40. Shipped 88–168.

## The deploy trap, which is new and will recur

**`<name>.vercel.app` is a global namespace, and `traccia` was already taken by
a stranger's project.** The first deploy returned HTTP 200 from
`traccia.vercel.app` — an unrelated Italian app — which is exactly why the
skill says a 200 is not verification. The screenshot caught it immediately.

The mechanics, worth knowing for the next site:

- The public production alias is the clean `<name>.vercel.app`. The
  team-scoped `<name>-vincent-angs-projects.vercel.app` is **SSO-protected**
  and 302s, so it is never a usable live URL.
- If the clean name is taken, the fix is to **re-link under a free project
  name** (`vercel link --yes --project <free-name>`) rather than to record a
  protected URL. This site ships as `traccia-telai`.
- Check availability *before* deploying: `curl -o /dev/null -w "%{http_code}"
  https://<name>.vercel.app` — a 404 means free.
- `vercel link` writes a `.env.local`; confirmed gitignored.

## Traps hit (all recur)

1. **SVG text and the 11px floor, again.** At 390px this board renders at
   **0,29×** — no font size clears 11px without the labels colliding. The right
   fix was not bigger type: the readout grew from four cells to **six** (adding
   seat/top tube and stack/reach) so every number is in HTML, and the SVG
   labels drop below 860px. The drawing becomes a drawing.
2. **Contrast fails on the ground you did not check.** `--acciaio-lo` measured
   **3,82:1** and failed 4.5 outright; `--acciaio` was 6,01 and missed
   Foundry's 7:1 body floor. Both were eyeball-plausible.
3. **`shot-el.mjs` returns a blank frame for a `position: sticky` element.**
   It waits before it scrolls, so the observer/state never settles. Drive the
   page, then scroll, then clip — or use `shot-clip` at a known offset.
4. Content filters refused the gravel-switchback landscape three times; the
   chapter reads fine on `valle` and `ghiaia` instead. Do not burn a fourth
   attempt on a shot the page does not need.

## Content note

Real framebuilding vocabulary throughout (*dima*, *piano di riscontro*,
*avancorsa*, *scantonatura*, *minio*), used correctly and glossed on first use.
No lycra, no racing, no peloton photography, no "passion" or "Italian
craftsmanship" as adjectives, and no bicycle on the site carries a decal.
