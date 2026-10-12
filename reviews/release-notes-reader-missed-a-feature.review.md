# Review — release-notes-reader-missed-a-feature (deividisilva.com, not published)

## Source
- `claude-ops/knowledge/log.md:790-791` — the 2026-10-08 entry: the three causes, 1,500 vs 7k–28k, 18 of 28, v2.1.232–v2.1.290, the fix, 16,000 cap, 14.5k largest set, llms.txt diff, batches of 60, backfill 221 pages / $1.62 / 10.5 min / 1 high / 15 medium / 213 low.
- `claude-ops/docs/superpowers/specs/2026-09-11-reading-intake-design.md:17` — 06:45 timer, one headless Sonnet run.
- `claude-ops/docs/superpowers/specs/2026-09-11-reading-intake-design.md:23` — the "already installed" rule was added after the first run rated five installed releases high.
- `claude-ops/bin/claude-ops-intake:27,43-46` — model, caps, docs index URL, batch size.
- This session (2026-10-08): the owner found the advisor page; PR deividi86/claude-ops#13 merged as `a86761b`.

## Added beyond the source
- "Nothing is applied automatically. The point was that I would stop missing things." — the first sentence is in the spec ("Nothing from it is ever applied by a machine"); the second is my framing of the job's purpose. Cut it if it isn't how you'd put it.
- "Any one of these would have been enough to hide it." — inference, not measured per release. True for the truncation and installed rules taken one at a time only if every advisor bullet sat past 1,500 characters or in a dismissed release; I did not check each of the ten releases. Soften or cut.

## Left out
- The X accounts by name (team members' handles) and the X API cost — not needed, and names people.
- Codex, superpowers and the plugin-marketplace feeds — detail.
- The per-project advisor setup and the API-credits discovery — separate stories.
- That the owner's own complaint triggered the investigation — kept as "I found the feature by reading the docs myself".

## Check before publishing
- "the first scheduled run to use it is 06:45 on 9 October" — check the 2026-10-09 intake page exists and lists docs items before publishing; if it ran, change to past tense.
- "a weekly What's new page" — live on code.claude.com as of 2026-10-08 (`/docs/en/whats-new/2026-wNN`).
- Version numbers (v2.1.232–v2.1.290) are as of 2026-10-08.

## Questions for the owner
- Do you want halo named, or just "a server at home"?
- Is mentioning the cost ($1.62) fine, or does it read as trivia?
- Want a short code excerpt (the bullet parser, `bin/claude-ops-intake` `release_text`)? I'd copy it verbatim.
