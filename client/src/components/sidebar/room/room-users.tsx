import UserThumbnail from "@/components/user-thumbnail";
import StatutIndicator from "@/components/statut-indicator";
import { UserInfos } from "@/types/user";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export function RoomUsers({ usersInRoom }: { usersInRoom: UserInfos[] }) {
  return (
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
  );
}
