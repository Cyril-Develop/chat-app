import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { items } from "@/components/marquee/marquee-hero-items";

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
        "relative h-full w-60 sm:w-80 cursor-pointer overflow-hidden rounded-md border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {icon}
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeHero() {
  return (
    <div className="relative w-full flex-row items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:40s]">
        {items.map((item) => (
          <ReviewCard key={item.title} {...item} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-secondary"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-secondary"></div>
    </div>
  );
}
