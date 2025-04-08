export interface FriendsListProps {
  friendsList: { id: number; username: string }[];
}

export interface FriendProps {
  id: number;
  username: string;
  gender: "HOMME" | "FEMME";
}

export interface BlockedUsersProps {
  id: number;
  username: string;
  gender: "HOMME" | "FEMME";
}

export interface FriendRequest {
  id: number;
  status: string;
  sender: {
    id: number;
    username: string;
    gender: "HOMME" | "FEMME";
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
