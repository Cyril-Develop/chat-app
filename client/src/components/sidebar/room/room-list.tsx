import { CommandGroup, CommandItem } from "@/components/ui/command";
import { Icons } from "@/components/Icons";
import { cn } from "@/lib/utils";
import { RoomListProps } from "@/types/room";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const RoomList = ({ heading, rooms, onSelect, roomName }: RoomListProps) => (
  <CommandGroup heading={heading}>
    {rooms.map((room) => (
      <HoverCard key={room.id}>
        <HoverCardTrigger asChild>
          <CommandItem
            className={cn("cursor-pointer flex gap-2 h-11")}
            onSelect={() => onSelect(room)}
          >
            {room.name}
            {room.name === roomName && <Icons.check width={14} height={14} />}
          </CommandItem>
        </HoverCardTrigger>
        {room.description && (
          <HoverCardContent
            className={cn(
              "max-w-60 max-h-40 overflow-y-auto scrollbar-webkit scrollbar-firefox text-additional-info break-words whitespace-normal"
            )}
            side="left"
          >
            {room.description}
          </HoverCardContent>
        )}
      </HoverCard>
    ))}
  </CommandGroup>
);

export default RoomList;
