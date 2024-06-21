import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";
import { BadgeCheck } from "lucide-react";
import { useUserStore } from "@/store/user.store";
import { joinChat } from "@/services/Chat";
import expiredToken from "@/utils/expired-token";

export const useJoinChatMutation = () => {
  const { token, logout } = useUserStore((state) => state);
  const queryClient = useQueryClient();

  interface JoinChatProps {
    roomId: string;
    password?: string;
  }

  return useMutation({
    mutationFn: (data: JoinChatProps) => joinChat(data, token || ""),
    onSuccess: () => {
      toast({
        title: "Salon rejoint avec succès !",
        variant: "success",
        logo: <BadgeCheck size={30} />,
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
