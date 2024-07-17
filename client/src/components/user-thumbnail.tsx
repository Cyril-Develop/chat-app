import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserThumbnailProps {
  image: string;
  username: string;
  imageSize: string;
  textSize?: string;
}

const UserThumbnail = ({
  image,
  username,
  imageSize,
  textSize,
}: UserThumbnailProps) => {
  return (
    <div className="flex items-center gap-3">
      <Avatar
        className={`w-${imageSize} h-${imageSize} rounded-full object-cover`}
      >
        <AvatarImage
          src={`${import.meta.env.VITE_REACT_APP_IMAGE_URL}/profile/${image}`}
          alt={`${username} - picture`}
        />
        <AvatarFallback>
          <span>{username}</span>
        </AvatarFallback>
      </Avatar>
      <span className={textSize}>{username}</span>
    </div>
  );
};

export default UserThumbnail;
