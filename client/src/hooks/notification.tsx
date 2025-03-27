import { useEffect } from 'react';
import { useSocketStore } from "@/store/socket.store";
import { useNotificationStore } from "@/store/notification.store";
import { useAuthStore } from "@/store/auth.store";
import { PrivateMessageProps } from '@/types/message';

export const useGlobalNotifications = () => {
  const { socket } = useSocketStore();
  const { addNotification } = useNotificationStore();
  const currentUserId = useAuthStore((state) => state.user?.id);

  useEffect(() => {
    if (!socket || !currentUserId) return;

    const handleNewMessage = (data : PrivateMessageProps) => {
      // Vérifier que la notification est pour l'utilisateur courant
      if (data.receiverId === currentUserId) {
        addNotification(data);
      }
    };

    socket.on("newPrivateMessageNotification", handleNewMessage);

    return () => {
      socket.off("newPrivateMessageNotification", handleNewMessage);
    };
  }, [socket, currentUserId, addNotification]);
};