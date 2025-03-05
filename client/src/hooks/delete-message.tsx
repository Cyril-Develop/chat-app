import { useMutation } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/Icons";
import { useUserStore } from "@/store/user.store";
import { deleteMessage } from "@/services/Message";
import { useSocketStore } from "@/store/socket.store";
import { useRoomStore } from "@/store/room.store";
import { useHandleTokenExpiration } from "@/hooks/handle-token-expiration";

export const useDeleteMessageMutation = () => {
  const { token } = useUserStore((state) => state);
  const { room } = useRoomStore();
  const { id: roomId } = room || {};
  const { socket } = useSocketStore();
  const handleExpiration = useHandleTokenExpiration();

  return useMutation({
    mutationFn: (messageId: number) => deleteMessage(messageId, token),
    onSuccess: (data) => {
      toast({
        title: data.message,
        variant: "success",
        logo: <Icons.check />,
      });
      socket?.emit("messageDeleted", data.messageId, roomId);
    },
    onError: (error) => {
      if (error.message === "Session expirée, veuillez vous reconnecter") {
        handleExpiration();
      }
    },
  });
};
