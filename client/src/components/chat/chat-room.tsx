import SendMessage from "@/components/chat/send-message";
import Message from "@/components/chat/Message";
import ChatHeader from "./chat-header";
import useFetchChat from "@/hooks/get-chat";
import { Skeleton } from "@/components/ui/skeleton";

interface ChatRoomProps {
  roomId: number;
}

const ChatRoom = ({ roomId }: ChatRoomProps) => {
  const { data: roomInfos, isLoading } = useFetchChat({ roomId });

  return (
    <div className="page_chat_unselected">
      {isLoading ? (
        <>
          <Skeleton className="flex justify-between pt-4 pb-4 text-3xl" />
          <Skeleton className="grow mt-4 mb-4" />
          <Skeleton className="flex items-center gap-4 mt-4 mb-4" />
        </>
      ) : (
        <>
          <ChatHeader roomInfos={roomInfos} />
          <Message />
          <SendMessage />
        </>
      )}
    </div>
  );
};

export default ChatRoom;
