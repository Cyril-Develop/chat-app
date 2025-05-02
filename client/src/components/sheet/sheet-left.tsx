import { Icons } from "@/components/Icons";
import { Contact } from "@/components/contact/contact-list";
import { SearchUser } from "@/components/contact/search-user";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useNotificationStore } from "@/store/notification.store";

export function SheetLeft() {
  const { messages } = useNotificationStore();
  const haveMessage = messages.length > 0;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant={haveMessage ? "success" : "btn"}
          size="menu"
          title="Contacts"
        >
          <Icons.user />
          <span className="hidden-text" title="Contacts">
            Contacts
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className={cn("flex flex-col gap-4")}>
        <SheetHeader className={cn("text-left space-y-4")}>
          <div>
            <SheetTitle className={cn("text-title")}>Contacts</SheetTitle>
            <SheetDescription className={cn("text-paragraph")}>
              Recherchez et discutez avec vos amis.
            </SheetDescription>
          </div>
          <Separator />
        </SheetHeader>
        <div className="flex flex-col gap-4">
          <SearchUser />
          <Contact />
        </div>
      </SheetContent>
    </Sheet>
  );
}
