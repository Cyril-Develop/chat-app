import { SearchUser } from "@/components/chat/search-user";
import { Separator } from "@/components/ui/separator";
import { Room } from "@/components/Room";
import { Contact } from "@/components/Contact";
import ChatRoom from "@/components/chat/chat-room";
import ChatUnselected from "@/components/chat/chat-unselected";
import { useRoomStore } from "@/store/room.store";
import useFetchChats from "@/hooks/fetch-chats";

const Chat = () => {
  const { room } = useRoomStore();
  const { data } = useFetchChats();

  return (
    <div className="page_chat">
      <aside className="flex flex-col gap-4 pt-4 border-r-2 bg-muted dark:bg-primary-foreground h-full px-10">
        {data && (
          <>
            <h2 className="text-3xl">Salons</h2>
            <Separator />
            <Room />

            <h2 className="text-3xl">Contacts</h2>
            <Separator />
            <SearchUser />

            <h2 className="text-3xl">Mes contacts</h2>
            <Separator />
            <Contact />
          </>
        )}
      </aside>

      <main className="flex-grow h-full bg-primary-foreground dark:bg-primary-background">
        {room ? <ChatRoom /> : <ChatUnselected />}
      </main>

      <aside className="flex flex-col gap-4 pt-4 border-l-2 bg-muted dark:bg-primary-foreground h-full px-10">
        {data && (
          <>
            <h2 className="text-3xl">Utilisateurs </h2>
            <Separator />
          </>
        )}
      </aside>
    </div>
  );
};

export default Chat;
