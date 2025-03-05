import { useMutation } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/Icons";
import { useUserStore } from "@/store/user.store";
import { sendFriendRequest } from "@/services/User";
import { useSocketStore } from "@/store/socket.store";
import { useSendNotificationByEmailMutation } from "@/hooks/send-notification-email";
import { useHandleTokenExpiration } from "@/hooks/handle-token-expiration";

export const useSendRequestMutation = () => {
  const { token } = useUserStore((state) => state);
  const { socket } = useSocketStore();
  const sendNotificationByEmailMutation = useSendNotificationByEmailMutation();
  const handleExpiration = useHandleTokenExpiration();

  return useMutation({
    mutationFn: (receiverId: number) => sendFriendRequest(receiverId, token),
    onSuccess: (data) => {
      toast({
        title: data.message,
        variant: "success",
        logo: <Icons.check />,
      });
      socket?.emit("sendFriendRequest", data.newRequest);
      if (data.newRequest.receiver.notification === "accept") {
        sendNotificationByEmailMutation.mutate({
          receiverId: data.newRequest.receiver.id,
          type: "Friend request",
        });
      }
    },
    onError: (error) => {
      if (error.message === "Session expirée, veuillez vous reconnecter") {
        handleExpiration();
      } else {
        toast({
          title: error.message,
          variant: "destructive",
          logo: <Icons.alert />,
        });
      }
    },
  });
};
