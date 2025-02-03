import { useMutation } from "@tanstack/react-query";
import { useUserStore } from "@/store/user.store";
import { sendPrivateMessage } from "@/services/Message";
import { handleTokenExpiration } from "@/utils/token-expiration";
import { useSocketStore } from "@/store/socket.store";

export const useSendPrivateMessageMutation = () => {
  const { token, logout } = useUserStore((state) => state);
  const { socket } = useSocketStore();

  return useMutation({
    mutationFn: (formData: FormData) => sendPrivateMessage(formData, token),
    onSuccess: (data) => {
      socket?.emit("sendPrivateMessage", data);
    },
    onError: (error) => {
      if (error.message === "Token expiré !") {
        handleTokenExpiration(logout);
      }
    },
  });
};
