import { Icons } from "@/components/Icons";
import { toast } from "@/components/ui/use-toast";
import { useSendNotificationByEmailMutation } from "@/hooks/send-notification-email";
import { sendFriendRequest } from "@/services/User";
import { useAuthStore } from "@/store/auth.store";
import { useRoomStore } from "@/store/room.store";
import { useSocketStore } from "@/store/socket.store";
import { ApiError } from "@/types/api";
import { handleApiError } from "@/utils/error-handler";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useSendRequestMutation = () => {
  const { socket } = useSocketStore();
  const { mutate: sendNotificationByEmailMutation } =
    useSendNotificationByEmailMutation();
  const { setAuthentication } = useAuthStore();
  const queryClient = useQueryClient();
  const { room, setRoom } = useRoomStore();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (receiverId: number) => sendFriendRequest(receiverId),
    onSuccess: (data) => {
      toast({
        title: data.message,
        variant: "success",
        logo: <Icons.check />,
      });
      socket?.emit("sendFriendRequest", data.newRequest);
      if (data.newRequest.receiver.notification === "accept") {
        sendNotificationByEmailMutation({
          receiverId: data.newRequest.receiver.id,
          type: "Friend request",
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
