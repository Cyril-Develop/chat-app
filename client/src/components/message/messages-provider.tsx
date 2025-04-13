import Message from "@/components/message/Message";
import { useEffect, useRef, useState } from "react";
import { MessagesProviderProps } from "@/types/message";
import moment from "moment/min/moment-with-locales";

const MessagesProvider = ({ messages, type }: MessagesProviderProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldScrollToBottom, setShouldScrollToBottom] = useState(true);

  useEffect(() => {
    const scrollToBottom = () => {
      if (shouldScrollToBottom) {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    };

    // Détecter si l'utilisateur a scrollé manuellement
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const { scrollTop, scrollHeight, clientHeight } = container;
      // On considère qu'on est proche du bas si on est à moins de 100px du bas
      const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
      setShouldScrollToBottom(isNearBottom);
    };

    const container = containerRef.current;
    if (!container) return;

    // Ajouter l'écouteur d'événement
    container.addEventListener("scroll", handleScroll);

    const images = container.querySelectorAll("img");
    let loadedCount = 0;

    if (images.length === 0) {
      scrollToBottom();
      return;
    }

    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount === images.length) {
        scrollToBottom();
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        loadedCount++;
        if (loadedCount === images.length) {
          scrollToBottom();
        }
      } else {
        img.onload = img.onerror = handleImageLoad;
      }
    });

    // Toujours scroller en bas lorsque les messages changent
    scrollToBottom();

    // Nettoyage
    return () => {
      container.removeEventListener("scroll", handleScroll);
      images.forEach((img) => {
        img.onload = img.onerror = null;
      });
    };
  }, [messages, shouldScrollToBottom]);

  // Optimisation: mémoiser le calcul de firstTodayIndex
  const firstTodayIndex = messages?.findIndex((msg) =>
    moment(msg.createdAt).isSame(moment(), "day")
  );

  return (
    <div
      ref={containerRef}
      className="grow mt-2 mb-2 overflow-y-scroll scrollbar-webkit scrollbar-firefox whitespace-pre xl:mt-4 xl:mb-4"
    >
      {messages?.map((message, index) => (
        <div key={message.id}>
          {index === firstTodayIndex && (
            <p className="text-center text-additional-info my-2">Aujourd'hui</p>
          )}
          <Message message={message} type={type} />
        </div>
      ))}
      <div ref={scrollRef} />
    </div>
  );
};

export default MessagesProvider;
