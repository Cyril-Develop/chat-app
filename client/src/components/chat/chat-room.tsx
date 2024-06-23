import SendMessage from "@/components/chat/send-message";
import Message from "@/components/chat/Message";
import ChatHeader from "./chat-header";
import useFetchChat from "@/hooks/get-chat";
import { Icons } from "@/components/Icons";

interface ChatRoomProps {
  roomId: string;
}

const ChatRoom = ({ roomId }: ChatRoomProps) => {
  const { data: roomInfos, isLoading } = useFetchChat({ roomId });
  return (
    <div className="page_chat_unselected">
      {isLoading ? (
        <Icons.spinner className="animate-spin" />
      ) : (
        <>
          <ChatHeader roomInfos={roomInfos[0]} />
          <Message />
          <SendMessage />
        </>
      )}
    </div>
  );
};

export default ChatRoom;
