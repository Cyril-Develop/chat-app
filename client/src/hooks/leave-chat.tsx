import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/Icons";
import { useUserStore } from "@/store/user.store";
import { leaveChat } from "@/services/Chat";
import { handleTokenExpiration } from "@/utils/token-expiration";
import { useSocketStore } from "@/store/socket.store";

export const useLeaveChatMutation = () => {
  const { token, logout } = useUserStore((state) => state);
  const { socket } = useSocketStore();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (roomId: number) => leaveChat(roomId, token || ""),
    onSuccess: (data) => {
      toast({
        title: data.message,
        variant: "success",
        logo: <Icons.check />,
      });
      socket?.emit("leaveRoom", data.roomId);
      //queryClient.invalidateQueries({ queryKey: ["chat", data.roomId] });
    },
    onError: (error) => {
      if (error.message === "Token expiré !") {
        handleTokenExpiration(logout);
      }
    },
  });
};
