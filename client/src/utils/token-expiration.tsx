import { useRoomStore } from "@/store/room.store";
import { leaveChat } from "@/services/Chat";
import { toast } from "@/components/ui/use-toast";
import { Siren } from "lucide-react";

export const handleTokenExpiration = async (token: string, logout: () => void) => {
  const { room, setRoom } = useRoomStore.getState(); 

  console.log(room);
  console.log(token);

  try {
    if (room) {
      await leaveChat(room, token || "");
      setRoom(null);
    }
  } catch (error) {
    console.error("Impossible de quitter le salon:", error);
  } finally {
    toast({
      title: "Token Expiré",
      description: "Veuillez vous reconnecter.",
      variant: "destructive",
      logo: <Siren size={30} />,
    });
    logout();
  }
};
