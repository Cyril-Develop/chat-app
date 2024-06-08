import { Separator } from "@/components/ui/separator";
import { AccountForm } from "@/components/settings/account-form";

export default function SettingsAccountPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Compte</h3>
        <p className="text-sm text-muted-foreground">
          Mettez à jour les paramètres de votre compte.
        </p>
      </div>
      <Separator />
      <AccountForm />
    </div>
  );
}
