import { useEffect } from "react";
import { useSocketStore } from "@/store/socket.store";
import { useQueryClient } from "@tanstack/react-query";

// Invalidate les requêtes liées aux utilisateurs lorsque des événements de relation sont reçus via le socket
export const useFriendRequestUpdates = () => {
  const { socket } = useSocketStore();
  const queryClient = useQueryClient();

  // --- HANDLERS ---
  const invalidateUsers = () => {
    queryClient.invalidateQueries({ queryKey: ["users"] });
  };

  // --- SOCKET SETUP ---
  useEffect(() => {
    // Permet d'afficher ou de retirer l'icone check dans search user si l'utilisateur recherché est ami avec l'utilisateur courant
    socket?.on("updatedRelationship", invalidateUsers);
    socket?.on("removedRelationship", invalidateUsers);
    // Permet d'afficher un loader lors d'une recherche dans search user si un utilisateur a une demande en attente, si il a envoyé une demande d'ami ou si sa demande d'ami a été refusée
    socket?.on("receiveFriendRequest", invalidateUsers);
    socket?.on("friendRequestSent", invalidateUsers);
    socket?.on("friendRequestRejected", invalidateUsers);

    return () => {
      socket?.off("updatedRelationship", invalidateUsers);
      socket?.off("removedRelationship", invalidateUsers);
      socket?.off("receiveFriendRequest", invalidateUsers);
      socket?.off("friendRequestSent", invalidateUsers);
      socket?.off("friendRequestRejected", invalidateUsers);
    };
  }, [socket, queryClient]);
};
