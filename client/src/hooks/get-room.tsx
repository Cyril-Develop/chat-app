import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useUserStore } from "@/store/user.store";
import { getRoom } from "@/services/Chat";
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/Icons";
import { useHandleTokenExpiration } from "@/hooks/handle-token-expiration";

interface GetRoomProps {
  roomId: number;
}

const useGetRoom = ({ roomId }: GetRoomProps) => {
  const { token, logout } = useUserStore((state) => state);
  const handleExpiration = useHandleTokenExpiration();

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["chat", roomId],
    queryFn: async () => getRoom(roomId, token),
  });

  useEffect(() => {
    if (isError && error) {
      if (error.message === "Session expirée, veuillez vous reconnecter") {
        handleExpiration();
        return;
      }

      toast({
        title: "Erreur",
        description: error.message,
        variant: "destructive",
        logo: <Icons.alert />,
      });
    }
  }, [isError, error, logout]);

  return { data, isLoading };
};

export default useGetRoom;
