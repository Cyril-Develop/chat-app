import { useMutation } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/Icons";
import { useUserStore } from "@/store/user.store";
import { addContact } from "@/services/User";
import { handleTokenExpiration } from "@/utils/token-expiration";
import { useSocketStore } from "@/store/socket.store";

export const useAddContactMutation = () => {
  const { token, logout } = useUserStore((state) => state);
  const { socket } = useSocketStore();

  return useMutation({
    mutationFn: (contactId: string) => addContact(contactId, token || ""),
    onSuccess: (data) => {
      toast({
        title: "Contact ajouté à votre liste d'amis",
        variant: "success",
        logo: <Icons.check />,
      });
      console.log("data", data);
      
      socket?.emit("addFriend", data.userId, data.friend.id, data.friend.username);
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
