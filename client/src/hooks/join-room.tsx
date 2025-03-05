import { useMutation } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/Icons";
import { useUserStore } from "@/store/user.store";
import { useRoomStore } from "@/store/room.store";
import { joinRoom } from "@/services/Chat";
import { useSocketStore } from "@/store/socket.store";
import useGetUser from "./get-user";
import { getUserId } from "@/utils/get-userId";
import { JoinRoomProps } from "@/types/room";
import { useContactStore } from "@/store/contact.store";
import { useHandleTokenExpiration } from "@/hooks/handle-token-expiration";

export const useJoinRoomMutation = () => {
  const { token, statut } = useUserStore((state) => state);
  const { setRoom } = useRoomStore();
  const { socket } = useSocketStore((state) => state);
  const userId = getUserId();
  const { data: currentUser } = useGetUser(userId);
  const { contactId, setContactId } = useContactStore();
  const handleTokenExpiration = useHandleTokenExpiration();

  return useMutation({
    mutationFn: (data: JoinRoomProps) => joinRoom(data, token),
    onSuccess: (data) => {
      toast({
        title: data.message,
        variant: "success",
        logo: <Icons.check />,
      });
      setRoom({ id: data.roomId, name: data.roomName });
      // Reset contactId when joining a new room for leaving the previous private chat
      if (contactId) {
        setContactId(null);
      }
      socket?.emit(
        "joinRoom",
        data.roomId,
        currentUser.id,
        currentUser.username,
        currentUser.profileImage,
        statut
      );
    },
    onError: (error) => {
      if (error.message === "Session expirée, veuillez vous reconnecter") {
        handleTokenExpiration();
      }
    },
  });
};
