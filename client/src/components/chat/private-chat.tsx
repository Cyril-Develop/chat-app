import HeaderChat from "@/components/chat/chat-header";
import MessagesProvider from "@/components/message/messages-provider";
import useGetUser from "@/hooks/get-user";
import { useSocketStore } from "@/store/socket.store";
import { PrivateChatProps } from "@/types/chat";
import { useEffect, useState } from "react";
import SendMessage from "../message/send-message-private";
import useGetPrivateMessage from "@/hooks/get-private-message";
import { PrivateMessageProps } from "@/types/message";

const PrivateChat = ({ contactId }: PrivateChatProps) => {
  const { data: contactInfos } = useGetUser(contactId);
  const [messages, setMessages] = useState<PrivateMessageProps[]>([]);
  const { socket } = useSocketStore();
  const { data } = useGetPrivateMessage();

  useEffect(() => {
    if (data) {
      setMessages(data);
    }
  }, [data]);

  useEffect(() => {
    const handleMessage = (data: PrivateMessageProps) => {
      setMessages((prev) => [...prev, data]);
    };

    socket?.on("getPrivateMessage", handleMessage);

    return () => {
      socket?.off("getPrivateMessage", handleMessage);
    };
  }, [socket]);

  console.log(messages);

  return (
    <div className="page_room">
      {contactInfos && (
        <>
          <HeaderChat contactInfos={contactInfos} />
          <MessagesProvider messages={messages} />
          <SendMessage recipient={{ type: "user", id: contactId }} />
        </>
      )}
    </div>
  );
};

export default PrivateChat;
