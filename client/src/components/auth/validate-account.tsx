import { Dialog, DialogContent } from "@/components/ui/dialog";
import DialogHeaderComp from "@/components/dialog/dialog-header";
import { ValidateAccountForm } from "@/components/auth/validate-account-form";
import { ValidateAccountProps } from "@/types/auth";
import { cn } from "@/lib/utils";

export function ValidateAccount({
  newUser,
  isOpen,
  setIsOpen,
  headerTitle,
  headerDescription,
  handleAccountCreationSuccess,
}: ValidateAccountProps) {
  const handleOpenChange = (open: boolean) => setIsOpen(open);
  const handleSubmitSuccess = () => {
    setIsOpen(false);
    handleAccountCreationSuccess();
  };

  console.log("ValidateAccount component rendered with newUser:", newUser);
  

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className={cn("sm:max-w-[425px]")}>
        <DialogHeaderComp title={headerTitle} description={headerDescription} />
        <ValidateAccountForm
          newUser={newUser}
          onSubmitSuccess={handleSubmitSuccess}
        />
      </DialogContent>
    </Dialog>
  );
}
