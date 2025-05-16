import { useEffect } from "react";
import { useSocketStore } from "@/store/socket.store";
import { useQueryClient } from "@tanstack/react-query";
import { useRoomStore } from "@/store/room.store";
import { HandleUserStatusChangedProps, UserInfos } from "@/types/user";

// Invalidate les requêtes liées aux utilisateurs et autres événements en temps réel
export const useSocketHandler = () => {
  const socket = useSocketStore((state) => state.socket);
  const queryClient = useQueryClient();
  const roomId = useRoomStore((state) => state.room?.id);
  const { setUsersInRoom, updateUserInRoom } = useRoomStore();

  // --- HANDLERS ---
  const invalidateUsers = () => {
    queryClient.invalidateQueries({ queryKey: ["users"] });
  };

  const invalidateFriends = () => {
    queryClient.invalidateQueries({ queryKey: ["friends"] });
  };

  const invalidateBlockedUsers = () => {
    queryClient.invalidateQueries({ queryKey: ["blocked-users"] });
  };

  const invalidateUsersAndFriends = () => {
    queryClient.invalidateQueries({ queryKey: ["users"] });
    queryClient.invalidateQueries({ queryKey: ["friends"] });
  };

  const invalidateFriendsAndBlockedUsers = () => {
    queryClient.invalidateQueries({ queryKey: ["friends"] });
    queryClient.invalidateQueries({ queryKey: ["blocked-users"] });
  };

  //**********  ROOM **********/
  const invalidateRooms = () => {
    queryClient.invalidateQueries({ queryKey: ["rooms"] });
    queryClient.invalidateQueries({ queryKey: ["rooms-dashboard"] });
  };

  const handleUserInRoom = (userList: UserInfos[]) => {
    setUsersInRoom(userList);
  };

  const handleUserStatusChanged = ({
    userId,
    visible,
  }: HandleUserStatusChangedProps) => {
    updateUserInRoom({ id: userId, visible });
  };

  const handleReceiveFriendRequest = () => {
    queryClient.invalidateQueries({ queryKey: ["friendRequests"] });
  };

  // --- SOCKET SETUP ---
  useEffect(() => {
    // Une demande d'ami a été envoyée
    socket?.on("requestPending", invalidateUsers);
    // Une demande d'ami a été envoyée
    socket?.on("friendRequestSent", invalidateBlockedUsers);
    // Un ami a été supprimé de la liste d'amis
    socket?.on("removedRelationship", invalidateUsersAndFriends);
    // Un utilisateur a été bloqué
    socket?.on("blockedRelationship", invalidateUsers);
    // Un utilisateur a été débloqué
    socket?.on("unblockedRelationship", invalidateUsers);
    // Une demande d'ami a été rejetée
    socket?.on("friendRequestRejected", invalidateUsers);
    // Une demande d'ami a été acceptée
    socket?.on("friendRequestAccepted", invalidateUsersAndFriends);
    // Un compte a été créé
    socket?.on("accountCreated", invalidateUsers);
    // Un compte a été supprimé
    socket?.on("accountDeletedGlobal", invalidateUsers);
    // Un compte a été supprimé pour un utilisateur spécifique
    socket?.on("accountDeletedForUser", invalidateFriendsAndBlockedUsers);
    //**********  ROOM **********/
    socket?.on("roomCreated", invalidateRooms);
    socket?.on("roomDeleted", invalidateRooms);
    socket?.on("getUserInRoom", handleUserInRoom);
    socket?.on("userStatusChanged", handleUserStatusChanged);
    //**********  FRIEND REQUEST **********/
    socket?.on("receiveFriendRequest", handleReceiveFriendRequest);

    //********** APP STATE **********/
    // Envoie l'état de l'application sur mobile (premier plan ou arrière plan) au serveur socket
    const handleVisibilityChange = () => {
      const isVisible = document.visibilityState === "visible";
      const appState = isVisible ? "foreground" : "background";

      // Envoie au backend l’état de l’app
      socket?.emit("appStateChanged", { state: appState });

      // Si l’app revient au 1er plan ET que le socket n’est pas connectée : reconnecte
      if (isVisible && socket && !socket.connected) {
        socket.connect();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    // pour forcer un état initial correct
    handleVisibilityChange();

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      socket?.off("reconnect");
      socket?.off("requestPending", invalidateUsers);
      socket?.off("friendRequestSent", invalidateBlockedUsers);
      socket?.off("removedRelationship", invalidateUsersAndFriends);
      socket?.off("blockedRelationship", invalidateUsers);
      socket?.off("unblockedRelationship", invalidateUsers);
      socket?.off("friendRequestRejected", invalidateUsers);
      socket?.off("friendRequestAccepted", invalidateFriends);
      socket?.off("accountCreated", invalidateUsers);
      socket?.off("accountDeletedGlobal", invalidateUsers);
      socket?.off("accountDeletedForUser", invalidateFriendsAndBlockedUsers);
      //**********  ROOM **********/
      socket?.off("roomCreated", invalidateRooms);
      socket?.off("roomDeleted", invalidateRooms);
      socket?.off("getUserInRoom", handleUserInRoom);
      socket?.off("userStatusChanged", handleUserStatusChanged);
      //**********  FRIEND REQUEST **********/
      socket?.off("receiveFriendRequest", handleReceiveFriendRequest);
    };
  }, [socket, queryClient, roomId]);
};
