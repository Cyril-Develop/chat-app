import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import UserThumbnail from "@/components/user-thumbnail";
import useGetUsers from "@/hooks/api/user/get-users";
import { useSendRequestMutation } from "@/hooks/api/user/send-request";
import { cn } from "@/lib/utils";
import { FriendList, SearchUserProps, Users } from "@/types/chat";
import { useState } from "react";
import { useFriendRequestUpdates } from "@/hooks/friend-request-handler";

export const SearchUser = ({
  currentUser,
}: {
  currentUser: SearchUserProps;
}) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [contacts, setContacts] = useState<Users[]>([]);
  const { data: users } = useGetUsers();
  const userId = currentUser?.id;
  const { mutate: sendRequestMutation } = useSendRequestMutation();

  // Écouter les mises à jour des demandes d'amis
  useFriendRequestUpdates();

  // Rechercher un utilisateur
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length >= 3) {
      setOpen(true);
      const filteredUsers = users?.filter((user: Users) =>
        user.username.toLowerCase().includes(value.toLowerCase())
      );
      setContacts(filteredUsers || []);
    } else {
      setContacts([]);
    }
  };

  // Ajouter un ami
  const handleAddFriend = (contactId: number) => {
    sendRequestMutation(contactId);
    setQuery("");
  };

  // Vérifier si l'utilisateur est déjà un ami
  const isFriend = (friends: FriendList[]) => {
    return friends.some((friendList) => friendList.friend.id === userId);
  };

  // Vérifier si une demande d'ami est en cours (envoyée ou reçue)
  const isRequestPending = (contact: Users) => {
    const hasSentRequest = contact.sentFriendRequests?.some(
      (request) => request.receiver.id === userId
    );
    const hasReceivedRequest = contact.receivedFriendRequests?.some(
      (request) => request.sender.id === userId
    );
    return hasSentRequest || hasReceivedRequest;
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="w-[200px] h-11 flex gap-2 items-center p-3 bg-background dark:bg-primary-foreground border border-input rounded-md">
          <Label htmlFor="searchUser">
            <Icons.search style={{ stroke: "#80838B" }} />
          </Label>
          <Input
            type="text"
            placeholder="Rechercher un contact"
            id="searchUser"
            value={query}
            onChange={handleSearch}
            className="flex h-auto rounded-md text-foreground p-0 text-sm outline-none border-none focus:border-none focus: placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
      </PopoverTrigger>
      {query.length >= 3 && (
        <PopoverContent
          className={cn("w-[200px] p-0 border-none")}
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <Command>
            <CommandList>
              {contacts.length === 0 && (
                <CommandEmpty className={cn("error p-3")}>
                  Aucun contact trouvé.
                </CommandEmpty>
              )}
              {contacts.map(
                (contact) =>
                  contact.id !== userId && (
                    <CommandGroup key={contact.id}>
                      <CommandItem
                        value={contact.username}
                        className={cn("flex items-center justify-between p-2")}
                      >
                        <UserThumbnail
                          imageSize="8"
                          image={contact.profileImage}
                          username={contact.username}
                        />
                        {isFriend(contact.friends) ? (
                          <Icons.check width={16} height={16} />
                        ) : isRequestPending(contact) ? (
                          <Icons.loader width={16} height={16} />
                        ) : (
                          <Button
                            variant="linkForm"
                            title="Ajouter à la liste de contacts"
                            className={cn("p-0")}
                            onClick={() => handleAddFriend(contact.id)}
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
