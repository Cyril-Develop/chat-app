import { useMutation } from "@tanstack/react-query";
import { useUserStore } from "@/store/user.store";
import { deleteRoom } from "@/services/Chat";
import { useSocketStore } from "@/store/socket.store";
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/Icons";
import { useHandleTokenExpiration } from "@/hooks/handle-token-expiration";

export const useDeleteRoomMutation = () => {
  const { token } = useUserStore((state) => state);
  const { socket } = useSocketStore();
  const handleExpiration = useHandleTokenExpiration();

  return useMutation({
    mutationFn: (roomId: number) => deleteRoom(roomId, token),
    onSuccess: (data) => {
      toast({
        title: data.message,
        variant: "success",
        logo: <Icons.check />,
      });
      socket?.emit("deleteRoom", data.roomId);
    },
    onError: (error) => {
      if (error.message === "Session expirée, veuillez vous reconnecter") {
        handleExpiration();
      }
    },
  });
};
