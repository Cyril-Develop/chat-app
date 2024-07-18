import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Icons } from "@/components/Icons";
import { Separator } from "@/components/ui/separator";
import { Contact } from "@/components/Contact";
import { SearchUser } from "@/components/chat/search-user";
import useGetUser from "@/hooks/get-user";
import { cn } from "@/lib/utils";
import ContactRequest from "@/components/notification/contact-request";

export function SheetLeft() {
  const { data: currentUser } = useGetUser();
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
          <SheetDescription className="text-gray-600 dark:text-gray-400">
            Recherchez et discutez avec vos amis.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 pt-2">
          {currentUser && <SearchUser currentUser={currentUser} />}
          <Contact />
        </div>
        <SheetHeader className={cn("text-left mt-4")}>
          <SheetTitle>Notifications</SheetTitle>
          <Separator />
          <SheetDescription className="text-gray-600 dark:text-gray-400">
            Acceptez ou refusez les demandes de contact.
          </SheetDescription>
        </SheetHeader>
        <ContactRequest />
      </SheetContent>
    </Sheet>
  );
}
