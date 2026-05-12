import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap-generator";

export default defineConfig({
  plugins: [
    react(),

    sitemap({
      baseUrl: "https://www.sharebazaaronline.com",
    }),
  ],

  base: "/",

  css: {
    devSourcemap: true,
  },

  optimizeDeps: {
    exclude: ["slick-carousel"],
  },

  build: {
    outDir: "dist",
    sourcemap: true,

    rollupOptions: {
      output: {
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