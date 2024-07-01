import Message from "@/components/message/Message";

interface MessagesProviderProps {
  room: {
    messages: {
      id: number;
      content: string;
      createdAt: string;
      user: {
        id: number;
        username: string;
        profileImage: string;
      };
    }[];
  }
}

const MessagesProvider = ({ room } : MessagesProviderProps) => {

  return <div className="grow flex flex-col gap-8 mt-4 mb-4 overflow-y-scroll scrollbar-webkit scrollbar-firefox ">
    {room.messages.map((message) => (
      <Message key={message.id} message={message} />
    ))}
  </div>;
};

export default MessagesProvider;