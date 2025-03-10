import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store/auth.store";
import { Link, useLocation } from "react-router-dom";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
  }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const { pathname } = useLocation();
  const role = useAuthStore((state) => state.user?.role);

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
              ? "bg-muted hover:bg-muted cursor-default dark:bg-secondary border dark:border-popover"
              : "hover:bg-primary hover:text-primary-foreground dark:hover:bg-primary dark:bg-primary-foreground border",
            "justify-start text-base dark:border-popover"
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
