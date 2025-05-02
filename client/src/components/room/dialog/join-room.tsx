import DialogHeaderComp from "@/components/dialog/dialog-header";
import JoinPrivateRoomForm from "@/components/room/form/join-private-room-form";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
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
      <DialogContent className={cn("sm:max-w-[425px]")}>
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
