import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState, useEffect } from "react";
import io from "socket.io-client";
import { cn } from "@/lib/utils";

const socket = io(`${import.meta.env.VITE_REACT_APP_BASE_URL}`);

export const SearchUser = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<
    { id: string; username: string; profileImage: string }[]
  >([]);

  useEffect(() => {
    socket.on("searchResults", (data) => {
      setResults(data);
    });

    return () => {
      socket.off("searchResults");
    };
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length >= 3) {
      socket.emit("search", value);
    } else {
      setResults([]);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          size="box"
          aria-expanded={open}
          className="w-[200px] justify-between p-2 text-foreground"
        >
          Ajouter un utilisateur
          <Icons.AddUser />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput
            placeholder="Rechercher..."
            onChangeCapture={handleSearch}
          />
          <CommandList>
            {query.length >= 3 && results.length === 0 && (
              <CommandEmpty>Aucun utilisateur trouvé</CommandEmpty>
            )}
            <CommandGroup className={cn("p-0")}>
              {results.map((result) => (
                <CommandItem
                  key={result.id}
                  value={result.username}
                  onSelect={() => setOpen(false)}
                  className={cn("flex items-center gap-2")}
                >
                  <img
                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_URL}/profile/${
                      result.profileImage
                    }`}
                    alt="Profile"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span>{result.username}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
