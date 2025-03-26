import { PreviewCardProps } from "@/types/setting";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import moment from "moment/min/moment-with-locales";
import { cn } from "@/lib/utils";

const PreviewCard = ({ user }: PreviewCardProps) => {
  return (
    <article className="flex gap-4 rounded-md border bg-popover dark:bg-background p-4 text-popover-foreground shadow-md outline-none">
      <Avatar className={cn("w-16 h-16 md:w-24 md:h-24")}>
        <AvatarImage
          src={`${import.meta.env.VITE_REACT_APP_IMAGE_URL}/profile/${
            user.profileImage
          }`}
          className={cn("rounded-full object-cover")}
          alt={user.username}
        />
        <AvatarFallback>
          <span>{user.username}</span>
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-2 overflow-hidden">
        <div className="flex flex-col justify-center overflow-hidden">
          <h2 className="font-semibold">{user.username}</h2>
          <p className="line-clamp">{user.bio}</p>
        </div>
        <p className="text-xs italic text-right text-muted-foreground">
          Depuis le {moment(user.createdAt).locale("fr").format("DD MMMM YYYY")}
        </p>
      </div>
    </article>
  );
};

export default PreviewCard;
