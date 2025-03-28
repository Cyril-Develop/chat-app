import React, { useEffect } from "react";
import { useNotificationStore } from "@/store/notification.store";
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/Icons";
import { useNavigate } from "react-router-dom";

export const GlobalNotifications: React.FC = () => {
  const { notifications, removeNotification } = useNotificationStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (notifications.length > 0) {
      //const latestNotification = notifications[notifications.length - 1];
      //console.log("latestNotification", latestNotification);

      toast({
        title: `${
          notifications.length > 1
            ? `${notifications.length} Nouveaux messages`
            : `${notifications.length} Nouveau message`
        }`,
        logo: <Icons.siren />,
        variant: "success",
      });
    }
  }, [notifications, removeNotification, navigate, location]);

  return null;
};
