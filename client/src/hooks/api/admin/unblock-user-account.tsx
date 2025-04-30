import { unblockUserAccount } from "@/services/Admin";
import { useAuthStore } from "@/store/auth.store";
import { useRoomStore } from "@/store/room.store";
import { Icons } from "@/components/Icons";
import { toast } from "@/components/ui/use-toast";
import { ApiError } from "@/types/api";
import { handleApiError } from "@/utils/error-handler";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useUnblockUserAccountMutation = () => {
  const queryClient = useQueryClient();
  const setAuthentication = useAuthStore((state) => state.setAuthentication);
  const { room, setRoom } = useRoomStore();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (userId: number) => unblockUserAccount(userId),
    onSuccess: (data) => {
      toast({
        title: data.message,
        variant: "success",
        logo: <Icons.check />,
      });
      // Actualise la liste des utilisateurs pour l'admin
      queryClient.invalidateQueries({ queryKey: ["users-dashboard"] });
    },
    onError: (error: ApiError) => {
      handleApiError(error, {
        room,
        setRoom,
        setAuthentication,
        queryClient,
        navigate,
      });
    },
  });
};
