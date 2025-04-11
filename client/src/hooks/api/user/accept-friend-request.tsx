import { Icons } from "@/components/Icons";
import { toast } from "@/components/ui/use-toast";
import { acceptFriendRequest } from "@/services/User";
import { useAuthStore } from "@/store/auth.store";
import { useNotificationStore } from "@/store/notification.store";
import { useRoomStore } from "@/store/room.store";
import { useSocketStore } from "@/store/socket.store";
import { ApiError } from "@/types/api";
import { handleApiError } from "@/utils/error-handler";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useAcceptFriendRequestMutation = () => {
  const { socket } = useSocketStore();
  const { setAuthentication } = useAuthStore();
  const queryClient = useQueryClient();
  const { room, setRoom } = useRoomStore();
  const navigate = useNavigate();
  const { clearRequestFromSender } = useNotificationStore();

  return useMutation({
    mutationFn: (contactId: number) => acceptFriendRequest(contactId),
    onSuccess: (data) => {
      toast({
        title: data.message,
        variant: "success",
        logo: <Icons.check />,
      });
      socket?.emit("acceptFriendRequest", data.user.id, data.friend.id);
      clearRequestFromSender(data.friend.id);
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
