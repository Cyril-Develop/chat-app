import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUserStore } from "@/store/user.store";
import { sendMessage } from "@/services/Message";
import { handleTokenExpiration } from "@/utils/token-expiration";

export const useSendMessageMutation = () => {
  const { token, logout } = useUserStore((state) => state);
  const queryClient = useQueryClient();

  interface SendMessageProps {
    roomId: number;
    content: string;
  }

  return useMutation({
    mutationFn: (data: SendMessageProps) => sendMessage(data, token || ""),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["chat"] });
    },
    onError: (error) => {
      if (error.message === "Token expiré !") {
        handleTokenExpiration(logout);
      }
    },
  });
};
