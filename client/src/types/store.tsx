export interface UserState {
  token: string | null;
  statut: "online" | "spy";
  role: "USER" | "ADMIN" | "GUEST";
  setStatut: (statut: "online" | "spy") => void;
  setToken: (token: string | null) => void;
  setRole: (role: "USER" | "ADMIN" | "GUEST") => void;
  logout: () => void;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: { id: number; role: "USER" | "ADMIN" | "GUEST" } | null;
  visible: boolean;
  setAuthentication: (
    isAuthenticated: boolean,
    user: { id: number; role: "USER" | "ADMIN" | "GUEST" } | null,
  ) => void;
  setVisible: (visible: boolean) => void;
  initializeAuth: () => void;
}

export interface Room {
  id: number | null;
  name: string | null;
}

export interface RoomState {
  room: Room | null;
  setRoom: (room: Room | null) => void;
}
