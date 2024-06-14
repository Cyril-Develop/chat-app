import { Separator } from "@/components/ui/separator";
import NotificationForm from "@/components/settings/notification-form";
import useFetchUser from "@/hooks/fetch-user";

export default function SettingsNotificationsPage() {
  const { data } = useFetchUser();
  return (
    <div className="space-y-6">
      {data && (
        <>
          <div>
            <h3 className="text-lg font-medium">Notifications</h3>
            <p className="text-muted-foreground">
              Configurez la façon dont vous recevez les notifications.
            </p>
          </div>
          <Separator />
          <NotificationForm user={data} />
        </>
      )}
    </div>
  );
}
