import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Form, FormItem, FormMessage, FormField } from "@/components/ui/form";
import ButtonForm from "@/components/button-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ValidateAccountFormSchema } from "@/schema/main";
import { registerByEmail, verifyOtp } from "@/services/Auth";
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/Icons";

interface ValidateAccountFormProps {
  newUser: { username: string; email: string; password: string };
  onSubmitSuccess: () => void;
}

export function ValidateAccountForm({
  newUser,
  onSubmitSuccess,
}: ValidateAccountFormProps) {
  const form = useForm({
    defaultValues: {
      otp: "",
    },
    resolver: zodResolver(ValidateAccountFormSchema),
  });

  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const onSubmit = async (data: { otp: string }) => {
    setLoading(true);
    setApiError("");

    try {
      const { email } = newUser;
      const { otp } = data;

      await verifyOtp(email, otp);

      await registerByEmail(newUser);
      toast({
        title: "Compte créé avec succès",
        description: "Vous pouvez maintenant vous connecter.",
        variant: "success",
        logo: <Icons.check className="h-6 w-6" />,
      });
      onSubmitSuccess();
    } catch (error: any) {
      setApiError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 sm:space-y-8"
        noValidate
      >
        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <FormItem>
              <InputOTP {...field} maxLength={6}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col gap-4">
          <ButtonForm
            loading={loading}
            disabled={loading}
            defaultValue="Continuer"
            spinnerValue="Validation en cours"
          />
        </div>

        <FormItem>
          <p className="flex gap-2 text-sm text-muted-foreground">
            <Icons.alert width={20} height={20} />
            Pensez à vérifier votre dossier de courriers indésirables.
          </p>
        </FormItem>

        {apiError && <p className="error">{apiError}</p>}
      </form>
    </Form>
  );
}
