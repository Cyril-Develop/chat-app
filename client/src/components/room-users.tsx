import { ScrollArea } from "@/components/ui/scroll-area";
import useGetRoom from "@/hooks/get-room";
import UserThumbnail from "@/components/user-thumbnail";
import { Skeleton } from "@/components/ui/skeleton";
import { useUserStore } from "@/store/user.store";
import StatutIndicator from "@/components/statut-indicator";
import { useRoomStore } from "@/store/room.store";
import { useSocketStore } from "@/store/socket.store";
import { useEffect, useState } from "react";

interface RoomUsersProps {
  roomId: number;
}

interface User {
  id: number;
  username: string;
  profileImage: string;
}


export function RoomUsers({ roomId }: RoomUsersProps) {
  const [usersInRoom, setUsersInRoom] = useState<User[]>([]);
  const { onlineUsers, socket } = useSocketStore();
  const { data: roomInfos, isLoading } = useGetRoom({ roomId });


  const isUserOnline = (userId: number) => {
    return onlineUsers.some((onlineUser) => onlineUser.userId === userId);
  };

  useEffect(() => {
    if (socket) {
      // Écouter l'événement userJoined
      socket.on('userJoined', (data: { userId: number, roomId: number }) => {
        if (data.roomId === roomId) {
          setUsersInRoom(users => [...users, { id: data.userId, username: 'loading...', profileImage: '' }]);
        }
      });

      // Écouter l'événement userLeft
      socket.on('userLeft', (data: { userId: number, roomId: number }) => {
        if (data.roomId === roomId) {
          setUsersInRoom(users => users.filter(user => user.id !== data.userId));
        }
      });

      // Récupérer les utilisateurs déjà présents dans le salon (facultatif)
      socket.emit('getUsersInRoom', roomId, (users: { id: number }[]) => {
        setUsersInRoom(users.map(user => ({ id: user.id, username: 'loading...', profileImage: '' })));
      });
    }

    return () => {
      if (socket) {
        socket.off('userJoined');
        socket.off('userLeft');
      }
    };
  }, [roomId, socket]);


  

  return (
    <div className="h-64 w-48 rounded-md">
      <div className="flex flex-col gap-4">
        {usersInRoom.map(user => (
          <div key={user.id} className="relative">
            {onlineUsers.some(onlineUser => onlineUser.userId === user.id) ? (
              <StatutIndicator status="online" />
            ) : (
              <StatutIndicator status="offline" />
            )}
            {/* <UserThumbnail
              imageSize="8"
              username={roomInfos?.users.find(u => u.userId === user.id)?.username || ''}
              image={roomInfos?.users.find(u => u.userId === user.id)?.profileImage || ''}
            /> */}
            {user.id}
          </div>
        ))}
      </div>
    </div>
  );
}


