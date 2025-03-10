import { Icons } from "@/components/Icons";
import { toast } from "@/components/ui/use-toast";
import { joinRoom } from "@/services/Chat";
import { useAuthStore } from "@/store/auth.store";
import { useContactStore } from "@/store/contact.store";
import { useRoomStore } from "@/store/room.store";
import { useSocketStore } from "@/store/socket.store";
import { JoinRoomProps } from "@/types/room";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useGetUser from "./get-current-user";
import { ApiError } from "@/types/api";
import { handleApiError } from "@/utils/error-handler";
import { useNavigate } from "react-router-dom";

export const useJoinRoomMutation = () => {
  const { room, setRoom } = useRoomStore();
  const { socket } = useSocketStore((state) => state);
  const visible = useAuthStore((state) => state.visible);
  const { data: currentUser } = useGetUser();
  const { contactId, setContactId } = useContactStore();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { setAuthentication } = useAuthStore();

  return useMutation({
    mutationFn: (data: JoinRoomProps) => joinRoom(data),
    onSuccess: (data) => {
      toast({
        title: data.message,
        variant: "success",
        logo: <Icons.check />,
      });
      setRoom({ id: data.roomId, name: data.roomName });
      // Reset contactId when joining a new room for leaving the previous private chat
      if (contactId) {
        setContactId(null);
      }
      socket?.emit(
        "joinRoom",
        data.roomId,
        currentUser.id,
        currentUser.username,
        currentUser.profileImage,
        visible
      );
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
