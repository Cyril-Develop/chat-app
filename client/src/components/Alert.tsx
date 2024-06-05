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
import { Link } from "react-router-dom";

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
  deleteAccount: () => void;
}

function Alert({
  onClose,
  title,
  description,
  button,
  buttonVariant,
  deleteAccount,
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
          <AlertDialogAction variant={buttonVariant} onClick={deleteAccount}>
            {button}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default Alert;
