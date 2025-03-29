import { useEffect } from "react";
import { useSocketStore } from "@/store/socket.store";
import { useNotificationStore } from "@/store/notification.store";
import { useAuthStore } from "@/store/auth.store";
import { NotificationProps } from "@/types/message";
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

    const handleNewMessage = (data: NotificationProps) => {
      // Vérifier que la notification est pour l'utilisateur courant
      const isForCurrentUser = data.receiverId === currentUserId;

      // Vérifier que l'expéditeur est différent de l'utilisateur courant
      const isDifferentContact = contactId !== data.senderId;

      // Vérifier si l'utilisateur est sur la page de chat
      const isOnChatPage = location.pathname === "/chateo/chat";

      // Si la notification est pour l'utilisateur courant et qu'il n'est pas sur la page de chat ou que le contact est différent, on ajoute la notification
      if (isForCurrentUser && (!isOnChatPage || isDifferentContact)) {
        addNotification(data);
      }
    };

    socket.on("newPrivateMessageNotification", handleNewMessage);

    return () => {
      socket.off("newPrivateMessageNotification", handleNewMessage);
    };
  }, [socket, currentUserId, addNotification, contactId, location.pathname]);
};
