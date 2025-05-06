import { Link } from "react-router-dom";
import Logo from "/images/hero.svg";
import { MarqueeHero } from "@/components/marquee/marquee-hero";
import { useAuthStore } from "@/store/auth.store";

const Hero = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return (
    <main className="flex flex-col justify-around h-auto gap-6 xl:gap-0 xl:h-[calc(100svh-96px)] py-8">
      <section className="space-x-0 xl:space-x-6 px-4 md:px-10 w-full max-w-[1600px] mx-auto ">
        <div className="flex flex-col-reverse xl:flex-row justify-center items-center xl:items-center ">
          <div className="xl:flex-1 flex flex-col space-y-4 md:space-y-8 text-center ">
            <h1 className="flex flex-col text-3xl  md:text-5xl lg:text-6xl 2xl:text-7xl font-bold whitespace-nowrap ">
              <span>Vos conversations,</span>
              <span>à votre manière...</span>
            </h1>
            <p className="lg:text-xl text-gray-600 dark:text-gray-400">
              Faites de nouvelles rencontres et échangez entre amis dans un
              environnement sécurisé.
            </p>
            <Link
              to={isAuthenticated ? "/chateo/chat" : "/chateo/auth"}
              className="bg-primary font-semibold text-base lg:text-xl text-primary-foreground hover:bg-primary/80 h-11 md:h-14 rounded-md flex items-center justify-center mx-auto px-4 lg:px-6"
            >
              Commencer
            </Link>
          </div>

          <img
            src={Logo}
            alt="hero"
            className="xl:flex-1 max-w-[250px] md:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[600px]"
          />
        </div>
      </section>
      <MarqueeHero />
    </main>
  );
};

export default Hero;
