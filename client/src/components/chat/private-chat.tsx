import HeaderChat from "@/components/chat/private-chat-header";
import MessagesProvider from "@/components/message/messages-provider";
import { PrivateChatProps } from "@/types/chat";
import SendPrivateMessage from "../message/send-private-message";
import { Icons } from "@/components/Icons";
import { usePrivateChat } from "@/hooks/private-chat-handler";

const PrivateChat = ({ contactId }: PrivateChatProps) => {
  const { contactData, messages, isLoading } = usePrivateChat(contactId);

  return (
    <div className="page_conversation">
      {isLoading ? (
        <Icons.loader width={18} height={18} />
      ) : (
        contactData && (
          <>
            <HeaderChat contactInfos={contactData} />
            <MessagesProvider messages={messages} type="private" />
            <SendPrivateMessage />
          </>
        )
      )}
    </div>
  );
};

export default PrivateChat;
