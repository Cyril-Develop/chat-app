import Logo from "@/assets/chatting.svg";
import useGetUser from "@/hooks/api/user/get-current-user";
import { Icons } from "@/components/Icons";
import { sexColor } from "@/utils/sex-color";

const ChatUnselected = () => {
  const { data: currentUser, isLoading } = useGetUser();

  return (
    <div className="bg-muted h-full flex justify-center items-center">
      {isLoading ? (
        <Icons.loader />
      ) : (
        <div className="flex flex-col h-full justify-center items-center grow  p-2 pl-2 xl:p-2 xl:pl-0 xl:flex-row">
          <img src={Logo} alt="logo-messaging" className="w-full md:w-1/3" />

          <div className="flex flex-col items-center gap-2">
            <h1 className="text-xl sm:text-2xl">
              Bienvenue{" "}
              {currentUser?.role !== "GUEST" && (
                <span
                  className={`font-semibold ${
                    sexColor[currentUser?.sex as keyof typeof sexColor]
                  }`}
                >
                  {currentUser?.username}
                </span>
              )}{" "}
            </h1>

            {currentUser?.role === "GUEST" && (
              <p className="text-paragraph text-center">
                En tant qu'invité, certaines fonctionnalités sont limitées.
              </p>
            )}
            <p className="text-paragraph text-center">
              Pour commencer à discuter vous devez créer ou rejoindre un salon.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatUnselected;
