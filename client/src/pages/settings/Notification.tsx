import NotificationForm from "@/components/settings/notification/notification-form";
import { Separator } from "@/components/ui/separator";
import useGetUser from "@/hooks/api/user/get-current-user";
import { SkeletonNotification } from "@/components/skeleton/skeleton";
import NotificationButton from "@/components/notification-button";

export default function SettingsNotificationsPage() {
  const { data: currentUser, isLoading } = useGetUser();
  return (
    <div className="space-y-6">
      {isLoading ? (
        <SkeletonNotification />
      ) : (
        <>
          <div>
            <h3 className="text-lg font-medium">Notifications</h3>
            <p className="text-gray-600 dark:text-gray-400 text-base">
              Vous pouvez choisir de recevoir des alertes pour les nouvelles
              demandes d'amis et les messages privés, ou de ne rien recevoir.
            </p>
          </div>
          <Separator />

          <div className="space-y-4">
            <div>
              <h4 className="text-base font-semibold">Notifications Push</h4>
              <p className="text-additional-info">
                Vous pouvez activer ou désactiver les notifications push pour
                recevoir des alertes même lorsque l'application est fermée.
              </p>
            </div>
            <NotificationButton />
          </div>
          <Separator />
          <NotificationForm user={currentUser} />
        </>
      )}
    </div>
  );
}
