import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/Icons";
import { useUserStore } from "@/store/user.store";
import { joinChat } from "@/services/Chat";
import { handleTokenExpiration } from "@/utils/token-expiration";

export const useJoinChatMutation = () => {
  const { token, logout } = useUserStore((state) => state);
  const queryClient = useQueryClient();

  interface JoinChatProps {
    roomId: number;
    password?: string;
  }

  return useMutation({
    mutationFn: (data: JoinChatProps) => joinChat(data, token || ""),
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
        handleTokenExpiration(token || "", logout);
      } 
    },
  });
};
