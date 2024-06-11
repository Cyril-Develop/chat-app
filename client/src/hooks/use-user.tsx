import { useEffect, useState } from "react";
import { useUserStore } from "@/store/user.store";
import { getUser } from "@/services/User";
import { UserInfos } from "@/types/types";
import { toast } from "@/components/ui/use-toast";
import { Siren } from "lucide-react";

const useUser = () => {
  const [user, setUser] = useState<UserInfos>();
  const { token } = useUserStore((state) => state);
  const logout = useUserStore((state) => state.logout);

  useEffect(() => {
    if (token !== null) {
      const fetchUser = async () => {
        try {
          const userData = await getUser(token);
          setUser(userData);
        } catch (error: any) {
          console.error(error);
          if (error.message === "Token expiré !") {
            toast({
              title: "Token Expiré,",
              description: "Veuillez vous reconnecter.",
              variant: "destructive",
              logo: <Siren size={30} />,
            });
            logout();
          }
        }
      };

      fetchUser();
    }
  }, [token]);

  return user;
};

export default useUser;
