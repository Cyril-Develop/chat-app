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

export function Room() {
  const { data } = useFetchChats();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  interface Room {
    id: string;
    name: string;
    isPrivate: boolean;
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          size="box"
          aria-expanded={open}
          className="w-[200px] justify-between p-3"
        >
          {value ? value : `Rejoindre un salon ${data ? data?.length : ""} `}

          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0" />
        </Button>
      </PopoverTrigger>
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
            <CommandSeparator />
            <CommandGroup heading="Salons Privés 🔒">
              {data?.map(
                (room: Room) =>
                  room.isPrivate && (
                    <CommandItem
                      key={room?.id}
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
    </Popover>
  );
}
