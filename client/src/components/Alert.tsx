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
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

interface AlertProps {
  title: string;
  description: string;
  buttonTitle: string;
  action: () => void;
}

function Alert({ title, description, buttonTitle, action }: AlertProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size={"lg"} className="text-lg w-full sm:w-auto" variant="destructive">Supprimer le compte</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Annuler</AlertDialogCancel>
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
