import { useSendNotificationByEmailMutation } from "@/hooks/send-notification-email";
import { sendPrivateMessage } from "@/services/Message";
import { useAuthStore } from "@/store/auth.store";
import { useRoomStore } from "@/store/room.store";
import { useSocketStore } from "@/store/socket.store";
import { ApiError } from "@/types/api";
import { handleApiError } from "@/utils/error-handler";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useSendPrivateMessageMutation = () => {
  const { socket } = useSocketStore();
  const { setAuthentication } = useAuthStore();
  const { mutate: sendNotificationByEmailMutation } =
    useSendNotificationByEmailMutation();
  const queryClient = useQueryClient();
  const { room, setRoom } = useRoomStore();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({
      formData,
      contactId,
    }: {
      formData: FormData;
      contactId: number;
    }) => sendPrivateMessage(formData, contactId),
    onSuccess: (data) => {
      socket?.emit("sendPrivateMessage", {
        createdAt: data.createdAt,
        id: data.id,
        image: data.image,
        isRead: data.isRead,
        message: data.message,
        receiver: {
          id: data.receiver.id,
          username: data.receiver.username,
          profileImage: data.receiver.profileImage,
        },
        user: {
          id: data.user.id,
          username: data.user.username,
          profileImage: data.user.profileImage,
        },
      });
      if (data.receiver.notification === "accept") {
        sendNotificationByEmailMutation({
          receiverId: data.receiver.id,
          type: "Private message",
        });
      }
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
