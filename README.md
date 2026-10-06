# deividisilva.com

Personal homepage and blog, built with Astro.

- `public/index.html` is the home page, served as-is.
- Posts live in `src/content/blog/<slug>.md` with `title`, `date`, `description`, `tags` and `draft`. Drafts show in `npm run dev` and are left out of `npm run build`.
- Drafting notes for a post go in `reviews/<slug>.review.md`, outside the content directory, and are never published.

```
npm install
npm run dev      # http://localhost:4321/blog/
npm run build    # static site in dist/
npx wrangler deploy   # Cloudflare Workers static assets, see wrangler.jsonc
```
