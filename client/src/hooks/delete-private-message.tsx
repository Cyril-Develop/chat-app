import { useMutation } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/Icons";
import { useUserStore } from "@/store/user.store";
import { deletePrivateMessage } from "@/services/Message";
import { useSocketStore } from "@/store/socket.store";
import { useHandleTokenExpiration } from "@/hooks/handle-token-expiration";

export const useDeletePrivateMessageMutation = () => {
  const { token } = useUserStore((state) => state);
  const { socket } = useSocketStore();
  const handleExpiration = useHandleTokenExpiration();

  return useMutation({
    mutationFn: (messageId: number) => deletePrivateMessage(messageId, token),
    onSuccess: (data) => {
      toast({
        title: data.message,
        variant: "success",
        logo: <Icons.check />,
      });
      socket?.emit("deletePrivateMessage", data.messageId);
    },
    onError: (error) => {
      if (error.message === "Session expirée, veuillez vous reconnecter") {
        handleExpiration();
      }
    },
  });
};
