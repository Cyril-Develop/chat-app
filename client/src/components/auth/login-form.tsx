import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormLabel,
  FormItem,
  FormMessage,
  FormField,
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

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [apiError, setApiError] = useState("");

  const setUser = useUserStore((state) => state.useSetUser);
  const user = useUserStore((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/messaging");
    }
  }, [user]);

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
      const user = await loginByEmail({ email, password });
      setUser(user);
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

  return (
    <CardWrapper
      title="Se connecter"
      description="Saisissez les identifiants de votre compte."
      backButtonHref="/register"
      backButtonLabel="S'enregistrer"
      text="Vous n'avez pas encore de compte ?"
    >
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
                  <FormLabel>Mot de passe</FormLabel>
                  <FormControl>
                    <ShowPassord
                      showPassword={showPassword}
                      setShowPassword={setShowPassword}
                      field={field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-4">
            <Button
              type="submit"
              className="w-full text-lg"
              disabled={loading}
              size={"lg"}
            >
              {loading ? (
                <p className="flex items-center gap-1">
                  Connexion <Icons.spinner className="animate-spin" />{" "}
                </p>
              ) : (
                "Se connecter"
              )}
            </Button>

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
