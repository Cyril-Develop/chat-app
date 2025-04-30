import PrivateChatMenu from "@/components/chat/private-chat-menu";
import { PrivateChatHeaderProps } from "@/types/chat";
import UserThumbnail from "@/components/user-thumbnail";
import { linkifyText } from "@/utils/linkify-text";

const PrivateChatHeader = ({ contactInfos }: PrivateChatHeaderProps) => {
  return (
    <section className="flex flex-col space-y-1 text-md pb-2 sm:pb-4">
      <div className="flex gap-2">
        <div className="flex justify-between w-full">
          <UserThumbnail
            userId={contactInfos.id}
            username={contactInfos.username}
            sex={contactInfos.sex}
            image={contactInfos.profileImage}
            imageSize="10"
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
