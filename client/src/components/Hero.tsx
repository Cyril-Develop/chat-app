// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Logo from "@/assets/hero.svg";
// import { Icons } from "@/components/Icons";

const Hero = () => {
  return (
    <main className="flex flex-col-reverse xl:flex-row justify-center items-center xl:items-center space-x-0 xl:space-x-6 p-4 md:p-10 min-h-[calc(100dvh-100px)] w-full max-w-[1600px] mx-auto">
      <div className="xl:flex-1 flex flex-col space-y-4 md:space-y-8 text-center ">
        <h1 className="flex flex-col text-3xl  md:text-5xl lg:text-6xl 2xl:text-7xl font-bold whitespace-nowrap ">
          <span>Vos conversations,</span>
          <span>à votre manière</span>
        </h1>
        <p className="text-md lg:text-xl text-gray-600 dark:text-gray-400">
          Créez des espaces de discussion personnalisés, échangez en temps réel
          et construisez votre communauté dans un environnement sécurisé.
        </p>

        <Link
          to="chat"
          className="bg-primary font-semibold text-base lg:text-xl text-primary-foreground hover:bg-primary/80 h-11 md:h-14 rounded-md flex items-center justify-center mx-auto px-4 lg:px-6"
        >
          S'inscrire gratuitement
        </Link>
      </div>

      <img
        src={Logo}
        alt="hero"
        className="xl:flex-1 max-w-[400px] md:max-w-[500px] 2xl:max-w-[600px]"
      />
    </main>
  );
};
{
  /* <main className="bg-[#6e6e6e55] flex flex-col items-center space-y-8 p-6 sm:p-12 w-full">
  <div className="flex flex-col items-center justify-center gap-2">
    <h2 className="text-4xl text-center">
      Fonctionnalités conçues pour vous
    </h2>
    <p className="text-xl text-center text-gray-600 dark:text-gray-400">
      Notre application combine simplicité d'utilisation et puissance pour
      vous offrir la meilleure expérience de communication.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1400px]">
    <Card className="">
      <CardContent className="flex flex-col items-center justify-center p-6 text-center gap-2">
        <div></div>
        <h3 className="text-xl">Salons personnalisables</h3>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Créez des espaces de discussion privés ou publics et
          personnalisez-les selon vos besoins vos envies.
        </p>
      </CardContent>
    </Card>
    <Card>
      <CardContent className="flex flex-col items-center justify-center p-6 text-center gap-2">
        <div>⚡</div>
        <h3 className="text-xl">Messagerie instantanée</h3>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Échangez des messages, des images,... En temps réel avec des
          personnes de tout horizon et partagez sans limites.
        </p>
      </CardContent>
    </Card>
    <Card>
      <CardContent className="flex flex-col items-center justify-center p-6 text-center gap-2">
        <div>⚡</div>
        <h3 className="text-xl">Notifications</h3>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Recevez des notifications par e-mail pour les messages et les
          demandes d'amis, même lorsque vous êtes hors ligne.
        </p>
      </CardContent>
    </Card>
    <Card>
      <CardContent className="flex flex-col items-center justify-center p-6 text-center gap-2">
        <div>👥</div>
        <h3 className="text-xl">Gestion des contacts</h3>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Recherchez et ajoutez facilement des amis pour des conversations
          privées.
        </p>
      </CardContent>
    </Card>
    <Card>
      <CardContent className="flex flex-col items-center justify-center p-6 text-center gap-2">
        <Icons.emoji fill="" />
        <h3 className="text-xl">Profil personnalisable</h3>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Modifiez votre photo de profil, votre description et vos
          paramètres selon vos préférences.
        </p>
      </CardContent>
    </Card>
    <Card>
      <CardContent className="flex flex-col items-center justify-center p-6 text-center gap-2">
        <Icons.mask fill="" />
        <h3 className="text-xl">Mode espion</h3>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Activez le mode espion pour masquer votre statut en ligne...
          Observez sans être vu !
        </p>
      </CardContent>
    </Card>
  </div>
</main> */
}

export default Hero;
