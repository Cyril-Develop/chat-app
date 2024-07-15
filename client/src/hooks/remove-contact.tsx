import { useMutation } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/Icons";
import { useUserStore } from "@/store/user.store";
import { removeContact } from "@/services/User";
import { handleTokenExpiration } from "@/utils/token-expiration";
import { useSocketStore } from "@/store/socket.store";

export const useRemoveContactMutation = () => {
  const { token, logout } = useUserStore((state) => state);
  const { socket } = useSocketStore();

  return useMutation({
    mutationFn: (contactId: string) => removeContact(contactId, token || ""),
    onSuccess: (data) => {
      toast({
        title: "Contact retiré de votre liste d'amis",
        variant: "success",
        logo: <Icons.check />,
      });
      socket?.emit("removeFriend", data.contactId);
    },
    onError: (error) => {
      if (error.message === "Token expiré !") {
        handleTokenExpiration(logout);
      }
    },
  });
};
