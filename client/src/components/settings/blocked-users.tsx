import { BlockedUsersProps } from "@/types/user";
import UserThumbnail from "../user-thumbnail";
import { Button } from "@/components/ui/button";
import { useUnblockUserMutation } from "@/hooks/api/user/unblock-user";
import { Icons } from "@/components/Icons";

const BlockedUsers = ({ blockedUsers }: BlockedUsersProps) => {
  const { mutate: unblockUser } = useUnblockUserMutation();

  return (
    <div>
      <h3 className="text-label mb-2">Utilisateurs bloqués</h3>
      <div className="flex flex-wrap min-h-11 gap-4 mb-2 p-3 rounded-md border border-input bg-background dark:bg-primary-foreground dark:border-popover">
        {blockedUsers.map((user) => (
          <div key={user.id} className="flex items-center">
            <UserThumbnail
              imageSize="8"
              username={user.username}
              image={user.profileImage}
            />
            <Button
              variant="linkForm"
              onClick={() => unblockUser(user.id)}
              title="Débloquer l'utilisateur"
            >
              <Icons.close height={20} width={20} />
            </Button>
          </div>
        ))}
      </div>
      <p className="text-additional-info">
        Consultez la liste des utilisateurs bloqués et débloquez-les si
        nécessaire.
      </p>
    </div>
  );
};

export default BlockedUsers;
