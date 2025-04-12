import CardWrapper from "@/components/auth/card-wrapper";
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
      navigate("/chateo/chat");
    }
  }, [isAuthenticated]);

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginFormSchema),
  });

  const onSubmit = async () => {
    setLoading(true);
    setApiError("");
    try {
      const { email, password } = form.getValues();
      const { isAuthenticated, user } = await loginByEmail({ email, password });
      setAuthentication(isAuthenticated, user);
      form.reset();
    } catch (error: any) {
      setApiError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // const googleLogin = useGoogleLogin({
  //   onSuccess: (tokenResponse) => console.log(tokenResponse),
  // });

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
      backButtonHref="/chateo/register"
      backButtonLabel="S'enregistrer"
      text="Vous n'avez pas encore de compte ?"
    >
      <Line />
      <Button
        className="block mx-auto text-button w-full my-4 "
        onClick={handleLoginAsGuest}
      >
        Découvrir en tant qu'invité
      </Button>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn("space-y-4  sm:space-y-8")}
          noValidate
        >
          <div className="space-y-4  sm:space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn("text-base")}>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="john.doe@gmail.com"
                      className={cn("text-base")}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="password" className={cn("text-base")}>
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
          {/* <div className="flex flex-col gap-4">

            <Line />

            <Button
              type="button"
              className="w-full text-lg"
              variant="secondary"
              size={"lg"}
              onClick={() => googleLogin()}
            >
              <Icons.google className="mr-2 h-4 w-4" />
              Continuer avec Google
            </Button>
          </div> */}
          {apiError && <p className="error">{apiError}</p>}
        </form>
      </Form>
      {isForgotPasswordOpen && (
        <ForgotPassword
          isOpen={isForgotPasswordOpen}
          setIsOpen={setIsForgotPasswordOpen}
          handleResetPassword={handleResetPassword}
          headerTitle="Modifier votre mot de passe"
          headerDescription="Saisissez l'adresse mail associée à votre compte pour recevoir un lien de réinitialisation."
        />
      )}
    </CardWrapper>
  );
};

export default LoginForm;
