import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("cookieConsent");
    if (!hasAcceptedCookies) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 min-h-20 left-0 w-full bg-background dark:bg-background px-4 py-3 shadow-md border-t border-border flex flex-col sm:flex-row items-center justify-between z-50">
      <p className="text-sm text-center text-gray-600 dark:text-gray-400 mb-2 sm:mb-0">
        Ce site utilise des cookies pour améliorer votre expérience, notamment
        pour vous maintenir connecté(e).
      </p>
      <div className="flex flex-row items-center gap-2">
        <Button
          type="submit"
          size="lg"
          variant="default"
          className="text-button px-3"
          onClick={handleAccept}
        >
          Accepter
        </Button>
        <Button
          type="button"
          size="lg"
          variant="destructive"
          className="text-button px-3"
          onClick={() => setShowBanner(false)}
        >
          Refuser
        </Button>
      </div>
    </div>
  );
};

export default CookieBanner;
