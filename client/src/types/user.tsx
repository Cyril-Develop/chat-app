export interface UserInfos {
  id: number;
  username: string;
  email: string;
  bio: string;
  profileImage: string;
  createdAt: string;
  notification: string;
  visible: boolean;
  role: string;
}

export interface HandleUserStatusChangedProps {
  userId: number;
  visible: boolean;
}

export interface BlockedUsersState {
  id: number;
  username: string;
  profileImage: string;
}

export interface BlockedUsersProps {
  blockedUsers: BlockedUsersState[];
}
