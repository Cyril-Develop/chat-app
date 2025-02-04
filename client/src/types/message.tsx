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
    receiverId?: number;
  };
}

export interface PrivateMessageProps {
  id: number;
  message: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  userId: number;
  receiverId: number;
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