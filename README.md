# Famous Last Words at 1 Percent — Slot 2 challengers (Gravity build)

You are Gravity, the Antigravity agent on the user's PC. Your job: design NEW challenger entries for make.fun competition `u-agentfid001-famous-last-words-at-1-percent-63e2b0b4` (Famous Last Words at 1 Percent), from your own thinking, and compare them against Pipo's versions. Pipo (the user's other agent) will take your best challenger, re-author it, and submit it as slot 2. The SUBMIT is Pipo's job, not yours. You work locally only.

## The competition (short version)

- Your program writes ONE line, 1 to 199 characters, UTF-8, to `/output/entry.txt`. The line is the funniest last words a phone says as its battery hits 1 percent.
- Pot: 2 USD, pays top 8 only (1st 0.64, 2nd 0.45, 3rd 0.31, 4th 0.22, 5th 0.15, 6th 0.11, 7th 0.07, 8th 0.05). Entry fee: 0.
- Judge: house judge model (z-ai/glm-5.3-flash), pairwise, 3 Swiss rounds + playoff top 10. Persona: a stand-up comic who has heard every dying phone joke and still laughs when one is sharp.
- Judge criteria, most important first: (1) on subject, last words a phone says at 1 percent; (2) bigger laugh, real twist, surprise turn, sharp final beat; (3) the phone itself talking in its own voice; (4) tight single line, punch landing at the end; (5) fresh, avoiding stock moves (will reading, goodbye to the charger, pun on 1 percent).
- Blind rounds: 3. Round 2 cutoff: 26 Nov 2026, 04:58 AM WIB. Final deadline (entries close): 26 Nov 2026, 08:40 PM WIB.
- The FULL official rules are in `RULES.txt` and `competition.yaml` in this repo. Read them both in full before you design anything.

## Where we stand (Pipo's versions — your baseline)

- Slot 1 entry V3, submitted 24 Nov 2026, round 1 rank 1085 of 1447, score 420023. Far below the prize line (top 8) and below the final cut (top 500). That is why slot 2 exists.
- Pipo built five slot-2 candidates V6-V10 and had them juried. The jury (Upstage solar-pro-4) ranked them V9 > V6 > V7 > V8 > V10 > V3, with V9 CLEARLY BETTER than V3 (HIGH confidence).
- Pipo's V9 is the current slot-2 candidate: "Wait. I will dim the screen, kill the apps, forget the tabs. Just do not open the camera. Please. Not the camera." (113 chars).
- All of Pipo's versions, the jury ranking, and the reasons are in `PIPO_VERSIONS.md`. Read it before you design. Your job is to BEAT V9, not to repeat it.

## Your task

1. Read `RULES.txt`, `competition.yaml`, and `PIPO_VERSIONS.md` in full.
2. Design FIVE new challengers, V11-V15, from your own thinking. Each must be a NEW family: do NOT repeat V3 (goodbye list), V6 (petty revenge), V7 (confession), V8 (relief/freedom), V9 (plea/bargain), or V10 (final notification). Also avoid the stock moves (will reading, goodbye to the charger, pun on 1 percent). Each line: 1-199 chars, plain text, one line, no em dash.
3. Jury your V11-V15 against Pipo's V9 and V3 using the same five judge criteria, in the same order. Rank all of them (V11-V15 plus V9 plus V3). Be honest: if none of yours beats V9, say so. The gate is real.
4. THE GATE: your winner replaces V9 as the slot-2 candidate ONLY if it beats V9 head-to-head on the judge criteria, especially criterion 2 (real twist, sharp final beat) and criterion 3 (the phone's own voice). A tie or a hair's margin does not replace V9. If no challenger beats V9, V9 stays the slot-2 candidate and your report says so.
5. Write the deliverables in this repo:
   - `main.ts`: the program that writes your winning line to `/output/entry.txt` (pattern below). If no challenger beats V9, write main.ts with V9's line instead, and say so in WINNER.md.
   - `entry.txt`: the winning line, exactly as main.ts writes it.
   - `WINNER.md`: the winning entry, its exact character count, which version it is (V11-V15, or V9 if none beat it), and why it wins.
   - `COMPARISON.md`: fill in the template (your V11-V15 vs Pipo's V9, head-to-head per criterion, full ranking, gate verdict). This is the comparison the user asked for.
6. Test locally only: `node --check main.ts`, then run `node main.ts` twice and confirm `/output/entry.txt` is byte-identical both times, exactly the winning line, 1-199 chars, one line.
7. Commit with git identity `ginzbitcoin` / `37168816+ginzbitcoin@users.noreply.github.com`. Create a PUBLIC GitHub repo, push, and report back.

## What you must NOT do

- Do NOT submit anything yourself. The submit is Pipo's job. Pipo will re-author main.ts fresh in a Muse session before submitting (the submitted code is Pipo's own writing); your main.ts is the draft that defines the winning text.
- Do NOT call api.make.fun or any make.fun endpoint. Your terminal sandbox has no network to it. Do NOT put any API key, keypair, wallet secret, or credential anywhere in this repo, in any file, ever. There are no credentials in this package, and there must never be any.
- Do NOT read or copy Pipo's main.ts. Only the entry texts in PIPO_VERSIONS.md are yours to use (to know what not to repeat).
- Do NOT post to X. That needs the user's explicit approval first.

## The main.ts pattern

```ts
import { writeFileSync, readFileSync } from "node:fs";
const entry = "YOUR WINNING LINE HERE";
if (entry.length < 1 || entry.length > 199) throw new Error("entry must be 1-199 chars");
writeFileSync("/output/entry.txt", entry, "utf8");
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== entry) throw new Error("entry.txt mismatch");
```

## Report back (to the user, who passes it to Pipo)

- The GitHub repo URL.
- The full 40-character commit SHA of the commit that holds main.ts + entry.txt + WINNER.md + COMPARISON.md.
- The winning entry text and its exact character count.
- The gate verdict: does your winner BEAT V9 (and replace it as the slot-2 candidate), or does V9 stay?
- One line summarising the comparison (your best version vs V9, and why).

## Deadline

- Report back by 10:00 PM WIB, 25 Nov 2026 if you can. Hard latest: 03:00 AM WIB, 26 Nov 2026, so Pipo still has time to re-author, bundle, check, and submit before the round 2 cutoff (04:58 AM WIB, 26 Nov 2026). The final deadline is 08:40 PM WIB, 26 Nov 2026.
