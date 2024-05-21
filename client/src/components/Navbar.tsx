import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
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

  return (
    <nav className="flex items-center justify-between h-20 p-2 text-white bg-primary  dark:text-black sm:p-10 ">
      <h1 className="font-black italic text-xl">Chat'App</h1>
      <div className="flex items-center gap-0 sm:gap-2">
        {pathname !== "/" ? (
          <Button variant={"ghost"} className=" text-lg">
            <Link to="/" className="flex gap-2 items-center">
              <Home />
              <span className="hidden sm:block">Accueil</span>
            </Link>
          </Button>
        ) : connected ? (
          <>
            <Button variant={"ghost"} title="Tableau de bord">
              <Link to="/dashboard" className="text-xl flex gap-2 items-center">
                <User />
                <span className="hidden sm:block">Tableau de bord</span>
              </Link>
            </Button>
            <Button
              variant={"ghost"}
              onClick={logout}
              title="Déconnexion"
              className="text-xl flex gap-2 items-center"
            >
              <LogOut />
              <span className="hidden sm:block">Se déconnecter</span>
            </Button>
          </>
        ) : (
          <Button variant={"ghost"} title="Connexion">
            <Link to="/login" className="text-xl flex gap-2 items-center">
              <LogIn />
              <span className="hidden sm:block">Se connecter</span>
            </Link>
          </Button>
        )}
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
