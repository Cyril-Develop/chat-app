import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";

const InstallAppButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault(); // Empêche le prompt auto
      setDeferredPrompt(e); // On stocke l'event
      setIsVisible(true); // On rend le bouton visible
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    const promptEvent = deferredPrompt as any;
    promptEvent.prompt(); // Lance le vrai prompt

    const result = await promptEvent.userChoice;
    console.log("Résultat installation :", result.outcome);

    setDeferredPrompt(null);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <Button
      variant="default"
      title="Installer l'application"
      aria-label="Installer l'application"
      onClick={handleInstallClick}
      className="fixed top-[100px] left-1/2 -translate-x-1/2 z-50 h-10 min-w-10 overflow-hidden transition-all duration-300 ease-in-out flex items-center hover:px-5 group rounded-full"
    >
      <span className="max-w-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-w-[150px] group-hover:opacity-100 whitespace-nowrap">
        Installer Chateo
      </span>
      <Icons.download width={24} height={18} />
    </Button>
  );
};

export default InstallAppButton;
