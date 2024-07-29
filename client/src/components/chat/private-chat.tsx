import HeaderChat from "@/components/chat/chat-header";
import SendMessage from "../message/send-message";
import useGetUser from "@/hooks/get-user";
import { PrivateChatProps } from "@/types/chat";
import { useSocketStore } from "@/store/socket.store";
import { useEffect } from "react";
import { useContactStore } from "@/store/contact.store";

const PrivateChat = ({ contactId }: PrivateChatProps) => {
  const { data: contactInfos } = useGetUser(contactId);
  const { setContactId } = useContactStore();
  const { socket } = useSocketStore();

  useEffect(() => {
    socket?.on("friendRemoved", (friendId: number) => {
      if (friendId === contactId) {
        setContactId(null);
      }
    });
  }, [socket, contactId]);

  return (
    <div className="page_room">
      {contactInfos && (
        <>
          <HeaderChat contactInfos={contactInfos} />
          <SendMessage recipient={{ type: "user", id: contactId }} />
        </>
      )}
    </div>
  );
};

export default PrivateChat;
