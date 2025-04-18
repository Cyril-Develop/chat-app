import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useRemoveContactMutation } from "@/hooks/api/user/remove-contact";
import { useContactStore } from "@/store/contact.store";
import Alert from "@/components/Alert";
import { useState } from "react";
import { useBlockUserMutation } from "@/hooks/api/user/block-user";

const PrivateChatMenu = () => {
  const { contactId } = useContactStore((state) => state);
  const { mutate: removeContact } = useRemoveContactMutation();
  const { mutate: blockUser } = useBlockUserMutation();
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    removeContact(contactId);
  };

  const handleBlock = () => {
    blockUser(contactId);
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
        <DropdownMenuContent className={cn("dark:bg-primary-foreground")}>
          <DropdownMenuGroup>
            <DropdownMenuItem
              onClick={() => setOpen(true)}
              className={cn("text-sm md:text-base")}
            >
              <Icons.block width={18} height={18} />
              <span>Bloquer le contact</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={handleDelete}
              className={cn("text-sm md:text-base")}
            >
              <Icons.delete width={18} height={18} />
              <span>Supprimer le contact</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <Alert
        open={open}
        setOpen={setOpen}
        title="Bloquer le contact"
        description="Êtes-vous sûr de vouloir bloquer ce contact ? 
              L'utilisateur sera supprimé de votre liste de contacts et ne pourra plus vous ajouter."
        buttonTitle="Bloquer"
        action={handleBlock}
      />
    </>
  );
};

export default PrivateChatMenu;
