---
name: glasshouse-register
description: >-
  Register a freshly built Foundry site into The Glass House — derive its entry
  from the site's own DESIGN.md and assets, append it to the foundry.json
  registry through the validating writer, then rebuild and redeploy wgw so the
  site appears on the light map, the collection carousel and its own case
  study. Use it after foundry-site ships a site, or when the user asks to add a
  site to the Glass House / the map / the registry / the showcase, to "register
  it", "put it on the map", "add it to the collection", or invokes
  /glasshouse-register <slug>. Also use it to repair a site that was built but
  never registered. Do NOT use it to build a site — that is foundry-site — and
  not for editing the showcase's own design.
---

# Glass House register

A site that has shipped but is not in the registry does not exist as far as
the collection is concerned: the map has no node for it, the carousel has no
card, and there is no case study. This is the step that closes that gap.

`foundry.json` at the repo root is the content store for everything. One entry
here feeds the map, the arc, the case study, the OG image and the JSON API.

## 1. Gather the entry from the site itself

Everything comes from the built site — do not invent any of it.

```bash
SLUG=<slug>
sed -n '1,80p' sites/$SLUG/DESIGN.md          # name, place, register, one-line brief
grep -oE "#[0-9a-fA-F]{6}" sites/$SLUG/DESIGN.md | sort -u | head -20
ls sites/$SLUG/public sites/$SLUG/public/images sites/$SLUG/public/plates 2>/dev/null
grep -iE "signature (interaction|move)" -A3 sites/$SLUG/DESIGN.md | head
vercel project ls 2>/dev/null | grep $SLUG      # the real production URL
```

| Field | Where it comes from |
|---|---|
| `slug` | the folder under `sites/` |
| `name`, `nativeName` | the identity section of DESIGN.md |
| `series` | the register the build argued for |
| `what` | the one-line description used in the README table |
| `tagline` | the one-line brief, verbatim where possible |
| `place.label`, `place.country` | the invented address within the real place |
| `place.lat`, `place.lon` | **real coordinates of the real place** |
| `url` | the production URL from `vercel project ls`, not a preview alias |
| `hero` | path *inside* `sites/<slug>/public/` to the strongest single image |
| `video` | optional loop, same rule |
| `palette` | ground / light / accent, taken from DESIGN.md |
| `signature` | the named signature interaction |
| `shipped` | today, `YYYY-MM-DD` |

**Coordinates carry the map, so get them right.** Look up the real place. Do
not approximate to a country centroid, and never leave a zero — the writer
rejects 0,0, but a plausible-looking wrong number will pass and quietly put an
Osaka workshop in the Sea of Japan. If a subject spans several towns, put the
primary one in `place` and the rest in `satellites`.

## 2. Write it through the validating writer

Never hand-edit `foundry.json`. Write the entry to a temp file and use:

```bash
node tools/registry-add.mjs /tmp/entry.json --dry-run   # check first
node tools/registry-add.mjs /tmp/entry.json
```

It refuses on a duplicate slug, an unknown register, a bad hex, a missing hero
file, a non-https URL, coordinates at 0,0 or coordinates identical to an
existing site. Nothing is written unless every check passes, and the previous
registry is saved to `foundry.json.bak`.

If it refuses, fix the entry — do not work around it.

## 3. Rebuild and deploy the showcase

```bash
cd wgw
npm run build      # regenerates registers, syncs the registry, projects the map
vercel deploy --prebuilt --prod
```

`npm run build` derives the site's card imagery, re-measures every register
palette against WCAG AA, and re-projects the world. A build failure here is
the schema or the contrast gate doing its job — read the named field it
reports rather than retrying.

Deploy with `--prebuilt`: the build reads `../sites/**`, which is not present
in a CLI upload of `wgw` alone.

## 4. Verify it is actually live

Do not report success without checking:

```bash
curl -s -o /dev/null -w "%{http_code}\n" -L https://wintergardenweb.com/work/<slug>
curl -s https://wintergardenweb.com/api/collection.json | node -e "
const d=JSON.parse(require('fs').readFileSync(0,'utf8'));
const s=d.sites.find(x=>x.slug===process.argv[1]);
console.log(s ? 'in the catalog: '+s.name+' — '+s.place.label : 'MISSING from the catalog');
console.log('total sites:', d.count);
" <slug>
curl -s -o /dev/null -w "live site: %{http_code}\n" -L "<the site's own url>"
```

Both the case study and the site's own URL must return 200, and the slug must
appear in the catalog.

## 5. Update the repo record

`foundry-site` already moves the backlog entry to **Built** and updates the
README table. Confirm both happened; if the build was interrupted before that,
finish it here so the README, the backlog and the registry agree.

## Reporting

Give the live case-study URL, the site's own URL, the new site count, and the
register/country distribution after the addition. If anything failed
validation, say exactly which field and what you changed — that is the part
worth reading back on the next run.
