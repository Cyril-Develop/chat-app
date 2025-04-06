import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { genderColor } from "@/utils/gender-color";

interface UserThumbnailProps {
  image: string;
  username: string;
  imageSize: string;
  textSize?: string;
  gender: "HOMME" | "FEMME" | "AUTRE";
}

const UserThumbnail = ({
  image,
  username,
  imageSize,
  textSize = "text-base",
  gender,
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
          <span className={`${textSize} ${genderColor[gender]}`}>
            {username}
          </span>
        </AvatarFallback>
      </Avatar>
      <span className={`${textSize} ${genderColor[gender]}`}>{username}</span>
    </div>
  );
};

export default UserThumbnail;
