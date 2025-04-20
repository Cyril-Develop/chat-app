import { Link } from "react-router-dom";
import Logo from "/images/notFound.svg";
import { useAuthStore } from "@/store/auth.store";

const NotFound = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return (
    <div className="bg-muted dark:bg-secondary flex flex-col items-center justify-center gap-4 sm:gap-8 min-h-screen p-2">
      <h1 className="text-3xl  md:text-5xl lg:text-6xl 2xl:text-7xl font-bold">
        Page introuvable !{" "}
      </h1>
      <div className="lg:text-xl text-gray-600 dark:text-gray-400 text-center">
        <p>Désolé, la page que vous recherchez n'existe pas.</p>
        <p>
          Vous pouvez vérifier l'URL ou cliquer sur le bouton ci-dessous pour
          revenir à la page d'accueil.
        </p>
      </div>
      <img src={Logo} alt="404" className="min-w-72 max-w-[800px] w-2/3" />

      <Link
        to={isAuthenticated ? "/chateo/chat" : "/chateo"}
        className="link-form text-base lg:text-xl"
      >
        Retouner à la page d'accueil
      </Link>
    </div>
  );
};

export default NotFound;
