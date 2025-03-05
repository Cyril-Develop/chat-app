import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";
import { useUserStore } from "@/store/user.store";
import { editAccount } from "@/services/User";
import { Icons } from "@/components/Icons";
import { useHandleTokenExpiration } from "@/hooks/handle-token-expiration";

export const useEditAccountMutation = () => {
  const { token } = useUserStore((state) => state);
  const queryClient = useQueryClient();
  const handleExpiration = useHandleTokenExpiration();

  return useMutation({
    mutationFn: (email: string) => editAccount(email, token),
    onSuccess: (data) => {
      toast({
        title: data.message,
        variant: "success",
        logo: <Icons.check />,
      });
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error) => {
      if (error.message === "Session expirée, veuillez vous reconnecter") {
        handleExpiration();
      }
    },
  });
};
