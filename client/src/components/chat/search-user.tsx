import { Icons } from "@/components/Icons";
import {
  Command,
  CommandEmpty,
  CommandGroup,
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { addFriend } from "@/services/User";

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
      setOpen(true); // Open the popover if the search query is long enough
    } else {
      setResults([]);
      setOpen(false); // Close the popover if the search query is too short
    }
  };

  const handleAddFriend = (userId: string) => {
    
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="w-[200px] flex gap-2 items-center p-3 bg-popover rounded-md">
          <Label htmlFor="searchUser">
            <Icons.search
              style={{ stroke: "#80838B" }}
              aria-label="Rechercher un utilisateur"
            />
          </Label>
          <Input
            type="text"
            placeholder="Rechercher un utilisateur"
            id="searchUser"
            value={query}
            onChange={handleSearch}
            className="flex h-auto rounded-md text-foreground bg-transparent p-0 text-sm outline-none border-none focus:border-none focus: placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
      </PopoverTrigger>
      {query.length >= 3 && (
        <PopoverContent
          className="w-[200px] p-0"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <Command>
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
                    className="flex items-center gap-2 p-2"
                  >
                    <img
                      src={`${
                        import.meta.env.VITE_REACT_APP_IMAGE_URL
                      }/profile/${result.profileImage}`}
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
      )}
    </Popover>
  );
};
