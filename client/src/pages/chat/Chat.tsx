import Logo from "@/assets/chatting.svg";
import useFetchUser from "@/hooks/fetch-user";
import { SearchUser } from "@/components/chat/search-user";
import { DialogJoin } from "@/components/dialog/dialog-join";
import { DialogCreate } from "@/components/dialog/dialog-create";
import { Separator } from "@/components/ui/separator";
import { Room } from "@/components/Room";
import { Contact } from "@/components/Contact";

const Chat = () => {
  const { data } = useFetchUser();

  return (
    <div className="page_chat">
      <aside className="flex flex-col gap-4 pt-4 border-r-2 bg-muted dark:bg-primary-foreground h-full px-10">
        <h2 className="text-3xl">Salons</h2>
        <Separator />
        <Room />

        <h2 className="text-3xl">Contacts</h2>
        <Separator />
        <SearchUser />

        <h2 className="text-3xl">Mes contacts</h2>
        <Separator />
        <Contact />
      </aside>

      <div className="bg-muted flex flex-col justify-center items-center grow h-full p-2 pl-2  xl:p-2 xl:pl-0 xl:flex-row">
        <img src={Logo} alt="logo-messaging" className="w-full md:w-1/3" />

        <div className="flex flex-col items-center gap-2">
          <h1 className="text-2xl">
            Bienvenue{" "}
            <span className="font-semibold text-primary text-3xl">
              {data?.username}
            </span>{" "}
            !
          </h1>
          <p className="text-xl text-center">
            Pour commencer à discuter vous devez{" "}
            <DialogCreate
              btnTrigger="créer"
              headerTitle="Créer un salon"
              headerDescription="Saisissez le nom du salon."
            />{" "}
            ou{" "}
            <DialogJoin
              btnTrigger="rejoindre"
              headerTitle="Rejoindre un salon"
              headerDescription="Saisissez le nom du salon que vous souhaitez rejoindre. S'il est privé, un mot de passe vous sera demandé."
            />{" "}
            un salon.
          </p>
        </div>
      </div>

      <aside className="flex flex-col gap-4 pt-4 border-l-2 bg-muted dark:bg-primary-foreground h-full px-10">
        <h2 className="text-3xl">Utilisateurs </h2>
        <Separator />
      </aside>
    </div>
  );
};

export default Chat;
