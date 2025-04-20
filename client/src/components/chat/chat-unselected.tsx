import Logo from "/images/chatting.svg";
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
        <div className="flex flex-col h-full justify-center items-center grow p-4 py-8 2xl:flex-row">
          <img
            src={Logo}
            alt="logo-messaging"
            className="max-w-[250px] md:max-w-[400px] 2xl:max-w-[500px]"
          />

          <div className="flex flex-col items-center space-y-2 md:space-y-4">
            <h1 className="text-3xl md:text-5xl">
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

            {currentUser?.role === "GUEST" ? (
              <div>
                <p className="lg:text-xl text-gray-600 dark:text-gray-400 text-center">
                  En tant qu'invité, certaines fonctionnalités sont limitées.
                </p>
                <p className="lg:text-xl text-gray-600 dark:text-gray-400 text-center">
                  Pour commencer à discuter vous devez créer ou rejoindre un
                  salon.
                </p>
              </div>
            ) : (
              <p className="lg:text-xl text-gray-600 dark:text-gray-400 text-center">
                Pour commencer à discuter vous devez créer ou rejoindre un
                salon.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatUnselected;
