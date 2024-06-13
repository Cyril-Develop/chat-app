import { Link } from "react-router-dom";
import Logo from "@/assets/notFound.png";

const NotFound = () => {
  return (
    <div className="bg-muted dark:bg-secondary flex flex-col items-center justify-center gap-5 min-h-screen p-2">
      <h1 className="text-4xl">Page introuvable ! </h1>
      <div className="text-xl text-center">
        <p >
          Désolé, la page que vous recherchez n'existe pas.
        </p>
        <p>
          Vous pouvez vérifier l'URL ou cliquer sur le bouton ci-dessous pour
          revenir à la page d'accueil.
        </p>
      </div>
      <img
        src={Logo}
        alt="404"
        className="min-w-72 w-2/3 lg:w-1/3 md:w-2/5 sm:w-2/4"
      />

      <Link to="/" className="hover:underline underline-offset-4 text-lg">
        Retouner à la page d'accueil
      </Link>
    </div>
  );
};

export default NotFound;
