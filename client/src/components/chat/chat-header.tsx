import { useEffect, useState } from "react";
import { HeaderChatProps } from "@/types/chat";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DropDown from "@/components/chat/DropDown";
import StatutIndicator from "@/components/statut-indicator";
import { useSocketStore } from "@/store/socket.store";
import { HandleUserStatusChangedProps } from "@/types/user";
import { Separator } from "@/components/ui/separator";

const HeaderChat = ({ contactInfos }: HeaderChatProps) => {
  const { socket, users } = useSocketStore();
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const user = users.find((user) => user.userId === contactInfos.id);
    setIsConnected(user?.statut === "online");

    const handleUserStatusChanged = ({
      userId,
      statut,
    }: HandleUserStatusChangedProps) => {
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
    <>
      <div className="flex justify-between pb-2 text-md">
        <div className="flex gap-2">
          <div className="flex relative w-10 h-10">
            {isConnected && <StatutIndicator />}
            <Avatar>
              <AvatarImage
                src={`${import.meta.env.VITE_REACT_APP_IMAGE_URL}/profile/${
                  contactInfos.profileImage
                }`}
                className="rounded-full object-cover"
                alt={contactInfos.username}
              />
              <AvatarFallback>
                <span>{contactInfos.username}</span>
              </AvatarFallback>
            </Avatar>
          </div>
          <div>
            <h2 className="font-semibold">{contactInfos.username}</h2>
            <p className="text-sm">{contactInfos.bio}</p>
          </div>
        </div>
        <DropDown />
      </div>
      <Separator />
    </>
  );
};

export default HeaderChat;
