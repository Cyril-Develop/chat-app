export interface MessageProps {
  message: {
    id: number;
    message: string;
    createdAt: string;
    image?: string;
    user: {
      id: number;
      username: string;
      profileImage: string;
    };
  };
}

export interface MessagesProviderProps {
  messages: {
    id: number;
    message: string;
    createdAt: string;
    image?: string;
    user: {
      id: number;
      username: string;
      profileImage: string;
    };
  }[];
}

interface Recipient {
  type: "room" | "user";
  id: number;
}

export interface SendMessageProps {
  recipient: Recipient;
}

export interface EmojiObject {
  emoji: string;
}

export interface MessageFormProps {
  message: string;
  file: File | null;
}
