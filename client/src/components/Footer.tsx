import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-primary text-white p-4 w-full flex flex-col gap-2 justify-center items-center font-extralight h-20 dark:bg-background">
      <Link
        to={`${import.meta.env.VITE_REACT_APP_CLIENT_URL}/contact`}
        className="text-sm sm:text-base hover:underline underline-offset-4"
      >
        Nous contacter
      </Link>
      <p className="text-xs sm:text-sm">
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
