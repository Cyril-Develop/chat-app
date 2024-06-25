import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import useGetUser from "@/hooks/get-user";
import { useRemoveContactMutation } from "@/hooks/remove-contact";

export function Contact() {
  const [open, setOpen] = useState(false);
  const { data } = useGetUser();

  const mutation = useRemoveContactMutation();

  interface ContactProps {
    username: string;
    id: string;
  }

  const handleDelete = (contactId: string) => {
    mutation.mutate(contactId);
  };

  const haveContact = data?.friendsList.length > 0;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          size="box"
          aria-expanded={open}
          className="w-[200px] justify-between p-3"
          disabled={!haveContact}
        >
          Voir mes contacts
          {haveContact && `(${data?.friendsList.length})`}
          {open ? <Icons.chevronUp /> : <Icons.chevronDown />}
        </Button>
      </PopoverTrigger>
      {haveContact && (
        <PopoverContent className="p-0 w-[200px]">
          <Command>
            <>
              <CommandInput placeholder="Rechercher un contact" />
              <CommandList>
                <CommandEmpty className="error p-3">
                  Aucun contact trouvé.
                </CommandEmpty>
                <CommandGroup heading="Contacts">
                  {data?.friendsList.map((contact: ContactProps) => (
                    <CommandItem
                      key={contact.username}
                      className="flex items-center justify-between"
                    >
                      {contact.username}
                      <Button
                        variant="alert"
                        title="Retirer de la liste de contacts"
                        onClick={() => handleDelete(contact.id)}
                      >
                        <Icons.delete width="18" height="18" />
                      </Button>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </>
          </Command>
        </PopoverContent>
      )}
    </Popover>
  );
}
