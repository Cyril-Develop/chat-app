import ShowPassord from "@/components/auth/show-password";
import ButtonForm from "@/components/button-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRoomTransitionMutation } from "@/hooks/api/chat/room-transition";
import { RoomPasswordSchema } from "@/schema/main";
import { JoinPrivateRoomFormProps } from "@/types/room";
import { useRoomStore } from "@/store/room.store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

const JoinPrivateRoomForm = ({
  btnSubmit,
  roomId,
  onOpenChange,
}: JoinPrivateRoomFormProps) => {
  const form = useForm({
    defaultValues: {
      password: "",
    },
    resolver: zodResolver(RoomPasswordSchema),
  });

  const { transitionToRoom, isLoading } = useRoomTransitionMutation();
  const currentRoomId = useRoomStore((state) => state.room?.id);
  const [showPassword, setShowPassword] = useState(false);
  const [apiError, setApiError] = useState("");

  const onSubmit = async (values: { password: string }) => {
    setApiError("");
    try {
      const data = { roomId, password: values.password };
      await transitionToRoom(data, currentRoomId);
      onOpenChange(false);
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
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mot de passe</FormLabel>
                <FormControl>
                  <ShowPassord
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                    field={field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col gap-4">
          <ButtonForm
            loading={isLoading}
            disabled={isLoading || !form.formState.isDirty}
            defaultValue={btnSubmit}
            spinnerValue="Connexion"
          />
        </div>
        {apiError && <p className="error">{apiError}</p>}
      </form>
    </Form>
  );
};

export default JoinPrivateRoomForm;