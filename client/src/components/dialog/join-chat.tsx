import {
  Form,
  FormControl,
  FormLabel,
  FormItem,
  FormMessage,
  FormField,
} from "@/components/ui/form";
import ButtonForm from "@/components/button-form";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { RoomPasswordSchema } from "@/schema/main";
import { zodResolver } from "@hookform/resolvers/zod";
import ShowPassord from "@/components/auth/show-password";
import { useJoinChatMutation } from "@/hooks/join-chat";
import { useRoomStore } from "@/store/room.store";

interface JoinFormProps {
  btnSubmit: string;
  roomId: number;
  onOpenChange: (open: boolean) => void;
}

const JoinForm = ({ btnSubmit, roomId, onOpenChange }: JoinFormProps) => {
  const form = useForm({
    defaultValues: {
      password: "",
    },
    resolver: zodResolver(RoomPasswordSchema),
  });

  const { setRoom } = useRoomStore();
  const mutation = useJoinChatMutation();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [apiError, setApiError] = useState("");

  const onSubmit = async () => {
    setLoading(true);
    setApiError("");
    try {
      const { password } = form.getValues();
      const data = { roomId, password };
      await mutation.mutateAsync(data);
      setRoom(roomId);
      onOpenChange(false);
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
            loading={loading}
            defaultValue={btnSubmit}
            spinnerValue="Connexion"
          />
        </div>
        {apiError && <p className="error">{apiError}</p>}
      </form>
    </Form>
  );
};

export default JoinForm;
