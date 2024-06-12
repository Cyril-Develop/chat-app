import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
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
import { UserInfos } from "@/types/types";
import { useEditEmailMutation } from "@/hooks/edit-email";
import { toast } from "../ui/use-toast";

interface AccountFormValues {
  user: UserInfos;
}

export function AccountForm({ user }: AccountFormValues) {
  const [apiError, setApiError] = useState("");
  const mutation = useEditEmailMutation();

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
    if (newEmail === user.email) {
      toast({
        title: "Erreur",
        description:
          "Vous ne pouvez pas utiliser votre adresse email actuelle.",
        variant: "destructive",
      });
      return;
    }
    mutation.mutate(newEmail);
  };

  useEffect(() => {
    if (mutation.isSuccess) {
      form.reset({ email: mutation.data.email, newEmail: "" });
    } else if (mutation.isError) {
      setApiError(mutation.error.message);
    }
  }, [mutation.isSuccess, form]);

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

        <Button
          type="submit"
          size={"lg"}
          variant="default"
          className="text-lg w-full sm:w-auto"
        >
          Enregistrer les modifications
        </Button>

        {apiError && <p className="error">{apiError}</p>}
      </form>
    </Form>
  );
}
