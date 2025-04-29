import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BlockUserFormSchema } from "@/schema/main";
import {
  Form,
  FormControl,
  FormLabel,
  FormItem,
  FormMessage,
  FormField,
  FormDescription,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import ButtonForm from "@/components/button-form";
import { useBlockUserAccountMutation } from "@/hooks/api/admin/block-user-account";

interface BlockUserFormProps {
  userId: number;
  onSubmitSuccess: () => void;
  btnSubmit: string;
}

const BlockUserForm = ({
  userId,
  onSubmitSuccess,
  btnSubmit,
}: BlockUserFormProps) => {
  const form = useForm({
    defaultValues: {
      duration: "",
      reason: "",
    },
    resolver: zodResolver(BlockUserFormSchema),
  });

  const [apiError, setApiError] = useState("");
  const {
    mutate: blockUserAccount,
    isPending,
    isSuccess,
  } = useBlockUserAccountMutation();

  const onSubmit = async (values: { duration: string; reason: string }) => {
    setApiError("");
    try {
      blockUserAccount({
        userId,
        duration: values.duration,
        reason: values.reason,
      });
      if (isSuccess) {
        onSubmitSuccess();
      }
    } catch (error: any) {
      setApiError(error.message);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 sm:space-y-8"
        noValidate
      >
        <div className="space-y-4 sm:space-y-8">
          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="form-label">Durée</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="form-input">
                      <SelectValue placeholder="Sélectionner une durée" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1j">1 jour</SelectItem>
                      <SelectItem value="7j">7 jours</SelectItem>
                      <SelectItem value="30j">30 jours</SelectItem>
                      <SelectItem value="permanent">Permanent</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription className="text-additional-info mt-2">
                  Précisez la durée du blocage. 
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="reason"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="form-label">Motif</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="form-input">
                      <SelectValue placeholder="Sélectionner un motif" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="insultes">
                        Comportement insultant
                      </SelectItem>
                      <SelectItem value="harcelement">Harcèlement</SelectItem>
                      <SelectItem value="spam">Spam / Publicité</SelectItem>
                      <SelectItem value="contenu_inapproprie">
                        Contenu inapproprié
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription className="text-additional-info mt-2">
                  Ce motif sera notifié à l'utilisateur par e-mail.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <ButtonForm
          loading={isPending}
          disabled={isPending}
          variant="destructive"
          defaultValue={btnSubmit}
          spinnerValue="Blocage en cours..."
        />

        {apiError && <p className="error">{apiError}</p>}
      </form>
    </Form>
  );
};

export default BlockUserForm;
