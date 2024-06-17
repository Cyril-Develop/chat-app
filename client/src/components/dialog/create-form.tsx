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
import { LoginFormSchema } from "@/schema/main";
import { zodResolver } from "@hookform/resolvers/zod";
import ShowPassord from "@/components/auth/show-password";

interface CreateFormProps {
  btnSubmit: string;
}

const CreateForm = ({ btnSubmit }: CreateFormProps) => {
  const form = useForm({
    // defaultValues: {
    //   email: "",
    //   password: "",
    // },
    // resolver: zodResolver(LoginFormSchema),
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [apiError, setApiError] = useState("");

  const onSubmit = async () => {
    setLoading(true);
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
            name="nom"
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
                <FormDescription>
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
