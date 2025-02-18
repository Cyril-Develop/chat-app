import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import DialogHeaderComp from "@/components/dialog/dialog-header";
import ForgotPasswordForm from "@/components/password/forgot-password-form";

interface ForgotPasswordProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  headerTitle: string;
  handleResetPassword: () => void;
  headerDescription: string;
}

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

      <DialogContent className="sm:max-w-[425px]">
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
