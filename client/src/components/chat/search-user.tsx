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
import { useAddContactMutation } from "@/hooks/add-contact";
import { Button } from "../ui/button";

const socket = io(`${import.meta.env.VITE_REACT_APP_BASE_URL}`);

interface SearchUserProps {
  userId: string;
}

interface Friend {
  id: string;
}

interface FriendList {
  friend: Friend;
}

interface Result {
  id: string;
  username: string;
  profileImage: string;
  friends: FriendList[];
}

interface SearchUserProps {
  userId: string;
}

export const SearchUser = ({ userId }: SearchUserProps) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Result[]>([]);

  const mutation = useAddContactMutation();

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
      setOpen(true);
    } else {
      setResults([]);
    }
  };

  const handleAddFriend = (friendId: string) => {
    mutation.mutate(friendId);
  };

  const isFriend = (friends: FriendList[]) => {
    if (friends.length === 0) return false;
    return friends.some((friendList) => friendList.friend.id === userId);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="w-[200px] flex gap-2 items-center p-3 bg-popover rounded-md">
          <Label htmlFor="searchUser">
            <Icons.search
              style={{ stroke: "#80838B" }}
              aria-label="Rechercher un contact"
            />
          </Label>
          <Input
            type="text"
            placeholder="Rechercher un contact"
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
                <CommandEmpty>Aucun contact trouvé</CommandEmpty>
              )}
              <CommandGroup className={cn("p-0")}>
                {results.map(
                  (result) =>
                    result.id !== userId && (
                      <CommandItem
                        key={result.id}
                        value={result.username}
                        className="flex items-center justify-between p-2"
                      >
                        <div className="flex items-center gap-2">
                          <img
                            src={`${
                              import.meta.env.VITE_REACT_APP_IMAGE_URL
                            }/profile/${result.profileImage}`}
                            alt="Profile"
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <span>{result.username}</span>
                        </div>

                        {isFriend(result.friends) ? (
                          <Icons.check className="w-4 h-4" />
                        ) : (
                          <Button
                            variant="linkForm"
                            title="Ajouter à la liste de contacts"
                            onClick={() => handleAddFriend(result.id)}
                          >
                            <Icons.add className="w-4 h-4" />
                          </Button>
                        )}
                      </CommandItem>
                    )
                )}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      )}
    </Popover>
  );
};
