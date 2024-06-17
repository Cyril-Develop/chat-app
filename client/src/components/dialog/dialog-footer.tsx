import { DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface DialogFooterProps {
  text: string;
}

const DialogFooterComp = ({ text }: DialogFooterProps) => {
  return (
    <DialogFooter>
      <Button type="submit">{text}</Button>
    </DialogFooter>
  );
};

export default DialogFooterComp;
