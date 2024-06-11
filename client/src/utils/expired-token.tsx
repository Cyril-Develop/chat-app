import { toast } from "@/components/ui/use-toast";
import { Siren } from "lucide-react";

const expiredToken = (logout: () => void) => {
  toast({
    title: "Token Expiré,",
    description: "Veuillez vous reconnecter.",
    variant: "destructive",
    logo: <Siren size={30} />,
  });
  logout();
};

export default expiredToken;
