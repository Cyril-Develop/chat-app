import { toast } from "@/components/ui/use-toast";
import { Siren, OctagonAlert, Check } from "lucide-react";
import { deleteAccount } from "@/services/User";

const handleDeleteAccount = async (logout: () => void, token: string) => {
  try {
    await deleteAccount(token);
    toast({
      title: "Compte supprimé",
      description: "Votre compte a été supprimé avec succès.",
      variant: "success",
      logo: <Check size={30} />,
    });
    logout();
  } catch (error: any) {
    if (error.message === "Token expiré !") {
      toast({
        title: "Token Expiré,",
        description: "Veuillez vous reconnecter.",
        variant: "destructive",
        logo: <Siren size={30} />,
      });
      logout();
    } else if (error.message === "Action non autorisée !") {
      toast({
        title: "Token invalide,",
        description: error.message,
        variant: "destructive",
        logo: <OctagonAlert size={30} />,
      });
    } else console.log(error.message);
  }
};

export default handleDeleteAccount;
