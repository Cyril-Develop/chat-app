import { ModeToggle } from "@/components/mode-toggle";
import { Link, useLocation } from "react-router-dom";
import { Home, LogIn, User, LogOut } from "lucide-react";
import Logo from "@/assets/logo.svg";
import { useUserStore } from "@/store/user.store";

const Navbar = () => {

  const isConnected = useUserStore((state) => state.token) ? true : false;
  const logout = useUserStore((state) => state.logout);

  const { pathname } = useLocation();

  const textClasses = "hidden sm:block";

  return (
    <nav className="flex items-center justify-between h-24 px-2 sm:px-10 bg-primary">
      <Link to="/" className="h-1/3  sm:h-1/2">
        <img src={Logo} alt="logo - Chat'App" className="h-full" />
      </Link>
      <div className="flex items-center gap-2 sm:gap-6">
        {pathname !== "/" ? (
          <Link to="/" className="link-nav">
            <Home />
            <span className={textClasses}>Accueil</span>
          </Link>
        ) : isConnected ? (
          <>
            <Link to="/dashboard" className="link-nav">
              <User />
              <span className={textClasses}>Tableau de bord</span>
            </Link>

            <Link to="/login" className="link-nav" onClick={logout}>
              <LogOut />
              <span className={textClasses}>Se déconnecter</span>
            </Link>
          </>
        ) : (
          <Link to="/login" className="link-nav">
            <LogIn />
            <span className={textClasses}>Se connecter</span>
          </Link>
        )}
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
