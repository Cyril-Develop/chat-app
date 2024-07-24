import { DialogCreate } from "@/components/dialog/dialog-create";
import { Icons } from "@/components/Icons";
import { RoomUsers } from "@/components/room/room-users";
import { RoomSelector } from "@/components/room/room-selector";
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
import { useRoomStore } from "@/store/room.store";

export function SheetRight() {
  const { room } = useRoomStore();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="btn" size="menu" title="Rejoindre un salon">
          <Icons.chat />
          <span className="hidden-text" title="Salons">
            Salons
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader className={cn("text-left")}>
          <SheetTitle>Salons</SheetTitle>
          <Separator />
          <SheetDescription className="text-description">
            Créer ou rejoignez un salon pour discuter.
          </SheetDescription>
          <div className="flex flex-col gap-4">
            <DialogCreate
              btnTrigger="Créer un salon"
              headerTitle="Créer un salon"
              headerDescription="Saisissez le nom du salon."
            />
            <RoomSelector />
          </div>
        </SheetHeader>
        {room && (
          <SheetHeader className={cn("text-left mt-4")}>
            <SheetTitle>Utilisateurs</SheetTitle>
            <Separator />
            <SheetDescription className="text-description">
              Utilisateurs présents dans le salon.
            </SheetDescription>

            <RoomUsers />
          </SheetHeader>
        )}
      </SheetContent>
    </Sheet>
  );
}
