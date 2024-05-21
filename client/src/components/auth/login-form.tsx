import { Button } from "@/components/ui/button";
import Google from "@/assets/google.svg";
import { jwtDecode } from "jwt-decode";
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
import { useGoogleLogin } from '@react-oauth/google';
import CardWrapper from "./card-wrapper";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);

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
    onSuccess: tokenResponse => console.log(tokenResponse)
  });

  return (
    <CardWrapper
      title="Se connecter"
      backButtonHref="/register"
      backButtonLabel="S'enregistrer"
      text="Pas encore de compte ?"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
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
                    <Input {...field} type="password" placeholder="******" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full opacity-1" disabled={loading}>
            {loading ? "Chargement..." : "Avec une adresse email"}
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground font-semibold">
                OU
              </span>
            </div>
          </div>

          <div>
            <Button
              type="button"
              className="w-full flex gap-2"
              variant="secondary"
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
