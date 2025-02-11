import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useGetUser from "@/hooks/get-user";
import { getUserId } from "@/utils/get-userId";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
  }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const { pathname } = useLocation();
  const userId = getUserId();
  const { data: currentUser } = useGetUser(userId);
  const userRole = currentUser?.role;

  const filteredItems =
    userRole === "ADMIN"
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
