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
  backButtonHref: string;
  backButtonLabel: string;
  children: React.ReactNode;
  text: string;
}

const CardWrapper = ({
  title,
  backButtonHref,
  backButtonLabel,
  children,
  text,
}: CardWrapperProps) => {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <AuthHeader title={title} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} text={text} />
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
