import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserThumbnailProps {
  image: string;
  username: string;
  size: string;
}

const UserThumbnail = ({ image, username, size }: UserThumbnailProps) => {
  return (
    <div className="flex items-center gap-2">
      <Avatar className={`w-${size} h-${size} rounded-full object-cover`}>
        <AvatarImage
          src={`${import.meta.env.VITE_REACT_APP_IMAGE_URL}/profile/${image}`}
          alt={username}
        />
        <AvatarFallback>
          <span>{username}</span>
        </AvatarFallback>
      </Avatar>
      <span>{username}</span>
    </div>
  );
};

export default UserThumbnail;
