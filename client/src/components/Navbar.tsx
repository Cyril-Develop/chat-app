import { ModeToggle } from "@/components/mode-toggle";
import { Link, useLocation } from "react-router-dom";
import { Home, LogIn, User, LogOut } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [connected, setConnected] = useState(true);

  const logout = () => {
    console.log("logout");
    setConnected(false);
  };

  const { pathname } = useLocation();

  const textClasses = "hidden sm:block";

  return (
    <nav className="flex items-center justify-between h-20 p-2 border-b sm:p-10 ">
      <h1 className="font-black italic text-xl">Chat'App</h1>
      <div className="flex items-center gap-0 sm:gap-6">
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
