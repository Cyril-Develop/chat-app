import { Separator } from "@/components/ui/separator";
import { RoomHeaderProps } from "@/types/chat";
import RoomHeaderMenu from "@/components/room/room-header-menu";
import VoiceChat from "@/components/stream/voice/voice-chat";

const RoomHeader = ({ room, currentUser }: RoomHeaderProps) => {
  const role = currentUser?.role;
  const isMyRoom = room?.createdBy === currentUser?.id || role === "ADMIN";

  return (
    <>
      <section className="flex flex-col pb-4 min-h-12">
        <div className="flex justify-between items-center gap-4">
          <h1 className="text-xl">{room?.name}</h1>
          <div className="flex items-center gap-4">
            {room.isPrivate && (
              <VoiceChat
              roomId={room.id}
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
      <Separator />
    </>
  );
};

export default RoomHeader;
