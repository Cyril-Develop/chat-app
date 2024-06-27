import { leaveChat } from "@/services/Chat";

const leaveChatRoom = async (
  token: string,
  room: number | null,
  setRoom: (value: number | null) => void
) => {
  try {
    if (room) {
      await leaveChat(room, token || "");
      setRoom(null);
    }
  } catch (error) {
    console.error("Impossible de quitter le salon:", error);
  }
};

export default leaveChatRoom;
