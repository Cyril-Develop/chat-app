import { Dialog, DialogContent } from "@/components/ui/dialog";
import DialogHeaderComp from "@/components/dialog/dialog-header";
import { ValidateAccountForm } from "./validate-account-form";
import { ValidateAccountProps } from "@/types/auth";

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

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeaderComp title={headerTitle} description={headerDescription} />
        <ValidateAccountForm
          newUser={newUser}
          onSubmitSuccess={handleSubmitSuccess}
        />
      </DialogContent>
    </Dialog>
  );
}
