import { Icons } from "@/components/Icons";
import { toast } from "@/components/ui/use-toast";
import { unblockUser } from "@/services/User";
import { useAuthStore } from "@/store/auth.store";
import { useRoomStore } from "@/store/room.store";
import { ApiError } from "@/types/api";
import { handleApiError } from "@/utils/error-handler";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useSocketStore } from "@/store/socket.store";

export const useUnblockUserMutation = () => {
  const setAuthentication = useAuthStore((state) => state.setAuthentication);
  const queryClient = useQueryClient();
  const { room, setRoom } = useRoomStore();
  const navigate = useNavigate();
  const socket = useSocketStore((state) => state.socket);

  return useMutation({
    mutationFn: (blockedId: number | null) => unblockUser(blockedId),
    onSuccess: (data) => {
      toast({
        title: data.message,
        variant: "success",
        logo: <Icons.check />,
      });
      socket?.emit("unblockUser", data.userId, data.unblockedId);
      queryClient.invalidateQueries({ queryKey: ["blocked-users"] });
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
