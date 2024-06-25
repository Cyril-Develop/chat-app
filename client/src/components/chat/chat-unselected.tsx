import Logo from "@/assets/chatting.svg";
import { DialogJoin } from "@/components/dialog/dialog-join";
import useGetUser from "@/hooks/get-user";

const ChatUnselected = () => {
  const { data } = useGetUser();
  return (
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
          Pour commencer à discuter vous devez créer ou{" "}
          <DialogJoin
            btnTrigger="rejoindre"
            headerTitle="Rejoindre un salon"
            headerDescription="Saisissez le nom du salon que vous souhaitez rejoindre. S'il est privé, un mot de passe vous sera demandé."
          />{" "}
          un salon.
        </p>
      </div>
    </div>
  );
};

export default ChatUnselected;
