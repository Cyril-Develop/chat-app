export interface ContactFormProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FriendsListProps {
  friendsList: { id: number; username: string }[];
}

export interface ContactProps {
  currentUser: {
    id: number;
    friendsList: { id: number; username: string }[];
  };
}

export interface FriendProps {
  id: number;
  username: string;
}
