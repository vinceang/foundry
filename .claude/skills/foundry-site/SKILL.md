---
name: foundry-site
description: >-
  Build and ship a complete new Foundry site end-to-end: pick or accept a
  craft/trade/place subject, invent its world, generate art-directed imagery,
  build a self-contained Astro site under sites/<name>, self-critique through
  screenshot passes, and deploy to a verified live Vercel URL — all without
  waiting for approval. When no subject is given, it builds the top entry of
  the approved queue in docs/foundry-backlog.md, which makes it safe to run
  unattended on a loop or schedule. This is the right tool for ANY request to
  produce a new site in this collection, whether the subject is named, implied,
  or left to the queue — reach for it eagerly rather than building an ad-hoc
  page yourself. Use it whenever the user asks for a new Foundry site, a new
  Nocturne/Aubade/Vesper/Pastorale, "add a site for X", "build the next
  atelier/hotel/house", "build the next site/one", "open a new site", "spin up
  a new site for X", "start the next one from the queue", "work the backlog",
  or invokes /foundry-site [subject] [--dry-run] — even if they only name the
  subject ("do private jet charter next", "do the perfume house next") without
  saying "site" or "website". Do NOT trigger for work on sites that already
  exist — editing, restyling, redeploying, generating assets for, or reviewing
  a built site — nor for editing shared docs like the backlog or a taste
  profile; those are ordinary tasks, not a new build.
---

# Foundry site builder

You are opening a new house in the Foundry collection. The output is not a
demo or a draft: it is a finished, live, art-directed site of the kind that
wins Awwwards Site of the Day — typography, motion, and one interaction that
could belong to no other subject.

## The contract

- **Done means live — or logged.** The goal is met when a Vercel production
  URL renders correctly (verified with a screenshot of production, not
  localhost), the work is committed and pushed, and the site is registered
  in the repo docs. Vercel does glitch, though, and an unattended run must
  not stall forever on a flaky platform: if the deploy still fails after a
  genuine attempt (see Phase 6 for what "genuine" means), a clean localhost
  verification counts as done **provided the failure is recorded in
  `docs/vercel-failures.md`** so a human can finish the deploy later. A
  passing local build that was never even pushed does not count — the log
  entry is the thing that closes the gap. In `--dry-run` mode, done means
  the local build passes the critique loop (see "Dry-run mode").
- **You are the reviewer.** Do not pause for approval between phases. The
  screenshot critique loop is the design review; run it honestly and act on
  it. Only stop for genuine external blockers you cannot work around
  (expired auth, exhausted quota) — and even then, first try the documented
  fallback.
- **The taste profile is the floor, not the ceiling.** Everything in the
  relevant taste profile is binding; going beyond it — a bolder signature
  interaction, a braver composition — is why each site is worth making.
  Creativity spends itself in one subject-specific place; the rest stays
  disciplined.
- **Self-contained sites.** Each site owns its stack, tokens, assets, and
  `package.json`. Never import from a sibling site and never extract shared
  design tokens — shared engineering tools only (`tools/`). This separation
  is what keeps each world distinct.

## Phase 0 — Load the doctrine

Read, in order:

