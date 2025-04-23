import MessagesProvider from "@/components/message/messages-provider";
import RoomHeader from "@/components/room/room-header";
import { RoomChatProps } from "@/types/chat";
import { useRoomChat } from "@/hooks/room-chat-handler";
import { SkeletonMessage } from "@/components/skeleton/skeleton";
import SendMessage from "@/components/message/send-message";
import { Separator } from "@/components/ui/separator";

const RoomChat = ({ roomId, currentUser }: RoomChatProps) => {
  const { fetchedRoom, roomMessages, isLoading } = useRoomChat(roomId);
  return (
    <div className="page_conversation">
      {isLoading ? (
        <SkeletonMessage />
      ) : (
        <>
          <RoomHeader room={fetchedRoom} currentUser={currentUser} />
          <Separator />
          <MessagesProvider messages={roomMessages} type="room" />
          <Separator />
          <SendMessage type="room" />
        </>
      )}
    </div>
  );
};

export default RoomChat;
