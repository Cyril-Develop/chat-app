import { toast } from "@/components/ui/use-toast";
import { deleteUserAccount } from "@/services/User";
import { Icons } from "@/components/Icons";

const handleDeleteUserAccount = async (
  logout: () => void,
  token: string,
  userId: number
) => {
  try {
    const response = await deleteUserAccount(token, userId);

    // Vérifier si l'utilisateur supprimé est lui-même
    if (response.selfDelete) {
      toast({
        title: "Compte supprimé avec succès.",
        description: "Nous espérons vous revoir bientôt.",
        variant: "success",
        logo: <Icons.check />,
      });
      logout();
    } else {
      toast({
        description: "L'utilisateur a été supprimé avec succès.",
        variant: "success",
        logo: <Icons.check />,
      });
    }
  } catch (error: any) {
    if (error.message === "Token expiré !") {
      toast({
        title: "Token Expiré",
        description: "Veuillez vous reconnecter.",
        variant: "destructive",
        logo: <Icons.alert />,
      });
      logout();
    } else if (error.message === "Action non autorisée !") {
      toast({
        title: "Action non autorisée",
        description: error.message,
        variant: "destructive",
        logo: <Icons.alert />,
      });
    } else {
      console.log(error.message);
    }
  }
};

export default handleDeleteUserAccount;
