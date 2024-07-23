export interface HeaderRoomProps {
  room: {
    id: number;
    name: string;
    createdBy: number;
  };
  currentUser: {
    id: number;
  };
}

export interface RoomProps {
  roomId: number;
  currentUser: {
    id: number;
    username: string;
    profileImage: string;
  };
}

export interface Message {
  id: number;
  message: string;
  image?: string;
  createdAt: string;
  user: {
    id: number;
    username: string;
    profileImage: string;
  };
}

export interface CurrentUser {
  id: string;
  username: string;
}

export interface Friend {
  id: string;
}

export interface FriendList {
  friend: Friend;
}

export interface Users {
  id: string;
  username: string;
  profileImage: string;
  friends: FriendList[];
}

export interface PrivateChatProps {
  contactId: number;
}

export interface HeaderChatProps {
  contactInfos: {
    id: number;
    username: string;
    profileImage: string;
    bio: string;
    createdAt: string;
  };
}