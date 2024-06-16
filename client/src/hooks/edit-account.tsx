import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";
import { BadgeCheck, Siren } from "lucide-react";
import { useUserStore } from "@/store/user.store";
import { editAccount } from "@/services/User";
import expiredToken from "@/utils/expired-token";

export const useEditAccountMutation = () => {
  const { token, logout } = useUserStore((state) => state);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (email: string) => editAccount(email, token || ""),
    onSuccess: () => {
      toast({
        title: "Adresse email modifiée avec succès !",
        variant: "success",
        logo: <BadgeCheck size={30} />,
      });
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error) => {
      if (error.message === "Token expiré !") {
        expiredToken(logout);
      } else {
        toast({
          title: "Erreur",
          description: error.message,
          variant: "destructive",
          logo: <Siren size={30} />,
        });
      }
    },
  });
};
