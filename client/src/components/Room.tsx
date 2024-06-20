import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import useFetchChats from "@/hooks/fetch-chats";
import { cn } from "@/lib/utils";
import { useJoinChatMutation } from "@/hooks/join-chat";
import { useRoomStore } from "@/store/room.store";

export function Room() {
  const { data } = useFetchChats();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const { setRoom, room } = useRoomStore();
  const mutation = useJoinChatMutation();

  console.log(room);
  

  interface Room {
    id: string;
    name: string;
    isPrivate: boolean;
  }

  const roomsFound = data?.length > 0;

  const handleJoinRoom = (roomId: string) => {
    if(room === roomId) return;
    setRoom(roomId);
    mutation.mutate({ roomId });
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          size="box"
          aria-expanded={open}
          className="w-[200px] justify-between p-3"
        >
          {value ? value : `Rejoindre un salon (${data?.length})`}

          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0" />
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

              <CommandGroup heading="Salons Publics 💬">
                {data?.map(
                  (room: Room) =>
                    !room.isPrivate && (
                      <CommandItem
                        key={room?.id}
                        className={cn("cursor-pointer")}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue);
                          setOpen(false);
                          handleJoinRoom(room.id);
                        }}
                      >
                        {room?.name}
                        {room?.name === value && (
                          <Check className="ml-2 h-4 w-4" />
                        )}
                      </CommandItem>
                    )
                )}
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Salons Privés 🔒">
                {data?.map(
                  (room: Room) =>
                    room.isPrivate && (
                      <CommandItem
                        key={room?.id}
                        className={cn("cursor-pointer")}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue);
                          setOpen(false);
                        }}
                      >
                        {room?.name}
                        {room?.name === value && (
                          <Check className="ml-2 h-4 w-4" />
                        )}
                      </CommandItem>
                    )
                )}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      )}
    </Popover>
  );
}
