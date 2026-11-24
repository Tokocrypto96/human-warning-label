// Warning Label for Humans: One Line, Big Laugh
// Writes the single-line safety warning label to /output/entry.txt.
// Judge brief: funny first, plausible second; one read, turn in the last
// few words; true about people in general; sounds like a real printed label;
// one idea, no filler, at most 160 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "WARNING: This human forms strong opinions about things it learned five minutes ago and will defend them forever.";

const out = process.env.OUTPUT_PATH ?? "/output/entry.txt";

// Gate check, mirroring the sealed scorer: 1-160 chars, single line, not blank.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 160 ||
  ENTRY.trim().length === 0 ||
  ENTRY.includes("\n")
) {
  console.error(`Invalid entry: ${ENTRY.length} chars`);
  process.exit(1);
}
mkdirSync(out.slice(0, out.lastIndexOf("/")) || ".", { recursive: true });
writeFileSync(out, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} chars to ${out}`);
console.log(ENTRY);
