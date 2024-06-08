import { useUserStore } from "@/store/user.store";
import Logo from "@/assets/chatting.svg";

const Chat = () => {
  const { username } = useUserStore((state) => state.user);

  return (
    <div className="page_chat">
      <aside className="bg-primary text-secondary dark:bg-primary-foreground dark:text-secondary-foreground h-full w-1/4 p-2">
        <h1 className="text-3xl font-semibold">Messagerie</h1>
        <p className="text-lg">
          Bienvenue sur notre plateforme de messagerie sécurisée. Créez des
          salons privés ou publics, discutez avec vos amis et rejoignez une
          communauté dynamique et engageante.
        </p>
      </aside>

      <div className="bg-muted flex flex-col justify-center items-center w-9/12 h-full p-2 pl-2  xl:p-2 xl:pl-0 xl:flex-row">
        <img src={Logo} alt="logo-messaging" className="w-full md:w-1/2" />

        <div className="flex flex-col items-center gap-2">
          <h1 className="text-2xl">
            Bienvenue{" "}
            <span className="font-semibold text-primary text-3xl">
              {username}
            </span>{" "}
            !
          </h1>
          <p className="text-lg text-center">
            Pour commencer à discuter, veuillez créer ou rejoindre un salon.
          </p>
          <div className="h-px w-1/2 bg-secondary-foreground mt-2"></div>
        </div>
      </div>

      <aside className="bg-primary text-secondary dark:bg-primary-foreground dark:text-secondary-foreground w-1/4 h-full p-2">
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
