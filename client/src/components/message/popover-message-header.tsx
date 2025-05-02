import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { sexColor } from "@/utils/sex-color";
import { Button } from "@/components/ui/button";
import UserThumbnail from "../user-thumbnail";

interface PopoverMessageCardProps {
  user: {
    id: number;
    username: string;
    profileImage: string;
    bio: string;
    role: "USER" | "ADMIN" | "GUEST";
    sex: "MALE" | "FEMALE" | "NON_BINARY" | "UNDISCLOSED";
  };
}

export function PopoverMessageHeader({ user }: PopoverMessageCardProps) {
  return (
    <Popover>
      <PopoverTrigger asChild title="Voir la carte de visite">
        <Button variant="btnMessage" className="p-0 inline w-fit ">
          <UserThumbnail
            image={user.profileImage}
            username={user.username}
            sex={user.sex}
            imageSize="6"
          />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        sideOffset={8}
        align="start"
        className="p-0 max-w-[350px] rounded-md border bg-popover dark:bg-background text-popover-foreground"
      >
        <div className="flex gap-4 p-4">
          <Avatar className={cn("w-16 h-16 md:w-24 md:h-24")}>
            <AvatarImage
              src={`${import.meta.env.VITE_REACT_APP_IMAGE_URL}/profile/${
                user.profileImage
              }`}
              alt={user.username}
              className="rounded-full object-cover"
            />
            <AvatarFallback>
              <span className={sexColor[user.sex]}>{user.username}</span>
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-col gap-2 flex-1">
            <h4
              className={cn(
                sexColor[user.sex],
                "font-semibold leading-none truncate"
              )}
            >
              {user.username}
            </h4>
            <p className="text-additional-info break-words whitespace-pre-wrap">
              {user.bio}
            </p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
