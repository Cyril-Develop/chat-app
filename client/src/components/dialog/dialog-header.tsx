import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { DialogHeaderProps } from "@/types/dialog";

const DialogHeaderComp = ({ title, description }: DialogHeaderProps) => {
  return (
    <DialogHeader>
      <DialogTitle className={cn("text-title")}>{title}</DialogTitle>
      <DialogDescription className={cn("text-paragraph")}>
        {description}
      </DialogDescription>
    </DialogHeader>
  );
};

export default DialogHeaderComp;
