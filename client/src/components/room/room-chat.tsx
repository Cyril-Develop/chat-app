import MessagesProvider from "@/components/message/messages-provider";
import SendRoomMessage from "@/components/message/send-room-message";
import RoomHeader from "@/components/room/room-header";
import useGetRoom from "@/hooks/get-room";
import { useSocketStore } from "@/store/socket.store";
import {
  MessageRoomProps,
  RoomDataProps,
  RoomChatProps,
  MessageFromSocket,
} from "@/types/chat";
import { UpdatedUserInfosProps } from "@/types/user";
import { useEffect, useState } from "react";
import { Icons } from "@/components/Icons";
import useGetRoomMessages from "@/hooks/get-room-messages";

const RoomChat = ({ roomId, currentUser }: RoomChatProps) => {
  const { socket } = useSocketStore();
  const { data: fetchedRoom, isLoading: isLoadingRoom } = useGetRoom(roomId);
  const { data: meesagesInRoom } = useGetRoomMessages(roomId);
  const [roomData, setRoomData] = useState<RoomDataProps>(fetchedRoom);
  const [messages, setMessages] = useState<MessageRoomProps[]>(meesagesInRoom);
  const [arrivalMessage, setArrivalMessage] = useState<MessageRoomProps | null>(
    null
  );

  // Gérer un state local ici pour les likes ?

  useEffect(() => {
    if (fetchedRoom && meesagesInRoom) {
      setRoomData(fetchedRoom);
      setMessages(meesagesInRoom);
    }
  }, [fetchedRoom, meesagesInRoom]);

  useEffect(() => {
    if (arrivalMessage) {
      setMessages((prev) => [...prev, arrivalMessage]);
    }
  }, [arrivalMessage]);

  const handleDeleteMessage = (messageId: number) => {
    setMessages((prevMessages: MessageRoomProps[]) =>
      prevMessages.filter((msg) => msg.id !== messageId)
    );
  };

  // Gestion des mises à jour de l'utilisateur
  const handleUpdatedUser = (updatedUser: UpdatedUserInfosProps) => {
    // Mise à jour des informations de l'utilisateur dans roomData
    setRoomData((prevRoom) => {
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
    setArrivalMessage(data as MessageRoomProps);
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
    <div className="page_conversation">
      {isLoadingRoom ? (
        <Icons.loader width={18} height={18} />
      ) : (
        <>
          <RoomHeader room={roomData} currentUser={currentUser} />
          <MessagesProvider messages={messages} type="room" />
          <SendRoomMessage />
        </>
      )}
    </div>
  );
};

export default RoomChat;
