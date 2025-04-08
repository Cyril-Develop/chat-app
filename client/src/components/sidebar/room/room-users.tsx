import UserThumbnail from "@/components/user-thumbnail";
import StatutIndicator from "@/components/statut-indicator";
import { HandleUserStatusChangedProps, UserInfos } from "@/types/user";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { useRoomStore } from "@/store/room.store";
import { getVisibleUsersCount } from "@/utils/room";
// import { getVisibleUsersLabel } from "@/utils/room";
import { useEffect } from "react";
import { useSocketStore } from "@/store/socket.store";
import { Separator } from "@/components/ui/separator";

export function RoomUsers() {
  const { usersInRoom, setUsersInRoom, updateUserInRoom } = useRoomStore();
  const { socket } = useSocketStore();
  const { room } = useRoomStore();
  const { id: roomId } = room || {};

  useEffect(() => {
    const handleUserInRoom = (userList: UserInfos[]) => {
      setUsersInRoom(userList);
    };

    const handleUserStatusChanged = ({
      userId,
      visible,
    }: HandleUserStatusChangedProps) => {
      updateUserInRoom({ id: userId, visible });
    };

    const handleUpdatedUserInfos = (updatedUser: UserInfos) => {
      updateUserInRoom(updatedUser);
    };

    socket?.on("getUserInRoom", handleUserInRoom);
    socket?.on("userStatusChanged", handleUserStatusChanged);
    socket?.on("updatedUserInfos", handleUpdatedUserInfos);

    return () => {
      socket?.off("getUserInRoom", handleUserInRoom);
      socket?.off("userStatusChanged", handleUserStatusChanged);
      socket?.off("updatedUserInfos", handleUpdatedUserInfos);
    };
  }, [socket, roomId]);

  return (
    <>
      {roomId && (
        <>
          <div className="flex justify-between">
            <h2 className="text-title">
              {/* {getVisibleUsersLabel(usersInRoom)} */}
              Membres
            </h2>
            <span className="text-additional-info self-end">
              {getVisibleUsersCount(usersInRoom)}
            </span>
          </div>
          <Separator />
          <ScrollArea className={cn("h-72")}>
            <div className="flex flex-col gap-4">
              {usersInRoom
                ?.filter((user) => user.visible === true)
                .map((user) => (
                  <div key={user.id} className="relative">
                    <StatutIndicator />
                    <UserThumbnail
                      imageSize="8"
                      username={user.username}
                      image={user.profileImage}
                      gender={user.gender}
                    />
                  </div>
                ))}
            </div>
          </ScrollArea>
        </>
      )}
    </>
  );
}
