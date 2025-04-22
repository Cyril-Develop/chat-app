import { useEffect, useState } from "react";

export const useInstallApp = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const promptInstall = async () => {
    if (!deferredPrompt) return;

    const promptEvent = deferredPrompt as any;
    promptEvent.prompt();
    const result = await promptEvent.userChoice;
    console.log("Résultat installation :", result.outcome);

    setDeferredPrompt(null);
    setIsInstallable(false);
  };

  return { isInstallable, promptInstall };
};
