import { Icons } from "../Icons";
import { Button } from "../ui/button";
import EmojiPicker, { Theme } from "emoji-picker-react";
import { useTheme } from "@/components/theme-provider";
import { EmojiObject, HandleEmojiPickerProps } from "@/types/message";

export default function HandleEmojiPicker({
  form,
  setOpenEmoji,
}: HandleEmojiPickerProps) {
  const { theme } = useTheme();

  const handleEmojiClick = (emojiObject: EmojiObject) => {
    form.setValue("message", form.getValues("message") + emojiObject.emoji);
    setOpenEmoji(false);
  };

  return (
    <div className="absolute z-20 bottom-32 sm:bottom-20 right-0 sm:right-2">
      <Button
        type="button"
        className="relative left-0 top-1 rounded-bl-none rounded-br-none"
        onClick={() => setOpenEmoji(false)}
      >
        <Icons.close width="18" height="18" />
      </Button>
      <EmojiPicker
        onEmojiClick={handleEmojiClick}
        width={280}
        theme={theme === "dark" ? Theme.DARK : Theme.LIGHT}
      />
    </div>
  );
}
