import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useUserStore } from "@/store/user.store";
import { getChats } from "@/services/Chat";
import { toast } from "@/components/ui/use-toast";
import { Siren } from "lucide-react";

const useFetchChats = () => {
  const { token, logout } = useUserStore((state) => state);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["chat"],
    queryFn: async () => getChats(token || ""),
  });

  useEffect(() => {
    if (isError && error) {
      toast({
        title: "Erreur",
        description: error.message,
        variant: "destructive",
        logo: <Siren size={30} />,
      });
      logout();
    }
  }, [isError, error, logout]);

  return { data, isLoading };
};

export default useFetchChats;
