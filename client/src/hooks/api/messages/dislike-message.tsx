import { Icons } from "@/components/Icons";
import { toast } from "@/components/ui/use-toast";
import { dislikeMessage } from "@/services/Message";
import { useAuthStore } from "@/store/auth.store";
import { useRoomStore } from "@/store/room.store";
import { useSocketStore } from "@/store/socket.store";
import { ApiError } from "@/types/api";
import { handleApiError } from "@/utils/error-handler";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useDislikeMessageMutation = () => {
  const queryClient = useQueryClient();
  const socket = useSocketStore((state) => state.socket);
  const setAuthentication = useAuthStore((state) => state.setAuthentication);
  const { room, setRoom } = useRoomStore();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({
      type,
      messageId,
    }: {
      type: "private" | "room";
      messageId: number;
    }) => dislikeMessage(type, messageId),
    onSuccess: (response, variables) => {
      toast({
        title: response.message,
        variant: "success",
        logo: <Icons.check />,
      });
      // Envoyé un événement pour que les autres utilisateurs voient l'ajout du like en temps réel
      socket?.emit("dislikeMessage", {
        userId: response.dislike.userId,
        username: response.dislike.username,
        messageId: response.dislike.messageId,
        senderId: response.dislike.senderId,
        roomId: response.dislike.roomId,
        receiverId: response.dislike.receiverId,
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
