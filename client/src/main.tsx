import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import RootLayout from "./components/RootLayout.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId="435789967890-vmgo5kea1l8s7u91i7hrs3bboss9rkd3.apps.googleusercontent.com">
    <React.StrictMode>
      <RootLayout>
        <App />
      </RootLayout>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
