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
import { UpdateRoomFormSchema } from "@/schema/main";
import { useUpdateRoomDescriptionMutation } from "@/hooks/api/chat/update-room";
import { cn } from "@/lib/utils";
import { CreateRoomFormProps } from "@/types/room";
import { useRoomStore } from "@/store/room.store";
import { Textarea } from "@/components/ui/textarea";

const UpdateRoomForm = ({
  btnSubmit,
  onSubmitSuccess,
  roomDescription,
}: CreateRoomFormProps) => {
  const form = useForm({
    defaultValues: {
      description: roomDescription || "",
    },
    resolver: zodResolver(UpdateRoomFormSchema),
  });

  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const roomId = useRoomStore((state) => state.room?.id);
  const updateRoomDescription = useUpdateRoomDescriptionMutation();

  const onSubmit = async () => {
    setLoading(true);
    setApiError("");
    const { description } = form.getValues();
    try {
      if (!roomId) {
        setApiError("Aucun salon sélectionné.");
        setLoading(false);
        return;
      }
      await updateRoomDescription.mutateAsync({ roomId, description });
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
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={cn("text-base")}>Description</FormLabel>
              <FormControl>
                <Textarea
                  className={cn(
                    "resize-none whitespace-normal overflow-y-scroll scrollbar-webkit scrollbar-firefox dark:border-popover text-base"
                  )}
                  maxLength={150}
                  {...field}
                />
              </FormControl>
              <FormDescription className={cn("text-additional-info")}>
                Si vous saisissez une description, elle sera visible par tous
                les membres.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col gap-4">
          <ButtonForm
            loading={loading}
            disabled={loading}
            defaultValue={btnSubmit}
            spinnerValue="Modification en cours..."
          />
        </div>
        {apiError && <p className="error">{apiError}</p>}
      </form>
    </Form>
  );
};

export default UpdateRoomForm;
