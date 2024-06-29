import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/Icons";
import { useUserStore } from "@/store/user.store";
import { removeContact } from "@/services/User";
import { handleTokenExpiration } from "@/utils/token-expiration";

export const useRemoveContactMutation = () => {
  const { token, logout } = useUserStore((state) => state);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (contactId: string) => removeContact(contactId, token || ""),
    onSuccess: () => {
      toast({
        title: "Contact retiré de votre liste d'amis",
        variant: "success",
        logo: <Icons.check />,
      });
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error) => {
      if (error.message === "Token expiré !") {
        handleTokenExpiration(logout);
      }
    },
  });
};
