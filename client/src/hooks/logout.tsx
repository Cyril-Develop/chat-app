import { useRoomStore } from "@/store/room.store";
import { leaveChat } from "@/services/Chat";
import { useUserStore } from "@/store/user.store";

export const useHandleLogout = () => {
  const { room, setRoom } = useRoomStore();
  const { id : roomId } = room || {};
  const { token, logout } = useUserStore((state) => state);

  const handleLogout = async () => {
    try {
      if (room) {
        await leaveChat(roomId, token);
        setRoom(null);
      }
      logout();
    } catch (error) {
      console.log(error);
    }
  };

  return handleLogout;
};
