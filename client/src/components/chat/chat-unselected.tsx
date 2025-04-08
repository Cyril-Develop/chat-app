import Logo from "@/assets/chatting.svg";
import { SkeletonChatUnselected } from "@/components/skeleton/skeleton";
import useGetUser from "@/hooks/api/user/get-current-user";

const ChatUnselected = () => {
  const { data: currentUser, isLoading } = useGetUser();

  return (
    <>
      {isLoading ? (
        <SkeletonChatUnselected />
      ) : (
        <div className="bg-muted flex flex-col justify-center items-center grow h-full p-2 pl-2 xl:p-2 xl:pl-0 xl:flex-row">
          <img src={Logo} alt="logo-messaging" className="w-full md:w-1/3" />

          <div className="flex flex-col items-center gap-2">
            <h1 className="text-xl sm:text-2xl">
              Bienvenue{" "}
              {currentUser?.role !== "GUEST" && (
                <span className="font-semibold text-primary">
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
    </>
  );
};

export default ChatUnselected;
