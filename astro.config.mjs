import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://deividisilva.com',
  trailingSlash: 'always',
  integrations: [sitemap({ customPages: ['https://deividisilva.com/'] })],
  markdown: {
    shikiConfig: { theme: 'github-dark-dimmed' },
  },
});
