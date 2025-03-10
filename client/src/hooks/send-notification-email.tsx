import { sendNotificationByEmail } from "@/services/Email";
import { useAuthStore } from "@/store/auth.store";
import { useRoomStore } from "@/store/room.store";
import { ApiError } from "@/types/api";
import { handleApiError } from "@/utils/error-handler";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useSendNotificationByEmailMutation = () => {
  const { setAuthentication } = useAuthStore();
  const queryClient = useQueryClient();
  const { room, setRoom } = useRoomStore();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: ({
      receiverId,
      type,
    }: {
      receiverId: number;
      type: "Friend request" | "Private message";
    }) => sendNotificationByEmail({ receiverId, type }),
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
