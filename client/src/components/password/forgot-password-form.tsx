import ButtonForm from "@/components/button-form";
import { Icons } from "@/components/Icons";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { ForgotPasswordFormSchema } from "@/schema/main";
import { forgotPassword } from "@/services/Auth";
import { ForgotPasswordFormProps } from "@/types/password";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ForgotPasswordForm = ({
  btnSubmit,
  onSubmitSuccess,
  handleResetPassword,
}: ForgotPasswordFormProps) => {
  const form = useForm({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(ForgotPasswordFormSchema),
  });

  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const onSubmit = async () => {
    setLoading(true);
    setApiError("");

    const { email } = form.getValues();

    try {
      const response = await forgotPassword(email);
      onSubmitSuccess();
      toast({
        description: response.message,
        variant: "success",
        logo: <Icons.check />,
      });
      handleResetPassword();
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
        className="space-y-4  sm:space-y-8"
        noValidate
      >
        <div className="space-y-4  sm:space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={cn("text-base")}>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="john.doe@gmail.com"
                    className={cn("text-base")}
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
            disabled={loading}
            defaultValue={btnSubmit}
            spinnerValue="Envoi..."
          />
        </div>
        {apiError && <p className="error">{apiError}</p>}
      </form>
    </Form>
  );
};

export default ForgotPasswordForm;
