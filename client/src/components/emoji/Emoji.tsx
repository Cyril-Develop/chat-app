import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  EmojiPicker,
  EmojiPickerSearch,
  EmojiPickerContent,
} from "@/components/emoji/emoji-picker";
import { Icons } from "@/components/Icons";

export default function Emoji({
  onSelect,
  variant = "default",
  size = "message",
}: {
  onSelect: (emoji: string) => void;
  variant?:
    | "default"
    | "outline"
    | "destructive"
    | "alert"
    | "btn"
    | "linkForm"
    | "btnMenu"
    | "success";
  size?: "message" | "icon";
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Popover onOpenChange={setIsOpen} open={isOpen} modal={true}>
      <PopoverTrigger asChild>
        <Button type="button" variant={variant} size={size} title="Emojis">
          <Icons.emoji />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit p-0" align="end" sideOffset={10}>
        <EmojiPicker
          className="h-[350px] w-[280px]"
          onEmojiSelect={({ emoji }) => {
            onSelect(emoji);
          }}
        >
          <EmojiPickerSearch />
          <EmojiPickerContent />
        </EmojiPicker>
      </PopoverContent>
    </Popover>
  );
}
