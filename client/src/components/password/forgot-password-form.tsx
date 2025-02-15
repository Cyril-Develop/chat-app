import { Input } from "@/components/ui/input";
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
import { ForgotPasswordFormSchema } from "@/schema/main";

interface ForgotPasswordFormProps {
  btnSubmit: string;
  onSubmitSuccess: () => void;
}

const ForgotPasswordForm = ({
  btnSubmit,
  onSubmitSuccess,
}: ForgotPasswordFormProps) => {
  const form = useForm({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(ForgotPasswordFormSchema)
  });

  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  //const createRoom = useCreateRoomMutation();

  const onSubmit = async () => {

    setLoading(true);
    setApiError("");

    const { email } = form.getValues();

    console.log(email);

    try {
      //await createRoom.mutateAsync({ email });
      //onSubmitSuccess();
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
        </div>
        <div className="flex flex-col gap-4">
          <ButtonForm
            loading={loading}
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
