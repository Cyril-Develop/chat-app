import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useUserStore } from "@/store/user.store";
import { getAllUsers } from "@/services/User";
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/Icons";
import { useHandleTokenExpiration } from "@/hooks/handle-token-expiration";

const useGetUsers = () => {
  const { token} = useUserStore((state) => state);
  const handleExpiration = useHandleTokenExpiration();

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["users"],
    queryFn: async () => getAllUsers(token),
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
  }, [isError, error]);

  return { data, isLoading };
};

export default useGetUsers;
