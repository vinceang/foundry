#!/bin/bash
# Square specimen plates for the register's accession rows. Sources are the
# centre-cropped c-w-*.png, because the generator frames these loosely and a
# 112px plate needs the ware to fill it.
set -e
cd "$(dirname "$0")"
for f in assets-src/c-w-*.png; do
  n=$(basename "$f" .png); n=${n#c-}
  for w in 1200 480 240; do
    sips -Z $w -s format jpeg -s formatOptions 72 "$f" --out "public/images/$n-$w.jpg" >/dev/null
  done
done
echo "specimens: $(ls public/images/w-*.jpg | wc -l | tr -d ' ') files, largest $(ls -S public/images/w-*.jpg | head -1 | xargs ls -la | awk '{printf "%.0f KB", $5/1024}')"
