import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/Icons";
import { useUserStore } from "@/store/user.store";
import { useNavigate } from "react-router-dom";

const DropDown = () => {
  const navigate = useNavigate();
  const logout = useUserStore((state) => state.useLogout);

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
          <DropdownMenuItem onClick={() => navigate("/")}>
            <Icons.home />
            Accueil
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate("/chat")}>
            <Icons.chat />
            Messagerie
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => navigate("/settings/profile")}>
            <Icons.settings className="w-6 h-6" />
            Paramètres
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={logout}>
            <Icons.logout />
            Se déconnecter
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default DropDown;
