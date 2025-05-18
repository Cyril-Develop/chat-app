import { useEffect } from "react";
import { useSocketStore } from "@/store/socket.store";
import { useNotificationStore } from "@/store/notification.store";
import { useAuthStore } from "@/store/auth.store";
import { NotificationProps } from "@/types/message";
import { useContactStore } from "@/store/contact.store";
import { useLocation } from "react-router-dom";

export const useGlobalNotifications = () => {
  const socket = useSocketStore((state) => state.socket);
  const { messages, addNotification, clearNotificationsForContact } =
    useNotificationStore();
  const contactId = useContactStore((state) => state.contactId);
  const currentUserId = useAuthStore((state) => state.user?.id);
  const location = useLocation();
  const isOnChatPage = location.pathname === "/chat-app/chat";

  // Lorsqu’un message ou une demande est reçu en live
  useEffect(() => {
    if (!socket || !currentUserId) return;

    const handleNewNotification = (data: NotificationProps) => {
      const isSameContact = contactId === data.user?.id;
      if (data.type === "message") {
        if (isOnChatPage && isSameContact && data.user) {
          clearNotificationsForContact(data.user.id);
        } else {
          addNotification(data);
        }
      }

      if (data.type === "request") {
        addNotification(data);
      }
    };

    socket.on("newNotification", handleNewNotification);

    return () => {
      socket.off("newNotification", handleNewNotification);
    };
  }, [
    socket,
    currentUserId,
    addNotification,
    clearNotificationsForContact,
    contactId,
    isOnChatPage,
  ]);

  // Lorsqu’on revient / reload sur une conversation déjà ouverte
  useEffect(() => {
    if (contactId && isOnChatPage) {
      const hasNotif = messages.some((notif) => notif.user?.id === contactId);
      if (hasNotif) {
        clearNotificationsForContact(contactId);
      }
    }
  }, [contactId, isOnChatPage, messages, clearNotificationsForContact]);
};
