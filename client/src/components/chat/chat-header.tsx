import { useEffect, useState } from "react";
import { HeaderChatProps } from "@/types/chat";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DropDown from "@/components/chat/DropDown";
import StatutIndicator from "@/components/statut-indicator";
import { useSocketStore } from "@/store/socket.store";
import {HandleUserStatusChangedProps} from "@/types/user";

const HeaderChat = ({ contactInfos }: HeaderChatProps) => {
  const { socket, users } = useSocketStore();
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const user = users.find((user) => user.userId === contactInfos.id);
    setIsConnected(user?.statut === "online");

    const handleUserStatusChanged = ({ userId, statut } : HandleUserStatusChangedProps) => {
      if (userId === contactInfos.id) {
        setIsConnected(statut === "online");
      }
    };

    socket?.on("userStatusChanged", handleUserStatusChanged);

    return () => {
      socket?.off("userStatusChanged", handleUserStatusChanged);
    };
  }, [socket, users, contactInfos.id]);

  return (
    <div className="flex justify-between pb-1 text-md">
      <div className="flex gap-2">
        <div className="flex items-center relative">
          {isConnected && <StatutIndicator />}
          <Avatar className="w-16 h-16 md:w-10 md:h-10">
            <AvatarImage
              src={`${import.meta.env.VITE_REACT_APP_IMAGE_URL}/profile/${contactInfos.profileImage}`}
              className="rounded-full object-cover"
              alt={contactInfos.username}
            />
            <AvatarFallback>
              <span>{contactInfos.username}</span>
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="overflow-hidden">
          <h2 className="font-semibold">{contactInfos.username}</h2>
          <p className="line-clamp-3">{contactInfos.bio}</p>
        </div>
      </div>
      <DropDown />
    </div>
  );
};

export default HeaderChat;
