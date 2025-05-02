import {
  MessageSquareText,
  MessagesSquare,
  Users,
  Phone,
  Bell,
  Image,
  User,
  Shield,
} from "lucide-react";

export const items = [
  {
    title: "Exprimez-vous librement",
    body: `Discuter entre amis, créer des salons privés ou explorer des conversations publiques pour faire de nouvelles rencontres.`,
    icon: <MessagesSquare />,
  },
  {
    title: "Votre profil à votre image",
    body: `Ajoutez une photo, un pseudo et une description pour personnaliser votre profil et montrer qui vous êtes aux autres utilisateurs.`,
    icon: <User />,
  },
  {
    title: "Salons de discussion",
    body: `Créez et participez à des salons publics ou privés et discuter
        autour de sujets qui vous passionnent.`,
    icon: <Users />,
  },
  {
    title: "Messages privés",
    body: `Échangez des messages en temps réel avec vos amis dans un espace privé
        et sécurisé.`,
    icon: <MessageSquareText />,
  },

  {
    title: "Partage d'images",
    body: `Partagez facilement des images par sélection ou simple
        glisser-déposer dans vos conversations.`,
    icon: <Image />,
  },
  {
    title: "Appels audio et vidéo",
    body: `Lancez des appels audio et bientôt vidéo avec vos
        contacts et dans les salons privés.`,
    icon: <Phone />,
  },
  {
    title: "Notifications",
    body: `Restez informé avec des notifications en temps réel et par email
        pour ne jamais rien manquer.`,
    icon: <Bell />,
  },
  {
    title: "Contrôle et sécurité",
    body: `Bloquez les utilisateurs indésirables et naviguez discrètement
        avec le mode espion pour une expérience sur mesure.`,
    icon: <Shield />,
  },
];
