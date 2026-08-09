import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://wintergardenweb.com',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'auto' },

  vite: {
    build: { assetsInlineLimit: 2048 },
  },

  adapter: vercel(),
  integrations: [sitemap()],
});