import { sendMessage } from "@/services/Message";
import { useRoomStore } from "@/store/room.store";
import { useSocketStore } from "@/store/socket.store";
import { ApiError } from "@/types/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/auth.store";
import { handleApiError } from "@/utils/error-handler";

export const useSendMessageMutation = () => {
  const { socket } = useSocketStore();
  const { room, setRoom } = useRoomStore();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { setAuthentication } = useAuthStore();

  return useMutation({
    mutationFn: (formData: FormData) => sendMessage(formData),
    onSuccess: (data) => {
      socket?.emit("sendMessage", {
        id: data.id,
        userId: data.user.id,
        username: data.user.username,
        profileImage: data.user.profileImage,
        roomId: data.chatRoomId,
        message: data.message,
        image: data.image,
        createdAt: data.createdAt,
      });
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
