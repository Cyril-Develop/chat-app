import { ModeToggle } from "@/components/mode-toggle";
import { Link, useLocation } from "react-router-dom";
import { useUserStore } from "@/store/user.store";
import { Icons } from "@/components/Icons";

const Navbar = () => {
  const isConnected = useUserStore((state) => state.token) ? true : false;
  const logout = useUserStore((state) => state.logout);

  const { pathname } = useLocation();

  const textClasses = "hidden sm:block";

  return (
    <nav className="bg-primary flex items-center justify-between h-24 px-2 dark:bg-primary-foreground sm:px-10">
      <Link to="/">
        <Icons.logo />
      </Link>
      <div className="flex items-center gap-2 sm:gap-6">
        {pathname !== "/" ? (
          <Link to="/" className="link-nav">
            <Icons.home />
            <span className={textClasses}>Accueil</span>
          </Link>
        ) : isConnected ? (
          <>
            <Link to="/messaging" className="link-nav">
              <Icons.chat />
              <span className={textClasses}>Messagerie</span>
            </Link>

            <Link to="/login" className="link-nav" onClick={logout}>
              <Icons.logout />
              <span className={textClasses}>Se déconnecter</span>
            </Link>
          </>
        ) : (
          <Link to="/login" className="link-nav">
            <Icons.login />
            <span className={textClasses}>Se connecter</span>
          </Link>
        )}
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
