import { useMutation } from "@tanstack/react-query";
import { useUserStore } from "@/store/user.store";
import { createRoom } from "@/services/Chat";
import { handleTokenExpiration } from "@/utils/token-expiration";
import { useJoinRoomMutation } from "@/hooks/join-room";
import { useRoomStore } from "@/store/room.store";
import { useSocketStore } from "@/store/socket.store";
import { CreateRoomProps } from "@/types/room";

export const useCreateRoomMutation = () => {
  const { token, logout } = useUserStore((state) => state);
  const { setRoom } = useRoomStore();
  const joinRoom = useJoinRoomMutation();
  const { socket } = useSocketStore();

  return useMutation({
    mutationFn: (data: CreateRoomProps) => createRoom(data, token),
    onSuccess: (data) => {
      joinRoom.mutate({ roomId: data.id, roomName: data.name, password: data.password });
      setRoom({ id: data.id, name: data.name });
      socket?.emit(
        "createRoom",
        data.id,
        data.name,
        data.isPrivate,
        data.password,
        data.updatedAt,
        data.createdAt,
        data.createdBy
      );
    },
    onError: (error) => {
      if (error.message === "Token expiré !") {
        handleTokenExpiration(logout);
      }
    },
  });
};
