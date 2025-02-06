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
  messages?: Message[];
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

export interface SheetLeftProps {
  currentUser: {
    id: number;
    username: string;
    friendsList: { id: number; username: string }[];
  };
}

export interface SearchUserProps {
  id: number;
  username: string;
}

export interface receivedFriendRequests {
  id: number;
  sender: {
    id: number;
    sender: {
      id: number;
      username: string;
      profileImage: string;
    };
  };
}

export interface Friend {
  id: number;
}

export interface FriendList {
  friend: Friend;
  id?: number;
}

export interface Users {
  id: number;
  username: string;
  profileImage: string;
  friends: FriendList[];
  receivedFriendRequests: receivedFriendRequests[];
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

export interface UpdateRelationship {
  user: {
    id: number;
    createdAt: string;
    email: string;
    password: string;
    username: string;
    bio: string;
    profileImage: string;
    notification: string;
    role: string;
  };
  friend: {
    id: number;
    createdAt: string;
    email: string;
    password: string;
    username: string;
    bio: string;
    profileImage: string;
    notification: string;
    role: string;
  };
}

export interface MessageFromSocket {
  id: number;
  message: string;
  image?: string;
  createdAt: string;
  userId: number;
  username: string;
  profileImage: string;
}
