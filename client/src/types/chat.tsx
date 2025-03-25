export interface HeaderRoomProps {
  room: {
    id: number;
    name: string;
    createdBy: number;
  };
  currentUser: {
    id: number;
    role: string;
  };
}

export interface RoomProps {
  roomId: number;
  currentUser: {
    id: number;
    username: string;
    profileImage: string;
    role: string;
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

export interface ChatUnselectedProps {
  role: "USER" | "ADMIN" | "GUEST";
}

export interface SheetLeftProps {
  currentUser: {
    bio: string;
    createdAt: string;
    friendOf: [];
    friends: [];
    id: number;
    profileImage: string;
    receivedFriendRequests: [];
    role: string;
    sentFriendRequests: [];
    username: string;
    friendsList: { id: number; username: string }[];
  };
}

export interface SearchUserProps {
  bio: string;
  createdAt: string;
  friendOf: [];
  friends: [];
  id: number;
  profileImage: string;
  receivedFriendRequests: [];
  role: string;
  sentFriendRequests: [];
  username: string;
}

export interface ReceivedFriendRequests {
  id: number;
  sender: {
    id: number;
    status: string;
    sender: {
      id: number;
      username: string;
      profileImage: string;
    };
  };
}

export interface SentFriendRequests {
  id: number;
  receiver: {
    id: number;
    status: string;
    receiver: {
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
  receivedFriendRequests: ReceivedFriendRequests[];
  sentFriendRequests: SentFriendRequests[];
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
