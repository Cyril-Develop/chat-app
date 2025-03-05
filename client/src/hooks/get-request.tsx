import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/Icons";
import { useUserStore } from "@/store/user.store";
import { getFriendRequest } from "@/services/User";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useHandleTokenExpiration } from "./handle-token-expiration";

const useGetRequest = () => {
  const { token, logout } = useUserStore((state) => state);
  const handleExpiration = useHandleTokenExpiration();

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["request"],
    queryFn: async () => getFriendRequest(token),
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

export default useGetRequest;
