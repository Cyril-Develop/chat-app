import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/Icons";
import { useUserStore } from "@/store/user.store";
import { getPrivateMessages } from "@/services/Message";
import { handleTokenExpiration } from "@/utils/token-expiration";
import { useSocketStore } from "@/store/socket.store";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";


const useGetPrivateMessage = () => {
  const { token, logout } = useUserStore((state) => state);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["privateMessage"],
    queryFn: async () => getPrivateMessages(token),
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

export default useGetPrivateMessage;
