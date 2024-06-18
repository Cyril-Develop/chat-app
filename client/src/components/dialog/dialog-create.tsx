import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import DialogHeaderComp from "@/components/dialog/dialog-header";
import CreateForm from "@/components/dialog/create-form";

interface DialogCreate {
  btnTrigger: string;
  headerTitle: string;
  headerDescription: string;
}

export function DialogCreate({
  btnTrigger,
  headerTitle,
  headerDescription,
}: DialogCreate) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="chat" variant="btnChat">{btnTrigger}</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeaderComp title={headerTitle} description={headerDescription} />
        <CreateForm btnSubmit="Créer" />
      </DialogContent>
    </Dialog>
  );
}
