import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormLabel,
  FormItem,
  FormMessage,
  FormField,
  FormDescription,
} from "@/components/ui/form";
import ButtonForm from "@/components/button-form";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { RoomFormSchema } from "@/schema/main";
import { zodResolver } from "@hookform/resolvers/zod";
import ShowPassord from "@/components/auth/show-password";
import { useCreateChatMutation } from "@/hooks/create-chat";
import { cn } from "@/lib/utils";

interface CreateFormProps {
  btnSubmit: string;
  onSubmitSuccess: () => void;
}

const CreateForm = ({ btnSubmit, onSubmitSuccess }: CreateFormProps) => {
  const form = useForm({
    defaultValues: {
      name: "",
      password: "",
    },
    resolver: zodResolver(RoomFormSchema),
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [apiError, setApiError] = useState("");

  const mutation = useCreateChatMutation();

  const onSubmit = async () => {
    setLoading(true);
    setApiError("");
    const { name, password } = form.getValues();
    try {
      await mutation.mutateAsync({ name, password });
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
        className="space-y-4  sm:space-y-8"
        noValidate
      >
        <div className="space-y-4  sm:space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom</FormLabel>
                <FormControl>
                  <Input {...field} type="text" />
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
                <FormDescription className={cn("text-muted")}>
                  Si vous saisissez un mot de passe, le salon sera privé et seul
                  vous et vos amis pourront y accéder.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col gap-4">
          <ButtonForm
            loading={loading}
            defaultValue={btnSubmit}
            spinnerValue="Création en cours..."
          />
        </div>
        {apiError && <p className="error">{apiError}</p>}
      </form>
    </Form>
  );
};

export default CreateForm;
