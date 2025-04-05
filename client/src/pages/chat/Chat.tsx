import ChatUnselected from "@/components/chat/chat-unselected";
import PrivateChat from "@/components/chat/private-chat";
import { CreateRoom } from "@/components/dialog/create-room";
import Room from "@/components/room/room-chat";
import { Contact } from "@/components/sidebar/contact/contact-list";
import { SearchUser } from "@/components/sidebar/contact/search-user";
import ContactRequest from "@/components/sidebar/notification/contact-request";
import { RoomSelector } from "@/components/sidebar/room/room-selector";
import { RoomUsers } from "@/components/sidebar/room/room-users";
import { Separator } from "@/components/ui/separator";
import useGetUser from "@/hooks/api/user/get-current-user";
import useWindowWidth from "@/hooks/window-width";
import { useAuthStore } from "@/store/auth.store";
import { useContactStore } from "@/store/contact.store";
import { useRoomStore } from "@/store/room.store";
import { useSocketStore } from "@/store/socket.store";
import { HandleUserStatusChangedProps, UserInfos } from "@/types/user";
import { getVisibleUsersCount, getVisibleUsersLabel } from "@/utils/room";
import { useEffect, useRef } from "react";

const Chat = () => {
  const { room } = useRoomStore();
  const { id: roomId } = room || {};
  const { role, visible } = useAuthStore((state) => ({
    role: state.user?.role,
    visible: state.visible,
  }));
  const { data: currentUser } = useGetUser();
  const { socket } = useSocketStore();
  const { contactId } = useContactStore();
  const prevRoomRef = useRef<number | null>(null);

  useEffect(() => {
    if (room && currentUser) {
      const prevRoom = prevRoomRef.current;
      if (prevRoom) {
        socket?.emit("leaveRoom", prevRoom, currentUser?.id);
      }

      socket?.emit(
        "joinRoom",
        roomId,
        currentUser.id,
        currentUser.username,
        currentUser.profileImage,
        visible
      );

      prevRoomRef.current = room.id;
    }
  }, [room, socket, currentUser]);

  const { usersInRoom, setUsersInRoom, updateUserInRoom } = useRoomStore();
  const windowWidth = useWindowWidth();

  useEffect(() => {
    if (windowWidth < 1024) {
      socket?.emit("requestUserInRoom", roomId);
    }

    const handleUserInRoom = (userList: UserInfos[]) => {
      setUsersInRoom(userList);
    };

    const handleUserStatusChanged = ({
      userId,
      visible,
    }: HandleUserStatusChangedProps) => {
      updateUserInRoom({ id: userId, visible });
    };

    const handleUpdatedUserInfos = (updatedUser: UserInfos) => {
      updateUserInRoom(updatedUser);
    };

    socket?.on("getUserInRoom", handleUserInRoom);
    socket?.on("userStatusChanged", handleUserStatusChanged);
    socket?.on("updatedUserInfos", handleUpdatedUserInfos);

    return () => {
      socket?.off("getUserInRoom", handleUserInRoom);
      socket?.off("userStatusChanged", handleUserStatusChanged);
      socket?.off("updatedUserInfos", handleUpdatedUserInfos);
    };
  }, [socket, windowWidth, roomId]);

  return (
    <div className="chat">
      <aside className="chat_aside border-r-2">
        <div className="chat_aside_container">
          <h2 className="text-title">Contacts</h2>
          {currentUser && (
            <>
              <Separator />
              <SearchUser currentUser={currentUser} />
            </>
          )}
          <Contact currentUser={currentUser} />
        </div>
        <div className="chat_aside_container">
          <ContactRequest currentUser={currentUser} />
        </div>
      </aside>

      <main className="w-full lg:flex-grow h-full bg-primary-foreground dark:bg-primary-background">
        {roomId ? (
          <Room roomId={roomId} currentUser={currentUser} />
        ) : contactId ? (
          <PrivateChat contactId={contactId} />
        ) : (
          <ChatUnselected role={role} />
        )}
      </main>

      <aside className="chat_aside border-l-2">
        <div className="chat_aside_container">
          <h2 className="text-title">Salons</h2>
          <Separator />
          <CreateRoom
            btnTrigger="Créer un salon"
            headerTitle="Créer un salon"
            headerDescription="Saisissez les informations du salon."
          />
          <RoomSelector />
        </div>
        {room && currentUser && (
          <div className="chat_aside_container">
            <div className="flex justify-between">
              <h2 className="text-title">
                {getVisibleUsersLabel(usersInRoom)}
              </h2>
              <span className="text-additional-info self-end mb-1">
                {getVisibleUsersCount(usersInRoom)}
              </span>
            </div>
            <Separator />
            <RoomUsers usersInRoom={usersInRoom} />
          </div>
        )}
      </aside>
    </div>
  );
};

export default Chat;
