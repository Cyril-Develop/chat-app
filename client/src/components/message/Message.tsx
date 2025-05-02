import { useDeleteMessageMutation } from "@/hooks/api/messages/delete-message";
import { useDeletePrivateMessageMutation } from "@/hooks/api/messages/delete-private-message";
import { useDislikeMessageMutation } from "@/hooks/api/messages/dislike-message";
import useGetUser from "@/hooks/api/user/get-current-user";
import { useLikeMessageMutation } from "@/hooks/api/messages/like-message";
import { useSocketStore } from "@/store/socket.store";
import { LikeFromSocket, MessageProps } from "@/types/message";
import { useEffect, useState } from "react";
import MessageContent from "@/components/message/message-content";
import MessageFooter from "@/components/message/message-footer";
import { PopoverMessageHeader } from "@/components/message/popover-message-header";

const Message = ({ message, type }: MessageProps) => {
  const socket = useSocketStore((state) => state.socket);
  const { data: currentUser } = useGetUser();
  const { mutate: deleteMessageInRoom } = useDeleteMessageMutation();
  const { mutate: deletePrivateMessage } = useDeletePrivateMessageMutation();
  const { mutate: likeMessage } = useLikeMessageMutation();
  const { mutate: dislikeMessage } = useDislikeMessageMutation();
  const [likes, setLikes] = useState(message.likes || []);
  useEffect(() => {
    setLikes(message.likes ?? []);
  }, [message]);

  // Vérifier si l'utilisateur courant a liké le message
  const isMessageLiked = likes?.some((like) => like.userId === currentUser?.id);

  // Ajouter ou retirer le like d'un message ( message privé ou room) en fonction du type (private ou room)
  const handleLike = () => {
    // Vérifier si l'utilisateur courant a liké le message (message privé ou room)
    if (isMessageLiked) {
      dislikeMessage({ type, messageId: message.id });

      setLikes(likes.filter((like) => like.userId !== currentUser?.id));
    } else {
      likeMessage({ type, messageId: message.id });

      setLikes([
        ...likes,
        {
          userId: currentUser?.id,
          username: currentUser?.username,
          sex: currentUser?.sex,
        },
      ]);
    }
  };

  const handleDelete = (messageId: number) => {
    if (type === "private") {
      deletePrivateMessage(messageId);
    } else {
      deleteMessageInRoom(messageId);
    }
  };

  const role = currentUser?.role;
  const isMyMessage = message.user.id === currentUser?.id;
  const canDeleteMessage = isMyMessage || role === "ADMIN";

  const handleGetLike = (data: LikeFromSocket) => {
    // Vérifier si le like reçu concerne ce message
    if (data.messageId === message.id) {
      setLikes((prevLikes) => {
        // Si l'utilisateur a déjà liké, on évite de le dupliquer
        const alreadyLiked = prevLikes.some(
          (like) => like.userId === data.userId
        );
        if (!alreadyLiked) {
          return [
            ...prevLikes,
            {
              userId: data.userId,
              username: data.username,
              sex: data.sex,
            },
          ];
        }
        return prevLikes;
      });
    }
  };

  const handleRemoveLike = (data: LikeFromSocket) => {
    // Vérifier si le like reçu concerne ce message
    if (data.messageId === message.id) {
      setLikes((prevLikes) =>
        prevLikes.filter((like) => like.userId !== data.userId)
      );
    }
  };

  useEffect(() => {
    socket?.on("messageLiked", handleGetLike);
    socket?.on("messageDisliked", handleRemoveLike);

    return () => {
      socket?.off("messageLiked", handleGetLike);
      socket?.off("messageDisliked", handleRemoveLike);
    };
  }, [socket]);

  return (
    <div
      className={`w-fit flex flex-col gap-2 p-3 xl:py-4  ${
        isMyMessage ? "ml-auto xl:mr-8" : "xl:ml-8"
      }`}
    >
      <PopoverMessageHeader user={message.user} />

      <MessageContent message={message} isMyMessage={isMyMessage} />

      <MessageFooter
        message={message}
        canDeleteMessage={canDeleteMessage}
        isMessageLiked={isMessageLiked}
        likes={likes}
        handleLike={handleLike}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Message;
