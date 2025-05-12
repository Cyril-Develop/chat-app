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
    body: `Échangez entre amis, créez des salons privés ou explorez des discussions publiques pour faire de nouvelles rencontres.`,
    icon: <MessagesSquare />,
  },
  {
    title: "Votre profil à votre image",
    body: `Ajoutez une photo, un pseudo et une description pour personnaliser votre profil et montrer qui vous êtes.`,
    icon: <User />,
  },
  {
    title: "Salons de discussion",
    body: `Créez et participez à des salons publics ou privés et discutez autour de sujets qui vous passionnent.`,
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
    body: `Lancez des appels audio — et bientôt vidéo — avec vos contacts ou dans les salons privés.`,
    icon: <Phone />,
  },
  {
    title: "Notifications",
    body: `Recevez des notifications en temps réel, par e-mail ou hors ligne.`,
    icon: <Bell />,
  },
  {
    title: "Contrôle et sécurité",
    body: `Bloquez les utilisateurs indésirables et naviguez discrètement grâce au mode espion.`,
    icon: <Shield />,
  },
];
