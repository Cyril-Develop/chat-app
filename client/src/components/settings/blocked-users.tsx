import { BlockedUsersProps } from "@/types/user";
import UserThumbnail from "../user-thumbnail";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useUnblockUserMutation } from "@/hooks/unblock-user";
import { Icons } from "@/components/Icons";

const BlockedUsers = ({ blockedUsers }: BlockedUsersProps) => {
  const [currentBlockedUsers, setCurrentBlockedUsers] = useState(blockedUsers);
  const { mutate: unblockUser } = useUnblockUserMutation();

  const handleUnblockUser = (blockedId: number) => {
    unblockUser(blockedId);
    setCurrentBlockedUsers((prevUsers) =>
      prevUsers.filter((user) => user.id !== blockedId)
    );
  };

  return (
    <div>
      <h3 className="text-lg font-medium pb-2 min-h-11">
        Utilisateurs bloqués
      </h3>
      <div className="flex flex-wrap gap-4 p-3 rounded-md border border-input bg-background dark:bg-primary-foreground dark:border-popover">
        {currentBlockedUsers.map((user) => (
          <div key={user.id} className="flex items-center">
            <UserThumbnail
              imageSize="8"
              username={user.username}
              image={user.profileImage}
            />
            <Button
              variant="linkForm"
              onClick={() => handleUnblockUser(user.id)}
              title="Débloquer l'utilisateur"
            >
              <Icons.close height={20} width={20} />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlockedUsers;
