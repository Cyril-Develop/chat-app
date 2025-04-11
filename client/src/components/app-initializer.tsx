import { useEffect } from "react";
import { useSocketStore } from "@/store/socket.store";
import { useAuthStore } from "@/store/auth.store";
import { useNotificationStore } from "@/store/notification.store";
import { useRoomStore } from "@/store/room.store";
import useGetCurrentUser from "@/hooks/api/user/get-current-user";

export const AppInitializer = () => {
  const { socket, connectSocket, disconnectSocket } = useSocketStore();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const initializeAuth = useAuthStore((state) => state.initializeAuth);
  const initializeNotifications = useNotificationStore(
    (state) => state.initializeNotifications
  );
  const visible = useAuthStore((state) => state.visible);
  const roomId = useRoomStore((state) => state.room?.id);
  const { data: currentUser } = useGetCurrentUser();

  // Si l'utilisateur est dans une room, on le connecte à cette room après un rafraîchissement
  useEffect(() => {
    if (roomId && currentUser) {
      socket?.emit(
        "joinRoom",
        roomId,
        currentUser.id,
        currentUser.username,
        currentUser.gender,
        currentUser.profileImage,
        visible
      );
    }
  }, [socket, roomId, currentUser, visible]);

  // On initialise les notifications et l'authentification au chargement de l'application
  useEffect(() => {
    if (isAuthenticated && currentUser) {
      initializeAuth();
      initializeNotifications(currentUser.id);
      connectSocket(visible);
    } else {
      disconnectSocket();
    }
  }, [isAuthenticated, currentUser]);

  return null;
};
