import { useEffect } from "react";
import { useSocketStore } from "@/store/socket.store";
import useGetUserById from "@/hooks/api/user/get-user-by-id";
import useGetPrivateMessage from "@/hooks/api/messages/get-private-messages";
import { useQueryClient } from "@tanstack/react-query";

export const usePrivateChat = (contactId: number) => {
  const { data: fetchedContactInfos, isLoading } = useGetUserById(contactId);
  const { data: privateMessages } = useGetPrivateMessage(contactId);
  const { socket } = useSocketStore();
  const queryClient = useQueryClient();

  // --- SOCKET HANDLERS ---
  const handleGetMessage = () => {
    queryClient.invalidateQueries({
      queryKey: ["messages-private", contactId],
    });
  };

  const handleUpdatedUserInfos = (userId: number) => {
    // On met à jour les messages et les infos utilisateur
    queryClient.invalidateQueries({
      queryKey: ["messages-private", contactId],
    });
    queryClient.invalidateQueries({ queryKey: ["user", userId] });
  };

  const handleDeleteMessage = () => {
    queryClient.invalidateQueries({
      queryKey: ["messages-private", contactId],
    });
  };

  // --- SOCKET SETUP ---
  useEffect(() => {
    socket?.on("getPrivateMessage", handleGetMessage);
    socket?.on("updatedUserInfos", handleUpdatedUserInfos);
    socket?.on("deletePrivateMessage", handleDeleteMessage);

    return () => {
      socket?.off("getPrivateMessage", handleGetMessage);
      socket?.off("updatedUserInfos", handleUpdatedUserInfos);
      socket?.off("deletePrivateMessage", handleDeleteMessage);
    };
  }, [socket, contactId]);

  return {
    fetchedContactInfos,
    privateMessages,
    isLoading,
  };
};
