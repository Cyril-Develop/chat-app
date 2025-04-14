import { MessageContentProps } from "@/types/message";

export default function MessageContent({
  message,
  isMyMessage,
}: MessageContentProps) {
  return (
    <div className="flex flex-col gap-2 max-w-[235px] 2xl:max-w-[500px]">
      {message.message && (
        <p
          className={`p-3 border rounded-md break-words whitespace-pre-wrap ${
            isMyMessage
              ? "bg-primary text-secondary dark:text-primary-foreground rounded-br-none"
              : "bg-primary-foreground rounded-bl-none"
          }`}
        >
          {message.message}
        </p>
      )}

      {message.image && (
        <img
          src={`${import.meta.env.VITE_REACT_APP_IMAGE_URL}/message/${
            message.image
          }`}
          className="object-cover rounded-md"
          alt={message.user.username}
        />
      )}
    </div>
  );
}
