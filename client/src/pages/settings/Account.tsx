import Alert from "@/components/Alert";
import { AccountForm } from "@/components/settings/account-form";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import useGetUser from "@/hooks/get-current-user";
import { useDeleteAccountMutation } from "@/hooks/delete-account";
import BlockedUsers from "@/components/settings/blocked-users";
import useGetBlockedUsers from "@/hooks/get-blocked-users";

export default function SettingsAccountPage() {
  const { data: currentUser } = useGetUser();
  const { data: blockedUsers } = useGetBlockedUsers();
  const { mutate: deleteAccount } = useDeleteAccountMutation();

  return (
    <div className="space-y-6">
      {currentUser && blockedUsers && (
        <>
          <div>
            <h3 className="text-lg font-medium">Compte</h3>
            <p className="text-description">
              Mettez à jour votre adresse e-mail, débloquez des utilisateurs et
              supprimez votre compte.
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
                className="text-lg w-full sm:w-auto"
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
