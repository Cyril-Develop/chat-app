import { CommandGroup, CommandItem } from "@/components/ui/command";
import { Icons } from "@/components/Icons";
import { cn } from "@/lib/utils";

interface Room {
  id: number;
  name: string;
  isPrivate: boolean;
}

interface RoomListProps {
  heading: string;
  rooms: Room[];
  value: string;
  onSelect: (room: Room) => void;
}

const RoomList = ({ heading, rooms, onSelect, value }: RoomListProps) => (
  <CommandGroup heading={heading}>
    {rooms.map((room) => (
      <CommandItem
        key={room?.id}
        className={cn("cursor-pointer flex gap-2 h-11")}
        onSelect={() => onSelect(room)}
      >
        {room?.name}
        {room?.name === value && <Icons.check width={14} height={14} />}
      </CommandItem>
    ))}
  </CommandGroup>
);

export default RoomList;
