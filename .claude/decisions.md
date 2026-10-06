# Decisions

## 2026-10-05: Astro blog beside the unchanged static home page
- Decision: the repo becomes an Astro 7 project. The home page is `public/index.html`, copied byte-for-byte into the build; the blog is a content collection at `/blog/` with RSS and sitemap. `wrangler.jsonc` targets Cloudflare Workers static assets, following claude-ops knowledge/log.md 2026-10-05 ("Astro on Cloudflare, built in each site's own repo").
- Why: the home page is one hand-written HTML file; serving it untouched removes any risk to it, while the blog gets static HTML that crawlers read without JavaScript.
- Rejected: porting the home page into an Astro component (no gain, risk of visual drift); a Worker route at /blog like dapdev.tech (the domain is on Route 53 + CloudFront, not Cloudflare, so there is no zone to route on).
- Status: built, not deployed. Hosting cutover is open: the domain is served from S3 via CloudFront, DNS on Route 53, as of 2026-10-05.
