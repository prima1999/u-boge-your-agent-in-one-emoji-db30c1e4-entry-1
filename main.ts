// One emoji for 0xbase.ai: the ant, a small worker carrying many times
// its own weight, day and night, without being asked twice.
// Entry for make.fun "Your Agent in One Emoji": the glyph alone.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const GLYPH: string = "🐜";
const ENTRY_FILE = "entry.txt";
const outDir: string = process.env.OUTPUT_DIR ?? "/output";

// The directory is created, never removed; the entry is the glyph alone.
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, ENTRY_FILE), GLYPH, { encoding: "utf8" });
