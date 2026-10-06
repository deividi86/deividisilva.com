# Review: halo-ipv6-half-dead

Not for publication. This repository is public, so this file names the kinds of detail that were left out but not their values. The unredacted review is at `~/.claude/projects/-home-deividi-Workspace-personal-deividisilva-com/reviews/halo-ipv6-half-dead.review.full.md` on halo.

## Source

- `~/Workspace/claude-ops/knowledge/log.md:42-61`: the 2026-09-23 entry, "halo's IPv6 was half-dead for 28 hours".
- `~/Workspace/claude-ops/knowledge/machines/halo-network.md:13-79`: the concept file that entry links to. Source of the measurement block, the `mtr -6` rate-limit point, clearing the router (`fe80::1`), "at least 28 hours", the time the fault cleared, and the re-check commands.
- The affected product's own knowledge-base entry for 2026-09-22 (path in the full review). Source of the 09:05-10:05 UTC window, HTTP `000` after about 300 s, the small-request job that kept committing, the wrong first diagnosis, the two further failures, the 8.3 s re-run, the 120 s / 15 s timeouts and the diagnostic fix.
- Re-checked against both files on 2026-10-05 while preparing this branch: every figure in the post matches them.

## Added beyond the source

- "Happy Eyeballs, the mechanism that falls back from IPv6 to IPv4": general background (RFC 8305).
- "routers rate-limiting the ICMP replies": plain-English wording of the source's "ICMP-rate-limit artifact".
- Closing sentence: rests on a live check from halo on 2026-10-05. `/etc/gai.conf` still has its single active line and the backup exists. `ping6` and `ping` were both 20/20 with 0% loss. A 5 MB `curl -6` from speed.cloudflare.com took 0.184 s, and a default `curl` resolved to IPv4.
- The description of halo ("runs databases, a few web apps and a set of scheduled jobs for my own SaaS products") paraphrases the owner's machine notes, not the entry.
- Title: "at least" added, because the sources only say "at least 28 hours" and the start time was never recorded.

## Left out

- The product's name and the API host it fetches from: the skill clears only CheckPJ and PGR Psicossocial by name.
- The ISP's name and IPv6 prefix, and IP addresses: the skill excludes ISP details and IPs.
- An unrelated security item in the source that is not confirmed resolved. Dropped entirely, including its remediation.
- A second job's SSH timeout: it ran over IPv4 only, and the source says the IPv6 fault does not explain it.
- Remediations unrelated to the network (retry loop, alert silencing, zero-change tolerance): a separate story.
- The rejected MTU clamp (loss already present at 56-byte packets): cut for length; one sentence could go back under "What I measured".
- The per-project `.curlrc --ipv4` stopgap: cut for length.

## Check before publishing

- `date` is 2026-10-05, the drafting date. Change it to the publish date.
- The sources differ on one download: the concept file says connections were established and then died mid-body, while the product log says one download hit `000` after about 300 s, curl's default connect timeout, so that connect never completed. The post states both without reconciling them.
- "a day of a data sweep that only accumulates forward, so that day cannot be recovered" comes from the concept file. The product log says the sweep was later re-run and picked up two days. Confirm which is right.
- The live figures in the last paragraph are as of 5 October 2026. Re-run the two commands in `halo-network.md` if this is published much later.

## Questions for the owner

1. Name the product? The post says "my own SaaS products" and "that project".
2. The debugging was done in a Claude Code session and the post says "I". Fine, or add a line saying it was agent-assisted?
3. Name the ISP? Readers on the same network might find the post useful.
4. Keep the "My first read was a transient blip" paragraph? It is accurate, but it admits a wrong call in public.
5. Link the blog from the home page? `public/index.html` is unchanged and has no link to `/blog/` yet.