1. `README.md` — the collection table (what already exists, what's live).
2. `docs/foundry-series.md` — the two series and the six shared commitments.
3. The taste profile for the series this subject belongs to:
   `docs/nocturne-taste-profile.md` (reverence, artifacts, craft under one
   lamp) or `docs/aubade-taste-profile.md` (daylight, dwelling, hospitality).
4. The `DESIGN.md` of the most recent sibling site in the same series —
   for engineering conventions and to know what to *avoid repeating*.
   Sites must share doctrine, never a skin.

**The series is a decision about light, and it must come from the subject —
not from a bucket.** Before assigning a series, ask: at what hour does this
world actually live? A forge lives at night under one lamp; a hotel lives in
morning light. But a private jet lives at civil twilight on a tarmac; a
lighthouse lives at dusk. Do not force a subject into Nocturne because
"craft = dark and premium" — chiaroscuro is Shokunin's lamp, not Foundry's
default, and a page darker than its world needs to be is a real failure
mode (it has happened: a jet-charter build shipped over-dark Nocturne
chiaroscuro when the subject's native light was twilight, and it read
worse than an unconstrained build of the same subject).

If the subject's native light is neither night-lamp nor morning, open a new
register: the collection has expanded before (Nocturnes → Aubades). Propose
the new series' quality of light in a short addition to
`docs/foundry-series.md` and derive its taste commitments from the existing
two profiles' structure — they are templates for *how* to hold taste, not
the only two answers. This is the place to be genuinely inventive at the
doctrine level, and choosing correctly here matters more than anything in
the build.

## Phase 1 — Choose the subject

Subjects flow through `docs/foundry-backlog.md` — the approval gate that
lets this skill run unattended. Resolve the subject in this order:

1. **User supplied a subject** → use it. If a matching backlog entry exists
   (any section), inherit its notes; either way, add/move the entry to
   **Building** so a concurrent run can't collide with it.
2. **No subject given** → take the **top entry of "Approved — build queue"**
   and immediately move it to **Building** (in a full run, commit that edit
   right away — `Backlog: begin <subject>` — it is the claim). Do not
   second-guess an approved entry's subject; Vince approved it. The entry is
   a seed: Phase 2 still invents the world, and its "place idea" and
   "signature interaction" lines are suggestions you may better.
3. **Approved queue is empty** → do not invent-and-build anyway; unattended
   runs only build what Vince approved. Instead, restock the pipeline: add
   2–3 new entries to **Proposed** (judged on the criteria below, in the
   entry format the file shows), then stop and report that the queue is
   empty. That report is the run's deliverable in this case.

On ship (Phase 6), move the entry to **Built** with the live URL. Dry runs
never modify the backlog — note in the report which entry was rehearsed.

Whether proposing new backlog entries or vetting a user-supplied subject,
judge candidates on:

- **Imagery potential first.** Would the photography be beautiful? Samurai
  armour, private jets, cuckoo clocks, glass furnaces, wooden boats — the
  subject must promise assets with inherent visual drama.
- **A discriminating audience.** Bespoke, small-batch, generational craft or
  utmost-exclusivity service. If the subject could plausibly advertise on a
  billboard, it is too broad.
- **Distance from existing sites.** Check the README table. A new knife
  maker is off the table; a new *material*, culture, or quality of light is
  the goal.
- **One obvious signature interaction.** Before committing, name the single
  interaction only this subject could own (Aresta: rooms by orientation of
  light; Shokunin: the armour under one lamp). If you cannot name it, pick a
  different subject.

## Phase 2 — Build the world before the pages

Foundry's first commitment: a specific world before a visual style. Decide,
in writing, before any component exists:

- **Name and place.** A real region, a believable founding, correct cultural
  vocabulary (never costume — if you use another culture's terms, they must
  be real and right).
- **Materials as palette.** Colors are named substances from the world
  (urushi lacquer, mineral plaster, flax), never abstract tokens. 4–6 values
  with roles, contrast verified for body text.
- **Type pairing.** A display voice and a quiet working voice, cast for this
  world — do not default to a previous site's faces.
- **The opening move.** How a chapter announces itself, chosen once and held
  across this site. It is a decision, not a template — read "The opening
  move" in the relevant taste profile and pick from it. **Do not default to
  a tracked caps label above the heading.** That was Shokunin's answer, the
  collection has now spent it everywhere, and a device that appears on every
  site distinguishes none of them. The register's own alternatives —
  Vesper's operational readout, Pastorale's trade measure, Aubade's named
  preparation, Nocturne's margin rail — carry real information where a
  decorative label carries none. Record the choice in `DESIGN.md`.
- **Vocabulary.** The domain's own nouns (Register / Works / Petition;
  Rooms by light) used everywhere, navigation included.
