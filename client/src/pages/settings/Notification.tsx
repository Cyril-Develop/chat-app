import NotificationForm from "@/components/settings/notification-form";
import { Separator } from "@/components/ui/separator";
import useGetUser from "@/hooks/get-current-user";

export default function SettingsNotificationsPage() {
  const { data: currentUser } = useGetUser();
  return (
    <div className="space-y-6">
      {currentUser && (
        <>
          <div>
            <h3 className="text-lg font-medium">Notifications</h3>
            <p className="text-gray-600 dark:text-gray-400 text-base">
              Vous pouvez choisir de recevoir des alertes pour les nouvelles
              demandes d'amis et les messages privés, ou de ne rien recevoir.
            </p>
          </div>
          <Separator />
          <NotificationForm user={currentUser} />
        </>
      )}
    </div>
  );
}
