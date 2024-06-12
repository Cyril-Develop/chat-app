import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useUserStore } from "@/store/user.store";
import { getUser } from "@/services/User";
import { toast } from "@/components/ui/use-toast";
import { Siren } from "lucide-react";

const useFetchUser = () => {
  const { token, logout } = useUserStore((state) => state);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["user"],
    queryFn: async () => getUser(token || ""),
  });

  useEffect(() => {
    if (isError && error) {
      if (error.message === "Token expiré !") {
        toast({
          title: "Token Expiré,",
          description: "Veuillez vous reconnecter.",
          variant: "destructive",
          logo: <Siren size={30} />,
        });
        logout();
      } else {
        console.log(error);
      }
    }
  }, [isError, error, logout]);

  return { data, isLoading };
};

export default useFetchUser;
