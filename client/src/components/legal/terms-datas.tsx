import { Link } from "react-router-dom";

export const terms = [
  {
    number: 1,
    title: "Présentation du service",
    text: (
      <p>
        Chateo est une plateforme de messagerie instantanée permettant aux
        utilisateurs d'échanger des messages privés et de rejoindre des salons
        de discussion publics ou privés. <br /> Notre objectif est de fournir un
        espace sûr et convivial.
      </p>
    ),
  },
  {
    number: 2,
    title: "Acceptation des CGU",
    text: (
      <p>
        L'utilisation de Chateo implique l'acceptation{" "}
        <strong>sans réserve</strong> des présentes CGU. <br /> Si vous n'êtes
        pas d'accord avec ces conditions, veuillez ne pas utiliser nos services.
      </p>
    ),
  },
  {
    number: 3,
    title: "Modification des CGU",
    text: (
      <p>Nous nous réservons le droit de modifier ces CGU à tout moment.</p>
    ),
  },
  {
    number: 4,
    title: "Création de compte",
    text: (
      <p>
        Pour accéder à toutes les fonctionnalités de Chateo, vous devez créer un
        compte en fournissant des informations exactes et à jour. <br /> Vous
        êtes responsable de la confidentialité de votre mot de passe et des
        activités effectuées sur votre compte.
      </p>
    ),
  },

  {
    number: 5,
    title: "Utilisation de la plateforme",
    text: (
      <ul>
        <li>🚫 Ne pas utiliser Chateo à des fins illégales ou frauduleuses.</li>
        <li>
          🚫 Ne pas diffuser des contenus haineux, offensants ou incitant à la
          violence.
        </li>
        <li>🚫 Ne pas harceler, menacer ou nuire à d'autres utilisateurs.</li>
        <li>🚫 Ne pas usurper l'identité d'un autre utilisateur.</li>
        <li>🚫 Ne pas tenter de pirater la plateforme.</li>
      </ul>
    ),
  },

  {
    number: 6,
    title: "Protection des données",
    text: (
      <>
        <p>
          Nous respectons votre <strong>vie privée</strong> et protégeons vos
          personnelles données conformément au <strong>RGPD</strong>.
        </p>
        <p>
          Vos données sont stockées de manière sécurisée et ne sont pas
          revendues.
        </p>
      </>
    ),
  },
  {
    number: 7,
    title: "Responsabilité",
    text: (
      <p>
        Nous ne pouvons être tenus responsables des interruptions de service,
        pertes de données ou dommages indirects liés à l'utilisation de la
        plateforme.
      </p>
    ),
  },
  {
    number: 8,
    title: "Contact",
    text: (
      <p>
        Pour toute question, suggestion ou réclamation,{" "}
        <Link
          to={`${import.meta.env.VITE_REACT_APP_CLIENT_URL}/contact`}
          className="text-primary no-underline rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring underline-offset-4 hover:underline focus:underline font-semibold"
        >
          contactez-nous
        </Link>
        .
      </p>
    ),
  },
];
