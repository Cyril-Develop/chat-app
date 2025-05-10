import { useNotificationService } from "@/hooks/notification-service";
import { Button } from "@/components/ui/button";
import { Icons } from "./Icons";
import BraveLogo from "/images/brave_browser.png";
import WindowsLogo from "/images/windows.png";

const NotificationButton = () => {
  const {
    permission,
    loading,
    error,
    isSubscribed,
    subscribeToPush,
    unsubscribeFromPush,
    isBraveBrowser,
  } = useNotificationService();

  const handleNotificationToggle = async () => {
    if (isSubscribed) {
      await unsubscribeFromPush();
    } else {
      await subscribeToPush();
    }
  };

  // Si les notifications ne sont pas supportées
  if (!("Notification" in window)) {
    return null;
  }

  console.log(isBraveBrowser);
  console.log(permission);

  return (
    <div className="flex flex-col space-y-4">
      <Button
        variant="default"
        size="lg"
        onClick={handleNotificationToggle}
        disabled={loading || permission === "denied"}
        className="text-button"
      >
        {loading ? (
          <span className="flex items-center gap-1">
            Activation{" "}
            <Icons.loader className="animate-spin" width="16" height="16" />
          </span>
        ) : isSubscribed ? (
          <span>Désactiver les notifications</span>
        ) : (
          <span>Activer les notifications</span>
        )}
      </Button>

      {permission === "denied" && (
        <p className="error">
          Vous avez bloqué les notifications pour ce site.
        </p>
      )}

      <article className="flex flex-col gap-4 rounded-md border bg-popover dark:bg-background p-4 text-popover-foreground shadow-md max-w-[700px] text-sm">
        {isBraveBrowser && permission !== "granted" && (
          <div>
            <div className="flex items-end gap-1">
              <img
                src={BraveLogo}
                alt="Brave Logo"
                className="w-8 h-8 self-start"
              />
              <p>
                Par défaut, votre navigateur bloque les notifications. Pour les
                activer, suivez ces étapes :
              </p>
            </div>
            <ul className="list-disc ml-5">
              <li>
                Cliquer sur l'icône hamburger dans le coin supérieur droit
              </li>
              <li>
                Aller dans <em>Paramètres</em>
              </li>
              <li>
                Dans la section <em>Confidentialité et sécurité</em>,
                sélectionner{" "}
                <strong>
                  Utiliser les services de Google de messagerie push
                </strong>
              </li>
            </ul>
          </div>
        )}
        <div>
          <div className="flex items-end gap-1.5">
            <img
              src={WindowsLogo}
              alt="Brave Logo"
              className="w-7 h-7 self-start"
            />
            <p>Sur windows :</p>
          </div>
          <ul className="list-disc ml-5">
            <li>
              Aller dans les <em>paramètres</em> de Windows
            </li>
            <li>
              Rechercher <em>actions et notifications</em>
            </li>
            <li>Activer les notifications</li>
          </ul>
        </div>
      </article>

      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default NotificationButton;
