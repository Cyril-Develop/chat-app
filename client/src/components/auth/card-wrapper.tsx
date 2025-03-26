import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import AuthHeader from "@/components/auth/auth-header";
import BackButton from "@/components/auth/back-button";
import { CardWrapperProps } from "@/types/auth";
import { cn } from "@/lib/utils";

const CardWrapper = ({
  title,
  description,
  backButtonHref,
  backButtonLabel,
  children,
  text,
}: CardWrapperProps) => {
  return (
    <Card className={cn("max-w-lg w-full h-fit p-2 sm:p-4")}>
      <CardHeader>
        <AuthHeader title={title} description={description} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {backButtonHref && backButtonLabel && text && (
        <CardFooter>
          <BackButton
            label={backButtonLabel}
            href={backButtonHref}
            text={text}
          />
        </CardFooter>
      )}
    </Card>
  );
};

export default CardWrapper;
