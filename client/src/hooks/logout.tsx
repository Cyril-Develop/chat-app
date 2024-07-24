import { useRoomStore } from "@/store/room.store";
import { leaveRoom } from "@/services/Chat";
import { useUserStore } from "@/store/user.store";

export const useHandleLogout = () => {
  const { room, setRoom } = useRoomStore();
  const { token, logout } = useUserStore((state) => state);

  const handleLogout = async () => {
    try {
      if (room && room.id) {
        const { id: roomId } = room;
        await leaveRoom(roomId, token);
        setRoom(null);
      }
      logout();
    } catch (error) {
      console.log(error);
    }
  };

  return handleLogout;
};
