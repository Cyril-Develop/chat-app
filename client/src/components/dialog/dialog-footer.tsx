import { DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const DialogFooterComp = (text: string) => {
  return (
    <DialogFooter>
      <Button type="submit">{text}</Button>
    </DialogFooter>
  );
};

export default DialogFooterComp;
