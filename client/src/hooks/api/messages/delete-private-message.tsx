import { Icons } from "@/components/Icons";
import { toast } from "@/components/ui/use-toast";
import { deletePrivateMessage } from "@/services/Message";
import { useAuthStore } from "@/store/auth.store";
import { useRoomStore } from "@/store/room.store";
import { useSocketStore } from "@/store/socket.store";
import { ApiError } from "@/types/api";
import { handleApiError } from "@/utils/error-handler";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useDeletePrivateMessageMutation = () => {
  const queryClient = useQueryClient();
  const socket = useSocketStore((state) => state.socket);
  const setAuthentication = useAuthStore((state) => state.setAuthentication);
  const { room, setRoom } = useRoomStore();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (messageId: number) => deletePrivateMessage(messageId),
    onSuccess: (data) => {
      toast({
        title: data.message,
        variant: "success",
        logo: <Icons.check />,
      });
      socket?.emit("deletePrivateMessage", data.messageId);
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
