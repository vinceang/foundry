#!/bin/bash
# Optimized deliverables from assets-src/. Long edge ≤1536 plus an 800px
# variant. Pastorale plates are bright and detailed, so they compress worse
# than a Nocturne's dark ground — quality steps down per file until each one
# clears the 500KB floor rather than assuming one setting fits all.
set -e
cd "$(dirname "$0")"
mkdir -p public/images
for f in assets-src/*.png; do
  n=$(basename "$f" .png)
  for w in 1536 800; do
    out="public/images/$n-$w.jpg"
    for q in 78 68 58 48; do
      sips -Z $w -s format jpeg -s formatOptions $q "$f" --out "$out" >/dev/null
      sz=$(stat -f%z "$out")
      [ "$sz" -le 500000 ] && break
    done
  done
done
echo "largest: $(ls -S public/images/*.jpg | head -1 | xargs ls -la | awk '{printf "%.0f KB", $5/1024}')"
ls public/images/*.jpg | wc -l | awk '{print $1" files"}'
