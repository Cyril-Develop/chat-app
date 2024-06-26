import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/Icons";
import { useUserStore } from "@/store/user.store";
import { leaveChat } from "@/services/Chat";
import expiredToken from "@/utils/expired-token";

export const useLeaveChatMutation = () => {
  const { token, logout } = useUserStore((state) => state);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (roomId: number) => leaveChat(roomId, token || ""),
    onSuccess: (data) => {
      toast({
        title: data.message,
        variant: "success",
        logo: <Icons.check />,
      });
      queryClient.invalidateQueries({ queryKey: ["chat"] });
    },
    onError: (error) => {
      if (error.message === "Token expiré !") {
        expiredToken(logout);
      }
    },
  });
};
