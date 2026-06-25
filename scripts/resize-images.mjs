/**
 * Resize oversized source images in /public.
 * Hero WebP images cap at 1920px wide.
 * Case study JPEG images cap at 1400px wide.
 * Images already at or below the target width are left untouched.
 * Run once: node scripts/resize-images.mjs
 */

import sharp from "sharp";
import { readdir } from "fs/promises";
import { join, extname } from "path";

const PUBLIC = new URL("../public", import.meta.url).pathname;

const HERO_WEBPS = [
  "london-hero.webp",
  "london-aerial.webp",
  "ventilation-survey-hero.webp",
  "aerial-buildings.webp",
  "two-workers.webp",
  "defence.webp",
  "ahu-refurbishment-worker.webp",
  "bvs-brochure.webp",
  "hospital.webp",
  "mall.webp",
  "ahu-manufacturing2.webp",
  "coil-replacement.webp",
  "swimming-pool.webp",
  "ringwood-leisure-center-case-study.webp",
  "ahu-installation.webp",
  "hotel.webp",
  "hero.webp",
  "ahu-refurbishment-hero2.webp",
  "school.webp",
  "dorset-leisure-centre-case-study.webp",
  "ahu-coil-replacement.webp",
  "ahu-duct-installation.webp",
  "ventilation-troubleshooting-hero.webp",
  "procook-westfield-case-study.webp",
  "industrial-pipework-hero.webp",
  "ahu-hero-temp.webp",
];

const HERO_MAX_WIDTH = 1920;
const JPEG_MAX_WIDTH = 1400;

async function resizeWebp(filename, maxWidth) {
  const filepath = join(PUBLIC, filename);
  const meta = await sharp(filepath).metadata();
  if (meta.width <= maxWidth) {
    console.log(`  skip  ${filename} (${meta.width}px — already within limit)`);
    return;
  }
  const before = (await import("fs")).statSync(filepath).size;
  await sharp(filepath)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toFile(filepath + ".tmp");
  (await import("fs")).renameSync(filepath + ".tmp", filepath);
  const after = (await import("fs")).statSync(filepath).size;
  const saved = Math.round((1 - after / before) * 100);
  console.log(`  resize ${filename} ${meta.width}px → ${maxWidth}px  (${Math.round(before/1024)}KB → ${Math.round(after/1024)}KB, -${saved}%)`);
}

async function resizeJpeg(filepath, maxWidth) {
  const filename = filepath.split("/").pop();
  const meta = await sharp(filepath).metadata();
  if (meta.width <= maxWidth) {
    console.log(`  skip  ${filename} (${meta.width}px — already within limit)`);
    return;
  }
  const before = (await import("fs")).statSync(filepath).size;
  await sharp(filepath)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(filepath + ".tmp");
  (await import("fs")).renameSync(filepath + ".tmp", filepath);
  const after = (await import("fs")).statSync(filepath).size;
  const saved = Math.round((1 - after / before) * 100);
  console.log(`  resize ${filename} ${meta.width}px → ≤${maxWidth}px  (${Math.round(before/1024)}KB → ${Math.round(after/1024)}KB, -${saved}%)`);
}

async function findJpegs(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const results = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...await findJpegs(full));
    } else if ([".jpg", ".jpeg"].includes(extname(entry.name).toLowerCase())) {
      results.push(full);
    }
  }
  return results;
}

console.log("\n── Hero WebP images (max 1920px) ──────────────────────────");
for (const f of HERO_WEBPS) {
  try { await resizeWebp(f, HERO_MAX_WIDTH); } catch (e) { console.log(`  ERROR ${f}: ${e.message}`); }
}

console.log("\n── Case study JPEG images (max 1400px) ────────────────────");
const jpegs = await findJpegs(join(PUBLIC, "case-studies"));
for (const f of jpegs) {
  try { await resizeJpeg(f, JPEG_MAX_WIDTH); } catch (e) { console.log(`  ERROR ${f}: ${e.message}`); }
}

console.log("\n── Done ───────────────────────────────────────────────────\n");
