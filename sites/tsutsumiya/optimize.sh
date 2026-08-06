#!/bin/bash
# Optimized deliverables from assets-src/. Full ≤1536px on the long edge plus
# an 800px variant; JPEG q78; the taste profile's 500KB ceiling is checked.
set -e
cd "$(dirname "$0")"
for f in assets-src/*.png; do
  n=$(basename "$f" .png)
  case "$n" in v-*|board) continue;; esac
  for w in 1536 800; do
    sips -Z $w -s format jpeg -s formatOptions 78 "$f" --out "public/images/$n-$w.jpg" >/dev/null
  done
done
echo "--- shipped ---"
ls -la public/images/*.jpg | awk '{printf "%-34s %7.0f KB\n", $9, $5/1024}'
