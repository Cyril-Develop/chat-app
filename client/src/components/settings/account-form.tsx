import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { useEffect, useState } from "react";
import { AccountFormSchema } from "@/schema/main";
import { useEditAccountMutation } from "@/hooks/edit-account";
import { AccountFormValues } from "@/types/setting";

export function AccountForm({ user }: AccountFormValues) {
  const [apiError, setApiError] = useState("");
  const editAccount = useEditAccountMutation();

  const [defaultValues] = useState({
    email: user.email,
    newEmail: "",
  });

  const form = useForm({
    resolver: zodResolver(AccountFormSchema),
    defaultValues,
  });

  const onSubmit = (data: { newEmail: string }) => {
    const newEmail = data.newEmail;
    setApiError("");
    if (newEmail === user.email) {
      setApiError("Vous ne pouvez pas utiliser votre adresse email actuelle.");
      return;
    }
    editAccount.mutate(newEmail);
  };

  useEffect(() => {
    if (editAccount.isSuccess) {
      form.reset({ email: editAccount.data.email, newEmail: "" });
    } else if (editAccount.isError) {
      setApiError(editAccount.error.message);
    }
  }, [editAccount.isSuccess, form]);

  return (
    <Form {...form}>
      <form
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <div className="space-y-6">
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
                    disabled
                    className="disabled:cursor-default"
                  />
                </FormControl>
                <FormMessage />
                <FormDescription>
                  Votre addresse email actuelle.
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="newEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Modifier votre adresse email</FormLabel>
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

        <ButtonForm
          loading={editAccount.isPending}
          disabled={editAccount.isPending}
          defaultValue="Enregistrer les modifications"
          spinnerValue="Envoie en cours"
        />

        {apiError && <p className="error">{apiError}</p>}
      </form>
    </Form>
  );
}
