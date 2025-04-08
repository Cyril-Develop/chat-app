import { Icons } from "@/components/Icons";
import { Contact } from "@/components/sidebar/contact/contact-list";
import { SearchUser } from "@/components/sidebar/contact/search-user";
import ContactRequest from "@/components/sidebar/notification/contact-request";
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

export function SheetLeft() {
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
          <SheetTitle className={cn("text-title")}>Contacts</SheetTitle>
          <Separator />
          <SheetDescription className={cn("text-description")}>
            Recherchez et discutez avec vos amis.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 pt-2">
          <SearchUser />
          <Contact />
          <ContactRequest />
        </div>
      </SheetContent>
    </Sheet>
  );
}
