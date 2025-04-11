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
import { useEffect, useState } from "react";

export function PopoverNotification() {
  const { requests } = useNotificationStore();
  const [open, setOpen] = useState(false);

  const haveRequest = requests.length > 0;

  useEffect(() => {
    if (!haveRequest) {
      setOpen(false);
    }
  }, [haveRequest]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild title="Notifications">
        <Button
          variant={haveRequest ? "success" : "btn"}
          size="menu"
          disabled={!haveRequest}
        >
          <Icons.bell />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        className={cn("mt-5 max-w-96 dark:bg-primary-foreground")}
      >
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Notifications</h4>
          <Separator className={cn("bg-muted")} />
        </div>
        <ScrollArea className={cn("h-30 mt-2")}>
          <ContactRequest />
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
}
