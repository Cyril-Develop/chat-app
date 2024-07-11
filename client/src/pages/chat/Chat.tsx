import { useEffect, useRef } from "react";
import { SearchUser } from "@/components/chat/search-user";
import { Separator } from "@/components/ui/separator";
import { RoomSelector } from "@/components/room/room-selector";
import { Contact } from "@/components/Contact";
import ChatRoom from "@/components/chat/chat-room";
import ChatUnselected from "@/components/chat/chat-unselected";
import { useRoomStore } from "@/store/room.store";
import useGetUser from "@/hooks/get-user";
import { DialogCreate } from "@/components/dialog/dialog-create";
import { RoomUsers } from "@/components/room-users";
import { useSocketStore } from "@/store/socket.store";

const Chat = () => {
  const { room } = useRoomStore();
  const { data: currentUser } = useGetUser();
  const { socket } = useSocketStore();
  const userId = currentUser?.id;

  const prevRoomRef = useRef<number | null>(null);

  useEffect(() => {
    if (room && userId) {
      const prevRoom = prevRoomRef.current;
      if (prevRoom) {
        socket?.emit("leaveRoom", prevRoom, userId);
      }

      socket?.emit(
        "joinRoom",
        room,
        currentUser.id,
        currentUser.username,
        currentUser.profileImage
      );

      prevRoomRef.current = room;
    }
  }, [room, socket, userId, currentUser]);

  return (
    <div className="page_chat">
      <aside className="flex flex-col gap-4 pt-4 border-r-2 dark:border-secondary-foreground/30 bg-muted dark:bg-secondary h-full px-5 xl:px-10">
        <h2 className="text-3xl">Contacts</h2>
        {currentUser && (
          <>
            <Separator />
            <SearchUser userId={currentUser.id} />
          </>
        )}
        <Contact />
      </aside>

      <main className="flex-grow h-full bg-primary-foreground dark:bg-primary-background">
        {room ? (
          <ChatRoom roomId={room} currentUser={currentUser} />
        ) : (
          <ChatUnselected />
        )}
      </main>

      <aside className="flex flex-col gap-8 pt-4 border-l-2 dark:border-secondary-foreground/30 bg-muted dark:bg-secondary h-full px-5 xl:px-10">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl">Salons</h2>
          <Separator />
          <DialogCreate
            btnTrigger="Créer un salon"
            headerTitle="Créer un salon"
            headerDescription="Saisissez le nom du salon."
          />
          <RoomSelector />
        </div>
        {room && currentUser && (
          <div className="flex flex-col gap-4">
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
