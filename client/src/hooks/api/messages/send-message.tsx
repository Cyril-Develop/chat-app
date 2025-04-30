import { sendMessage } from "@/services/Message";
import { useRoomStore } from "@/store/room.store";
import { useSocketStore } from "@/store/socket.store";
import { ApiError } from "@/types/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/auth.store";
import { handleApiError } from "@/utils/error-handler";
import { SendMessageSocketProps } from "@/types/message";

export const useSendMessageMutation = () => {
  const socket = useSocketStore((state) => state.socket);
  const { room, setRoom } = useRoomStore();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const setAuthentication = useAuthStore((state) => state.setAuthentication);

  return useMutation({
    mutationFn: ({
      formData,
      roomId,
    }: {
      formData: FormData;
      roomId: number;
    }) => sendMessage(formData, roomId),
    onSuccess: (data: SendMessageSocketProps) => {
      socket?.emit("sendMessage", data.chatRoomId);
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
