function Footer() {
  return (
    <footer className="bg-primary text-white p-4 w-full flex flex-col gap-2 justify-center items-center font-extralight h-24 dark:bg-background">
      <a
        href={`${import.meta.env.VITE_REACT_APP_CLIENT_URL}/contact`}
        className="text-white hover:underline underline-offset-4"
      >
        Me contacter
      </a>
      <p>
        &copy; 2025 &nbsp;
        <a
          href="https://cyril-develop.fr"
          target="_blank"
          className="text-white hover:underline underline-offset-4"
        >
          Cyril-Develop
        </a>
        &nbsp;- Tous droits réservés
      </p>
    </footer>
  );
}

export default Footer;
