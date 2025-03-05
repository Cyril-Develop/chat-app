import { useMutation } from "@tanstack/react-query";
import { useUserStore } from "@/store/user.store";
import { sendNotificationByEmail } from "@/services/Email";
import { useHandleTokenExpiration } from "@/hooks/handle-token-expiration";

export const useSendNotificationByEmailMutation = () => {
  const { token } = useUserStore((state) => state);
  const handleExpiration = useHandleTokenExpiration();

  return useMutation({
    mutationFn: ({
      receiverId,
      type,
    }: {
      receiverId: number;
      type: "Friend request" | "Private message";
    }) => sendNotificationByEmail({ receiverId, type, token }),
    onError: (error) => {
      if (error.message === "Session expirée, veuillez vous reconnecter") {
        handleExpiration();
      }
    },
  });
};
