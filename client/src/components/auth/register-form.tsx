import CardWrapper from "@/components/auth/card-wrapper";
import { RegisterFormSchema } from "@/schema/main";
import { useForm } from "react-hook-form";
import Google from "@/assets/google.svg";
import { registerByEmail } from "@/services/Auth";
import { BadgeCheck } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import Line from "@/components/auth/line";
import ShowPassord from "@/components/auth/show-password";

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
  const [apiError, setApiError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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

      toast({
        title: "Compte créé avec succès,",
        description: "Vous pouvez maintenant vous connecter.",
        variant: "success",
        logo: <BadgeCheck size={30} />,
      });
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
      <CardWrapper
        title="Créer un compte"
        description="Créez un compte pour accéder à toutes les fonctionnalités de l'application."
        backButtonHref="/login"
        backButtonLabel="Se connecter"
        text="Vous possédez déjà un compte ?"
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4  sm:space-y-8"
          >
            <div className="space-y-4  sm:space-y-8">
              <div className="flex gap-4 justify-between flex-col sm:gap-8 sm:flex-row ">
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
                      <div className="relative">
                        <Input
                          {...field}
                          type={showPassword ? "text" : "password"}
                          placeholder="******"
                        />
                        <ShowPassord
                          showPassword={showPassword}
                          setShowPassword={setShowPassword}
                        />
                      </div>
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
                {loading ? "Envoi en cours..." : "Créer un compte"}
              </Button>
              <Line />

              <Button
                type="button"
                className="w-full flex gap-2 text-lg"
                variant="secondary"
                size={"lg"}
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
