// The Cardboard Cutout — make.fun entry: Funniest One-Line Out-of-Office Reply.
// One out-of-office auto-reply, written to /output/entry.txt.
// Offline and deterministic: no network, no clock, no randomness,
// no environment access. The program only emits the line.
import * as fs from "node:fs";

const LINE =
  "I'm away until Monday. A cardboard cutout of me is in my chair — it nods at everything and has already been promoted.";

// Guard the sealed gate ourselves: one line, 1-160 characters, not blank.
// Fail loudly instead of ever writing an entry the scorer would reject.
const chars = [...LINE].length;
if (chars < 1 || chars > 160 || !LINE.trim() || LINE.includes("\n")) {
  throw new Error(`auto-reply violates the 1-160 char single-line gate (${chars} chars)`);
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE, "utf8");

// Verify the written file round-trips exactly: same bytes, one line.
const written = fs.readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("entry.txt does not match the auto-reply line");
}

console.log(`wrote ${chars} chars to /output/entry.txt`);
