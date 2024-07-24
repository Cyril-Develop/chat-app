import { toast } from "@/components/ui/use-toast";
import { deleteAccount } from "@/services/User";
import { Icons } from "@/components/Icons";

const handleDeleteAccount = async (logout: () => void, token: string) => {
  try {
    await deleteAccount(token);
    toast({
      title: "Compte supprimé avec succès.",
      description: "Nous espérons vous revoir bientôt.",
      variant: "success",
      logo: <Icons.check />,
    });
    logout();
  } catch (error: any) {
    if (error.message === "Token expiré !") {
      toast({
        title: "Token Expiré,",
        description: "Veuillez vous reconnecter.",
        variant: "destructive",
        logo: <Icons.alert />,
      });
      logout();
    } else if (error.message === "Action non autorisée !") {
      toast({
        title: "Token invalide,",
        description: error.message,
        variant: "destructive",
        logo: <Icons.alert />,
      });
    } else console.log(error.message);
  }
};

export default handleDeleteAccount;
