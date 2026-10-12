# Review: zero-installs-from-a-marketplace-census

## Source

- `approve-and-lock/RETROSPECTIVE.md:3-19` (outcome, timeline table), `:21-52` (lessons 1-9)
- `smithers-research/knowledge/log.md:1689-1715` (2026-10-09 re-list: 609 new apps, 233/312/50, 19 of 27, 21 approval entrants, 10-28 per niche, incumbent 1,717 → 1,643, baseline −5.2% / 6% grew)
- `smithers-research/knowledge/log.md:1717-1743` (2026-10-10: free-tier test 4% vs 5%, median 1; WikiFix launch facts)
- `smithers-research/knowledge/log.md:1745-1749` (2026-10-11 closure)
- `smithers-research/marketplace-mining-discovery/RESEARCH_REPORT.md:77` (rank 12 row), `:67` (rank 2's native-competitor kill risk), corpus table (4,099 apps, 38,764 reviews)
- `smithers-research/marketplace-mining-discovery/TARGET_LIST.md` (15.2-year listing age; the "block rights to update a approved page" 1★ quote, dated 2024-10-11)
- Auto-memory `marketplace-listing-data-gate.md` (search ranks 7th → 13th, 22nd, outside top 50, measured 2026-09-01 and 2026-09-22) and `confluence-native-approvals.md` (beta 2026-07-10, found 2026-09-03)
- `approve-and-lock` git history: build commits all dated 2026-07-29; `4143e41` (App Central request drafted, not sent); `site/articles/` (three articles, 2026-09-01)

## Added beyond the source

- "Marketplace ranking weighs installs, ratings and reviews": from the memory note citing Atlassian's documented ranking, not re-checked today.
- "probably the vendor's own test site": my inference from the 36% vs 47% zero-install split. Not measured. Cut it if you want only measured claims.
- "WikiFix's vendor already had one other app with 59 installs": Marketplace API, 2026-10-10 live check.

## Left out

- **AppX / Sprint Super Manager (79 installs).** Both of its apps' recent 5★ reviews came from one reviewer three minutes apart, so the installs look seeded. Left out because it reads as an accusation against a named third party and the post doesn't need it.
- The reporting-API traps (V2 disabled, the undocumented `developerId` UUID): a separate story, maybe a separate post.
- Pricing ($8.35 flat / $0.76 per user), the Estonian entity, vendor ids, the developerId UUID, partner-console URLs.
- The `asked-and-answered` name. The post says "a Q&A tool for Confluence ranked second".

## Check before publishing

- Every install count is dated 9 October 2026 (WikiFix's 32 rose to 33 by 10 October). If you publish much later, either re-run `scripts/relist.py` or keep the dates as they are.
- "built in a day on 29 July": every build commit is dated 07-29, but the original build session ran from the smithers-research directory. Confirm no work happened before that day.
- WikiFix Product Hunt figures (#10, 94 upvotes, about 3 October) come from the Product Hunt page fetched 2026-10-10. ChatGate quoted 86 votes, so the count moved.
- The listing is described as "still public". Update that if you archive it before publishing.

## Questions for the owner

1. May WikiFix be named? Everything said about it is public and favourable, but it is another vendor's product.
2. Should the post name the incumbent, Page Approval for Confluence (Appfire)? The draft names the app but not Appfire.
3. Keep or cut the "What I do now" rule ("name the channel that brings the first 30 installs")? It is in the spirit of the retrospective, but the 30 is my wording, not a figure from the source.
