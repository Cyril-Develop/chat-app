import SendMessage from "@/components/chat/send-message";
import Message from "@/components/chat/Message";
import ChatHeader from "./chat-header";

const ChatRoom = () => {
  return (
    <div className="page_chat_unselected">
      <ChatHeader />
      <Message />
      <SendMessage />
    </div>
  );
};

export default ChatRoom;
