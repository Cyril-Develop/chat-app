import { Separator } from "@/components/ui/separator";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { useDeleteRoomMutation } from "@/hooks/delete-room";
import { HeaderRoomProps } from "@/types/chat";
import { cn } from "@/lib/utils";

const HeaderRoom = ({ room, currentUser }: HeaderRoomProps) => {
  const role = currentUser?.role;
  const isMyRoom = room?.createdBy === currentUser?.id || role === "ADMIN";
  const { mutate: deleteRoom } = useDeleteRoomMutation();

  return (
    <>
      <div className="flex justify-between pb-4 text-xl lg:text-3xl min-h-12">
        <h1 className="text-xl sm:text-2xl">{room?.name}</h1>
        {isMyRoom && (
          <Button
            variant="alert"
            title="Supprimer le salon"
            className={cn("p-0")}
            onClick={() => deleteRoom(room.id)}
          >
            <Icons.delete width="18" height="18" />
          </Button>
        )}
      </div>
      <Separator />
    </>
  );
};

export default HeaderRoom;
