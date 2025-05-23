import { useMutation } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/Icons";
import { useUserStore } from "@/store/user.store";
import { leaveRoom } from "@/services/Chat";
import { handleTokenExpiration } from "@/utils/token-expiration";
import { useSocketStore } from "@/store/socket.store";
import { getUserId } from "@/utils/get-userId";
import { useRoomStore } from "@/store/room.store";

export const useLeaveRoomMutation = () => {
  const { token, logout } = useUserStore((state) => state);
  const { socket } = useSocketStore();
  const { setRoom } = useRoomStore();
  const userId = getUserId();

  return useMutation({
    mutationFn: (roomId: number) => leaveRoom(roomId, token),
    onSuccess: (data) => {
      toast({
        title: data.message,
        variant: "success",
        logo: <Icons.check />,
      });
      socket?.emit("leaveRoom", data.roomId, userId);
      setRoom(null);
    },
    onError: (error) => {
      if (error.message === "Token expiré !") {
        handleTokenExpiration(logout);
      }
    },
  });
};
