import { rejectFriendRequest } from "@/services/User";
import { useAuthStore } from "@/store/auth.store";
import { useRoomStore } from "@/store/room.store";
import { ApiError } from "@/types/api";
import { handleApiError } from "@/utils/error-handler";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useRejectFriendRequestMutation = () => {
  const queryClient = useQueryClient();
  const { room, setRoom } = useRoomStore();
  const navigate = useNavigate();
  const { setAuthentication } = useAuthStore();

  return useMutation({
    mutationFn: (contactId: number) => rejectFriendRequest(contactId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["friendRequests"] });
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
