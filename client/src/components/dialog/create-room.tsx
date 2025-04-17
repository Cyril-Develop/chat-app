import DialogHeaderComp from "@/components/dialog/dialog-header";
import CreateRoomForm from "@/components/sidebar/room/create-room-form";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { CreateRoomProps } from "@/types/dialog";
import { useState } from "react";

export function CreateRoom({
  btnTrigger,
  headerTitle,
  headerDescription,
}: CreateRoomProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open: boolean) => setIsOpen(open);

  const handleSubmitSuccess = () => handleOpenChange(false);

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button size="lg" className={cn("w-[200px] text-button")}>
          {btnTrigger}
        </Button>
      </DialogTrigger>

      <DialogContent className={cn("sm:max-w-[425px]")}>
        <DialogHeaderComp title={headerTitle} description={headerDescription} />
        <CreateRoomForm
          btnSubmit="Créer"
          onSubmitSuccess={handleSubmitSuccess}
        />
      </DialogContent>
    </Dialog>
  );
}
