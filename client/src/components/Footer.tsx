import { Link } from "react-router-dom";
import { Icons } from "./Icons";
import { Separator } from "@/components/ui/separator";

function Footer() {
  return (
    <footer className="bg-primary text-white w-full p-4 md:p-10 flex flex-col gap-4 xl:gap-12 items-center dark:bg-background">
      <div className="flex flex-col xl:flex-row xl:items-center gap-3 xl:gap-20">
        <div className="flex flex-col sm:space-y-1">
          <div className="flex items-center gap-2 ">
            <Icons.logo width="20" height="20" />
            Chat'App
          </div>
          <p className="dark:text-muted-foreground">
            Une application de messagerie moderne qui connecte les personnes.
          </p>
        </div>

        <div className="flex flex-col justify-start md:flex-row gap-3 md:gap-20">
          <div className="flex flex-col sm:space-y-1">
            <h2>Support</h2>
            <ul>
              <li>
                <Link
                  to="/chat-app/contact"
                  className="hover:underline underline-offset-4 dark:text-muted-foreground text-sm sm:text-base"
                >
                  Contactez nous
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:space-y-1">
            <h2>Légal</h2>
            <ul>
              <li>
                <Link
                  to="/chat-app/terms"
                  className="hover:underline underline-offset-4 dark:text-muted-foreground text-sm sm:text-base"
                >
                  Conditions générales d'utilisation
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Separator />
      <p className="text-sm">
        &copy; 2025 &nbsp;
        <a
          href="https://cyril-develop.fr"
          target="_blank"
          className="hover:underline underline-offset-4"
        >
          Cyril-Develop
        </a>
        &nbsp;- Tous droits réservés
      </p>
    </footer>
  );
}

export default Footer;
