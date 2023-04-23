import {defineConfig} from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';

export default defineConfig({
  site: 'https://www.whisust.com/',
  trailingSlash: 'ignore',
  experimental: {
    assets: true
  },
  integrations: [
    sitemap(),
    UnoCSS({injectReset: true}),
  ],
});
