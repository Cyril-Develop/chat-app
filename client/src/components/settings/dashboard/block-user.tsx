import DialogHeaderComp from "@/components/dialog/dialog-header";
//import CreateRoomForm from "@/components/sidebar/room/create-room-form";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { BlockUserProps } from "@/types/dialog";
import { useState } from "react";
import BlockUserForm from "@/components/settings/dashboard/block-user-form";

export function BlockUser({
  btnTrigger,
  headerTitle,
  headerDescription,
  userIdToBlock,
}: BlockUserProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open: boolean) => setIsOpen(open);

  const handleSubmitSuccess = () => handleOpenChange(false);

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="linkForm" title="Bloquer l'utilisateur">
          {btnTrigger}
        </Button>
      </DialogTrigger>

      <DialogContent className={cn("sm:max-w-[425px]")}>
        <DialogHeaderComp title={headerTitle} description={headerDescription} />
        <BlockUserForm
          userId={userIdToBlock}
          onSubmitSuccess={handleSubmitSuccess}
          btnSubmit="Bloquer"
        />
      </DialogContent>
    </Dialog>
  );
}
