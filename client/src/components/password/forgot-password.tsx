import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import DialogHeaderComp from "@/components/dialog/dialog-header";
import ForgotPasswordForm from "@/components/password/forgot-password-form";
import { ForgotPasswordProps } from "@/types/password";

export function ForgotPassword({
  isOpen,
  setIsOpen,
  handleResetPassword,
  headerTitle,
  headerDescription,
}: ForgotPasswordProps) {
  const handleOpenChange = (open: boolean) => setIsOpen(open);
  const handleSubmitSuccess = () => handleOpenChange(false);

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild></DialogTrigger>

      <DialogContent>
        <DialogHeaderComp title={headerTitle} description={headerDescription} />
        <ForgotPasswordForm
          btnSubmit="Continuer"
          handleResetPassword={handleResetPassword}
          onSubmitSuccess={handleSubmitSuccess}
        />
      </DialogContent>
    </Dialog>
  );
}
