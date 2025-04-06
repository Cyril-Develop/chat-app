import { useEffect } from "react";
import { useSocketStore } from "@/store/socket.store";
import { useQueryClient } from "@tanstack/react-query";

// Invalidate les requêtes liées aux utilisateurs lorsque des événements de relation sont reçus via le socket
export const useSocketHandler = () => {
  const { socket } = useSocketStore();
  const queryClient = useQueryClient();

  // --- HANDLERS ---
  const invalidateUsers = () => {
    console.log("invalidateUsers");

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
    //! Ne fonctionne pas
    socket?.on("accountCreated", invalidateUsers);
    //!
    // Un compte a été supprimé
    socket?.on("accountDeletedGlobal", invalidateUsers);
    socket?.on("accountDeletedForUser", invalidateFriendsAndBlockedUsers);

    return () => {
      socket?.off("requestPending", invalidateUsers);
      socket?.off("friendRequestSent", invalidateUsers);
      socket?.off("removedRelationship", invalidateUsersAndFriends);
      socket?.off("blockedRelationship", invalidateUsers);
      socket?.off("unblockedRelationship", invalidateUsers);
      socket?.off("friendRequestRejected", invalidateUsers);
      socket?.off("friendRequestAccepted", invalidateFriends);
      socket?.off("accountCreated", invalidateUsers);
      socket?.off("accountDeletedGlobal", invalidateUsers);
      socket?.off("accountDeletedForUser", invalidateFriendsAndBlockedUsers);
    };
  }, [socket, queryClient]);
};
