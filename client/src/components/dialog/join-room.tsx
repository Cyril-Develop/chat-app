import { Dialog, DialogContent } from "@/components/ui/dialog";
import DialogHeaderComp from "@/components/dialog/dialog-header";
import JoinPrivateRoomForm from "@/components/room/join-private-room-form";
import { JoinRoomProps } from "@/types/dialog";

export function JoinRoom({
  headerTitle,
  headerDescription,
  isOpen,
  roomId,
  onOpenChange,
}: JoinRoomProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeaderComp title={headerTitle} description={headerDescription} />
        <JoinPrivateRoomForm
          btnSubmit="Rejoindre"
          roomId={roomId}
          onOpenChange={onOpenChange}
        />
      </DialogContent>
    </Dialog>
  );
}
