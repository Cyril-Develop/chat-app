import { useRoomStore } from "@/store/room.store";
import { leaveRoom } from "@/services/Chat";
import { useUserStore } from "@/store/user.store";
import { useNavigate } from "react-router-dom";

export const useHandleLogout = () => {
  const { room, setRoom } = useRoomStore();
  const { token, logout } = useUserStore((state) => state);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      if (room && room.id) {
        const { id: roomId } = room;
        await leaveRoom(roomId, token);
        setRoom(null);
      }
      logout();
      navigate("/chateo/login");
    } catch (error) {
      console.log(error);
    }
  };

  return handleLogout;
};
