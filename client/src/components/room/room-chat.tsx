import MessagesProvider from "@/components/message/messages-provider";
import SendMessage from "@/components/message/send-message";
import RoomHeader from "@/components/room/room-header";
import { SkeletonMessage } from "@/components/skeleton/skeleton";
import { Separator } from "@/components/ui/separator";
import { useRoomChat } from "@/hooks/room-chat-handler";
import { RoomChatProps } from "@/types/chat";
import { releaseWakeLock, requestWakeLock } from "@/utils/screen-wake-lock";
import { useEffect } from "react";

const RoomChat = ({ roomId, currentUser }: RoomChatProps) => {
  const { fetchedRoom, roomMessages, isLoading } = useRoomChat(roomId);

  // Request wake lock when the component mounts
  useEffect(() => {
    requestWakeLock();

    return () => {
      releaseWakeLock();
    };
  }, []);

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
