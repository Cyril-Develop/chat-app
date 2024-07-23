import { useMutation } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/Icons";
import { useUserStore } from "@/store/user.store";
import { useRoomStore } from "@/store/room.store";
import { joinChat } from "@/services/Chat";
import { handleTokenExpiration } from "@/utils/token-expiration";
import { useSocketStore } from "@/store/socket.store";
import useGetUser from "./get-user";
import { getUserId } from "@/utils/get-userId";

export const useJoinChatMutation = () => {
  const { token, logout, statut } = useUserStore((state) => state);
  const { setRoom } = useRoomStore();
  const { socket } = useSocketStore((state) => state);
  const userId = getUserId();
  const { data: currentUser } = useGetUser(userId);

  interface JoinChatProps {
    roomId: number;
    roomName?: string;
    password?: string;
  }

  return useMutation({
    mutationFn: (data: JoinChatProps) => joinChat(data, token),
    onSuccess: (data) => {
      toast({
        title: data.message,
        variant: "success",
        logo: <Icons.check />,
      });
      setRoom({ id: data.roomId, name: data.roomName });
      socket?.emit(
        "joinRoom",
        data.roomId,
        currentUser.id,
        currentUser.username,
        currentUser.profileImage,
        statut
      );
    },
    onError: (error) => {
      if (error.message === "Token expiré !") {
        handleTokenExpiration(logout);
      }
    },
  });
};
