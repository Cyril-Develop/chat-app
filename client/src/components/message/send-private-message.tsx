import { Icons } from "@/components/Icons";
import HandleEmojiPicker from "@/components/message/handle-emoji-picker";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useSendPrivateMessageMutation } from "@/hooks/api/messages/send-private-message";
import { cn } from "@/lib/utils";
import { PrivateMessageFormSchema } from "@/schema/main";
import { useAuthStore } from "@/store/auth.store";
import { useContactStore } from "@/store/contact.store";
import { PrivateMessageFormProps } from "@/types/message";
import { handleKeydown, handleLabelClick } from "@/utils/input-key-handler";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

const SendPrivateMessage = () => {
  const visible = useAuthStore((state) => state.visible);
  const { mutate: sendMessage } = useSendPrivateMessageMutation();
  const [openEmoji, setOpenEmoji] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const contactId = useContactStore((state) => state.contactId);

  const form = useForm<PrivateMessageFormProps>({
    resolver: zodResolver(PrivateMessageFormSchema),
    defaultValues: {
      message: "",
      file: null,
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const deleteImage = () => {
    setImage(null);
    resetInputRef();
  };

  const noContent = !form.getValues("message") && !image;
  const resetInputRef = () => {
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const onSubmit = (data: PrivateMessageFormProps) => {
    const { message } = data;

    if (noContent) return;
    if (visible === false) {
      setError("Vous ne pouvez pas envoyer de message en mode espion");
      return;
    }

    const formData = new FormData();
    formData.append("message", message);
    if (image) {
      formData.append("image", image);
    }

    if (!contactId) {
      return;
    }

    sendMessage(
      { formData, contactId },
      {
        onSuccess: () => {
          form.reset();
          setImage(null);
          resetInputRef();
          setError(null);
        },
        onError: () => {
          setError("Une erreur s'est produite lors de l'envoi du message");
        },
      }
    );
  };

  return (
    <Form {...form}>
      <Separator className="mb-4" />
      {image && (
        <div className="relative w-fit">
          <img
            src={URL.createObjectURL(image)}
            alt="Image jointe au message"
            className="h-20 w-20 object-cover rounded-md"
          />
          <Button
            type="button"
            title="Supprimer l'image"
            className="absolute top-0 right-0 z-10 p-0 h-6 w-6"
            onClick={deleteImage}
          >
            <Icons.close width={16} height={16} />
          </Button>
        </div>
      )}
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative flex flex-col sm:flex-row gap-2 mt-1 mb-1 xl:mt-4 xl:mb-4"
      >
        {openEmoji && (
          <HandleEmojiPicker form={form} setOpenEmoji={setOpenEmoji} />
        )}

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Message..."
                  aria-label="Envoyer un message"
                  className={cn(
                    "resize-none min-h-[50px] h-11 scrollbar-webkit scrollbar-firefox text-label"
                  )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-2 items-center">
          <FormField
            control={form.control}
            name="file"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-8 bg-primary text-primary-foreground hover:bg-primary/80 p-2 w-11 h-11 cursor-pointer"
                  tabIndex={0}
                  aria-label="Joindre une image"
                  title="Joindre une image"
                  onKeyDown={handleKeydown}
                  onClick={() => handleLabelClick("fileInput")}
                >
                  <Icons.image />
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="file"
                    accept=".jpg,.jpeg,.png,.svg"
                    className="hidden"
                    value={undefined}
                    onChange={handleFileChange}
                    id="fileInput"
                    ref={fileInputRef}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="button"
            size="message"
            title={openEmoji ? "Fermer les emojis" : "Ouvrir les emojis"}
            onClick={() => setOpenEmoji(!openEmoji)}
          >
            <Icons.emoji
              aria-label={openEmoji ? "Fermer les emojis" : "Ouvrir les emojis"}
            />
          </Button>
          <Button
            type="submit"
            size="message"
            title="Envoyer"
            className={cn("ml-auto")}
            disabled={noContent}
          >
            <Icons.send aria-label="Envoyer" />
          </Button>
        </div>
      </form>
      {error && visible === false && <p className="error">{error}</p>}
    </Form>
  );
};

export default SendPrivateMessage;
