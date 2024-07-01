import ButtonForm from "@/components/button-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useEditNotificationMutation } from "@/hooks/edit-notification";
import { notificationsFormSchema } from "@/schema/main";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { UserInfos } from "@/types/types";

interface NotificationFormValues {
  user: UserInfos;
}

const NotificationForm = ({ user }: NotificationFormValues) => {
  const [apiError, setApiError] = useState("");
  const mutation = useEditNotificationMutation();

  const form = useForm({
    resolver: zodResolver(notificationsFormSchema),
    defaultValues: {
      type: user.notification,
    },
  });

  const onSubmit = (data: { type: string }) => {
    const notification = data.type;

    if (notification === user.notification) {
      setApiError("Vous n'avez pas modifié vos préférences.");
      return;
    }

    mutation.mutate(notification);
    setApiError("");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Informez-moi de...</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="accept" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Tous les nouveaux messages privés
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="refuse" />
                    </FormControl>
                    <FormLabel className="font-normal">Rien</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <ButtonForm
          loading={mutation.isPending}
          defaultValue="Enregistrer les modifications"
          spinnerValue="Envoie en cours"
        />

        {apiError && <p className="error">{apiError}</p>}
      </form>
    </Form>
  );
};

export default NotificationForm;
