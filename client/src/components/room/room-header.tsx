import { Separator } from "@/components/ui/separator";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { useDeleteRoomMutation } from "@/hooks/delete-room";
import { HeaderRoomProps } from "@/types/chat";

const HeaderRoom = ({ room, currentUser }: HeaderRoomProps) => {
  const role = currentUser?.role;
  const isMyRoom = room?.createdBy === currentUser?.id || role === "ADMIN";

  const deleteRoom = useDeleteRoomMutation();

  const handleDeleteChat = () => {
    deleteRoom.mutate(room.id);
  };

  return (
    <>
      <div className="flex justify-between pb-4 text-xl lg:text-3xl min-h-12">
        <h1>{room?.name}</h1>
        {isMyRoom && (
          <Button
            variant="alert"
            title="Supprimer le salon"
            className="p-0"
            onClick={handleDeleteChat}
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
