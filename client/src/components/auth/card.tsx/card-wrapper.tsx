import { Card, CardContent, CardHeader } from "@/components/ui/card";
import AuthHeader from "@/components/auth/card.tsx/auth-header";
import { CardWrapperProps } from "@/types/auth";
import { cn } from "@/lib/utils";

const CardWrapper = ({ title, description, children }: CardWrapperProps) => {
  return (
    <Card className={cn("h-fit p-2 sm:p-4")}>
      <CardHeader>
        <AuthHeader title={title} description={description} />
      </CardHeader>
      <CardContent className={cn("pt-0 pb-4")}>{children}</CardContent>
    </Card>
  );
};

export default CardWrapper;
