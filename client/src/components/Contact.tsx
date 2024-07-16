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
import { useEffect, useState } from "react";
import useGetUser from "@/hooks/get-user";
import { useRemoveContactMutation } from "@/hooks/remove-contact";
import { useSocketStore } from "@/store/socket.store";

export function Contact() {
  const [open, setOpen] = useState(false);
  const [friends, setFriends] = useState<ContactProps[]>([]);
  const [newFriend, setNewFriend] = useState();
  const { data } = useGetUser();
  const { socket } = useSocketStore();

  const mutation = useRemoveContactMutation();

  interface ContactProps {
    id: string;
    username: string;
  }

  useEffect(() => {
    socket?.on("getNewFriend", (data) => {
      setNewFriend(data);
    });

    socket?.on("removeFriend", (friendId) => {
      setFriends((prevFriends) =>
        prevFriends.filter((friend) => friend.id !== friendId)
      );
    });
  }, [socket]);

  useEffect(() => {
    if (newFriend) {
      setFriends((prev) => [...prev, newFriend]);
    }
  }, [newFriend]);

  const handleDelete = (contactId: string) => {
    mutation.mutate(contactId);
  };

  console.log("friends", newFriend);


  

  const handlePrivateMessage = () => {
    console.log("Private message");
  };

  useEffect(() => {
    if (data?.friendsList) {
      setFriends(data.friendsList);
    }
  }, [data]);
  const haveContact = friends.length > 0;

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
          {haveContact && ` (${friends.length})`}
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
                  {friends.map((friend: ContactProps) => (
                    <CommandItem
                      key={friend.username}
                      className="flex items-center justify-between"
                    >
                      {friend.username}

                      <div className="flex gap-4 h-8">
                        <Button
                          variant="linkForm"
                          title="Envoyer un message"
                          className="p-0"
                          onClick={() => handlePrivateMessage()}
                        >
                          <Icons.chat width="16" height="16" />
                        </Button>
                        <Button
                          variant="alert"
                          title="Retirer de la liste de contacts"
                          className="p-0"
                          onClick={() => handleDelete(friend.id)}
                        >
                          <Icons.delete width="16" height="16" />
                        </Button>
                      </div>
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
