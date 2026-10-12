---
title: "I picked an Atlassian app from a census of 4,099 apps. It got zero installs"
date: 2026-10-12
description: "Approve & Lock went public on the Atlassian Marketplace on 1 September 2026 and closed on 11 October with no installs, no trials and no search appearances. The research behind it measured where buyers were unhappy. What decided the outcome was how a new app gets found."
tags: [atlassian, forge, marketplace, product, retrospective]
draft: true
---

Approve & Lock for Confluence was public on the Atlassian Marketplace for five weeks. In that time it
had 0 installs, 0 trials, 0 search appearances and 0 feedback. I closed it on 11 October 2026.

The interesting part is not that one app failed. It is that the research I chose it from was careful,
measured and mostly correct, and still pointed at the wrong question.

## How I picked it

In July I pulled every paid Cloud app on the Atlassian Marketplace: 4,099 apps, their pricing, and
38,764 reviews. The idea was to find large install bases sitting on top of written, unanswered
complaints, and enter as the better newcomer.

The research ranked fifteen targets. Number 12 was Page Approval for Confluence: 1,717 installs, rated
3.39 stars, fifteen years old. One 1-star review read: *"you should block rights to update a approved
page!"* That became the product thesis. An approval that can be silently edited afterwards is not an
approval.

So I built Approve & Lock. It binds each approval to a specific page version, can lock editing, and
flips the page to Stale the moment it changes. It is a Forge app, built in a day on 29 July. The
listing, legal documents, security questionnaire and Marketplace review took until 1 September.

## What I measured after launch

Atlassian's reporting API (V3) gives search appearances, licenses and feedback per app. Because the
app was paid from the first user, every install, trial included, would have shown up as a license. A
weekly job read all three every Monday. Every reading was zero, and so was a manual one on 8 October.

Marketplace search told the same story from the other side. On day one the app ranked 7th for its
own name. Three weeks later it was 13th for its own name, 22nd for "approval", and outside the top 50
for "page approval". Marketplace ranking weighs installs, ratings and reviews, and mine were all zero.

## The zero was the median

On 9 October I listed every paid Cloud app again (4,650 of them) and compared it with the July
snapshot. 609 paid apps had appeared since then.

- 233 had no installs at all.
- 312 had between 1 and 4.
- 50 had a single review.

Of the 27 new apps with 25 or more installs, 19 had reviews older than the July snapshot. They were
existing free apps that had switched to paid, not new launches.

So Approve & Lock was not an outlier. It was exactly where a new paid app usually ends up.

## Everyone mined the same complaints

The 1-star reviews I built the thesis on are public text. Anyone with the same API and an afternoon
finds them. Twenty-one new page-approval apps launched between July and October. On 9 October all 21
had between 0 and 3 installs. The other niches on my list drew between 10 and 28 new entrants each.

The incumbent, meanwhile, was not losing customers to any of us. Page Approval for Confluence went
from 1,717 to 1,643 installs, still at 3.39 stars. That looks like churn until you check the baseline:
established apps with 500 or more installs fell by a median of 5.2% over the same ten weeks, and only
6% of them grew. The unhappy buyers I had counted were staying put.

There was a second problem I found two days after going live. Atlassian put native Approvals for
Confluence into open beta on 10 July, seven weeks before my launch. My research had flagged "the
platform builds it" as the main risk for a different item on the list, and not for this one.

## Is a free tier the trick?

The two near-solo vendors whose new apps did get installs were both free for up to 10 users, and I
was not. So I checked the whole cohort. Among 585 genuinely new apps, those free for up to 10 users
reached 10 or more installs 4% of the time. Apps paid from the first user did it 5% of the time. The
median was one install in both groups. A free tier buys roughly one install, probably the vendor's own
test site.

## What the one visible success did

The best result I could trace to a small vendor was WikiFix, a Confluence app with 32 installs on
9 October. It had done something I had not: it launched off the Marketplace. A Product Hunt launch
around 3 October finished 10th of the day with 94 upvotes. Editorial write-ups followed, and its own
site publishes the tool's results on public Confluence spaces, 695 contradictions across 8,544 pages.

I can't say how many of the 32 installs came from that launch, because nothing records the count
before it, and its vendor already had one other app with 59 installs. But it is the only route to
early installs I found that a small vendor took and that left a trace anyone can check. My entire distribution plan was three articles on the listing site, plus
a feature request to Atlassian's partner programme that I drafted and never sent.

## What I do now

The census answered "where are buyers unhappy?" well. The question that decided the outcome was "how
does an app with zero installs get in front of anyone?" Nothing in fifteen ranked rows measured that.

Before I build for any marketplace again, I'll check what a new app in that category actually gets in
its first ten weeks, and name the channel that will bring the first 30 installs. If that channel is
the marketplace's own search, the cohort data above says I don't have one.

On 11 October I removed the weekly reporting job and wrote the retrospective. The listing is still
public while I decide whether to archive it. The next app on the list, a Q&A tool for Confluence
ranked second, stays unbuilt.
