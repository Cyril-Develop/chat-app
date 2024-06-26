import { ScrollArea } from "@/components/ui/scroll-area";
import useGetRoom from "@/hooks/get-room";
import UserThumbnail from "@/components/user-thumbnail";
import { Skeleton } from "@/components/ui/skeleton";

interface RoomUsersProps {
  roomId: number;
}

interface User {
  id: number;
  username: string;
  profileImage: string;
}

export function RoomUsers({ roomId }: RoomUsersProps) {
  const { data: roomInfos, isLoading } = useGetRoom({ roomId });

  return (
    <ScrollArea className="h-64 w-48 rounded-md">
      <div className="flex flex-col gap-4">
        {roomInfos?.users.map((user: User) => (
          <UserThumbnail
            size="8"
            key={user.id}
            username={user.username}
            image={user.profileImage}
          />
        ))}
      </div>
    </ScrollArea>
  );
}
