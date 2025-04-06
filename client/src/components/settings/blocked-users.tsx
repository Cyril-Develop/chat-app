import { BlockedUsersProps } from "@/types/user";
import UserThumbnail from "../user-thumbnail";
import { Button } from "@/components/ui/button";
import { useUnblockUserMutation } from "@/hooks/api/user/unblock-user";
import { Icons } from "@/components/Icons";
import { useSocketStore } from "@/store/socket.store";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";

const BlockedUsers = ({ blockedUsers }: BlockedUsersProps) => {
  const { mutate: unblockUser } = useUnblockUserMutation();
  const { socket } = useSocketStore();
  const queryClient = useQueryClient();

  // --- HANDLERS ---
  const handleUnblockUser = () => {
    // Invalidate la liste des utilisateurs bloqués lorsqu'un utilisateur bloqué voit son compte supprimé
    queryClient.invalidateQueries({ queryKey: ["blocked-users"] });
  };

  // Écouter l'événement "accountDeletedForUser" émit lorsqu'un compte est supprimé
  useEffect(() => {
    socket?.on("accountDeletedForUser", handleUnblockUser);

    return () => {
      socket?.off("accountDeletedForUser", handleUnblockUser);
    };
  }, [socket, handleUnblockUser]);

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
