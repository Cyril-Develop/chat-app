import { useUserStore } from "@/store/user.store";
import Image from "@/assets/picture-default.svg";

const PreviewCard = () => {
  const { username, bio } = useUserStore((state) => state.user);
  return (
    <article className="flex gap-4 h-32 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none">
      <img src={Image} alt="Profile" className="w-24 h-24" />
      <div className="overflow-hidden">
        <h2 className="font-semibold">{username}</h2>
        <p className="line-clamp-3">{bio}</p>
      </div>
    </article>
  );
};

export default PreviewCard;

