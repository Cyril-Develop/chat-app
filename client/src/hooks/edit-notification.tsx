import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";
import { BadgeCheck, Siren } from "lucide-react";
import { useUserStore } from "@/store/user.store";
import { editNotification } from "@/services/User";

export const useEditNotificationMutation = () => {
  const { token, logout } = useUserStore((state) => state);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (notification: string) =>
      editNotification(notification, token || ""),
    onSuccess: () => {
      toast({
        title: "Changement pris en compte !",
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
