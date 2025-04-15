import React, { useState, createContext, useContext } from "react";
import { EMOJIS } from "@/components/emoji/emoji-list";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Icons } from "../Icons";
import { cn } from "@/lib/utils";

type EmojiContextType = {
  search: string;
  setSearch: (s: string) => void;
  onSelect: (emoji: string) => void;
};

const EmojiContext = createContext<EmojiContextType | undefined>(undefined);

export function useEmojiContext() {
  const ctx = useContext(EmojiContext);
  if (!ctx) throw new Error("useEmojiContext must be used within EmojiPicker");
  return ctx;
}

export function EmojiPicker({
  children,
  onEmojiSelect,
  className,
}: {
  children: React.ReactNode;
  onEmojiSelect: ({ emoji }: { emoji: string }) => void;
  className?: string;
}) {
  const [search, setSearch] = useState("");

  const handleSelect = (emoji: string) => {
    onEmojiSelect({ emoji });
  };

  return (
    <EmojiContext.Provider
      value={{ search, setSearch, onSelect: handleSelect }}
    >
      <div className={className + " p-4 space-y-2"}>{children}</div>
    </EmojiContext.Provider>
  );
}

export function EmojiPickerSearch() {
  const { search, setSearch } = useEmojiContext();

  return (
    <div className="flex items-center space-x-2 px-2 rounded-md border border-input dark:border-secondary-foreground">
      <Label
        className="text-sm text-muted-foreground"
        htmlFor="emoji-search"
        aria-label="Rechercher un emoji"
      >
        <Icons.search />
      </Label>
      <Input
        type="text"
        id="emoji-search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Rechercher un emoji..."
        className={cn(
          "w-full h-11 text-sm border-b-2 px-2 py-1 bg-transparent dark:bg-transparent border-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
        )}
      />
    </div>
  );
}

export function EmojiPickerContent() {
  const { search, onSelect } = useEmojiContext();

  return (
    <div className="space-y-4 h-[265px] overflow-y-scroll scrollbar-webkit scrollbar-firefox">
      {Object.entries(EMOJIS).map(([category, emojis]) => {
        const filtered = emojis.filter((e) =>
          e.name.toLowerCase().includes(search.toLowerCase())
        );

        if (filtered.length === 0) return null;

        return (
          <div key={category} className="space-y-2 mt-2">
            <h3 className="text-sm text-muted-foreground">{category}</h3>
            <div className="grid grid-cols-6 text-2xl">
              {filtered.map((emoji) => (
                <Button
                  variant="btn"
                  key={emoji.symbol}
                  onClick={() => onSelect(emoji.symbol)}
                >
                  <span className="text-2xl" title={emoji.name}>
                    {emoji.symbol}
                  </span>
                </Button>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
