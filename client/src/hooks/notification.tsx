import { useEffect } from "react";
import { useSocketStore } from "@/store/socket.store";
import { useNotificationStore } from "@/store/notification.store";
import { useAuthStore } from "@/store/auth.store";
import { NotificationProps } from "@/types/message";
import { useContactStore } from "@/store/contact.store";
import { useLocation } from "react-router-dom";

export const useGlobalNotifications = () => {
  const { socket } = useSocketStore();
  const { notifications, addNotification, clearNotificationsForContact } =
    useNotificationStore();
  const { contactId } = useContactStore();
  const currentUserId = useAuthStore((state) => state.user?.id);
  const location = useLocation();
  const isOnChatPage = location.pathname === "/chateo/chat";

  // Lorsqu’un message est reçu en live
  useEffect(() => {
    if (!socket || !currentUserId) return;

    const handleNewMessage = (data: NotificationProps) => {
      const isForCurrentUser = data.receiverId === currentUserId;
      const isSameContact = contactId === data.senderId;

      if (!isForCurrentUser) return;

      if (isOnChatPage && isSameContact) {
        clearNotificationsForContact(data.senderId);
      } else {
        addNotification(data);
      }
    };

    socket.on("newPrivateMessageNotification", handleNewMessage);

    return () => {
      socket.off("newPrivateMessageNotification", handleNewMessage);
    };
  }, [
    socket,
    currentUserId,
    addNotification,
    clearNotificationsForContact,
    contactId,
    isOnChatPage,
  ]);

  // Lorsqu’on revient / reload la page avec une conversation déjà ouverte
  useEffect(() => {
    if (contactId && isOnChatPage) {
      const hasNotif = notifications.some(
        (notif) => notif.senderId === contactId
      );
      if (hasNotif) {
        clearNotificationsForContact(contactId);
      }
    }
  }, [contactId, isOnChatPage, notifications, clearNotificationsForContact]);
};
