import { Icons } from "@/components/Icons";
import { toast } from "@/components/ui/use-toast";
import { joinChat, leaveRoom } from "@/services/Chat";
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

/**
 * Hook combiné pour gérer la transition entre les salons de manière atomique
 */
export const useRoomTransitionMutation = () => {
  const { room, setRoom } = useRoomStore();
  const { socket } = useSocketStore();
  const visible = useAuthStore((state) => state.visible);
  const { data: currentUser } = useGetUser();
  const { contactId, setContactId } = useContactStore();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { setAuthentication } = useAuthStore();

  // Mutation pour quitter un salon
  const leaveMutation = useMutation({
    mutationFn: (roomId: number) => leaveRoom(roomId),
    onSuccess: (data) => {
      // Émet l'événement socket pour quitter la salle
      socket?.emit("leaveRoom", data.roomId);
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

  // Mutation pour rejoindre un salon
  const joinMutation = useMutation({
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
      // Si une discussion privée est ouverte, on la ferme
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

  // Fonction principale qui gère la transition entre les salles
  const transitionToRoom = async (
    newRoomData: JoinRoomProps | null,
    currentRoomId?: number | null
  ) => {
    try {
      // Si l'utilisateur est actuellement dans un salon et qu'on lui demande d'en rejoindre un nouveau
      if (currentRoomId) {
        // Quitter d'abord la salle actuelle
        await leaveMutation.mutateAsync(currentRoomId);

        // Si on souhaite simplement quitter le salon sans en rejoindre un nouveau
        if (!newRoomData) {
          setRoom(null);
          return;
        }
      }

      // Si un nouveau salon est spécifié, le rejoindre après avoir quitté l'ancien
      if (newRoomData) {
        await joinMutation.mutateAsync(newRoomData);
      }
    } catch (error) {
      // Les erreurs sont déjà gérées dans les hooks individuels
      console.error("Erreur lors de la transition entre salons:", error);
    }
  };

  return {
    transitionToRoom,
    isLoading: leaveMutation.isPending || joinMutation.isPending,
    isError: leaveMutation.isError || joinMutation.isError,
    error: leaveMutation.error || joinMutation.error,
  };
};
