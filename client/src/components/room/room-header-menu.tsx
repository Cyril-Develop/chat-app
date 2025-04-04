import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { RoomHeaderMenuProps } from "@/types/chat";
import { useDeleteRoomMutation } from "@/hooks/delete-room";

const RommHeaderMenu = ({ room }: RoomHeaderMenuProps) => {
  const { mutate: deleteRoom } = useDeleteRoomMutation();
  const [open, setOpen] = useState(false);

  const handleUpdateDescription = () => {
    // A faire
  };

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
        <DropdownMenuContent className={cn(" mt-1")}>
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={handleUpdateDescription}>
              <Icons.pen width={18} height={18} />
              <span>Modifier la description</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleDeleteRoom}>
              <Icons.delete width={18} height={18} />
              <span>Supprimer le salon</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default RommHeaderMenu;
