import Message from "@/components/message/Message";
import { useEffect, useRef } from "react";
import { MessagesProviderProps } from "@/types/message";
import moment from "moment/min/moment-with-locales";

const MessagesProvider = ({ messages, type }: MessagesProviderProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Trouver l’index du premier message qui a été envoyé aujourd'hui
  const firstTodayIndex = messages?.findIndex((msg) =>
    moment(msg.createdAt).isSame(moment(), "day")
  );

  return (
    <div className="grow mt-2 mb-2 overflow-y-scroll scrollbar-webkit scrollbar-firefox whitespace-pre xl:mt-4 xl:mb-4">
      {messages?.map((message, index) => (
        <div key={message.id}>
          {index === firstTodayIndex && (
            <p className="text-center text-additional-info my-2">Aujourd'hui</p>
          )}
          <Message message={message} type={type} />
        </div>
      ))}
      <span ref={scrollRef} />
    </div>
  );
};

export default MessagesProvider;
