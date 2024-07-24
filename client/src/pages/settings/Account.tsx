import { Separator } from "@/components/ui/separator";
import { AccountForm } from "@/components/settings/account-form";
import Alert from "@/components/Alert";
import handleDeleteAccount from "@/utils/delete-account";
import { useUserStore } from "@/store/user.store";
import useGetUser from "@/hooks/get-user";
import { getUserId } from "@/utils/get-userId";
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";

export default function SettingsAccountPage() {
  const logout = useUserStore((state) => state.logout);
  const { token } = useUserStore((state) => state);
  const userId = getUserId();
  const { data } = useGetUser(userId);

  const handleDelete = async () => {
    if (token) {
      await handleDeleteAccount(logout, token);
    } else {
      toast({
        title: "Token manquant",
        description: "Impossible de supprimer le compte sans token.",
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
            action={handleDelete}
          />
        </>
      )}
    </div>
  );
}
