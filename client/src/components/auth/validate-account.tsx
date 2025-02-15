import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import DialogHeaderComp from "@/components/dialog/dialog-header";
import { ValidateAccountForm } from "./validate-account-form";

interface ValidateAccountProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  headerTitle: string;
  headerDescription: string;
}

export function ValidateAccount({
  isOpen,
  setIsOpen,
  headerTitle,
  headerDescription,
}: ValidateAccountProps) {
  const handleOpenChange = (open: boolean) => setIsOpen(open);
  const handleSubmitSuccess = () => handleOpenChange(false);

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      {/*<DialogTrigger asChild>
         <Button size="box" variant="linkForm" className="justify-start w-auto">
          {btnTrigger}
        </Button> 
      </DialogTrigger>*/}

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeaderComp title={headerTitle} description={headerDescription} />
        <ValidateAccountForm
          btnSubmit="Continuer"
          onSubmitSuccess={handleSubmitSuccess}
        />
      </DialogContent>
    </Dialog>
  );
}
