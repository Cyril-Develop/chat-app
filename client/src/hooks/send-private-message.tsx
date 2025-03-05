import { useMutation } from "@tanstack/react-query";
import { useUserStore } from "@/store/user.store";
import { sendPrivateMessage } from "@/services/Message";
import { useSocketStore } from "@/store/socket.store";
import { useSendNotificationByEmailMutation } from "@/hooks/send-notification-email";
import { useHandleTokenExpiration } from "@/hooks/handle-token-expiration";

export const useSendPrivateMessageMutation = () => {
  const { token } = useUserStore((state) => state);
  const { socket } = useSocketStore();
  const sendNotificationByEmailMutation = useSendNotificationByEmailMutation();
  const handleExpiration = useHandleTokenExpiration();

  return useMutation({
    mutationFn: (formData: FormData) => sendPrivateMessage(formData, token),
    onSuccess: (data) => {
      socket?.emit("sendPrivateMessage", data);
      if (data.receiver.notification === "accept") {
        sendNotificationByEmailMutation.mutate({
          receiverId: data.receiver.id,
          type: "Private message",
        });
      }
    },
    onError: (error) => {
      if (error.message === "Session expirée, veuillez vous reconnecter") {
        handleExpiration();
      }
    },
  });
};
