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
import { useRoomStore } from "@/store/room.store";
import { getVisibleUsersCount, getVisibleUsersLabel } from "@/utils/room";

export function SheetRight() {
  const { room, usersInRoom } = useRoomStore();

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
      <SheetContent side="right" className={cn("flex flex-col gap-4")}>
        <SheetHeader className={cn("text-left")}>
          <SheetTitle className={cn("text-title")}>Salons</SheetTitle>
          <Separator />
          <SheetDescription className={cn("text-description")}>
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
        {room && (
          <SheetHeader className={cn("text-left mt-4")}>
            <SheetTitle className={cn("text-title flex justify-between")}>
              {getVisibleUsersLabel(usersInRoom)}
              <span className="text-additional-info self-end mb-1">
                {getVisibleUsersCount(usersInRoom)}
              </span>
            </SheetTitle>
            <Separator />
            <SheetDescription className="text-description">
              {getVisibleUsersCount(usersInRoom) === 1
                ? "Membre du salon."
                : "Membres du salon."}
            </SheetDescription>

            <RoomUsers usersInRoom={usersInRoom} />
          </SheetHeader>
        )}
      </SheetContent>
    </Sheet>
  );
}
