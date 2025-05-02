import moment from "moment/min/moment-with-locales";
import { Icons } from "@/components/Icons";
import { HoverMessageLike } from "@/components/message/hover-message-like";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function MessageFooter({
  message,
  canDeleteMessage,
  isMessageLiked,
  likes,
  handleLike,
  handleDelete,
}: {
  message: any;
  canDeleteMessage: boolean;
  isMessageLiked: boolean;
  likes: {
    userId: number;
    username: string;
    sex: "MALE" | "FEMALE" | "NON_BINARY" | "UNDISCLOSED";
  }[];

  handleLike: () => void;
  handleDelete: (messageId: number) => void;
}) {
  return (
    <div className="flex justify-between min-w-[220px]">
      <span className="text-xs text-gray-600 dark:text-gray-400">
        {moment(message.createdAt).locale("fr").fromNow()}
      </span>

      <div className="flex gap-4">
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
              width={18}
              height={18}
            />
          </Button>

          <HoverMessageLike
            trigger={likes.length}
            users={likes.map((like) => ({
              username: like.username,
              sex: like.sex,
            }))}
          />
        </div>
        {canDeleteMessage && (
          <Button
            variant="alert"
            title="Supprimer le message"
            className={cn("p-0")}
            onClick={() => handleDelete(message.id)}
          >
            <Icons.delete width={18} height={18} />
          </Button>
        )}
      </div>
    </div>
  );
}
