import moment from "moment/min/moment-with-locales";
import UserThumbnail from "@/components/user-thumbnail";
import { Icons } from "@/components/Icons";
import { Button } from "../ui/button";
import { getUserId } from "@/utils/get-userId";
import { useDeleteMessageMutation } from "@/hooks/delete-message";
import { MessageProps } from "@/types/message";

const Message = ({ message }: MessageProps) => {
  const userId = getUserId();
  const deleteMessage = useDeleteMessageMutation();

  const handleDelete = (messageId: number) => {
    deleteMessage.mutate(messageId);
  };

  console.log(message);
  

  const isMyMessage = message.user.id === userId;

  return (
    <div
      className={`w-fit flex flex-col gap-2 p-3 xl:py-4  ${
        isMyMessage ? "ml-auto xl:mr-8" : "xl:ml-8"
      } `}
    >
      <UserThumbnail
        image={message.user.profileImage}
        username={message.user.username}
        imageSize="6"
        textSize="text-sm"
      />

      <div className="flex flex-col gap-2 max-w-[235px] 2xl:max-w-[500px]">
        {message.message && (
          <p
            className={` p-3 border rounded-md break-words whitespace-pre-wrap  ${
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
            className=" object-cover rounded-md"
            alt={message.user.username}
          />
        )}
      </div>

      <div className="flex justify-between min-w-44">
        <span className="text-xs text-description">
          {moment(message.createdAt).locale("fr").fromNow()}
        </span>
        {userId === message.user.id && (
          <Button
            variant="alert"
            title="Supprimer le message"
            className="p-0"
            onClick={() => handleDelete(message.id)}
          >
            <Icons.delete width={16} height={16} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Message;
