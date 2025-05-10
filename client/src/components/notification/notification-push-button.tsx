import { Button } from "@/components/ui/button";
import { useNotificationService } from "@/hooks/notification-service";
import { Icons } from "../Icons";

const NotificationButton = () => {
  const {
    permission,
    loading,
    error,
    isSubscribed,
    subscribeToPush,
    unsubscribeFromPush,
  } = useNotificationService();

  const handleNotificationToggle = async () => {
    if (isSubscribed) {
      await unsubscribeFromPush();
    } else {
      await subscribeToPush();
    }
  };

  if (!("Notification" in window)) {
    return null;
  }

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

      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default NotificationButton;
