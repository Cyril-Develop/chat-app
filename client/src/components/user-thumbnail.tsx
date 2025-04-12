import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { sexColor } from "@/utils/sex-color";

interface UserThumbnailProps {
  image: string;
  username: string;
  imageSize: string;
  textSize?: string;
  sex: "MALE" | "FEMALE" | "NON_BINARY" | "UNDISCLOSED";
}

const UserThumbnail = ({
  image,
  username,
  imageSize,
  textSize = "text-base",
  sex,
}: UserThumbnailProps) => {
  return (
    <div className="flex items-center gap-2">
      <Avatar
        className={`w-${imageSize} h-${imageSize} rounded-full object-cover`}
      >
        <AvatarImage
          src={`${import.meta.env.VITE_REACT_APP_IMAGE_URL}/profile/${image}`}
          alt={`${username} - picture`}
        />
        <AvatarFallback>
          <span className={`${textSize} ${sexColor[sex]}`}>{username}</span>
        </AvatarFallback>
      </Avatar>
      <span className={`${textSize} ${sexColor[sex]}`}>{username}</span>
    </div>
  );
};

export default UserThumbnail;
