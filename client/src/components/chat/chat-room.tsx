import SendMessage from "@/components/chat/send-message";
import MessagesProvider from "@/components/message/messages-provider";
import ChatHeader from "./chat-header";
import useGetRoom from "@/hooks/get-room";
import { Skeleton } from "@/components/ui/skeleton";

interface ChatRoomProps {
  roomId: number;
}

const ChatRoom = ({ roomId }: ChatRoomProps) => {
  const { data: room, isLoading } = useGetRoom({ roomId });

  return (
    <div className="page_room">
      {isLoading ? (
        <>
          <Skeleton className="flex justify-between pt-4 pb-4 text-3xl" />
          <Skeleton className="grow mt-4 mb-4" />
          <Skeleton className="flex items-center gap-4 mt-4 mb-4" />
        </>
      ) : (
        <>
          <ChatHeader room={room} />
          <MessagesProvider room={room} />
          <SendMessage room={room}/>
        </>
      )}
    </div>
  );
};

export default ChatRoom;
