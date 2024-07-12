import moment from "moment/min/moment-with-locales";
import UserThumbnail from "@/components/user-thumbnail";
import { Icons } from "@/components/Icons";
import { Button } from "../ui/button";
import { getUserId } from "@/utils/get-userId";
import { useDeleteMessageMutation } from "@/hooks/delete-message";

interface MessageProps {
  message: {
    id: number;
    message: string;
    createdAt: string;
    image?: string;
    user: {
      id: number;
      username: string;
      profileImage: string;
    };
  };
}

const Message = ({ message }: MessageProps) => {
  const userId = getUserId();
  const mutation = useDeleteMessageMutation();

  const handleDelete = (messageId: number) => {
    mutation.mutate(messageId);
  };

  return (
    <div className="w-fit flex flex-col gap-2 py-4 pl-4">
      <UserThumbnail
        image={message.user.profileImage}
        username={message.user.username}
        imageSize="6"
        textSize="text-sm"
      />

      <p className="bg-primary-foreground p-3 border rounded-md">
        {message.message}
      </p>

      <div className="flex justify-between min-w-52">
        <span className="text-xs text-gray-600 dark:text-gray-400">
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
