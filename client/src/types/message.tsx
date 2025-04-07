import { UseFormReturn } from "react-hook-form";

export interface MessageProps {
  message: {
    createdAt: string;
    id: number;
    image?: string;
    likes?: { userId: number; username: string; gender: "HOMME" | "FEMME" }[];
    message: string;
    user: {
      id: number;
      username: string;
      profileImage: string;
      gender: "HOMME" | "FEMME";
    };
    receiver?: {
      id: number;
      username: string;
      profileImage: string;
    };
  };
  type: "private" | "room";
}

export interface LikeFromSocket {
  userId: number;
  gender: "HOMME" | "FEMME";
  username: string;
  messageId: number;
  roomId?: number;
  receiverId?: number;
  senderId?: number;
}

export interface HandleEmojiPickerProps {
  form: UseFormReturn<any>;
  setOpenEmoji: (open: boolean) => void;
}

export interface SendMessageSocketProps {
  chatRoomId: number;
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
    createdAt: string;
    id: number;
    image?: string;
    likes?: { userId: number; username: string, gender: "HOMME" | "FEMME"; }[];
    message: string;
    user: {
      id: number;
      username: string;
      profileImage: string;
      gender: "HOMME" | "FEMME";
    };
    receiver?: {
      id: number;
      username: string;
      profileImage: string;
      gender: "HOMME" | "FEMME";
    };
  }[];
  type: "private" | "room";
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
