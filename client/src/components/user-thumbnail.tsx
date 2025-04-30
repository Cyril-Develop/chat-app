import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { sexColor } from "@/utils/sex-color";
import StatutIndicator from "@/components/indicator/statut-indicator";
import { cn } from "@/lib/utils";

interface UserThumbnailProps {
  userId?: number;
  username: string;
  sex: "MALE" | "FEMALE" | "NON_BINARY" | "UNDISCLOSED";
  image: string;
  imageSize?: string;
  textSize?: string;
}

const UserThumbnail = ({
  userId,
  username,
  sex,
  image,
  imageSize = "8",
  textSize = "text-base",
}: UserThumbnailProps) => {
  return (
    <div className="flex items-center gap-2">
      <Avatar className={cn(`w-${imageSize} h-${imageSize} overflow-visible`)}>
        <AvatarImage
          src={`${import.meta.env.VITE_REACT_APP_IMAGE_URL}/profile/${image}`}
          alt={`${username} - picture`}
          className={cn("rounded-full")}
        />
        <AvatarFallback>
          <span className={`${textSize} ${sexColor[sex]}`}>{username}</span>
        </AvatarFallback>
        {userId && <StatutIndicator userId={userId} />}
      </Avatar>
      <span className={`${textSize} ${sexColor[sex]}`}>{username}</span>
    </div>
  );
};

export default UserThumbnail;
