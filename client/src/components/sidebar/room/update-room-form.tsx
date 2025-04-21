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
import Emoji from "@/components/emoji/Emoji";

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
              <div className="relative">
                <FormControl>
                  <Textarea
                    className={cn(
                      "resize-none min-h-[70px] whitespace-normal overflow-y-scroll scrollbar-webkit scrollbar-firefox dark:border-popover text-base pr-8"
                    )}
                    maxLength={90}
                    {...field}
                  />
                </FormControl>
                <FormDescription className={cn("text-additional-info mt-2")}>
                  La description est visible par tous les membres.
                </FormDescription>
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
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <ButtonForm
          loading={loading}
          disabled={loading}
          defaultValue={btnSubmit}
          spinnerValue="Modification en cours..."
        />
        {apiError && <p className="error">{apiError}</p>}
      </form>
    </Form>
  );
};

export default UpdateRoomForm;
