import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";
import { Icons } from "../Icons";

interface HoverMessageProps {
  trigger: number;
  users: string[];
}

export function HoverMessage({ trigger, users }: HoverMessageProps) {
  const totalLikes = users.length;

  // Récupérer les 3 derniers utilisateurs qui ont liké
  const recentLikers = users.slice(-3).join(", ");

  // Définir le texte à afficher
  const likeText =
    totalLikes > 3
      ? `Plus de ${totalLikes} personnes ont liké ce message, dont ${recentLikers}`
      : `${recentLikers} ${totalLikes > 1 ? "ont" : "a"} liké ce message`;

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className="leading-none">{trigger}</span>
      </HoverCardTrigger>
      <HoverCardContent
        className={cn(
          "max-w-60 max-h-40 overflow-y-auto scrollbar-webkit scrollbar-firefox text-additional-info break-words whitespace-normal"
        )}
      >
        <span className="flex flex-wrap items-center">
          {likeText} :{" "}
          <span className="ml-1">
            <Icons.like fill="#3570D1" width={16} height={16} />
          </span>
        </span>
      </HoverCardContent>
    </HoverCard>
  );
}
