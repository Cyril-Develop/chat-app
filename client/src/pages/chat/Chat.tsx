import ChatUnselected from "@/components/chat/chat-unselected";
import PrivateChat from "@/components/chat/private-chat";
import { SearchUser } from "@/components/chat/search-user";
import { Contact } from "@/components/Contact";
import { CreateRoom } from "@/components/dialog/create-room";
import ContactRequest from "@/components/notification/contact-request";
import Room from "@/components/room/room";
import { RoomSelector } from "@/components/room/room-selector";
import { RoomUsers } from "@/components/room/room-users";
import { Separator } from "@/components/ui/separator";
import useGetUser from "@/hooks/get-user";
import { useContactStore } from "@/store/contact.store";
import { useRoomStore } from "@/store/room.store";
import { useSocketStore } from "@/store/socket.store";
import { useUserStore } from "@/store/user.store";
import { getUserId } from "@/utils/get-userId";
import { useEffect, useRef, useState } from "react";

const Chat = () => {
  const { room } = useRoomStore();
  const { id: roomId } = room || {};
  const { statut, role } = useUserStore((state) => state);
  const userId = getUserId();
  const { data: currentUser } = useGetUser(userId);
  const { socket } = useSocketStore();
  const { contactId } = useContactStore();
  const [showNotification, setShowNotification] = useState(false);
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
        statut
      );

      prevRoomRef.current = room.id;
    }
  }, [room, socket, currentUser]);

  return (
    <div className="chat">
      <aside className="chat_aside border-r-2">
        <div className="chat_aside_container">
          <h2 className="text-3xl">Contacts</h2>
          {currentUser && (
            <>
              <Separator />
              <SearchUser currentUser={currentUser} />
            </>
          )}
          <Contact currentUser={currentUser} />
        </div>
        <div className="chat_aside_container">
          {showNotification && (
            <>
              <h2 className="text-3xl">Notifications</h2>
              <Separator />
            </>
          )}
          <ContactRequest
            currentUser={currentUser}
            setShowNotification={setShowNotification}
          />
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
          <h2 className="text-3xl">Salons</h2>
          <Separator />
          <CreateRoom
            btnTrigger="Créer un salon"
            headerTitle="Créer un salon"
            headerDescription="Saisissez le nom du salon."
          />
          <RoomSelector />
        </div>
        {room && currentUser && (
          <div className="chat_aside_container">
            <h2 className="text-3xl">Utilisateurs</h2>
            <Separator />
            <RoomUsers />
          </div>
        )}
      </aside>
    </div>
  );
};

export default Chat;
