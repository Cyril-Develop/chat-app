import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/Icons";

export const handleTokenExpiration = async (logout: () => void) => {
  toast({
    title: "Session expirée",
    description: "Veuillez vous reconnecter.",
    variant: "destructive",
    logo: <Icons.alert />,
  });
  logout();
};
