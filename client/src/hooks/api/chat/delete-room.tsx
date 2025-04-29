import { Icons } from "@/components/Icons";
import { toast } from "@/components/ui/use-toast";
import { deleteRoom } from "@/services/Chat";
import { useAuthStore } from "@/store/auth.store";
import { useRoomStore } from "@/store/room.store";
import { useSocketStore } from "@/store/socket.store";
import { ApiError } from "@/types/api";
import { handleApiError } from "@/utils/error-handler";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useDeleteRoomMutation = () => {
  const queryClient = useQueryClient();
  const { socket } = useSocketStore();
  const { setAuthentication } = useAuthStore();
  const { room, setRoom } = useRoomStore();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (roomId: number) => deleteRoom(roomId),
    onSuccess: (data) => {
      toast({
        title: data.message,
        variant: "success",
        logo: <Icons.check />,
      });
      socket?.emit("deleteRoom", data.roomId);
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
