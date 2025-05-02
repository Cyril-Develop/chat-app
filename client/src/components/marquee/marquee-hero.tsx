import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import {
  MessageSquareText,
  MessagesSquare,
  Users,
  Phone,
  Bell,
  Image,
  Shield,
} from "lucide-react";

const reviews = [
  {
    title: "Fonctionnalités complètes",
    body: `Chateo offre tout ce dont vous avez besoin pour communiquer de
      manière efficace et agréable avec vos proches et communautés.`,
    icon: <MessagesSquare />,
  },
  {
    title: "Salons de discussion",
    body: `Créez et participez à des salons publics ou privés pour discuter
        autour de sujets qui vous passionnent.`,
    icon: <Users />,
  },
  {
    title: "Messages privés",
    body: `Échangez des messages directs avec vos amis dans un espace privé
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
    body: `Lancez des appels audio instantanés et bientôt vidéo avec vos
        contacts et dans les salons privés.`,
    icon: <Phone />,
  },
  {
    title: "Notifications",
    body: `Restez informé avec des notifications en temps réel et par email
        pour ne jamais manquer un message important.`,
    icon: <Bell />,
  },
  {
    title: "Contrôle et sécurité",
    body: `Bloquez les utilisateurs indésirables et naviguez discrètement
        avec le mode espion pour une expérience sur mesure.`,
    icon: <Shield />,
  },
];

const ReviewCard = ({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full sm:w-80 cursor-pointer overflow-hidden rounded-md border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {icon}
        <p className="text-sm font-medium dark:text-white/40">{title}</p>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeHero() {
  return (
    <div className="relative w-full flex-row items-center justify-center">
      <Marquee pauseOnHover className="[--duration:40s]">
        {reviews.map((review) => (
          <ReviewCard key={review.title} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-secondary"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-secondary"></div>
    </div>
  );
}
