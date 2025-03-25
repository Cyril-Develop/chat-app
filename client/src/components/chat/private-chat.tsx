import HeaderChat from "@/components/chat/chat-header";
import MessagesProvider from "@/components/message/messages-provider";
import { PrivateChatProps } from "@/types/chat";
import SendMessage from "../message/send-message-private";
import { Icons } from "@/components/Icons";
import { usePrivateChat } from "@/hooks/private-chat-handler";

const PrivateChat = ({ contactId }: PrivateChatProps) => {
  const { contactData, messages, isLoading } = usePrivateChat(contactId);

  return (
    <div className="page_room">
      {isLoading ? (
        <Icons.loader width={18} height={18} />
      ) : (
        contactData && (
          <>
            <HeaderChat contactInfos={contactData} />
            <MessagesProvider messages={messages} />
            <SendMessage recipient={{ type: "user", id: contactId }} />
          </>
        )
      )}
    </div>
  );
};

export default PrivateChat;
