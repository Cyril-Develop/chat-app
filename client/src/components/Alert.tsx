import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

interface AlertProps {
  title: string;
  description: string;
  buttonTitle: string;
  trigger?: React.ReactNode;
  action: () => void;
  open?: boolean;
  setOpen?: (open: boolean) => void;
}

function Alert({
  title,
  description,
  buttonTitle,
  action,
  trigger,
  open,
  setOpen,
}: AlertProps) {
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      {trigger && <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setOpen?.(false)}>Annuler</AlertDialogCancel>
          <AlertDialogAction
            onClick={action}
            className={cn(buttonVariants({ variant: "destructive" }))}
          >
            {buttonTitle}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default Alert;
