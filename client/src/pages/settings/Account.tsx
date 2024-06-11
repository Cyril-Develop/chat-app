import { Separator } from "@/components/ui/separator";
import { AccountForm } from "@/components/settings/account-form";
import Alert from "@/components/Alert";
import handleDeleteAccount from "@/utils/delete-account";
import { useUserStore } from "@/store/user.store";
import useUser from "@/hooks/use-user";
import { Icons } from "@/components/Icons";

export default function SettingsAccountPage() {
  const logout = useUserStore((state) => state.useLogout);
  const { token } = useUserStore((state) => state.token);
  const user = useUser();

  return (
    <div className="space-y-6">
      {user ? (
        <>
          <div>
            <h3 className="text-lg font-medium">Compte</h3>
            <p className="text-muted-foreground">
              Mettez à jour les informations de votre compte.
            </p>
          </div>
          <Separator />
          <AccountForm user={user} />
          <Separator />
          <Alert
            title="Supprimer le compte"
            description="Êtes-vous sûr de vouloir supprimer votre compte? Cette action est irréversible."
            buttonTitle="Supprimer"
            action={() => handleDeleteAccount(logout, token)}
          />
        </>
      ) : (
        <Icons.spinner className="animate-spin" />
      )}
    </div>
  );
}
