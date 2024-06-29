import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/Icons";
import { useUserStore } from "@/store/user.store";
import { editProfile } from "@/services/User";
import { handleTokenExpiration } from "@/utils/token-expiration";
import { useRoomStore } from "@/store/room.store";

export const useEditUserMutation = () => {
  const { token, logout } = useUserStore((state) => state);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) => editProfile(formData, token || ""),
    onSuccess: () => {
      toast({
        title: "Profil modifié avec succès !",
        variant: "success",
        logo: <Icons.check />,
      });
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error) => {
      if (error.message === "Token expiré !") {
        handleTokenExpiration(logout);
      } else {
        toast({
          title: "Erreur",
          description: error.message,
          variant: "destructive",
          logo: <Icons.alert />,
        });
      }
    },
  });
};
