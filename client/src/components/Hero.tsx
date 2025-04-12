import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Logo from "@/assets/hero.svg";

const Hero = () => {
  return (
    <section className="bg-muted w-full dark:bg-secondary flex flex-col min-h-[calc(100dvh-176px)]  p-4  gap-5 items-center justify-center xl:py-10 xl:flex-row xl:gap-10 2xl:gap-32 2xl:p-20 2xl:py-10 2xl:justify-center">
      <img
        src={Logo}
        alt="hero"
        className="min-w-72 w-2/3 lg:w-1/3 md:w-2/5 sm:w-2/4"
      />
      <Card>
        <CardHeader>
          <h2 className="text-center text-title">
            Connectez-vous, Discutez, et Partagez !
          </h2>
        </CardHeader>
        <span className="w-full border-t" />
        <CardContent>
          <p className="max-w-lg text-center text-paragraph">
            Créez des salons privés ou publics, discutez avec vos amis et
            rejoignez une communauté dynamique et engageante. Notre application
            de chat moderne et sécurisée vous offre une expérience de messagerie
            incomparable.
          </p>
        </CardContent>
        <CardFooter>
          <Button
            size="lg"
            variant="default"
            className="text-button w-auto mx-auto px-3"
          >
            <Link to="chat">Commencer</Link>
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default Hero;
