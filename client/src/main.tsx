import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import RootLayout from "./components/RootLayout.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Register service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/chateo/service-worker.js")
      .then((registration) => {
        console.log("Service Worker enregistré avec succès:", registration);
      })
      .catch((error) => {
        console.log("Enregistrement du Service Worker échoué:", error);
      });
  });
}

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId="435789967890-vmgo5kea1l8s7u91i7hrs3bboss9rkd3.apps.googleusercontent.com">
    <React.StrictMode>
      <RootLayout>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </RootLayout>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
