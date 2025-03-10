import HeaderChat from "@/components/chat/chat-header";
import MessagesProvider from "@/components/message/messages-provider";
import useGetUserById from "@/hooks/get-user-by-id";
import { useSocketStore } from "@/store/socket.store";
import { PrivateChatProps } from "@/types/chat";
import { useEffect, useState } from "react";
import SendMessage from "../message/send-message-private";
import useGetPrivateMessage from "@/hooks/get-private-message";
import { PrivateMessageProps } from "@/types/message";

const PrivateChat = ({ contactId }: PrivateChatProps) => {
  const { data: fetchedContactInfos } = useGetUserById(contactId);
  const [contactData, setContactData] = useState(fetchedContactInfos);
  const [messages, setMessages] = useState<PrivateMessageProps[]>([]);
  const { socket } = useSocketStore();
  const { data } = useGetPrivateMessage();

  useEffect(() => {
    if (fetchedContactInfos) {
      setContactData(fetchedContactInfos);
    }
  }, [fetchedContactInfos]);

  useEffect(() => {
    if (data) {
      setMessages(data);
    }
  }, [data]);

  useEffect(() => {
    const handleMessage = (data: PrivateMessageProps) => {
      setMessages((prev) => [...prev, data]);
    };

    const handleUpdatedUser = (user: any) => {
      if (user.id === contactId) {
        setContactData(user);
      }
    };

    socket?.on("updatedUserInfos", handleUpdatedUser);
    socket?.on("getPrivateMessage", handleMessage);

    socket?.on("deletePrivateMessage", (messageId) => {
      setMessages((prevMessages) =>
        prevMessages.filter((msg) => msg.id !== messageId)
      );
    });

    return () => {
      socket?.off("updatedUserInfos", handleUpdatedUser);
      socket?.off("getPrivateMessage", handleMessage);
      socket?.off("deletePrivateMessage");
    };
  }, [socket, contactId]);

  return (
    <div className="page_room">
      {contactData && (
        <>
          <HeaderChat contactInfos={contactData} />
          <MessagesProvider messages={messages} />
          <SendMessage recipient={{ type: "user", id: contactId }} />
        </>
      )}
    </div>
  );
};

export default PrivateChat;
