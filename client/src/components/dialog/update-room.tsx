import DialogHeaderComp from "@/components/dialog/dialog-header";
import UpdateRoomForm from "@/components/sidebar/room/update-room-form";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { UpdateRoomProps } from "@/types/dialog";

export function UpdateRoom({
  headerTitle,
  headerDescription,
  isOpen,
  setIsOpen,
  roomDescription,
}: UpdateRoomProps) {
  const handleOpenChange = (open: boolean) => setIsOpen(open);
  const handleSubmitSuccess = () => handleOpenChange(false);

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeaderComp title={headerTitle} description={headerDescription} />
        <UpdateRoomForm
          btnSubmit="Modifier"
          onSubmitSuccess={handleSubmitSuccess}
          roomDescription={roomDescription}
        />
      </DialogContent>
    </Dialog>
  );
}
