import { Button } from "@/components/ui/button";
import ButtonForm from "@/components/button-form";
import {
  Form,
  FormControl,
  FormLabel,
  FormItem,
  FormMessage,
  FormField,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { LoginFormSchema } from "@/schema/main";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGoogleLogin } from "@react-oauth/google";
import Line from "@/components/auth/line";
import CardWrapper from "./card-wrapper";
import ShowPassord from "@/components/auth/show-password";
import { loginByEmail } from "@/services/Auth";
import { useUserStore } from "@/store/user.store";
import { useNavigate } from "react-router-dom";
import { Icons } from "@/components/Icons";
import { loginAsGuest } from "@/services/Auth";
import { ForgotPassword } from "@/components/password/forgot-password";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [apiError, setApiError] = useState("");

  const setToken = useUserStore((state) => state.setToken);
  const setRole = useUserStore((state) => state.setRole);
  const { token } = useUserStore((state) => state);

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/chateo/chat");
    }
  }, [token]);

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
      const { token, role } = await loginByEmail({ email, password });
      setToken(token);
      setRole(role);
      form.reset();
    } catch (error: any) {
      setApiError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  const handleLoginAsGuest = async () => {
    try {
      const { token, role } = await loginAsGuest();
      setToken(token);
      setRole(role);
    } catch (error: any) {
      setApiError(error.message);
    }
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
        className="block mx-auto text-lg my-4 w-full"
        onClick={handleLoginAsGuest}
      >
        Découvrir en tant qu'invité
      </Button>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4  sm:space-y-8"
          noValidate
        >
          <div className="space-y-4  sm:space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="john.doe@gmail.com"
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
                  <FormLabel htmlFor="password">Mot de passe</FormLabel>
                  <FormControl>
                    <ShowPassord
                      showPassword={showPassword}
                      setShowPassword={setShowPassword}
                      field={field}
                    />
                  </FormControl>
                  <FormDescription>
                    <ForgotPassword
                      btnTrigger="Mot de passe oublié ?"
                      headerTitle="Récupération de mot de passe"
                      headerDescription="Saisissez l'adresse mail associée à votre compte pour recevoir un
            lien de réinitialisation de votre mot de passe."
                    />
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-4">
            <ButtonForm
              loading={loading}
              defaultValue="Se connecter"
              spinnerValue="Connexion"
            />

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
          </div>
          {apiError && <p className="error">{apiError}</p>}
        </form>
      </Form>
    </CardWrapper>
  );
};

export default LoginForm;
