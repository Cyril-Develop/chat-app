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
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAddContactMutation } from "@/hooks/add-contact";
import { Button } from "@/components/ui/button";
import UserThumbnail from "@/components/user-thumbnail";
import useGetUsers from "@/hooks/get-users";

interface SearchUserProps {
  userId: string;
}

interface Friend {
  id: string;
}

interface FriendList {
  friend: Friend;
}

interface Users {
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
  const [users, setUsers] = useState<Users[]>([]);
  const { data } = useGetUsers();

  const mutation = useAddContactMutation();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length >= 3) {
      setOpen(true);

      const filteredUsers = data?.filter((user: Users) =>
        user.username.toLowerCase().includes(value.toLowerCase())
      );

      if (filteredUsers) {
        setUsers(filteredUsers);
      }
    } else {
      setUsers([]);
    }
  };

  const handleAddFriend = (friendId: string) => {
    mutation.mutate(friendId);
    setQuery("");
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
          className="w-[200px] p-0 border-none"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <Command>
            <CommandList>
              {query.length >= 3 && users.length === 0 && (
                <CommandEmpty>Aucun contact trouvé</CommandEmpty>
              )}
              {users.map(
                (user) =>
                  user.id !== userId && (
                    <CommandGroup
                      className={cn("p-0 border shadow-md rounded-md")}
                      key={user.id}
                    >
                      <CommandItem
                        value={user.username}
                        className="flex items-center justify-between p-2"
                      >
                        <UserThumbnail
                          imageSize="8"
                          image={user.profileImage}
                          username={user.username}
                        />

                        {isFriend(user.friends) ? (
                          <Icons.check width={16} height={16} />
                        ) : (
                          <Button
                            variant="linkForm"
                            title="Ajouter à la liste de contacts"
                            onClick={() => handleAddFriend(user.id)}
                          >
                            <Icons.add width={16} height={16} />
                          </Button>
                        )}
                      </CommandItem>
                    </CommandGroup>
                  )
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      )}
    </Popover>
  );
};
