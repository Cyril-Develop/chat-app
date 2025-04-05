import { Icons } from "@/components/Icons";
import { toast } from "@/components/ui/use-toast";
import { likeMessage } from "@/services/Message";
import { useAuthStore } from "@/store/auth.store";
import { useRoomStore } from "@/store/room.store";
import { useSocketStore } from "@/store/socket.store";
import { ApiError } from "@/types/api";
import { handleApiError } from "@/utils/error-handler";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useLikeMessageMutation = () => {
  const queryClient = useQueryClient();
  const { socket } = useSocketStore();
  const { setAuthentication } = useAuthStore();
  const { room, setRoom } = useRoomStore();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({
      type,
      messageId,
    }: {
      type: "private" | "room";
      messageId: number;
    }) => likeMessage(type, messageId),
    onSuccess: (data, variables) => {
      toast({
        title: data.message,
        variant: "success",
        logo: <Icons.check />,
      });
      // Envoyé un événement pour que les autres utilisateurs voient l'ajout du like en temps réel (room ou message privé)
      socket?.emit("likeMessage", {
        userId: data.like.userId,
        username: data.like.username,
        messageId: data.like.messageId,
        roomId: data.like.roomId,
        receiverId: data.like.receiverId,
        senderId: data.like.senderId,
      });

      if (variables.type === "room") {
        queryClient.invalidateQueries({ queryKey: ["messages-room"] });
      } else {
        queryClient.invalidateQueries({ queryKey: ["messages-private"] });
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
