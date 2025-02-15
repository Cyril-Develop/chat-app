import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Form,
  FormControl,
  FormLabel,
  FormItem,
  FormMessage,
  FormField,
} from "@/components/ui/form";
import ButtonForm from "@/components/button-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ValidateAccountFormSchema } from "@/schema/main";

interface ValidateAccountFormProps {
  btnSubmit: string;
  onSubmitSuccess: () => void;
}

export function ValidateAccountForm({
  btnSubmit,
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

    console.log(data.otp);

    try {
      // onSubmitSuccess();
    } catch (error: any) {
      setApiError(error.message || "Erreur lors de la validation de l'OTP.");
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
            defaultValue={btnSubmit}
            spinnerValue="Envoi en cours"
          />
        </div>

        {apiError && <p className="error">{apiError}</p>}
      </form>
    </Form>
  );
}
