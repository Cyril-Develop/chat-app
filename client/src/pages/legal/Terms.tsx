import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

// Composant pour afficher le numéro
const NumberBox = ({ number }: { number: number }) => {
  return (
    <span className="inline-flex items-center justify-center w-8 h-8 text-white font-bold bg-primary rounded-md">
      {number}
    </span>
  );
};

export default function Terms() {
  return (
    <div className="p-4 md:p-10 bg-muted dark:bg-secondary">
      <Card>
        <CardHeader className={cn("mb-4")}>
          <h1 className="text-title font-semibold text-center">
            Conditions générales d'utilisation
          </h1>
          <p className="text-muted-foreground text-md text-center">
            📅 Dernière mise à jour : 30 mars 2025
          </p>
        </CardHeader>

        <CardContent className="space-y-8 md:space-y-12">
          <section className="flex flex-col gap-2">
            <h2 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
              <NumberBox number={1} /> Présentation du service
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Chateo est une plateforme de messagerie instantanée permettant aux
              utilisateurs d'échanger des messages privés et de rejoindre des
              salons de discussion publics ou privés. Notre objectif est de
              fournir un espace sûr et convivial.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
              <NumberBox number={2} /> Acceptation des CGU
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              L'utilisation de Chateo implique l'acceptation{" "}
              <strong>sans réserve</strong> des présentes CGU. Si vous n'êtes
              pas d'accord avec ces conditions, veuillez ne pas utiliser nos
              services.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
              <NumberBox number={3} /> Création de compte
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Pour accéder à toutes les fonctionnalités de Chateo, vous devez
              créer un compte en fournissant des informations exactes et à jour.
              Vous êtes responsable de la confidentialité de votre mot de passe
              et des activités effectuées sur votre compte.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
              <NumberBox number={4} /> Utilisation de la plateforme
            </h2>
            <ul className="list-decimal list-inside text-base sm:text-lg text-muted-foreground">
              <li>
                Ne pas utiliser Chateo à des fins illégales ou frauduleuses.
              </li>
              <li>
                Ne pas diffuser des contenus haineux, offensants ou incitant à
                la violence.
              </li>
              <li>
                Ne pas harceler, menacer ou nuire à d'autres utilisateurs.
              </li>
              <li>Ne pas usurper l'identité d'un autre utilisateur.</li>
              <li>Ne pas tenter de pirater la plateforme.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
              <NumberBox number={5} /> Protection des données personnelles
            </h2>
            <div className="text-base sm:text-lg text-muted-foreground">
              <p>
                Nous respectons votre <strong>vie privée</strong> et protégeons
                vos données conformément au <strong>RGPD</strong>.
              </p>
              <p>
                📌 Vos données sont stockées de manière sécurisée et ne sont pas
                revendues.
              </p>
            </div>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
              <NumberBox number={6} /> Responsabilité
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Nous ne pouvons être tenus responsables des interruptions de
              service, pertes de données ou dommages indirects liés à
              l'utilisation de la plateforme.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
              <NumberBox number={7} /> Modification des CGU
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Nous nous réservons le droit de modifier ces CGU à tout moment.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
              <NumberBox number={8} /> Contact
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Pour toute question, suggestion ou réclamation,{" "}
              <Link
                to={`${import.meta.env.VITE_REACT_APP_CLIENT_URL}/contact`}
                className="text-primary no-underline rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring underline-offset-4 hover:underline focus:underline font-semibold"
              >
                contactez-nous
              </Link>
              .
            </p>
          </section>
        </CardContent>

        <CardFooter className="flex flex-col justify-center mt-4 text-lg">
          <p className="text-center text-base sm:text-lg">
            📌 En utilisant Chateo, vous acceptez pleinement ces conditions
            générales d'utilisation.
          </p>

          <Link
            to="/chateo"
            className="link-form font-semibold text-base sm:text-lg"
          >
            Retourner à l'accueil
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
