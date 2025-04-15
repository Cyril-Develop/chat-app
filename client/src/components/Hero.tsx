// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
// import Logo from "@/assets/hero.svg";
// import { Icons } from "@/components/Icons";

const Hero = () => {
  return (
    <section className="bg-muted dark:bg-secondary flex flex-col gap-8 items-center justify-center w-full">
      <header className="flex items-center space-x-6 p-4 md:p-10 min-h-[calc(100dvh-100px)]">
        <div className="flex-1 flex flex-col space-y-8 max-w-4xl text-center">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold">
            Vos conversations, à votre manière
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Créez des espaces de discussion personnalisés, échangez en temps
            réel et construisez votre communauté dans un environnement sécurisé.
          </p>

          <Link
            to="chat"
            className="bg-primary font-semibold text-lg text-primary-foreground hover:bg-primary/80 h-14 rounded-md flex items-center justify-center mx-auto px-6"
          >
            S'inscrire gratuitement
          </Link>
        </div>
        {/* 
        <img
          src={Logo}
          alt="hero"
          className="min-w-72 w-2/3 lg:w-1/2 md:w-2/5 sm:w-2/4"
        /> */}
      </header>

      {/* <main className="bg-[#6e6e6e55] flex flex-col items-center space-y-8 p-6 sm:p-12 w-full">
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
      </main> */}
    </section>
  );
};

export default Hero;
