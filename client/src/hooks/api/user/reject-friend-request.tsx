import { rejectFriendRequest } from "@/services/User";
import { useAuthStore } from "@/store/auth.store";
import { useNotificationStore } from "@/store/notification.store";
import { useRoomStore } from "@/store/room.store";
import { useSocketStore } from "@/store/socket.store";
import { ApiError } from "@/types/api";
import { handleApiError } from "@/utils/error-handler";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useRejectFriendRequestMutation = () => {
  const queryClient = useQueryClient();
  const clearRequestFromSender = useNotificationStore(
    (state) => state.clearNotificationsForContact
  );
  const { room, setRoom } = useRoomStore();
  const navigate = useNavigate();
  const setAuthentication = useAuthStore((state) => state.setAuthentication);
  const socket = useSocketStore((state) => state.socket);

  return useMutation({
    mutationFn: (contactId: number) => rejectFriendRequest(contactId),
    onSuccess: (data) => {
      socket?.emit("rejectFriendRequest");
      clearRequestFromSender(data.contactId);
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
