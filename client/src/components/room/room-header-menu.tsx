import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { RoomHeaderMenuProps } from "@/types/chat";
import { useDeleteRoomMutation } from "@/hooks/api/chat/delete-room";
import { UpdateRoom } from "../dialog/update-room";

const RommHeaderMenu = ({ room }: RoomHeaderMenuProps) => {
  const { mutate: deleteRoom } = useDeleteRoomMutation();
  const [open, setOpen] = useState(false);

  const handleDeleteRoom = () => {
    deleteRoom(room.id);
    setOpen(false);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" title="Options">
            <Icons.ellipsis width={18} height={18} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={cn("dark:bg-primary-foreground")}>
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => setOpen(true)}>
              <Icons.pen width={18} height={18} />
              <span>Modifier la description</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleDeleteRoom}>
              <Icons.delete width={18} height={18} />
              <span>Supprimer le salon</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      {open && (
        <UpdateRoom
          headerTitle="Modifier le salon"
          headerDescription="Mettre à jour la description du salon."
          isOpen={open}
          setIsOpen={setOpen}
          roomDescription={room.description}
        />
      )}
    </>
  );
};

export default RommHeaderMenu;
