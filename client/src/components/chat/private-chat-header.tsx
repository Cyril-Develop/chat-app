import PrivateChatMenu from "@/components/chat/private-chat-menu";
import StatutIndicator from "@/components/indicator/statut-indicator";
import { PrivateChatHeaderProps } from "@/types/chat";
import UserThumbnail from "@/components/user-thumbnail";
import { linkifyText } from "@/utils/linkify-text";

const PrivateChatHeader = ({ contactInfos }: PrivateChatHeaderProps) => {
  return (
    <section className="flex flex-col space-y-1 text-md pb-2 sm:pb-4">
      <div className="flex gap-2">
        <div className="flex justify-between relative w-full">
          <StatutIndicator userId={contactInfos.id} />
          <UserThumbnail
            imageSize="9"
            username={contactInfos.username}
            image={contactInfos.profileImage}
            sex={contactInfos.sex}
            textSize="text-xl"
          />
          <PrivateChatMenu />
        </div>
      </div>
      <p className="text-additional-info break-words whitespace-pre-wrap">
        {linkifyText(contactInfos.bio)}
      </p>
    </section>
  );
};

export default PrivateChatHeader;
