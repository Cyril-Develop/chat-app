import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/Icons";
import { useUserStore } from "@/store/user.store";
import { acceptFriendRequest } from "@/services/User";
import { handleTokenExpiration } from "@/utils/token-expiration";
import { useSocketStore } from "@/store/socket.store";

export const useAcceptFriendRequestMutation = () => {
  const { token, logout } = useUserStore((state) => state);
  const { socket } = useSocketStore();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (contactId: string) => acceptFriendRequest(contactId, token),
    onSuccess: (data) => {
      toast({
        title: data.message,
        variant: "success",
        logo: <Icons.check />,
      });
      queryClient.invalidateQueries({ queryKey: ["user"] });
      socket?.emit(
        "addFriend",
        data.user.id,
        data.friend.id,
        data.friend.username,
        data.user.username
      );
    },
    onError: (error) => {
      if (error.message === "Token expiré !") {
        handleTokenExpiration(logout);
      }
    },
  });
};
