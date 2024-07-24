import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useRemoveContactMutation } from "@/hooks/remove-contact";
import { useContactStore } from "@/store/contact.store";
import Alert from "@/components/Alert";
import { useState } from "react";

const Dropdown = () => {
  const { contactId, setContactId } = useContactStore();
  const mutation = useRemoveContactMutation();
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    mutation.mutate(contactId);
    setContactId(null);
  };

  const handleBlock = () => {
    console.log("block");
    // A FAIRE
    setOpen(false);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" title="Options">
            <Icons.ellipsis width={18} height={18} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={cn(" mt-1")}>
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={handleDelete}>
              <Icons.delete width={18} height={18} />
              <span>Supprimer le contact</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setOpen(true)}>
              <Icons.block width={18} height={18} />
              <span>Bloquer le contact</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <Alert
        open={open}
        setOpen={setOpen}
        title="Bloquer le contact"
        description="Êtes-vous sûr de vouloir bloquer ce contact ? 
              L'utilisateur ne pourra plus vous envoyer de messages privés ni vous envoyer de demande d'amis.
              Cette action est irréversible."
        buttonTitle="Bloquer"
        action={handleBlock}
      />
    </>
  );
};

export default Dropdown;
