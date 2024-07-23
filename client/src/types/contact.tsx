export interface FriendsListProps {
  friendsList: { id: number; username: string }[];
}

export interface ContactProps {
  currentUser: { friendsList: { id: number; username: string }[] };
}

export interface FriendProps {
  id: number;
  username: string;
}
