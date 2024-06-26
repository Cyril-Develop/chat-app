import { Separator } from "@/components/ui/separator";
import { AccountForm } from "@/components/settings/account-form";
import Alert from "@/components/Alert";
import handleDeleteAccount from "@/utils/delete-account";
import { useUserStore } from "@/store/user.store";
import useGetUser from "@/hooks/get-user";

export default function SettingsAccountPage() {
  const logout = useUserStore((state) => state.logout);
  const { token } = useUserStore((state) => state);
  const { data } = useGetUser();

  return (
    <div className="space-y-6">
      {data && (
        <>
          <div>
            <h3 className="text-lg font-medium">Compte</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Mettez à jour les informations de votre compte.
            </p>
          </div>
          <Separator />
          <AccountForm user={data} />
          <Separator />
          <Alert
            title="Supprimer le compte"
            description="Êtes-vous sûr de vouloir supprimer votre compte? Cette action est irréversible."
            buttonTitle="Supprimer"
            action={() => handleDeleteAccount(logout, token || "")}
          />
        </>
      )}
    </div>
  );
}
