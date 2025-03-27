import { useEffect } from "react";
import { useSocketStore } from "@/store/socket.store";
import { useNotificationStore } from "@/store/notification.store";
import { useAuthStore } from "@/store/auth.store";
import { PrivateMessageProps } from "@/types/message";
import { useContactStore } from "@/store/contact.store";
import { useLocation } from "react-router-dom";

export const useGlobalNotifications = () => {
  const { socket } = useSocketStore();
  const { addNotification } = useNotificationStore();
  const { contactId } = useContactStore();
  const currentUserId = useAuthStore((state) => state.user?.id);
  const location = useLocation();

  useEffect(() => {
    if (!socket || !currentUserId) return;

    const handleNewMessage = (data: PrivateMessageProps) => {
      // Vérifier que la notification est pour l'utilisateur courant
      const isForCurrentUser = data.receiverId === currentUserId;
      // Vérifier que la discussion actuelle n'est pas déjà ouverte avec l'expéditeur
      const isDifferentContact = contactId !== data.user.id;
      // Vérifier que l'utilisateur n'est pas sur la page de chat
      const isNotOnChatPage = location.pathname !== "/chateo/chat/";

      if (isForCurrentUser && (isDifferentContact || isNotOnChatPage)) {
        console.log("Notification ajoutée :", data);
        addNotification(data);
      }
    };

    socket.on("newPrivateMessageNotification", handleNewMessage);

    return () => {
      socket.off("newPrivateMessageNotification", handleNewMessage);
    };
  }, [socket, currentUserId, addNotification, contactId, location.pathname]);
};
