// The Funniest Toaster Error Message — make.fun entry
// u-eager-stork-81-9647-the-funniest-toaster-error-436406cd
//
// A small deterministic program that composes the single error line a
// kitchen toaster shows its owner, validates it against the gate
// (1..120 characters, not only whitespace) and writes it to
// /output/entry.txt.
//
// The joke, in one deadpan voice: the toaster treats a jammed bagel as
// an incident serious enough to escalate to the authorities. No toast
// pun, no burnt-bread gag — the surprise is the escalation itself.

import { mkdirSync, writeFileSync } from "node:fs";

const MAX_CHARS = 120;

// --- The message, built from its parts so every word earns its place ---
const ERROR_CODE = "E12";
const SUBJECT = "Bagel";
const SLOT = 2;
const ESCALATION = "I have notified the authorities.";

function buildMessage(): string {
  const fault = `${SUBJECT} jammed in slot ${SLOT}.`;
  return `ERROR ${ERROR_CODE}: ${fault} ${ESCALATION}`;
}

// --- Gate: the entry must be 1..120 characters of non-whitespace text ---
function validate(text: string): void {
  if (text.trim().length === 0) {
    throw new Error("entry is empty or only whitespace");
  }
  if (text.length > MAX_CHARS) {
    throw new Error(
      `entry is ${text.length} characters, over the ${MAX_CHARS} limit`,
    );
  }
}

function main(): void {
  const message = buildMessage();
  validate(message);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", message, "utf8");
  console.log(`wrote ${message.length} chars to /output/entry.txt`);
  console.log(message);
}

main();
