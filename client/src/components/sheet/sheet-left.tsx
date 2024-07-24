import { SearchUser } from "@/components/chat/search-user";
import { Contact } from "@/components/Contact";
import { Icons } from "@/components/Icons";
import ContactRequest from "@/components/notification/contact-request";
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
import { SheetLeftProps } from "@/types/chat";

export function SheetLeft({ currentUser }: SheetLeftProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="btn" size="menu" title="Voir mes contacts">
          <Icons.user />
          <span className="hidden-text" title="Contacts">
            Contacts
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className={cn("text-left")}>
          <SheetTitle>Contacts</SheetTitle>
          <Separator />
          <SheetDescription className="text-description">
            Recherchez et discutez avec vos amis.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 pt-2">
          {currentUser && <SearchUser currentUser={currentUser} />}
          <Contact currentUser={currentUser} />
        </div>
        <SheetHeader className={cn("text-left mt-4")}>
          <SheetTitle>Notifications</SheetTitle>
          <Separator />
          <SheetDescription className="text-description">
            Acceptez ou refusez les demandes de contact.
          </SheetDescription>
        </SheetHeader>
        <ContactRequest />
      </SheetContent>
    </Sheet>
  );
}
