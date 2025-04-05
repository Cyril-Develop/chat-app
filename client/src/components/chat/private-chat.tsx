import HeaderChat from "@/components/chat/private-chat-header";
import MessagesProvider from "@/components/message/messages-provider";
import { PrivateChatProps } from "@/types/chat";
import SendPrivateMessage from "../message/send-private-message";
import { Icons } from "@/components/Icons";
import { usePrivateChat } from "@/hooks/private-chat-handler";

const PrivateChat = ({ contactId }: PrivateChatProps) => {
  const { fetchedContactInfos, privateMessages, isLoading } =
    usePrivateChat(contactId);

  return (
    <div className="page_conversation">
      {isLoading ? (
        <Icons.loader width={18} height={18} />
      ) : (
        fetchedContactInfos && (
          <>
            <HeaderChat contactInfos={fetchedContactInfos} />
            <MessagesProvider messages={privateMessages} type="private" />
            <SendPrivateMessage />
          </>
        )
      )}
    </div>
  );
};

export default PrivateChat;
