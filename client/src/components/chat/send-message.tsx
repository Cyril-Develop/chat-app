import { Icons } from "@/components/Icons";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import EmojiPicker from "emoji-picker-react";
import { useEffect, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { handleKeydown, handleLabelClick } from "@/utils/handle-input-file";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { MessageFormSchema } from "@/schema/main";
import { useSendMessageMutation } from "@/hooks/send-message";
import { cn } from "@/lib/utils";
import { useUserStore } from "@/store/user.store";

interface SendMessageProps {
  room: {
    id: number;
    name: string;
    users: {
      id: number;
      username: string;
      profileImage: string;
    }[];
  };
}

interface MessageFormProps {
  message: string;
  file: File | null;
}

const SendMessage = ({ room }: SendMessageProps) => {
  const { statut } = useUserStore((state) => state);
  const mutation = useSendMessageMutation();
  const [openEmoji, setOpenEmoji] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<MessageFormProps>({
    resolver: zodResolver(MessageFormSchema),
    defaultValues: {
      message: "",
      file: null,
    },
  });

  interface EmojiObject {
    emoji: string;
  }

  const handleEmojiClick = (emojiObject: EmojiObject) => {
    form.setValue("message", form.getValues("message") + emojiObject.emoji);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const noContent = !form.getValues("message") && !image;

  const onSubmit = (data: MessageFormProps) => {
    const { message } = data;

    if (noContent) return;
    if (statut === "invisible") {
      setError("Vous ne pouvez pas envoyer de message en mode fantôme");
      return;
    }

    const roomId = room.id.toString();
    const formData = new FormData();

    formData.append("message", message);
    formData.append("roomId", roomId);
    if (image) {
      formData.append("image", image);
    }
    mutation.mutate(formData);
    form.reset();
    setImage(null);
    setError(null);
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
            className="absolute top-0 right-0 z-10 p-0 h-6 w-6"
            onClick={() => setImage(null)}
          >
            <Icons.close width={16} height={16} />
          </Button>
        </div>
      )}
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative flex flex-col sm:flex-row  gap-4 mt-1 mb-1 xl:mt-4 xl:mb-4"
      >
        {openEmoji && (
          <div className="absolute z-20 bottom-32 sm:bottom-20 right-0 sm:right-2 ">
            <Button
              type="button"
              className="relative left-0 top-1 rounded-bl-none rounded-br-none"
              onClick={() => setOpenEmoji(false)}
            >
              <Icons.close width="18" height="18" />
            </Button>
            <EmojiPicker onEmojiClick={handleEmojiClick} width={280} />
          </div>
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
                    "resize-none min-h-[44px] h-11 scrollbar-webkit scrollbar-firefox"
                  )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-2">
          <FormField
            control={form.control}
            name="file"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-8 bg-primary text-primary-foreground hover:bg-primary/80 p-2 w-11 h-11 cursor-pointer"
                  tabIndex={0}
                  aria-label="Joindre un fichier"
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
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="button"
            size="message"
            onClick={() => setOpenEmoji(!openEmoji)}
          >
            <Icons.emoji
              aria-label={openEmoji ? "Fermer les emojis" : "Ouvrir les emojis"}
            />
          </Button>
          <Button
            type="submit"
            size="message"
            className="ml-auto"
            disabled={noContent}
          >
            <Icons.send aria-label="Envoyer" />
          </Button>
        </div>
      </form>
      {error && statut === "invisible" && <p className="error">{error}</p>}
    </Form>
  );
};

export default SendMessage;
