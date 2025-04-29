import { Icons } from "@/components/Icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useHandleLogout } from "@/hooks/handle-logout";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store/auth.store";
import { useSocketStore } from "@/store/socket.store";
import { useTheme } from "@/theme/theme-provider";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import { useInstallApp } from "@/hooks/install-app";

const DropDown = () => {
  const navigate = useNavigate();
  const handleLogout = useHandleLogout();
  const socket = useSocketStore((state) => state.socket);
  const { theme } = useTheme();
  const { visible, setVisible } = useAuthStore();
  const { isInstallable, promptInstall } = useInstallApp();

  useEffect(() => {
    socket?.emit("changeStatut", visible);
  }, [socket, visible]);

  const handleVisibility = (updatedVisible: boolean) => {
    if (visible === updatedVisible) {
      return;
    }
    setVisible(updatedVisible);
    if (updatedVisible === false) {
      toast({
        description:
          "Lorsque vous êtes en mode espion, vous ne pouvez plus envoyer de message dans les salons... Regardez les messages des autres utilisateurs sans être vu.",
        duration: 8000,
      });
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger
          title="Menu"
          className={cn(
            "flex items-center gap-2 p-1 md:p-2 rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-secondary hover:text-foreground sm:hover:text-secondary-foreground text-primary-foreground dark:text-foreground text-lg"
          )}
        >
          <Icons.menu />
          <span className="hidden-text font-semibold">Menu</span>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className={cn("dark:bg-primary-foreground")}
          sideOffset={25}
        >
          <DropdownMenuGroup>
            <DropdownMenuItem
              onClick={() => navigate("/chateo/chat")}
              className={cn("item-nav")}
            >
              <Icons.chat width={18} height={18} />
              Messagerie
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </DropdownMenuGroup>

          <DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className={cn("item-nav")}>
                <Icons.circle
                  width={18}
                  height={18}
                  fill="none"
                  stroke={theme === "dark" ? "#fff" : "#000"}
                />
                Statut
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent
                  className={cn("dark:bg-primary-foreground mr-2")}
                >
                  <DropdownMenuItem
                    onClick={() => handleVisibility(true)}
                    className={cn("item-nav")}
                  >
                    <Icons.circle
                      width={18}
                      height={18}
                      fill="#22c55e"
                      stroke="none"
                    />
                    En ligne
                    {visible === true && <Icons.check width={14} height={14} />}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleVisibility(false)}
                    className={cn("item-nav")}
                  >
                    <Icons.mask
                      width={18}
                      height={18}
                      fill={theme === "dark" ? "#fff" : "#000"}
                    />
                    Espion
                    {visible === false && (
                      <Icons.check width={14} height={14} />
                    )}
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() => navigate("chateo/settings/profile")}
            className={cn("item-nav")}
          >
            <Icons.settings width={18} height={18} />
            Paramètres
          </DropdownMenuItem>
          {isInstallable && (
            <DropdownMenuItem
              onClick={promptInstall}
              className={cn("item-nav")}
            >
              <Icons.download width={18} height={18} />
              Télécharger
            </DropdownMenuItem>
          )}
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout} className={cn("item-nav")}>
            <Icons.logout width={18} height={18} />
            Se déconnecter
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default DropDown;
