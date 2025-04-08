import CardWrapper from "@/components/auth/card-wrapper";
import { RegisterFormSchema } from "@/schema/main";
import { sendOtp, verifyIfUserExists } from "@/services/Auth";
import { useForm } from "react-hook-form";
//import Line from "@/components/auth/line";
//import Icons from "@/components/icons";
//import { Button } from "../ui/button";
import ShowPassord from "@/components/auth/show-password";
import ButtonForm from "@/components/button-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { ValidateAccount } from "@/components/auth/validate-account";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { NewUser, Gender } from "@/types/auth";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [openRequestOtp, setOpenRequestOtp] = useState(false);

  const [newUser, setNewUser] = useState<NewUser>({
    username: "",
    email: "",
    password: "",
    gender: "",
  });

  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      gender: "",
    },
    resolver: zodResolver(RegisterFormSchema),
  });

  const onSubmit = async () => {
    setLoading(true);
    setApiError("");
    try {
      const { username, email, password, gender } = form.getValues();
      setNewUser({ username, email, password, gender: gender as Gender });

      const userExists = await verifyIfUserExists(username, email);

      // Si la réponse contient une erreur, c'est que l'utilisateur existe déjà
      if (userExists.error) {
        throw new Error(userExists.error);
      }

      // Si l'utilisateur n'existe pas encore, on peut envoyer l'OTP
      const otpSent = await sendOtp(email);

      if (!otpSent) {
        throw new Error("Erreur lors de l'envoi de l'OTP.");
      }

      setOpenRequestOtp(true);
    } catch (error: any) {
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

  const handleAccountCreationSuccess = () => {
    form.reset();
    setNewUser({
      username: "",
      email: "",
      password: "",
      gender: "",
    });
  };

  return (
    <CardWrapper
      title="Créer un compte "
      description="Commencez gratuitement."
      backButtonHref="/chateo/login"
      backButtonLabel="Se connecter"
      text="Vous possédez déjà un compte ?"
    >
      <Form {...form}>
        <form
          noValidate
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn("space-y-4  md:space-y-8")}
        >
          <div className="flex gap-4 justify-between flex-col md:gap-8 ">
            <div className="flex gap-4 justify-between flex-col md:flex-row md:gap-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className={cn("flex-1")}>
                    <FormLabel className={cn("text-label")}>
                      Nom d'utilisateur
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        placeholder="John Doe"
                        maxLength={15}
                        className={cn("text-label")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem className={cn("flex-1")}>
                    <FormLabel className={cn("text-label")}>Sexe</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl
                        className={cn(
                          "h-11 w-full rounded-md border border-input dark:bg-primary-foreground text-muted-foreground  dark:border-popover"
                        )}
                      >
                        <SelectTrigger className={cn("h-11")}>
                          <SelectValue placeholder="Genre" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="HOMME">Homme</SelectItem>
                        <SelectItem value="FEMME">Femme</SelectItem>
                      </SelectContent>
                    </Select>
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
                  <FormLabel className={cn("text-label")}>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="john.doe@gmail.com"
                      className={cn("text-label")}
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
                  <FormLabel className={cn("text-label")}>
                    Mot de passe
                  </FormLabel>
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
          <div className="flex flex-col gap-1">
            <ButtonForm
              loading={loading}
              disabled={loading}
              defaultValue="Créer un compte"
              spinnerValue="Création en cours"
            />
            <p className="text-additional-info text-center">
              En vous inscrivant, vous acceptez nos{" "}
              <Link
                to="/chateo/terms"
                className="text-primary no-underline rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring underline-offset-4 hover:underline focus:underline font-semibold"
              >
                conditions générales d'utilisation
              </Link>
              .
            </p>
          </div>
          {/* <div className="flex flex-col gap-4">
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
            </div> */}
          {apiError && <p className="error">{apiError}</p>}
        </form>
      </Form>
      {openRequestOtp && (
        <ValidateAccount
          newUser={
            newUser as {
              username: string;
              email: string;
              password: string;
              gender: "HOMME" | "FEMME";
            }
          }
          isOpen={openRequestOtp}
          setIsOpen={setOpenRequestOtp}
          handleAccountCreationSuccess={handleAccountCreationSuccess}
          headerTitle="Valider votre compte"
          headerDescription="Un code de validation à 6 chiffres a été envoyé à l'adresse email indiquée."
        />
      )}
    </CardWrapper>
  );
};

export default RegisterForm;
