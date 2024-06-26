import Logo from "@/assets/chatting.svg";
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
          Pour commencer à discuter vous devez créer ou rejoindre un salon.
        </p>
      </div>
    </div>
  );
};

export default ChatUnselected;
