import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tylermyles.dev',
  output: 'static',
  integrations: [sitemap()]
});
