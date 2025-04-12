import { CreateRoom } from "@/components/dialog/create-room";
import { Icons } from "@/components/Icons";
import { RoomSelector } from "@/components/sidebar/room/room-selector";
import { RoomUsers } from "@/components/sidebar/room/room-users";
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

export function SheetRight() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="btn" size="menu" title="Salons">
          <Icons.chat />
          <span className="hidden-text" title="Salons">
            Salons
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className={cn("flex flex-col gap-4")}>
        <SheetHeader className={cn("text-left space-y-4")}>
          <SheetTitle className={cn("text-title")}>Salons</SheetTitle>
          <Separator />
          <SheetDescription className={cn("text-paragraph")}>
            Créer ou rejoignez un salon pour discuter.
          </SheetDescription>
          <div className="flex flex-col gap-4">
            <CreateRoom
              btnTrigger="Créer un salon"
              headerTitle="Créer un salon"
              headerDescription="Saisissez les informations du salon."
            />
            <RoomSelector />
          </div>
        </SheetHeader>
        <RoomUsers />
      </SheetContent>
    </Sheet>
  );
}
