import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useSocketStore } from "@/store/socket.store";
import { Users, UpdateRelationship } from "@/types/chat";

// Mettre à jour les demandes d'ami en temps réel
export const useFriendRequestUpdates = () => {
  const { socket } = useSocketStore();
  const queryClient = useQueryClient();

  // Mettre à jour la liste après avoir ajouté un ami
  const updateUserRelationship = (updatedData: UpdateRelationship) => {
    queryClient.setQueryData(["users"], (oldData: Users[] | undefined) => {
      if (!oldData) return oldData;

      return oldData.map((user) => {
        if (user.id === updatedData.user.id) {
          return { ...user, friends: [...user.friends, updatedData.friend] };
        }
        if (user.id === updatedData.friend.id) {
          return { ...user, friends: [...user.friends, updatedData.user] };
        }
        return user;
      });
    });

    queryClient.invalidateQueries({ queryKey: ["users"] });
  };

  // Mettre à jour la liste après suppression d'un ami
  const handleRemoveFriend = (removedData: UpdateRelationship) => {
    queryClient.setQueryData(["users"], (oldData: Users[] | undefined) => {
      if (!oldData) return oldData;

      return oldData.map((user) => {
        if (user.id === removedData.user.id) {
          return {
            ...user,
            friends: user.friends.filter((f) => f.id !== removedData.friend.id),
          };
        }
        if (user.id === removedData.friend.id) {
          return {
            ...user,
            friends: user.friends.filter((f) => f.id !== removedData.user.id),
          };
        }
        return user;
      });
    });

    queryClient.invalidateQueries({ queryKey: ["users"] });
  };

  // Ajouter une demande d'ami
  const addFriendRequest = (newRequest: any) => {
    queryClient.setQueryData(["users"], (oldData: Users[] | undefined) => {
      if (!oldData) return oldData;

      return oldData.map((user) => {
        if (user.id === newRequest.receiver.id) {
          const requestExists = user.receivedFriendRequests.some(
            (req) => req.id === newRequest.id
          );
          if (requestExists) return user;

          return {
            ...user,
            receivedFriendRequests: [
              ...(user.receivedFriendRequests || []),
              newRequest,
            ],
          };
        }

        if (user.id === newRequest.sender.id) {
          const requestExists = user.sentFriendRequests.some(
            (req) => req.id === newRequest.id
          );
          if (requestExists) return user;

          return {
            ...user,
            sentFriendRequests: [
              ...(user.sentFriendRequests || []),
              newRequest,
            ],
          };
        }

        return user;
      });
    });

    queryClient.invalidateQueries({ queryKey: ["users"] });
  };

  // Supprimer une demande d'ami
  const removeFriendRequest = (requestId: number) => {
    queryClient.setQueryData(["users"], (oldData: Users[] | undefined) => {
      if (!oldData) return oldData;

      return oldData.map((user) => ({
        ...user,
        receivedFriendRequests: user.receivedFriendRequests.filter(
          (req) => req.id !== requestId
        ),
        sentFriendRequests: user.sentFriendRequests.filter(
          (req) => req.id !== requestId
        ),
      }));
    });

    queryClient.invalidateQueries({ queryKey: ["users"] });
  };

  // Écouter les événements socket pour les mises à jour
  useEffect(() => {
    socket?.on("updatedRelationship", updateUserRelationship);
    socket?.on("removedRelationship", handleRemoveFriend);
    socket?.on("receiveFriendRequest", addFriendRequest);
    socket?.on("friendRequestSent", addFriendRequest);
    socket?.on("friendRequestRejected", removeFriendRequest);

    return () => {
      socket?.off("updatedRelationship", updateUserRelationship);
      socket?.off("removedRelationship", handleRemoveFriend);
      socket?.off("receiveFriendRequest", addFriendRequest);
      socket?.off("friendRequestSent", addFriendRequest);
      socket?.off("friendRequestRejected", removeFriendRequest);
    };
  }, [socket]);

  return {
    updateUserRelationship,
    handleRemoveFriend,
    addFriendRequest,
    removeFriendRequest,
  };
};
