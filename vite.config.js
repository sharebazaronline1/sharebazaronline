import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js', // make sure this points to your correct PostCSS config
    devSourcemap: true,
  },
  optimizeDeps: {
    exclude: ['slick-carousel'], // prevent Vite from processing slick-carousel CSS with PostCSS
  },
});
