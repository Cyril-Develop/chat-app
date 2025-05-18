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
        name: "Chat'App",
        short_name: "Chat'App",
        categories: ["social", "communication"],
        description:
          "Chat'App est une application de messagerie complète : discussions publiques ou privées, messages directs, partage d'images, notifications, personnalisation, et appels audio.",
        start_url: "/chat-app/",
        lang: "fr",
        scope: "/chat-app/",
        display: "standalone",
        theme_color: "#ffffff",
        background_color: "#2563EB",
        icons: [
          {
            src: "/chat-app/favicons/favicon-96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "/chat-app/favicons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/chat-app/favicons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
        screenshots: [
          {
            src: "/chat-app/screenshots/home.webp",
            sizes: "1920x1032",
            type: "image/webp",
            form_factor: "wide",
          },
        ],
      },
      devOptions: {
        enabled: false,
        type: "module",
      },
      workbox: {
        cacheId: "chat-app-v1",
        clientsClaim: true,
        skipWaiting: true,
        globPatterns: ["**/*.{js,css,html,ico,png,svg,jpg,webp,wav}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/cyril-develop\.fr\/chat-app\/api\//,
            handler: "NetworkFirst",
            options: {
              cacheName: "api-cache",
            },
          },
        ],
      },
      // Configuration pour les notifications push
      strategies: "injectManifest",
      srcDir: "src",
      filename: "sw.js",
    }),
  ],
  base: "/chat-app/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
