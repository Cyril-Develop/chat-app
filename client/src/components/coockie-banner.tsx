import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
    <div className="fixed bottom-0 md:bottom-10 left-0 md:left-10 rounded-md w-full max-w-[580px] bg-background dark:bg-background p-4 shadow-md border-t border-border flex flex-col space-y-3 z-50 ">
      <h3 className="leading-none">Nous respectons votre vie privée 🔒</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 sm:mb-0">
        Cet site utilise des cookies pour améliorer votre expérience, notamment
        pour vous maintenir connecté(e). Pour bénéficier de la meilleure
        expérience possible, nous vous recommandons de ne pas supprimer les
        cookies à la fermeture de votre navigateur 🍪.
        <br /> En cliquant sur « Accepter », vous consentez à l'utilisation des
        cookies conformément à nos{" "}
        <Link
          to="/chateo/terms"
          className="text-primary no-underline rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring underline-offset-4 hover:underline focus:underline font-semibold"
        >
          conditions générales d'utilisation
        </Link>
        .
      </p>
      <div className="flex flex-row items-center gap-4 w-full">
        <Button
          type="submit"
          size="default"
          variant="default"
          className="text-button px-3 flex-1"
          onClick={handleAccept}
        >
          Accepter
        </Button>
        <Button
          type="button"
          size="default"
          variant="destructive"
          className="text-button px-3 flex-1"
          onClick={() => setShowBanner(false)}
        >
          Refuser
        </Button>
      </div>
    </div>
  );
};

export default CookieBanner;
