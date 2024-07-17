import { Contact } from "@/components/Contact";
import ChatRoom from "@/components/chat/chat-room";
import ChatUnselected from "@/components/chat/chat-unselected";
import { SearchUser } from "@/components/chat/search-user";
import { DialogCreate } from "@/components/dialog/dialog-create";
import { RoomSelector } from "@/components/room/room-selector";
import { RoomUsers } from "@/components/room/room-users";
import { Separator } from "@/components/ui/separator";
import useGetUser from "@/hooks/get-user";
import { useRoomStore } from "@/store/room.store";
import { useSocketStore } from "@/store/socket.store";
import { useUserStore } from "@/store/user.store";
import { useEffect, useRef } from "react";

const Chat = () => {
  const { room } = useRoomStore();
  const { statut } = useUserStore((state) => state);
  const { data: currentUser } = useGetUser();
  const { socket } = useSocketStore();

  const prevRoomRef = useRef<number | null>(null);

  useEffect(() => {
    if (room && currentUser) {
      const prevRoom = prevRoomRef.current;
      if (prevRoom) {
        socket?.emit("leaveRoom", prevRoom, currentUser?.id);
      }

      socket?.emit(
        "joinRoom",
        room,
        currentUser.id,
        currentUser.username,
        currentUser.profileImage,
        statut
      );

      prevRoomRef.current = room;
    }
  }, [room, socket, currentUser]);

  return (
    <div className="page_chat">
      <aside className="hidden lg:flex flex-col gap-4 pt-4 border-r-2 dark:border-secondary-foreground/30 bg-muted dark:bg-secondary h-full px-5 xl:px-10 xl:flex">
        <h2 className="text-3xl">Contacts</h2>
        {currentUser && (
          <>
            <Separator />
            <SearchUser userId={currentUser.id} />
          </>
        )}
        <Contact />
      </aside>

      <main className="w-full lg:flex-grow h-full bg-primary-foreground dark:bg-primary-background">
        {room ? (
          <ChatRoom roomId={room} currentUser={currentUser} />
        ) : (
          <ChatUnselected />
        )}
      </main>

      <aside className="hidden lg:flex flex-col gap-8 pt-4 border-l-2 dark:border-secondary-foreground/30 bg-muted dark:bg-secondary h-full px-5 xl:px-10">
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
