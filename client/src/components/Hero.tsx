import Img from "@/assets/hero.svg";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-primary dark:bg-secondary p-10 pt-10 gap-12 flex items-center justify-center 2xl:gap-32 2xl:p-20 2xl:pt-10">
      <img src={Img} alt="Illustration - unDraw"/>
      <Card>
        <CardHeader>
          <h1 className="text-center text-2xl font-semibold">
            Connectez-vous, Discutez, et Partagez !
          </h1>
        </CardHeader>
        <CardContent>
          <p className="max-w-lg text-center text-lg">
            Créez des salons privés ou publics, discutez avec vos amis et
            rejoignez une communauté dynamique et engageante. Notre application
            de chat moderne et sécurisée vous offre une expérience de messagerie
            incomparable.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="mx-auto text-lg" size={"lg"} >
            <Link to="/dashboard">
              Commencer
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default Hero;
