import { ScrollArea } from "@/components/ui/scroll-area";
import useGetRoom from "@/hooks/get-room";
import UserThumbnail from "@/components/user-thumbnail";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

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
    <ScrollArea className="h-64 w-48 rounded-md ">
      {roomInfos?.users.map((user: User) => (
        <div key={user.id}>
          {isLoading ? (
            <Skeleton className="flex items-center gap-2 pb-4" />
          ) : (
            <>
              <UserThumbnail
                username={user.username}
                image={user.profileImage}
              />
              <Separator className="mt-4" />
            </>
          )}
        </div>
      ))}
    </ScrollArea>
  );
}
