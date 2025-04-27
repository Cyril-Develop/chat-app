import DialogHeaderComp from "@/components/dialog/dialog-header";
//import CreateRoomForm from "@/components/sidebar/room/create-room-form";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { DeleteUserProps } from "@/types/dialog";
import { useState } from "react";
import DeleteUserForm from "@/components/settings/dashboard/delete-user-form";

export function DeleteUser({
  btnTrigger,
  headerTitle,
  headerDescription,
  userIdToDelete,
}: DeleteUserProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open: boolean) => setIsOpen(open);

  const handleSubmitSuccess = () => handleOpenChange(false);

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="alert" title="Supprimer l'utilisateur">{btnTrigger}</Button>
      </DialogTrigger>

      <DialogContent className={cn("sm:max-w-[425px]")}>
        <DialogHeaderComp title={headerTitle} description={headerDescription} />
        <DeleteUserForm
          onSubmitSuccess={handleSubmitSuccess}
          btnSubmit="Supprimer"
          userId={userIdToDelete}
        />
      </DialogContent>
    </Dialog>
  );
}
