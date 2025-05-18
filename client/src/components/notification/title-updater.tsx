import { useEffect, useRef } from "react";
import { useNotificationStore } from "@/store/notification.store";

const NotificationTitleUpdater = () => {
  const { messages, requests } = useNotificationStore((state) => ({
    messages: state.messages,
    requests: state.requests,
  }));

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const total = messages.length + requests.length;

    if (total > 0) {
      let visible = true;
      const baseTitle = "Chat'App";

      intervalRef.current = setInterval(() => {
        document.title = visible
          ? `🔔(${total}) - ${baseTitle}`
          : `${baseTitle}`;
        visible = !visible;
      }, 1000);
    } else {
      document.title = "Chat'App";
    }

    // Cleanup
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      document.title = "Chat'App";
    };
  }, [messages.length, requests.length]);

  return null;
};

export default NotificationTitleUpdater;
