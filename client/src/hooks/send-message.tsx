import { useMutation } from "@tanstack/react-query";
import { useUserStore } from "@/store/user.store";
import { sendMessage } from "@/services/Message";
import { handleTokenExpiration } from "@/utils/token-expiration";
import { useSocketStore } from "@/store/socket.store";

export const useSendMessageMutation = () => {
  const { token, logout } = useUserStore((state) => state);
  const { socket } = useSocketStore();

  return useMutation({
    mutationFn: (formData: FormData) => sendMessage(formData, token || ""),
    onSuccess: (data) => {
      socket?.emit("sendMessage", {
        id: data.id,
        userId: data.user.id,
        username: data.user.username,
        profileImage: data.user.profileImage,
        roomId: data.chatRoomId,
        message: data.message,
        image: data.image,
        createdAt: data.createdAt,
      });
    },
    onError: (error) => {
      if (error.message === "Token expiré !") {
        handleTokenExpiration(logout);
      }
    },
  });
};
