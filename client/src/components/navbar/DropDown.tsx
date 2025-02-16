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
import { useEffect } from "react";
import { useSocketStore } from "@/store/socket.store";
import { getUserId } from "@/utils/get-userId";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme-provider";

const DropDown = () => {
  const navigate = useNavigate();
  const handleLogout = useHandleLogout();
  const { statut, setStatut } = useUserStore((state) => state);
  const { socket } = useSocketStore();
  const userId = getUserId();
  const { theme } = useTheme();

  useEffect(() => {
    socket?.emit("changeStatut", userId, statut);
  }, [socket, statut, userId]);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger
          title="Menu"
          className={cn(
            "flex items-center gap-2 p-1 md:p-2 font-semibold rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-secondary hover:text-foreground sm:hover:text-secondary-foreground text-primary-foreground dark:text-foreground"
          )}
        >
          <Icons.menu />
          <span className="hidden-text">Menu</span>
        </DropdownMenuTrigger>

        <DropdownMenuContent className={cn("mt-5 dark:bg-primary-foreground")}>
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => navigate("/chateo")}>
              <Icons.home width={18} height={18} />
              Accueil
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate("/chateo/chat")}>
              <Icons.chat width={18} height={18} />
              Messagerie
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </DropdownMenuGroup>

          <DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <Icons.circle
                  width={18}
                  height={18}
                  fill="none"
                  stroke={theme === "dark" ? "#fff" : "#000"}
                />
                Statut
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent className={cn("dark:bg-primary-foreground")}>
                  <DropdownMenuItem onClick={() => setStatut("online")}>
                    <Icons.circle
                      width={18}
                      height={18}
                      fill="#22c55e"
                      stroke="none"
                    />
                    En ligne
                    {statut === "online" && (
                      <Icons.check width={14} height={14} />
                    )}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setStatut("spy")}>
                    <Icons.spy
                      width={18}
                      height={18}
                      stroke={theme === "dark" ? "#fff" : "#000"}
                    />
                    Espion
                    {statut === "spy" && <Icons.check width={14} height={14} />}
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuGroup>
          <DropdownMenuItem onClick={() => navigate("chateo/settings/profile")}>
            <Icons.settings width={18} height={18} />
            Paramètres
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout}>
            <Icons.logout width={18} height={18} />
            Se déconnecter
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default DropDown;
