import RoomHeaderMenu from "@/components/room/room-header-menu";
import VocalChat from "@/components/stream/audio/vocal-chat";
import { RoomHeaderProps } from "@/types/chat";

const RoomHeader = ({ room, currentUser }: RoomHeaderProps) => {
  const role = currentUser?.role;
  const isMyRoom = room?.createdBy === currentUser?.id || role === "ADMIN";

  return (
    <>
      <section className="flex flex-col pb-2 sm:pb-4">
        <div className="flex justify-between items-center gap-4">
          <h1 className="text-xl">{room?.name}</h1>
          <div className="flex items-center gap-4">
            {room?.isPrivate && (
              <VocalChat
                roomId={room?.id}
                userId={currentUser?.id}
                username={currentUser?.username}
              />
            )}
            {isMyRoom && <RoomHeaderMenu room={room} />}
          </div>
        </div>
        <p className="text-additional-info break-words whitespace-pre-wrap">
          {room?.description}
        </p>
      </section>
    </>
  );
};

export default RoomHeader;
