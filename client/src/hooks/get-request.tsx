import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/Icons";
import { useUserStore } from "@/store/user.store";
import { getFriendRequest } from "@/services/User";
import { handleTokenExpiration } from "@/utils/token-expiration";
import { useSocketStore } from "@/store/socket.store";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";


const useGetRequest = () => {
  const { token, logout } = useUserStore((state) => state);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["request"],
    queryFn: async () => getFriendRequest(token),
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

export default useGetRequest;
