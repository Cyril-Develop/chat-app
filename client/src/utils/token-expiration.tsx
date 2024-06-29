import { toast } from "@/components/ui/use-toast";
import { Siren } from "lucide-react";

export const handleTokenExpiration = async (logout: () => void) => {
  toast({
    title: "Token Expiré",
    description: "Veuillez vous reconnecter.",
    variant: "destructive",
    logo: <Siren size={30} />,
  });
  logout();
};
