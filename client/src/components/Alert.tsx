import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface AlertProps {
  onClose: () => void;
  title: string;
  description: string;
  button: string;
  buttonVariant:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "btn"
    | "linkForm"
    | "btnMenu";
  action: () => void;
}

function Alert({
  onClose,
  title,
  description,
  button,
  buttonVariant,
  action,
}: AlertProps) {
  return (
    <AlertDialog open={true} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Annuler</AlertDialogCancel>
          <AlertDialogAction variant={buttonVariant} onClick={action}>
            {button}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default Alert;
