import { Separator } from "@/components/ui/separator";
import { AccountForm } from "@/components/settings/account-form";
import Alert from "@/components/Alert";
import handleDeleteAccount from "@/utils/deleteAccount";
import { useUserStore } from "@/store/user.store";

export default function SettingsAccountPage() {
  const logout = useUserStore((state) => state.useLogout);
  const { token } = useUserStore((state) => state.user);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Compte</h3>
        <p className="text-muted-foreground">
          Mettez à jour les informations de votre compte.
        </p>
      </div>
      <Separator />
      <AccountForm />
       <Separator />
      <Alert
        title="Supprimer le compte"
        description="Êtes-vous sûr de vouloir supprimer votre compte? Cette action est irréversible."
        buttonTitle="Supprimer"
        action={() => handleDeleteAccount(logout, token)}
      />
    </div>
  );
}
