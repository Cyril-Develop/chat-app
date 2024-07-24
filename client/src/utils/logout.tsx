import { leaveRoom } from "@/services/Chat";

const leaveChatRoom = async (
  token: string,
  room: number | null,
  setRoom: (value: number | null) => void
) => {
  try {
    if (room) {
      await leaveRoom(room, token);
      setRoom(null);
    }
  } catch (error) {
    console.error("Impossible de quitter le salon:", error);
  }
};

export default leaveChatRoom;
