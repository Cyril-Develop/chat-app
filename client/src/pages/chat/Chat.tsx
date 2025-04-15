import ChatUnselected from "@/components/chat/chat-unselected";
import PrivateChat from "@/components/chat/private-chat";
import { CreateRoom } from "@/components/dialog/create-room";
import Room from "@/components/room/room-chat";
import { Contact } from "@/components/sidebar/contact/contact-list";
import { SearchUser } from "@/components/sidebar/contact/search-user";
import { RoomSelector } from "@/components/sidebar/room/room-selector";
import { RoomUsers } from "@/components/sidebar/room/room-users";
import { Separator } from "@/components/ui/separator";
import useGetUser from "@/hooks/api/user/get-current-user";
import { useAuthStore } from "@/store/auth.store";
import { useContactStore } from "@/store/contact.store";
import { useRoomStore } from "@/store/room.store";
import { useSocketStore } from "@/store/socket.store";
import { useEffect, useRef } from "react";

const Chat = () => {
  const roomId = useRoomStore((state) => state.room?.id);
  const { visible } = useAuthStore((state) => ({ visible: state.visible }));
  const { data: currentUser } = useGetUser();
  const { socket } = useSocketStore();
  const { contactId } = useContactStore();
  const prevRoomRef = useRef<number | null>(null);

  //! Essayer de refactoriser ce useEffect
  useEffect(() => {
    if (roomId && currentUser) {
      const prevRoom = prevRoomRef.current;
      if (prevRoom) {
        socket?.emit("leaveRoom", prevRoom, currentUser?.id);
      }

      socket?.emit(
        "joinRoom",
        roomId,
        currentUser.id,
        currentUser.username,
        currentUser.sex,
        currentUser.profileImage,
        visible
      );

      prevRoomRef.current = roomId;
    }
  }, [roomId, socket, currentUser]);

  return (
    <div className="chat">
      <aside className="chat_aside border-r-2">
        <div className="chat_aside_container">
          <h2 className="text-title">Contacts</h2>
          <Separator />
          <SearchUser />
          <Contact />
        </div>
      </aside>

      <main className="w-full lg:flex-grow h-full bg-primary-foreground dark:bg-primary-background">
        {roomId ? (
          <Room roomId={roomId} currentUser={currentUser} />
        ) : contactId ? (
          <PrivateChat contactId={contactId} />
        ) : (
          <ChatUnselected />
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
        <div className="chat_aside_container">
          <RoomUsers />
        </div>
      </aside>
    </div>
  );
};

export default Chat;
