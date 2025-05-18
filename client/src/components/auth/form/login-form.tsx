import CardWrapper from "@/components/auth/card.tsx/card-wrapper";
import Line from "@/components/auth/line";
import ShowPassord from "@/components/auth/show-password";
import ButtonForm from "@/components/button-form";
import { ForgotPassword } from "@/components/password/forgot-password";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { LoginFormSchema } from "@/schema/main";
import { loginAsGuest, loginByEmail } from "@/services/Auth";
import { useAuthStore } from "@/store/auth.store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [apiError, setApiError] = useState("");
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const { isAuthenticated, setAuthentication } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/chat-app/chat");
    }
  }, [isAuthenticated]);

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginFormSchema),
  });

  const onSubmit = async (values: { email: string; password: string }) => {
    setLoading(true);
    setApiError("");
    try {
      const { isAuthenticated, user } = await loginByEmail({
        email: values.email,
        password: values.password,
      });
      setAuthentication(isAuthenticated, user);
      form.reset();
    } catch (error: any) {
      setApiError(error.message);
    } finally {
      setLoading(false);
    }
  };
  const handleLoginAsGuest = async () => {
    setLoading(true);
    setApiError("");
    try {
      const { isAuthenticated, user } = await loginAsGuest();
      setAuthentication(isAuthenticated, user);
    } catch (error: any) {
      setApiError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = () => {
    form.reset();
    setApiError("");
  };

  return (
    <CardWrapper
      title="Se connecter"
      description="Saisissez les identifiants de votre compte."
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn("space-y-6")}
          noValidate
        >
          <div className="space-y-4  sm:space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn("form-label")}>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="john.doe@gmail.com"
                      className={cn("form-input")}
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="password" className={cn("form-label")}>
                    Mot de passe
                  </FormLabel>
                  <FormControl>
                    <ShowPassord
                      showPassword={showPassword}
                      setShowPassword={setShowPassword}
                      field={field}
                    />
                  </FormControl>
                  <FormDescription>
                    <Button
                      type="button"
                      variant={"linkForm"}
                      className={cn("w-auto link-form text-sm sm:text-md")}
                      onClick={() => setIsForgotPasswordOpen(true)}
                    >
                      Mot de passe oublié ?
                    </Button>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <ButtonForm
            loading={loading}
            disabled={loading}
            defaultValue="Se connecter"
            spinnerValue="Connexion en cours"
          />
          {apiError && <p className="error">{apiError}</p>}
        </form>
      </Form>
      <Line />
      <Button
        size="lg"
        variant="default"
        className="text-button w-full"
        onClick={handleLoginAsGuest}
      >
        Découvrir en tant qu'invité
      </Button>
      {isForgotPasswordOpen && (
        <ForgotPassword
          isOpen={isForgotPasswordOpen}
          setIsOpen={setIsForgotPasswordOpen}
          handleResetPassword={handleResetPassword}
          headerTitle="Mot de passe"
          headerDescription="Saisissez l'adresse mail associée à votre compte pour recevoir un lien de réinitialisation."
        />
      )}
    </CardWrapper>
  );
};

export default LoginForm;
