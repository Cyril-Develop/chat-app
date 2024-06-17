import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface DialogHeaderProps {
  title: string;
  description: string;
}

const DialogHeaderComp = ({ title, description }: DialogHeaderProps) => {
  return (
    <DialogHeader>
      <DialogTitle>{title}</DialogTitle>
      <DialogDescription>{description}</DialogDescription>
    </DialogHeader>
  );
};

export default DialogHeaderComp;
