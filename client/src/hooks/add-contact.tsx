import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/Icons";
import { useUserStore } from "@/store/user.store";
import { addContact } from "@/services/User";
import { handleTokenExpiration } from "@/utils/token-expiration";

export const useAddContactMutation = () => {
  const { token, logout } = useUserStore((state) => state);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (contactId: string) => addContact(contactId, token || ""),
    onSuccess: () => {
      toast({
        title: "Contact ajouté à votre liste d'amis",
        variant: "success",
        logo: <Icons.check />,
      });
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error) => {
      if (error.message === "Token expiré !") {
        handleTokenExpiration(logout);
      }
      toast({
        title: error.message,
        variant: "destructive",
        logo: <Icons.alert />,
      });
    },
  });
};
