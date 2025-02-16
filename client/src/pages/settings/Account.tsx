import Alert from "@/components/Alert";
import { Icons } from "@/components/Icons";
import { AccountForm } from "@/components/settings/account-form";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import useGetUser from "@/hooks/get-user";
import { useUserStore } from "@/store/user.store";
import { getUserId } from "@/utils/get-userId";
import handleDeleteAccount from "@/utils/handle-delete-account";

export default function SettingsAccountPage() {
  const logout = useUserStore((state) => state.logout);
  const { token } = useUserStore((state) => state);
  const userId = getUserId();
  const { data } = useGetUser(userId);

  const deleteAccount = async (userId?: number) => {
    if (token && userId) {
      await handleDeleteAccount(logout, token, userId);
    } else {
      toast({
        title: "Session expirée",
        description: "Impossible de supprimer le compte, veuillez vous reconnecter.",
        variant: "destructive",
        logo: <Icons.alert />,
      });
      logout();
    }
  };

  return (
    <div className="space-y-6">
      {data && (
        <>
          <div>
            <h3 className="text-lg font-medium">Compte</h3>
            <p className="text-description">
              Mettez à jour les informations de votre compte.
            </p>
          </div>
          <Separator />
          <AccountForm user={data} />
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
            action={() => deleteAccount(userId)}
          />
        </>
      )}
    </div>
  );
}
