import { DialogCreate } from "@/components/dialog/dialog-create";
import { Icons } from "@/components/Icons";
import { RoomSelector } from "@/components/room/room-selector";
import { RoomUsers } from "@/components/room/room-users";
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
import useGetUser from "@/hooks/get-user";
import { cn } from "@/lib/utils";
import { useRoomStore } from "@/store/room.store";

export function SheetRight() {
  const { data: currentUser } = useGetUser();
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
          <SheetDescription className="text-gray-600 dark:text-gray-400">
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
        {room && currentUser && (
          <SheetHeader className={cn("text-left mt-4")}>
            <SheetTitle>Utilisateurs</SheetTitle>
            <Separator />
            <SheetDescription className="text-gray-600 dark:text-gray-400">
              Utilisateurs présents dans le salon.
            </SheetDescription>

            <RoomUsers />
          </SheetHeader>
        )}
      </SheetContent>
    </Sheet>
  );
}
