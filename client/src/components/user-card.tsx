import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import moment from "moment/min/moment-with-locales";
import { UserInfos } from "@/types/user";

function UserCard({ user }: { user: UserInfos }) {
  return (
    <HoverCard>
      <HoverCardTrigger>{user?.username}</HoverCardTrigger>
      <HoverCardContent className="w-60  absolute top-4">
        <div className="flex space-x-4">
          <Avatar>
            <AvatarImage
              src={`${import.meta.env.VITE_REACT_APP_IMAGE_URL}/profile/${
                user?.profileImage
              }`}
            />
            <AvatarFallback>
              <span>{user?.username}</span>
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-2 w-full">
            <div className="flex flex-col justify-center overflow-hidden">
              <h4 className="text-sm font-semibold">{user?.username}</h4>
              <p className="line-clamp-3 text-sm font-normal">{user?.bio}</p>
            </div>
            <p className="text-xs italic text-muted-foreground">
              Depuis le{" "}
              {moment(user?.createdAt).locale("fr").format("DD MMMM YYYY")}
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export default UserCard;
