import CardWrapper from "@/components/auth/card.tsx/card-wrapper";
import ShowPassord from "@/components/auth/show-password";
import ButtonForm from "@/components/button-form";
import { Icons } from "@/components/Icons";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { PasswordFormSchema } from "@/schema/main";
import { resetPassword } from "@/services/Auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

export default function ResetPassword() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [apiError, setApiError] = useState("");

  const { token } = useParams();
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(PasswordFormSchema),
  });

  const onSubmit = async () => {
    setLoading(true);
    setApiError("");
    try {
      const { password, confirmPassword } = form.getValues();

      if (password !== confirmPassword) {
        throw new Error("Les mots de passe ne correspondent pas");
      }

      if (!token) {
        throw new Error("Token invalide ou manquant");
      }

      const response = await resetPassword(token, password);
      toast({
        description: response.message,
        variant: "success",
        logo: <Icons.check />,
      });
      form.reset();
      navigate("/chateo/auth");
    } catch (error: any) {
      setApiError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CardWrapper
      title="Mot de passe"
      description="Saisissez un nouveau mot de passe pour sécuriser votre compte."
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4  sm:space-y-8 pb-3 sm:pb-0"
          noValidate
        >
          <div className="space-y-4  sm:space-y-8">
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
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    htmlFor="confirmPassword"
                    className={cn("text-base")}
                  >
                    Confirmer le mot de passe
                  </FormLabel>
                  <FormControl>
                    <ShowPassord
                      showPassword={showConfirmPassword}
                      setShowPassword={setShowConfirmPassword}
                      field={field}
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <ButtonForm
            loading={loading}
            disabled={loading}
            defaultValue="Continuer"
            spinnerValue="Modification en cours"
          />
          {apiError && <p className="error">{apiError}</p>}
        </form>
      </Form>
    </CardWrapper>
  );
}
