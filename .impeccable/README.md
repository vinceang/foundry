# Why these rules are muted

`config.json` mutes seven of impeccable's detector rules across the whole
collection. Each one fires on a Foundry register *by design* — they are not
defects we are hiding, they are the detector meeting a decision we already
made and documented.

| Rule | Why it is muted |
|---|---|
| `cream-palette` | Aubade's ground **is** warm off-white — milk glass, limewash, named materials with a hue. The profile already bans generic beige more precisely than this rule can. |
| `dark-glow`, `radial-halo`, `radial-spotlight-glow` | One warm light on a near-black void is the Nocturne and Vesper register. The glow is the lamp. |
| `italic-serif-display` | Aubade casts serif italic as the human note — captions and a host's aside. The rule self-exempts editorial register; muting saves the argument. |
| `overused-font` | Faces are cast per world in each site's `DESIGN.md`, against that world's own culture. A global "overused" list cannot see that. |
| `aphoristic-cadence` | Short, declarative, unhedged copy is doctrine in all four profiles. The rule targets manufactured contrast; ours is prescribed voice. |

## What stays on, deliberately

**`kicker-above-heading` and `hero-eyebrow-chip` stay active.** The whisper
label is still a legitimate opening move — but a site that picks it must say
so on purpose, in the file, with a waiver that names the decision:

```html
<!-- impeccable-disable kicker-above-heading -- opening move: whisper label, see DESIGN.md -->
```

That is the whole point. Muting the rule collection-wide would let the label
creep back as the automatic default; leaving it on with a per-file waiver
makes every use a conscious choice that leaves a record. If a build cannot
write the waiver honestly, it did not choose the label — it defaulted to it.

All 27 `quality` rules stay on unconditionally. Those are floors —
legibility, contrast, overflow, tap targets — and no register earns them
back.

## Precedence

**The taste profile wins every conflict.** A detector finding never
overrides a register decision. When the two disagree and the profile is
explicit, the profile is right and the finding gets a waiver, not a fix.
