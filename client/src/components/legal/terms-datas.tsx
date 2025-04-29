import { Link } from "react-router-dom";

export const terms = [
  {
    number: 1,
    title: "Présentation du service",
    text: (
      <p>
        Chateo est une plateforme de messagerie instantanée permettant aux
        utilisateurs d'échanger des messages privés et de rejoindre des salons
        de discussion publics ou privés. Notre objectif est de fournir un espace
        sûr et convivial.
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
        L'accès à certaines fonctionnalités peut être soumis à des conditions
        supplémentaires.
      </p>
    ),
  },
  {
    number: 3,
    title: "Modification des CGU",
    text: (
      <p>
        Nous nous réservons le droit de modifier ces CGU à tout moment. Les
        modifications prendront effet dès leur publication sur la plateforme.
        Les utilisateurs seront notifiés des changements importants. La
        poursuite de l'utilisation de Chateo après modification constitue une
        acceptation des nouvelles conditions.
      </p>
    ),
  },
  {
    number: 4,
    title: "Création de compte",
    text: (
      <>
        <p>
          Pour accéder à toutes les fonctionnalités de Chateo, vous devez créer
          un compte en fournissant des informations exactes et à jour. Vous êtes
          responsable de la confidentialité de votre mot de passe et des
          activités effectuées sur votre compte.
        </p>
        <p>
          Lors de la création de votre compte, vous pouvez indiquer votre sexe
          (homme, femme, non-binaire ou ne pas le préciser), ce qui déterminera
          la couleur distinctive associée à votre profil.
        </p>
      </>
    ),
  },
  {
    number: 5,
    title: "Fonctionnalités du service",
    text: (
      <>
        <p>Chateo offre les fonctionnalités suivantes :</p>
        <ul className="list-disc pl-5">
          <li>
            Création et participation à des salons de discussion
            (publics/privés)
          </li>
          <li>Messages privés entre utilisateurs</li>
          <li>
            Appels audio et vidéo (à venir) en direct dans les salons privés et
            conversations privées
          </li>
          <li>
            Réglages audio personnalisables (volumes d'entrée/sortie et test de
            microphone)
          </li>
          <li>Partage d'images (par sélection ou glisser-déposer)</li>
          <li>Système de notifications (temps réel et email)</li>
          <li>Fonctionnalités sociales (recherche et ajout d'amis)</li>
          <li>Options de personnalisation du profil (dark mod)</li>
          <li>Possibilité de bloquer des utilisateurs</li>
          <li>Mode espion</li>
        </ul>
      </>
    ),
  },
  {
    number: 6,
    title: "Mode espion",
    text: (
      <p>
        Chateo propose une fonctionnalité appelée "mode espion" qui permet aux
        utilisateurs de se connecter à la plateforme sans être visibles.
        <br />
        En mode espion, vous pouvez créer/rejoindre des salons de discussion et
        voir les messages échangés, mais vous ne pouvez pas interagir avec les
        autres utilisateurs.
      </p>
    ),
  },
  {
    number: 7,
    title: "Utilisation de la plateforme",
    text: (
      <>
        <p>En utilisant Chateo, vous vous engagez à :</p>
        <ul className="list-disc pl-5">
          <li>Ne pas utiliser Chateo à des fins illégales ou frauduleuses.</li>
          <li>
            Ne pas diffuser des contenus haineux, offensants ou incitant à la
            violence.
          </li>
          <li> Ne pas harceler, menacer ou nuire à d'autres utilisateurs.</li>
          <li> Ne pas usurper l'identité d'un autre utilisateur.</li>
          <li>
            Ne pas tenter de pirater ou contourner les mesures de sécurité de la
            plateforme.
          </li>
          <li>
            Ne pas partager de contenu à caractère pornographique ou
            inapproprié.
          </li>
          <li>
            Ne pas utiliser de programmes automatisés pour interagir avec la
            plateforme.
          </li>
        </ul>
      </>
    ),
  },
  {
    number: 8,
    title: "Modération et sanctions",
    text: (
      <p>
        Nous nous réservons le droit de modérer les contenus publiés sur Chateo
        et de prendre des mesures contre les utilisateurs qui ne respectent pas
        ces CGU. Ces mesures peuvent inclure la suspension temporaire ou
        permanente du compte. Nos modérateurs surveillent les comportements
        suspects.
      </p>
    ),
  },
  {
    number: 9,
    title: "Conséquences du blocage de compte",
    text: (
      <>
        <p>
          En cas de blocage de votre compte, vous pouvez toujours vous connecter
          et discuter avec vos amis mais les fonctionnalités suivantes ne sont
          plus accessibles :
        </p>
        <ul className="list-disc pl-5">
          <li>Participer aux salons de discussion publics ou privés.</li>
          <li>
            Utiliser les fonctionnalités sociales (ajout d'amis, appels, etc.)
          </li>
          <li>Modifier votre profil ou vos paramètres de compte.</li>
        </ul>
      </>
    ),
  },
  {
    number: 10,
    title: "Protection des données",
    text: (
      <>
        <p>
          Nous respectons votre <strong>vie privée</strong> et protégeons vos
          données personnelles conformément au <strong>RGPD</strong>.
        </p>
        <p>
          Vos données sont stockées de manière sécurisée et ne sont pas
          revendues à des tiers.
        </p>
        <p>
          Les messages échangés via le service peuvent être accessibles aux
          modérateurs dans le cadre de leurs fonctions de surveillance et de
          protection des utilisateurs.
        </p>
      </>
    ),
  },
  {
    number: 11,
    title: "Propriété intellectuelle",
    text: (
      <p>
        Tous les éléments de Chateo (logo, design, textes, etc.) sont protégés
        par le droit de la propriété intellectuelle. Vous conservez les droits
        sur les contenus que vous publiez, mais nous accordez une licence non
        exclusive pour les utiliser, les adapter et les afficher dans le cadre
        du fonctionnement de la plateforme.
      </p>
    ),
  },
  {
    number: 12,
    title: "Responsabilité",
    text: (
      <>
        <p>
          Nous ne pouvons être tenus responsables des interruptions de service,
          pertes de données ou dommages indirects liés à l'utilisation de la
          plateforme.
        </p>
        <p>
          Les utilisateurs sont entièrement responsables des contenus qu'ils
          partagent et des interactions qu'ils ont avec d'autres utilisateurs
          sur Chateo.
        </p>
      </>
    ),
  },
  {
    number: 13,
    title: "Résiliation",
    text: (
      <p>
        Vous pouvez supprimer votre compte à tout moment depuis les paramètres
        de votre profil. Nous nous réservons le droit de résilier ou suspendre
        votre accès à Chateo en cas de violation des présentes CGU. Certaines
        données peuvent être conservées conformément à nos obligations légales
        même après la suppression de votre compte.
      </p>
    ),
  },
  {
    number: 14,
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
