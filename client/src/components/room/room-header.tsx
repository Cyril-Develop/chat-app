import { Separator } from "@/components/ui/separator";
import { RoomHeaderProps } from "@/types/chat";
import RoomHeaderMenu from "@/components/room/room-header-menu";

const RoomHeader = ({ room, currentUser }: RoomHeaderProps) => {
  const role = currentUser?.role;
  const isMyRoom = room?.createdBy === currentUser?.id || role === "ADMIN";
  return (
    <>
      <div className="flex justify-between pb-4 text-xl lg:text-3xl min-h-12">
        <div>
          <h1 className="text-xl sm:text-2xl">{room?.name}</h1>
          <p className="text-additional-info">{room?.description}</p>
        </div>

        {isMyRoom && <RoomHeaderMenu room={room} />}
      </div>
      <Separator />
    </>
  );
};

export default RoomHeader;
