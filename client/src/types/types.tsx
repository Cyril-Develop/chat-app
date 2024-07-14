export interface UserState {
  token: string | null;
  statut: "online" |"invisible";
  setStatut: (statut: "online" |"invisible") => void;
  setToken: (token: string) => void;
  logout: () => void;
}

export interface RoomState {
  room: number | null;
  setRoom: (room: number | null) => void;
}

export interface UserInfos {
  id: number;
  username: string;
  email: string;
  bio: string;
  profileImage: string;
  createdAt: string;
  notification: string;
}
