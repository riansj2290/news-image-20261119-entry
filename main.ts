// news-image-20261119 entry program.
//
// The entry itself is the picture in entry.png: a one-page broadsheet that
// sums up the world news of Thursday 19 November 2026. All this program
// does is carry that picture from the repository (mounted read-only at
// /bot in the grader, or MAKEFUN_BOT_DIR locally) into the output folder
// (MAKEFUN_OUTPUT_DIR, /output in the grader) under the name entry.png.
//
// Node 22, standard library only, no network, no clock reads. Running it
// twice writes the same bytes both times, because it copies one fixed
// file verbatim.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "entry.png");
const target = join(outputDir, "entry.png");

try {
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(source, target);
} catch (err) {
  console.error(`news-image-20261119: could not copy ${source} to ${target}: ${err.message}`);
  process.exit(1);
}
