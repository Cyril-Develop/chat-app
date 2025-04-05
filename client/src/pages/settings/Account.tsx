import Alert from "@/components/Alert";
import { AccountForm } from "@/components/settings/account-form";
import BlockedUsers from "@/components/settings/blocked-users";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useDeleteAccountMutation } from "@/hooks/api/user/delete-account";
import useGetUser from "@/hooks/api/user/get-current-user";
import useGetBlockedUsers from "@/hooks/api/user/get-blocked-users";
import { useSocketStore } from "@/store/socket.store";
import { BlockedUsersState } from "@/types/user";
import { useCallback, useEffect, useState } from "react";

export default function SettingsAccountPage() {
  const { data: currentUser } = useGetUser();
  const { data } = useGetBlockedUsers();
  const { mutate: deleteAccount } = useDeleteAccountMutation();
  const { socket } = useSocketStore();
  const [blockedUsers, setBlockedUsers] = useState<BlockedUsersState[]>([]);

  useEffect(() => {
    if (data) {
      setBlockedUsers(data);
    }
  }, [data]);

  // Si l'événement "accountDeleted" est émis, mise à jour de la liste des utilisateurs bloqués pour exclure l'utilisateur supprimé
  const handleAccountDeleted = useCallback((userId: number) => {
    setBlockedUsers((prev) => prev.filter((user) => user.id !== userId));
  }, []);

  useEffect(() => {
    socket?.on("accountDeleted", handleAccountDeleted);

    return () => {
      socket?.off("accountDeleted", handleAccountDeleted);
    };
  }, [socket, handleAccountDeleted]);

  return (
    <div className="space-y-6">
      {currentUser && blockedUsers && (
        <>
          <div>
            <h3 className="text-lg font-medium">Compte</h3>
            <p className="text-gray-600 dark:text-gray-400 text-base">
              Mettez à jour votre adresse e-mail, gérez la liste des
              utilisateurs bloqués ou supprimez votre compte.
            </p>
          </div>
          <Separator />
          <BlockedUsers blockedUsers={blockedUsers} />
          <AccountForm user={currentUser} />
          <Separator />
          <Alert
            trigger={
              <Button
                size={"lg"}
                className="text-button w-full sm:w-auto"
                variant="destructive"
              >
                Supprimer le compte
              </Button>
            }
            title="Supprimer le compte"
            description="Êtes-vous sûr de vouloir supprimer votre compte? Cette action est irréversible."
            buttonTitle="Supprimer"
            action={() => deleteAccount()}
          />
        </>
      )}
    </div>
  );
}
