import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Icons } from "@/components/Icons";
import BraveLogo from "/images/brave_browser.png";
import WindowsLogo from "/images/windows.png";
import { useNotificationService } from "@/hooks/notification-service";
import { cn } from "@/lib/utils";

export function PopoverNotificationPush() {
  const { permission, isBraveBrowser } = useNotificationService();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="linkForm" size="default" className={cn("p-0")}>
          <Icons.info height="19" width="19" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 flex flex-col space-y-2" align="end">
        {isBraveBrowser && permission !== "granted" && (
          <div>
            <div className="flex items-end gap-1">
              <img
                src={BraveLogo}
                alt="Brave Logo"
                className="w-8 h-8 self-start"
              />
              <p>
                Par défaut, votre navigateur bloque les notifications. Pour les
                activer, suivez ces étapes :
              </p>
            </div>
            <ul className="list-disc ml-5">
              <li>
                Cliquer sur l'icône hamburger dans le coin supérieur droit
              </li>
              <li>
                Aller dans <em>Paramètres</em>
              </li>
              <li>
                Dans la section <em>Confidentialité et sécurité</em>,
                sélectionner{" "}
                <strong>
                  Utiliser les services de Google de messagerie push
                </strong>
              </li>
            </ul>
          </div>
        )}

        <div>
          <div className="flex items-end gap-1.5">
            <img
              src={WindowsLogo}
              alt="Brave Logo"
              className="w-7 h-7 self-start"
            />
            <p>Sur windows :</p>
          </div>
          <ul className="list-disc ml-5">
            <li>Aller dans les paramètres</li>
            <li>
              Rechercher <em>actions et notifications</em>
            </li>
            <li>Activer les notifications</li>
          </ul>
        </div>
      </PopoverContent>
    </Popover>
  );
}
