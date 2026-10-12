---
title: "My release-notes reader missed a feature for four weeks"
date: 2026-10-08
description: "A daily job that rates Claude Code release notes for me never showed me the advisor tool. Three causes, all measured, and the fix cost $1.62 to backfill."
tags: [claude-code, automation, llm]
draft: true
---

Ten Claude Code releases between v2.1.232 and v2.1.290 mentioned the advisor tool. My daily reading job showed me none of them. I found the feature on 8 October by reading the docs myself.

## What the job does

Since 11 September a timer on halo, my home server, runs at 06:45. It pulls new Claude Code release notes, a few other release feeds and posts from a handful of accounts, and asks one headless Sonnet run to rate each item high, medium or low for relevance to my setup. The high and medium items go into a digest I read in the morning. Nothing is applied automatically. The point was that I would stop missing things.

## Three reasons it missed the advisor

I went back through the saved pages from every run and found three separate causes.

**The release notes were cut off.** Every item was truncated to 1,500 characters before the model saw it. Claude Code release notes run between 7,000 and 28,000 characters. For most releases the model saw the first few bullets and nothing else.

**"Already installed" meant "ignore".** On the first day the rater marked five releases as high that I already had installed. So I added a rule: a release at or below the installed version is rated low as "already installed". Claude Code updates itself, though, and the update lands before 06:45. Across the saved runs, 18 of 28 Claude Code releases were dismissed with that reason, whatever they contained. Installed is not the same as configured. The advisor does nothing until you set `advisorModel`, so on my machine it was installed and off.

**Nothing looked backwards.** The advisor shipped before v2.1.232, which is earlier than the job's first run. A job that only reads new feed entries can never report a feature that existed before it started.

Any one of these would have been enough to hide it.

## What I changed

- Release notes are now split into individual bullets. Bullets starting with "Fixed" are dropped, and the rest are kept up to 16,000 characters. The largest set of additions and changes I measured in one release was 14,500.
- The job now also reads the Claude Code docs index (`llms.txt`) and diffs its page list against the previous run. A new docs page is an item. That includes a weekly "What's new" page I hadn't known existed.
- The rating prompt no longer dismisses installed releases. It tells the model that installed means available, not in use, and to check my settings and dotfiles to see whether a feature is actually turned on.
- Items are rated in batches of 60.

## The backfill

The first run with the docs source treated every existing page as new, which is the backward look the job never had. It rated all 221 pages in 10.5 minutes for $1.62. The advisor page came out high. Fifteen pages came out medium, among them routines, channels, the Bash sandbox, `/goal`, restricted mode and the change that made fork mode the default for subagents. The other 213 were low.

The change is merged with its own tests, and the first scheduled run to use it is 06:45 on 9 October.
