import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
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
import { useState } from "react";
import { useUserStore } from "@/store/user.store";
import { ProfileFormSchema } from "@/schema/main";

export function AccountForm() {
  const [apiError, setApiError] = useState("");
  const { username, email } = useUserStore((state) => state.user);

  const [defaultValues] = useState({
    username: username,
    email: email,
  });

  const form = useForm({
    resolver: zodResolver(ProfileFormSchema),
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
        className="space-y-4  sm:space-y-8"
      >
        <div className="space-y-4  sm:space-y-8">
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom</FormLabel>
                <FormControl>
                  <Input {...field} type="text" placeholder="Doe" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Prénom</FormLabel>
                <FormControl>
                  <Input {...field} type="text" placeholder="John" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} type="email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col gap-4">
          <Button type="submit">Mettre à jour le compte</Button>
        </div>
        {apiError && <p className="error">{apiError}</p>}
      </form>
    </Form>
  );
}
