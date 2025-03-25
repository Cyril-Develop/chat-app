import MessagesProvider from "@/components/message/messages-provider";
import SendMessage from "@/components/message/send-message-room";
import RoomHeader from "@/components/room/room-header";
import useGetRoom from "@/hooks/get-room";
import { useSocketStore } from "@/store/socket.store";
import { Message, RoomProps, MessageFromSocket } from "@/types/chat";
import { UpdatedUserInfosProps } from "@/types/user";
import { useEffect, useState } from "react";
import { Icons } from "@/components/Icons";

const Room = ({ roomId, currentUser }: RoomProps) => {
  const { socket } = useSocketStore();
  const { data: fetchedRoom, isLoading } = useGetRoom(roomId);
  const [roomData, setRoomData] = useState(fetchedRoom);
  const [messages, setMessages] = useState<Message[]>([]);
  const [arrivalMessage, setArrivalMessage] = useState<Message | null>(null);

  // Mise à jour de roomData lorsque la requête initiale est terminée
  useEffect(() => {
    if (fetchedRoom) {
      setRoomData(fetchedRoom);
      setMessages(fetchedRoom.messages);
    }
  }, [fetchedRoom]);

  useEffect(() => {
    if (arrivalMessage) {
      setMessages((prev) => [...prev, arrivalMessage]);
    }
  }, [arrivalMessage]);

  const handleDeleteMessage = (messageId: number) => {
    setMessages((prevMessages: Message[]) =>
      prevMessages.filter((msg) => msg.id !== messageId)
    );
  };

  // Gestion des mises à jour de l'utilisateur
  const handleUpdatedUser = (updatedUser: UpdatedUserInfosProps) => {
    // Mise à jour des informations de l'utilisateur dans roomData
    setRoomData((prevRoom: RoomProps) => {
      if (!prevRoom) return prevRoom;

      return {
        ...prevRoom,
        messages: prevRoom.messages?.map((msg) =>
          msg.user.id === updatedUser.id
            ? {
                ...msg,
                user: {
                  ...msg.user,
                  username: updatedUser.username,
                  profileImage: updatedUser.profileImage,
                },
              }
            : msg
        ),
      };
    });

    // Mise à jour des messages affichés
    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.user.id === updatedUser.id
          ? {
              ...msg,
              user: {
                ...msg.user,
                username: updatedUser.username,
                profileImage: updatedUser.profileImage,
              },
            }
          : msg
      )
    );
  };

  const handleGetMessage = (data: MessageFromSocket) => {
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
  };

  useEffect(() => {
    socket?.on("getMessage", handleGetMessage);
    socket?.on("messageDeleted", handleDeleteMessage);
    socket?.on("updatedUserInfos", handleUpdatedUser);

    return () => {
      socket?.off("getMessage", handleGetMessage);
      socket?.off("messageDeleted", handleDeleteMessage);
      socket?.off("updatedUserInfos", handleUpdatedUser);
    };
  }, [socket, handleGetMessage, handleDeleteMessage, handleUpdatedUser]);

  return (
    <div className="page_room">
      {isLoading ? (
        <Icons.loader width={18} height={18} />
      ) : (
        <>
          <RoomHeader room={roomData} currentUser={currentUser} />
          <MessagesProvider messages={messages} />
          <SendMessage recipient={{ type: "room", id: roomId }} />
        </>
      )}
    </div>
  );
};

export default Room;
