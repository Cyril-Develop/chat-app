export interface UserState {
  token: string | null;
  statut: "online" | "spy";
  setStatut: (statut: "online" | "spy") => void;
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

export interface User {
  id: number;
  username: string;
  profileImage: string;
  roomId: number;
  statut: string;
}

export interface RoomUsersProps {
  usersInRoom: User[];
  users: {
    userId: number;
    socketId: string;
    statut: string;
  }[];
}
