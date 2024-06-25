export interface UserState {
  token: string | null;
  setToken: (token: string) => void;
  logout: () => void;
}

export interface RoomState {
  room: number | null;
  setRoom: (room: number) => void;
}

export interface UserInfos {
  id: string;
  username: string;
  email: string;
  bio: string;
  profileImage: string;
  createdAt: string;
  notification: string;
}
