import UserThumbnail from "@/components/user-thumbnail";
import StatutIndicator from "@/components/statut-indicator";
import { RoomUsersProps } from "@/types/types";

export function RoomUsers({ usersInRoom, users }: RoomUsersProps) {
  return (
    <div className="h-64 w-48 rounded-md">
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
    </div>
  );
}
