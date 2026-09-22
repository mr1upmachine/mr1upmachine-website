// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://mr1upmachine.com',
  integrations: [mdx(), sitemap(), react()],

  vite: {
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        '@fortawesome/react-fontawesome',
        '@fortawesome/fontawesome-svg-core',
      ],
    },
    plugins: [tailwindcss()],
    ssr: {
      optimizeDeps: {
        include: [
          'react',
          'react-dom',
          'react-dom/server',
          '@fortawesome/react-fontawesome',
          '@fortawesome/fontawesome-svg-core',
        ],
      },
    },
  },

  adapter: cloudflare(),
});
