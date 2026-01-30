// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],

  // Make sure base is '/' (default) for Vercel/Netlify
  base: '/',

  // CSS / PostCSS settings
  css: {
    // If you have postcss.config.js in root → Vite auto-detects it
    // You usually DON'T need to set postcss manually unless it's in a subfolder
    // postcss: './postcss.config.js',  ← remove this line unless it's really needed
    devSourcemap: true, // useful for debugging styles in dev
  },

  // Prevent Vite from choking on certain deps (good for slick-carousel, etc.)
  optimizeDeps: {
    exclude: ['slick-carousel'], // if you're using slick-carousel
  },

  // Important for production builds & Vercel
  build: {
    outDir: 'dist',          // default — Vercel expects this
    sourcemap: true,         // helpful for debugging prod issues
    rollupOptions: {
      output: {
        // Helps avoid chunk naming issues on some hosts
        manualChunks: undefined,
      },
    },
  },

  
  server: {
    port: 5173,
    open: true,            
    host: true,             
  },
});