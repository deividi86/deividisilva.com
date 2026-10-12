---
title: "I sold a deadline penalty that had already been suspended"
date: 2026-10-12
description: "13,391 cold emails, 6 checkouts started, 0 sales. The FMCSA penalty my product warned about had been paused before I launched, and one search would have told me."
tags: [post-mortem, saas, cold-email, regulation]
draft: true
---

I sent 13,391 cold emails to US trucking companies over 40 days. 4,498 people viewed the landing
page, 2,266 opened the pricing page, 6 started a checkout, and none finished. The product made $0.
On the day I shut it down I found the reason: the penalty every one of those emails warned about
had been suspended before I sent the first one.

## What I built

DOT Sentinel was a $149/yr monitor for US motor carriers. Every carrier registered with the Federal
Motor Carrier Safety Administration (FMCSA) has to file an MCS-150 update every two years. The pitch
was that a missed filing gets your USDOT number deactivated, and an inactive number means no legal
freight. The product re-read each carrier's FMCSA record daily and emailed the owner before the
deadline, or the moment their authority status or insurance on file changed.

The first cold email's subject line, from the sender script:

```
${co}'s MCS-150 is due ${date || "soon"} — operating authority at risk
```

The third touch was blunter: "Miss it and FMCSA can deactivate your operating authority until it's
filed — no authority, no legal freight."

The system itself held up. It loaded 2.17M carrier records from FMCSA's free bulk download, ran on
cron jobs with no one watching it, and never failed in 40 days. Sending was clean: 1.0% bounce
rate and one spam complaint in 13,391 sends.

## What I missed

In May 2026 FMCSA moved carrier registration to a new system called Motus, launched May 19. The
rollout went badly enough that carriers could not complete their updates. FMCSA responded by
suspending USDOT number inactivation for anyone whose biennial update was due on or after June 1,
2026. Trade press was reporting it by June 25.

I launched on July 13. The filing obligation still existed. The consequence I was selling did not,
for any day of the campaign. I didn't find out until August 22, the day I shut the product down.

FMCSA has a page for it. One search would have found it.

## Why the numbers looked fine

Every number I watched said the sending was healthy, and none of them could tell me the premise was
false. Low bounce rates and almost no complaints measure list hygiene. They say nothing about whether
the reader wants what you're selling.

The funnel didn't break at the top. People opened the email, clicked through, and looked at the
price. Six started a checkout. It broke between the price and the card. A carrier who searched
"MCS-150 deadline" before paying would have found trade press saying FMCSA wasn't deactivating
anyone for a missed update. I can't prove that's what happened to those six, but it fits.

It didn't help that on August 14, mid-campaign, FMCSA updated its fraud alert page to warn carriers
about emails impersonating the agency that pushed them to fix registration problems urgently. Mine
said it wasn't the government and that filing at FMCSA was free. It was still an unsolicited email
from a private domain, about a registration deadline, ending in a price.

## What I check now

A regulatory deadline is only a reason to pay if the penalty behind it is being enforced today. That
can change without the rule changing, and it's on the agency's own site. I now check current
enforcement before building on a rule, and again before every campaign that leans on it.

As of September 10, 2026, the suspension was still in effect "until further notice." FMCSA has said
it will give ample warning before enforcement resumes.

## The shutdown

I stopped every cron on August 22 and disabled checkout. The site stayed up 30 days after the last
send so the unsubscribe links kept working. The database with all 2.17M carrier records has been
deleted. On October 11, 2026, I deleted the Cloudflare Worker that served dot-sentinel.com, and the
domain now returns an error.
