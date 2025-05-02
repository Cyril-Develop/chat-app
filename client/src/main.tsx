import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.tsx";
import ToasterProvider from "@/components/toaster-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { registerSW } from "virtual:pwa-register";
const queryClient = new QueryClient();
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ToasterProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ToasterProvider>
  </React.StrictMode>
);

// Pour une mise à jour automatique
const updateSW = registerSW({
  onNeedRefresh() {
    // Optionnel : affichez un message à l'utilisateur pour lui proposer de mettre à jour
    if (
      confirm("Une nouvelle version est disponible. Voulez-vous mettre à jour?")
    ) {
      updateSW(true);
    }
  },
  onOfflineReady() {
    console.log("L'application est prête à fonctionner hors ligne");
  },
});
