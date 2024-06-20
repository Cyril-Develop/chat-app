import { Icons } from "@/components/Icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";

const SendMessage = () => {
  const [openEmoji, setOpenEmoji] = useState(false);
  const [message, setMessage] = useState("");

  interface EmojiObject {
    emoji: string;
  }

  const handleEmojiClick = (emojiObject: EmojiObject) => {
    setMessage((prevMessage) => prevMessage + emojiObject.emoji);
  };

  return (
    <div className="relative">
      <Separator />
      <div className="flex items-center gap-4 mt-4 mb-4">
        <Input
          type="text"
          placeholder="Message..."
          value={message}
          aria-label="Envoyer un message"
          onChange={(e) => setMessage(e.target.value)}
        />
        {openEmoji && (
          <div className="absolute bottom-full right-0">
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </div>
        )}
        <Button onClick={() => setOpenEmoji(!openEmoji)}>
          <Icons.emoji
            aria-label={openEmoji ? "Fermer les emojis" : "Ouvrir les emojis"}
          />
        </Button>
        <Button>
          <Icons.send aria-label="Envoyer" />
        </Button>
      </div>
    </div>
  );
};

export default SendMessage;
