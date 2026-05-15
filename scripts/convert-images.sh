#!/bin/bash
# Converts all PNGs and JPGs in /public to WebP using macOS sips.
# Run from the project root: bash scripts/convert-images.sh
# After running, update any image src references in your code (e.g. hero.png → hero.webp).

PUBLIC_DIR="$(dirname "$0")/../public"
QUALITY=82

echo "Converting images in $PUBLIC_DIR..."

for f in "$PUBLIC_DIR"/*.png "$PUBLIC_DIR"/*.jpg "$PUBLIC_DIR"/*.jpeg; do
  [ -f "$f" ] || continue
  base="${f%.*}"
  out="${base}.webp"

  if [ -f "$out" ]; then
    echo "  SKIP (already exists): $(basename "$out")"
    continue
  fi

  sips -s format webp -s formatOptions "$QUALITY" "$f" --out "$out" > /dev/null 2>&1

  orig=$(du -sh "$f" | cut -f1)
  new=$(du -sh "$out" | cut -f1)
  echo "  $(basename "$f") $orig  →  $(basename "$out") $new"
done

echo ""
echo "Done. Update your image src paths from .png/.jpg to .webp in your components."
echo "You can delete the original PNGs once you've verified everything looks correct."
