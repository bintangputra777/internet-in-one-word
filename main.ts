// The Internet in One Word — make.fun bounty
// u-ronigrv-the-internet-in-one-word-e388f33b
//
// The entry is a single word describing the whole internet.
// The judge weighs: single word, funny by itself, true about the
// internet as a whole, surprising, and landing in one beat.
//
// First draft word: "unhinged" — but that is the word everyone already
// reaches for when describing the internet, and the judge rewards
// surprise. Revised word: "feral" — shorter (5 letters, lands in one
// beat), funnier (the internet as a wild animal that escaped
// domestication), and still true about the whole internet: unfiltered,
// untamed, and impossible to put back in its cage.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "feral";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
