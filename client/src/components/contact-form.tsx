import ButtonForm from "@/components/button-form";
import {
  Form,
  FormControl,
  FormLabel,
  FormItem,
  FormMessage,
  FormField,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ContactFormSchema } from "@/schema/main";
import { zodResolver } from "@hookform/resolvers/zod";
import CardWrapper from "@/components/auth/card-wrapper";
import { Textarea } from "@/components/ui/textarea";
import { sendContactEmail } from "@/services/Email";
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/Icons";
import { cn } from "@/lib/utils";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    resolver: zodResolver(ContactFormSchema),
  });

  const onSubmit = async () => {
    setLoading(true);
    setApiError("");
    try {
      const { name, email, subject, message } = form.getValues();

      const response = await sendContactEmail({
        name,
        email,
        subject,
        message,
      });

      toast({
        title: response.message,
        variant: "success",
        logo: <Icons.check />,
      });

      form.reset();
    } catch (error: any) {
      setApiError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CardWrapper
      title="Contactez nous"
      description="Une question, une suggestion ?"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4  sm:space-y-8"
          noValidate
        >
          <div className="flex flex-col gap-4 justify-between md:gap-8 md:flex-row">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn("text-base")}>Nom</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="John Doe"
                      className={cn("text-base")}
                    />
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
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={cn("text-base")}>Objet</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Sujet de votre message"
                    className={cn("text-base")}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={cn("text-base")}>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Votre message ici..."
                    className="text-base resize-none whitespace-normal overflow-y-scroll scrollbar-webkit scrollbar-firefox dark:border-popover"
                    maxLength={150}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="pb-3 md:pb-0">
            <ButtonForm
              loading={loading}
              disabled={loading}
              defaultValue="Envoyer"
              spinnerValue="Envoi en cours"
            />
          </div>
          {apiError && <p className="error">{apiError}</p>}
        </form>
      </Form>
    </CardWrapper>
  );
};

export default ContactForm;
