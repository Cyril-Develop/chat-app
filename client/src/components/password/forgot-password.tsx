import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import DialogHeaderComp from "@/components/dialog/dialog-header";
import ForgotPasswordForm from "@/components/password/forgot-password-form";
import { useState } from "react";

interface ForgotPasswordProps {
  btnTrigger: string;
  headerTitle: string;
  headerDescription: string;
}

export function ForgotPassword({
  btnTrigger,
  headerTitle,
  headerDescription,
}: ForgotPasswordProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open: boolean) => setIsOpen(open);

  const handleSubmitSuccess = () => handleOpenChange(false);

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button size="box" variant="linkForm" className="justify-start w-auto">
          {btnTrigger}
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeaderComp title={headerTitle} description={headerDescription} />
        <ForgotPasswordForm
          btnSubmit="Continuer"
          onSubmitSuccess={handleSubmitSuccess}
        />
      </DialogContent>
    </Dialog>
  );
}
