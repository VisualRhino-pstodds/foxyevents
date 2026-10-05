import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import { site } from './src/data/site';

export default defineConfig({
  site: site.url,
  trailingSlash: 'never',
  integrations: [sitemap()],
});
