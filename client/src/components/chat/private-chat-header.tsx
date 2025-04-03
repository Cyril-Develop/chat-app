import { useEffect, useState } from "react";
import { PrivateChatHeaderProps } from "@/types/chat";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DropDown from "@/components/chat/private-chat-menu";
import StatutIndicator from "@/components/statut-indicator";
import { useSocketStore } from "@/store/socket.store";
import { HandleUserStatusChangedProps } from "@/types/user";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

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
      <div className="flex justify-between text-md pb-4">
        <div className="flex gap-2">
          <div className="flex relative w-10 h-10">
            {isConnected && <StatutIndicator />}
            <Avatar>
              <AvatarImage
                src={`${import.meta.env.VITE_REACT_APP_IMAGE_URL}/profile/${
                  contactInfos.profileImage
                }`}
                className={cn("rounded-full object-cover")}
                alt={contactInfos.username}
              />
              <AvatarFallback>
                <span>{contactInfos.username}</span>
              </AvatarFallback>
            </Avatar>
          </div>
          <div>
            <h2 className="font-semibold">{contactInfos.username}</h2>
            <p className="text-additional-info">{contactInfos.bio}</p>
          </div>
        </div>
        <DropDown />
      </div>
      <Separator />
    </>
  );
};

export default PrivateChatHeader;
