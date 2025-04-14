import Message from "@/components/message/Message";
import { useEffect, useRef, useState } from "react";
import { MessagesProviderProps } from "@/types/message";
import moment from "moment/min/moment-with-locales";

const MessagesProvider = ({ messages, type }: MessagesProviderProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldScrollToBottom, setShouldScrollToBottom] = useState(true);
  const [initialScrollDone, setInitialScrollDone] = useState(false);
  const messagesCount = 5;
  const [visibleCount, setVisibleCount] = useState(messagesCount);

  useEffect(() => {
    const scrollToBottom = () => {
      if (shouldScrollToBottom) {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    };

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const { scrollTop, scrollHeight, clientHeight } = container;
      const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
      setShouldScrollToBottom(isNearBottom);

      // Ne charger que si scroll initial terminé
      if (
        initialScrollDone &&
        scrollTop < 100 &&
        visibleCount < messages.length
      ) {
        setVisibleCount((prev) => prev + messagesCount);
      }
    };

    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll);

    const images = container.querySelectorAll("img");
    let loadedCount = 0;

    const scrollAfterImages = () => {
      scrollToBottom();
    };

    if (images.length === 0) {
      scrollAfterImages();
    } else {
      const handleImageLoad = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          scrollAfterImages();
        }
      };

      images.forEach((img) => {
        if (img.complete) {
          loadedCount++;
          if (loadedCount === images.length) {
            scrollAfterImages();
          }
        } else {
          img.onload = img.onerror = handleImageLoad;
        }
      });
    }

    // Toujours scroller en bas lorsque les messages changent
    scrollToBottom();

    // Marquer le scroll initial comme terminé après un délai
    const timeout = setTimeout(() => {
      setInitialScrollDone(true);
    }, 500);

    return () => {
      clearTimeout(timeout);
      container.removeEventListener("scroll", handleScroll);
      images.forEach((img) => {
        img.onload = img.onerror = null;
      });
    };
  }, [messages, shouldScrollToBottom, visibleCount, initialScrollDone]);

  const displayedMessages = messages?.slice(-visibleCount);
  const firstTodayIndex = displayedMessages?.findIndex((msg) =>
    moment(msg.createdAt).isSame(moment(), "day")
  );

  return (
    <section
      ref={containerRef}
      className="grow mt-2 mb-2 overflow-y-scroll scrollbar-webkit scrollbar-firefox whitespace-pre xl:mt-4 xl:mb-4"
    >
      {displayedMessages?.map((message, index) => (
        <article key={message.id}>
          {index === firstTodayIndex && (
            <p className="text-center text-additional-info my-2">Aujourd'hui</p>
          )}
          <Message message={message} type={type} />
        </article>
      ))}
      <div ref={scrollRef} />
    </section>
  );
};

export default MessagesProvider;
