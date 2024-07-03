import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/Icons";
import { useUserStore } from "@/store/user.store";
import { useRoomStore } from "@/store/room.store";
import { joinChat } from "@/services/Chat";
import { handleTokenExpiration } from "@/utils/token-expiration";
import io from 'socket.io-client';
import { useSocketStore } from "@/store/socket.store";



export const useJoinChatMutation = () => {
  const { token, logout } = useUserStore((state) => state);
  const { setRoom } = useRoomStore();
  const { socket } = useSocketStore();
  const queryClient = useQueryClient();




  interface JoinChatProps {
    roomId: number;
    password?: string;
  }

  return useMutation({
    mutationFn: (data: JoinChatProps) => joinChat(data, token || ""),
    onSuccess: (data, variables) => {
      toast({
        title: data.message,
        variant: "success",
        logo: <Icons.check />,
      });
      setRoom(variables.roomId);
      //queryClient.invalidateQueries({ queryKey: ["chat", variables.roomId] });
      socket?.emit("joinRoom", variables.roomId);
    },
    onError: (error) => {
      if (error.message === "Token expiré !") {
        handleTokenExpiration(logout);
      }
    },
  });
};
