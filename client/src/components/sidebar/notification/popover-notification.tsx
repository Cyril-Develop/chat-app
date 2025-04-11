import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

export function PopoverNotification() {
  return (
    <Popover>
      <PopoverTrigger asChild title="Notifications">
        <Button variant="btn" size="menu">
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
