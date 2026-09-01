import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rodrigodebolsonaro36.com.br',
  integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
  output: 'static',
});
