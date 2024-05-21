import CardWrapper from "@/components/auth/card-wrapper";
import { RegisterFormSchema } from "@/schema/main";
import { useForm } from "react-hook-form";
import Google from "@/assets/google.svg";
import { registerByEmail } from "@/services/Auth";
import AlertComp from "@/components/alert-comp";
import { Check } from "lucide-react";

import {
  Form,
  FormControl,
  FormLabel,
  FormItem,
  FormMessage,
  FormField,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [apiError, setApiError] = useState("");

  const form = useForm({
    defaultValues: {
      lastname: "",
      firstname: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(RegisterFormSchema),
  });

  const onSubmit = async () => {
    setLoading(true);
    setApiError("");
    try {
      const { lastname, firstname, email, password } = form.getValues();
      await registerByEmail({ lastname, firstname, email, password });

      setSuccess(true);
      form.reset();
    } catch (error: any) {
      if (error.message.includes("Email déjà utilisé")) {
        form.setError("email", {
          type: "manual",
          message: error.message,
        });
      } else {
        setApiError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {success && (
        <AlertComp
          variant="success"
          logo={<Check />}
          description="Compte créé avec succès !"
          duration={2000}
        />
      )}
      <CardWrapper
        title="Créer un compte"
        backButtonHref="/login"
        backButtonLabel="Se connecter"
        text="Déjà un compte ?"
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <div className="flex flex-col gap-4 sm:flex-row ">
                <FormField
                  control={form.control}
                  name="lastname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom</FormLabel>
                      <FormControl>
                        <Input {...field} type="text" placeholder="Doe" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="firstname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Prénom</FormLabel>
                      <FormControl>
                        <Input {...field} type="text" placeholder="John" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
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
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Chargement..." : "Avec une adresse email"}
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Ou
                </span>
              </div>
            </div>

            <div>
              <Button
                type="button"
                className="w-full flex gap-2"
                variant="secondary"
                onClick={() => console.log("google")}
              >
                <img src={Google} alt="icon - google" />
                Google
              </Button>
            </div>
            {apiError && (
              <p className="text-rose-500 text-center">{apiError}</p>
            )}
          </form>
        </Form>
      </CardWrapper>
    </>
  );
};

export default RegisterForm;
