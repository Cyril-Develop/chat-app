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

  // Initialisation de l'authentification et des notifications au démarrage de l'application
  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  // Si l'utilisateur est dans une room, on le connecte à cette room après un rafraîchissement
  useEffect(() => {
    if (roomId && currentUser) {
      socket?.emit(
        "joinRoom",
        roomId,
        currentUser.id,
        currentUser.username,
        currentUser.sex,
        currentUser.profileImage,
        visible,
        currentUser.role
      );
    }
  }, [socket, roomId, currentUser, visible]);

  // On initialise les notifications et l'authentification au chargement de l'application
  // Initialisation des notifications et connexion/déconnexion au socket
  useEffect(() => {
    if (isAuthenticated && currentUser) {
      initializeNotifications(currentUser.id);
      connectSocket(visible);
    } else {
      disconnectSocket();
    }
  }, [isAuthenticated, currentUser, visible]);

  return null;
};
