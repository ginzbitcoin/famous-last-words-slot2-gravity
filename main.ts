import { mkdirSync, writeFileSync, readFileSync } from "node:fs";

// Winning Slot-2 Challenger (V14, 112 chars): Reserve-power hypocrisy / dead-battery icon
const entry = "At 1 percent I have no power to stay on, just enough to flash my dead-battery icon whenever you press my button.";

if (entry.length < 1 || entry.length > 199 || entry.trim().length === 0) {
  throw new Error("entry must be 1-199 chars");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== entry) throw new Error("entry.txt mismatch");

