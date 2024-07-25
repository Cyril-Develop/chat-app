import { useEffect, useState } from "react";
import { useSocketStore } from "@/store/socket.store";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useRoomStore } from "@/store/room.store";
import { useLeaveRoomMutation } from "@/hooks/leave-room";
import { FriendProps, ContactProps } from "@/types/contact";
import { useContactStore } from "@/store/contact.store";

export function Contact({ currentUser }: ContactProps) {
  const [open, setOpen] = useState(false);
  const [friends, setFriends] = useState<FriendProps[]>([]);
  const { socket } = useSocketStore();
  const { room } = useRoomStore();
  const { id: roomId } = room || {};
  const { contactId, setContactId } = useContactStore();
  const leaveRoom = useLeaveRoomMutation();

  useEffect(() => {
    if (currentUser?.friendsList) {
      setFriends(currentUser.friendsList);
    }
  }, [currentUser]);

  useEffect(() => {
    socket?.on("friendRequestAccepted", (currentUser: FriendProps) => {
      setFriends((prevFriends) => [...prevFriends, currentUser]);
    });

    socket?.on("friendRemoved", (friendId) => {
      setFriends((prevFriends) =>
        prevFriends.filter((friend) => friend.id !== friendId)
      );
    });
  }, [socket]);

  const handlePrivateChat = (friendId: number) => {
    // Leave current room if any
    if (roomId) {
      leaveRoom.mutate(roomId);
    }
    // Toggle private chat
    if (contactId === friendId) {
      // Close private chat if already open
      setContactId(null);
      setOpen(false);
    } else {
      // Open private chat with the selected friend
      setContactId(friendId);
      setOpen(false);
    }
  };

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
            <CommandInput placeholder="Rechercher un contact" />
            <CommandList>
              <CommandEmpty className="error p-3">
                Aucun contact trouvé.
              </CommandEmpty>
              <CommandGroup heading="Contacts">
                {friends.map((friend) => (
                  <CommandItem
                    key={friend.id}
                    className="flex items-center justify-between"
                  >
                    {friend.username}
                    <Button
                      variant="linkForm"
                      aria-label="contact"
                      className="p-0"
                      onClick={() => handlePrivateChat(friend.id)}
                    >
                      <Icons.user width="16" height="16" />
                    </Button>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      )}
    </Popover>
  );
}
