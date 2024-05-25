import { ModeToggle } from "@/components/mode-toggle";
import { Link, useLocation } from "react-router-dom";
import { Home, LogIn, User, LogOut } from "lucide-react";
import { useState } from "react";
import Logo from "@/assets/logo.svg";

const Navbar = () => {
  const [connected, setConnected] = useState(true);

  const logout = () => {
    console.log("logout");
    setConnected(false);
  };

  const { pathname } = useLocation();

  const textClasses = "hidden sm:block";

  return (
    <nav className="flex items-center justify-between h-24 px-2 sm:px-10 ">
      <Link to="/" className="h-1/3  sm:h-1/2">
        <img src={Logo} alt="" className="h-full" />
      </Link>
      <div className="flex items-center gap-2 sm:gap-6">
        {pathname !== "/" ? (
          <Link to="/" className="link-nav">
            <Home />
            <span className={textClasses}>Accueil</span>
          </Link>
        ) : connected ? (
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
