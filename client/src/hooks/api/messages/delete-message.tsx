import { Icons } from "@/components/Icons";
import { toast } from "@/components/ui/use-toast";
import { deleteMessage } from "@/services/Message";
import { useAuthStore } from "@/store/auth.store";
import { useRoomStore } from "@/store/room.store";
import { useSocketStore } from "@/store/socket.store";
import { ApiError } from "@/types/api";
import { handleApiError } from "@/utils/error-handler";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useDeleteMessageMutation = () => {
  const { room, setRoom } = useRoomStore();
  const { id: roomId } = room || {};
  const { socket } = useSocketStore();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { setAuthentication } = useAuthStore();

  return useMutation({
    mutationFn: (messageId: number) => deleteMessage(messageId),
    onSuccess: (data) => {
      toast({
        title: data.message,
        variant: "success",
        logo: <Icons.check />,
      });
      socket?.emit("deleteMessage", roomId);
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
