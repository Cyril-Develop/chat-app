export interface FriendsListProps {
  friendsList: { id: number; username: string }[];
}

export interface FriendProps {
  id: number;
  username: string;
  gender: "HOMME" | "FEMME" | "AUTRE";
}

export interface BlockedUsersProps {
  id: number;
  username: string;
  gender: "HOMME" | "FEMME" | "AUTRE";
}

export interface FriendRequest {
  id: number;
  status: string;
  sender: {
    id: number;
    username: string;
    gender: "HOMME" | "FEMME" | "AUTRE";
    profileImage: string;
  };
  receiver: {
    id: number;
    username: string;
    profileImage: string;
  };
  createdAt: string;
}

export interface CurrentUserId {
  id: number;
}
export interface FriendRequestAcceptedProps {
  senderId: number;
  receiverId: number;
  senderName: string;
  receiverName: string;
}
