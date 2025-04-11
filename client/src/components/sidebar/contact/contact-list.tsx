import { Icons } from "@/components/Icons";
import { SkeletonInput } from "@/components/skeleton/skeleton";
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
import useGetBlockedUsers from "@/hooks/api/user/get-blocked-users";
import useGetFriends from "@/hooks/api/user/get-friends";
import { useUnblockUserMutation } from "@/hooks/api/user/unblock-user";
import { cn } from "@/lib/utils";
import { useContactStore } from "@/store/contact.store";
import { useNotificationStore } from "@/store/notification.store";
import { useRoomStore } from "@/store/room.store";
import { useSocketStore } from "@/store/socket.store";
import { BlockedUsersProps, FriendProps } from "@/types/contact";
import { genderColor } from "@/utils/gender-color";
import { useCallback, useEffect, useState } from "react";

export function Contact() {
  const { data: blockedUsers, isLoading: loadingBlockedUsers } =
    useGetBlockedUsers();
  const { data: friends, isLoading: loadingFriends } = useGetFriends();
  const { socket } = useSocketStore();
  const { room } = useRoomStore();
  const { id: roomId } = room || {};
  const { contactId, setContactId } = useContactStore();
  const { mutate: leaveRoom } = useLeaveRoomMutation();
  const [open, setOpen] = useState(false);
  const { messages, clearNotificationsForContact } = useNotificationStore();
  const { mutate: unblockUser } = useUnblockUserMutation();

  // --- UTILS ---
  const countUnreadMessages = (contactId: number) => {
    return messages.filter((message) => message.user.id === contactId).length;
  };

  const handleFriendRemoved = (friendId: number) => {
    if (friendId === contactId) {
      setContactId(null);
    }
    clearNotificationsForContact(friendId);
  };

  useEffect(() => {
    socket?.on("friendRemoved", handleFriendRemoved);
    return () => {
      socket?.off("friendRemoved", handleFriendRemoved);
    };
  }, [socket, handleFriendRemoved]);

  const handlePrivateChat = useCallback(
    (friendId: number) => {
      // Si l'utilisateur clique sur un contact et qu'il est dans une room, on la quitte
      if (roomId) {
        leaveRoom(roomId);
      }
      // Si l'utilisateur clique sur le même contact, on ferme la discussion
      if (contactId === friendId) {
        setContactId(null);
      } else {
        // Sinon, on ouvre la discussion avec le contact sélectionné et on vide les notifications
        setContactId(friendId);
        clearNotificationsForContact(friendId);
      }
      setOpen(false);
    },
    [contactId, roomId, leaveRoom, setContactId]
  );

  const haveContact = (friends?.length || 0) > 0;
  const haveBlockedContact = (blockedUsers?.length || 0) > 0;
  const haveNewMessage = messages.length > 0;
  const shouldShowPopover = haveContact || haveBlockedContact;

  return (
    <>
      {loadingBlockedUsers || loadingFriends ? (
        <SkeletonInput />
      ) : (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              role="combobox"
              aria-label="Voir mes contacts"
              size="box"
              aria-expanded={open}
              className={cn(
                "w-[200px] justify-between p-3",
                haveNewMessage &&
                  "bg-green-700 hover:bg-green-700/80 dark:bg-green-600 dark:hover:bg-green-600/80"
              )}
              disabled={!shouldShowPopover}
            >
              Voir mes contacts
              {(haveContact || haveBlockedContact) && (
                <> ({(friends?.length || 0) + (blockedUsers?.length || 0)})</>
              )}
              {open ? (
                <Icons.chevronUp width={16} height={16} />
              ) : (
                <Icons.chevronDown width={16} height={16} />
              )}
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
                            <span className={`${genderColor[friend.gender]}`}>
                              {friend.username}
                            </span>
                            {countUnreadMessages(friend.id) > 0 && (
                              <span className="bg-green-700 dark:bg-green-600 text-primary-foreground font-semibold rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                {countUnreadMessages(friend.id)}
                              </span>
                            )}
                          </div>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  )}

                  {haveBlockedContact && (
                    <CommandGroup heading="Contacts bloqués">
                      {blockedUsers.map((user: BlockedUsersProps) => (
                        <CommandItem
                          key={user.id}
                          className={cn("flex items-center justify-between")}
                        >
                          <span className={`${genderColor[user.gender]}`}>
                            {user.username}
                          </span>
                          <Button
                            variant="linkForm"
                            className={cn("p-0")}
                            onClick={() => unblockUser(user.id)}
                            title="Débloquer le contact"
                          >
                            <Icons.close height={16} width={16} />
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
      )}
    </>
  );
}
