import ButtonForm from "@/components/button-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useEditNotificationMutation } from "@/hooks/api/user/edit-notification";
import { notificationsFormSchema } from "@/schema/main";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { NotificationFormValues } from "@/types/setting";
import { cn } from "@/lib/utils";

const NotificationForm = ({ user }: NotificationFormValues) => {
  const [apiError, setApiError] = useState("");
  const { mutate: editNotification, isPending } = useEditNotificationMutation();

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

    editNotification(notification);
    setApiError("");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className={cn("space-y-2")}>
              <FormLabel id="notification-label" className={cn("text-base")}>
                Notifications par e-mail
              </FormLabel>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                aria-labelledby="notification-label"
                className={cn("flex flex-col space-y-1")}
              >
                <FormItem className="flex space-x-3 space-y-0">
                  <RadioGroupItem
                    id="accept"
                    value="accept"
                    className={cn("mt-1")}
                  />
                  <FormLabel
                    htmlFor="accept"
                    className={cn("font-normal hover:cursor-pointer text-base")}
                  >
                    Recevoir les notifications de demandes d'amis et messages
                    privés.
                  </FormLabel>
                </FormItem>

                <FormItem className="flex items-center space-x-3 space-y-0">
                  <RadioGroupItem id="refuse" value="refuse" />
                  <FormLabel
                    htmlFor="refuse"
                    className={cn("font-normal hover:cursor-pointer text-base")}
                  >
                    Ne pas recevoir de notifications.
                  </FormLabel>
                </FormItem>
              </RadioGroup>
              <FormMessage />
            </FormItem>
          )}
        />

        <ButtonForm
          loading={isPending}
          disabled={isPending || !form.formState.isDirty}
          defaultValue="Enregistrer les modifications"
          spinnerValue="Envoi en cours"
        />

        {apiError && <p className="error">{apiError}</p>}
      </form>
    </Form>
  );
};

export default NotificationForm;
