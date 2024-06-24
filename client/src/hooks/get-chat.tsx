import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useUserStore } from "@/store/user.store";
import { getChat } from "@/services/Chat";
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/Icons";

interface fetchChatProps {
  roomId: number;
}

const useFetchChat = ({ roomId }: fetchChatProps) => {
  const { token, logout } = useUserStore((state) => state);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["chat", roomId],
    queryFn: async () => getChat(roomId, token || ""),
  });

  useEffect(() => {
    if (isError && error) {
      toast({
        title: "Erreur",
        description: error.message,
        variant: "destructive",
        logo: <Icons.alert />,
      });
      logout();
    }
  }, [isError, error, logout]);

  return { data, isLoading };
};

export default useFetchChat;
