import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

const contactList: { name: string }[] = [
  { name: "Alice" },
  { name: "Bob" },
  { name: "Charlie" },
  { name: "David" },
  { name: "Eve" },
  { name: "Frank" },
  { name: "Grace" },
  { name: "Heidi" },
  { name: "Ivan" },
  { name: "Judy" },
  { name: "Mallory" },
  { name: "Oscar" },
  { name: "Peggy" },
  { name: "Rupert" },
  { name: "Sybil" },
  { name: "Trudy" },
  { name: "Victor" },
  { name: "Walter" },
  { name: "Zoe" },
];

export function Contact() {
  const [open, setOpen] = useState(false);
  return (
    // <Command className="rounded-lg border shadow-md h-auto">
    //   <CommandInput placeholder="Rechercher un contact" />
    //   <ScrollArea className="h-auto">
    //     <CommandList>
    //       {contactList.length === 0 ? (
    //         <CommandEmpty>Vous n'avez pas encore de contact.</CommandEmpty>
    //       ) : (
    //         <>
    //           <CommandEmpty>Aucun contact trouvé.</CommandEmpty>
    //           <CommandGroup heading="Contacts">
    //             {contactList.map((contact) => (
    //               <CommandItem key={contact.name}>{contact.name}</CommandItem>
    //             ))}
    //           </CommandGroup>
    //         </>
    //       )}
    //     </CommandList>
    //   </ScrollArea>
    // </Command>

    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          size="box"
          aria-expanded={open}
          className="w-[200px] justify-between p-3"
        >
          Voir mes contacts
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-[200px]">
        <Command>
          <CommandInput placeholder="Rechercher un contact" />
          <CommandList>
            {contactList.length === 0 ? (
              <CommandEmpty className="error p-3">
                Vous n'avez pas encore de contact.
              </CommandEmpty>
            ) : (
              <>
                <CommandEmpty className="error p-3">
                  Aucun contact trouvé.
                </CommandEmpty>
                <CommandGroup heading="Contacts">
                  {contactList.map((contact) => (
                    <CommandItem key={contact.name}>{contact.name}</CommandItem>
                  ))}
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
