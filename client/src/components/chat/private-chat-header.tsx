import PrivateChatMenu from "@/components/chat/private-chat-menu";
import StatutIndicator from "@/components/indicator/statut-indicator";
import { Separator } from "@/components/ui/separator";
import { useSocketStore } from "@/store/socket.store";
import { PrivateChatHeaderProps } from "@/types/chat";
import { HandleUserStatusChangedProps } from "@/types/user";
import { useEffect, useState } from "react";
import UserThumbnail from "@/components/user-thumbnail";

const PrivateChatHeader = ({ contactInfos }: PrivateChatHeaderProps) => {
  const { socket, users } = useSocketStore();
  const [isConnected, setIsConnected] = useState(false);

  const handleUserStatusChanged = ({
    userId,
    visible,
  }: HandleUserStatusChangedProps) => {
    if (userId === contactInfos.id) {
      setIsConnected(visible === true);
    }
  };

  useEffect(() => {
    const user = users.find((user) => user.userId === contactInfos.id);
    // Si l'utilisateur est connecté, on met à jour le state isConnected
    setIsConnected(user?.visible === true);

    socket?.on("userStatusChanged", handleUserStatusChanged);

    return () => {
      socket?.off("userStatusChanged", handleUserStatusChanged);
    };
  }, [socket, users, contactInfos]);

  return (
    <>
      <section className="flex flex-col text-md pb-4 min-h-12">
        <div className="flex gap-2">
          <div className="flex justify-between relative w-full">
            {isConnected && <StatutIndicator />}
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
          {contactInfos.bio}
        </p>
      </section>
      <Separator />
    </>
  );
};

export default PrivateChatHeader;
