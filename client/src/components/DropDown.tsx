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
import { useTheme } from "@/components/theme-provider";
import { ThemeMod } from "./mode-toggle";
import Alert from "@/components/Alert";
import { deleteAccount } from "@/services/Auth";

const DropDown = () => {
  const logout = useUserStore((state) => state.useLogout);
  const { id } = useUserStore((state) => state.user);
  
  const { theme, setTheme } = useTheme();
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isDeleteAccountOpen, setIsDeleteAccountOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

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

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2 p-2 text-xl font-semibold rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-secondary hover:text-foreground sm:hover:text-secondary-foreground text-primary-foreground dark:text-foreground">
          <Icons.settings className="w-6 h-6" />
          <span className="hidden-text">Paramètres</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={toggleTheme}>
            <ThemeMod theme={theme} />
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleEditProfileClick}>
            <Icons.user className="w-6 h-6" />
            <span className="hidden-text">Éditer profil</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={logout}>
            <Icons.logout />
            Se déconnecter
            <span className="sr-only">Se déconnecter</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="focus:bg-red-500 focus:text-white"
            onClick={handleDeleteAccountClick}
          >
            <Icons.delete className="w-6 h-6" />
            Supprimer le compte
            <span className="sr-only">Supprimer le compte</span>
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
          deleteAccount={() => deleteAccount(id)}
        />
      )}
    </div>
  );
};

export default DropDown;
