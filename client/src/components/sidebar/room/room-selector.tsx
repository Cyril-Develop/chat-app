import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
import useGetRooms from "@/hooks/get-rooms";
import { useRoomStore } from "@/store/room.store";
import RoomProvider from "@/components/room/room-provider";
import { useSocketStore } from "@/store/socket.store";
import { Room } from "@/types/room";
import { cn } from "@/lib/utils";

export function RoomSelector() {
  const { data } = useGetRooms();
  const { setRoom, room } = useRoomStore();
  const { id: currentRoomId, name: currentRoomName } = room || {};
  const [rooms, setRooms] = useState<Room[]>([]);
  const [newRoom, setNewRoom] = useState<Room | null>(null);
  const { socket } = useSocketStore();

  //Permet de gérer l'état de la popover, Radix UI, où un Popover se ferme immédiatement lorsqu'il est utilisé à l'intérieur d'un Dialog ou lorsqu'il y a des conflits d'auto-focus
  const [open, setOpen] = useState(false);

  const togglePopover = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    if (data) {
      setRooms(data);
    }
  }, [data]);

  useEffect(() => {
    socket?.on("getRooms", (data) => {
      setNewRoom({
        id: data.id,
        name: data.name,
        isPrivate: data.isPrivate,
        password: data.password,
        updatedAt: data.updatedAt,
        createdAt: data.createdAt,
        createdBy: data.createdBy,
      });
    });

    // Si une salle est supprimée, on la retire de la liste
    socket?.on("deleteRoom", (deletedRoomId) => {
      if (currentRoomId === deletedRoomId) {
        setRoom(null);
      }
      setRooms((prevRoom) =>
        prevRoom.filter((room) => room.id !== deletedRoomId)
      );
    });
  }, [room, socket]);

  useEffect(() => {
    if (newRoom) {
      setRooms((prev) => [...prev, newRoom]);
    }
  }, [newRoom]);

  const roomsFound = data?.length > 0;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          size="box"
          aria-label="Voir les salons"
          aria-expanded={open}
          className={cn("w-[200px] justify-between p-3")}
          disabled={!roomsFound}
          onClick={togglePopover}
        >
          {currentRoomName
            ? currentRoomName
            : roomsFound
            ? `Rechercher un salon (${rooms.length})`
            : "Rechercher un salon"}

          {open ? <Icons.chevronUp /> : <Icons.chevronDown />}
        </Button>
      </PopoverTrigger>
      {roomsFound && (
        <PopoverContent
          className={cn("p-0 w-[200px]")}
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <Command>
            <CommandInput placeholder="Rechercher un salon" />
            <CommandList>
              <CommandEmpty className={cn("error p-3")}>
                Aucun salon trouvé.
              </CommandEmpty>

              <RoomProvider
                data={rooms}
                value={currentRoomName ?? ""}
                setOpen={setOpen}
              />
            </CommandList>
          </Command>
        </PopoverContent>
      )}
    </Popover>
  );
}
