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
        "favicon.ico",
        "favicon/*.png",
        "icons/*.png",
        "sounds/*.wav",
        "images/*.svg",
        "screenshot/*.webp",
      ],
      manifest: {
        name: "Chateo",
        short_name: "Chateo",
        description:
          "Chateo est une application de messagerie complète : discussions publiques ou privées, messages directs, partage d'images, notifications, personnalisation, et appels audio.",
        start_url: "/chateo/",
        scope: "/chateo/",
        display: "standalone",
        theme_color: "#ffffff",
        background_color: "#2563EB",
        icons: [
          {
            src: "/chateo/favicon/apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png",
          },
          {
            src: "/chateo/favicon/favicon-16x16.png",
            sizes: "16x16",
            type: "image/png",
          },
          {
            src: "/chateo/favicon/favicon-32x32.png",
            sizes: "32x32",
            type: "image/png",
          },
          {
            src: "/chateo/favicon/icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "/chateo/favicon/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/chateo/favicon/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
        screenshots: [
          {
            src: "/chateo/screenshot/room.webp",
            sizes: "1920x950",
            type: "image/webp",
            form_factor: "wide",
          },
          {
            src: "/chateo/screenshot/account.webp",
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
