import { useState, useEffect } from "react";

export const useNotificationService = () => {
  const [permission, setPermission] = useState("default");
  const [subscription, setSubscription] = useState<PushSubscription | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isBraveBrowser, setIsBraveBrowser] = useState(false);

  useEffect(() => {
    // Vérifier l'état de l'autorisation des notifications
    if ("Notification" in window) {
      setPermission(Notification.permission);
    }

    // Vérifier si l'utilisateur est déjà abonné
    checkSubscription();
  }, []);

  useEffect(() => {
    const detectBrave = async () => {
      if ("brave" in navigator) {
        const result = await (navigator as any).brave.isBrave();
        setIsBraveBrowser(result);
      }
    };
    detectBrave();
  }, []);

  const checkSubscription = async () => {
    try {
      if ("serviceWorker" in navigator && "PushManager" in window) {
        const registration = await navigator.serviceWorker.ready;
        const existingSubscription =
          await registration.pushManager.getSubscription();

        if (existingSubscription) {
          setSubscription(existingSubscription);
        }
      }
    } catch (err) {
      console.error(`Erreur lors de la vérification de l'abonnement:`, err);
      setError(`Impossible de vérifier l'abonnement aux notifications`);
    }
  };

  const requestPermission = async () => {
    try {
      if (!("Notification" in window)) {
        setError("Ce navigateur ne prend pas en charge les notifications");
        return false;
      }

      setLoading(true);
      const result = await Notification.requestPermission();
      setPermission(result);
      setLoading(false);

      return result === "granted";
    } catch (err) {
      setLoading(false);
      setError(`Erreur lors de la demande d'autorisation de notification`);
      return false;
    }
  };

  const subscribeToPush = async () => {
    try {
      setLoading(true);

      // Demander la permission si elle n'est pas déjà accordée
      if (permission !== "granted") {
        const granted = await requestPermission();
        if (!granted) {
          setLoading(false);
          return;
        }
      }

      // S'abonner aux notifications push
      const registration = await navigator.serviceWorker.ready;

      const newSubscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlB64ToUint8Array(
          import.meta.env.VITE_REACT_APP_VAPID_PUBLIC_KEY
        ),
      });

      // Afficher une notification de test
      if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({
          type: 'SHOW_NOTIFICATION',
        });
      }
      
      // Enregistrer l'abonnement sur le serveur
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/notification/subscribe`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            subscription: newSubscription,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Erreur lors de l'enregistrement de l'abonnement`);
      }

      setSubscription(newSubscription);
      setLoading(false);
      return newSubscription;
    } catch (err) {
      setLoading(false);
      setError(
        `Erreur lors de l'abonnement aux notifications: ` +
          (err instanceof Error ? err.message : "Erreur inconnue")
      );
      console.error(`Erreur d'abonnement:`, err);
    }
  };

  const unsubscribeFromPush = async () => {
    try {
      setLoading(true);

      if (!subscription) {
        setLoading(false);
        return;
      }

      // Annuler l'abonnement du côté client
      await subscription.unsubscribe();

      // Informer le serveur de l'annulation
      await fetch(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/notification/unsubscribe`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            subscription,
          }),
        }
      );

      setSubscription(null);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError("Erreur lors de la désactivation des notifications");
      console.error("Erreur de désabonnement:", err);
    }
  };

  // Fonction utilitaire pour convertir une clé base64 en Uint8Array
  const urlB64ToUint8Array = (base64String: string) => {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, "+")
      .replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }

    return outputArray;
  };

  return {
    permission,
    subscription,
    loading,
    error,
    isBraveBrowser,
    requestPermission,
    subscribeToPush,
    unsubscribeFromPush,
    isSubscribed: !!subscription,
  };
};
