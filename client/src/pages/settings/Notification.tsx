import { Separator } from "@/components/ui/separator";
import NotificationForm from "@/components/settings/notification-form";
import useGetUser from "@/hooks/get-user";
import { getUserId } from "@/utils/get-userId";

export default function SettingsNotificationsPage() {
  const userId = getUserId();
  const { data } = useGetUser(userId);
  return (
    <div className="space-y-6">
      {data && (
        <>
          <div>
            <h3 className="text-lg font-medium">Notifications</h3>
            <p className="text-description">
              Vous pouvez choisir de recevoir des alertes pour les nouvelles
              demandes d'amis et les messages privés, ou de ne rien recevoir.
            </p>
          </div>
          <Separator />
          <NotificationForm user={data} />
        </>
      )}
    </div>
  );
}
