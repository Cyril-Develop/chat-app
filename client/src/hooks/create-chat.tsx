import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUserStore } from "@/store/user.store";
import { createChat } from "@/services/Chat";
import expiredToken from "@/utils/expired-token";
import { useJoinChatMutation } from "@/hooks/join-chat";
import { useRoomStore } from "@/store/room.store";

export const useCreateChatMutation = () => {
  const { token, logout } = useUserStore((state) => state);
  const { setRoom } = useRoomStore();
  const queryClient = useQueryClient();
  const joinChatMutation = useJoinChatMutation();

  interface ChatProps {
    name: string;
    password?: string;
  }

  return useMutation({
    mutationFn: (data: ChatProps) => createChat(data, token || ""),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["chat"] });
      joinChatMutation.mutate({ roomId: data.id });
      setRoom(data.id);
    },
    onError: (error) => {
      if (error.message === "Token expiré !") {
        expiredToken(logout);
      }
    },
  });
};
