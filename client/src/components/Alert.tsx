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
  description: string | React.ReactNode;
  buttonTitle: string;
  trigger?: React.ReactNode;
  action (): void;
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
  const isString = typeof description === "string";
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      {trigger && <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          {isString ? (
            <AlertDialogDescription>{description}</AlertDialogDescription>
          ) : (
            <div className="text-sm text-muted-foreground">{description}</div>
          )}
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
