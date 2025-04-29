import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DeleteUserFormSchema } from "@/schema/main";
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
import { useDeleteUserAccountMutation } from "@/hooks/api/admin/delete-user-account";

interface DeleteUserFormProps {
  userId: number;
  onSubmitSuccess: () => void;
  btnSubmit: string;
}

const DeleteUserForm = ({
  userId,
  onSubmitSuccess,
  btnSubmit,
}: DeleteUserFormProps) => {
  const form = useForm({
    defaultValues: {
      reason: "",
    },
    resolver: zodResolver(DeleteUserFormSchema),
  });

  const [apiError, setApiError] = useState("");
  const {
    mutate: deleteUserAccount,
    isPending,
    isSuccess,
  } = useDeleteUserAccountMutation();

  const onSubmit = async (values: { reason: string }) => {
    setApiError("");
    try {
      deleteUserAccount({ userId, reason: values.reason });
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
          spinnerValue="Suppression en cours..."
        />
        {apiError && <p className="error">{apiError}</p>}
      </form>
    </Form>
  );
};

export default DeleteUserForm;
