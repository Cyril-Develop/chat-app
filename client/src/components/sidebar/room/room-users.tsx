import { Icons } from "@/components/Icons";
import StatutIndicator from "@/components/indicator/statut-indicator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import UserThumbnail from "@/components/user-thumbnail";
import { cn } from "@/lib/utils";
import { useRoomStore } from "@/store/room.store";
import { useSocketStore } from "@/store/socket.store";
import { getVisibleUsersCount, getVisibleUsersLabel } from "@/utils/room";
import { useEffect, useState } from "react";

export function RoomUsers() {
  const { usersInRoom } = useRoomStore();
  const { socket } = useSocketStore();
  const [speakingUsers, setSpeakingUsers] = useState<{
    [userId: number]: boolean;
  }>({});

  const roomId = useRoomStore((state) => state.room?.id);

  useEffect(() => {
    if (!socket) return;

    const handleUserSpeaking = ({ userId }: { userId: number }) => {
      console.log(`User ${userId} is speaking`);
      setSpeakingUsers((prev) => ({ ...prev, [userId]: true }));
    };

    const handleUserStoppedSpeaking = ({ userId }: { userId: number }) => {
      console.log(`User ${userId} stopped speaking`);
      
      setSpeakingUsers((prev) => ({ ...prev, [userId]: false }));
    };

    socket.on("user-speaking", handleUserSpeaking);
    socket.on("user-stopped-speaking", handleUserStoppedSpeaking);

    return () => {
      socket.off("user-speaking", handleUserSpeaking);
      socket.off("user-stopped-speaking", handleUserStoppedSpeaking);
    };
  }, [socket]);

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
                .map((user) => {
                  const isSpeaking = speakingUsers[user.id];

                  return (
                    <div
                      key={user.id}
                      className="flex items-center justify-between"
                    >
                      <div className="flex flex-col gap-4 relative">
                        <StatutIndicator />
                        <UserThumbnail
                          imageSize="8"
                          username={user.username}
                          image={user.profileImage}
                          sex={user.sex}
                        />
                        {isSpeaking && (
                          <Icons.volumeUp/>
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>
          </ScrollArea>
        </>
      )}
    </>
  );
}
