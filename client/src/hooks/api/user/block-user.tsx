import { Icons } from "@/components/Icons";
import { toast } from "@/components/ui/use-toast";
import { blockUser } from "@/services/User";
import { useAuthStore } from "@/store/auth.store";
import { useRoomStore } from "@/store/room.store";
import { useSocketStore } from "@/store/socket.store";
import { ApiError } from "@/types/api";
import { handleApiError } from "@/utils/error-handler";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useBlockUserMutation = () => {
  const { socket } = useSocketStore();
  const { setAuthentication } = useAuthStore();
  const queryClient = useQueryClient();
  const { room, setRoom } = useRoomStore();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (contactId: number | null) => blockUser(contactId),
    onSuccess: (data) => {
      toast({
        title: data.message,
        variant: "success",
        logo: <Icons.check />,
      });
      // On émet l'événement pour mettre à jour la liste des utilisateurs concernés
      socket?.emit("removeFriend", data.userId, data.contactId);
      // On émet l'événement pour mettre à jour la liste des utilisateurs
      socket?.emit("blockUser", data.userId, data.contactId);
      queryClient.invalidateQueries({ queryKey: ["blocked-users"] });
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
