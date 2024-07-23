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

export function RoomSelector() {
  const { data } = useGetRooms();
  const [openRoomSelector, setOpenRoomSelector] = useState(false);
  const { setRoom, room } = useRoomStore();
  const { id: currentRoomId, name: currentRoomName } = room || {};
  const [rooms, setRooms] = useState<Room[]>([]);
  const [newRoom, setNewRoom] = useState<Room | null>(null);
  const { socket } = useSocketStore();

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

    // If a room is deleted, remove it from the list and reset the room state of each users
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
    <Popover open={openRoomSelector} onOpenChange={setOpenRoomSelector}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          size="box"
          aria-expanded={openRoomSelector}
          className="w-[200px] justify-between p-3"
          disabled={!roomsFound}
        >
          {currentRoomName
            ? currentRoomName
            : roomsFound
            ? `Rechercher un salon (${rooms.length})`
            : "Rechercher un salon"}

          {openRoomSelector ? <Icons.chevronUp /> : <Icons.chevronDown />}
        </Button>
      </PopoverTrigger>
      {roomsFound && (
        <PopoverContent className="p-0 w-[200px]">
          <Command>
            <CommandInput placeholder="Rechercher un salon" />

            <CommandList>
              <CommandEmpty className="error p-3">
                Aucun salon trouvé.
              </CommandEmpty>

              <RoomProvider
                data={rooms}
                value={currentRoomName ?? ""}
                setOpen={setOpenRoomSelector}
              />
            </CommandList>
          </Command>
        </PopoverContent>
      )}
    </Popover>
  );
}
