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
import { useJoinChatMutation } from "@/hooks/join-chat";
import { useLeaveChatMutation } from "@/hooks/leave-chat";
import { useRoomStore } from "@/store/room.store";
import RoomProvider from "@/components/room/room-provider";

export function RoomSelector() {
  const { data } = useGetRooms();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const { setRoom, room } = useRoomStore();
  const joinMutation = useJoinChatMutation();
  const leaveMutation = useLeaveChatMutation();

  interface Room {
    id: number;
    name: string;
    isPrivate: boolean;
  }

  const roomsFound = data?.length > 0;

  useEffect(() => {
    if (room) {
      const roomName = data?.find((r: Room) => r.id === room)?.name;
      setValue(roomName);
    }
  }, [data, room]);

  const handleJoinRoom = (roomId: number, password?: string) => {
    setOpen(false);
    if (room === roomId) {
      leaveMutation.mutate(roomId);
      setRoom(null);
      setValue("");
    } else {
      setRoom(roomId);
      joinMutation.mutate({ roomId, password });
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          size="box"
          aria-expanded={open}
          className="w-[200px] justify-between p-3"
          disabled={!roomsFound}
        >
          {value
            ? value
            : roomsFound
            ? `Recherche un salon (${data.length})`
            : "Rechercher un salon"}

          {open ? <Icons.chevronUp /> : <Icons.chevronDown />}
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
                data={data}
                value={value}
                setOpen={setOpen}
                handleJoinRoom={handleJoinRoom}
              />
            </CommandList>
          </Command>
        </PopoverContent>
      )}
    </Popover>
  );
}
