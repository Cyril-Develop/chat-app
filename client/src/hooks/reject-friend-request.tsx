import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/Icons";
import { useUserStore } from "@/store/user.store";
import { rejectFriendRequest } from "@/services/User";
import { useHandleTokenExpiration } from "@/hooks/handle-token-expiration";

export const useRejectFriendRequestMutation = () => {
  const { token } = useUserStore((state) => state);
  const queryClient = useQueryClient();
  const handleExpiration = useHandleTokenExpiration();

  return useMutation({
    mutationFn: (contactId: number) => rejectFriendRequest(contactId, token),
    onSuccess: (data) => {
      toast({
        title: data.message,
        variant: "success",
        logo: <Icons.check />,
      });
      queryClient.invalidateQueries({ queryKey: ["friendRequests"] });
    },
    onError: (error) => {
      if (error.message === "Session expirée, veuillez vous reconnecter") {
        handleExpiration();
      }
    },
  });
};
