import React, { useEffect } from "react";
import { useNotificationStore } from "@/store/notification.store";
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/Icons";

// Affiche un toast lorsqu'un message privé ou une demande d'ami est reçu
export const GlobalNotifications: React.FC = () => {
  const { messages, requests } = useNotificationStore();

  useEffect(() => {
    if (messages.length > 0) {
      toast({
        title: `${
          messages.length > 1
            ? `${messages.length} messages non lus`
            : `${messages.length} message non lu`
        }`,
        logo: <Icons.chat />,
        variant: "success",
      });
    }

    if (requests.length > 0) {
      toast({
        title: `${
          requests.length > 1
            ? `${requests.length} demandes d'amis en attente`
            : `${requests.length} demande d'ami en attente`
        }`,
        logo: <Icons.user />,
        variant: "success",
      });
    }
  }, [messages, requests]);

  return null;
};
