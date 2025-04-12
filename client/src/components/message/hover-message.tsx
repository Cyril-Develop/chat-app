import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";
import { sexColor } from "@/utils/sex-color";
import { Icons } from "../Icons";

interface HoverMessageProps {
  trigger: number;
  users: {
    username: string;
    sex: "MALE" | "FEMALE" | "NON_BINARY" | "UNDISCLOSED";
  }[];
}

export function HoverMessage({ trigger, users }: HoverMessageProps) {
  // Si la liste des utilisateurs est vide, on ne retourne pas le composant
  if (users?.length === 0) return null;

  const totalLikes = users.length;
  const recentLikers = users.slice(-3);

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
        <span className="flex flex-wrap items-center gap-1">
          {totalLikes > 3 ? (
            <>
              <span className="mr-1">
                Plus de {totalLikes} personnes ont liké ce message, dont
              </span>
              {recentLikers.map((user, index) => (
                <span
                  key={user.username + index}
                  className={cn(sexColor[user.sex])}
                >
                  {user.username}
                  {index < recentLikers.length - 1 && ","}
                </span>
              ))}
            </>
          ) : (
            <>
              {recentLikers.map((user, index) => (
                <span
                  key={user.username + index}
                  className={cn(sexColor[user.sex])}
                >
                  {user.username}
                  {index < recentLikers.length - 1 && ","}
                </span>
              ))}
              <span className="ml-1">
                {totalLikes > 1 ? "ont" : "a"} liké ce message
              </span>
            </>
          )}
          <span className="ml-1">
            <Icons.like fill="#3570D1" width={16} height={16} />
          </span>
        </span>
      </HoverCardContent>
    </HoverCard>
  );
}
