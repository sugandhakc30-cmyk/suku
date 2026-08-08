import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { AMAZON_PRODUCTS } from './src/data/amazonProducts';
import path from 'path';
import { defineConfig } from 'vite';
import Sitemap from 'vite-plugin-sitemap';
import { fileURLToPath } from 'url';

// Define __dirname for ES modules compatibility
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: '/',

  plugins: [
    react(),
    tailwindcss(),

    Sitemap({
      hostname: 'https://sugandhatech.in.net',

      dynamicRoutes: [
        '/about',
        '/contact',
        '/privacy',
        '/terms',
        '/cookie',
        '/disclosure',

        ...AMAZON_PRODUCTS.map(
          (product) => `/product/${product.id}`
        ),
      ],

      readable: true,
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  server: {
    hmr: process.env.DISABLE_HMR === 'true',
    watch: process.env.DISABLE_HMR === 'true' ? null : {},
  },
});