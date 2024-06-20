import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import useFetchUser from "@/hooks/fetch-user";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function UserCard() {
  const { data } = useFetchUser();

  return (
    <HoverCard>
      <HoverCardTrigger>{data?.username}</HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex space-x-4">
          <Avatar>
            <AvatarImage
              src={`${import.meta.env.VITE_REACT_APP_IMAGE_URL}/profile/${
                data?.profileImage
              }`}
            />
            <AvatarFallback>
              <span>{data?.username}</span>
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-2 w-full">
            <div className="flex flex-col justify-center overflow-hidden">
              <h4 className="text-sm font-semibold">{data?.username}</h4>
              <p className="line-clamp-3 text-sm font-normal">{data?.bio}</p>
            </div>
            <p className="text-xs italic text-muted-foreground">
              Depuis le {data?.createdAt}
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export default UserCard;
