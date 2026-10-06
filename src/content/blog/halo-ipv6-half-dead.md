---
title: "My server's IPv6 was half-dead for at least 28 hours, and only the big downloads noticed"
date: 2026-10-05
description: "A 50% IPv6 packet loss upstream of my home server hung every large transfer while small requests looked fine. What I measured, why it read as one broken job, and the one line in /etc/gai.conf I kept."
tags: [networking, ipv6, curl, self-hosting, debugging]
draft: true
---

For at least 28 hours in September, my home server's uplink dropped 20-50% of IPv6 packets while
IPv4 on the same link lost none. A 5 MB download over IPv6 stalled at 25 KB. The same download over
IPv4 finished in 0.198 seconds. Almost nothing on the box looked broken.

## What happened

The machine is a mini PC I call halo. It runs databases, a few web apps and a set of scheduled jobs
for my own SaaS products, and nearly all of those jobs fetch something from the internet.

On the morning of 22 September, between 09:05 and 10:05 UTC, jobs started failing. One download
returned HTTP status `000` after about 300 seconds. Meanwhile another job, one that makes small
requests with one-second round trips, kept committing all morning without a single error.

My first read was "a transient blip": I re-ran one failed job, it succeeded, and I drew the
conclusion from that before the re-run that mattered had finished. That one failed twice more,
first hanging for 16 minutes on a single database read and then dying mid-transfer. The loss was
there the whole time.

What finally made me look at the link was a Telegram alert that made no sense: 300 bytes of binary
pasted into a message that was supposed to explain a failed download.

## What I measured

Four commands on the live link:

```
ping6 -c 12 -s 56  <cloudflare v6>   ->  50% loss
ping  -c 12        1.1.1.1           ->   0% loss
curl -6  5 MB from Cloudflare        ->  stalled at 25 KB, timed out at 60 s
curl -4  5 MB from Cloudflare        ->  5,000,000 bytes in 0.198 s
```

I reproduced it against Cloudflare and against Hetzner, so it was not one remote service having a
bad day.

The local link was clean: 0% loss to the router over IPv4, over the router's link-local address
(`fe80::1`) and over its global IPv6 address. The loss started upstream of the router, in my ISP's
IPv6 path. Nothing on halo or on the router was misconfigured, and there was nothing local to
repair.

One trap on the way: `mtr -6` showed 15-23% loss at every hop, including the first. That pattern is
routers rate-limiting the ICMP replies, not a fault at hop one. Pinging each hop directly is what
placed the loss beyond the router.

## Why it looked like one broken job

The damage was out of proportion to the loss rate, and the reason is how the failure is shaped.

curl prefers IPv6 whenever a host publishes an AAAA record, and most hosts worth fetching from do.
Happy Eyeballs, the mechanism that falls back from IPv6 to IPv4, only covers the connect. Here the
TCP connection was established fine and then died partway through the body. There is no fallback
for that. The request just hangs.

So small requests got through on retransmission and looked healthy, and anything large stalled.
From the inside, that reads as "this one job is flaky" rather than "the network is broken." A
network can be 80% healthy and still take down exactly the jobs that move real data.

Two things on my side turned that into a long outage:

- **An unbounded curl.** The database read had no `--max-time`, so a stall became a 16-minute hang
  instead of a fast error.
- **A diagnostic that reported the wrong thing.** The download step explained its failure by reading
  its own `-o` output file. When the transfer never starts, curl writes nothing there, so the step
  read the previous day's file and pasted 300 bytes of an old zip into the alert.

The cost was a day of a data sweep that only accumulates forward, so that day cannot be recovered.

## What I changed

The fix that carries the load is one line in `/etc/gai.conf`:

```
precedence ::ffff:0:0/96  100
```

That makes `getaddrinfo` prefer IPv4 whenever a host has both families. IPv6 is not disabled: an
IPv6-only destination still resolves and connects. I backed up the original file first, and
reverting is re-commenting that line.

I checked that it was the fix rather than a coincidence. The job that had hung for 16 minutes and
then failed twice on IPv6 finished in 8.3 seconds on a re-run, with no IPv4 flag anywhere in its
own configuration.

I also fixed the two things on my side. Every database request from that project now has a
120-second total timeout and a 15-second connect timeout. The download diagnostic deletes its output file before starting, reports
curl's exit code (which is the only thing that separates a DNS, connect, timeout or TLS failure,
since all of them show up as `000` with no body) and refuses to paste a body that isn't text.

## Why the setting stays

The fault cleared on its own around 13:30 UTC on 23 September. I kept the IPv4 preference anyway,
and set it for the whole machine rather than for the one project that found it, because every
project on halo fetches something. Every host these projects talk to has an A record, so preferring
IPv4 costs nothing, and it rules out this whole failure class.

When a download on this box stalls now, I run a 20-packet `ping6` against a 20-packet IPv4 `ping`,
then pull 5 MB over IPv6 with `curl -6 --max-time 30` before I touch the job. A short ping run
overstates loss and a long one understates it; the large transfer is the measurement that matches
what breaks real jobs. On 5 October that transfer took 0.18 seconds over IPv6, and halo still sends
its traffic over IPv4.
