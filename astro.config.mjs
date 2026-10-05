import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: replace with her real domain before deploying
export default defineConfig({
  site: 'https://www.foxyevents.com',
  integrations: [sitemap()],
});
