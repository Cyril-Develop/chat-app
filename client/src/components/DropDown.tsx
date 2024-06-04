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

const DropDown = () => {
  const logout = useUserStore((state) => state.useLogout);

  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 p-2 text-xl font-semibold rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-secondary hover:text-foreground  sm:hover:text-secondary-foreground  text-primary-foreground dark:text-foreground">
        <Icons.settings className="w-6 h-6" />
        <span className="hidden-text">Paramètres</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={toggleTheme}>
          <ThemeMod theme={theme} />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <EditProfile />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={logout}>
          <Icons.logout />
          Se déconnecter
          <span className="sr-only">Se déconnecter</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="focus:bg-red-500 focus:text-white">
          <Icons.delete />
          Supprimer le compte
          <span className="sr-only">Supprimer le compte</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDown;
