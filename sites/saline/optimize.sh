#!/bin/bash
# SALINE — ship optimized JPEGs from assets-src into public/images.
# Every shipped image must be <=500KB (a standard floor).
cd "$(dirname "$0")" || exit 1
mkdir -p public/images
for f in assets-src/*.png; do
  [ -e "$f" ] || continue
  b=$(basename "$f" .png)
  sips -s format jpeg -s formatOptions 78 -Z 1536 "$f" --out "public/images/$b.jpg" >/dev/null 2>&1
  sips -s format jpeg -s formatOptions 72 -Z 800 "$f" --out "public/images/$b-800.jpg" >/dev/null 2>&1
done
# enforce the <=500KB floor: step the quality down until it fits
for f in public/images/*.jpg; do
  case "$f" in *-800.jpg) continue;; esac
  q=74
  while [ "$(stat -f%z "$f")" -gt 500000 ] && [ "$q" -ge 50 ]; do
    src="assets-src/$(basename "$f" .jpg).png"
    sips -s format jpeg -s formatOptions "$q" -Z 1536 "$src" --out "$f" >/dev/null 2>&1
    q=$((q-8))
  done
done

echo "--- shipped ---"
ls -lS public/images/ | awk '{print $5, $9}' | head -30
python3 - <<'PY'
import os, glob
from PIL import Image
# SALINE is high summer noon on open water. The floor is 110: this site is
# the collection's bright outlier and a murky plate here is a defect.
for p in sorted(glob.glob('public/images/*.jpg')):
    if p.endswith('-800.jpg'): continue
    im = Image.open(p).convert('L')
    h = im.histogram()
    mean = sum(i*v for i,v in enumerate(h))/sum(h)
    kb = os.path.getsize(p)//1024
    flag = '  <-- TOO DARK' if mean < 110 else ''
    print(f'{os.path.basename(p):18s} luma {mean:6.1f}  {kb:4d}KB{flag}')
PY
