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
import { useSendMessageMutation } from "@/hooks/api/messages/send-message";
import { cn } from "@/lib/utils";
import { MessageFormSchema } from "@/schema/main";
import { useAuthStore } from "@/store/auth.store";
import { useRoomStore } from "@/store/room.store";
import { MessageFormProps } from "@/types/message";
import { handleKeydown, handleLabelClick } from "@/utils/input-key-handler";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import ImageUploader from "@/components/image-uploader";

const SendRoomMessage = () => {
  const roomId = useRoomStore((state) => state.room?.id);
  const visible = useAuthStore((state) => state.visible);
  const { mutate: sendMessage } = useSendMessageMutation();
  const [openEmoji, setOpenEmoji] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const form = useForm<MessageFormProps>({
    resolver: zodResolver(MessageFormSchema),
    defaultValues: {
      message: "",
      file: null,
    },
  });

  // Fonction unifiée pour réinitialiser l'image
  const resetImage = useCallback(() => {
    setImage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }, []);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0] || null;
      setImage(file);
    },
    []
  );

  // Utilise la fonction resetImage
  const deleteImage = useCallback(() => {
    resetImage();
  }, [resetImage]);

  const noContent = !form.getValues("message") && !image;

  const onSubmit = useCallback(
    (data: MessageFormProps) => {
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

      if (!roomId) {
        return;
      }

      sendMessage(
        { formData, roomId },
        {
          onSuccess: () => {
            form.reset();
            resetImage();
            setError(null);
          },
          onError: () => {
            setError("Une erreur s'est produite lors de l'envoi du message");
          },
        }
      );
    },
    [form, image, noContent, resetImage, roomId, sendMessage, visible]
  );

  return (
    <Form {...form}>
      <Separator className="mb-4" />
      <ImageUploader onDropImage={(file) => setImage(file)} />
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
                    "resize-none min-h-[50px] h-11 scrollbar-webkit scrollbar-firefox text-base"
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
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-8 bg-primary text-primary-foreground hover:bg-primary/80 w-11 h-11 cursor-pointer"
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

export default SendRoomMessage;
