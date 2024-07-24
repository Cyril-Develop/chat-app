import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import DialogHeaderComp from "@/components/dialog/dialog-header";
import CreateForm from "@/components/dialog/create-room";
import { useState } from "react";

interface DialogCreate {
  btnTrigger: string;
  headerTitle: string;
  headerDescription: string;
}

export function DialogCreate({
  btnTrigger,
  headerTitle,
  headerDescription,
}: DialogCreate) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open: boolean) => setIsOpen(open);

  const handleSubmitSuccess = () => handleOpenChange(false);

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button size="box" >
          {btnTrigger}
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeaderComp title={headerTitle} description={headerDescription} />
        <CreateForm btnSubmit="Créer" onSubmitSuccess={handleSubmitSuccess} />
      </DialogContent>
    </Dialog>
  );
}
