import { Icons } from "@/components/Icons";
import UserThumbnail from "@/components/user-thumbnail";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useRoomStore } from "@/store/room.store";
import { useVoiceStore } from "@/store/voice.store";
import {
  getVisibleUsersCount,
  getVisibleUsersLabel,
} from "@/utils/room-user-count";

export function RoomUsers() {
  const usersInRoom = useRoomStore((state) => state.usersInRoom);
  const speakingUsers = useVoiceStore((state) => state.speakingUsers);
  const roomId = useRoomStore((state) => state.room?.id);

  // Filtrer les utilisateurs visibles
  const visibleUsers =
    usersInRoom?.filter((user) => user.visible === true) || [];
  // Vérifier s'il y a au moins un utilisateur visible
  const hasVisibleUsers = visibleUsers.length > 0;

  return (
    <>
      {roomId && hasVisibleUsers && (
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
              {visibleUsers.map((user) => {
                const isSpeaking = speakingUsers[user.id];
                return (
                  <div
                    key={user.id}
                    className="flex items-center justify-between"
                  >
                    <UserThumbnail
                      userId={user.id}
                      username={user.username}
                      sex={user.sex}
                      image={user.profileImage}
                      role={user.role}
                    />
                    {isSpeaking && <Icons.volumeUp />}
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
