import { useEffect, useState, useCallback } from "react";
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
import { useNotificationStore } from "@/store/notification.store";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";

export function Contact({ currentUser }: ContactProps) {
  const [friends, setFriends] = useState<FriendProps[]>([]);
  const { socket } = useSocketStore();
  const { room } = useRoomStore();
  const { id: roomId } = room || {};
  const { contactId, setContactId } = useContactStore();
  const { mutate: leaveRoom } = useLeaveRoomMutation();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { notifications, clearNotificationsForContact } =
    useNotificationStore();

  // Compter le nombre de notifications provenant de chaque contact
  const countNotifications = (contactId: number) => {
    return notifications.filter(
      (notification) => notification.senderId === contactId
    ).length;
  };

  // Met à jour la liste des amis au montage du composant
  useEffect(() => {
    if (currentUser?.friendsList) {
      setFriends(currentUser.friendsList);
    }
  }, [currentUser]);

  // Fonction pour gérer l'ajout d'un ami via la demande acceptée
  const handleFriendRequestAccepted = useCallback(
    (data: any) => {
      if (
        currentUser.id === data.senderId ||
        currentUser.id === data.receiverId
      ) {
        const newFriend =
          currentUser.id === data.senderId ? data.receiverId : data.senderId;
        const newUsername =
          currentUser.id === data.senderId
            ? data.receiverName
            : data.senderName;

        setFriends((prevFriends) => [
          ...prevFriends,
          { id: newFriend, username: newUsername },
        ]);
      }
    },
    [currentUser]
  );

  // Fonction pour gérer la suppression d'un ami
  const handleFriendRemoved = useCallback(
    (friendId: number) => {
      if (friendId === contactId) {
        setContactId(null); // Si le contact supprimé était celui sélectionné, réinitialiser le contactId
      }
      setFriends((prevFriends) =>
        prevFriends.filter((friend) => friend.id !== friendId)
      );
    },
    [contactId, setContactId]
  );

  // Gérer les événements de socket
  useEffect(() => {
    socket?.on("friendRequestAccepted", handleFriendRequestAccepted);
    socket?.on("friendRemoved", handleFriendRemoved);

    return () => {
      socket?.off("friendRequestAccepted", handleFriendRequestAccepted);
      socket?.off("friendRemoved", handleFriendRemoved);
    };
  }, [socket, handleFriendRequestAccepted, handleFriendRemoved]);

  // Fonction pour gérer l'ouverture et la fermeture des discussions privées
  const handlePrivateChat = useCallback(
    (friendId: number) => {
      if (roomId) {
        leaveRoom(roomId);
      }
      // Vérifié si la discussion privée est déjà ouverte pour le contact sélectionné
      if (contactId === friendId) {
        setContactId(null);
      } else {
        setContactId(friendId);
        // Effacer les notifications pour le contact sélectionné si on ouvre la discussion
        clearNotificationsForContact(friendId);
      }
      setOpen(false);
    },
    [contactId, roomId, leaveRoom, setContactId]
  );

  const isOnChatPage = location.pathname === "/chateo/chat";
  const haveContact = friends.length > 0;
  const haveNotification = notifications.length > 0;

  // Si l'utilisateur est sur la page de chat et si un contact est sélectionné, effacer les notifications
  useEffect(() => {
    if (contactId && isOnChatPage) {
      clearNotificationsForContact(contactId);
    }
  }, [contactId, isOnChatPage]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-label="Voir mes contacts"
          size="box"
          aria-expanded={open}
          className={
            haveNotification
              ? cn(
                  "w-[200px] justify-between p-3 bg-green-700 hover:bg-green-700/80 dark:bg-green-600 dark:hover:bg-green-600/80"
                )
              : cn("w-[200px] justify-between p-3")
          }
          disabled={!haveContact}
        >
          Voir mes contacts
          {haveContact && ` (${friends.length})`}
          {open ? <Icons.chevronUp /> : <Icons.chevronDown />}
        </Button>
      </PopoverTrigger>
      {haveContact && (
        <PopoverContent
          className={cn("p-0 w-[200px]")}
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <Command>
            <CommandInput placeholder="Rechercher un contact" />
            <CommandList>
              <CommandEmpty className={cn("error p-3")}>
                Aucun contact trouvé.
              </CommandEmpty>
              <CommandGroup heading="Contacts">
                {friends.map((friend) => (
                  <CommandItem
                    key={friend.id}
                    onSelect={() => handlePrivateChat(friend.id)}
                    title={
                      contactId === friend.id
                        ? "Fermer la discussion"
                        : "Ouvrir la discussion"
                    }
                  >
                    <div className="flex items-center justify-between w-full cursor-pointer">
                      {friend.username}
                      {countNotifications(friend.id) > 0 && (
                        <span className="bg-green-700 dark:bg-green-600 text-primary-foreground font-semibold rounded-full w-5 h-5 flex items-center justify-center text-xs">
                          {countNotifications(friend.id)}
                        </span>
                      )}
                    </div>
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
