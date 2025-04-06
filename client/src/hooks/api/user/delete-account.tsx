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
import { useSocketStore } from "@/store/socket.store";

// Lorsque l'utilisateur supprime son compte
export const useDeleteAccountMutation = () => {
  const queryClient = useQueryClient();
  const { room, setRoom } = useRoomStore();
  const navigate = useNavigate();
  const { setAuthentication } = useAuthStore();
  const { socket } = useSocketStore();

  return useMutation({
    mutationFn: () => deleteAccount(),
    onSuccess: (data) => {
      toast({
        title: data.message,
        variant: "success",
        logo: <Icons.check />,
      });
      socket?.emit("deleteAccount", data.affectedUserIds);

      if (room && room.id) {
        setRoom(null);
      }

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
