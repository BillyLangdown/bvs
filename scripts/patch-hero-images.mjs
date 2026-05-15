import { readdir, readFile, writeFile } from "fs/promises";
import { join } from "path";

const BLUR =
  'data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoIAAUABUB8JZwAA3AA/u/9mXgQAA==';

const SRC_DIR = new URL("../src", import.meta.url).pathname;

async function* walkJs(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) yield* walkJs(full);
    else if (e.name.endsWith(".js")) yield full;
  }
}

let filesChanged = 0;
let imagesPatched = 0;

for await (const file of walkJs(SRC_DIR)) {
  const original = await readFile(file, "utf8");

  // Match each <Image ...> block (handles multi-line)
  // We look for blocks that have `fill` and `priority` props (bare, no value)
  let changed = original;

  // Process Image components: capture from <Image to closing />
  changed = changed.replace(/<Image\b([\s\S]*?)\/>/g, (block) => {
    const hasFill = /^\s*fill\s*$/m.test(block);
    const hasPriority = /^\s*priority\s*$/m.test(block);
    const hasSizes = /\bsizes=/.test(block);
    const hasPlaceholder = /\bplaceholder=/.test(block);

    if (!hasFill || !hasPriority) return block; // not a hero image

    let patched = block;

    // Add sizes="100vw" right after the `fill` line
    if (!hasSizes) {
      patched = patched.replace(/^(\s*)(fill)\s*$/m, (_, indent, prop) => {
        return `${indent}${prop}\n${indent}sizes="100vw"`;
      });
      imagesPatched++;
    }

    // Add placeholder + blurDataURL right after the `priority` line
    if (!hasPlaceholder) {
      patched = patched.replace(/^(\s*)(priority)\s*$/m, (_, indent, prop) => {
        return `${indent}${prop}\n${indent}placeholder="blur"\n${indent}blurDataURL="${BLUR}"`;
      });
    }

    return patched;
  });

  if (changed !== original) {
    await writeFile(file, changed, "utf8");
    filesChanged++;
    console.log(`Patched: ${file.replace(SRC_DIR, "src")}`);
  }
}

console.log(`\nDone — ${imagesPatched} hero images updated across ${filesChanged} files.`);
