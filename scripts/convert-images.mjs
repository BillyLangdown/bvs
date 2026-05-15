import sharp from "sharp";
import { readdir, unlink } from "fs/promises";
import { extname, basename, join } from "path";

const PUBLIC_DIR = new URL("../public", import.meta.url).pathname;
const QUALITY = 82;

const files = await readdir(PUBLIC_DIR);

for (const file of files) {
  const ext = extname(file).toLowerCase();
  if (![".png", ".jpg", ".jpeg"].includes(ext)) continue;

  const name = basename(file, ext);
  const input = join(PUBLIC_DIR, file);
  const output = join(PUBLIC_DIR, `${name}.webp`);

  // Skip if WebP already exists
  try {
    await import("fs").then(({ promises }) => promises.access(output));
    console.log(`SKIP (exists): ${name}.webp`);
    continue;
  } catch {}

  try {
    const info = await sharp(input)
      .webp({ quality: QUALITY })
      .toFile(output);

    const { size: origSize } = await import("fs").then(({ promises }) =>
      promises.stat(input)
    );

    const saving = (((origSize - info.size) / origSize) * 100).toFixed(0);
    console.log(
      `${file.padEnd(48)} ${(origSize / 1024).toFixed(0).padStart(6)}K  →  ${name}.webp  ${(info.size / 1024).toFixed(0).padStart(5)}K  (${saving}% smaller)`
    );
  } catch (err) {
    console.error(`FAILED: ${file} — ${err.message}`);
  }
}

console.log("\nDone.");
