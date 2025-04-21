import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { DialogHeaderProps } from "@/types/dialog";

const DialogHeaderComp = ({ title, description }: DialogHeaderProps) => {
  return (
    <DialogHeader className={cn("space-y-0 gap-y-1")}>
      <DialogTitle className={cn("text-title md:text-3xl text-center")}>
        {title}
      </DialogTitle>
      <DialogDescription
        className={cn("text-center text-paragraph md:text-lg")}
      >
        {description}
      </DialogDescription>
    </DialogHeader>
  );
};

export default DialogHeaderComp;
