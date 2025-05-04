import HeaderChat from "@/components/chat/private-chat-header";
import MessagesProvider from "@/components/message/messages-provider";
import SendMessage from "@/components/message/send-message";
import { SkeletonMessage } from "@/components/skeleton/skeleton";
import { Separator } from "@/components/ui/separator";
import { usePrivateChat } from "@/hooks/private-chat-handler";
import { PrivateChatProps } from "@/types/chat";
import { releaseWakeLock, requestWakeLock } from "@/utils/screen-wake-lock";
import { useEffect } from "react";

const PrivateChat = ({ contactId }: PrivateChatProps) => {
  const { fetchedContactInfos, privateMessages, isLoading } =
    usePrivateChat(contactId);

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
        fetchedContactInfos && (
          <>
            <HeaderChat contactInfos={fetchedContactInfos} />
            <Separator />
            <MessagesProvider messages={privateMessages} type="private" />
            <Separator />
            <SendMessage type="private" />
          </>
        )
      )}
    </div>
  );
};

export default PrivateChat;
