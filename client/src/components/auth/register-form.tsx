import CardWrapper from "@/components/auth/card-wrapper";
import { RegisterFormSchema } from "@/schema/main";
import { useForm } from "react-hook-form";
import { registerByEmail } from "@/services/Auth";
import { BadgeCheck } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import Line from "@/components/auth/line";
import ShowPassord from "@/components/auth/show-password";
import { Icons } from "@/components/Icons";
import ButtonForm from "@/components/button-form";
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
      username: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(RegisterFormSchema),
  });

  const onSubmit = async () => {
    setLoading(true);
    setApiError("");
    try {
      const { username, email, password } = form.getValues();
      await registerByEmail({ username, email, password });

      toast({
        title: "Compte créé avec succès,",
        description: "Vous pouvez maintenant vous connecter.",
        variant: "success",
        logo: <BadgeCheck size={30} />,
      });
      form.reset();
    } catch (error: any) {
      console.log(error.message);

      if (error.message.includes("Nom d'utilisateur déjà utilisé")) {
        form.setError("username", {
          type: "manual",
          message: error.message,
        });
      } else if (error.message.includes("Email déjà utilisé")) {
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
        title="Créer un compte "
        description="Créez un compte pour accéder à toutes les fonctionnalités de l'application."
        backButtonHref="/login"
        backButtonLabel="Se connecter"
        text="Vous possédez déjà un compte ?"
      >
        <Form {...form}>
          <form
            noValidate
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4  md:space-y-8"
          >
            <div className="flex gap-4 justify-between flex-col md:gap-8 ">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom d'utilisateur</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" placeholder="John Doe" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
              <ButtonForm
                loading={loading}
                defaultValue="Créer un compte"
                spinnerValue="Envoie en cours"
              />
              <Line />

              <Button
                type="button"
                className="w-full text-lg"
                variant="secondary"
                size={"lg"}
                onClick={() => console.log("google")}
              >
                <Icons.google className="mr-2 h-4 w-4" />
                Continuer avec Google
              </Button>
            </div>
            {apiError && <p className="error">{apiError}</p>}
          </form>
        </Form>
      </CardWrapper>
    </>
  );
};

export default RegisterForm;
