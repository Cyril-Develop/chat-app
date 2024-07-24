import { Dialog, DialogContent } from "@/components/ui/dialog";
import DialogHeaderComp from "@/components/dialog/dialog-header";
import JoinForm from "@/components/dialog/join-room";

interface DialogJoinProps {
  btnTrigger: string;
  headerTitle: string;
  headerDescription: string;
  isOpen: boolean;
  roomId: number;
  onOpenChange: (open: boolean) => void;
}

export function DialogJoin({
  headerTitle,
  headerDescription,
  isOpen,
  roomId,
  onOpenChange,
}: DialogJoinProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeaderComp title={headerTitle} description={headerDescription} />
        <JoinForm
          btnSubmit="Rejoindre"
          roomId={roomId}
          onOpenChange={onOpenChange}
        />
      </DialogContent>
    </Dialog>
  );
}
