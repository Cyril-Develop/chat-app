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
import useGetUser from "@/hooks/get-user";
import { DialogCreate } from "@/components/dialog/dialog-create";
import { RoomUsers } from "@/components/room-users";
import { RoomSelector } from "@/components/room/room-selector";
import { useRoomStore } from "@/store/room.store";
import { cn } from "@/lib/utils";
import { useSocketStore } from "@/store/socket.store";
import { useEffect, useState } from "react";
import { User } from "@/types/types";

export function SheetRight() {
  const { data: currentUser } = useGetUser();
  const { room } = useRoomStore();
  const { socket, users } = useSocketStore();
  const [usersInRoom, setUsersInRoom] = useState<User[]>([]);

  useEffect(() => {
    socket?.on("getUserInRoom", (user) => {
      setUsersInRoom(user);
    });

    return () => {
      socket?.off("getUserInRoom");
    };
  }, [socket]);

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
          <SheetDescription>
            Créer ou rejoignez un salon pour discuter.
          </SheetDescription>
          <div className="flex flex-col gap-4 pb-8">
            <DialogCreate
              btnTrigger="Créer un salon"
              headerTitle="Créer un salon"
              headerDescription="Saisissez le nom du salon."
            />
            <RoomSelector />
          </div>
        </SheetHeader>
        {room && currentUser && (
          <SheetHeader className={cn("text-left")}>
            <SheetTitle>Utilisateurs</SheetTitle>
            <Separator />
            <SheetDescription>
              Utilisateurs présents dans le salon.
            </SheetDescription>

            <RoomUsers usersInRoom={usersInRoom} users={users} />
          </SheetHeader>
        )}
      </SheetContent>
    </Sheet>
  );
}
