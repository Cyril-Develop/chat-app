import { Separator } from "@/components/ui/separator";
import NotificationForm  from "@/components/settings/notification-form";

export default function SettingsNotificationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Notifications</h3>
        <p className="text-muted-foreground">
          Configurez la façon dont vous recevez les notifications.
        </p>
      </div>
      <Separator />
      <NotificationForm />
    </div>
  );
}
