import { useMutation } from "@tanstack/react-query";
import { useUserStore } from "@/store/user.store";
import { createChat } from "@/services/Chat";
import { handleTokenExpiration } from "@/utils/token-expiration";
import { useJoinChatMutation } from "@/hooks/join-chat";
import { useRoomStore } from "@/store/room.store";
import { useSocketStore } from "@/store/socket.store";

export const useCreateChatMutation = () => {
  const { token, logout } = useUserStore((state) => state);
  const { setRoom } = useRoomStore();
  const joinChatMutation = useJoinChatMutation();
  const { socket } = useSocketStore();

  interface ChatProps {
    name: string;
    password?: string;
  }

  return useMutation({
    mutationFn: (data: ChatProps) => createChat(data, token),
    onSuccess: (data) => {
      joinChatMutation.mutate({ roomId: data.id });
      setRoom(data.id);
      socket?.emit(
        "createRoom",
        data.id,
        data.name,
        data.isPrivate,
        data.password,
        data.updatedAt,
        data.createdAt,
        data.createdBy
      );
    },
    onError: (error) => {
      if (error.message === "Token expiré !") {
        handleTokenExpiration(logout);
      }
    },
  });
};
