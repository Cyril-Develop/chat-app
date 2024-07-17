import UserThumbnail from "@/components/user-thumbnail";
import StatutIndicator from "@/components/statut-indicator";
import { useEffect, useState } from "react";
import { useSocketStore } from "@/store/socket.store";
import useWindowWidth from "@/hooks/window-width";
import { useRoomStore } from "@/store/room.store";
import { User } from "@/types/types";
import { ScrollArea } from "@/components/ui/scroll-area";

export function RoomUsers() {
  const [usersInRoom, setUsersInRoom] = useState<User[]>([]);
  const { socket, users } = useSocketStore();
  const windowWidth = useWindowWidth();
  const { room } = useRoomStore();

  useEffect(() => {
    // If the window width is less than 1024px, request the users in the room for the mobile view
    if (windowWidth < 1024) {
      socket?.emit("requestUserInRoom", room);
    }

    const handleUserInRoom = (userList: User[]) => {
      setUsersInRoom(userList);
    };

    socket?.on("getUserInRoom", handleUserInRoom);

    return () => {
      socket?.off("getUserInRoom", handleUserInRoom);
      socket?.off("requestUserInRoom");
    };
  }, [socket, windowWidth]);

  return (
    <ScrollArea className="h-72">
      <div className="flex flex-col gap-4">
        {usersInRoom?.map((user) => (
          <div key={user.id} className="relative">
            {users.some((u) => u.userId === user.id) ? (
              <StatutIndicator status="online" />
            ) : (
              <StatutIndicator status="offline" />
            )}
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
