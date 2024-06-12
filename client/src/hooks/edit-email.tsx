import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";
import { BadgeCheck, Siren } from "lucide-react";
import { useUserStore } from "@/store/user.store";
import { editEmail } from "@/services/User";

export const useEditEmailMutation = () => {
  const { token, logout } = useUserStore((state) => state);
  const queryClient = useQueryClient();


  return useMutation({
    mutationFn: (email: string) => editEmail(email, token || ""),
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
        toast({
          title: "Token Expiré,",
          description: "Veuillez vous reconnecter.",
          variant: "destructive",
          logo: <Siren size={30} />,
        });
        logout();
      } else {
        console.log(error.message);
      }
    },
  });
};
