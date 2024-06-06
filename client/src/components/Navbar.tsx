import { Link, useLocation } from "react-router-dom";
import { useUserStore } from "@/store/user.store";
import { Icons } from "@/components/Icons";
import DropDown from "@/components/DropDown";
import ModeToggle from "./mode-toggle";

const Navbar = () => {
  const isConnected = useUserStore((state) => state.user) ? true : false;
  const { pathname } = useLocation();

  return (
    <nav className="bg-primary flex items-center justify-between gap-4 h-24 px-2 dark:bg-primary-foreground md:px-10">
      <Link
        to="/"
        title="Accueil"
        className="h-1/2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md ring-offset-background"
      >
        <Icons.logo />
      </Link>
      <div className="flex items-center gap-2 md:gap-5">
        {pathname !== "/" && (
          <Link to="/" className="link-nav">
            <Icons.home />
            <span className="hidden-text">Accueil</span>
          </Link>
        )}

        {isConnected ? (
          <>
           <Link to="/chat" className="link-nav" title="Messagerie">
           <Icons.chat />
           <span className="hidden-text">Messagerie</span>
         </Link>
          <DropDown /></>
        ) : (
          <Link to="/login" className="link-nav" title="Se connecter">
            <Icons.login />
            <span className="hidden-text">Se connecter</span>
          </Link>
        )}
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
