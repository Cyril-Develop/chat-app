import React, { useEffect } from "react";
import { useNotificationStore } from "@/store/notification.store";
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/Icons";
import { ToastAction } from "@radix-ui/react-toast";
import { useNavigate, useLocation } from "react-router-dom";

export const GlobalNotifications: React.FC = () => {
  const { notifications, removeNotification } = useNotificationStore();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (notifications.length > 0) {
      //const latestNotification = notifications[notifications.length - 1];

      // Vérifiez si l'utilisateur est déjà sur la page de chat
      const isOnChatPage = location.pathname === "/chateo/chat/";

      //console.log("latestNotification", latestNotification);

      toast({
        title: `${
          notifications.length > 1
            ? `${notifications.length} Nouveaux messages`
            : `${notifications.length} Nouveau message`
        }`,
        logo: <Icons.siren />,
        action: !isOnChatPage ? (
          <ToastAction
            altText="voir les messages"
            className="underline-offset-4 hover:underline"
            onClick={() => {
              navigate(`/chateo/chat/`);
            }}
          >
            Voir les messages
          </ToastAction>
        ) : undefined,
      });
    }
  }, [notifications, removeNotification]);

  return null;
};
