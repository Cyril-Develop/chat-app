import { Dialog, DialogContent } from "@/components/ui/dialog";
import DialogHeaderComp from "@/components/dialog/dialog-header";
import JoinPrivateRoomForm from "@/components/room/join-private-room-form";

interface JoinRoomProps {
  btnTrigger: string;
  headerTitle: string;
  headerDescription: string;
  isOpen: boolean;
  roomId: number;
  onOpenChange: (open: boolean) => void;
}

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
