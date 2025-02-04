import UserThumbnail from "@/components/user-thumbnail";
import StatutIndicator from "@/components/statut-indicator";
import { useEffect, useState } from "react";
import { useSocketStore } from "@/store/socket.store";
import useWindowWidth from "@/hooks/window-width";
import { useRoomStore } from "@/store/room.store";
import { UserInfos, HandleUserStatusChangedProps } from "@/types/user";
import { ScrollArea } from "@/components/ui/scroll-area";

export function RoomUsers() {
  const [usersInRoom, setUsersInRoom] = useState<UserInfos[]>([]);
  const { socket } = useSocketStore();
  const windowWidth = useWindowWidth();
  const { room } = useRoomStore();
  const { id: roomId } = room || {};

  useEffect(() => {
    if (windowWidth < 1024) {
      socket?.emit("requestUserInRoom", roomId);
    }

    const handleUserInRoom = (userList: UserInfos[]) => {
      setUsersInRoom(userList);
    };

    const handleUserStatusChanged = ({
      userId,
      statut,
    }: HandleUserStatusChangedProps) => {
      setUsersInRoom((prevUsers) =>
        prevUsers.map((user) =>
          user.id === userId ? { ...user, statut } : user
        )
      );
    };

    // Mise à jour des informations utilisateur (nom, photo, etc.)
    const handleUpdatedUserInfos = (updatedUser: UserInfos) => {
      setUsersInRoom((prevUsers) =>
        prevUsers.map((user) =>
          user.id === updatedUser.id
            ? {
                ...user,
                username: updatedUser.username,
                profileImage: updatedUser.profileImage,
              }
            : user
        )
      );
    };

    socket?.on("getUserInRoom", handleUserInRoom);
    socket?.on("userStatusChanged", handleUserStatusChanged);
    socket?.on("updatedUserInfos", handleUpdatedUserInfos);

    return () => {
      socket?.off("getUserInRoom", handleUserInRoom);
      socket?.off("userStatusChanged", handleUserStatusChanged);
      socket?.off("updatedUserInfos", handleUpdatedUserInfos);
    };
  }, [socket, windowWidth, roomId]);

  return (
    <ScrollArea className="h-72">
      <div className="flex flex-col gap-4">
        {usersInRoom
          ?.filter((user) => user.statut === "online")
          .map((user) => (
            <div key={user.id} className="relative">
              <StatutIndicator />
              <UserThumbnail
                imageSize="8"
                username={user.username}
                image={user.profileImage}
              />
            </div>
          ))}
      </div>
    </ScrollArea>
  );
}
