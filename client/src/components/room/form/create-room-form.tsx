import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
import { useCreateRoomMutation } from "@/hooks/api/chat/create-room";
import { cn } from "@/lib/utils";
import { CreateRoomFormProps } from "@/types/room";
import Emoji from "@/components/emoji/Emoji";
import useWindowWidth from "@/hooks/window-width";

const CreateRoomForm = ({
  btnSubmit,
  onSubmitSuccess,
}: CreateRoomFormProps) => {
  const form = useForm({
    defaultValues: {
      name: "",
      password: "",
      description: "",
    },
    resolver: zodResolver(RoomFormSchema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [apiError, setApiError] = useState("");
  const windowWidth = useWindowWidth();
  const isDesktopView = windowWidth > 1023;

  const { mutateAsync: createRoom, isPending } = useCreateRoomMutation();

  const onSubmit = async (values: {
    name: string;
    password?: string;
    description?: string;
  }) => {
    setApiError("");
    try {
      await createRoom(values);
      onSubmitSuccess();
    } catch (error: any) {
      setApiError(error.message);
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
                <FormLabel className={cn("form-label")}>Nom</FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      maxLength={15}
                      className={cn("form-input")}
                    />
                  </FormControl>
                  {isDesktopView && (
                    <div className="absolute inset-y-0 right-0.5 flex items-center">
                      <Emoji
                        onSelect={(emoji) => {
                          const current = form.getValues("name") || "";
                          form.setValue("name", current + emoji, {
                            shouldDirty: true,
                          });
                        }}
                        variant="linkForm"
                        size="icon"
                      />
                    </div>
                  )}
                </div>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={cn("text-base")}>Description</FormLabel>
                <div className="relative">
                  <FormControl>
                    <Textarea
                      className={cn(
                        "resize-none min-h-[70px] whitespace-normal overflow-y-scroll scrollbar-webkit scrollbar-firefox dark:border-popover text-base pr-3 lg:pr-8"
                      )}
                      maxLength={90}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className={cn("text-additional-info mt-2")}>
                    Si vous saisissez une description, elle sera visible par
                    tous les membres.
                  </FormDescription>
                  {isDesktopView && (
                    <div className="absolute top-0 right-0.5 flex items-center">
                      <Emoji
                        onSelect={(emoji) => {
                          const current = form.getValues("description") || "";
                          form.setValue("description", current + emoji, {
                            shouldDirty: true,
                          });
                        }}
                        variant="linkForm"
                        size="icon"
                      />
                    </div>
                  )}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="password" className={cn("text-base")}>
                  Mot de passe
                </FormLabel>
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
        <ButtonForm
          loading={isPending}
          disabled={isPending || !form.formState.isDirty}
          defaultValue={btnSubmit}
          spinnerValue="Création en cours..."
        />
        {apiError && <p className="error">{apiError}</p>}
      </form>
    </Form>
  );
};

export default CreateRoomForm;
