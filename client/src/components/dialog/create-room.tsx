import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import DialogHeaderComp from "@/components/dialog/dialog-header";
import CreateRoomForm from "@/components/room/create-room-form";
import { useState } from "react";
import { CreateRoomProps } from "@/types/dialog";

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
        <Button size="box">{btnTrigger}</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeaderComp title={headerTitle} description={headerDescription} />
        <CreateRoomForm
          btnSubmit="Créer"
          onSubmitSuccess={handleSubmitSuccess}
        />
      </DialogContent>
    </Dialog>
  );
}
