import { SearchUser } from "@/components/chat/search-user";
import { Separator } from "@/components/ui/separator";
import { Room } from "@/components/Room";
import { Contact } from "@/components/Contact";
import ChatRoom from "@/components/chat/chat-room";
import ChatUnselected from "@/components/chat/chat-unselected";
import { useRoomStore } from "@/store/room.store";
import useFetchUser from "@/hooks/fetch-user";
import { DialogCreate } from "@/components/dialog/dialog-create";
import { RoomUsers } from "@/components/room-users";

const Chat = () => {
  const { room } = useRoomStore();
  const { data: user } = useFetchUser();

  return (
    <div className="page_chat">
      <aside className="flex flex-col gap-4 pt-4 border-r-2 bg-muted dark:bg-primary-foreground h-full px-10">
        <h2 className="text-3xl">Contacts</h2>
        {user && (
          <>
            <Separator />
            <SearchUser userId={user.id} />
          </>
        )}

        <Contact />
        <Separator />
      </aside>

      <main className="flex-grow h-full bg-primary-foreground dark:bg-primary-background">
        {room ? <ChatRoom roomId={room} /> : <ChatUnselected />}
      </main>

      <aside className="flex flex-col gap-4 pt-4 border-l-2 bg-muted dark:bg-primary-foreground h-full px-10">
        <h2 className="text-3xl">Salons</h2>
        <Separator />
        <DialogCreate
          btnTrigger="Créer un salon"
          headerTitle="Créer un salon"
          headerDescription="Saisissez le nom du salon."
        />
        <Room />

        <Separator />

        {room && (
          <>
            <h2 className="text-3xl">Utilisateurs </h2>
            <Separator />
            <RoomUsers roomId={room} />
          </>
        )}
      </aside>
    </div>
  );
};

export default Chat;
