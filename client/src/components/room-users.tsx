import UserThumbnail from "@/components/user-thumbnail";
import StatutIndicator from "@/components/statut-indicator";
import { useSocketStore } from "@/store/socket.store";
import { useEffect, useState } from "react";

interface User {
  id: number;
  username: string;
  profileImage: string;
  
}

export function RoomUsers() {
  const [usersInRoom, setUsersInRoom] = useState<User[]>([]);
  const { socket, users } = useSocketStore();

  useEffect(() => {
    socket?.on("getUserInRoom", (user: User) => {
      setUsersInRoom(user);
    });

    return () => {
      socket?.off("getUserInRoom");
    };
  }, [socket, usersInRoom]);

  return (
    <div className="h-64 w-48 rounded-md">
      <div className="flex flex-col gap-4">
        {usersInRoom.map((user) => (
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
    </div>
  );
}