import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/Icons";
import { useUserStore } from "@/store/user.store";
import EditProfile from "./edit-profile";
import Alert from "@/components/Alert";
import { deleteAccount } from "@/services/User";
import { toast } from "./ui/use-toast";
import { Siren, OctagonAlert, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DropDown = () => {
  const navigate = useNavigate();
  const logout = useUserStore((state) => state.useLogout);
  const { token } = useUserStore((state) => state.user);

  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isDeleteAccountOpen, setIsDeleteAccountOpen] = useState(false);

  const handleEditProfileClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setIsEditProfileOpen(true);
  };

  const handleEditProfileClose = () => {
    setIsEditProfileOpen(false);
  };

  const handleDeleteAccountClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDeleteAccountOpen(true);
  };

  const handleDeleteAccountClose = () => {
    setIsDeleteAccountOpen(false);
  };

  const handleDeleteAccount = async () => {
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

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2 p-2 text-xl font-semibold rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-secondary hover:text-foreground sm:hover:text-secondary-foreground text-primary-foreground dark:text-foreground">
          <Icons.menu className="w-6 h-6" />
          <span className="hidden-text" title="Menu">
            Menu
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {/* <DropdownMenuItem onClick={handleEditProfileClick}>
            <Icons.user className="w-6 h-6" />
            Modifier le profil
          </DropdownMenuItem> */}
          <DropdownMenuItem onClick={() => navigate("/settings")}>
            <Icons.settings className="w-6 h-6" />
            Paramètres
          </DropdownMenuItem>
          <DropdownMenuItem onClick={logout}>
            <Icons.logout />
            Se déconnecter
          </DropdownMenuItem>
          <DropdownMenuItem
            className="focus:bg-red-500 focus:text-white"
            onClick={handleDeleteAccountClick}
          >
            <Icons.delete className="w-6 h-6" />
            Supprimer le compte
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {isEditProfileOpen && <EditProfile onClose={handleEditProfileClose} />}
      {isDeleteAccountOpen && (
        <Alert
          onClose={handleDeleteAccountClose}
          title="Supprimer le compte"
          description="Êtes-vous sûr de vouloir supprimer votre compte? Cette action est irréversible."
          button="Supprimer"
          buttonVariant="destructive"
          action={handleDeleteAccount}
        />
      )}
    </>
  );
};

export default DropDown;
