import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";
import { useUserStore } from "@/store/user.store";
import { AccountFormSchema } from "@/schema/main";

export function AccountForm() {
  const [apiError, setApiError] = useState("");
  const { email } = useUserStore((state) => state.user);

  const [defaultValues] = useState({
    email: email,
    newEmail: "",
  });

  const form = useForm({
    resolver: zodResolver(AccountFormSchema),
    defaultValues,
  });

  const onSubmit = async () => {
    console.log("submitting");
  };

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

        <Button type="submit" size={"lg"} variant="default" className="text-lg w-full sm:w-auto">
          Enregistrer les modifications
        </Button>

        {apiError && <p className="error">{apiError}</p>}
      </form>
    </Form>
  );
}
