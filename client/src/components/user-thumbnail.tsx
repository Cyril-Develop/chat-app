import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserThumbnailProps {
  image: string;
  username: string;
}

const UserThumbnail = ({ image, username } : UserThumbnailProps) => {
  return (
    <div className="flex items-center">
      <Avatar className="flex items-center">
        <AvatarImage
          src={`${import.meta.env.VITE_REACT_APP_IMAGE_URL}/profile/${image}`}
          className="w-7 h-7 rounded-full object-cover"
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
