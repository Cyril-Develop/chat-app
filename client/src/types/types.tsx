export interface UserState {
  token: string | null;
  statut: "online" | "busy" | "away";
  setToken: (token: string) => void;
  setStatut: (status: "online" | "busy" | "away") => void;
  logout: () => void;
}

export interface RoomState {
  room: number | null;
  setRoom: (room: number | null) => void;
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
