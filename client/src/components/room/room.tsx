import MessagesProvider from "@/components/message/messages-provider";
import SendMessage from "@/components/message/send-message-room";
import RoomHeader from "@/components/room/room-header";
import { Skeleton } from "@/components/ui/skeleton";
import useGetRoom from "@/hooks/get-room";
import { useSocketStore } from "@/store/socket.store";
import { Message, RoomProps } from "@/types/chat";
import { useEffect, useState } from "react";

const Room = ({ roomId, currentUser }: RoomProps) => {
  const { socket } = useSocketStore();
  const { data: room, isLoading } = useGetRoom({ roomId });
  const [messages, setMessages] = useState<Message[]>([]);
  const [arrivalMessage, setArrivalMessage] = useState<Message | null>(null);

  useEffect(() => {
    if (room) {
      setMessages(room.messages);
    }
  }, [room]);

  useEffect(() => {
    socket?.on("getMessage", (data) => {
      setArrivalMessage({
        id: data.id,
        message: data.message,
        image: data.image,
        createdAt: data.createdAt,
        user: {
          id: data.userId,
          username: data.username,
          profileImage: data.profileImage,
        },
      });
    });

    socket?.on("messageDeleted", (messageId) => {
      setMessages((prevMessages) =>
        prevMessages.filter((msg) => msg.id !== messageId)
      );
    });
  }, [room, socket]);

  useEffect(() => {
    if (arrivalMessage) {
      setMessages((prev) => [...prev, arrivalMessage]);
    }
  }, [arrivalMessage]);

  return (
    <div className="page_room">
      {isLoading ? (
        <>
          <Skeleton className="flex justify-between pt-4 pb-4 text-3xl" />
          <Skeleton className="grow mt-4 mb-4" />
          <Skeleton className="flex items-center gap-4 mt-4 mb-4" />
        </>
      ) : (
        <>
          <RoomHeader room={room} currentUser={currentUser} />

          <MessagesProvider messages={messages} />

          <SendMessage recipient={{ type: "room", id: roomId }} />
        </>
      )}
    </div>
  );
};

export default Room;
