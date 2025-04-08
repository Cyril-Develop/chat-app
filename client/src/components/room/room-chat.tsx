import MessagesProvider from "@/components/message/messages-provider";
import SendRoomMessage from "@/components/message/send-room-message";
import RoomHeader from "@/components/room/room-header";
import { RoomChatProps } from "@/types/chat";
import { useRoomChat } from "@/hooks/room-chat-handler";
import { SkeletonMessage } from "@/components/skeleton/skeleton";

const RoomChat = ({ roomId, currentUser }: RoomChatProps) => {
  const { fetchedRoom, roomMessages, isLoading } = useRoomChat(roomId);
  return (
    <div className="page_conversation">
      {isLoading ? (
        <SkeletonMessage />
      ) : (
        <>
          <RoomHeader room={fetchedRoom} currentUser={currentUser} />
          <MessagesProvider messages={roomMessages} type="room" />
          <SendRoomMessage />
        </>
      )}
    </div>
  );
};

export default RoomChat;