- **Page arc.** One page thesis and a chapter sequence, written as a single
  line (see the briefs in `docs/` for the form).
- **The signature interaction**, specified concretely enough to build first.
  **Before choosing it, survey what the built sites already do (read their
  DESIGN.md signature lines) and pick a DIFFERENT axis than the collection is
  already crowded with.** Right now the crowded axis is *time / light over the
  day* — Lagar do Sol, Aresta, Dar el Warda, and Larès all animate the hour,
  and it has tipped from atmospheric into mannered. Do NOT default to a
  sun-line, day-length, orientation-of-light, or "watch the room change
  through the day" interaction; reach for time only when the subject makes it
  genuinely inevitable (a literal sundial, a lighthouse's timed character),
  and even then find a fresher take. The richest signatures interrogate the
  subject itself on another axis — material/process (a goblet cooling, a
  graduation map, varnish building), spatial/structural (a corner assembling,
  a flight profile), provenance/archive (a tree-ring scrub, a ledger), or the
  configurable fusion below. See docs/aubade-taste-profile.md ("Signature
  interaction — and the light-over-time trap").
  **The highest form of it — reach for this whenever the product is
  made-to-order or configurable — fuses the signature with the order form:
  a live, spec-driven preview that draws or reconfigures the actual product
  from the buyer's OWN inputs, so choosing and ordering become one act.**
  Veta's "draw your board" is the exemplar — dimensions, volume, fins, and
  style redraw the outline live, and that same panel places the order; Vince
  loves this and wants more of it. The order stops being a form to fill and
  becomes the buyer watching their own commission take shape. Interpret it
  through the craft every time and NEVER template Veta's board: a frame that
  redraws to a rider's fit numbers, a last that carves to measurements, a
  plan that fits to a real lot, a dial that assembles layer by layer. If the
  subject genuinely can't be configured (a hotel, a discreet charter), don't
  force it — give it a different subject-specific signature. But when it
  can, this fusion is the ceiling to aim for.
- **How the site takes an order — match the gesture to the price.** Foundry's
  reflex has been commission-by-correspondence: "write to us," a letter, no
  order form. It fits genuinely bespoke, high-value work — a hotel stay, a
  samurai suit, a private-jet introduction, a $30k concert violin — but used
  on everything it becomes a mannerism, and it has been overused. Rule of
  thumb: **if the product, or any real variant of it, might sell for under
  $5,000 USD, give the site a proper order/enquiry form** — structured
  fields, a clear primary action, the actual thing a buyer expects — instead
  of the precious "write to us" gesture. Reserve commission-by-letter for
  work that is truly bespoke or clearly above that line. One workshop can do
  both: bespoke pieces by commission, the bench's accessories (cases, bows,
  strings, small editions) by an order form. These are fictional brands, so
  the form collects the order and contact details and hands off an
  enquiry/order request (mailto or a static endpoint) — it never captures a
  card number or processes a real payment. Keep the form on-brand: it obeys
  the register's type, palette, and copy voice, never a generic checkout.

Write all of this into `sites/<name>/DESIGN.md` — it is the site's source of
truth, and writing it first is what prevents the build from drifting into a
generic template. Follow the structure of a recent sibling's `DESIGN.md`.

## Phase 3 — Scaffold

- New Astro site at `sites/<name>` (all six existing sites are Astro — copy
  `astro.config.mjs`/`tsconfig.json` conventions from a sibling rather than
  re-deriving them). Own `package.json`, own lockfile.
- Implement the `?nofx` query param early: it must disable entrance
  animations and force eager image loading. The critique loop depends on it.
- Raw generated assets go in `sites/<name>/assets-src/` (gitignored);
  only optimized files ship from `public/`.

## Phase 4 — Imagery

Read `references/asset-pipeline.md` (in this skill) before generating
anything — it encodes hard-won lessons about model choice, exposure, and
batching that are expensive to relearn. The short version:

- Higgsfield MCP (`soul_2`) is the primary path for photographic stills and
  video loops; `tools/gen-image.mjs` (gpt-image) is a proven fallback and
  often the better choice for product plates. Choose per shot, not per site.
- One constant art-direction phrase across the whole batch keeps a site's
  photography coherent — this is the single highest-leverage rule.
- The taste profile's imagery recipe is binding: palette inside the frame
  must match the tokens; regenerate any asset that violates it rather than
  shipping or CSS-correcting it.
- **Generously lit beats atmospherically dark.** Builds have shipped too
  dark by treating chiaroscuro as a style target; Vince has rejected them
  for it. A dark register is a compositional choice — the subject itself
  is always fully modelled in light, and the darkness is what surrounds
  it. When judging a plate, murky loses to rich every time.
- **People belong on these sites.** Vince's most-directed builds all carry
  human presence — a maker profiled, hands mid-process, a quiet service
  moment (Lagar do Sol) — because a world nobody inhabits reads as a
  rendering. Put at least one human-presence shot in every shot list, in
  the register's own way: Nocturne gives the craftsman the same lamp as
  the artifacts; Aubade shows the evidence and act of hosting.

Derive the shot list from the world you built in Phase 2 (the briefs in
`docs/` show the form: establishing, chapters, material close-ups, one
restrained human moment if the series allows it).

## Phase 5 — Build in critique passes

Build the hero and the signature interaction *first*, and critique them
before building anything else — if the boldest part of the site doesn't
land, nothing downstream matters.

The loop, from repo root (tools need `tools/node_modules`):

```
npm --prefix sites/<name> run dev          # background
node tools/shot-full.mjs http://localhost:4321/?nofx shots/<name>-full.png 1440
node tools/shot-clip.mjs http://localhost:4321/?nofx shots/<name>-sec.png <y> <h> 1440
```

Once per build, after the sections exist and before the floors check, run
two mechanical checks.

**1. The anti-pattern detector**, over the site's source:

```
node ~/.claude/skills/impeccable/scripts/detect.mjs sites/<name>/src
```

Exit 0 is clean, 2 means findings. Source scanning needs no dependencies
and catches CSS- and markup-level tells: side-tab accent borders, grid-line
backgrounds, layout-property transitions, nested cards, gradient text. It
**cannot** see computed styles — font sizes, contrast, and overflow need a
rendered page, and that path wants `npm install puppeteer`, which this repo
does not carry. Do not claim a floor was verified by this scan.

This check depends on the `impeccable` skill being installed on the machine
and is the only part of this build that reaches outside the repo. If the
script is not at that path, say so once in the report and continue —
check 2 below needs nothing and still runs. A missing detector is a thinner
build, never a blocked one.

**2. The 11px floor**, which is exactly what the detector cannot see:

```
grep -rnoE "font-size:[[:space:]]*(0?\.[0-9]+rem|[0-9]{1,2}(\.[0-9]+)?px)" sites/<name>/src \
  | awk -F'font-size:' '{v=$2; gsub(/[ \t]/,"",v);
      if (v ~ /rem/) {gsub("rem","",v); px=v*16} else {gsub("px","",v); px=v}
      if (px+0 < 11) print $1"  → "px"px"}'
```

Any output is a violation. Tracked micro-labels count; being on the
`DESIGN.md` ramp is not an exemption. This is the check the collection
needed and never had — it finds 105 existing violations across the built
sites.

**The taste profile outranks the detector, always.** Seven rules are
already muted repo-wide in `.impeccable/config.json` because they fire on
our registers by design (Aubade's cream ground, Nocturne's lamp-on-void);
`.impeccable/README.md` explains each. Expect one to three false positives
per site among the rules that remain — `side-tab` fires on any 3–4px
absolute pseudo-element, including text cursors and decorative rings. If a
finding contradicts an explicit line in the taste profile, the profile is
right: waive it inline with a reason, never sand off the register to
satisfy it.

```html
<!-- impeccable-disable kicker-above-heading -- opening move: whisper label, see DESIGN.md -->
```

This matters most in unattended runs, where there is no one to catch a
"fix" that quietly destroys the world the profile exists to protect. A
detector finding is evidence, not an instruction.

**The taste profile outranks the detector, always.** Seven rules are
already muted repo-wide in `.impeccable/config.json` because they fire on
our registers by design (Aubade's cream ground, Nocturne's lamp-on-void);
`.impeccable/README.md` explains each. If a *remaining* finding contradicts
an explicit line in the taste profile, the profile is right — waive the
finding inline with a reason, never sand off the register to satisfy it:

```html
<!-- impeccable-disable kicker-above-heading -- opening move: whisper label, see DESIGN.md -->
```

This matters most in unattended runs, where there is no one to catch a
"fix" that quietly destroys the world the profile exists to protect. A
detector finding is evidence, not an instruction.

Render → screenshot → name **five concrete weaknesses** → fix → repeat.
Minimum three passes per major section; keep going while the critiques stay
easy to write. Every pass, ask two register questions alongside the visual
ones: *is this page darker (or lighter) than its world's actual hour needs
it to be?* and *is the imagery leaning on a sibling site's recipe instead
of this subject's own light?* Drama borrowed from another site's register
reads as costume. Verify geometry (overlaps, clearances, sticky behavior) with
measurements from the screenshots, not eyeballs. Apply the taste profile's
anti-pattern list as a hard checklist each pass, and its relentless test in
**both** directions:

1. **If a screen could belong to any other site, it is wrong.**
2. **If a screen could belong to another *Foundry* site, it is also
   wrong.** This is the sharper test and the one the collection keeps
   failing — light-over-time, commission-by-letter, and the tracked label
   above every heading all passed test 1 and failed test 2 for a year
   before anyone named them. Open a sibling's screenshot beside yours and
   answer honestly.

**Small imagery must open.** If the build shows plates as thumbnails, accession
plates, or a contact sheet, wire the enlargement (commitment 10 in
`docs/foundry-series.md`) — a real link to the full image, upgraded by JS to a
native `<dialog>` carrying the piece's full record in the site's own voice, not
just a bigger picture. A thumbnail with nothing more to say than its own
enlargement is a thumbnail that should not exist.

Before calling the build done, verify the floors (they are in every taste
profile): complete page with JS off, visible focus states, body contrast,
no functional text below 11px (tracked micro-labels included), keyboard
paths, reduced-motion gets the finished static composition, images ≤500KB,
and a dedicated mobile pass — a smaller lamp, not a lesser brand. If the
site has a form, walk it in every state — rest, focus, error, submitting,
sent — and screenshot the error state; an undesigned failure path is the
one interaction that loses a commission outright.

## Phase 6 — Ship and verify

1. `npm --prefix sites/<name> run build` must pass clean.
2. Update the repo record: README site table, `docs/foundry-series.md`
   site list, the backlog (entry moves from Building to Built with the live
   URL), and a dated handoff doc `docs/<date>-<name>-handoff.md`
   (decisions, asset conventions, live URL — follow an existing handoff's
   form).
3. Commit in the house style — `Sitename: what changed` in sentence case,
   small coherent commits — and push to `origin main`.
4. Deploy CLI-manual, the established pattern (`.vercel/` stays gitignored).
   **Check the name is free first — `<name>.vercel.app` is a GLOBAL namespace,
   not yours.** A taken name leaves you with only the team-scoped URL, which is
   SSO-protected and 302s, so it can never be the live URL:
   ```
   curl -s -o /dev/null -w "%{http_code}\n" https://<name>.vercel.app  # 404 = free
   cd sites/<name> && vercel link --yes [--project <free-name>]
   vercel deploy --prod --yes
   ```
   If the clean name is taken, re-link under a free one (Traccia shipped as
   `traccia-telai`) rather than recording a protected URL.
5. Verify production: screenshot the live URL with `tools/shot-full.mjs`
   and check it actually renders (fonts, images, interaction) — a 200
   response is not verification. This is not theoretical: `traccia.vercel.app`
   returned a clean 200 for a *stranger's* app, and only the screenshot caught
   it. Confirm the page you get back is the page you built.
6. Record the live URL in the README table and handoff doc; commit and push.

**If the deploy fails** — a "genuine attempt" means: read the actual error,
fix anything on our side (build errors, missing env, wrong root directory),
and retry at least twice with backoff, since most Vercel failures are
transient. If it still fails after that, do not keep hammering it and do not
silently drop the site: the work is already committed and pushed (step 3),
so fall back to a clean localhost verification (`npm --prefix sites/<name>
run build` then screenshot `http://localhost:<port>/?nofx` with
`tools/shot-full.mjs`) and append an entry to `docs/vercel-failures.md`:

```
## <date> — <sitename>
- Commit: <sha> (pushed to origin main)
- Command: vercel deploy --prod --yes
- Error: <the actual error output, trimmed>
- Attempts: <n>
- Localhost verification: <screenshot path> — renders correctly
- Left for a human: create/redeploy the Vercel project, then record the
  live URL in README + handoff doc + backlog.
```

Register the site in README/handoff/backlog **as built with the live URL
pending** (link the log entry) rather than omitting it. Then the run is
done.

## Dry-run mode (`--dry-run`)

For testing the skill or rehearsing a concept without spending the full
budget. Everything through Phase 5 runs for real, with these substitutions:

- **No git commits, no push, no GitHub, no Vercel.** Leave the working tree
  for inspection.
- **Image budget: at most 6 generated finals.** Cover the hero, the
  signature interaction, one material close-up, and one human-presence
  shot; stand in for the rest with solid-material CSS placeholders sized
  to the intended crop (never gray boxes — use the palette so the critique
  loop still judges composition honestly).
- **Minimum two critique passes** instead of three-plus.
- Finish with a short report: subject chosen and why, the world in five
  lines, screenshots of the final passes, and what a full run would add.

## When things break

- Higgsfield MCP drops connection routinely: re-load its tools via
  ToolSearch once it reconnects, or switch that shot to gpt-image.
- `rm` is deny-listed in this repo — move files aside instead of deleting.
- If an install or build fails, read the actual error and fix it; retry
  with backoff for transient network failures. A failing build is our bug
  and never gets logged-around — fix it.
- A *deploy* (Vercel) failure is different: it may be the platform, not us.
  After a genuine attempt (Phase 6), fall back to localhost verification
  plus a `docs/vercel-failures.md` entry rather than stalling the run. This
  is the one place the live-URL bar bends — and only because the work is
  committed, pushed, and logged for a human to finish.
- If the dev server port is taken, pass another port to `astro dev` and use
  it in the shot commands.

## Done checklist

- [ ] `sites/<name>/DESIGN.md` written before the build, updated after
- [ ] Signature interaction built and critiqued first
- [ ] Opening move chosen deliberately, recorded in `DESIGN.md`, and *not*
      a tracked caps label above the heading
- [ ] ≥3 critique passes per major section, weaknesses named and fixed
- [ ] Floors verified (JS-off, contrast, 11px floor, keyboard,
      reduced-motion, ≤500KB images, mobile pass)
- [ ] If the site has a form: every state designed, error state screenshot
- [ ] Any small/thumbnail imagery opens into a record-carrying `<dialog>`
      (commitment 10), and the trigger still works with JS off
- [ ] Zero taste-profile anti-patterns on final screenshots
- [ ] Both directions of the relentless test answered — including "could
      this belong to another Foundry site?"
- [ ] README table + `foundry-series.md` + backlog + dated handoff doc
      updated
- [ ] Committed and pushed; **production URL screenshot verified** — or, if
      Vercel failed after a genuine attempt, localhost verified **and** logged
      in `docs/vercel-failures.md` (skip deploy items in dry-run)
