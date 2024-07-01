import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuSub,
  DropdownMenuPortal,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/Icons";
import { useNavigate } from "react-router-dom";
import { useHandleLogout } from "@/hooks/logout";
import { useUserStore } from "@/store/user.store";

const DropDown = () => {
  const navigate = useNavigate();
  const handleLogout = useHandleLogout();
  const { statut, setStatut } = useUserStore();

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
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => navigate("/")}>
              <Icons.home />
              Accueil
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate("/chat")}>
              <Icons.chat />
              Messagerie
            </DropdownMenuItem>
              <DropdownMenuSeparator />
          </DropdownMenuGroup>

          <DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <span>Status</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem onClick={() => setStatut("online")}>
                    <Icons.circle
                      width={14}
                      height={14}
                      fill="green"
                      stroke="green"
                      
                    />
                    En ligne
                    {statut === "online" && (
                      <Icons.check width={14} height={14} />
                    )}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setStatut("busy")}>
                    <Icons.circle
                      width={14}
                      height={14}
                      fill="red"
                      stroke="red"
                    />
                    Occupé
                    {statut === "busy" && (
                      <Icons.check width={14} height={14} />
                    )}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setStatut("away")}>
                    <Icons.circle
                      width={14}
                      height={14}
                      fill="orange"
                      stroke="orange"
                    />
                    Absent
                    {statut === "away" && (
                      <Icons.check width={14} height={14} />
                    )}
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuGroup>
          <DropdownMenuItem onClick={() => navigate("/settings/profile")}>
            <Icons.settings className="w-6 h-6" />
            Paramètres
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout}>
            <Icons.logout />
            Se déconnecter
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default DropDown;
