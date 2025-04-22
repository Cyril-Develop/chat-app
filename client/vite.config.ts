import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "favicons/*.{png,ico,svg}",
        "sounds/*.wav",
        "images/*.svg",
        "screenshots/*.webp",
      ],
      manifest: {
        name: "Chateo",
        short_name: "Chateo",
        categories: ["social", "communication"],
        description:
          "Chateo est une application de messagerie complète : discussions publiques ou privées, messages directs, partage d'images, notifications, personnalisation, et appels audio.",
        start_url: "/chateo/",
        scope: "/chateo/",
        display: "standalone",
        theme_color: "#ffffff",
        background_color: "#2563EB",
        icons: [
          {
            src: "/chateo/favicons/favicon-96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "/chateo/favicons/web-app-manifest-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/chateo/favicons/web-app-manifest-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
        screenshots: [
          {
            src: "/chateo/screenshots/homepage.webp",
            sizes: "1920x1032",
            type: "image/webp",
          },
        ],
      },
      devOptions: {
        enabled: false,
        type: "module",
      },
      workbox: {
        cacheId: "chateo-v1",
        globPatterns: ["**/*.{js,css,html,ico,png,svg,jpg,webp,wav}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/cyril-develop\.fr\/chateo\/api\//,
            handler: "NetworkFirst",
            options: {
              cacheName: "api-cache",
            },
          },
        ],
      },
    }),
  ],
  base: "/chateo/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
