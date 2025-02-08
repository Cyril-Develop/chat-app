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
  const [friends, setFriends] = useState<FriendProps[]>([]);
  const { socket } = useSocketStore();
  const { room } = useRoomStore();
  const { id: roomId } = room || {};
  const { contactId, setContactId } = useContactStore();
  const leaveRoom = useLeaveRoomMutation();

  //Permet de gérer l'état de la popover, Radix UI, où un Popover se ferme immédiatement lorsqu'il est utilisé à l'intérieur d'un Dialog ou lorsqu'il y a des conflits d'auto-focus
  const [open, setOpen] = useState(false);
  const togglePopover = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    if (currentUser?.friendsList) {
      setFriends(currentUser.friendsList);
    }
  }, [currentUser]);

  useEffect(() => {
    socket?.on("friendRequestAccepted", (data) => {
      // Vérifiez si l'utilisateur connecté est impliqué dans la demande
      if (
        currentUser.id === data.senderId ||
        currentUser.id === data.receiverId
      ) {
        // Déterminez le nouvel ami et son nom
        const newFriend =
          currentUser.id === data.senderId ? data.receiverId : data.senderId;
        const newUsername =
          currentUser.id === data.senderId
            ? data.receiverName
            : data.senderName;

        // Ajoutez le nouvel ami à la liste
        setFriends((prevFriends) => [
          ...prevFriends,
          { id: newFriend, username: newUsername },
        ]);
      }
    });

    socket?.on("friendRemoved", (friendId: number) => {
      if (friendId === contactId) {
        setContactId(null);
      }
      setFriends((prevFriends) =>
        prevFriends.filter((friend) => friend.id !== friendId)
      );
    });

    return () => {
      socket?.off("friendRequestAccepted");
      socket?.off("friendRemoved");
    };
  }, [socket, currentUser, contactId]);

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
          onClick={togglePopover}
        >
          Voir mes contacts
          {haveContact && ` (${friends.length})`}
          {open ? <Icons.chevronUp /> : <Icons.chevronDown />}
        </Button>
      </PopoverTrigger>
      {haveContact && (
        <PopoverContent
          className="p-0 w-[200px]"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
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
