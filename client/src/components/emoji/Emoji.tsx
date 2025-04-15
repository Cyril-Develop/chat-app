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
}: {
  onSelect: (emoji: string) => void;
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Popover onOpenChange={setIsOpen} open={isOpen}>
      <PopoverTrigger asChild>
        <Button type="button" size="message" title="Emojis">
          <Icons.emoji />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit p-0" align="end" sideOffset={10}>
        <EmojiPicker
          className="h-[350px] w-[280px]"
          onEmojiSelect={({ emoji }) => {
            onSelect(emoji);
            setIsOpen(false);
          }}
        >
          <EmojiPickerSearch />
          <EmojiPickerContent />
        </EmojiPicker>
      </PopoverContent>
    </Popover>
  );
}
