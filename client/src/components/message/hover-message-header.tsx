import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { sexColor } from "@/utils/sex-color";

interface HoverMessageProps {
  user: {
    id: number;
    username: string;
    profileImage: string;
    bio: string;
    role: string;
    sex: "MALE" | "FEMALE" | "NON_BINARY" | "UNDISCLOSED";
  };
}

export function HoverMessageHeader({ user }: HoverMessageProps) {
  return (
    <div className="flex gap-4 rounded-md border bg-popover dark:bg-background p-4 text-popover-foreground w-[350px]">
      <Avatar className={cn("w-16 h-16 md:w-24 md:h-24")}>
        <AvatarImage
          src={`${import.meta.env.VITE_REACT_APP_IMAGE_URL}/profile/${
            user.profileImage
          }`}
          className={cn("rounded-full object-cover")}
          alt={user.username}
        />
        <AvatarFallback>
          <span className={`${sexColor[user.sex]}`}>{user.username}</span>
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-2 w-0 flex-1">
        <h4 className={`${sexColor[user.sex]} leading-none`}>
          {user.username}
        </h4>
        <p className="text-paragraph break-words whitespace-pre-wrap">
          {user.bio}
        </p>
      </div>
    </div>
  );
}
