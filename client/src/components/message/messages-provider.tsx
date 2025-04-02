import Message from "@/components/message/Message";
import { useEffect, useRef } from "react";
import { MessagesProviderProps } from "@/types/message";

const MessagesProvider = ({ messages, type }: MessagesProviderProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="grow mt-2 mb-2 overflow-y-scroll scrollbar-webkit scrollbar-firefox whitespace-pre xl:mt-4 xl:mb-4">
      {messages?.map((message) => (
        <Message key={message.id} message={message} type={type} />
      ))}
      <span ref={scrollRef} />
    </div>
  );
};

export default MessagesProvider;
