import CardWrapper from "@/components/auth/card.tsx/card-wrapper";
import { RegisterFormSchema } from "@/schema/main";
import { sendOtp, verifyIfUserExists } from "@/services/Auth";
import { useForm } from "react-hook-form";
import ShowPassord from "@/components/auth/show-password";
import { ValidateAccount } from "@/components/auth/validate-account";
import ButtonForm from "@/components/button-form";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { NewUser, Sex } from "@/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [openRequestOtp, setOpenRequestOtp] = useState(false);

  const [newUser, setNewUser] = useState<NewUser>({
    username: "",
    email: "",
    password: "",
    sex: "",
  });

  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      sex: "",
    },
    resolver: zodResolver(RegisterFormSchema),
  });

  const onSubmit = async (values: {
    username: string;
    email: string;
    password: string;
    sex: string;
  }) => {
    setLoading(true);
    setApiError("");
    try {
      const { username, email, password, sex } = values;
      setNewUser({ username, email, password, sex: sex as Sex });

      const userExists = await verifyIfUserExists(username, email);

      if (userExists.error) {
        throw new Error(userExists.error);
      }

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
      sex: "",
    });
  };

  return (
    <CardWrapper title="Créer un compte " description="Commencez gratuitement.">
      <Form {...form}>
        <form
          noValidate
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn("space-y-6")}
        >
          <div className="flex gap-4 justify-between flex-col sm:gap-8 ">
            <div className="flex gap-4 justify-between flex-col sm:flex-row sm:gap-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className={cn("flex-1")}>
                    <FormLabel className={cn("form-label")}>
                      Nom d'utilisateur
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        placeholder="John Doe"
                        maxLength={15}
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
                name="sex"
                render={({ field }) => (
                  <FormItem className={cn("flex-1")}>
                    <FormLabel className={cn("form-label")}>Sexe</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl
                        className={cn(
                          "h-11 w-full rounded-md border border-input dark:bg-primary-foreground text-muted-foreground  dark:border-popover"
                        )}
                      >
                        <SelectTrigger className={cn("form-input")}>
                          <SelectValue placeholder="Sélectionner" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="MALE">Homme</SelectItem>
                        <SelectItem value="FEMALE">Femme</SelectItem>
                        <SelectItem value="NON_BINARY">Non-binaire</SelectItem>
                        <SelectItem value="UNDISCLOSED">
                          Ne souhaite pas le dire
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                    <FormDescription />
                  </FormItem>
                )}
              />
            </div>
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
                  <FormMessage />
                  <FormDescription />
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
                to="/chat-app/terms"
                className="text-primary no-underline rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring underline-offset-4 hover:underline focus:underline font-semibold"
              >
                conditions générales d'utilisation
              </Link>
              .
            </p>
          </div>
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
              sex: "MALE" | "FEMALE";
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
