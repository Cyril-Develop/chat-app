export interface FriendsListProps {
  friendsList: { id: number; username: string }[];
}

export interface FriendProps {
  id: number;
  username: string;
  profileImage: string;
  sex: "MALE" | "FEMALE" | "NON_BINARY" | "UNDISCLOSED";
}

export interface BlockedUsersProps {
  id: number;
  username: string;
  sex: "MALE" | "FEMALE" | "NON_BINARY" | "UNDISCLOSED";
}

export interface FriendRequest {
  id: number;
  status: string;
  sender: {
    id: number;
    username: string;
    sex: "MALE" | "FEMALE" | "NON_BINARY" | "UNDISCLOSED";
    profileImage: string;
  };
  receiver: {
    id: number;
    username: string;
    profileImage: string;
  };
  createdAt: string;
}

export interface FriendRequestAcceptedProps {
  senderId: number;
  receiverId: number;
  senderName: string;
  receiverName: string;
}
