import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap-generator";

export default defineConfig({
  plugins: [
    react(),

    sitemap({
      hostname:
        "https://www.sharebazaaronline.com",

      dynamicRoutes: [
        "/",
        "/ipo-tracker",
        "/ipo/ipo-list",
        "/pre-ipo-stocks",
        "/broker-analyzer",
        "/how-to-apply-ipo",
        "/insight-hub",
        "/skill-up",
        "/ipoguide",
        "/preipoguide",
        "/login",
      ],

      changefreq: "daily",

      priority: 0.9,

      lastmod: new Date(),

      generateRobotsTxt: true,
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