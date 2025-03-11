import { Icons } from "@/components/Icons";
import { toast } from "@/components/ui/use-toast";
import { deleteAccount } from "@/services/User";
import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "@/store/auth.store";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useRoomStore } from "@/store/room.store";
import { ApiError } from "@/types/api";
import { handleApiError } from "@/utils/error-handler";

export const useDeleteAccountMutation = () => {
  const queryClient = useQueryClient();
  const { room, setRoom } = useRoomStore();
  const navigate = useNavigate();
  const { setAuthentication } = useAuthStore();

  return useMutation({
    mutationFn: () => deleteAccount(),
    onSuccess: (data) => {
      toast({
        title: data.message,
        variant: "success",
        logo: <Icons.check />,
      });
      if (room && room.id) {
        setRoom(null);
      }
      queryClient.invalidateQueries({ queryKey: ["blocked-users"] });
      setAuthentication(false, null);
      queryClient.clear();
      navigate("/chateo/login");
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
