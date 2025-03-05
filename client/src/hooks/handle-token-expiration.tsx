import { useNavigate } from "react-router-dom";
import { useUserStore } from "@/store/user.store";
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/Icons";
import { useQueryClient } from "@tanstack/react-query";

export const useHandleTokenExpiration = () => {
  const { logout } = useUserStore((state) => state);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return () => {
    toast({
      title: "Session expirée",
      description: "Veuillez vous reconnecter.",
      variant: "destructive",
      logo: <Icons.alert />,
    });

    logout();
    queryClient.clear();
    navigate("/chateo/login");
  };
};
