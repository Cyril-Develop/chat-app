import { useMutation } from "@tanstack/react-query";
import { useUserStore } from "@/store/user.store";
import { sendNotificationByEmail } from "@/services/Email";
import { handleTokenExpiration } from "@/utils/token-expiration";

export const useSendNotificationByEmailMutation = () => {
  const { token, logout } = useUserStore((state) => state);

  return useMutation({
    mutationFn: ({
      receiverId,
      type,
    }: {
      receiverId: number;
      type: "Friend request" | "Private message";
    }) => sendNotificationByEmail({ receiverId, type, token }),
    onError: (error) => {
      if (error.message === "Token expiré !") {
        handleTokenExpiration(logout);
      }
    },
  });
};
