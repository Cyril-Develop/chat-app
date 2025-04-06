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
import { useLeaveRoomMutation } from "@/hooks/api/chat/leave-room";
import { cn } from "@/lib/utils";
import { useContactStore } from "@/store/contact.store";
import { useNotificationStore } from "@/store/notification.store";
import { useRoomStore } from "@/store/room.store";
import { useSocketStore } from "@/store/socket.store";
import { FriendProps } from "@/types/contact";
import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useGetFriends from "@/hooks/api/user/get-friends";
import useGetBlockedUsers from "@/hooks/api/user/get-blocked-users";
import { useUnblockUserMutation } from "@/hooks/api/user/unblock-user";

export function Contact() {
  const { data: blockedUsers } = useGetBlockedUsers();
  const { data: friends } = useGetFriends();
  const { socket } = useSocketStore();
  const { room } = useRoomStore();
  const { id: roomId } = room || {};
  const { contactId, setContactId } = useContactStore();
  const { mutate: leaveRoom } = useLeaveRoomMutation();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { notifications, clearNotificationsForContact } =
    useNotificationStore();
  const { mutate: unblockUser } = useUnblockUserMutation();

  // --- UTILS ---
  const countNotifications = (contactId: number) => {
    return notifications.filter(
      (notification) => notification.senderId === contactId
    ).length;
  };

  const handleFriendRemoved = (friendId: number) => {
    if (friendId === contactId) {
      setContactId(null);
    }
  };

  useEffect(() => {
    socket?.on("friendRemoved", handleFriendRemoved);
    return () => {
      socket?.off("friendRemoved", handleFriendRemoved);
    };
  }, [socket, handleFriendRemoved]);

  const handlePrivateChat = useCallback(
    (friendId: number) => {
      if (roomId) {
        leaveRoom(roomId);
      }
      if (contactId === friendId) {
        setContactId(null);
      } else {
        setContactId(friendId);
        clearNotificationsForContact(friendId);
      }
      setOpen(false);
    },
    [contactId, roomId, leaveRoom, setContactId]
  );

  const isOnChatPage = location.pathname === "/chateo/chat";
  const haveContact = (friends?.length || 0) > 0;
  const haveBlockedContact = (blockedUsers?.length || 0) > 0;
  const haveNotification = notifications.length > 0;
  const shouldShowPopover = haveContact || haveBlockedContact;

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
          className={cn(
            "w-[200px] justify-between p-3",
            haveNotification &&
              "bg-green-700 hover:bg-green-700/80 dark:bg-green-600 dark:hover:bg-green-600/80"
          )}
          disabled={!shouldShowPopover}
        >
          Voir mes contacts
          {(haveContact || haveBlockedContact) && (
            <> ({(friends?.length || 0) + (blockedUsers?.length || 0)})</>
          )}
          {open ? <Icons.chevronUp /> : <Icons.chevronDown />}
        </Button>
      </PopoverTrigger>

      {shouldShowPopover && (
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

              {haveContact && (
                <CommandGroup heading="Contacts">
                  {friends.map((friend: FriendProps) => (
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
              )}

              {haveBlockedContact && (
                <CommandGroup heading="Contacts bloqués">
                  {blockedUsers.map((user: any) => (
                    <CommandItem
                      key={user.id}
                      className={cn("flex items-center justify-between")}
                    >
                      {user.username}
                      <Button
                        variant="linkForm"
                        className={cn("p-0")}
                        onClick={() => unblockUser(user.id)}
                        title="Débloquer l'utilisateur"
                      >
                        <Icons.close height={20} width={20} />
                      </Button>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      )}
    </Popover>
  );
}
