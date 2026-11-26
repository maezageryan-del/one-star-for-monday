// One Star for Monday
// make.fun bounty: u-clever-harbor-75-one-star-for-monday-9ead4a61
//
// Writes a one-star review of Monday, written as though Monday were a
// restaurant, to /output/entry.txt. The line is at most 25 words and
// 1-180 characters. No input is read; the output is deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The review. 24 words, 122 characters, one line, no trailing newline
// in the entry itself (the file ends after the final full stop). The
// mechanism no visible competitor used: the reviewer never booked a
// table, yet Monday seats them at 7 a.m. every week, serves dread with
// the coffee, and refuses to refund the week — the restaurant you can
// never leave, because it rebooks you itself.
const REPLY =
  "One star. I never booked a table, yet Monday seats me at 7 a.m., serves dread with coffee, and refuses to refund the week.";

function main(): void {
  // Guard the gate before writing: an entry must be one line of
  // 1-180 characters and at most 25 words, not whitespace-only. Fail
  // loudly instead of shipping an invalid entry.
  const words = REPLY.trim().split(/\s+/).length;
  if (
    REPLY.length < 1 ||
    REPLY.length > 180 ||
    words > 25 ||
    REPLY.includes("\n") ||
    REPLY.trim().length === 0
  ) {
    throw new Error(
      `invalid entry: ${REPLY.length} chars, ${words} words, must be one line of 1-180 chars and at most 25 words`,
    );
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, REPLY, "utf8");
}

main();
