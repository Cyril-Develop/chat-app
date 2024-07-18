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

export interface SendMessageProps {
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

export interface EmojiObject {
  emoji: string;
}

export interface MessageFormProps {
  message: string;
  file: File | null;
}
