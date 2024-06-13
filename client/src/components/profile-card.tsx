import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useUserStore } from "@/store/user.store";

function ProfileCard( ) {
  const { username, bio } = useUserStore((state) => state.user);

  return (
    <HoverCard defaultOpen open>
      <HoverCardTrigger>

      </HoverCardTrigger>
      <HoverCardContent>
        <div>
          <h2>{username}</h2>
          <p>{bio}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export default ProfileCard;
