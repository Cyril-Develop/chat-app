import { useEffect } from "react";
import { useSocketStore } from "@/store/socket.store";
import useGetRoom from "@/hooks/api/chat/get-room";
import useGetRoomMessages from "@/hooks/api/messages/get-room-messages";
import { useQueryClient } from "@tanstack/react-query";
import { UserInfos } from "@/types/user";
import { useRoomStore } from "@/store/room.store";

export const useRoomChat = (roomId: number) => {
  const { data: fetchedRoom, isLoading } = useGetRoom(roomId);
  const { data: roomMessages } = useGetRoomMessages(roomId);
  const { socket } = useSocketStore();
  const queryClient = useQueryClient();
  const { updateUserInRoom } = useRoomStore();

  // --- SOCKET HANDLERS ---
  const handleDeleteMessage = () => {
    queryClient.invalidateQueries({ queryKey: ["messages-room", roomId] });
  };

  const handleUpdatedUser = (updatedUser: UserInfos) => {
    // On met à jour la liste des messages dans le cache pour la room active
    queryClient.invalidateQueries({ queryKey: ["messages-room", roomId] });
    updateUserInRoom(updatedUser);
  };

  const handleMessageSent = () => {
    // On met à jour la liste des messages dans le cache pour la room active
    queryClient.invalidateQueries({ queryKey: ["messages-room", roomId] });
  };

  useEffect(() => {
    socket?.on("messageSentInRoom", handleMessageSent);
    socket?.on("messageDeleted", handleDeleteMessage);
    socket?.on("updatedUserInfos", handleUpdatedUser);

    return () => {
      socket?.off("messageSentInRoom", handleMessageSent);
      socket?.off("messageDeleted", handleDeleteMessage);
      socket?.off("updatedUserInfos", handleUpdatedUser);
    };
  }, [socket, handleMessageSent, handleDeleteMessage, handleUpdatedUser]);

  return {
    fetchedRoom,
    roomMessages,
    isLoading,
  };
};
