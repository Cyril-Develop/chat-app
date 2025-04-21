import { Icons } from "@/components/Icons";
import DropDown from "@/components/navbar/DropDown";
import { SheetLeft } from "@/components/sheet/sheet-left";
import { SheetRight } from "@/components/sheet/sheet-right";
import useWindowWidth from "@/hooks/window-width";
import { useAuthStore } from "@/store/auth.store";
import { Link } from "react-router-dom";
import { PopoverNotification } from "@/components/sidebar/notification/popover-notification";

const Navbar = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const windowWidth = useWindowWidth();
  const isMobileView = windowWidth < 1024;

  return (
    <nav className="bg-primary flex items-center justify-between h-24 px-2 dark:bg-background md:px-10">
      <h1 className="font-bold text-3xl lg:text-3xl text-primary-foreground dark:text-secondary-foreground ">
        <Link
          to={isAuthenticated ? "/chateo/chat" : "/chateo/"}
          title={isAuthenticated ? "Messagerie" : "Accueil"}
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md ring-offset-background p-1 md-p2"
        >
          <Icons.logo width="26" height="26" />
          Chateo
        </Link>
      </h1>

      <div className="flex items-center gap-3 md:gap-5">
        {isMobileView && isAuthenticated && (
          <>
            <SheetLeft />
            <SheetRight />
          </>
        )}
        {isAuthenticated ? (
          <>
            <PopoverNotification />
            <DropDown />
          </>
        ) : (
          <Link to="chateo/login" className="link-nav" title="Se connecter">
            <Icons.login />
            <span className="hidden-text">Se connecter</span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
