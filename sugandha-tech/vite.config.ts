import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { AMAZON_PRODUCTS } from './data/amazonProducts.ts';
import path from 'path';
import {defineConfig} from 'vite';
import Sitemap from 
'vite-plugin-sitemap';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
Sitemap({
  hostname: "https://sugandhatech.in.net",
  dynamicRoutes: [
    "/",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/cookie",
    "/disclosure",
    ...AMAZON_PRODUCTS.map(
      (product) => `/product/${product.id}`
    ),
  ],
})],

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
