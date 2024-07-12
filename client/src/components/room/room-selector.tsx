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
import { useSocketStore } from "@/store/socket.store";

export function RoomSelector() {
  const { data } = useGetRooms();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const { setRoom, room } = useRoomStore();
  const joinMutation = useJoinChatMutation();
  const leaveMutation = useLeaveChatMutation();
  const [rooms, setRooms] = useState([]);
  const [newRoom, setNewRoom] = useState(false);
  const { socket } = useSocketStore();

  interface Room {
    id: number;
    name: string;
    isPrivate: boolean;
  }

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

    // socket?.on("messageDeleted", (messageId) => {
    //   setMessages((prevMessages) =>
    //     prevMessages.filter((msg) => msg.id !== messageId)
    //   );
    // });
  }, [room, socket]);

  useEffect(() => {
    if (newRoom) {
      setRooms((prev) => [...prev, newRoom]);
    }
  }, [newRoom]);

  const roomsFound = data?.length > 0;

  useEffect(() => {
    if (room) {
      const roomName = rooms?.find((r: Room) => r.id === room)?.name;
      setValue(roomName);
    }
  }, [rooms, room]);

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
            ? `Recherche un salon (${rooms.length})`
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
                data={rooms}
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
