import HeaderChat from "@/components/chat/chat-header";
import SendMessage from "../message/send-message";
import useGetUser from "@/hooks/get-user";
import { PrivateChatProps } from "@/types/chat";

const PrivateChat = ({ contactId }: PrivateChatProps) => {
  const { data: contactInfos } = useGetUser(contactId);

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
