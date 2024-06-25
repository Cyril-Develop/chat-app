import { UserInfos } from "@/types/types";

interface PreviewCardProps {
  user: UserInfos;
}

const PreviewCard = ({ user }: PreviewCardProps) => {
  return (
    <article className="flex gap-4 items-center rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none">
      <img
        src={`${import.meta.env.VITE_REACT_APP_IMAGE_URL}/profile/${user.profileImage}`}
        alt="Profile"
        className="w-24 h-24 rounded-full object-cover"
      />
      <div className="flex flex-col gap-2 w-full">
        <div className="flex flex-col justify-center overflow-hidden">
          <h2 className="font-semibold">{user.username}</h2>
          <p className="line-clamp-3">{user.bio}</p>
        </div>
        <p className="text-xs italic text-right text-muted-foreground">
          Depuis le {user.createdAt}
        </p>
      </div>
    </article>
  );
};

export default PreviewCard;
