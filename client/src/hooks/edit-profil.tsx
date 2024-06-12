import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";
import { BadgeCheck, Siren } from "lucide-react";
import { useUserStore } from "@/store/user.store";
import { editProfile } from "@/services/User";

export const useEditUserMutation = () => {
  const { token, logout } = useUserStore((state) => state);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: {}) => editProfile(data, token || ""),
    onSuccess: () => {
      toast({
        title: "Profil modifié avec succès !",
        variant: "success",
        logo: <BadgeCheck size={30} />,
      });
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error) => {
      if (error.message === "Token expiré !") {
        toast({
          title: "Token Expiré,",
          description: "Veuillez vous reconnecter.",
          variant: "destructive",
          logo: <Siren size={30} />,
        });
        logout();
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
