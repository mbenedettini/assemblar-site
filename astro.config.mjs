import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.assemblar.io',
  integrations: [tailwind(), sitemap()],
  server: {
    port: 3000,
    host: true,
    open: true
  }
});
