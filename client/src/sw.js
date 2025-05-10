import { precacheAndRoute } from "workbox-precaching";
import { clientsClaim } from "workbox-core";
import { registerRoute } from "workbox-routing";
import { NetworkFirst } from "workbox-strategies";

// Récupère les assets précachés par Workbox
precacheAndRoute(self.__WB_MANIFEST);

// Prendre le contrôle immédiatement
self.skipWaiting();
clientsClaim();

// Cache pour les requêtes API
registerRoute(
  /^https:\/\/cyril-develop\.fr\/chateo\/api\//,
  new NetworkFirst({
    cacheName: "api-cache",
  })
);

// Gestion des notifications push
self.addEventListener("push", (event) => {
  if (!event.data) return;

  try {
    const data = event.data.json();

    const options = {
      title: data.title,
      body: data.body,
      icon: data.icon,
      badge: "/chateo/favicons/favicon-96x96.png",
      vibrate: [100, 50, 100],
      data: {
        url: data.url,
      },
      actions: data.actions,
    };

    event.waitUntil(self.registration.showNotification(data.title, options));
  } catch (error) {
    console.error("Erreur lors du traitement de la notification push:", error);
  }
});

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SHOW_NOTIFICATION") {
    // Utiliser event.waitUntil pour s'assurer que le service worker ne se termine pas avant l'affichage
    event.waitUntil(
      (async () => {
        try {
          await self.registration.showNotification("Notifications activées", {
            body: "Vous recevrez désormais les notifications de Chateo",
            icon: "/chateo/favicons/icon-192x192.png",
            tag: `test-${Date.now()}`,
          });
        } catch (e) {
          console.error("Erreur lors de l'affichage de la notification:", e);
        }
      })()
    );
  }
});

// Gestion du clic sur une notification
self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  // URL vers laquelle rediriger l'utilisateur
  const urlToOpen = event.notification.data?.url || "/chateo/";

  event.waitUntil(
    clients.matchAll({ type: "window" }).then((clientList) => {
      // Vérifier si une fenêtre est déjà ouverte
      for (const client of clientList) {
        if (client.url.includes("/chateo/") && "focus" in client) {
          client.focus();
          client.navigate(urlToOpen);
          return;
        }
      }
      // Si aucune fenêtre n'est ouverte, en ouvrir une nouvelle
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen);
      }
    })
  );
});
