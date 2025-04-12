import { Icons } from "@/components/Icons";
import { toast } from "@/components/ui/use-toast";
import { joinChat } from "@/services/Chat";
import { useAuthStore } from "@/store/auth.store";
import { useContactStore } from "@/store/contact.store";
import { useRoomStore } from "@/store/room.store";
import { useSocketStore } from "@/store/socket.store";
import { ApiError } from "@/types/api";
import { JoinRoomProps } from "@/types/room";
import { handleApiError } from "@/utils/error-handler";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import useGetUser from "@/hooks/api/user/get-current-user";

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
    mutationFn: (data: JoinRoomProps) => joinChat(data),
    onSuccess: (data) => {
      toast({
        title: data.message,
        variant: "success",
        logo: <Icons.check />,
      });
      setRoom({ id: data.roomId, name: data.roomName });
      queryClient.invalidateQueries({
        queryKey: ["messages-room", data.roomId],
      });
      // Reset contactId when joining a new room for leaving the previous private chat
      if (contactId) {
        setContactId(null);
      }
      socket?.emit(
        "joinRoom",
        data.roomId,
        currentUser.id,
        currentUser.username,
        currentUser.sex,
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
