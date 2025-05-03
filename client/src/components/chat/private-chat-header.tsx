import PrivateChatMenu from "@/components/chat/private-chat-menu";
import UserThumbnail from "@/components/user-thumbnail";
import { PrivateChatHeaderProps } from "@/types/chat";
import { linkifyText } from "@/utils/linkify-text";
//import VocalChat from "@/components/stream/audio/vocal-chat";

const PrivateChatHeader = ({ contactInfos }: PrivateChatHeaderProps) => {
  return (
    <section className="flex flex-col space-y-1 text-md pb-2 sm:pb-4">
      <div className="flex justify-between items-center gap-4  w-full">
        <UserThumbnail
          userId={contactInfos.id}
          username={contactInfos.username}
          sex={contactInfos.sex}
          image={contactInfos.profileImage}
          imageSize="10"
          textSize="text-xl"
        />
        <div className="flex items-center gap-4">
          {/* <VocalChat
            roomId={contactInfos?.id}
            userId={contactInfos?.id}
            username={contactInfos?.username}
          /> */}
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
