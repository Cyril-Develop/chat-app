import moment from "moment/min/moment-with-locales";
import UserThumbnail from "@/components/user-thumbnail";
import { Icons } from "@/components/Icons";
import { Button } from "../ui/button";

interface MessageProps {
  message: {
    id: number;
    content: string;
    createdAt: string;
    user: {
      id: number;
      username: string;
      profileImage: string;
    };
  };
}

const handleDelete = () => {
  console.log("Message deleted");
};

const Message = ({ message }: MessageProps) => {

  return (
    <div className="w-fit flex flex-col gap-2">
      <UserThumbnail
        image={message.user.profileImage}
        username={message.user.username}
        imageSize="6"
        textSize="text-sm"
      />

      <p className="bg-primary-foreground p-3 border rounded-md">
        {message.content}
      </p>

      <div className="flex justify-between min-w-52">
        <span className="text-xs text-gray-600 dark:text-gray-400">
          {moment(message.createdAt).locale("fr").fromNow()}
        </span>
        <Button
          variant="alert"
          title="Supprimer le message"
          className="p-0"
          onClick={() => handleDelete()}
        >
          <Icons.delete width={16} height={16} />
        </Button>
      </div>
    </div>
  );
};

export default Message;
