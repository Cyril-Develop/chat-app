import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/Icons";
import { useUserStore } from "@/store/user.store";
import { editProfile } from "@/services/User";
import { useSocketStore } from "@/store/socket.store";
import { useHandleTokenExpiration } from "@/hooks/handle-token-expiration";

export const useEditUserMutation = () => {
  const { token } = useUserStore((state) => state);
  const queryClient = useQueryClient();
  const { socket } = useSocketStore();
  const handleExpiration = useHandleTokenExpiration();

  return useMutation({
    mutationFn: (formData: FormData) => editProfile(formData, token),
    onSuccess: (data) => {
      toast({
        title: data.message,
        variant: "success",
        logo: <Icons.check />,
      });
      socket?.emit("updateUserInfos", data.user);
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error) => {
      if (error.message === "Session expirée, veuillez vous reconnecter") {
        handleExpiration();
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
