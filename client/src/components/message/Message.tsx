import { Icons } from "@/components/Icons";
import { HoverMessage } from "@/components/message/hover-message";
import { Button } from "@/components/ui/button";
import UserThumbnail from "@/components/user-thumbnail";
import { useDeleteMessageMutation } from "@/hooks/api/messages/delete-message";
import { useDeletePrivateMessageMutation } from "@/hooks/api/messages/delete-private-message";
import { useDislikeMessageMutation } from "@/hooks/api/messages/dislike-message";
import useGetUser from "@/hooks/api/user/get-current-user";
import { useLikeMessageMutation } from "@/hooks/api/messages/like-message";
import { cn } from "@/lib/utils";
import { useSocketStore } from "@/store/socket.store";
import { LikeFromSocket, MessageProps } from "@/types/message";
import moment from "moment/min/moment-with-locales";
import { useEffect, useState } from "react";

const Message = ({ message, type }: MessageProps) => {
  const { socket } = useSocketStore();
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
        { userId: currentUser?.id, username: currentUser?.username },
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
            { userId: data.userId, username: data.username },
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
      <UserThumbnail
        image={message.user.profileImage}
        username={message.user.username}
        imageSize="6"
        textSize="text-label"
      />

      <div className="flex flex-col gap-2 max-w-[235px] 2xl:max-w-[500px]">
        {message.message && (
          <p
            className={`p-3 border rounded-md break-words whitespace-pre-wrap  ${
              isMyMessage
                ? "bg-primary text-secondary"
                : "bg-primary-foreground"
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

      <div className="flex justify-between min-w-[220px]">
        <span className="text-xs text-muted-foreground">
          {moment(message.createdAt).locale("fr").fromNow()}
        </span>

        <div className="flex gap-2">
          <div className="flex gap-1">
            <Button
              variant="btnMenu"
              title={isMessageLiked ? "Retirer le like" : "Liker le message"}
              className={cn(
                `p-0 hover:text-primary ${isMessageLiked && "text-primary "}`
              )}
              onClick={handleLike}
            >
              <Icons.like
                fill={isMessageLiked ? "#3570D1" : "none"}
                width={16}
                height={16}
              />
            </Button>

            {likes.length > 0 && (
              <HoverMessage
                trigger={likes.length}
                users={likes.map((like) => like.username)}
              />
            )}
          </div>
          {canDeleteMessage && (
            <Button
              variant="alert"
              title="Supprimer le message"
              className={cn("p-0")}
              onClick={() => handleDelete(message.id)}
            >
              <Icons.delete width={16} height={16} />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
