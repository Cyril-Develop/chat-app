import { useMutation } from "@tanstack/react-query";
import { useUserStore } from "@/store/user.store";
import { sendMessage } from "@/services/Message";
import { useSocketStore } from "@/store/socket.store";
import { useHandleTokenExpiration } from "@/hooks/handle-token-expiration";

export const useSendMessageMutation = () => {
  const { token } = useUserStore((state) => state);
  const { socket } = useSocketStore();
  const handleExpiration = useHandleTokenExpiration();

  return useMutation({
    mutationFn: (formData: FormData) => sendMessage(formData, token),
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
      if (error.message === "Session expirée, veuillez vous reconnecter") {
        handleExpiration();
      }
    },
  });
};
