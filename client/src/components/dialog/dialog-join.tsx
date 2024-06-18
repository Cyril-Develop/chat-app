import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import DialogHeaderComp from "@/components/dialog/dialog-header";
import JoinForm from "@/components/dialog/join-form";

interface DialogJoin {
  btnTrigger: string;
  headerTitle: string;
  headerDescription: string;
}

export function DialogJoin({
  btnTrigger,
  headerTitle,
  headerDescription,
}: DialogJoin) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="chat" variant="btnChat">{btnTrigger}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeaderComp title={headerTitle} description={headerDescription} />
        <JoinForm btnSubmit="Rejoindre" />
      </DialogContent>
    </Dialog>
  );
}
