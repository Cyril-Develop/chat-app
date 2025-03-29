import { UseFormReturn } from "react-hook-form";

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
    receiver?: {
      id: number;
      username: string;
      profileImage: string;
    };
    isRead?: boolean;
  };
}

export interface HandleEmojiPickerProps {
  form: UseFormReturn<any>;
  setOpenEmoji: (open: boolean) => void;
}

export interface PrivateMessageProps {
  id: number;
  message: string;
  image: string;
  createdAt: string;
  isRead: boolean;
  user: {
    id: number;
    username: string;
    profileImage: string;
  };
  receiver: {
    id: number;
    username: string;
    profileImage: string;
  };
}

export interface NotificationProps {
  messageId: number;
  senderId: number;
  receiverId: number;
}

export interface UnreadMessagesProps {
  id: number;
  message: string;
  image?: string;
  createdAt: string;
  user: {
    id: number;
  };
  receiver: {
    id: number;
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

export interface SendMessagePrivateProps {
  recipient: Recipient;
}

export interface EmojiObject {
  emoji: string;
}

export interface MessageFormProps {
  message: string;
  file: File | null;
}

export interface PrivateMessageFormProps {
  message: string;
  file: File | null;
  receiverId: number;
}
