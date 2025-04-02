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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RoomFormSchema } from "@/schema/main";
import ShowPassord from "@/components/auth/show-password";
import { useCreateRoomMutation } from "@/hooks/create-room";
import { cn } from "@/lib/utils";
import { CreateRoomFormProps } from "@/types/room";

const CreateRoomForm = ({
  btnSubmit,
  onSubmitSuccess,
}: CreateRoomFormProps) => {
  const form = useForm({
    defaultValues: {
      name: "",
      password: "",
    },
    resolver: zodResolver(RoomFormSchema),
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [apiError, setApiError] = useState("");

  const createRoom = useCreateRoomMutation();

  const onSubmit = async () => {
    setLoading(true);
    setApiError("");
    const { name, password } = form.getValues();
    try {
      await createRoom.mutateAsync({ name, password });
      onSubmitSuccess();
    } catch (error: any) {
      setApiError(error.message);
    } finally {
      setLoading(false);
    }
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
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={cn("text-label")}>Nom</FormLabel>
                <FormControl>
                  <Input {...field} type="text"className={cn("text-label")}/>
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
                <FormLabel htmlFor="password" className={cn("text-label")}>Mot de passe</FormLabel>
                <FormControl>
                  <ShowPassord
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                    field={field}
                  />
                </FormControl>
                <FormDescription className={cn("text-additional-info")}>
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
            disabled={loading}
            defaultValue={btnSubmit}
            spinnerValue="Création en cours..."
          />
        </div>
        {apiError && <p className="error">{apiError}</p>}
      </form>
    </Form>
  );
};

export default CreateRoomForm;
