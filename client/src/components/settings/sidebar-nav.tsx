import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { useUserStore } from "@/store/user.store";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
  }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const { pathname } = useLocation();
  const { role } = useUserStore((state) => state);

  const filteredItems =
    role === "ADMIN"
      ? items
      : items.filter((item) => item.title !== "Tableau de bord");

  return (
    <nav
      className={cn(
        "flex flex-wrap gap-2 lg:flex-col lg:space-x-0 lg:space-y-4",
        className
      )}
      {...props}
    >
      {filteredItems.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className={cn(
            buttonVariants({ variant: "outline" }),
            pathname === item.href
              ? "bg-muted hover:bg-muted cursor-default dark:bg-muted-foreground dark:hover:bg-muted-foreground dark:text-primary-foreground"
              : "hover:bg-primary hover:text-primary-foreground dark:hover:bg-primary-foreground dark:hover:text-primary",
            "justify-start text-base"
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
