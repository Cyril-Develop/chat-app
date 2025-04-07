export interface UserInfos {
  id: number;
  username: string;
  email: string;
  gender: "HOMME" | "FEMME";
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

export interface BlockedUsersProps {
  blockedUsers: UserInfos[];
}
