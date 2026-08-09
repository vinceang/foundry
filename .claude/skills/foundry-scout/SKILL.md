---
name: foundry-scout
description: >-
  Choose the next subject for the Foundry collection and write it into the
  approved build queue in docs/foundry-backlog.md — a place somewhere in the
  world, a niche craft native to it that photographs richly, and one nameable
  signature interaction. Use it when the user asks to pick, propose, scout or
  choose the next site/subject, to "find something to build", to "top up the
  queue", to add entries to the backlog, or invokes /foundry-scout [hint]
  [--count N] [--propose-only]. It is the step that runs before foundry-site
  on an unattended nightly build, so it must be safe to run with nobody
  watching. Do NOT use it to build a site — that is foundry-site — and do not
  use it for editing an existing backlog entry by hand.
---

# Foundry scout

You are choosing what the collection makes next. The collection sells taste,
so this is the highest-leverage step in the whole pipeline: a mediocre subject
cannot be rescued by a good build, and a great subject half-carries itself.

Output is one or more entries in the **Approved — build queue** section of
`docs/foundry-backlog.md`, ready for `foundry-site` to pick up.

## 1. Survey what already exists — never skip this

You are choosing *against* a body of work. Read it first:

```bash
node -e "
const r=require('./foundry.json');
const by=(f)=>r.sites.reduce((a,s)=>((a[f(s)]=(a[f(s)]||0)+1),a),{});
console.log('registers:', by(s=>s.series));
console.log('countries:', by(s=>s.place.country));
console.log('subjects:'); r.sites.forEach(s=>console.log('  ', s.place.country.padEnd(16), s.what));
"
```

Also read `docs/foundry-backlog.md` in full — everything under **Proposed**,
**Building** and **Built**. Proposing something already sitting in the queue,
or already built, is the most common way this step fails.

## 2. The distance rules

A collection is defined by its range. Enforce all four:

- **No repeated craft family.** Not a second knife smith, a second luthier, a
  second log-house yard, a second private-jet operator. Adjacent is fine —
  Suntoku forges kitchen knives, Shokunin makes swords — but the *page* has to
  be about something else.
- **No country above four sites**, and never two consecutive builds in the
  same country. Italy and Japan are the crowded ones; check before choosing.
- **Balance the registers.** Vigil has one site, Vesper and Pastorale two
  each, Nocturne nine. Prefer the thin ones unless the subject genuinely
  demands otherwise — the register is chosen from the subject, never imposed
  on it.
- **Move geographically.** The collection is heavy in Europe and Japan. South
  America, Africa, South and Southeast Asia, the Pacific, the Middle East and
  North America are thin. Prefer a continent the map is quiet in.

## 3. The four tests

An entry must pass all four, and you must be able to say *why* in one line:

1. **Imagery potential.** Does the craft yield photographs that are visually
   rich — material, texture, hands, fire, cloth, grain, weather? If you cannot
   picture three arresting frames, reject it.
2. **A discriminating audience.** Someone must plausibly pay real money and
   care about the difference. Craft with no buyer is a museum, not a site.
3. **Distance from existing sites.** See above.
4. **One nameable signature interaction.** Not "a gallery" or "a parallax" —
   an interaction that could belong to nothing else this subject sells. If you
   cannot name it in a phrase, the subject is not ready.

Good shapes to look for: a trade tied to one specific place; a material that
behaves visibly (glass, steel, cloth, wood, smoke, lacquer); a process with
stages; a thing made to measure for one person; a craft whose product is
photographed badly by everyone else in the field.

## 4. Write the entry

Append under **Approved — build queue** in `docs/foundry-backlog.md`, using
exactly the existing format:

```markdown
### <Subject name>
- **Series:** <register, or "decided at build time" with the argument>
- **Place idea:** <city/region, country — the specific thing made there>
- **Why it earns a place:** <imagery + audience, one sentence>
- **Signature interaction:** <the nameable move>
- **Notes:** <order model, register argument, what it must NOT resemble>
```

The entry is a **seed, not a brief**. The build session invents the name,
palette, vocabulary and world. Do not pre-empt it — leave room.

`--propose-only` writes under **Proposed — awaiting approval** instead, which
is the right choice when a human will review before anything is built.

## 5. Report

State plainly: the subject, the place, the register, why it clears each of the
four tests, and what it is deliberately *not* near in the existing collection.
If you rejected candidates on the way, say which and why — that reasoning is
worth more than the entry itself when the next run reads this back.

## Running unattended

When invoked with nobody watching:

- Choose exactly one subject unless `--count` says otherwise.
- Never modify entries under **Building** or **Built**.
- If every strong candidate collides with the distance rules, say so and write
  nothing rather than lowering the bar. An empty queue is recoverable; a
  mediocre site in the collection is not.
