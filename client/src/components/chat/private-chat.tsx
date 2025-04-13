import HeaderChat from "@/components/chat/private-chat-header";
import MessagesProvider from "@/components/message/messages-provider";
import { PrivateChatProps } from "@/types/chat";
import { usePrivateChat } from "@/hooks/private-chat-handler";
import { SkeletonMessage } from "@/components/skeleton/skeleton";
import SendMessage from "@/components/message/send-message";

const PrivateChat = ({ contactId }: PrivateChatProps) => {
  const { fetchedContactInfos, privateMessages, isLoading } =
    usePrivateChat(contactId);

  return (
    <div className="page_conversation">
      {isLoading ? (
        <SkeletonMessage />
      ) : (
        fetchedContactInfos && (
          <>
            <HeaderChat contactInfos={fetchedContactInfos} />
            <MessagesProvider messages={privateMessages} type="private" />
            <SendMessage type="private" />
          </>
        )
      )}
    </div>
  );
};

export default PrivateChat;
