import StatutIndicator from "@/components/indicator/statut-indicator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import UserThumbnail from "@/components/user-thumbnail";
import { cn } from "@/lib/utils";
import { useRoomStore } from "@/store/room.store";
import { getVisibleUsersCount, getVisibleUsersLabel } from "@/utils/room";

export function RoomUsers() {
  const { usersInRoom } = useRoomStore();
  const roomId = useRoomStore((state) => state.room?.id);

  return (
    <>
      {roomId && (
        <>
          <div className="flex justify-between items-center">
            <h2 className="text-title">{getVisibleUsersLabel(usersInRoom)}</h2>
            <span className="text-gray-600 dark:text-gray-400">
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
                      sex={user.sex}
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
