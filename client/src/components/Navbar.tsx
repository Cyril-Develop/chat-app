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
    <nav className="flex items-center justify-between h-20 p-2 text-white bg-black dark:bg-white dark:text-black sm:p-10 ">
      <h1 className="font-black italic text-xl">ChatApp</h1>
      <div className="flex items-center gap-2">
        <ModeToggle />
        {pathname !== "/" ? (
          <Button variant={"ghost"} className=" text-lg">
            <Link to="/" className="flex gap-2">
              <Home />
            </Link>
          </Button>
        ) : connected ? (
          <>
            <Button variant={"ghost"} title="Tableau de bord">
              <Link to="/dashboard" className="text-xl">
                <User />
              </Link>
            </Button>
            <Button variant={"ghost"} onClick={logout} title="Déconnexion">
              <LogOut />
            </Button>
          </>
        ) : (
          <Button variant={"ghost"} title="Connexion">
            <Link to="/login" className="text-xl">
              <LogIn />
            </Link>
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
