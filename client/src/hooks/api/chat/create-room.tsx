import { useJoinRoomMutation } from "@/hooks/api/chat/join-chat";
import { createRoom } from "@/services/Chat";
import { useAuthStore } from "@/store/auth.store";
import { useRoomStore } from "@/store/room.store";
import { useSocketStore } from "@/store/socket.store";
import { ApiError } from "@/types/api";
import { CreateRoomProps } from "@/types/room";
import { handleApiError } from "@/utils/error-handler";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useCreateRoomMutation = () => {
  const { room, setRoom } = useRoomStore();
  const { mutate: joinRoom } = useJoinRoomMutation();
  const { socket } = useSocketStore();
  const navigate = useNavigate();
  const { setAuthentication } = useAuthStore();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateRoomProps) => createRoom(data),
    onSuccess: (data) => {
      joinRoom({
        roomId: data.id,
        roomName: data.name,
        password: data.password,
      });
      setRoom({ id: data.id, name: data.name });
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
