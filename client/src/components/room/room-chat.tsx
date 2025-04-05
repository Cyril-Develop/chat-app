import MessagesProvider from "@/components/message/messages-provider";
import SendRoomMessage from "@/components/message/send-room-message";
import RoomHeader from "@/components/room/room-header";
import { RoomChatProps } from "@/types/chat";
import { Icons } from "@/components/Icons";
import { useRoomChat } from "@/hooks/room-chat-handler";

const RoomChat = ({ roomId, currentUser }: RoomChatProps) => {
  const { fetchedRoom, roomMessages, isLoading } = useRoomChat(roomId);
  return (
    <div className="page_conversation">
      {isLoading ? (
        <Icons.loader width={18} height={18} />
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
