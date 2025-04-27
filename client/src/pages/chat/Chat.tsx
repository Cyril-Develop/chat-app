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
import { useContactStore } from "@/store/contact.store";
import { useRoomStore } from "@/store/room.store";

const Chat = () => {
  const roomId = useRoomStore((state) => state.room?.id);
  const { data: currentUser } = useGetUser();
  const contactId = useContactStore((state) => state.contactId);

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
