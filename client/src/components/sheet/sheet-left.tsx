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
          <SheetDescription>
            Recherchez et discutez avec vos amis.
          </SheetDescription>
        </SheetHeader>
        <aside className="flex flex-col gap-4 pt-4">
          {currentUser && <SearchUser userId={currentUser.id} />}
          <Contact />
        </aside>
      </SheetContent>
    </Sheet>
  );
}
