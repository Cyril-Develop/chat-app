import { Button } from "@/components/ui/button";
import Google from "@/assets/google.svg";
import {
  Form,
  FormControl,
  FormLabel,
  FormItem,
  FormMessage,
  FormField,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { LoginFormSchema } from "@/schema/main";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGoogleLogin } from "@react-oauth/google";
import Line from "@/components/auth/line";
import CardWrapper from "./card-wrapper";
import ShowPassord from "@/components/auth/show-password";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    defaultValues: {
      lastname: "",
      firstname: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginFormSchema),
  });

  const onSubmit = () => {
    setLoading(true);
    console.log("submit");
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
          className="space-y-8"
          noValidate
        >
          <div className="space-y-8">
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
              {loading ? "Connexion en cours..." : "Se connecter"}
            </Button>

            <Line />

            <Button
              type="button"
              className="w-full flex gap-2 text-lg"
              variant="secondary"
              size={"lg"}
              onClick={() => googleLogin()}
            >
              <img src={Google} alt="icon - google" />
              Google
            </Button>
          </div>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default LoginForm;
