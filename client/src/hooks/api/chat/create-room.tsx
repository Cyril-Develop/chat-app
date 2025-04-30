import { createRoom } from "@/services/Chat";
import { useAuthStore } from "@/store/auth.store";
import { useRoomStore } from "@/store/room.store";
import { useSocketStore } from "@/store/socket.store";
import { ApiError } from "@/types/api";
import { CreateRoomProps } from "@/types/room";
import { handleApiError } from "@/utils/error-handler";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useRoomTransitionMutation } from "@/hooks/api/chat/room-transition";

export const useCreateRoomMutation = () => {
  const { room, setRoom } = useRoomStore();
  const socket = useSocketStore((state) => state.socket);
  const navigate = useNavigate();
  const setAuthentication = useAuthStore((state) => state.setAuthentication);
  const queryClient = useQueryClient();
  const { transitionToRoom } = useRoomTransitionMutation();

  return useMutation({
    mutationFn: (data: CreateRoomProps) => createRoom(data),
    onSuccess: (data) => {
      transitionToRoom(
        { roomId: data.id, roomName: data.name, password: data.password },
        room?.id
      );
      socket?.emit("createRoom", data.createdBy);
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
