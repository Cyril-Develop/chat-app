import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";
import { Separator } from "@/components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import ContactRequest from "./contact-request";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useNotificationStore } from "@/store/notification.store";

export function PopoverNotification() {
  const { requests } = useNotificationStore();
  const haveRequest = requests.length > 0;

  return (
    <Popover>
      <PopoverTrigger asChild title="Notifications">
        <Button variant={haveRequest ? "success" : "btn"} size="menu">
          <Icons.bell />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        sideOffset={25}
        align="center"
        className={cn("max-w-96 dark:bg-primary-foreground")}
      >
        {!haveRequest ? (
          <div className="flex items-center justify-center text-gray-600 dark:text-gray-400">
            Aucune notification
          </div>
        ) : (
          <>
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Notifications</h4>
              <Separator className={cn("bg-muted")} />
            </div>
            <ScrollArea className={cn("h-30 mt-2")}>
              <ContactRequest />
            </ScrollArea>
          </>
        )}
      </PopoverContent>
    </Popover>
  );
}
