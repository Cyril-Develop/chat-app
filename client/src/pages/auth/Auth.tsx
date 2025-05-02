import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import LoginForm from "@/components/auth/form/login-form";
import RegisterForm from "@/components/auth/form/register-form";

const Auth = () => {
  return (
    <div className="form">
      <Tabs defaultValue="login" className="w-[500px] max-w-lg">
        <TabsList className="grid w-full grid-cols-2 bg-card dark:bg-primary-foreground h-auto">
          <TabsTrigger
            value="login"
            className={cn("data-[state=active]:bg-muted text-sm md:text-base text-gray-600 dark:text-gray-400")}
          >
            Se connecter
          </TabsTrigger>
          <TabsTrigger
            value="register"
            className={cn("data-[state=active]:bg-muted text-sm md:text-base text-gray-600 dark:text-gray-400")}
          >
            Créer un compte
          </TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <LoginForm />
        </TabsContent>
        <TabsContent value="register">
          <RegisterForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Auth;
