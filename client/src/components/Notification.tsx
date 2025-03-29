import React, { useEffect } from "react";
import { useNotificationStore } from "@/store/notification.store";
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/Icons";

export const GlobalNotifications: React.FC = () => {
  const { notifications } = useNotificationStore();

  useEffect(() => {
    if (notifications.length > 0) {
      //const latestNotification = notifications[notifications.length - 1];
      //console.log("latestNotification", latestNotification);

      toast({
        title: `${
          notifications.length > 1
            ? `${notifications.length} messages non lus`
            : `${notifications.length} message non lu`
        }`,
        logo: <Icons.siren />,
        variant: "success",
      });
    }
  }, [notifications]);

  return null;
};
