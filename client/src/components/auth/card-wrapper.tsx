import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import AuthHeader from "@/components/auth/auth-header";
import BackButton from "./back-button";

interface CardWrapperProps {
  title: string;
  description: string; 
  backButtonHref: string;
  backButtonLabel: string;
  children: React.ReactNode;
  text: string;
}

const CardWrapper = ({
  title,
  description,
  backButtonHref,
  backButtonLabel,
  children,
  text,
}: CardWrapperProps) => {
  return (
    <Card className="max-w-lg w-full px-6 py-4 h-fit">
      <CardHeader>
        <AuthHeader title={title} description={description}/>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} text={text} />
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
