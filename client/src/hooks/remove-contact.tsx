import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/Icons";
import { useUserStore } from "@/store/user.store";
import { removeContact } from "@/services/User";
import { useSocketStore } from "@/store/socket.store";
import { useHandleTokenExpiration } from "@/hooks/handle-token-expiration";

export const useRemoveContactMutation = () => {
  const { token } = useUserStore((state) => state);
  const queryClient = useQueryClient();
  const { socket } = useSocketStore();
  const handleExpiration = useHandleTokenExpiration();

  return useMutation({
    mutationFn: (contactId: number | null) => removeContact(contactId, token),
    onSuccess: (data) => {
      toast({
        title: data.message,
        variant: "success",
        logo: <Icons.check />,
      });
      socket?.emit("removeFriend", data);
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error) => {
      if (error.message === "Session expirée, veuillez vous reconnecter") {
        handleExpiration();
      }
    },
  });
};
