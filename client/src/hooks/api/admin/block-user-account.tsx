import { blockUserAccount } from "@/services/Admin";
import { useAuthStore } from "@/store/auth.store";
import { useRoomStore } from "@/store/room.store";
//import { Icons } from "@/components/Icons";
//import { toast } from "@/components/ui/use-toast";
//import { useSocketStore } from "@/store/socket.store";
import { ApiError } from "@/types/api";
import { handleApiError } from "@/utils/error-handler";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { BlockUserAccountParams } from "@/types/admin";

export const useBlockUserAccountMutation = () => {
  const queryClient = useQueryClient();
  const { setAuthentication } = useAuthStore();
  const { room, setRoom } = useRoomStore();
  const navigate = useNavigate();
  // const { socket } = useSocketStore();

  return useMutation({
    mutationFn: ({ userId, duration, reason }: BlockUserAccountParams) =>
      blockUserAccount({ userId, duration, reason }),
    onSuccess: () => {
      // toast({
      //   title: data.message,
      //   variant: "success",
      //   logo: <Icons.check />,
      // });
      //socket?.emit("deleteAccount", data.affectedUserIds);
      // Actualise la liste des utilisateurs pour l'utilisateur courant
      //queryClient.invalidateQueries({ queryKey: ["users"] });
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
