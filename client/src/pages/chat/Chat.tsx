import Logo from "@/assets/chatting.svg";
import useFetchUser from "@/hooks/fetch-user";
import { SearchUser } from "@/components/chat/search-user";
import { DialogJoin } from "@/components/dialog/dialog-join";
import { DialogCreate } from "@/components/dialog/dialog-create";
import { Separator } from "@/components/ui/separator";

const Chat = () => {
  const { data } = useFetchUser();

  return (
    <div className="page_chat">
      <aside className="bg-primary text-secondary dark:bg-primary-foreground dark:text-secondary-foreground h-full w-1/4 px-10">
        <SearchUser />
        <h1 className="text-3xl font-semibold">Messagerie</h1>
        <p className="text-lg">
          Bienvenue sur notre plateforme de messagerie sécurisée. privés ou
          publics, discutez avec vos amis et rejoignez une communauté dynamique
          et engageante.
        </p>
      </aside>

      <div className="bg-muted flex flex-col justify-center items-center w-9/12 h-full p-2 pl-2  xl:p-2 xl:pl-0 xl:flex-row">
        <img src={Logo} alt="logo-messaging" className="w-full md:w-1/2" />

        <div className="flex flex-col items-center gap-2">
          <h1 className="text-2xl">
            Bienvenue{" "}
            <span className="font-semibold text-primary text-3xl">
              {data?.username}
            </span>{" "}
            !
          </h1>
          <p className="text-lg text-center">
            Pour commencer à discuter vous devez{" "}
            <DialogCreate
              btnTrigger="créer"
              headerTitle="Créer un salon"
              headerDescription="Saisissez le nom du salon."
            />
            ou{" "}
            <DialogJoin
              btnTrigger="rejoindre"
              headerTitle="Rejoindre un salon"
              headerDescription="Entrez le nom du salon pour le rejoindre. S'il est privé, un mot de passe vous sera demandé."
            />
            un salon.
          </p>
        </div>
      </div>

      <aside className="bg-primary text-secondary dark:bg-primary-foreground dark:text-secondary-foreground w-1/4 h-full px-10">
        <h1 className="text-3xl font-semibold">Messagerie</h1>
        <p className="text-lg">
          Bienvenue sur notre plateforme de messagerie sécurisée. Créez des
          salons privés ou publics, discutez avec vos amis et rejoignez une
          communauté dynamique et engageante.
        </p>
      </aside>
    </div>
  );
};

export default Chat;
