import { updateRoomDescription } from "@/services/Chat";
import { useAuthStore } from "@/store/auth.store";
import { useRoomStore } from "@/store/room.store";
import { useSocketStore } from "@/store/socket.store";
import { ApiError } from "@/types/api";
import { updateRoomDescriptionProps } from "@/types/room";
import { handleApiError } from "@/utils/error-handler";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useUpdateRoomDescriptionMutation = () => {
  const { room, setRoom } = useRoomStore();
  const { socket } = useSocketStore();
  const navigate = useNavigate();
  const { setAuthentication } = useAuthStore();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ roomId, description }: updateRoomDescriptionProps) =>
      updateRoomDescription(roomId, description),
    onSuccess: (data) => {
      socket?.emit("updateRoom", data.chatRoom.id, data.chatRoom.createdBy);
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
