import { Link } from "react-router-dom";
import { useUserStore } from "@/store/user.store";
import { Icons } from "@/components/Icons";
import DropDown from "@/components/DropDown";
import ModeToggle from "./mode-toggle";
import { SheetLeft } from "@/components/sheet/sheet-left";
import { SheetRight } from "@/components/sheet/sheet-right";
import useWindowWidth from "@/hooks/window-width";

const Navbar = () => {
  const isConnected = useUserStore((state) => state.token) ? true : false;

  const windowWidth = useWindowWidth();

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
        {windowWidth < 1024 && (
          <>
            <SheetLeft />
            <SheetRight />
          </>
        )}
        {isConnected ? (
          <DropDown />
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
