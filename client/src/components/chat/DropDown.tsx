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

const Dropdown = () => {
  const { contactId, setContactId } = useContactStore();
  const mutation = useRemoveContactMutation();

  const handleDelete = () => {
    mutation.mutate(contactId);
    setContactId(null);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">
          <Icons.ellipsis width={18} height={18} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={cn("mr-20 mt-1")}>
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={handleDelete}>
            <Icons.delete width={18} height={18} />
            <span>Supprimer le contact</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Icons.block width={18} height={18} />
            <span>Bloquer le contact</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
