# Review — the-penalty-was-already-suspended (deividisilva.com)

Not for publishing. 704 words. Frontmatter checked against `src/content.config.ts` on `astro-blog`.

## Source
- `dot-sentinel/docs/POST-MORTEM.md:3`: live 2026-07-13 → 2026-08-22, 40 days, $0.
- `docs/POST-MORTEM.md:16-27`: 2.17M carriers, 13,391 sent, 4,498 landing views, 2,266 pricing views,
  6 checkouts, 0 subscriptions.
- `docs/POST-MORTEM.md:29-32`: 1.0% bounce, 1 complaint; "failed between the price and the card".
- `docs/POST-MORTEM.md:38-52`: suspension, Motus, found on shutdown day, "One search would have
  found it", FMCSA has a dedicated page.
- `docs/POST-MORTEM.md:68-75`: 14 August fraud-alert update, unsolicited private-domain email.
- `docs/POST-MORTEM.md:136-142`: 40 days, no failures, free tiers.
- `docs/POST-MORTEM.md:150-153`: lesson 1 ("check it before building, and again before every
  campaign").
- `docs/POST-MORTEM.md:181-196`: crons removed, checkout disabled, 30-day unsubscribe window.
- `scripts/outreach-send.ts:278`: T1 subject line (copied verbatim).
- `scripts/outreach-send.ts:241`: T3 "Miss it and FMCSA can deactivate…" (copied verbatim).
- `scripts/outreach-send.ts:180`: disclaimer "we're not the government… filing… is always free".
- This session, 2026-10-11: D1 `dot-sentinel` returns "could not be found"; Worker deleted;
  dot-sentinel.com returns 530.

## Added beyond the source
- "Trade press was reporting it by June 25": J. J. Keller, "FMCSA temporarily suspends USDOT
  Inactivation", published 2026-06-25 (fetched 2026-10-12).
- "As of September 10, 2026, the suspension was still in effect 'until further notice'… ample
  warning": Land Line and Trucksafe, both 2026-09-10.
- Motus launch on May 19, and "carriers could not complete their updates": J. J. Keller (2026-06-25)
  and Trucksafe. The post-mortem says the same thing in different words.
- The 14 August fraud-alert date and "fix registration problems urgently": FreightWaves / Trucking
  Info coverage of the update. The FMCSA page itself returned 403 to every fetch.
- The paragraph speculating that "a carrier who searched 'MCS-150 deadline'… would have found trade
  press…" is my inference, marked as unproven in the text. Cut it if you'd rather not speculate.
- One-line explanation of what MCS-150 and USDOT inactivation are, for non-trucking readers.

## Left out
- Code bugs (fabricated change log, NULL `insurance_status`, the 84% vs 75.5% reach figure). A
  separate story.
- No data moat and zero real events in four days (post-mortem items 4–5). A second post if wanted.
- Kill criterion crossed weeks before shutdown, and the Worker outliving its deletion date.
- The QCMobile key in a chat transcript (flagged unrotated), Stripe/Resend account details, the
  `uei` field reuse, and the "$200" fraud figure (not found in any live source).
- 840 unsubscribes and 7,875 distinct carriers. Accurate, but they'd add numbers without adding to
  the story.
- "Nothing is kept" (post-mortem :196). **That claim is currently false**, see below.

## Check before publishing
- **Carrier data is still on halo**, contradicting the post-mortem's no-retention statement:
  `data/outreach/cand.csv` (80,255 rows with emails), `data/outreach/verified.csv` (6,794 emails),
  `data/outreach/verdict-cache.json` (44,482 keys), `data/li-flow.db` (255 MB) and
  `~/backups/dot-sentinel/li-flow-2026-08-22-pretest.db` (254 MB). If you delete them, the ending can
  say "nothing is kept" truthfully.
- Re-check that the suspension is still in effect on the publish date (last confirmed 2026-09-10).
- Every FMCSA fact comes from secondary sources, because fmcsa.dot.gov blocks automated fetches.
  Open `fmcsa.dot.gov/registration/temporary-suspension-usdot-inactivation-motus` and
  `/registration/fraud-alerts` in a browser and confirm the wording.
- The exact date FMCSA first announced the suspension is unknown. "By June 25" is the earliest
  dated source found, so the gap before launch is at least 18 days. The post-mortem's "six weeks"
  counts from the June 1 effective date, so the post doesn't use it.

## Questions for the owner
1. Name the product? It's dead and the domain is down. The draft names it, so remove it if you'd
   rather not.
2. Should the 6-checkouts paragraph speculate about why the six didn't finish, or stop at the
   numbers?
3. Want the "no moat / zero events" story as a second post?
