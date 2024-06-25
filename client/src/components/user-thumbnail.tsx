import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserThumbnailProps {
  image: string;
  username: string;
}

const UserThumbnail = ({ image, username } : UserThumbnailProps) => {
  return (
    <div className="flex items-center gap-2">
      <Avatar className="w-12 h-12">
        <AvatarImage
          src={`${import.meta.env.VITE_REACT_APP_IMAGE_URL}/profile/${image}`}
          className="rounded-full object-cover"
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
